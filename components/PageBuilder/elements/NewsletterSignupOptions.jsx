import React, { useEffect, useState } from "react";
import Link from "next/link";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";
import { NEWSLETTER_DEFAULTS, newsletterOpt } from "./NewsletterSignupView";
import { useCounterStore } from "../../../store/useCounterStore";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const labelClass = "text-xs font-medium text-gray-600";

/*
	Settings panel for the `newsletterSignup` block: what the form asks for,
	which marketing list sign-ups join (only lists marked "Accept storefront
	sign-ups"), the words, then its cssSelectors keys. An emptied text hides it.
*/
const NewsletterSignupOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var cssSelectors = withElementCssDefaults('newsletterSignup', props?.cssSelectors);

	const token = useCounterStore((s) => s.token);
	const [lists, setLists] = useState(null);

	/* The builder runs in the dashboard, so the admin's token can read the lists. */
	useEffect(() => {
		if (!token) return;
		fetch(serverUrl + "wp-json/combo-store/v2/get_mkt_lists", {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
			body: "{}",
		})
			.then(r => r.ok ? r.json() : null)
			.then(res => setLists(res?.lists ?? []))
			.catch(() => setLists([]));
	}, [token]);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	const field = (key, label) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className={labelClass}>{label}</label>
			<input type="text" placeholder={NEWSLETTER_DEFAULTS[key]} className={inputClass} value={newsletterOpt(options, key) ?? ''} onChange={ev => setOption(key, ev.target.value)} />
		</div>
	);

	const check = (key, label) => (
		<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" checked={!!newsletterOpt(options, key)} onChange={ev => setOption(key, ev.target.checked)} />
			{label}
		</label>
	);

	var collect = newsletterOpt(options, 'collect');
	var listId = Number(newsletterOpt(options, 'listId')) || 0;
	var publicLists = (lists ?? []).filter(l => l.public);
	var chosenMissing = listId && lists && !publicLists.some(l => l.id === listId);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>Ask for</label>
					<select className={inputClass} value={collect} onChange={ev => setOption('collect', ev.target.value)}>
						<option value="email">Email</option>
						<option value="phone">Phone (SMS)</option>
						<option value="both">Email and phone (either is enough)</option>
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>Add sign-ups to list</label>
					<select className={inputClass} value={listId} onChange={ev => setOption('listId', Number(ev.target.value))}>
						<option value={0}>No list (contacts only)</option>
						{publicLists.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
						{chosenMissing ? <option value={listId}>List #{listId} (not accepting sign-ups)</option> : null}
					</select>
					{chosenMissing ? (
						<p className="text-xs text-red-600">This list no longer accepts sign-ups, so the form will show an error. Pick another, or turn on “Accept storefront sign-ups” for it.</p>
					) : (
						<p className="text-xs text-gray-500">
							Only lists with “Accept storefront sign-ups” turned on appear here. <Link href="/dashboard/marketing-lists" target="_blank" className="text-brand underline">Manage lists</Link>
						</p>
					)}
				</div>

				{field('tag', 'Tag sign-ups (optional)')}

				{field('title', 'Title')}
				{field('subtitle', 'Subtitle')}

				{check('showName', 'Ask for their name')}
				{newsletterOpt(options, 'showName') && field('namePlaceholder', 'Name placeholder')}
				{collect !== 'phone' && field('emailPlaceholder', 'Email placeholder')}
				{collect !== 'email' && field('phonePlaceholder', 'Phone placeholder')}
				{collect !== 'email' && check('whatsappOptIn', 'Offer WhatsApp updates (a consent checkbox)')}
				{collect !== 'email' && newsletterOpt(options, 'whatsappOptIn') && field('whatsappLabel', 'Checkbox text')}
				{field('buttonText', 'Button text')}
				{field('consentText', 'Small print')}

				{field('successTitle', 'Thank-you title')}
				{field('successText', 'Thank-you text')}
				{field('confirmTitle', 'Check-your-inbox title')}
				{field('confirmText', 'Check-your-inbox text')}
				<p className="text-xs text-gray-500">Shown instead of the thank-you when double opt-in is on (Marketing › Settings) and they must click the emailed link first.</p>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className={labelClass}>Show in the builder</label>
					<select className={inputClass} value={options?.previewState ?? (options?.previewSuccess ? 'success' : 'form')} onChange={ev => updateBlock('options', { ...options, previewState: ev.target.value, previewSuccess: undefined })}>
						<option value="form">The form</option>
						<option value="success">The thank-you message</option>
						<option value="confirm">The check-your-inbox message</option>
					</select>
				</div>

				<p className="text-xs text-gray-500">
					Sign-ups appear under Marketing › Contacts, tagged “newsletter”. With double opt-in on, email sign-ups stay “Unconfirmed” until they click the link we email them.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default NewsletterSignupOptions;
