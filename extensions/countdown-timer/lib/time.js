/**
 * Working out the instant a countdown is counting to.
 *
 * Pure: no React, no stores, no fetch. The same functions drive the timer on
 * the storefront, the preview on the settings screen, and the tests - a
 * deadline that can only be checked by waiting for it is a deadline nobody
 * checks.
 *
 * The whole file exists because of one requirement: a sale that ends at
 * midnight has to end at the same moment for everybody. Reading the
 * merchant's "31 Dec, 23:59" with `new Date(...)` in the shopper's browser
 * would end the sale at local midnight wherever they are - hours early in
 * Sydney and hours late in London - and each shopper's countdown would be
 * self-consistent, so nobody would report it as a bug.
 */

/* ------------------------------------------------------------------ */
/* timezones                                                           */
/* ------------------------------------------------------------------ */

/**
 * Formatters are built once per zone and kept.
 *
 * Constructing an `Intl.DateTimeFormat` is the expensive part of reading a
 * clock in another zone, and a daily cutoff resolves its deadline on every
 * tick - so without this a page of timers would be building formatters
 * several times a second to answer a question whose answer changes daily.
 * A store uses one or two zones, so the map never grows.
 */
const formatters = new Map();

function formatterFor(timeZone) {
	let formatter = formatters.get(timeZone);
	if (!formatter) {
		/*
			`hourCycle: "h23"`, not `hour12: false`.

			With `hour12: false` the hour after midnight formats as "24"
			rather than "00", which parses to the wrong day and puts a
			deadline 24 hours out.
		*/
		formatter = new Intl.DateTimeFormat("en-US", {
			timeZone,
			hourCycle: "h23",
			year: "numeric", month: "2-digit", day: "2-digit",
			hour: "2-digit", minute: "2-digit", second: "2-digit",
		});
		formatters.set(timeZone, formatter);
	}
	return formatter;
}

function partsInZone(instant, timeZone) {
	const formatter = formatterFor(timeZone);

	const out = {};
	for (const part of formatter.formatToParts(instant)) {
		if (part.type !== "literal") out[part.type] = parseInt(part.value, 10);
	}
	return out;
}

/** True when the runtime recognises the zone, so a typo can be reported. */
export function isValidTimeZone(timeZone) {
	if (!timeZone) return false;
	try {
		new Intl.DateTimeFormat("en-US", { timeZone });
		return true;
	} catch (e) {
		return false;
	}
}

/**
 * How far the zone is from UTC at a given instant, in minutes.
 *
 * At an instant, not in general: a zone that observes daylight saving is a
 * different distance from UTC in July than in January, and a deadline set in
 * one and resolved with the other is an hour wrong.
 */
export function zoneOffsetMinutes(instant, timeZone) {
	const p = partsInZone(instant, timeZone);
	const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
	return (asUtc - Math.floor(instant.getTime() / 1000) * 1000) / 60000;
}

/**
 * A wall-clock reading in a zone to the actual instant it names.
 *
 * Solved twice rather than once. The first guess uses the offset at the
 * wrong instant - the naive UTC reading of the same numbers - which is off
 * by an hour whenever the guess lands on the other side of a daylight-saving
 * change from the answer. The second pass re-reads the offset at the instant
 * the first produced, which is correct everywhere except inside the one
 * ambiguous hour a clock-back creates.
 */
export function zonedTimeToInstant(year, month, day, hour, minute, second, timeZone) {
	const naive = Date.UTC(year, month - 1, day, hour, minute, second);

	let guess = naive - zoneOffsetMinutes(new Date(naive), timeZone) * 60000;
	guess = naive - zoneOffsetMinutes(new Date(guess), timeZone) * 60000;

	return guess;
}

/** The date and time as read off a clock on the wall in that zone. */
export function wallClockIn(instant, timeZone) {
	return partsInZone(instant, timeZone);
}

/* ------------------------------------------------------------------ */
/* parsing what the merchant typed                                     */
/* ------------------------------------------------------------------ */

/**
 * `"2026-04-15"` + `"23:59"` to an instant, read in the store's zone.
 *
 * Returns null rather than NaN for anything unparseable, so a half-typed
 * date in the settings form is a timer that says nothing rather than one
 * that says "NaN days".
 */
export function parseDeadline(dateText, timeText, timeZone) {
	const date = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateText ?? "").trim());
	if (!date) return null;

	const time = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(String(timeText ?? "23:59").trim());
	if (!time) return null;

	const year = +date[1], month = +date[2], day = +date[3];
	const hour = +time[1], minute = +time[2], second = time[3] ? +time[3] : 0;

	if (month < 1 || month > 12 || day < 1 || day > 31) return null;
	if (hour > 23 || minute > 59 || second > 59) return null;

	return zonedTimeToInstant(year, month, day, hour, minute, second, timeZone);
}

export function parseClockTime(timeText) {
	const time = /^(\d{1,2}):(\d{2})$/.exec(String(timeText ?? "").trim());
	if (!time) return null;
	const hour = +time[1], minute = +time[2];
	if (hour > 23 || minute > 59) return null;
	return { hour, minute };
}

/* ------------------------------------------------------------------ */
/* the three kinds of deadline                                         */
/* ------------------------------------------------------------------ */

/**
 * The next time today's cutoff comes round.
 *
 * `days` is the weekdays the cutoff applies to, 0 for Sunday. A cutoff that
 * has already passed, or falls on a day not in the list, rolls forward to
 * the next day that is - so "dispatched same day if you order by 2pm,
 * weekdays only" says Monday's cutoff all weekend rather than counting to a
 * Saturday that never dispatches.
 *
 * Each candidate day is resolved through the zone separately instead of
 * adding 24 hours, because across a daylight-saving change a day is not 24
 * hours long and the cutoff would drift by an hour.
 */
export function nextDailyCutoff(now, cutoffText, days, timeZone) {
	const cutoff = parseClockTime(cutoffText);
	if (!cutoff) return null;

	const allowed = Array.isArray(days) && days.length > 0 ? days.map(Number) : [0, 1, 2, 3, 4, 5, 6];
	const start = partsInZone(now, timeZone);

	/* Eight, not seven: if today is allowed but its cutoff has gone, the
	   answer may be today-next-week, which is the eighth candidate. */
	for (let ahead = 0; ahead < 8; ahead++) {
		const candidateDay = new Date(Date.UTC(start.year, start.month - 1, start.day + ahead));
		const weekday = candidateDay.getUTCDay();
		if (!allowed.includes(weekday)) continue;

		const instant = zonedTimeToInstant(
			candidateDay.getUTCFullYear(),
			candidateDay.getUTCMonth() + 1,
			candidateDay.getUTCDate(),
			cutoff.hour, cutoff.minute, 0,
			timeZone
		);

		if (instant > now.getTime()) return instant;
	}

	return null;
}

/**
 * When an evergreen timer runs out for this visitor.
 *
 * `firstSeen` is when they first met it, kept in their own browser. Without
 * one there is nothing to count from, so the caller is told to stamp one
 * rather than this guessing - the stamp has to survive a page change, and
 * where it is kept is not this file's business.
 *
 * Once it has run out it stays run out for that visitor. There is
 * deliberately no "start again after a while": the version of that which
 * merchants ask for restarts the clock on each visit, so the offer never
 * actually ends and the urgency is a lie the shopper can catch by coming
 * back tomorrow. A genuinely recurring window is a `daily` campaign, which
 * ends when it says it ends.
 */
export function evergreenDeadline(firstSeen, minutes) {
	/* `Number(null)` is 0, which is finite - so a missing stamp has to be
	   rejected before the arithmetic, or an unstamped visitor gets a
	   deadline in 1970 and a timer that has always been over. */
	if (firstSeen === null || firstSeen === undefined || firstSeen === "") return null;

	const started = Number(firstSeen);
	const length = Number(minutes);
	if (!Number.isFinite(started) || !Number.isFinite(length) || length <= 0) return null;

	return started + length * 60000;
}

/* ------------------------------------------------------------------ */
/* what the block renders                                              */
/* ------------------------------------------------------------------ */

export const EMPTY_PARTS = Object.freeze({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });

/**
 * Milliseconds to days/hours/minutes/seconds.
 *
 * Clamped at zero, because a timer that has run out should read 00:00:00
 * and not start counting up. `Math.floor` on the clamped value, so the last
 * second shows "1" for its whole duration rather than flicking to 0 early.
 */
export function splitRemaining(milliseconds) {
	const total = Math.max(0, Math.floor(Number(milliseconds) || 0));
	const seconds = Math.floor(total / 1000);
	return {
		days: Math.floor(seconds / 86400),
		hours: Math.floor((seconds % 86400) / 3600),
		minutes: Math.floor((seconds % 3600) / 60),
		seconds: seconds % 60,
		total,
	};
}

export function pad(value, width = 2) {
	return String(Math.max(0, Math.floor(Number(value) || 0))).padStart(width, "0");
}

/**
 * The compact one-line form, for a bar or a sentence.
 *
 * Leading units are dropped once they are zero, so a timer under an hour
 * reads "14m 02s" rather than "0d 00h 14m 02s" - but a unit in the middle
 * is kept, because "2d 00h 05m" is a real duration and "2d 05m" reads as
 * two days and five minutes.
 */
export function formatCompact(parts, showSeconds = true) {
	const out = [];
	if (parts.days > 0) out.push(`${parts.days}d`);
	if (out.length || parts.hours > 0) out.push(`${pad(parts.hours)}h`);
	if (out.length || parts.minutes > 0) out.push(`${pad(parts.minutes)}m`);
	if (showSeconds || out.length === 0) out.push(`${pad(parts.seconds)}s`);
	return out.join(" ");
}
