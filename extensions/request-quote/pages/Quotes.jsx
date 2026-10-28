"use client";

import React from "react";
import { IconFileInvoice, IconInbox, IconAdjustments } from "@tabler/icons-react";

import QuoteInbox from "./QuoteInbox";
import QuoteDetail from "./QuoteDetail";
import QuoteSettings from "./QuoteSettings";

/*
	The extension's dashboard screen.

	Rendered by app/dashboard/[...slug]/page.jsx, which already sits inside
	app/dashboard/layout.jsx - so the sidebar, header and shell are there and
	this draws only the page body, exactly like a core screen.

	`segments` carries the rest of the path, so /dashboard/quotes/41 opens
	request 41 directly. That matters because a quote is the kind of thing a
	merchant links to from a chat with a colleague; a tab that only exists in
	component state cannot be linked to.
*/
const Quotes = ({ segments }) => {

	/* segments[0] is "quotes". Anything after it is the request to open. */
	const fromPath = Array.isArray(segments) ? segments[1] : null;

	const [openId, setOpenId] = React.useState(fromPath ?? null);
	const [tab, setTab] = React.useState("inbox");
	/* Bumped on save so the inbox refetches when it comes back into view,
	   rather than showing the stage the request had before it was quoted. */
	const [stamp, setStamp] = React.useState(0);

	React.useEffect(() => { if (fromPath) setOpenId(fromPath); }, [fromPath]);

	return (
		<div className="flex flex-col gap-5 p-5">

			<div className="flex items-center gap-2">
				<IconFileInvoice size={22} className="text-[#634FE5]" />
				<h1 className="text-xl font-semibold text-gray-900">Quotes</h1>
			</div>

			{!openId && (
				<div className="flex gap-1 border-b border-gray-200">
					<Tab active={tab === "inbox"} onClick={() => setTab("inbox")} icon={<IconInbox size={15} />}>
						Requests
					</Tab>
					<Tab active={tab === "settings"} onClick={() => setTab("settings")} icon={<IconAdjustments size={15} />}>
						Rules and form
					</Tab>
				</div>
			)}

			{openId ? (
				<QuoteDetail
					orderId={openId}
					onBack={() => setOpenId(null)}
					onSaved={() => setStamp((s) => s + 1)}
				/>
			) : tab === "inbox" ? (
				<QuoteInbox key={stamp} onOpen={(id) => setOpenId(id)} />
			) : (
				<QuoteSettings />
			)}

		</div>
	);
};

const Tab = ({ active, onClick, icon, children }) => (
	<button
		type="button"
		onClick={onClick}
		className={`-mb-px inline-flex items-center gap-1.5 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
			active
				? "border-[#634FE5] text-[#634FE5]"
				: "border-transparent text-gray-500 hover:text-gray-800"
		}`}>
		{icon}
		{children}
	</button>
);

export default Quotes;
