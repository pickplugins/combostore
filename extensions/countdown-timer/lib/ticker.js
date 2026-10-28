/**
 * One clock for every countdown on the page.
 *
 * A page can carry a bar at the top, a timer on each card in a grid and one
 * beside the Add to Cart button. Giving each its own `setInterval` means
 * twenty timers waking the browser twenty times a second between them, and
 * they drift apart - two timers showing the same deadline tick over to the
 * next second visibly at different moments, which looks broken.
 *
 * So: one interval, one list of subscribers, started with the first and
 * stopped with the last.
 */

"use client";

const subscribers = new Set();

let intervalId = null;
let alignId = null;

function tick() {
	const now = Date.now();
	/* Copied first: a subscriber that unsubscribes in response to its own
	   tick - a timer that has just expired and hides itself - would
	   otherwise be mutating the set being iterated. */
	for (const fn of Array.from(subscribers)) {
		try {
			fn(now);
		} catch (e) {
			/* One broken timer must not stop the others from ticking. */
			console.warn("[extensions] countdown-timer: a tick handler failed -", e);
		}
	}
}

function start() {
	if (intervalId || alignId) return;

	/*
		Line up with the second boundary before settling into a steady beat.

		Started at an arbitrary moment, a one-second interval ticks at, say,
		.37 of every second, so a timer can show the same number for up to
		two seconds and then skip one. Waiting out the remainder first means
		every timer changes when the clock does.
	*/
	alignId = setTimeout(() => {
		alignId = null;
		tick();
		intervalId = setInterval(tick, 1000);
	}, 1000 - (Date.now() % 1000));
}

function stop() {
	if (alignId) { clearTimeout(alignId); alignId = null; }
	if (intervalId) { clearInterval(intervalId); intervalId = null; }
}

/*
	A background tab has its timers throttled to once a minute or stopped
	outright, so a timer returned to after a while is stale. Nothing has to
	be rewound for that - every tick reads the clock rather than counting
	down from the last one - it just needs a tick the moment the tab is
	looked at again.
*/
let watchingVisibility = false;

function watchVisibility() {
	if (watchingVisibility || typeof document === "undefined") return;
	watchingVisibility = true;
	document.addEventListener("visibilitychange", () => {
		if (!document.hidden && subscribers.size > 0) tick();
	});
}

/** Returns the unsubscribe function, which is what an effect wants back. */
export function subscribeToTicker(fn) {
	if (typeof fn !== "function") return () => {};

	subscribers.add(fn);
	watchVisibility();
	start();

	return () => {
		subscribers.delete(fn);
		if (subscribers.size === 0) stop();
	};
}

/** For tests and for the dashboard preview, which ticks without mounting. */
export function tickerSize() {
	return subscribers.size;
}
