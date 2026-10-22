import React from "react";

import { getInvoiceTemplate, getPaper, getDensity } from "./invoiceTemplates";


/*
	The invoice document, as it looks on screen and on paper.

	Styled inline from end to end, for the same reason the receipt is: Print
	copies this markup into a window that has never loaded the dashboard's
	stylesheet, and a Tailwind class there is simply a class that does not
	exist. The two exceptions are `invoice-sheet`, which the print stylesheet
	defines itself, and privacy mode's blur, which is a class precisely so
	that it stays on screen and off the sheet.

	The PDF is drawn separately - see invoicePdf - from the same template
	tokens and the same normalised invoice, so the two agree without this
	file knowing anything about jsPDF.
*/


export default function InvoicePaper(props) {

	const template = getInvoiceTemplate(props?.template);
	const paper = getPaper(props?.paper);
	const density = getDensity(template);

	const invoice = props?.invoice;
	const money = props?.money ?? (value => `${value ?? 0}`);
	const privacyMode = props?.privacyMode;

	const items = invoice?.items ?? [];

	const small = template.fontSize - 1.5;

	const label = {
		fontSize: small,
		letterSpacing: "0.08em",
		textTransform: "uppercase",
		color: template.muted,
		marginBottom: 6,
	};

	const muted = { color: template.muted, fontSize: small };

	const cell = {
		padding: `${density.rowPadding}px 10px`,
		verticalAlign: "top",
	};

	/* The three table dresses. Bordered is a full grid, zebra drops the lines
		 for alternating fills, lines keeps a hairline under each row and
		 nothing else. */
	const headCell = {
		...cell,
		fontSize: small,
		letterSpacing: "0.06em",
		textTransform: "uppercase",
		fontWeight: "bold",
		color: template.table === "zebra" ? template.accentText : template.muted,
		background: template.table === "zebra" ? template.accent : (template.table === "bordered" ? "#f5f5f5" : "transparent"),
		border: template.table === "bordered" ? `1px solid ${template.ruleColor}` : "none",
		borderBottom: template.table === "lines" ? `2px solid ${template.ruleColor}` : undefined,
	};

	const bodyCell = (index) => ({
		...cell,
		border: template.table === "bordered" ? `1px solid ${template.ruleColor}` : "none",
		borderBottom: template.table === "lines" ? `1px solid ${template.ruleColor}` : undefined,
		background: template.table === "zebra" && index % 2 === 1 ? "#f9fafb" : undefined,
	});


	const fromBlock = (
		<div>
			{template.logo && invoice?.from?.logo && (
				<img
					src={invoice.from.logo}
					alt=""
					style={{ maxHeight: 52, marginBottom: 10, display: "block" }}
					/>
			)}
			<div style={{ fontSize: template.fontSize + 7, fontWeight: "bold", marginBottom: 6 }}>
				{invoice?.from?.name}
			</div>
			{invoice?.from?.address && <div style={muted}>{invoice.from.address}</div>}
			{invoice?.from?.city && <div style={muted}>{invoice.from.city}</div>}
			{invoice?.from?.email && <div style={muted}>{invoice.from.email}</div>}
			{invoice?.from?.phone && <div style={muted}>{invoice.from.phone}</div>}
		</div>
	);

	const metaRows = (
		<>
			<div style={{ fontSize: template.fontSize + 4, fontWeight: "bold", letterSpacing: "0.06em" }}>
				INVOICE
			</div>
			<div style={{ marginTop: 6 }}>#{invoice?.number}</div>
			{invoice?.date && <div style={muted}>{invoice.date}</div>}
			{invoice?.paymentMethod && <div style={muted}>{invoice.paymentMethod}</div>}
			{invoice?.paymentStatus && <div style={muted}>Payment: {invoice.paymentStatus}</div>}
		</>
	);


	const header = (

		template.header === "band" ? (

			/* The band carries the header across the full width of the sheet, so
				 it bleeds past the page padding rather than sitting in a box. */
			<div
				style={{
					background: template.accent,
					color: template.accentText,
					margin: `-${density.blockGap}px -${density.blockGap}px ${density.blockGap}px`,
					padding: `${density.blockGap}px`,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					columnGap: 24,
				}}>

				<div>
					{template.logo && invoice?.from?.logo && (
						<img
							src={invoice.from.logo}
							alt=""
							style={{ maxHeight: 48, marginBottom: 10, display: "block", background: "#ffffff", borderRadius: 6, padding: 4 }}
							/>
					)}
					<div style={{ fontSize: template.fontSize + 6, fontWeight: "bold" }}>
						{invoice?.from?.name}
					</div>
					{invoice?.from?.address && (
						<div style={{ fontSize: small, opacity: 0.85, marginTop: 4 }}>{invoice.from.address}</div>
					)}
					{invoice?.from?.city && (
						<div style={{ fontSize: small, opacity: 0.85 }}>{invoice.from.city}</div>
					)}
				</div>

				<div style={{ textAlign: "right" }}>
					<div style={{ fontSize: template.fontSize + 6, fontWeight: "bold", letterSpacing: "0.06em" }}>
						INVOICE
					</div>
					<div style={{ marginTop: 6 }}>#{invoice?.number}</div>
					{invoice?.date && <div style={{ fontSize: small, opacity: 0.85 }}>{invoice.date}</div>}
					{invoice?.paymentStatus && (
						<div style={{ fontSize: small, opacity: 0.85 }}>Payment: {invoice.paymentStatus}</div>
					)}
				</div>

			</div>

		) : template.header === "stacked" ? (

			<div style={{ marginBottom: density.blockGap }}>
				{fromBlock}
				<div
					style={{
						marginTop: density.blockGap,
						paddingTop: density.blockGap / 2,
						borderTop: `1px solid ${template.ruleColor}`,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						columnGap: 24,
					}}>
					<div style={{ fontSize: template.fontSize + 10, fontWeight: "bold", letterSpacing: "0.1em" }}>
						INVOICE
					</div>
					<div style={{ textAlign: "right" }}>
						<div>#{invoice?.number}</div>
						{invoice?.date && <div style={muted}>{invoice.date}</div>}
						{invoice?.paymentStatus && <div style={muted}>Payment: {invoice.paymentStatus}</div>}
					</div>
				</div>
			</div>

		) : (

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					alignItems: "flex-start",
					columnGap: 24,
					rowGap: 16,
					marginBottom: density.blockGap,
				}}>
				{fromBlock}
				<div style={{ textAlign: "right" }}>{metaRows}</div>
			</div>

		)
	);


	const totalsRow = (text, value, extra = {}) => (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				columnGap: 24,
				padding: "4px 0",
				...extra,
			}}>
			<span>{text}</span>
			<span style={{ whiteSpace: "nowrap" }}>{value}</span>
		</div>
	);


	return (
		/* `invoice-sheet` is the one class with work to do, and the print window
			 is what defines it. */
		<div
			className="invoice-sheet"
			style={{
				width: "100%",
				maxWidth: `${paper.width * 3}px`,
				margin: "0 auto",
				boxSizing: "border-box",
				padding: density.blockGap,
				background: "#ffffff",
				color: "#111827",
				fontFamily: template.fontFamily,
				fontSize: template.fontSize,
				lineHeight: 1.5,
			}}>

			{header}

			{/* Privacy mode blurs the customer on screen only: this is a Tailwind
			    class, which the print window does not have, and that window also
			    forces `filter: none` so it cannot start printing blurred. */}
			<div className={privacyMode ? "blur-[2.5px]" : undefined} style={{ marginBottom: density.blockGap }}>
				<div style={label}>Bill to</div>
				<div style={{ fontWeight: "bold" }}>{invoice?.to?.name}</div>
				{invoice?.to?.address && <div style={muted}>{invoice.to.address}</div>}
				{invoice?.to?.city && <div style={muted}>{invoice.to.city}</div>}
				{invoice?.to?.phone && <div style={muted}>{invoice.to.phone}</div>}
			</div>

			<table
				style={{
					width: "100%",
					borderCollapse: "collapse",
					marginBottom: density.blockGap,
					border: template.table === "bordered" ? `1px solid ${template.ruleColor}` : "none",
				}}>
				<thead>
					<tr>
						<th style={{ ...headCell, textAlign: "left" }}>Description</th>
						<th style={{ ...headCell, textAlign: "center", width: 60 }}>Qty</th>
						<th style={{ ...headCell, textAlign: "right", width: 110 }}>Unit price</th>
						<th style={{ ...headCell, textAlign: "right", width: 120 }}>Total</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, index) => (
						<tr key={item.id}>
							<td style={{ ...bodyCell(index), textAlign: "left" }}>
								<span dangerouslySetInnerHTML={{ __html: `${item.name}` }} />
							</td>
							<td style={{ ...bodyCell(index), textAlign: "center" }}>{item.qty}</td>
							<td style={{ ...bodyCell(index), textAlign: "right", whiteSpace: "nowrap" }}>{money(item.price)}</td>
							<td style={{ ...bodyCell(index), textAlign: "right", whiteSpace: "nowrap" }}>
								{money(item.qty * item.price)}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<div
					style={{
						minWidth: 260,
						...(template.totals === "box"
							? { background: "#f9fafb", border: `1px solid ${template.ruleColor}`, borderRadius: 8, padding: "14px 16px" }
							: {}),
					}}>

					{totalsRow("Subtotal", money(invoice?.subtotal))}

					{invoice?.discount > 0 && totalsRow("Discount", `- ${money(invoice.discount)}`)}

					{invoice?.shipping > 0 && totalsRow("Delivery charge", money(invoice.shipping))}

					{totalsRow("Total", money(invoice?.total), {
						marginTop: 8,
						paddingTop: 10,
						borderTop: `2px solid ${template.accent}`,
						fontSize: template.fontSize + 3,
						fontWeight: "bold",
					})}

					{/* An advance only earns its lines when there is one. It used to
					    be taken off inside the total and never shown, which left the
					    sheet not adding up. */}
					{invoice?.advance > 0 && (
						<>
							{totalsRow("Advance paid", `- ${money(invoice.advance)}`)}
							{totalsRow("Amount due", money(invoice.due), {
								fontWeight: "bold",
								color: template.accent,
							})}
						</>
					)}

				</div>
			</div>

			{template.note && (
				<div style={{ ...muted, marginTop: density.blockGap, paddingTop: 12, borderTop: `1px solid ${template.ruleColor}` }}>
					{template.note}
				</div>
			)}

		</div>
	);
}
