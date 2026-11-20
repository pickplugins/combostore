"use client"
import React, { useState } from "react";
import { NewsletterSignupMarkup, EMPTY_VALUES } from "./NewsletterSignupView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of Newsletter Signup: the shop's own markup and
	classes, with an inert form (typing works, submitting signs nobody up).
	options.previewState "success" / "confirm" shows the thank-you or the
	check-your-inbox message instead, to style them.
*/
const NewsletterSignup = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options ?? {};

	var cls = elementCssClasses('newsletterSignup', props?.cssSelectors);
	const [values, setValues] = useState(EMPTY_VALUES);

	var rootClassName = `${cls('*')} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`;

	return (
		<div
			id={id}
			type={props?.type}
			className={rootClassName}
			draggable
			onClick={e => { e.stopPropagation(); setSelectedId(selectedId != id ? id : null); }}
			onDragStart={e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); }}
			onDragEnd={() => { setDraggingBlock?.(null); setDragOverIndex?.(null); }}
			onDragOver={e => { e.preventDefault(); setDragOverIndex?.(index); }}
			onDragLeave={() => setDragOverIndex?.(null)}
		>
			<NewsletterSignupMarkup
				cls={cls}
				id={id}
				options={options}
				values={values}
				setValue={(key, value) => setValues(v => ({ ...v, [key]: value }))}
				onSubmit={e => e.preventDefault()}
				loading={false}
				error={null}
				done={options?.previewState === 'success' || options?.previewSuccess === true ? 'subscribed' : options?.previewState === 'confirm' ? 'confirm' : null}
			/>
		</div>
	);
};

export default NewsletterSignup;
