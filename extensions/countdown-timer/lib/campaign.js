/**
 * A campaign plus the current moment, to a status and a deadline.
 *
 * Pure, and separate from the hook on purpose: this is the part with the
 * decisions in it, and it can be tested without mounting anything or
 * waiting for a clock.
 */

import { parseDeadline, nextDailyCutoff, evergreenDeadline, splitRemaining, EMPTY_PARTS } from "./time";

/**
 * `invalid`  nothing to count to - half-written, or switched off
 * `before`   configured, but its start date has not arrived
 * `running`  counting
 * `expired`  the moment has passed
 */
export function resolveCampaign(campaign, settings, seen, now) {
	const blank = { status: "invalid", deadline: null, parts: EMPTY_PARTS };

	if (!campaign || campaign.enabled === false) return blank;

	const timeZone = settings?.timeZone || "UTC";

	/* Not yet open. Checked before the deadline is worked out, so a campaign
	   dated for next month does not flash its timer in the meantime. */
	if (campaign.startDate) {
		const starts = parseDeadline(campaign.startDate, campaign.startTime || "00:00", timeZone);
		if (starts !== null && now < starts) {
			return { status: "before", deadline: null, parts: EMPTY_PARTS, startsAt: starts };
		}
	}

	let deadline = null;

	if (campaign.kind === "fixed") {
		deadline = parseDeadline(campaign.endDate, campaign.endTime, timeZone);

	} else if (campaign.kind === "daily") {
		deadline = nextDailyCutoff(new Date(now), campaign.cutoff, campaign.days, timeZone);

	} else if (campaign.kind === "evergreen") {
		/*
			No stamp means this browser has not been counted in yet. That is
			not a misconfiguration - the caller writes the stamp and the next
			tick picks it up - so it reads as `before` rather than `invalid`,
			and the block waits a frame instead of reporting a broken
			campaign.
		*/
		const firstSeen = seen?.[campaign.id];
		if (firstSeen === undefined) return { status: "before", deadline: null, parts: EMPTY_PARTS };
		deadline = evergreenDeadline(firstSeen, campaign.durationMinutes);
	}

	if (deadline === null || !Number.isFinite(deadline)) return blank;

	const remaining = deadline - now;
	if (remaining <= 0) return { status: "expired", deadline, parts: EMPTY_PARTS };

	return { status: "running", deadline, parts: splitRemaining(remaining) };
}
/*
	A daily cutoff is resolved on every tick rather than cached, so it rolls
	over to tomorrow the instant it passes instead of sitting at 00:00:00
	until something else forces a recompute. That is only affordable because
	time.js keeps its formatters - see the note there.
*/
