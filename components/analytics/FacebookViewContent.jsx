// components/analytics/FacebookViewContent.jsx
'use client';
import { useEffect } from 'react';

/*
	The browser half of a page's ViewContent; the server sends the other half
	with the same eventId (lib/facebook/serverEvent.js) and Meta keeps one.

	The pixel loads with next/script `afterInteractive`, i.e. after this
	effect can run. On the first page of a visit - the ad's landing page -
	window.fbq often does not exist yet, and the event used to be dropped.
	So wait for it, briefly: every 200 ms for up to 10 s. A store with no
	pixel configured just stops waiting.
*/
const WAIT_MS = 200;
const MAX_TRIES = 50;

export default function FacebookViewContent({ eventId, data }) {

	useEffect(() => {

		if (typeof window === 'undefined' || !eventId) return undefined;

		let tries = 0;
		let timer = null;

		const send = () => {
			if (typeof window.fbq === 'function') {
				window.fbq('track', 'ViewContent', data, { eventID: eventId });
				return;
			}
			if (++tries < MAX_TRIES) {
				timer = window.setTimeout(send, WAIT_MS);
			}
		};

		send();

		return () => window.clearTimeout(timer);
		// eventId changes with every server render of the page; data travels with it.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventId]);

	return null;
}
