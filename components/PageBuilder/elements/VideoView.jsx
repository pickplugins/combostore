import PropTypes from "prop-types";
import React from "react";
import { elementCssClasses } from "../ElementsDefinition";

/*
	What to embed for the block, from options.url - or options.videoId, where
	blocks used to keep a bare YouTube id. Accepts:
	- YouTube: an 11-character id, or a watch / youtu.be / shorts / embed /
	  live link (a ?t= / &start= in it becomes the start time);
	- Vimeo: vimeo.com/<id> or player.vimeo.com/video/<id>;
	- a direct video file (.mp4, .webm, .ogg, .mov).
	Returns { provider: 'youtube' | 'vimeo' | 'file', id?, src, start } or
	null. A pasted link used to be put straight after /embed/, which broke it.
*/
export function parseVideoSource(value) {
	var raw = String(value ?? '').trim();
	if (!raw) return null;

	if (/^[\w-]{11}$/.test(raw)) return { provider: 'youtube', id: raw, start: 0 };

	var url;
	try { url = new URL(/^\w+:\/\//.test(raw) ? raw : `https://${raw}`); } catch (e) { return null; }
	var host = url.hostname.replace(/^(www\.|m\.)/, '');
	var path = url.pathname;
	var seconds = (t) => {
		var m = String(t ?? '').match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/);
		return m ? (+(m[1] ?? 0)) * 3600 + (+(m[2] ?? 0)) * 60 + (+(m[3] ?? 0)) : 0;
	};

	if (/(^|\.)youtube(-nocookie)?\.com$/.test(host) || host === 'youtu.be') {
		var id = host === 'youtu.be' ? path.slice(1).split('/')[0]
			: (url.searchParams.get('v') ?? (path.match(/^\/(?:embed|shorts|live|v)\/([\w-]{11})/) ?? [])[1]);
		if (!/^[\w-]{11}$/.test(id ?? '')) return null;
		return { provider: 'youtube', id, start: seconds(url.searchParams.get('t') ?? url.searchParams.get('start')) };
	}

	if (/(^|\.)vimeo\.com$/.test(host)) {
		var vid = (path.match(/(?:^|\/)(\d{6,})(?:\/|$)/) ?? [])[1];
		return vid ? { provider: 'vimeo', id: vid, start: seconds((url.hash.match(/t=([\dhms]+)/) ?? [])[1]) } : null;
	}

	if (/\.(mp4|webm|ogg|ogv|mov|m4v)$/i.test(path)) return { provider: 'file', src: url.href, start: 0 };

	return null;
}

/*
	The embed's address (or the file's), with the playback options:
	autoplay (always muted - browsers block autoplay with sound), muted,
	loop, controls (false hides them) and start (seconds; the link's own
	start time when unset). YouTube is embedded from youtube-nocookie.com,
	which sets no cookies until the visitor plays the video.
*/
export function videoEmbedSrc(source, options) {
	if (!source) return '';
	var autoplay = !!options?.autoplay;
	var muted = autoplay || !!options?.muted;
	var start = parseInt(options?.start) || source.start || 0;

	if (source.provider === 'youtube') {
		var q = new URLSearchParams({ rel: '0' });
		if (autoplay) q.set('autoplay', '1');
		if (muted) q.set('mute', '1');
		if (options?.loop) { q.set('loop', '1'); q.set('playlist', source.id); }
		if (options?.controls === false) q.set('controls', '0');
		if (start) q.set('start', String(start));
		if (autoplay) q.set('playsinline', '1');
		return `https://www.youtube-nocookie.com/embed/${source.id}?${q}`;
	}
	if (source.provider === 'vimeo') {
		var v = new URLSearchParams({ dnt: '1' });
		if (autoplay) v.set('autoplay', '1');
		if (muted) v.set('muted', '1');
		if (options?.loop) v.set('loop', '1');
		if (options?.controls === false) v.set('controls', '0');
		return `https://player.vimeo.com/video/${source.id}?${v}${start ? `#t=${start}s` : ''}`;
	}
	return start ? `${source.src}#t=${start}` : source.src;
}

/*
	The video's markup, shared with the builder preview (Video.jsx): a `*`
	wrapper holding the player - an iframe (YouTube, Vimeo) or a <video>
	(a file) - carrying the `frame` classes. `frame` defaults to
	aspect-video w-full: without width/height the iframe used to render at
	the browser's 300x150. options.width / options.height, when set, are
	still passed as attributes (classes on `frame` win over them).
	`children` is drawn after the player (the builder's click shield).
*/
export function VideoMarkup({ cls, id, index, type, options, source, children, rootClassName = '', rootProps = {} }) {

	var title = String(options?.title ?? '').trim() || 'Video';
	var size = { width: options?.width || undefined, height: options?.height || undefined };
	var src = videoEmbedSrc(source, options);

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{source?.provider === 'file' ? (
				<video className={cls('frame')} src={src} {...size} title={title}
					controls={options?.controls !== false} autoPlay={!!options?.autoplay} muted={!!options?.autoplay || !!options?.muted}
					loop={!!options?.loop} playsInline preload="metadata" />
			) : (
				<iframe className={cls('frame')} src={src} {...size} title={title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin" loading="lazy" allowFullScreen />
			)}
			{children}
		</div>
	);
}

/* A YouTube, Vimeo or file video. Nothing until a recognisable video is set, rather than an embed of an error page. */
const VideoView = (props) => {

	/* A key the block lacks falls back to the video defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('video', props?.cssSelectors);

	var source = parseVideoSource(props?.options?.url || props?.options?.videoId);
	if (!source) return null;

	return <VideoMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} source={source} />;
};

VideoView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default VideoView;
