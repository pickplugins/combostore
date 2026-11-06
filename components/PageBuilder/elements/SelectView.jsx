"use client"
import React from "react";
import { useState, useEffect } from "react";
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	A select's options: options.prams as saved, or, when options.pramsQuery
	is set, the terms that query returns ({ label: name, value: term_id }) -
	the same two sources the builder's Select uses.
*/
export function useSelectOptions(options) {
	var pramsQuery = options?.pramsQuery;
	var queryKey = pramsQuery && typeof pramsQuery === 'object' && Object.keys(pramsQuery).length > 0 ? JSON.stringify(pramsQuery) : '';
	var [fetched, setfetched] = useState(null);

	useEffect(() => {
		if (!queryKey) { setfetched(null); return; }
		var cancelled = false;
		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: queryKey,
		})
			.then((response) => {
				if (!response.ok) throw new Error('request failed');
				return response.json();
			})
			.then((res) => {
				if (cancelled || !res?.terms) return;
				setfetched(Object.values(res.terms).map(item => ({ label: item.name, value: item.term_id })));
			})
			.catch(() => { });
		return () => { cancelled = true; };
	}, [queryKey]);

	return fetched ?? (Array.isArray(options?.prams) ? options.prams : []);
}

/*
	A labelled select. This block had no storefront renderer, so the shop
	printed "[select]". Choosing an option does nothing unless a parent passes
	onChangeInput.
*/
const SelectView = (props) => {

	/* A key the block lacks falls back to the select defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('select', props?.cssSelectors);

	var options = props?.options;
	var choices = useSelectOptions(options);
	var selectId = `${props?.id}-select`;

	return (
		<div id={props?.id} type={props?.type} className={cls('*')}>
			{options?.label && <label htmlFor={selectId} className={cls('label')}>{options.label}</label>}
			<select
				id={selectId}
				className={cls('select')}
				multiple={options?.multiple ?? false}
				defaultValue={options?.value}
				onChange={ev => props?.onChangeInput?.(ev.target.value)}
			>
				{choices.map((choice, idx) => (
					<option key={`${choice?.value}-${idx}`} value={choice?.value}>{choice?.label}</option>
				))}
			</select>
		</div>
	);
};

export default SelectView;
