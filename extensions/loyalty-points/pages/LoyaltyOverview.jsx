"use client";

import React from "react";
import { IconGift } from "@tabler/icons-react";

/*
	An extension's dashboard screen.

	Rendered by app/dashboard/[...slug]/page.jsx, which is already inside
	app/dashboard/layout.jsx - so the sidebar, header and shell are there and
	this only draws the page body, exactly like a core screen under
	app/dashboard/<name>/page.jsx.

	It gets `slug` and `segments` as props, so one component can serve several
	routes the manifest points at it.
*/
const LoyaltyOverview = (props) => {

	const slug = props?.slug;

	return (
		<div className="p-5">

			<div className="mb-5 flex items-center gap-3">
				<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
					<IconGift size={20} />
				</span>
				<div>
					<h1 className="text-lg font-semibold text-gray-900">Loyalty Points</h1>
					<p className="text-sm text-gray-500">
						An example extension screen, served from <code className="text-xs">extensions/loyalty-points</code>.
					</p>
				</div>
			</div>

			<div className="rounded-xl border border-gray-200 bg-white p-5">
				<p className="text-sm text-gray-600">
					This page is not a file under <code className="text-xs">app/dashboard/</code>. The
					manifest maps the slug <code className="text-xs">{slug}</code> to this component and the
					catch-all route renders it.
				</p>
				<p className="mt-3 text-sm text-gray-600">
					The same extension also registers a <strong>Points Badge</strong> block in the
					page builder, with its own options panel and three layout presets.
				</p>
			</div>

		</div>
	);
};

export default LoyaltyOverview;
