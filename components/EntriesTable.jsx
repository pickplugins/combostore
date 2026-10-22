"use client";
import { Fragment, useEffect, useState } from "react";

import {
	IconCheckbox,
	IconSquare,
	IconSquareMinus,
	IconChevronLeft,
	IconChevronRight,
	IconRefresh,
	IconLink,
	IconSearch,
	IconInbox,
	IconSortDescending,
	IconSortAscending,
	IconSquareOff,
} from "@tabler/icons-react";
import Link from 'next/link';
import Spinner from "./Spinner";


/* Shared presentation classes. Global CSS styles `input`, `button`, `select`
   and `table` with unlayered rules, so those beat Tailwind utilities and the
   overrides below have to be marked important to land. */
const INPUT_CLASSES =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !py-2 !pl-9 !pr-3 !text-sm !text-gray-700 !shadow-none !outline-none placeholder:text-gray-400 focus:!border-gray-500 focus:!ring-4 focus:!ring-gray-900/5 transition-colors";

/* 40px below `sm` so the pager and refresh are thumb-sized, 36px once there
   is a pointer and the toolbar is competing for vertical room. */
const ICON_BUTTON_CLASSES =
	"inline-flex h-10 w-10 shrink-0 items-center justify-center !rounded-lg !border !border-gray-300 !bg-white !px-0 !py-0 !text-gray-500 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-100 hover:!text-gray-900 disabled:!cursor-not-allowed disabled:!opacity-40 disabled:hover:!bg-white sm:h-9 sm:w-9";

const SELECT_CLASSES =
	"h-10 shrink-0 !min-h-0 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none sm:h-9";

const CHIP_CLASSES =
	"inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600";

const TH_CLASSES =
	"px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500";

const TD_CLASSES = "!px-5 py-3 align-middle text-sm text-gray-700 break-words";

const LINK_CLASSES =
	"inline-flex items-center gap-1.5 font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline";


const EntriesTable = (props) => {



	var onRefreshRequest = props.onRefreshRequest;
	var onSelectRows = props.onSelectRows;
	var onChange = props.onChange;
	var columns = props.columns;
	var entries = props.entries;
	var itemPath = props.itemPath;
	var deleteRow = props.deleteRow;
	var loading = props.loading;
	var [queryPrams, setqueryPrams] = useState(props.queryPrams);
	var [selectedRows, setselectedRows] = useState(props.selectedRows);
	var [selectedAll, setselectedAll] = useState(false);
	var [anchorId, setAnchorId] = useState(null);
	var [lastCheckedId, setLastCheckedId] = useState(null);

	useEffect(() => {
		onChange(queryPrams);
	}, [queryPrams]);

	useEffect(() => {

		setqueryPrams(props.queryPrams);


	}, [props.queryPrams]);




	useEffect(() => {
		if (onSelectRows) {
			onSelectRows(selectedRows);
		}
	}, [selectedRows]);


	useEffect(() => {

		setselectedRows(props.selectedRows);

		if (props.selectedRows.length == 0) {
			setselectedAll(false);
		}



	}, [props.selectedRows]);




	const handleRowSelection = (entryId, shiftKey) => {
		var selectedRowsX = [...selectedRows];

		if (shiftKey && lastCheckedId !== null) {
			const currentIndex = entries.posts.findIndex(
				(entry) => entry.id === entryId
			);
			const lastIndex = entries.posts.findIndex(
				(entry) => entry.id === lastCheckedId
			);
			const [start, end] = [
				Math.min(currentIndex, lastIndex),
				Math.max(currentIndex, lastIndex),
			];

			// Clear previous selections
			selectedRowsX = [];

			// Select all items in range
			entries.posts.slice(start, end + 1).forEach((entry) => {
				selectedRowsX.push(entry.id);
			});
		} else {
			const index = selectedRowsX.indexOf(entryId);
			if (index !== -1) {
				selectedRowsX.splice(index, 1);
				setAnchorId(null);
			} else {
				selectedRowsX.push(entryId);
				setAnchorId(entryId);
			}
		}

		setLastCheckedId(entryId);
		setselectedRows(selectedRowsX);
	};

	const toggleSelectAll = () => {
		setselectedAll(!selectedAll);
		if (!selectedAll) {
			const ids = entries?.posts.map((entry) => entry.id);
			setselectedRows(ids);
		} else {
			setselectedRows([]);
		}
		setAnchorId(null);
		setLastCheckedId(null);
	};

	var rows = entries?.posts ?? [];
	var columnCount = Object.entries(columns)?.length + (deleteRow ? 1 : 0);
	var currentPage = Number(queryPrams?.paged) || 1;
	var maxPages = Number(entries?.maxPages) || 1;
	var hasPartialSelection =
		selectedRows?.length > 0 && selectedRows?.length < rows.length;

	/* The head row is rendered both above and below the body, so it lives in
	   one place to keep the two copies in step. */
	const headRow = (keyPrefix) => (
		<tr className="bg-gray-50">
			{Object.entries(columns).map((args) => {
				var columnIndex = args[0];
				var columnData = args[1];

				var classes = columnData?.classes ?? "";
				var order = columnData?.order ?? "";

				return (
					<th
						key={`${keyPrefix}-${columnData?.label}`}
						className={`${TH_CLASSES} ${classes} ${columnIndex == "check" ? "w-12" : ""
							} ${columnIndex == "email" ? "text-left" : ""
							} ${columnIndex == "title" ? "text-left" : ""}`}>

						{columnIndex == "check" && (
							<div
								className="flex select-none items-center"
								onClick={toggleSelectAll}>
								{selectedAll && (
									<span
										title="Deselect all"
										className="cursor-pointer text-gray-700 transition-colors hover:text-gray-900">
										<IconCheckbox size={20} />
									</span>
								)}
								{!selectedAll && hasPartialSelection && (
									<span
										title="Select all"
										className="cursor-pointer text-gray-500 transition-colors hover:text-gray-700">
										<IconSquareMinus size={20} />
									</span>
								)}
								{!selectedAll && !hasPartialSelection && (
									<span
										title="Select all"
										className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600">
										<IconSquare size={20} />
									</span>
								)}
							</div>
						)}
						{columnIndex != "check" && (
							<span
								className={`${order ? "flex items-center justify-center gap-1" : ''} ${columnIndex == "email" ? "text-left" : ""
									}`}>
								<span>{columnData.label}</span>

								{order && (

									<span className="cursor-pointer text-gray-400 transition-colors hover:text-gray-700">
										{order == 'DESC' && (<IconSortDescending size={16} />)}
										{order == 'ASC' && (<IconSortAscending size={16} />)}

									</span>

								)}

							</span>
						)}
					</th>
				);
			})}
			{deleteRow && <th className={`${TH_CLASSES} text-right`}>Delete</th>}
		</tr>
	);

	/* One cell renderer for both entries and their variations, so the two row
	   types can never drift apart visually. */
	const renderCells = (row, isVariation) =>
		Object.entries(columns).map((args) => {
			var columnIndex = args[0];
			var columnData = args[1];

			var linkTo = columnData?.linkTo;
			var linkToPath = linkTo?.path;
			var callback = columnData?.callback;

			// Callbacks render their own <td>, so pass that output straight through.
			if (callback) {
				return (
					<Fragment key={`cell-${row.id}-${columnIndex}`}>
						{callback(row, columnIndex)}
					</Fragment>
				);
			}

			return (
				<td
					key={`cell-${row.id}-${columnIndex}`}
					/* `data-label` is what the mobile card layout prints as the row
					   label. The select-all column's label ("Check") is a header for
					   a checkbox, not a name for a value, so it is left off and the
					   cell is tagged for styling instead. */
					data-label={columnIndex == "check" ? undefined : columnData?.label}
					data-cell={columnIndex == "check" ? "check" : undefined}
					className={`${TD_CLASSES} ${columnIndex == "email" ? "text-left" : ""
						} ${columnIndex == "title" ? "text-left" : ""}`}>

					{linkTo && (
						<>
							{columnIndex == 'id' && (
								<Link
									className={`${LINK_CLASSES} justify-center`}
									href={`/${linkToPath}/${row.id}`}>
									<IconLink size={16} /> {row.id}
								</Link>
							)}

							{columnIndex == 'title' && (
								<Link className={LINK_CLASSES} href={`/${linkToPath}/${row.id}`}>
									<IconLink size={16} /> {row.title}
								</Link>
							)}
						</>
					)}

					{!linkTo && (
						<>
							{columnIndex == "id" && (
								<div className="flex items-center gap-2">
									{itemPath?.length > 0 && (
										<Link
											className={`${LINK_CLASSES} font-mono text-xs`}
											href={`/${itemPath}/${row.id}`}>
											{"#" + row.id}
										</Link>
									)}
									{!(itemPath?.length > 0) && (
										<span className="font-mono text-xs text-gray-500">
											{"#" + row.id}
										</span>
									)}
								</div>
							)}

							{columnIndex != "check" && columnIndex != 'id' && (
								<span className={`${columnIndex == "email" ? "text-left" : ""}`}>
									{row[columnIndex]}
								</span>
							)}
						</>
					)}

					{columnIndex == "check" && !isVariation && (
						<div
							className="flex select-none items-center py-1"
							onClick={(ev) => handleRowSelection(row.id, ev.shiftKey)}>
							{selectedRows?.includes(row.id) && (
								<span className="cursor-pointer text-gray-700 transition-colors hover:text-gray-900">
									<IconCheckbox size={20} />
								</span>
							)}
							{!selectedRows?.includes(row.id) && (
								<span className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600">
									<IconSquare size={20} />
								</span>
							)}
						</div>
					)}

					{columnIndex == "check" && isVariation && (
						<div className="flex select-none items-center py-1">
							<span className="text-gray-300">
								<IconSquareOff size={20} />
							</span>
						</div>
					)}
				</td>
			);
		});

	const deleteCell = (row) => (
		<td key={"delete"} className={`${TD_CLASSES} text-right`}>
			<span
				className="cursor-pointer text-xs font-medium text-red-600 transition-colors hover:text-red-700 hover:underline"
				onClick={(ev) => {
					deleteRow(row.id);
				}}>
				{("Delete")}
			</span>
		</td>
	);


	return (

		<div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">


			{/*
				The toolbar was one wrapping row, which on a 360px screen became
				four stacked lines of half-width controls with the search box
				squeezed to `sm:w-72` in the middle of them. It is now a column up
				to `lg` - search on its own full-width line, everything else
				underneath with the pager pushed to the end of its line - and the
				original single row from `lg` up.
			*/}
			<div className="flex flex-col gap-3 border-b border-gray-200 bg-gray-50 p-3 sm:px-4 lg:flex-row lg:items-center lg:justify-between">
				<div className="flex items-center gap-2">
					<div className="relative w-full lg:w-72">
						<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
							<IconSearch size={16} />
						</span>
						<input
							className={INPUT_CLASSES}
							type="search"
							placeholder="Search..."
							value={queryPrams?.keyword}
							name="keyword"
							onChange={(ev) => {
								setqueryPrams({ ...queryPrams, keyword: ev.target.value });
							}}
						/>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-2 lg:justify-end">
					{loading && (
						<span className="text-gray-400">
							<Spinner />
						</span>
					)}

					{selectedRows?.length > 0 && (
						<span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
							{selectedRows.length} {("selected")}
						</span>
					)}

					<span className={CHIP_CLASSES}>
						<span className="font-semibold text-gray-900">{entries?.total ?? 0}</span>
						{("Items")}
					</span>

					{/* Redundant on a phone, where the pager carries the same `n / m`
					    inline between its two buttons. */}
					{/* `max-sm:hidden` for the same reason as the header's collapse
					    button: CHIP_CLASSES already sets `inline-flex`, which an
					    unprefixed `hidden` does not reliably override. */}
					<span className={`${CHIP_CLASSES} max-sm:hidden`}>
						{("Page")}
						<span className="font-semibold text-gray-900">{queryPrams?.paged}</span>
						<span className="text-gray-300">/</span>
						{entries?.maxPages}
					</span>

					{onRefreshRequest && (

						<button
							title="Refresh"
							onClick={() => {
								onRefreshRequest();
							}}
							className={ICON_BUTTON_CLASSES}>
							<IconRefresh size={18} />
						</button>
					)}

					<select
						name=""
						id=""
						title="Sort order"
						className={SELECT_CLASSES}
						value={queryPrams?.order}
						onChange={(ev) => {
							setqueryPrams({ ...queryPrams, order: ev.target.value });
						}}>
						<option value="DESC">{("DESC")}</option>
						<option value="ASC">{("ASC")}</option>
					</select>

					<select
						name=""
						id=""
						title="Rows per page"
						className={SELECT_CLASSES}
						value={queryPrams?.per_page}
						onChange={(ev) => {
							setqueryPrams({ ...queryPrams, per_page: ev.target.value, paged: 1 });
						}}>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="200">200</option>
					</select>

					{/* `ml-auto` parks the pager at the end of whichever wrapped line
					    it lands on, so it stays in the same place as the controls
					    above it reflow. */}
					<div className="ml-auto flex items-center gap-1 lg:ml-0">
						<button
							title="Previous page"
							aria-label="Previous page"
							disabled={currentPage <= 1}
							className={ICON_BUTTON_CLASSES}
							onClick={(ev) => {
								var paged = queryPrams.paged;
								if (paged == 1) return;
								setqueryPrams({ ...queryPrams, paged: queryPrams.paged - 1 });
							}}>
							<IconChevronLeft size={18} />
						</button>

						<span className="min-w-12 text-center text-xs font-medium tabular-nums text-gray-500 sm:hidden">
							{currentPage} <span className="text-gray-300">/</span> {maxPages}
						</span>

						<button
							title="Next page"
							aria-label="Next page"
							disabled={currentPage >= maxPages}
							className={ICON_BUTTON_CLASSES}
							onClick={(ev) => {
								var paged = queryPrams.paged + 1;
								if (paged > entries?.maxPages) return;
								setqueryPrams({ ...queryPrams, paged: queryPrams.paged + 1 });
							}}>
							<IconChevronRight size={18} />
						</button>
					</div>
				</div>
			</div>

			{/*
				Below `md` the rows are cards rather than a table (see globals.css),
				so the wrapper becomes a tinted tray to sit them on instead of a
				scroll container - the cards already fit the width.
			*/}
			<div className="scroll-thin w-full overflow-x-auto max-md:bg-gray-50 max-md:p-3">
				<table className="w-full table-auto border-collapse text-center md:table-fixed">
					<thead className="border-b border-gray-200">
						{headRow("head")}
					</thead>
					<tbody className="divide-y divide-gray-100">
						{rows.length == 0 && (
							<tr>
								<td colSpan={columnCount} data-cell="empty" className="px-5 py-12">
									<div className="flex flex-col items-center justify-center gap-2">
										<span className="text-gray-300">
											<IconInbox size={32} stroke={1.5} />
										</span>
										<span className="text-sm text-gray-500">{("No items found")}</span>
									</div>
								</td>
							</tr>
						)}
						{rows.map((entry, index) => {

							var variations = entry?.variations ?? [];
							var isSelected = selectedRows?.includes(entry.id);

							return (
								<Fragment key={index}>

									<tr
										className={`transition-colors ${isSelected
											? "bg-blue-50/70 hover:bg-blue-50"
											: "hover:bg-gray-50"}`}>
										{renderCells(entry, false)}
										{deleteRow && deleteCell(entry)}
									</tr>

									{variations.map((variation) => {

										return (
											<tr
												key={`variation-${variation.id}`}
												className="bg-orange-50/50 transition-colors hover:bg-orange-50">
												{renderCells(variation, true)}
												{deleteRow && deleteCell(variation)}
											</tr>
										);

									})}


								</Fragment>
							);
						})}
					</tbody>
					{rows.length > 0 && (
						<thead className="border-t border-gray-200">
							{headRow("foot")}
						</thead>
					)}
				</table>
			</div>
		</div>

	);
};









export default EntriesTable;
