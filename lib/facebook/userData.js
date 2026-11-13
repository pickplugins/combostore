/*
	Meta Conversions API customer information (user_data), normalised and
	hashed the way Meta asks, so server events match to people.

	Event Match Quality is mostly about this object. IP and user agent alone
	score low; a hashed email or phone, name, city, country, a stable
	external_id and the _fbp / _fbc cookies are what lift it.

	Normalising rules (https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters):
	  em       trimmed, lowercase
	  ph       digits only, with the country code (01712345678 -> 8801712345678)
	  fn, ln   lowercase, letters only
	  ct       lowercase, no spaces or punctuation
	  country  ISO 3166-1 alpha-2, lowercase
	  external_id  any stable id; hashed too
	Every one of these is SHA-256 hashed. fbp, fbc, IP and user agent are not.

	Server only: it uses node's crypto.
*/

import crypto from 'crypto';

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const clean = (value) => (typeof value === 'string' || typeof value === 'number') ? String(value).trim() : '';

export function normaliseEmail(value) {
	const email = clean(value).toLowerCase();
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
}

/* Bangladesh numbers are the common case: 01XXXXXXXXX, +8801XXXXXXXXX, 1XXXXXXXXX. */
export function normalisePhone(value, country = 'bd') {
	let digits = clean(value).replace(/\D/g, '').replace(/^00/, '');
	if (!digits) return '';
	if (country === 'bd' || !country) {
		if (/^01\d{9}$/.test(digits)) digits = `88${digits}`;
		else if (/^1\d{9}$/.test(digits)) digits = `880${digits}`;
	}
	return digits.length >= 8 ? digits : '';
}

const letters = (value) => clean(value).toLowerCase().normalize('NFKC').replace(/[^\p{L}]/gu, '');

export function splitName(fullName) {
	const parts = clean(fullName).split(/\s+/).filter(Boolean);
	if (!parts.length) return { fn: '', ln: '' };
	return { fn: letters(parts[0]), ln: parts.length > 1 ? letters(parts[parts.length - 1]) : '' };
}

/* A city code such as "BD-55" is not a city name; Meta wants the name. */
export function normaliseCity(value) {
	const city = clean(value);
	if (!city || /^[A-Z]{2}-[0-9A-Z]+$/i.test(city)) return '';
	return letters(city);
}

export function normaliseCountry(value) {
	const country = clean(value).toLowerCase();
	return /^[a-z]{2}$/.test(country) ? country : '';
}

/* _fbc is set by the pixel when someone lands from an ad (?fbclid=...). Rebuild it from the URL if the cookie is missing. */
function fbcFromUrl(url) {
	try {
		const fbclid = new URL(url).searchParams.get('fbclid');
		return fbclid ? `fb.1.${Date.now()}.${fbclid}` : '';
	} catch {
		return '';
	}
}

export function clientIp(headers) {
	return clean(headers.get('cf-connecting-ip'))
		|| clean(headers.get('x-forwarded-for')?.split(',')[0])
		|| clean(headers.get('x-real-ip'))
		|| undefined;
}

/**
 * @param {object} user     { email, phone, name, first_name, last_name, city, country, external_id }
 * @param {object} context  { headers, cookies, fbp, fbc, sourceUrl }
 */
export function buildUserData(user = {}, { headers, cookies, fbp, fbc, sourceUrl } = {}) {
	const country = normaliseCountry(user.country) || 'bd';
	const email = normaliseEmail(user.email);
	const phone = normalisePhone(user.phone, country);
	const names = user.first_name || user.last_name
		? { fn: letters(user.first_name), ln: letters(user.last_name) }
		: splitName(user.name);
	const city = normaliseCity(user.city);
	/* A logged-in customer's id is best; the phone is the next most stable thing a guest gives us. */
	const externalId = clean(user.external_id) || phone || email;

	const data = {
		client_ip_address: headers ? clientIp(headers) : undefined,
		client_user_agent: headers?.get('user-agent') || undefined,
		fbp: clean(fbp) || cookies?.get('_fbp')?.value || undefined,
		fbc: clean(fbc) || cookies?.get('_fbc')?.value || fbcFromUrl(sourceUrl) || undefined,
		em: email ? [sha256(email)] : undefined,
		ph: phone ? [sha256(phone)] : undefined,
		fn: names.fn ? [sha256(names.fn)] : undefined,
		ln: names.ln ? [sha256(names.ln)] : undefined,
		ct: city ? [sha256(city)] : undefined,
		country: [sha256(country)],
		external_id: externalId ? [sha256(externalId.toLowerCase())] : undefined,
	};

	/* JSON.stringify drops undefined; keep the payload tidy for logs too. */
	return Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined && value !== ''));
}
