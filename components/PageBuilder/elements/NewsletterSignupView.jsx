'use client'

import PropTypes from "prop-types";
import React, { useState } from "react";
import { IconAlertCircle, IconCircleCheck, IconMail, IconMailForward } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Defaults for the `newsletterSignup` block. `collect` is which contact
	detail the form asks for: "email", "phone", or "both" (two fields, either
	one is enough). listId 0 adds people to the contact list without a list;
	any other id must be a list marked "Accept storefront sign-ups" under
	Marketing > Lists, or the server refuses it. `tag` is added to everyone
	who signs up here (for example "footer" or "exit-popup").
*/
export const NEWSLETTER_DEFAULTS = {
	title: "Join our newsletter",
	subtitle: "New arrivals, offers and restocks, first.",
	collect: "email",
	showName: false,
	namePlaceholder: "Your name",
	emailPlaceholder: "Email address",
	phonePlaceholder: "Phone number",
	buttonText: "Subscribe",
	consentText: "We only send news and offers. Unsubscribe any time.",
	successTitle: "You're subscribed!",
	successText: "Thanks for joining. Look out for our next update.",
	/* With a phone field: a "send me offers on WhatsApp" box (WhatsApp needs its own consent). */
	whatsappOptIn: false,
	whatsappLabel: "Also send me offers on WhatsApp",
	confirmTitle: "Check your inbox",
	confirmText: "We've sent you an email. Click the link in it to confirm your subscription.",
	listId: 0,
	tag: "",
	previewState: "form",
};

/* An option, or its default when the block does not set it. Empty text counts as set, which hides that line. */
export const newsletterOpt = (options, key) => (options?.[key] !== undefined ? options[key] : NEWSLETTER_DEFAULTS[key]);

/*
	The form and its success state, shared by the shop view below and the
	builder preview (NewsletterSignup.jsx). `values` / `setValue` hold the
	fields; `done` swaps the form for a message: "subscribed", or "confirm"
	when double opt-in sent them an email to click first.
*/
export function NewsletterSignupMarkup({ cls, id, options, values, setValue, onSubmit, loading, error, done }) {
	const collect = newsletterOpt(options, 'collect');
	const title = newsletterOpt(options, 'title');
	const subtitle = newsletterOpt(options, 'subtitle');
	const consent = newsletterOpt(options, 'consentText');
	const showEmail = collect !== 'phone';
	const showPhone = collect === 'phone' || collect === 'both';

	if (done) {
		const successTitle = newsletterOpt(options, done === 'confirm' ? 'confirmTitle' : 'successTitle');
		const successText = newsletterOpt(options, done === 'confirm' ? 'confirmText' : 'successText');
		return (
			<div className={cls('success')} role="status" aria-live="polite">
				{done === 'confirm' ? <IconMailForward size={28} className="shrink-0" /> : <IconCircleCheck size={28} className="shrink-0" />}
				<div>
					{successTitle && <p className={cls('success-title')}>{successTitle}</p>}
					{successText && <p className={cls('success-text')}>{successText}</p>}
				</div>
			</div>
		);
	}

	return (
		<>
			{(title || subtitle) && (
				<div className={cls('header')}>
					{title && <p className={cls('title')}><IconMail size={20} className="shrink-0" />{title}</p>}
					{subtitle && <p className={cls('subtitle')}>{subtitle}</p>}
				</div>
			)}

			<form className={cls('form')} onSubmit={onSubmit} noValidate>
				<div className={cls('fields')}>
					{newsletterOpt(options, 'showName') && (
						<input type="text" name="name" autoComplete="name" aria-label={newsletterOpt(options, 'namePlaceholder') || 'Name'}
							className={cls('field-input')} placeholder={newsletterOpt(options, 'namePlaceholder')}
							value={values.name} onChange={ev => setValue('name', ev.target.value)} />
					)}
					{showEmail && (
						<input type="email" name="email" autoComplete="email" inputMode="email" aria-label={newsletterOpt(options, 'emailPlaceholder') || 'Email'}
							className={cls('field-input')} placeholder={newsletterOpt(options, 'emailPlaceholder')}
							value={values.email} onChange={ev => setValue('email', ev.target.value)} />
					)}
					{showPhone && (
						<input type="tel" name="phone" autoComplete="tel" inputMode="tel" aria-label={newsletterOpt(options, 'phonePlaceholder') || 'Phone'}
							className={cls('field-input')} placeholder={newsletterOpt(options, 'phonePlaceholder')}
							value={values.phone} onChange={ev => setValue('phone', ev.target.value)} />
					)}
					{/* Honeypot: hidden from people, filled by bots; the server ignores sign-ups that fill it. */}
					<input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
						style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
						value={values.website} onChange={ev => setValue('website', ev.target.value)} />
				</div>
				{showPhone && newsletterOpt(options, 'whatsappOptIn') && (
					<label className={cls('whatsapp-optin')}>
						<input type="checkbox" checked={!!values.whatsapp} onChange={ev => setValue('whatsapp', ev.target.checked)} />
						<span>{newsletterOpt(options, 'whatsappLabel')}</span>
					</label>
				)}
				<button type="submit" className={cls('submit-button')} disabled={loading} id={id ? `${id}-submit` : undefined}>
					{loading && <Spinner />}
					{newsletterOpt(options, 'buttonText') || 'Subscribe'}
				</button>
			</form>

			{error && (
				<p role="alert" className={cls('error')}>
					<IconAlertCircle size={16} className="mt-0.5 shrink-0" />
					<span>{error}</span>
				</p>
			)}

			{consent && <p className={cls('consent')}>{consent}</p>}
		</>
	);
}

export const EMPTY_VALUES = { name: '', email: '', phone: '', website: '', whatsapp: false };

/*
	Newsletter signup on the shop: posts to the public mkt_subscribe route
	(ComboStoreMarketing.php), which adds or updates the contact, subscribes
	them, puts them on the chosen public list and tags them "newsletter" plus
	options.tag. With double opt-in on (Marketing settings), an email is only
	subscribed once its owner clicks the link the server emails them, and the
	form says to check their inbox. Every outcome answers alike, so the form
	never reveals who is on the list.
*/
const NewsletterSignupView = (props) => {

	var cls = elementCssClasses('newsletterSignup', props?.cssSelectors);
	var id = props?.id;
	var options = props?.options ?? {};

	const [values, setValues] = useState(EMPTY_VALUES);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [done, setDone] = useState(null);

	const setValue = (key, value) => { setValues(v => ({ ...v, [key]: value })); if (error) setError(null); };

	const onSubmit = (ev) => {
		ev.preventDefault();
		if (loading) return;

		const collect = newsletterOpt(options, 'collect');
		const email = values.email.trim();
		const phone = values.phone.trim();

		if (collect === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return; }
		if (collect === 'phone' && phone.replace(/\D+/g, '').length < 6) { setError('Please enter a valid phone number.'); return; }
		if (collect === 'both' && !email && !phone) { setError('Please enter your email address or phone number.'); return; }

		setLoading(true);
		setError(null);

		fetch(serverUrl + "wp-json/combo-store/v2/mkt_subscribe", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: values.name.trim(),
				email: collect === 'phone' ? '' : email,
				phone: collect === 'email' ? '' : phone,
				list_id: Number(newsletterOpt(options, 'listId')) || 0,
				tag: newsletterOpt(options, 'tag') || '',
				website: values.website,
				/* Only counts with a phone number; unticked never subscribes anyone to WhatsApp. */
				whatsapp: !!values.whatsapp && collect !== 'email',
			}),
		})
			.then(async (response) => {
				let res = null;
				try { res = await response.json(); } catch { res = null; }
				if (response.ok && res?.status === 'success') {
					/* Double opt-in: they are not subscribed until they click the emailed link. */
					setDone(res?.confirm ? 'confirm' : 'subscribed');
					setValues(EMPTY_VALUES);
				} else {
					setError(res?.message || "We couldn't sign you up just now. Please try again.");
				}
			})
			.catch(() => setError("We couldn't sign you up just now. Please try again."))
			.finally(() => setLoading(false));
	};

	return (
		<div id={id} type={props?.type} className={cls('*')}>
			<NewsletterSignupMarkup cls={cls} id={id} options={options} values={values} setValue={setValue} onSubmit={onSubmit} loading={loading} error={error} done={done} />
		</div>
	);
};

NewsletterSignupView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default NewsletterSignupView;
