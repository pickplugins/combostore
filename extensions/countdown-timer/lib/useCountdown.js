"use client";

import React from "react";

import { useCountdownStore, findCampaign } from "./store";
import { resolveCampaign } from "./campaign";
import { subscribeToTicker } from "./ticker";
import { EMPTY_PARTS } from "./time";

/**
 * A campaign id to a ticking countdown.
 *
 * The `pending` status before mount is the whole reason this is a hook
 * rather than a calculation in the render body. A countdown is different on
 * every render by definition, so whatever the server puts in the HTML is
 * already wrong by the time the browser reads it - and if the first client
 * render disagreed with that HTML, React would leave the page showing
 * markup the client never agreed with. So nothing counts until after mount,
 * and the blocks draw placeholders in the meantime.
 */
export function useCountdown(campaignId) {

	const settings = useCountdownStore((s) => s.settings);
	const seen = useCountdownStore((s) => s.seen);
	const seenHydrated = useCountdownStore((s) => s.seenHydrated);
	const markSeen = useCountdownStore((s) => s.markSeen);

	const campaign = React.useMemo(
		() => findCampaign(settings, campaignId),
		[settings, campaignId]
	);

	/* Null until mounted, which is what `pending` is read from. */
	const [now, setNow] = React.useState(null);

	React.useEffect(() => {
		setNow(Date.now());
		return subscribeToTicker(setNow);
	}, []);

	/*
		Start this visitor's evergreen clock.

		Only once the stored stamps are in, or a returning shopper's first
		render would stamp over the real one and hand them a fresh window on
		every visit.
	*/
	React.useEffect(() => {
		if (campaign?.kind === "evergreen" && campaign.enabled !== false && seenHydrated) {
			markSeen(campaign.id);
		}
	}, [campaign, seenHydrated, markSeen]);

	const resolved = React.useMemo(() => {
		if (now === null) return { status: "pending", deadline: null, parts: EMPTY_PARTS };
		return resolveCampaign(campaign, settings, seen, now);
	}, [campaign, settings, seen, now]);

	return { ...resolved, campaign, labels: settings?.labels };
}
