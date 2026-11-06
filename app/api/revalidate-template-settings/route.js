import { revalidateTag } from "next/cache";

/*
	Drops the storefront's cached template settings (fonts, colors), which
	components/TemplateThemeStyle.jsx keeps for a minute under the
	"template-settings" tag. The builder calls this after saving a template's
	settings or switching the active template, so the shop shows the change on
	its next request instead of up to a minute later.

	Unauthenticated on purpose and harmless: all it can do is make the next
	page view fetch the (public) settings again.
*/
export const dynamic = "force-dynamic";

export async function POST() {
	revalidateTag("template-settings", { expire: 0 });
	return Response.json({ success: true });
}
