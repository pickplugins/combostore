"use client";

import React from "react";
import Link from "next/link";
import { IconTrash } from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useUtilsStore } from "../../../store/useUtilsStore";
import { useQuoteStore } from "../lib/store";
import { FORM_FIELDS } from "../lib/defaults";

/*
	The quote list and the request form: everything between collecting
	products and the merchant receiving them.

	Same editor contract as a core element. On the canvas it shows a sample
	line, because the merchant's own browser has an empty quote list and a
	block that renders "nothing here yet" cannot be laid out or styled.
*/

const SAMPLE_ITEMS = [
	{ id: "sample-1", title: "Sample product", quantity: 2, price: 1200, note: "" },
	{ id: "sample-2", title: "Another product, no price", quantity: 10, price: "", note: "Need it in blue" },
];

const QuoteList = (props) => {

	var draggingBlock = props?.draggingBlock;
	var setDraggingBlock = props?.setDraggingBlock;

	var dragOverIndex = props?.dragOverIndex;
	var setDragOverIndex = props?.setDragOverIndex;

	var setSelectedId = props?.setSelectedId;
	var selectedId = props?.selectedId;
	var index = props?.index;
	var cssSelectors = props?.cssSelectors ?? {};

	var id = props?.id;
	var type = props?.type;

	var options = props?.options ?? {};
	var heading = options?.heading ?? "Your quote request";
	var emptyText = options?.emptyText ?? "You have not added anything to quote yet.";
	var emptyLinkLabel = options?.emptyLinkLabel ?? "Browse products";
	var emptyLinkUrl = options?.emptyLinkUrl ?? "/";
	var submitLabel = options?.submitLabel ?? "Send request";
	var showNotes = options?.showNotes !== false;
	var showPrices = options?.showPrices === true;

	const { userDataX, currency, addNotification } = useCounterStore();
	const { wrapCurrency } = useUtilsStore();

	const settings = useQuoteStore((s) => s.settings);
	const liveItems = useQuoteStore((s) => s.items);
	const itemsHydrated = useQuoteStore((s) => s.itemsHydrated);
	const saving = useQuoteStore((s) => s.saving);
	const { setQuantity, setItemNote, removeItem, submitQuote } = useQuoteStore();

	const isEditor = typeof setSelectedId === "function";
	const items = isEditor ? SAMPLE_ITEMS : liveItems;

	const [form, setForm] = React.useState({
		name: "", email: "", phone: "", company: "", address: "", neededBy: "", message: "",
	});
	const [errors, setErrors] = React.useState({});
	const [done, setDone] = React.useState(null);

	/*
		Prefill from the signed-in customer once they are known.

		Guarded on the field still being empty so it never overwrites
		something the shopper has typed - `userDataX` arrives asynchronously
		and can land mid-sentence.
	*/
	React.useEffect(() => {
		if (!userDataX?.id) return;
		setForm((previous) => ({
			...previous,
			name: previous.name || userDataX?.name || "",
			email: previous.email || userDataX?.email || "",
			phone: previous.phone || userDataX?.phone || "",
		}));
	}, [userDataX]);

	const visibleFields = FORM_FIELDS.filter((f) => (
		f.locked || (settings?.fields?.[f.key] ?? "optional") !== "off"
	));

	async function onSubmit() {
		if (isEditor) return;

		const result = await submitQuote({ form, currency, userId: userDataX?.id ?? null });

		if (!result.ok) {
			setErrors(result.errors ?? {});
			if (!result.errors) {
				addNotification?.({ type: "error", title: "Request not sent", content: result.message });
			}
			return;
		}

		setErrors({});
		setDone(result);
	}

	const editorProps = isEditor
		? {
			draggable: true,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			},
			onDragStart: (e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			},
			onDragEnd: () => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			},
			onDragOver: (e) => { e.preventDefault(); setDragOverIndex(index); },
			onDragLeave: () => setDragOverIndex(null),
		}
		: {};

	const rootClass = `${cssSelectors['*']?.classes ?? ''} ${isEditor ? `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}` : ''}`;

	/* Sent. The reference is the order id, which is what the merchant will
	   quote back, so it is worth showing rather than a bare thank-you. */
	if (done) {
		return (
			<div id={id} index={index} type={type} className={rootClass}>
				<div className={`${cssSelectors['successTitle']?.classes ?? ''}`}>
					{settings?.successTitle || "Request received"}
				</div>
				<div className={`${cssSelectors['successText']?.classes ?? ''}`}>
					{settings?.successMessage || "Thanks - we will send you a price shortly."}
				</div>
				{done.orderId && (
					<div className={`${cssSelectors['reference']?.classes ?? ''}`}>
						Reference #{done.orderId}
					</div>
				)}
			</div>
		);
	}

	/*
		Before the effect has read localStorage the list is empty, and saying
		"you have not added anything" to someone who has is worse than saying
		nothing for a moment.
	*/
	if (!isEditor && !itemsHydrated) {
		return <div id={id} index={index} type={type} className={rootClass} />;
	}

	if (items.length === 0) {
		return (
			<div id={id} index={index} type={type} className={rootClass}>
				{heading && <div className={`${cssSelectors['heading']?.classes ?? ''}`}>{heading}</div>}
				<div className={`${cssSelectors['empty']?.classes ?? ''}`}>{emptyText}</div>
				{emptyLinkLabel && (
					<Link href={emptyLinkUrl} className={`${cssSelectors['emptyLink']?.classes ?? ''}`}>
						{emptyLinkLabel}
					</Link>
				)}
			</div>
		);
	}

	return (
		<div id={id} index={index} type={type} {...editorProps} className={rootClass}>

			{heading && <div className={`${cssSelectors['heading']?.classes ?? ''}`}>{heading}</div>}

			<div className={`${cssSelectors['items']?.classes ?? ''}`}>
				{items.map((item) => (
					<div key={`${item.id}-${item.variation_id ?? ''}`} className={`${cssSelectors['item']?.classes ?? ''}`}>

						{item.thumbnail && (
							/* eslint-disable-next-line @next/next/no-img-element */
							<img src={item.thumbnail} alt="" className={`${cssSelectors['itemImage']?.classes ?? ''}`} />
						)}

						<div className={`${cssSelectors['itemBody']?.classes ?? ''}`}>
							<div className={`${cssSelectors['itemTitle']?.classes ?? ''}`}>{item.title}</div>

							{showPrices && (
								<div className={`${cssSelectors['itemPrice']?.classes ?? ''}`}>
									{item.price === "" || item.price === null || item.price === undefined
										? (settings?.hiddenPriceText || "Price on request")
										: wrapCurrency(item.price)}
								</div>
							)}

							{showNotes && (
								<input
									type="text"
									placeholder="Anything we should know about this item?"
									className={`${cssSelectors['itemNote']?.classes ?? ''}`}
									value={item.note ?? ""}
									onChange={(e) => !isEditor && setItemNote(item.id, item.variation_id, e.target.value)}
								/>
							)}
						</div>

						<div className={`${cssSelectors['itemControls']?.classes ?? ''}`}>
							<input
								type="text"
								className={`${cssSelectors['itemQuantity']?.classes ?? ''}`}
								value={item.quantity}
								onChange={(e) => !isEditor && setQuantity(item.id, item.variation_id, e.target.value)}
							/>
							<button
								type="button"
								aria-label="Remove"
								className={`${cssSelectors['itemRemove']?.classes ?? ''}`}
								onClick={() => !isEditor && removeItem(item.id, item.variation_id)}>
								<IconTrash size={15} />
							</button>
						</div>

					</div>
				))}
			</div>

			<div className={`${cssSelectors['form']?.classes ?? ''}`}>

				{visibleFields.map((field) => {
					const required = field.locked || settings?.fields?.[field.key] === "required";
					return (
						<div key={field.key} className={`${cssSelectors['field']?.classes ?? ''}`}>
							<label className={`${cssSelectors['label']?.classes ?? ''}`}>
								{field.label}{required ? " *" : ""}
							</label>

							{field.kind === "textarea" ? (
								<textarea
									rows={3}
									className={`${cssSelectors['input']?.classes ?? ''}`}
									value={form[field.key]}
									onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
								/>
							) : (
								<input
									type={field.kind === "email" ? "email" : field.kind === "tel" ? "tel" : field.kind === "date" ? "date" : "text"}
									className={`${cssSelectors['input']?.classes ?? ''}`}
									value={form[field.key]}
									onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
								/>
							)}

							{errors[field.key] && (
								<div className={`${cssSelectors['error']?.classes ?? ''}`}>{errors[field.key]}</div>
							)}
						</div>
					);
				})}

				{/* Not tied to one field: it is the rule that at least one way
				    of replying has to be filled in. */}
				{errors.contact && (
					<div className={`${cssSelectors['error']?.classes ?? ''}`}>{errors.contact}</div>
				)}

				<button
					type="button"
					disabled={saving}
					onClick={onSubmit}
					className={`${cssSelectors['submit']?.classes ?? ''}`}>
					{saving ? "Sending..." : submitLabel}
				</button>

				{settings?.replyTime && (
					<div className={`${cssSelectors['replyTime']?.classes ?? ''}`}>
						We usually reply {settings.replyTime}.
					</div>
				)}

			</div>

		</div>
	);
};

export default QuoteList;
