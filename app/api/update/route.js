/**
 * One-click dashboard updates.
 *
 * Every store's Vercel project builds from the same GitHub repo, with
 * "Auto-assign Custom Production Domains" switched off at onboarding, so a push
 * produces a finished production build that does not go live on its own. This
 * route finds the build made from the latest GitHub release and promotes it -
 * no rebuild, the domain just switches over.
 *
 *   GET  -> { configured, currentSha, latest, ready, upToDate }
 *   POST -> promotes the ready build for the latest release
 *
 * Both are admin-only: the caller's JWT is checked against WordPress the same
 * way auth-context does it. The Vercel token is the store owner's own, kept in
 * server-only env vars written by the onboarding wizard (combostore-admin):
 *
 *   COMBOSTORE_VERCEL_TOKEN       sensitive, never sent to the browser
 *   COMBOSTORE_VERCEL_PROJECT_ID
 *   COMBOSTORE_VERCEL_TEAM_ID     optional
 *   COMBOSTORE_GITHUB_TOKEN       optional; raises GitHub's 60 req/h limit,
 *                                 required if the repo is private
 *
 * The deployment to promote is always looked up here, never taken from the
 * request, so a caller cannot point production at an arbitrary deployment.
 */

const RELEASE_REPO = "pickplugins/combostore";

const env = () => ({
	vercelToken: process.env.COMBOSTORE_VERCEL_TOKEN,
	projectId: process.env.COMBOSTORE_VERCEL_PROJECT_ID,
	teamId: process.env.COMBOSTORE_VERCEL_TEAM_ID,
	githubToken: process.env.COMBOSTORE_GITHUB_TOKEN,
	/* Vercel system variable: the commit the running deployment was built from. */
	currentSha: process.env.VERCEL_GIT_COMMIT_SHA || null,
});

const json = (body, status = 200) => Response.json(body, { status });

async function requireAdmin(request) {
	const auth = request.headers.get("authorization") || "";
	if (!/^Bearer\s+\S+/i.test(auth) || /^Bearer\s+(null|undefined)$/i.test(auth)) {
		return "Not signed in.";
	}

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}wp-json/combo-store/v2/get_user`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: auth },
			body: "{}",
			cache: "no-store",
		}
	).catch(() => null);

	if (!res?.ok) return "Session could not be verified.";
	const data = await res.json().catch(() => null);
	if (!data?.user?.roles?.includes("administrator")) return "Administrators only.";
	return null;
}

async function latestRelease(githubToken) {
	const headers = {
		Accept: "application/vnd.github+json",
		...(githubToken && { Authorization: `Bearer ${githubToken}` }),
	};
	/* Cached briefly so a dashboard full of open tabs does not burn the limit. */
	const opts = { headers, next: { revalidate: 300 } };

	const relRes = await fetch(`https://api.github.com/repos/${RELEASE_REPO}/releases/latest`, opts);
	if (!relRes.ok) return null;
	const release = await relRes.json();
	if (!release?.tag_name) return null;

	const commitRes = await fetch(
		`https://api.github.com/repos/${RELEASE_REPO}/commits/${encodeURIComponent(release.tag_name)}`,
		opts
	);
	if (!commitRes.ok) return null;
	const commit = await commitRes.json();

	return {
		tag: release.tag_name,
		name: release.name || release.tag_name,
		sha: commit?.sha || null,
		url: release.html_url,
	};
}

/* The newest READY production build made from `sha`, or null if it has not finished. */
async function readyDeployment({ vercelToken, projectId, teamId }, sha) {
	const qs = new URLSearchParams({
		projectId,
		target: "production",
		state: "READY",
		limit: "50",
		...(teamId && { teamId }),
	});
	const res = await fetch(`https://api.vercel.com/v6/deployments?${qs}`, {
		headers: { Authorization: `Bearer ${vercelToken}` },
		cache: "no-store",
	});
	if (!res.ok) {
		const data = await res.json().catch(() => ({}));
		throw new Error(`Vercel: ${data.error?.message || res.status}`);
	}
	const { deployments = [] } = await res.json();
	const match = deployments.find((d) => d.meta?.githubCommitSha === sha);
	return match ? { id: match.uid, url: match.url, createdAt: match.createdAt } : null;
}

async function status(request) {
	const denied = await requireAdmin(request);
	if (denied) return { error: json({ error: denied }, 403) };

	const cfg = env();
	if (!cfg.vercelToken || !cfg.projectId) {
		return { error: json({ configured: false }) };
	}

	const latest = await latestRelease(cfg.githubToken);
	if (!latest?.sha) {
		return { error: json({ configured: true, currentSha: cfg.currentSha, latest: null, upToDate: true }) };
	}

	const upToDate = Boolean(cfg.currentSha) && cfg.currentSha === latest.sha;
	const ready = upToDate ? null : await readyDeployment(cfg, latest.sha);

	return { cfg, body: { configured: true, currentSha: cfg.currentSha, latest, ready, upToDate } };
}

export async function GET(request) {
	try {
		const { error, body } = await status(request);
		return error || json(body);
	} catch (err) {
		return json({ error: err.message }, 502);
	}
}

export async function POST(request) {
	try {
		const { error, cfg, body } = await status(request);
		if (error) return error;
		if (body.upToDate) return json({ ok: true, alreadyCurrent: true });
		if (!body.ready) {
			return json({ error: "The new version is still building on Vercel. Try again in a few minutes." }, 409);
		}

		const qs = cfg.teamId ? `?teamId=${encodeURIComponent(cfg.teamId)}` : "";
		const res = await fetch(
			`https://api.vercel.com/v10/projects/${encodeURIComponent(cfg.projectId)}/promote/${body.ready.id}${qs}`,
			{ method: "POST", headers: { Authorization: `Bearer ${cfg.vercelToken}` } }
		);
		if (!res.ok) {
			const data = await res.json().catch(() => ({}));
			return json({ error: `Vercel: ${data.error?.message || res.status}` }, 502);
		}

		return json({ ok: true, promoted: body.ready.id, version: body.latest.tag });
	} catch (err) {
		return json({ error: err.message }, 502);
	}
}
