'use client';

/*
	Meta pixel advanced matching for signed-in customers.

	Once the storefront knows who is signed in (userDataX, filled by
	AuthProvider), re-initialise the pixel with their email, phone, name and
	city. Every pixel event after that carries them, which is what lifts Event
	Match Quality the most. The pixel normalises and SHA-256 hashes these
	values itself before sending; nothing leaves the browser in plain text.

	external_id stays the cs_vid cookie (proxy.js), the value the server also
	sends, so browser and server events keep matching each other.

	Renders nothing.
*/

import { useEffect, useRef } from 'react';
import { useCounterStore } from '../../store/useCounterStore';

const WAIT_MS = 300;
const MAX_TRIES = 40;

function readCookie(name) {
	const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
	return match ? decodeURIComponent(match[1]) : '';
}

/* Bangladesh numbers are the common case: 01XXXXXXXXX -> 8801XXXXXXXXX. */
function normalisePhone(value) {
	let digits = String(value || '').replace(/\D/g, '').replace(/^00/, '');
	if (/^01\d{9}$/.test(digits)) digits = `88${digits}`;
	else if (/^1\d{9}$/.test(digits)) digits = `880${digits}`;
	return digits.length >= 8 ? digits : '';
}

const letters = (value) => String(value || '').trim().toLowerCase().normalize('NFKC').replace(/[^\p{L}]/gu, '');

function buildMatching(user) {
	const email = String(user?.email || '').trim().toLowerCase();
	const parts = String(user?.name || '').trim().split(/\s+/).filter(Boolean);
	const city = String(user?.billing_city || '').trim();
	const country = String(user?.billing_country || '').trim().toLowerCase();

	const data = {
		em: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '',
		ph: normalisePhone(user?.phone),
		fn: parts.length ? letters(parts[0]) : '',
		ln: parts.length > 1 ? letters(parts[parts.length - 1]) : '',
		// A region code such as "BD-13" is not a city name.
		ct: city && !/^[A-Z]{2}-[0-9A-Z]+$/i.test(city) ? letters(city) : '',
		country: /^[a-z]{2}$/.test(country) ? country : '',
		external_id: /^[a-f0-9]{64}$/.test(readCookie('cs_vid')) ? readCookie('cs_vid') : '',
	};

	return Object.fromEntries(Object.entries(data).filter(([, value]) => value));
}

export default function FacebookUserMatching({ pixelId }) {

	const { userDataX } = useCounterStore();
	const sentFor = useRef(null);

	useEffect(() => {
		const id = String(pixelId || '').trim();
		if (!id || !userDataX?.id || sentFor.current === userDataX.id) return undefined;

		const matching = buildMatching(userDataX);
		if (!matching.em && !matching.ph) return undefined;

		let tries = 0;
		let timer = null;

		const send = () => {
			if (typeof window.fbq === 'function') {
				window.fbq('init', id, matching);
				sentFor.current = userDataX.id;
				return;
			}
			if (++tries < MAX_TRIES) timer = window.setTimeout(send, WAIT_MS);
		};

		send();
		return () => window.clearTimeout(timer);
	}, [pixelId, userDataX?.id, userDataX?.email, userDataX?.phone]);

	return null;
}
