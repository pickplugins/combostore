/*
	The role a Register block signs people up as.

	It is set in the block's options only (RegisterOptions "Sign up as"); the
	form shows no choice and the URL cannot change it. The server decides
	what it actually creates: register_user (ComboStoreRest.php) accepts
	`customer` always, `affiliate` only while Settings > Affiliates
	"Affiliate sign-up" is on, and `rider` only while Settings > Riders
	"Rider sign-up" is on - and a rider sign-up is always a customer account
	plus an application a manager must approve, since riders can read every
	order (PUBLIC_SIGNUP_ROLES / public_signup_refusal,
	ComboStoreRiderApplications). Staff and custom (cstore_*) roles can never
	come from a public form.
*/
export const SIGNUP_ROLES = [
	{ value: 'customer', label: 'Customer', subtitle: 'Check out faster and keep track of your orders.' },
	{ value: 'affiliate', label: 'Affiliate', subtitle: 'Share your link and earn a commission on every sale you refer.' },
	{ value: 'rider', label: 'Rider', subtitle: 'Apply to deliver orders for us. We review every application.' },
];

/*
	The block's role, as one of SIGNUP_ROLES.

	options.role is the setting. Blocks saved before it had roles (a list,
	shown as a "Join as" dropdown) and defaultRole; those keep signing up as
	the role that was preselected, else the first one listed.
*/
export function blockSignupRole(options) {
	var values = SIGNUP_ROLES.map((r) => r.value);
	var legacyRoles = Array.isArray(options?.roles) ? options.roles.filter((v) => values.includes(v)) : [];

	var value = [
		options?.role,
		legacyRoles.length === 0 || legacyRoles.includes(options?.defaultRole) ? options?.defaultRole : null,
		legacyRoles[0],
	].find((v) => values.includes(v)) ?? 'customer';

	return SIGNUP_ROLES.find((r) => r.value === value);
}
