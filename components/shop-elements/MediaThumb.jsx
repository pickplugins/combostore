"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
	IconFile,
	IconFileCode,
	IconFileMusic,
	IconFileSpreadsheet,
	IconFileText,
	IconFileTypeDoc,
	IconFileTypePdf,
	IconFileTypePpt,
	IconFileZip,
	IconLock,
	IconMovie,
	IconPhoto,
} from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Thumbnail for a get_medias item ({ id, src, title, mime, restricted }).

	- Public image: the file itself.
	- Restricted image: its URL is blocked (403) and an <img> cannot send the
	  login token, so the preview comes from media_preview (staff only, scaled
	  to ~400px) as a blob. Cached per id for the session, so paging back and
	  forth does not fetch it again.
	- Anything else, or a preview that fails: an icon for the file type.

	Restricted items get a lock badge either way.
*/

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "svg", "ico"];

const ICONS = [
	{ icon: IconFileZip, ext: ["zip", "rar", "7z", "tar", "gz", "tgz", "bz2", "xz"] },
	{ icon: IconFileTypePdf, ext: ["pdf"] },
	{ icon: IconFileTypeDoc, ext: ["doc", "docx", "odt", "rtf", "pages"] },
	{ icon: IconFileSpreadsheet, ext: ["xls", "xlsx", "csv", "ods", "numbers"] },
	{ icon: IconFileTypePpt, ext: ["ppt", "pptx", "odp", "key"] },
	{ icon: IconFileMusic, ext: ["mp3", "wav", "ogg", "m4a", "flac", "aac"] },
	{ icon: IconMovie, ext: ["mp4", "mov", "webm", "mkv", "avi", "m4v"] },
	{ icon: IconFileCode, ext: ["js", "jsx", "ts", "tsx", "php", "py", "html", "css", "json", "xml", "sql"] },
	{ icon: IconFileText, ext: ["txt", "md", "log"] },
];

/* id -> object URL, or false when the preview could not be made. */
const previewCache = new Map();

export function mediaExtension(item) {
	const name = String(item?.src || item?.title || "").split("?")[0];
	const ext = name.includes(".") ? name.split(".").pop().toLowerCase() : "";
	return ext.length <= 6 ? ext : "";
}

export function isImageMedia(item) {
	if (item?.mime) return String(item.mime).startsWith("image/");
	return IMAGE_EXTENSIONS.includes(mediaExtension(item));
}

function iconFor(item) {
	const ext = mediaExtension(item);
	if (isImageMedia(item)) return IconPhoto;
	return ICONS.find(entry => entry.ext.includes(ext))?.icon ?? IconFile;
}


function FileTile({ item, className }) {
	const Icon = iconFor(item);
	const ext = mediaExtension(item);
	return (
		<div className={`flex aspect-square w-full flex-col items-center justify-center gap-1.5 bg-gray-50 text-gray-400 ${className}`}>
			<Icon size={32} stroke={1.5} />
			{ext && <span className="text-[11px] font-medium uppercase tracking-wide">{ext}</span>}
		</div>
	);
}


const MediaThumb = ({ item, className = "", size = 400 }) => {

	const { token } = useCounterStore()

	const image = isImageMedia(item);
	const needsPreview = image && item?.restricted;

	const cached = needsPreview ? previewCache.get(item?.id) : undefined;
	const [preview, setpreview] = useState(cached);

	useEffect(() => {
		if (!needsPreview || !token || !item?.id) return;
		if (previewCache.has(item.id)) {
			setpreview(previewCache.get(item.id));
			return;
		}

		let cancelled = false;
		fetch(serverUrl + "wp-json/combo-store/v2/media_preview", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({ id: item.id, size }),
		})
			.then(response => {
				if (!response.ok || !String(response.headers.get("content-type")).startsWith("image/")) throw new Error();
				return response.blob();
			})
			.then(blob => {
				const url = URL.createObjectURL(blob);
				previewCache.set(item.id, url);
				if (!cancelled) setpreview(url);
			})
			.catch(() => {
				previewCache.set(item.id, false);
				if (!cancelled) setpreview(false);
			});

		return () => { cancelled = true; };
	}, [item?.id, needsPreview, token, size]);


	let body;
	if (image && !item?.restricted && item?.src) {
		body = <Image unoptimized className={`aspect-square w-full object-cover ${className}`} src={item.src} width={200} height={200} alt={item?.title || ""} />;
	} else if (needsPreview && preview) {
		/* A blob: URL, which next/image does not optimise anyway. */
		// eslint-disable-next-line @next/next/no-img-element
		body = <img className={`aspect-square w-full object-cover ${className}`} src={preview} alt={item?.title || ""} />;
	} else if (needsPreview && preview === undefined && token) {
		body = <div className={`aspect-square w-full animate-pulse bg-gray-100 ${className}`} />;
	} else {
		body = <FileTile item={item} className={className} />;
	}

	return (
		<div className="relative">
			{body}
			{item?.restricted && (
				<span className="pointer-events-none absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-gray-900/80 px-1.5 py-0.5 text-[10px] font-medium text-white">
					<IconLock size={10} /> Restricted
				</span>
			)}
		</div>
	);
};

export default MediaThumb;
