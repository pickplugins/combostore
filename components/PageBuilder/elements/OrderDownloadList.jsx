'use client'

import PropTypes from "prop-types";
import React from "react";
import { useEffect, useRef, useState } from "react";
import {
	IconCheck,
	IconDownload,
	IconFile,
	IconFileCode,
	IconFileMusic,
	IconFileSpreadsheet,
	IconFileText,
	IconFileTypeDoc,
	IconFileTypePdf,
	IconFileZip,
	IconLoader2,
	IconMovie,
	IconPhoto,
} from "@tabler/icons-react";

/*
	The files a paid / completed order can download, inside its card in the
	customer's order list. Shared by CustomerOrdersView (real files from
	get_order_downloads) and the builder canvas (CustomerOrders, with samples),
	styled by the customerOrders downloads-* / download-* cssSelectors keys.

	Each `url` is a signed link that works for an hour. A link older than that
	is renewed through `onRenew` before the download starts, so a page left
	open does not end on an error.

	The icon tile's colour follows the file type; it is added on top of the
	download-icon key, which sets size and shape.
*/

const FILE_TYPES = [
	{ icon: IconFileZip, tone: "bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-100", ext: ["zip", "rar", "7z", "tar", "gz", "tgz"] },
	{ icon: IconFileTypePdf, tone: "bg-red-50 text-red-600 ring-1 ring-inset ring-red-100", ext: ["pdf"] },
	{ icon: IconFileTypeDoc, tone: "bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100", ext: ["doc", "docx", "odt", "rtf"] },
	{ icon: IconFileSpreadsheet, tone: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100", ext: ["xls", "xlsx", "csv", "ods"] },
	{ icon: IconPhoto, tone: "bg-sky-50 text-sky-600 ring-1 ring-inset ring-sky-100", ext: ["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"] },
	{ icon: IconFileMusic, tone: "bg-violet-50 text-violet-600 ring-1 ring-inset ring-violet-100", ext: ["mp3", "wav", "ogg", "m4a", "flac"] },
	{ icon: IconMovie, tone: "bg-pink-50 text-pink-600 ring-1 ring-inset ring-pink-100", ext: ["mp4", "mov", "webm", "mkv"] },
	{ icon: IconFileCode, tone: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200", ext: ["js", "json", "php", "py", "html", "css", "xml"] },
	{ icon: IconFileText, tone: "bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-200", ext: ["txt", "md"] },
];

const DEFAULT_TYPE = { icon: IconFile, tone: "bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-200" };

function fileType(extension) {
	return FILE_TYPES.find(type => type.ext.includes(String(extension || "").toLowerCase())) ?? DEFAULT_TYPE;
}

function formatSize(bytes) {
	if (bytes == null || bytes === "") return "";
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
	if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}


function DownloadRow({ file, cls, preview, onRenew, showProduct }) {
	/* idle | renewing | started | failed */
	var [state, setstate] = useState("idle");
	var timer = useRef(null);

	useEffect(() => () => clearTimeout(timer.current), []);

	var type = fileType(file?.extension);
	var Icon = type.icon;
	var size = formatSize(file?.size);

	function markStarted() {
		setstate("started");
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setstate("idle"), 4000);
	}

	function onClick(ev) {
		/* On the canvas a click selects the block; nothing to download. */
		if (preview) { ev.preventDefault(); return; }
		if (state === "renewing") { ev.preventDefault(); return; }

		/* Expired (or about to): get a fresh link, then start the download. */
		if (file?.expires && file.expires * 1000 < Date.now() + 15000 && onRenew) {
			ev.preventDefault();
			setstate("renewing");
			onRenew(file).then(url => {
				if (url) {
					window.location.assign(url);
					markStarted();
				} else {
					setstate("failed");
				}
			});
			return;
		}

		markStarted();
	}

	return (
		<li className={cls('download')}>
			<span className={`${cls('download-icon')} ${type.tone}`} aria-hidden="true">
				<Icon size={20} stroke={1.75} />
			</span>

			<div className={cls('download-info')}>
				<span className={cls('download-name')} title={file?.title}>{file?.title || "File"}</span>

				{state === "failed" ? (
					<span className={cls('download-error')}>Couldn&apos;t renew the link. Refresh the page and try again.</span>
				) : (
					<span className={cls('download-meta')}>
						{file?.extension && <span className={cls('download-ext')}>{file.extension}</span>}
						{size && <span>{size}</span>}
						{showProduct && file?.product_title && (
							<>
								<span aria-hidden="true" className="text-gray-300">·</span>
								<span className="truncate">{file.product_title}</span>
							</>
						)}
					</span>
				)}
			</div>

			<a className={cls('download-button')}
				href={preview ? undefined : file?.url}
				onClick={onClick}
				rel="nofollow"
				aria-busy={state === "renewing"}
				aria-label={`Download ${file?.title || "file"}${size ? `, ${size}` : ""}`}>
				{state === "renewing" ? <IconLoader2 size={14} className="animate-spin" />
					: state === "started" ? <IconCheck size={14} />
						: <IconDownload size={14} />}
				<span className="hidden sm:inline">
					{state === "renewing" ? "Preparing…" : state === "started" ? "Started" : "Download"}
				</span>
			</a>
		</li>
	);
}

DownloadRow.propTypes = {
	file: PropTypes.object,
	cls: PropTypes.func,
	preview: PropTypes.bool,
	onRenew: PropTypes.func,
	showProduct: PropTypes.bool,
};


const OrderDownloadList = ({ downloads, cls, preview = false, onRenew }) => {
	if (!Array.isArray(downloads) || downloads.length === 0) return null;

	/* The product name only helps when the files come from more than one product. */
	var showProduct = new Set(downloads.map(file => file?.product_id ?? file?.product_title)).size > 1;

	return (
		<div className={cls('downloads')}>
			<div className={cls('downloads-header')}>
				<div className={cls('downloads-title')}>
					<IconDownload size={14} /> {downloads.length == 1 ? "Download" : "Downloads"}
					<span className={cls('downloads-count')}>{downloads.length} {downloads.length == 1 ? "file" : "files"}</span>
				</div>
			</div>

			<ul className={cls('downloads-list')}>
				{downloads.map(file => (
					<DownloadRow key={`${file.order_id}-${file.file_id}`} file={file} cls={cls} preview={preview} onRenew={onRenew} showProduct={showProduct} />
				))}
			</ul>
		</div>
	);
};

OrderDownloadList.propTypes = {
	downloads: PropTypes.array,
	cls: PropTypes.func,
	preview: PropTypes.bool,
	onRenew: PropTypes.func,
};

export default OrderDownloadList;
