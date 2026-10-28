/**
 * Campaign shapes, defaults, and the labels the blocks print.
 */

/**
 * The three kinds of deadline, and what each one needs.
 *
 * Declared as a catalogue so the settings screen renders a campaign's
 * fields from the same object that describes it. A kind added here gets its
 * inputs with no change to the screen.
 */
export const CAMPAIGN_KINDS = {

	fixed: {
		label: "Ends at a date and time",
		hint: "A sale with an end. The same moment for every shopper, wherever they are.",
		fields: ["endDate", "endTime"],
	},

	daily: {
		label: "A cutoff every day",
		hint: "\"Order within 3h 20m for same-day dispatch.\" Rolls to the next working day once it has passed.",
		fields: ["cutoff", "days"],
	},

	evergreen: {
		label: "Starts when the shopper arrives",
		hint: "A window that opens on their first visit and does not reopen. Per browser, so it is a nudge, not a deadline you can enforce.",
		fields: ["durationMinutes"],
	},
};

export const KIND_OPTIONS = Object.entries(CAMPAIGN_KINDS).map(([value, k]) => ({
	value,
	label: k.label,
}));

export const WEEKDAYS = [
	{ value: 0, short: "Sun" },
	{ value: 1, short: "Mon" },
	{ value: 2, short: "Tue" },
	{ value: 3, short: "Wed" },
	{ value: 4, short: "Thu" },
	{ value: 5, short: "Fri" },
	{ value: 6, short: "Sat" },
];

/** What a block does once the clock reaches zero. */
export const EXPIRED_ACTIONS = [
	{ value: "hide", label: "Disappear" },
	{ value: "message", label: "Show a message instead" },
	{ value: "zeros", label: "Sit at zero" },
];

export function blankCampaign() {
	return {
		id: `cd_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`,
		label: "",
		kind: "fixed",

		/* fixed */
		endDate: "",
		endTime: "23:59",

		/* daily */
		cutoff: "14:00",
		days: [0, 1, 2, 3, 4],

		/* evergreen */
		durationMinutes: 30,

		/* Before this, the timer is not shown at all. Blank means "from now
		   on", which is what most campaigns want. */
		startDate: "",
		startTime: "00:00",

		expiredAction: "hide",
		expiredMessage: "This offer has ended.",

		enabled: true,
	};
}

export const DEFAULT_SETTINGS = {

	/* Nothing until the merchant adds something. An installed but
	   unconfigured extension changes nothing a shopper sees. */
	campaigns: [],

	/*
		The zone every fixed date and daily cutoff is read in.

		Not the shopper's. "Ends 23:59 on the 15th" has to be one moment, or
		the sale closes at a different time in every country and each
		shopper's own countdown looks perfectly consistent while they
		disagree with each other.
	*/
	timeZone: "Asia/Dhaka",

	labels: {
		days: "Days",
		hours: "Hours",
		minutes: "Mins",
		seconds: "Secs",
	},
};
