'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconCheck, IconCopy, IconKey } from "@tabler/icons-react";
import { StatusBadge, formatAccountDate } from './accountUi';

/*
	The license keys one order issued, inside its card in the customer's order
	list. Shared by CustomerOrdersView (real licenses from get_licenses) and the
	builder canvas (CustomerOrders, with samples), so both render the same
	markup with the customerOrders license-* cssSelectors keys.

	A license row is what get_licenses returns: license_key, status,
	product_title, variation_title, domains, activation_limit, expires_at,
	is_lifetime, is_expired.
*/

/* Resolves true/false; the Clipboard API is missing on plain-http shops. */
function copyText(text) {
	if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
		return navigator.clipboard.writeText(text).then(() => true, () => false);
	}
	try {
		const area = document.createElement("textarea");
		area.value = text;
		document.body.appendChild(area);
		area.select();
		const ok = document.execCommand("copy");
		document.body.removeChild(area);
		return Promise.resolve(ok);
	} catch (e) {
		return Promise.resolve(false);
	}
}

function LicenseRow({ license, cls, preview }) {
	var [copied, setcopied] = useState(false);

	var used = Array.isArray(license?.domains) ? license.domains.length : (parseInt(license?.activation_count) || 0);
	var limit = parseInt(license?.activation_limit) || 0;
	var expired = license?.is_expired || license?.status === "expired";
	var status = license?.status === "active" && license?.is_expired ? "expired" : license?.status;
	var name = license?.product_title || license?.meta?.product_name || "License";

	function copy(ev) {
		/* On the canvas a click selects the block; it must not copy. */
		if (preview) return;
		ev.preventDefault();
		copyText(license.license_key).then(ok => {
			if (!ok) return;
			setcopied(true);
			setTimeout(() => setcopied(false), 2000);
		});
	}

	return (
		<li className={cls('license')}>
			<div className={cls('license-header')}>
				<span className={cls('license-product')}>
					{name}{license?.variation_title ? ` – ${license.variation_title}` : ""}
				</span>
				<StatusBadge value={status} />
			</div>

			<div className={cls('license-key-row')}>
				<code className={cls('license-key')}>{license?.license_key}</code>
				<button type="button" className={cls('license-button')} onClick={copy} aria-label="Copy license key">
					{copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
					{copied ? "Copied" : "Copy"}
				</button>
			</div>

			<div className={cls('license-meta')}>
				<span>{limit > 0 ? `${used} of ${limit} ${limit == 1 ? 'site' : 'sites'} used` : `${used} ${used == 1 ? 'site' : 'sites'} · unlimited`}</span>
				<span>
					{license?.is_lifetime
						? "Never expires"
						: `${expired ? "Expired" : "Expires"} ${formatAccountDate(license?.expires_at)}`}
				</span>
			</div>
		</li>
	);
}

LicenseRow.propTypes = {
	license: PropTypes.object,
	cls: PropTypes.func,
	preview: PropTypes.bool,
};


const OrderLicenseList = ({ licenses, cls, preview = false }) => {
	if (!Array.isArray(licenses) || licenses.length === 0) return null;

	return (
		<div className={cls('licenses')}>
			<div className={cls('licenses-title')}>
				<IconKey size={14} /> {licenses.length == 1 ? "License key" : "License keys"}
			</div>
			<ul className="flex flex-col gap-2">
				{licenses.map(license => (
					<LicenseRow key={license.id ?? license.license_key} license={license} cls={cls} preview={preview} />
				))}
			</ul>
		</div>
	);
};

OrderLicenseList.propTypes = {
	licenses: PropTypes.array,
	cls: PropTypes.func,
	preview: PropTypes.bool,
};

export default OrderLicenseList;
