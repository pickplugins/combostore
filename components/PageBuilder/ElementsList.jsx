import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconHeading, IconColumns, IconSection, IconFileText, IconXboxB, IconTrash, IconStarFilled, IconStar, IconX, IconSearch, IconSquareOff, IconGripVertical, IconPuzzle } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../components/ToggleContent';


/*
	Palette styling.

	A tile is the thing you drag onto the canvas, so it has to look draggable:
	these were flat white rectangles with a `hover:bg-gray-400` that turned the
	label grey-on-grey. They are bordered cards now, with a grab cursor, a brand
	tint on hover and an icon that stays legible.
*/
const TILE =
	"group flex cursor-grab select-none flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-3 text-center text-[11px] font-medium leading-tight text-gray-600 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 active:cursor-grabbing [&_svg]:size-[18px] [&_svg]:text-gray-400 [&_svg]:transition-colors group-hover:[&_svg]:text-brand";

const GROUP_HEADER =
	"flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-100 select-none";

const SEARCH_INPUT =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !py-2 !pl-9 !pr-8 !text-sm !text-gray-700 !shadow-none !outline-none placeholder:text-gray-400 focus:!border-brand focus:!ring-4 focus:!ring-brand/10 transition-colors";


const ElementsList = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
	const { ref } = useDraggable({
		id: props.id,
	});

	var onTriggerOpen = props?.onTriggerOpen;

	var elements = props.elements;
	var prams = props.prams;
	var selectedBlock = props?.selectedBlock;
	var selectedBlockType = props?.selectedBlock?.type;

	const [loading, setloading] = useState(false);
	const [childElements, setchildElements] = useState([]);
	/* There are ~90 elements across five collapsed groups, so finding one
		 meant opening each group in turn and reading every tile. */
	const [query, setQuery] = useState('');







	var groups = [
		{ id: 'text', label: 'Text' },
		{ id: 'layout', label: 'Layout' },
		{ id: 'content', label: 'Content' },
		{ id: 'product', label: 'Product' },
		{ id: 'shop', label: 'Shop' },
		{ id: 'invoice', label: 'Invoice' },
	]


	function groupElements(groups, elements) {
		return elements.reduce((acc, element) => {
			const ids = element.group?.length ? element.group : ["other"];

			ids.forEach(id => {
				if (!acc[id]) acc[id] = [];
				acc[id].push(element);
			});

			return acc;
		}, Object.fromEntries([
			...groups.map(g => [g.id, []]),
			["other", []]
		]));
	}


	function getChildElements(parentType, elements) {
		return elements.filter(element =>
			Array.isArray(element.parent) &&
			element.parent.includes(parentType)
		);
	}



	useEffect(() => {

		var childBlocks = getChildElements(selectedBlockType, elements);



		setchildElements(childBlocks)

	}, [selectedBlockType]);




	var elementsByGroups = groupElements(groups, elements)


	/* Only top-level elements are placeable from the palette; the ones with a
		 `parent` are offered under "Child Elements" when their parent is
		 selected. The group listings already skipped them, so search does too. */
	var trimmedQuery = query.trim().toLowerCase();

	var matches = trimmedQuery
		? elements.filter(element =>
			!element.parent &&
			(String(element?.label ?? '').toLowerCase().includes(trimmedQuery) ||
				String(element?.type ?? '').toLowerCase().includes(trimmedQuery)))
		: [];

	/* One renderer for every tile, so a result from search drags exactly the
		 way the same tile does inside its group. */
	function renderTile(element, keyPrefix) {
		return (
			<div
				draggable
				key={`${keyPrefix}-${element?.type}`}
				id={element?.type}
				title={element?.label}
				onDragStart={e => {
					e.dataTransfer.setData("paletteType", element.type);
				}}
				className={TILE}>

				{/* Around half the definitions carry `icon: null`, which left
				    those tiles a row shorter than the ones beside them and the
				    grid visibly ragged. */}
				{element?.icon ?? <IconPuzzle />}

				<span className="line-clamp-2">{element?.label}</span>
			</div>
		);
	}


	return (
		<div className="p-3">

			{/* Sticky so it stays reachable while a long group is scrolled. */}
			<div className="sticky -top-3 z-10 -mx-3 -mt-3 mb-3 bg-white px-3 pb-3 pt-3">
				<div className="relative">
					<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
						<IconSearch size={15} />
					</span>
					<input
						type="search"
						value={query}
						onChange={ev => setQuery(ev.target.value)}
						placeholder={("Search elements...")}
						aria-label={("Search elements")}
						className={SEARCH_INPUT}
					/>
					{query && (
						<button
							type="button"
							title={("Clear search")}
							aria-label={("Clear search")}
							onClick={() => setQuery('')}
							className="absolute right-1.5 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center !rounded-md !border-0 !bg-transparent !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!bg-gray-100 hover:!text-gray-700">
							<IconX size={14} />
						</button>
					)}
				</div>
			</div>

			{trimmedQuery && (
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between px-0.5">
						<span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
							{("Results")}
						</span>
						<span className="text-[11px] text-gray-400">{matches.length}</span>
					</div>

					{matches.length > 0 && (
						<div className="grid grid-cols-2 gap-2">
							{matches.map(element => renderTile(element, 'search'))}
						</div>
					)}

					{matches.length == 0 && (
						<div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-gray-200 px-4 py-10 text-center">
							<span className="text-gray-300"><IconSquareOff size={24} stroke={1.5} /></span>
							<span className="text-xs text-gray-500">
								{("No element matches")} &ldquo;{query}&rdquo;
							</span>
						</div>
					)}
				</div>
			)}

			{/*
				Hidden rather than unmounted while searching, so the groups you
				had open are still open when the search box is cleared.

				An inline style, not a `hidden` utility: the base classes here
				already set `flex`, and between two unprefixed display utilities
				the winner is whichever Tailwind emits last, not whichever is
				written last in the attribute.
			*/}
			<div className="flex flex-col gap-3" style={trimmedQuery ? { display: 'none' } : undefined}>


				{/* Elements that can only live inside the current selection. The
				    tiles here rendered as bare white rectangles with no icon and
				    no grab cursor, unlike every other tile in the palette. */}
				{childElements?.length > 0 && (
					<ToggleContent isOpen={true} key={'childElements'} title={
						<span className="flex w-full items-center justify-between gap-2">
							<span className="flex items-center gap-1.5 text-brand-700">
								<IconGripVertical size={14} />
								{("Goes inside")} <span className="capitalize">{selectedBlockType}</span>
							</span>
							<span className="rounded-full bg-brand/10 px-1.5 py-0.5 text-[10px] font-semibold text-brand-700">
								{childElements.length}
							</span>
						</span>
					} iconPosition="right"
						contentClass="pt-2"
						headerClass={`${GROUP_HEADER} !border-brand/30 !bg-brand/5`}
						headerTitleClass="flex w-full items-center justify-between gap-2"
						wrapperClass="w-full"
					>
						<div className="grid grid-cols-2 gap-2">
							{childElements?.map(element => renderTile(element, 'child'))}
						</div>


					</ToggleContent>
				)}





				{groups.map(group => {

					/* The header counted every element in the group, including the
						 child-only ones the list below filters out - so "Layout (27)"
						 could open onto a dozen tiles. Count what is actually
						 rendered. */
					var placeable = (elementsByGroups[group?.id] ?? []).filter(element => !element.parent);

					if (placeable.length == 0) return null;

					return (
						<ToggleContent key={group?.id} title={
							<span className="flex w-full items-center justify-between gap-2">
								<span>{group?.label}</span>
								<span className="rounded-full bg-gray-200 px-1.5 py-0.5 text-[10px] font-semibold text-gray-600">
									{placeable.length}
								</span>
							</span>
						} iconPosition="right"
							contentClass="pt-2"
							headerClass={GROUP_HEADER}
							headerTitleClass="flex w-full items-center justify-between gap-2"
							wrapperClass="w-full"
						>
							<div className="grid grid-cols-2 gap-2">
								{placeable.map(element => renderTile(element, group?.id))}
							</div>


						</ToggleContent>
					)

				})}
			</div>












		</div>
	);
};



export default ElementsList;
