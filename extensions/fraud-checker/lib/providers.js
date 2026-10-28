/**
 * The fraud checks a merchant can configure, and the fields each one has.
 *
 * This is the whole of what used to live in SettingsGlobal.jsx as
 * `fraudCheckPrams` plus an 840-line run of near-identical JSX - one
 * `providerKey == '...'` branch per check, each hand-writing the same toggle
 * and the same number input against the same `settingsData.fraudCheck[key]`
 * path. The branches only ever differed in their label, their help text and
 * which keys they wrote, so they are a table here and one component renders
 * all of them.
 *
 * THE DATA SHAPE IS NOT NEW. Settings are still stored under `fraudCheck` in
 * the store settings blob, still keyed by the ids below, still with the same
 * field names (`enabled`, `order_count`, `service`, `score`). A store that
 * configured this before the move reads back unchanged, which is the point -
 * moving where the screen lives must not orphan what merchants already saved.
 *
 * Every check ships `comingSoon: true`, exactly as it did in core. Nothing in
 * the app reads `settings.fraudCheck` - it did not before this extension
 * existed either - so these are declarations of intent, and the screen says so
 * rather than implying an order is being screened when it is not.
 */

/* Field types the screen knows how to draw. Adding a check means adding a row
   below; it should not mean touching the screen. */
export const FIELD_TYPES = ['toggle', 'number', 'select'];

/**
 * The services a mobile fraud score can be fetched from.
 *
 * These match the API-key entries of the same ids on Settings → API Keys;
 * the key itself stays there, because that is where every other integration's
 * credentials live and splitting them would leave a merchant hunting.
 */
export const SCORE_SERVICES = [
	{ value: 'bdcourier', label: 'BD Courier (bdcourier.com)' },
	{ value: 'fraudchecker', label: 'Fraud Checker (fraudchecker.link)' },
];

export const PROVIDERS = [
	{
		id: 'loginRequired',
		label: 'Login Required',
		comingSoon: true,
		summary: 'Only signed-in customers may place an order.',
		fields: [
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Require a customer to sign in before an order can be submitted' },
		],
	},
	{
		id: 'maxOrder',
		label: 'Max orders per hour',
		comingSoon: true,
		summary: 'Caps how many orders the shop will accept in an hour.',
		fields: [
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Limit how many orders the shop accepts each hour' },
			{ key: 'order_count', type: 'number', label: 'Orders per hour', help: 'Maximum number of orders allowed', min: 0, placeholder: '0' },
		],
	},
	{
		id: 'duplicateOrder',
		label: 'Duplicate Order',
		comingSoon: true,
		summary: 'Flags a repeat of an order that was just placed.',
		fields: [
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Detect an order that repeats one just submitted' },
		],
	},
	{
		id: 'reCAPTCHA',
		label: 'reCAPTCHA',
		comingSoon: true,
		summary: 'Puts a challenge in front of order submission.',
		fields: [
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Enable reCAPTCHA on order submission' },
		],
	},
	{
		id: 'emailOtp',
		label: 'Email OTP Verification',
		comingSoon: true,
		summary: 'Emails a one-time code that must be entered to order.',
		fields: [
			/* Core's help text here read "Enable IP limit" - copied from the
			   check below it and never corrected. The key is unchanged; only
			   the words a merchant reads are. */
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Require a one-time code sent by email' },
			{ key: 'order_count', type: 'number', label: 'Orders per hour', help: 'Maximum number of orders allowed before a code is required', min: 0, placeholder: '0' },
		],
	},
	{
		id: 'limitip',
		label: 'Limit IP Address',
		comingSoon: true,
		summary: 'Caps how many orders one IP address may place.',
		fields: [
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Limit how many orders one IP address may place' },
			{ key: 'order_count', type: 'number', label: 'Orders per hour', help: 'Maximum number of orders allowed from one address', min: 0, placeholder: '0' },
		],
	},
	{
		id: 'limitPhone',
		label: 'Limit Phone Number',
		comingSoon: true,
		summary: 'Caps how many orders one phone number may place.',
		fields: [
			/* Same copy-paste as emailOtp above: core said "Enable IP limit". */
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Limit how many orders one phone number may place' },
			{ key: 'order_count', type: 'number', label: 'Orders per hour', help: 'Maximum number of orders allowed from one number', min: 0, placeholder: '0' },
		],
	},
	{
		id: 'mobilefraudcheck',
		label: 'Mobile Fraud Checker',
		comingSoon: true,
		summary: 'Scores a phone number against a courier delivery-history service.',
		fields: [
			{ key: 'enabled', type: 'toggle', label: 'Enable', help: 'Score the customer phone number before accepting an order' },
			/*
				In core this select carried name={'score'} while reading
				value={...['service']}. Choosing a service therefore wrote the
				service id into `score` - clobbering the number beside it - and
				the select never showed what was stored, because nothing ever
				wrote `service`. Table-driven fields cannot drift like that:
				the key is read and written from one place.
			*/
			{ key: 'service', type: 'select', label: 'Service', help: 'Which service to fetch the score from', options: SCORE_SERVICES },
			/* Core labelled this "Order per hour" with the help "Average score
			   to allow". It is a score threshold, not a rate. */
			{ key: 'score', type: 'number', label: 'Minimum score', help: 'Lowest average score an order may have and still be accepted', min: 0, max: 100, placeholder: '0' },
		],
	},
];

export const PROVIDER_BY_ID = Object.fromEntries(PROVIDERS.map(p => [p.id, p]));

/**
 * Checks that were written in core but never shown: they had a branch in the
 * settings markup while being commented out of `fraudCheckPrams`, so the
 * branch was unreachable. Recorded rather than silently dropped, since the
 * intent is worth keeping even though the code was dead.
 */
export const NOT_YET_OFFERED = ['tempEmail', 'smsOtp', 'phoneCall'];

/** A provider's stored config, with every field defaulted. */
export function providerConfig(config, provider) {
	const stored = config?.[provider.id] ?? {};

	return Object.fromEntries(provider.fields.map((field) => {
		const value = stored[field.key];

		if (field.type === 'toggle') return [field.key, Boolean(value)];
		if (field.type === 'select') return [field.key, value ?? field.options?.[0]?.value ?? ''];

		return [field.key, value ?? ''];
	}));
}

/** How many checks a merchant has switched on. */
export function enabledCount(config) {
	return PROVIDERS.filter(p => Boolean(config?.[p.id]?.enabled)).length;
}
