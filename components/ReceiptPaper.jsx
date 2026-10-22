import React from "react";

import { getTemplate, clampWidth } from "./receiptTemplates";


/*
	The receipt itself: the part that ends up on paper.

	It is split out from ReceiptLabel so that the thing being printed is one
	component with one job, and the toolbar, the order fetch and the print
	window are somebody else's problem. ReceiptLabel renders it for the
	preview; the bulk "print all" screen renders one per order.

	Every node is styled inline, with no class doing any work. Both print paths
	copy this markup into a blank window that has never heard of the
	dashboard's stylesheet, so a Tailwind class here would simply not be there
	on paper - which is how the price/quantity line used to print as two words
	run together where the preview showed a spaced row.

	The two exceptions are deliberate: `receipt-sheet`, which the print window
	defines itself to centre the slip, and the blur that privacy mode puts over
	the customer's details, which is a Tailwind class precisely so that it
	stays on screen and off the paper.
*/


/**
 * A line of the slip, label on the left and value on the right.
 */
function Row(props) {

	const { label, value, style, valueStyle } = props;

	return (
		<div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", columnGap: 12, ...style }}>
			<span>{label}</span>
			<span style={{ textAlign: "right", whiteSpace: "nowrap", ...valueStyle }}>{value}</span>
		</div>
	);
}


export default function ReceiptPaper(props) {

	const template = getTemplate(props?.template);
	const width = clampWidth(props?.width ?? template.width);

	const order = props?.order;
	const items = props?.items ?? [];
	const settings = props?.settings;
	const privacyMode = props?.privacyMode;

	/* The dashboard's own currency formatter, passed in rather than reached
		 for, so a receipt rendered anywhere prices things the way the rest of
		 the screen does. */
	const money = props?.money ?? (value => `${value ?? 0}`);

	const small = Math.max(9, template.fontSize - 1);
	const gap = template.lineGap;

	const rule = template.rule === "none"
		? { height: gap }
		: { borderTop: `1px ${template.rule} ${template.ruleColor}`, margin: `${gap}px 0` };

	const row = { fontSize: template.fontSize, margin: `${Math.round(gap / 2)}px 0` };
	const muted = { color: template.mutedColor, fontSize: small };

	/* Section labels - "Bill to", the table's column heads - exist only on the
		 templates that ask for them: a till slip is read by someone who knows
		 what the lines are, and the label is a line of paper it does not need. */
	const label = {
		fontSize: small,
		color: template.mutedColor,
		letterSpacing: "0.06em",
		textTransform: "uppercase",
		marginBottom: 4,
	};

	const logoSrc = template.logo ? settings?.site_logo?.src : null;

	const subtotal = Number(order?.subtotal_amount ?? 0);
	const discount = Number(order?.discount_amount ?? 0);
	const tax = Number(order?.tax_amount ?? 0);
	const shipping = Number(order?.shipping_amount ?? 0);
	const advance = Number(order?.advance_payment ?? 0);
	const total = Number(order?.total_amount ?? 0);

	/* What is still owed on delivery. An advance used to be listed as a
		 negative line above a total it had not been taken off, which left the
		 customer to do the arithmetic on the one number they care about. */
	const due = total - advance;


	const storeBlock = (
		<div>
			<div style={{ fontWeight: "bold", fontSize: template.fontSize }}>{settings?.site_title}</div>
			{settings?.address && (
				<div style={{ ...muted, marginTop: 3 }}>{settings.address}</div>
			)}
			{settings?.email && (
				<div style={{ ...muted, marginTop: 3 }}>Email: {settings.email}</div>
			)}
			{settings?.whatsapp && (
				<div style={{ ...muted, marginTop: 3 }}>WhatsApp: {settings.whatsapp}</div>
			)}
		</div>
	);


	/* The three headings the templates pick between: the word RECEIPT over the
		 order number, the shop's own name and branding, or the two side by side
		 the way a document does it. */
	const heading = (

		template.heading === "split" ? (

			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", columnGap: 16 }}>

				<div>
					{logoSrc && (
						<img src={logoSrc} alt="" style={{ maxHeight: 44, marginBottom: 6, display: "block" }} />
					)}
					<div style={{ fontWeight: "bold", fontSize: template.fontSize + 1 }}>{settings?.site_title}</div>
					{settings?.address && (
						<div style={{ ...muted, marginTop: 3, maxWidth: Math.round(width * 0.5) }}>{settings.address}</div>
					)}
				</div>

				<div style={{ textAlign: "right" }}>
					<div style={{ fontSize: template.titleSize, fontWeight: "bold", color: template.accent, letterSpacing: "0.04em" }}>
						RECEIPT
					</div>
					<div style={{ ...muted, marginTop: 4 }}>#{order?.id}</div>
					<div style={muted}>{order?.created_at}</div>
				</div>

			</div>

		) : template.heading === "store" ? (

			<div style={{ textAlign: "center" }}>
				{logoSrc && (
					<img src={logoSrc} alt="" style={{ maxHeight: 48, margin: "0 auto 6px", display: "block" }} />
				)}
				<div style={{ fontWeight: "bold", fontSize: template.titleSize, color: template.accent }}>
					{settings?.site_title}
				</div>
				{/* Only when the shop's details belong at the top; otherwise the
				    footer carries them and this would say it all twice. */}
				{template.storeBlock === "top" && settings?.address && (
					<div style={{ ...muted, marginTop: 4 }}>{settings.address}</div>
				)}
				{template.storeBlock === "top" && settings?.whatsapp && (
					<div style={muted}>{settings.whatsapp}</div>
				)}
				<div style={{ ...muted, marginTop: 6 }}>
					Order #{order?.id} · {order?.created_at}
				</div>
			</div>

		) : (

			<div style={{ textAlign: "center" }}>
				<div style={{ fontWeight: "bold", fontSize: template.titleSize, letterSpacing: "0.08em" }}>
					RECEIPT
				</div>
				<div style={{ ...muted, marginTop: 4 }}>Order #{order?.id}</div>
				<div style={muted}>{order?.created_at}</div>
			</div>

		)
	);


	const totals = (
		<div
			style={template.totalsBox
				? { background: "#f9fafb", border: `1px solid ${template.ruleColor}`, borderRadius: 8, padding: "10px 12px" }
				: undefined}>

			<Row style={row} label="Subtotal" value={money(subtotal)} />

			{discount > 0 && (
				<Row style={row} label="Discount" value={`- ${money(discount)}`} />
			)}

			{/* Tax used to be rendered with a minus in front of it, which made
			    every taxed receipt add up to the wrong number. */}
			{tax > 0 && (
				<Row style={row} label="VAT / Tax" value={money(tax)} />
			)}

			{shipping > 0 && (
				<Row style={row} label="Shipping" value={money(shipping)} />
			)}

			<div style={rule}></div>

			<Row
				style={{ ...row, fontSize: template.fontSize + 2 }}
				label="Total"
				value={money(total)}
				valueStyle={{ fontWeight: "bold", color: template.accent }}
				/>

			{advance > 0 && (
				<>
					<Row style={row} label="Advance paid" value={`- ${money(advance)}`} />
					<Row
						style={{ ...row, fontWeight: "bold" }}
						label="Due"
						value={money(due)}
						/>
				</>
			)}

		</div>
	);


	return (
		/* `receipt-sheet` is the one class that does anything here, and the
			 print window is what defines it - see receiptPrintCss. */
		<div
			className="receipt-sheet"
			style={{
				width: width,
				boxSizing: "border-box",
				padding: template.items === "table" ? 18 : 12,
				background: "#ffffff",
				color: "#000000",
				fontFamily: template.fontFamily,
				fontSize: template.fontSize,
				lineHeight: 1.45,
			}}>

			{heading}

			<div style={rule}></div>

			{/* Privacy mode blurs the customer on screen. The class is Tailwind's
			    on purpose: it is not in the print window's stylesheet, so the
			    paper copy is readable - and that window also forces
			    `filter: none`, so this cannot start printing blurred. */}
			<div className={privacyMode ? "blur-[3px]" : undefined}>
				{template.fieldLabels && (
					<div style={label}>Bill to</div>
				)}
				<div style={{ fontWeight: "bold" }}>{order?.billing_name}</div>
				{order?.billing_phone && (
					<div style={muted}>{order.billing_phone}</div>
				)}
				{order?.billing_address && (
					<div style={muted}>{order.billing_address}</div>
				)}
				{order?.city && (
					<div style={muted}>{order.city}</div>
				)}
			</div>

			<div style={rule}></div>

			{/* Items. A table for the sheet, one line each for the 58mm roll,
			    name over a price/quantity line for the rest. */}
			{template.items === "table" ? (

				<table style={{ width: "100%", borderCollapse: "collapse", fontSize: template.fontSize }}>
					<thead>
						<tr>
							<th style={{ ...label, textAlign: "left", padding: "0 0 6px" }}>Item</th>
							<th style={{ ...label, textAlign: "center", padding: "0 0 6px", width: 40 }}>Qty</th>
							<th style={{ ...label, textAlign: "right", padding: "0 0 6px", width: 70 }}>Price</th>
							<th style={{ ...label, textAlign: "right", padding: "0 0 6px", width: 80 }}>Amount</th>
						</tr>
					</thead>
					<tbody>
						{items?.map(item => (
							<tr key={item.id} style={{ borderTop: `1px solid ${template.ruleColor}` }}>
								<td style={{ padding: "7px 8px 7px 0", verticalAlign: "top" }}>
									<span dangerouslySetInnerHTML={{ __html: `${item.product_name}` }} />
								</td>
								<td style={{ padding: "7px 0", textAlign: "center", verticalAlign: "top" }}>{item.quantity}</td>
								<td style={{ padding: "7px 0", textAlign: "right", verticalAlign: "top", whiteSpace: "nowrap" }}>{money(item.price)}</td>
								<td style={{ padding: "7px 0", textAlign: "right", verticalAlign: "top", whiteSpace: "nowrap" }}>
									{money(item.price * item.quantity)}
								</td>
							</tr>
						))}
					</tbody>
				</table>

			) : template.items === "line" ? (

				<div>
					{items?.map(item => (
						<div
							key={item.id}
							style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", columnGap: 8, margin: `${Math.round(gap / 2)}px 0` }}>
							<span style={{ minWidth: 0 }}>
								<span style={{ fontWeight: "bold" }}>{item.quantity}× </span>
								<span dangerouslySetInnerHTML={{ __html: `${item.product_name}` }} />
							</span>
							<span style={{ whiteSpace: "nowrap" }}>{money(item.price * item.quantity)}</span>
						</div>
					))}
				</div>

			) : (

				<div>
					<Row
						style={{ ...row, fontWeight: "bold" }}
						label="Items"
						value="Amount"
						valueStyle={{ fontWeight: "bold" }}
						/>

					<div style={rule}></div>

					{items?.map(item => (
						<div
							key={item.id}
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
								columnGap: 12,
								padding: `${Math.round(gap / 2)}px 0`,
								borderBottom: `1px dashed ${template.ruleColor}`,
							}}>
							<div style={{ minWidth: 0 }}>
								<div dangerouslySetInnerHTML={{ __html: `${item.product_name}` }} />
								<div style={{ ...muted, marginTop: 2 }}>
									{money(item.price)} × {item.quantity}
								</div>
							</div>
							<span style={{ whiteSpace: "nowrap" }}>{money(item.price * item.quantity)}</span>
						</div>
					))}
				</div>

			)}

			<div style={rule}></div>

			{totals}

			<div style={rule}></div>

			{order?.payment_method && (
				<Row style={row} label="Payment" value={order.payment_method} />
			)}

			{order?.status && (
				<Row style={row} label="Status" value={order.status} />
			)}

			{template.storeBlock === "bottom" && (
				<>
					<div style={rule}></div>
					<div style={{ marginTop: gap }}>{storeBlock}</div>
				</>
			)}

			{template.footerNote && (
				<div style={{ ...muted, textAlign: "center", marginTop: gap * 2 }}>
					{template.footerNote}
				</div>
			)}

		</div>
	);
}
