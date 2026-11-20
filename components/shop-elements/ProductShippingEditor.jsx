'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { IconPackages } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore'
import Spinner from '../Spinner';
import { shippingClassRequest, shippingClassCostLabel } from "@/lib/shippingClasses";

/*
	The product's "Shipping" addon: its shipping class, saved as the class slug
	in cstore_products.shipping_class ("" for none). The classes are rows of
	cstore_shipping_classes (Delivery > Shipping Classes).
*/

const INPUT_CLASS = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm";

const ProductShippingEditor = ({ value, onChange }) => {
	const { token } = useCounterStore();

	var [classes, setclasses] = useState([]);
	var [loading, setloading] = useState(true);
	var [error, seterror] = useState('');

	useEffect(() => {
		if (!token) return;
		setloading(true);
		shippingClassRequest('get_shipping_classes', token)
			.then(res => { setclasses(res.classes ?? []); seterror(''); })
			.catch(err => seterror(err.message))
			.finally(() => setloading(false));
	}, [token]);

	var current = value ?? '';
	var selected = classes.find(c => c.slug === current) ?? null;
	/* A class deleted since: keep showing it rather than silently dropping it. */
	var missing = !loading && !error && current !== '' && !selected;

	return (
		<div className="flex flex-col gap-4 p-4">

			<div className="flex flex-col gap-1.5">
				<label htmlFor="product-shipping-class" className="flex items-center gap-2 text-sm font-medium text-gray-700">
					Shipping class {loading && <Spinner size={12} />}
				</label>
				<select
					id="product-shipping-class"
					className={INPUT_CLASS}
					value={current}
					disabled={loading}
					onChange={ev => onChange(ev.target.value)}
				>
					<option value="">No shipping class</option>
					{classes.map(c => (
						<option key={c.id} value={c.slug}>{`${c.name || c.slug} (${shippingClassCostLabel(c)}${Number(c.status) ? '' : ', inactive'})`}</option>
					))}
					{(missing || (loading && current !== '')) && <option value={current}>{loading ? current : `${current} (deleted)`}</option>}
				</select>
			</div>

			{error && <p className="text-xs text-red-600">Could not load shipping classes: {error}</p>}

			{selected && (
				<div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
					<span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#634FE5] ring-1 ring-gray-200">
						<IconPackages size={18} />
					</span>
					<div className="min-w-0 text-sm">
						<div className="font-medium text-gray-900">{selected.name || selected.slug}: {shippingClassCostLabel(selected)} by default</div>
						<div className="text-xs text-gray-500">
							{selected.description ? `${selected.description}. ` : ''}
							Each shipping method can charge its own amount for this class. It is added once per order; when the cart has several classes, the most expensive applies.
							{!Number(selected.status) && ' This class is inactive, so checkout adds nothing for it.'}
						</div>
					</div>
				</div>
			)}

			{missing && (
				<p className="text-xs text-amber-700">This class no longer exists, so checkout ignores it. Pick another class or "No shipping class".</p>
			)}

			<p className="text-xs text-gray-500">
				{!loading && classes.length === 0 ? 'No shipping classes yet. Create them in ' : 'Manage classes and their default costs in '}
				<Link href="/dashboard/shipping-classes" className="font-medium text-[#634FE5] hover:underline">Delivery → Shipping Classes</Link>. Set each method's own cost under Delivery → Shipping Zones.
			</p>

		</div>
	);
};

export default ProductShippingEditor;
