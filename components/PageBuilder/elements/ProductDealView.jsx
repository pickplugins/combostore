'use client'
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";
import { useCounterStore } from "../../../store/useCounterStore";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The product's deal and its waitlist (the product editor's "Deals" addon,
	served by ComboStoreDeals on the server).

	The server says whether the deal is upcoming, live or ended and how many
	seconds are left; the block counts down from that rather than reading the
	dates itself, so a shopper in another timezone sees the same moment.
	Joiners are shown as "Rahim K." only - the server never sends contact
	details to the shop.
*/

export const isDealProduct = (product) => Array.isArray(product?.addons) && product.addons.includes('deals');

/* "2d 04h 10m 05s", dropping leading zero units. */
export function formatCountdown(seconds) {
	var s = Math.max(0, Math.floor(seconds || 0));
	var d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
	var pad = (n) => String(n).padStart(2, '0');
	if (d > 0) return `${d}d ${pad(h)}h ${pad(m)}m`;
	if (h > 0) return `${h}h ${pad(m)}m ${pad(sec)}s`;
	return `${m}m ${pad(sec)}s`;
}

const fill = (text, count) => String(text ?? '').replace('{count}', Number(count || 0).toLocaleString());

/* What "joined" is remembered as for a guest, so a reload still shows it. */
const joinedKey = (productId) => `cstore_deal_joined_${productId}`;
const readJoined = (productId) => { try { return localStorage.getItem(joinedKey(productId)) === '1'; } catch (e) { return false; } };
const saveJoined = (productId) => { try { localStorage.setItem(joinedKey(productId), '1'); } catch (e) { } };

/*
	The block's markup, shared with the builder preview (ProductDeal.jsx).
	`deal` is the server's public deal: { label, message, status, starts_in,
	ends_in, count, recent[], collect, waitlist, showCount, showJoiners }.
*/
export function ProductDealMarkup({ cls, id, index, type, options, deal, secondsLeft, joined, signedIn, form, setForm, busy, message, onJoin, rootClassName = '', rootProps = {} }) {

	var status = deal?.status ?? 'upcoming';
	var title = options?.title || deal?.label || (status === 'live' ? 'Deal is live' : 'Upcoming deal');
	var statusText = status === 'live' ? (options?.liveText || 'Live now') : status === 'ended' ? (options?.endedText || 'This deal has ended') : (options?.upcomingText || 'Coming soon');
	var countdownLabel = status === 'upcoming' ? (options?.startsInText || 'Starts in') : (options?.endsInText || 'Ends in');
	var canJoin = deal?.waitlist !== false && status !== 'ended';
	var collect = deal?.collect || 'phone';
	var recent = deal?.recent ?? [];
	var count = deal?.count;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>

			<div className={cls('header')}>
				<span className={cls('badge')}>{title}</span>
				<span className={cls('status')} data-status={status}>{statusText}</span>
			</div>

			{options?.showCountdown !== false && secondsLeft > 0 && status !== 'ended' && (
				<div className={cls('countdown')}>
					<span className={cls('countdownLabel')}>{countdownLabel}</span>
					<span className={cls('countdownValue')}>{formatCountdown(secondsLeft)}</span>
				</div>
			)}

			{deal?.message && <p className={cls('message')}>{deal.message}</p>}

			{deal?.showCount !== false && count != null && (
				<div className={cls('count')}>
					{count > 0 ? fill(options?.countText || '{count} people on the waitlist', count) : (options?.emptyText || 'Be the first to join the waitlist')}
				</div>
			)}

			{deal?.showJoiners !== false && recent.length > 0 && (
				<div className={cls('joiners')}>
					<div className={cls('avatars')}>
						{recent.slice(0, 5).map((person, i) => (
							<span key={i} className={cls('avatar')} title={person?.name}>{person?.initials}</span>
						))}
					</div>
					<span className={cls('joinersText')}>
						{recent.slice(0, 2).map(p => p?.name).join(', ')}
						{count > 2 ? ` and ${Number(count - 2).toLocaleString()} others joined` : ' joined'}
					</span>
				</div>
			)}

			{canJoin && (joined ? (
				<div className={cls('success')}>{options?.joinedText || "You're on the waitlist. We'll let you know when the deal starts."}</div>
			) : (
				<form className={cls('form')} onSubmit={ev => { ev.preventDefault(); onJoin?.(); }}>
					{!signedIn && (
						<>
							<input className={cls('input')} type="text" required autoComplete="name" placeholder={options?.namePlaceholder || 'Your name'}
								value={form?.name ?? ''} onChange={ev => setForm?.({ ...form, name: ev.target.value })} />
							{(collect === 'phone' || collect === 'both') && (
								<input className={cls('input')} type="tel" required autoComplete="tel" placeholder={options?.phonePlaceholder || 'Phone number'}
									value={form?.phone ?? ''} onChange={ev => setForm?.({ ...form, phone: ev.target.value })} />
							)}
							{(collect === 'email' || collect === 'both') && (
								<input className={cls('input')} type="email" required autoComplete="email" placeholder={options?.emailPlaceholder || 'Email address'}
									value={form?.email ?? ''} onChange={ev => setForm?.({ ...form, email: ev.target.value })} />
							)}
						</>
					)}
					<button type="submit" className={cls('button')} disabled={busy}>
						{busy ? (options?.busyText || 'Joining...') : (options?.buttonText || 'Join the waitlist')}
					</button>
				</form>
			))}

			{message && <div className={cls('error')} role="alert">{message}</div>}
		</div>
	);
}

const ProductDealView = (props) => {

	var cls = elementCssClasses('productDeal', props?.cssSelectors);

	const product = usePost();
	const productId = product?.id ?? product?.ID ?? product?.product_id;
	const customerToken = useCounterStore((s) => s.token);

	var [deal, setDeal] = useState(null);
	var [secondsLeft, setSecondsLeft] = useState(0);
	var [joined, setJoined] = useState(false);
	var [form, setForm] = useState({ name: '', phone: '', email: '' });
	var [busy, setBusy] = useState(false);
	var [message, setMessage] = useState('');

	var isDeal = isDealProduct(product);

	/* An expired saved token makes the JWT plugin refuse the request outright (403); ask again as a guest. */
	function post(route, body) {
		var send = (withToken) => fetch(serverUrl + "wp-json/combo-store/v2/" + route, {
			method: 'POST',
			headers: withToken ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${customerToken}` } : { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
		return send(Boolean(customerToken))
			.then(r => (customerToken && (r.status === 401 || r.status === 403)) ? send(false) : r)
			.then(r => { if (!r.ok) throw new Error('Request failed'); return r.json(); });
	}

	function load() {
		post('get_deal_waitlist_public', { product_id: productId })
			.then(res => {
				var next = res?.deal ?? null;
				setDeal(next);
				setSecondsLeft(next ? (next.status === 'upcoming' ? next.starts_in : next.ends_in) ?? 0 : 0);
				setJoined(Boolean(next?.joined) || readJoined(productId));
			})
			.catch(() => { });
	}

	useEffect(() => {
		if (!isDeal || !productId) return;
		load();
	}, [isDeal, productId, customerToken]);

	/* Tick the countdown; at zero the deal changed state, so ask the server what it is now. */
	useEffect(() => {
		if (!secondsLeft || secondsLeft <= 0) return;
		var timer = setTimeout(() => {
			if (secondsLeft - 1 <= 0) load();
			else setSecondsLeft(secondsLeft - 1);
		}, 1000);
		return () => clearTimeout(timer);
	}, [secondsLeft]);

	function join() {
		setBusy(true);
		setMessage('');
		post('join_deal_waitlist', { product_id: productId, ...form })
			.then(res => {
				setBusy(false);
				if (res?.errors) { setMessage(res?.message || 'Could not join the waitlist.'); return; }
				saveJoined(productId);
				setJoined(true);
				load();
			})
			.catch(() => { setBusy(false); setMessage('Could not join the waitlist. Please try again.'); });
	}

	if (!isDeal || !deal) return null;

	/* An ended deal only stays on the page when the block is set to keep it. */
	if (deal.status === 'ended' && props?.options?.hideWhenEnded !== false) return null;

	return (
		<ProductDealMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			deal={deal}
			secondsLeft={secondsLeft}
			joined={joined}
			signedIn={Boolean(deal?.signed_in)}
			form={form}
			setForm={setForm}
			busy={busy}
			message={message}
			onJoin={join}
		/>
	);
};

ProductDealView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductDealView;
