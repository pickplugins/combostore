import React from "react";
import { useState, useEffect } from "react";
import { refreshTemplateTheme } from "./templateThemeLive";
import { IconFileTypography, IconPalette, IconX, IconPlus, IconRestore } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import { TEMPLATE_COLOR_KEYS, TEMPLATE_COLOR_DEFAULTS, BUILT_IN_FONTS, cleanFamily, cleanColor, cleanUrl, isFontStylesheet, cleanFontClassName, fontClassNameProblem, fontClassNamesTakenBefore } from '../../lib/templateTheme';

const FIELD = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit";

const COLOR_LABELS = {
	primary: 'Primary',
	secondary: 'Secondary',
	accent: 'Accent',
	background: 'Background',
	foreground: 'Text',
	muted: 'Muted text',
};

const COLOR_HINTS = {
	primary: 'Buttons, links, highlights',
	secondary: 'Second brand color',
	accent: 'Badges, sale tags',
	background: 'Page background',
	foreground: 'Main text color',
	muted: 'Secondary text',
};

/*
	A site template's settings: its default colors and fonts, saved in the
	template's meta (update_template) and applied on the storefront through
	lib/templateTheme.js:

	  - colors become the classes bg-primary, text-primary, border-accent,
	    text-foreground ... (any Tailwind color utility, with opacity, e.g.
	    bg-primary/10), and the page's default text and background colors;
	  - fonts: each custom font is loaded on the storefront (a font file through
	    @font-face, or a Google Fonts stylesheet link); the heading and body
	    choices become font-heading and font-body, and the default font of
	    headings and of the page.

	It used to save only a "Button Class" (meta.colors.btnBgColor, which
	nothing read) and a font's src and family: the other color and font fields
	were not wired up, the font list was changed in place, and nothing on the
	storefront read any of it. The plugin also wrote the meta as a number
	(fixed in update_template).
*/
/* get_templates hands meta over as the stored JSON string (or ""); the panel works on it as an object. */
function withParsedMeta(data) {
	var template = data ?? {};
	var parsed = template?.meta;
	if (typeof parsed === 'string') {
		try { parsed = parsed ? JSON.parse(parsed) : {}; } catch (e) { parsed = {}; }
	}
	return { ...template, meta: parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {} };
}

const TemplateSettings = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, addNotification } = useCounterStore()

	var [templateData, settemplateData] = useState(() => withParsedMeta(props?.templateData));
	var [loading, setloading] = useState(false);

	/*
		Follow the template this panel is given. It copied the prop once, on
		mount, so a panel handed another template, or the same template after
		Templates.jsx updated it (onSaved), kept showing the old settings.
	*/
	var sourceKey = `${props?.templateData?.id ?? ''}|${typeof props?.templateData?.meta === 'string' ? props.templateData.meta : JSON.stringify(props?.templateData?.meta ?? '')}`;
	useEffect(() => {
		settemplateData(withParsedMeta(props?.templateData));
	}, [sourceKey]);

	/* Older templates store meta as "" or [] - treat both as empty. */
	var meta = templateData?.meta && typeof templateData.meta === 'object' && !Array.isArray(templateData.meta) ? templateData.meta : {};
	var colors = meta.colors ?? {};
	var typography = meta.typography ?? {};
	var fonts = Array.isArray(meta.fonts) ? meta.fonts : [];

	function setMeta(patch) {
		settemplateData(current => {
			var currentMeta = current?.meta && typeof current.meta === 'object' && !Array.isArray(current.meta) ? current.meta : {};
			return { ...current, meta: { ...currentMeta, ...patch } };
		});
	}

	function setColor(key, value) {
		var next = { ...colors, [key]: value };
		if (!value) delete next[key];
		delete next.btnBgColor;
		setMeta({ colors: next });
	}

	function setFont(index, key, value) {
		setMeta({ fonts: fonts.map((font, i) => i === index ? { ...font, [key]: value } : font) });
	}

	/* Heading/body choices: default, the built-in fonts, then the custom families. */
	var customFamilies = [...new Set(fonts.map(f => cleanFamily(f?.family)).filter(Boolean))];

	async function update_template() {

		setloading(true);

		try {
			const response = await fetch(serverUrl + "wp-json/combo-store/v2/update_template", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					id: templateData?.id,
					name: templateData?.name,
					description: templateData?.description,
					thumbnail: templateData?.thumbnail,
					style: templateData?.style,
					meta: meta,
				}),
			});

			if (!response.ok) {
				throw new Error(`Server answered ${response.status}.`);
			}

			const res = await response.json();

			if (res?.success) {
				addNotification({ type: 'success', title: 'Template settings saved', content: '' })
				/* Hand the saved template back, so the list (and this panel next time it opens) has it; then the builder and the shop show the active template's settings. */
				props?.onSaved?.({ ...templateData, meta: meta });
				refreshTemplateTheme();
			} else {
				addNotification({ type: 'error', title: 'Template settings not saved', content: res?.message ?? '' })
			}
		} catch (error) {
			addNotification({ type: 'error', title: 'Template settings not saved', content: error?.message ?? '' })
		} finally {
			setloading(false);
		}
	}

	/* A heading/body font picker (a render function, not a nested component, so it is not remounted on every change). */
	function fontSelect({ id, label, value, onChange, hint }) {
		return (
			<div className="flex flex-col gap-1">
				<label htmlFor={id} className="text-xs font-medium text-gray-600">{label}</label>
				<select id={id} className={FIELD} value={value ?? ''} onChange={ev => onChange(ev.target.value)}>
					<option value="">Default</option>
					<optgroup label="Built in">
						{Object.entries(BUILT_IN_FONTS).map(([key, font]) => <option key={key} value={key}>{font.label}</option>)}
					</optgroup>
					{customFamilies.length > 0 && (
						<optgroup label="Your fonts">
							{customFamilies.map(family => <option key={family} value={family}>{family}</option>)}
						</optgroup>
					)}
				</select>
				<span className="text-[10px] text-gray-400">{hint}</span>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-5 p-5">

			<Tabs activeTab={'colors'}
				orientation="horizontal"
				activeClass="active-tab "
				navsItemClass="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
				navsItemActiveClass="!bg-brand !text-white shadow-sm hover:!bg-brand-600"
				navsWrapperClass="flex gap-1 rounded-lg bg-gray-100 p-1 mb-3"
				wrapperClass=" gap-5"
				tabs={[
					{ label: "Colors", id: 'colors', icon: <IconPalette /> },
					{ label: "Fonts", id: 'fonts', icon: <IconFileTypography /> },
				]}>

				<Tab index={0} id='colors'>
					<div className="flex flex-col gap-4">

						<p className="text-xs text-gray-500">
							Each color is a Tailwind color in the builder: <code>bg-primary</code>, <code>text-primary</code>, <code>border-accent</code>, <code>bg-primary/10</code> and so on. Text and Background also set the page&apos;s default colors. Empty fields keep the default shown.
						</p>

						{TEMPLATE_COLOR_KEYS.map(key => {
							var value = colors[key] ?? '';
							var valid = !value || !!cleanColor(value);
							var swatch = cleanColor(value) || TEMPLATE_COLOR_DEFAULTS[key];
							/* <input type="color"> takes only #rrggbb. */
							var pickerValue = /^#[0-9a-f]{6}$/i.test(swatch) ? swatch : /^#[0-9a-f]{3}$/i.test(swatch) ? '#' + swatch.slice(1).split('').map(c => c + c).join('') : '#000000';

							return (
								<div key={key} className="flex items-center gap-3">
									<input type="color" aria-label={`${COLOR_LABELS[key]} color`} className="h-8 w-10 shrink-0 cursor-pointer rounded border border-gray-300 bg-white p-0.5" value={pickerValue} onChange={ev => setColor(key, ev.target.value)} />
									<div className="flex min-w-0 flex-1 flex-col gap-0.5">
										<div className="flex items-baseline justify-between gap-2">
											<label htmlFor={`color-${key}`} className="text-xs font-medium text-gray-700">{COLOR_LABELS[key]}</label>
											<code className="text-[10px] text-gray-400">{key === 'foreground' ? 'text-foreground' : `bg-${key}`}</code>
										</div>
										<input id={`color-${key}`} type="text" className={`${FIELD} ${valid ? '' : '!border-red-400'}`} placeholder={TEMPLATE_COLOR_DEFAULTS[key]} value={value} onChange={ev => setColor(key, ev.target.value.trim())} />
										<span className={`text-[10px] ${valid ? 'text-gray-400' : 'text-red-500'}`}>{valid ? COLOR_HINTS[key] : 'Not a color: use #hex, rgb(), hsl() or a color name.'}</span>
									</div>
									<button type="button" title="Use the default" className={`${BUTTON} !px-1.5 ${value ? '' : 'invisible'}`} onClick={() => setColor(key, '')}><IconRestore size={14} /></button>
								</div>
							);
						})}
					</div>
				</Tab>

				<Tab index={1} id='fonts'>
					<div className="flex flex-col gap-4">

						{fontSelect({
							id: 'font-heading', label: 'Heading font', value: typography.heading,
							onChange: value => setMeta({ typography: { ...typography, heading: value } }),
							hint: <>Headings use it unless a block sets its own; also the <code>font-heading</code> class.</>,
						})}
						{fontSelect({
							id: 'font-body', label: 'Body font', value: typography.body,
							onChange: value => setMeta({ typography: { ...typography, body: value } }),
							hint: <>The page&apos;s text font; also the <code>font-body</code> class.</>,
						})}

						<div className="flex items-center justify-between border-t border-gray-200 pt-3">
							<span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Your fonts</span>
							<button type="button" className={BUTTON} onClick={() => setMeta({ fonts: [...fonts, { family: '', name: '', src: '', weight: '', style: '', display: 'swap' }] })}>
								<IconPlus size={14} /> Add font
							</button>
						</div>
						<p className="text-[11px] text-gray-500">
							A font file URL (.woff2, .woff, .ttf, .otf) with its family name, or a Google Fonts stylesheet link (fonts.googleapis.com/css2?family=...) - then type the family name as Google lists it. Add one entry per weight or style of a font file.
						</p>

						{fonts.map((font, index) => {
							var srcOk = !font?.src || !!cleanUrl(font.src);
							var stylesheet = srcOk && font?.src && isFontStylesheet(font.src);

							return (
								<div key={index} className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3">
									<div className="flex items-center justify-between">
										<span className="text-xs font-medium text-gray-700">{cleanFamily(font?.family) || 'New font'}</span>
										<button type="button" title="Remove" className="inline-flex h-6 w-6 items-center justify-center rounded-md text-gray-400 hover:bg-red-50 hover:text-red-600" onClick={() => setMeta({ fonts: fonts.filter((_, i) => i !== index) })}>
											<IconX size={14} />
										</button>
									</div>

									<div className="flex flex-col gap-1">
										<label className="text-[11px] text-gray-600">Family name</label>
										<input type="text" className={FIELD} placeholder="Poppins" value={font?.family ?? ''} onChange={ev => setFont(index, 'family', ev.target.value)} />
									</div>

									{(() => {
										/* The class this font is used by: "brand" -> font-brand, offered in the class picker. */
										var className = cleanFontClassName(font?.name);
										/* Taken only by a different family: several weights of one family share a class. */
										var problem = fontClassNameProblem(className, fontClassNamesTakenBefore(fonts, index));
										var suggestion = cleanFontClassName(font?.family);
										return (
											<div className="flex flex-col gap-1">
												<label className="text-[11px] text-gray-600">Class name</label>
												<div className="flex items-center gap-1.5">
													<span className="shrink-0 text-xs text-gray-500">font-</span>
													<input type="text" className={`${FIELD} ${problem ? '!border-red-400' : ''}`} placeholder={suggestion || 'brand'} value={font?.name ?? ''}
														onChange={ev => setFont(index, 'name', ev.target.value)}
														onBlur={ev => setFont(index, 'name', cleanFontClassName(ev.target.value))} />
												</div>
												{problem
													? <span className="text-[10px] text-red-500">{problem}</span>
													: className
														? <span className="text-[10px] text-gray-400">Use <code>font-{className}</code> on any block - it is in the class picker, and works with <code>md:</code>, <code>hover:</code> and the rest.</span>
														: <span className="text-[10px] text-gray-400">Optional. Gives this font a class{suggestion ? <>, e.g. <code>font-{suggestion}</code></> : ''}.{suggestion && <> <button type="button" className="underline" onClick={() => setFont(index, 'name', suggestion)}>Use it</button></>}</span>}
											</div>
										);
									})()}

									<div className="flex flex-col gap-1">
										<label className="text-[11px] text-gray-600">Source URL</label>
										<input type="url" className={`${FIELD} ${srcOk ? '' : '!border-red-400'}`} placeholder="https://.../font.woff2" value={font?.src ?? ''} onChange={ev => setFont(index, 'src', ev.target.value.trim())} />
										{!srcOk && <span className="text-[10px] text-red-500">Use an https:// address (or a /path on this site) without spaces or quotes.</span>}
										{stylesheet && <span className="text-[10px] text-gray-400">A stylesheet: it brings its own weights and styles.</span>}
									</div>

									{!stylesheet && (
										<div className="grid grid-cols-3 gap-2">
											<div className="flex flex-col gap-1">
												<label className="text-[11px] text-gray-600">Weight</label>
												<input type="text" className={FIELD} placeholder="400" value={font?.weight ?? ''} onChange={ev => setFont(index, 'weight', ev.target.value)} />
											</div>
											<div className="flex flex-col gap-1">
												<label className="text-[11px] text-gray-600">Style</label>
												<select className={FIELD} value={font?.style ?? ''} onChange={ev => setFont(index, 'style', ev.target.value)}>
													<option value="">Normal</option>
													<option value="italic">Italic</option>
												</select>
											</div>
											<div className="flex flex-col gap-1">
												<label className="text-[11px] text-gray-600">Display</label>
												<select className={FIELD} value={font?.display || 'swap'} onChange={ev => setFont(index, 'display', ev.target.value)}>
													<option value="swap">swap</option>
													<option value="fallback">fallback</option>
													<option value="optional">optional</option>
													<option value="block">block</option>
													<option value="auto">auto</option>
												</select>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</Tab>
			</Tabs>

			<div className="flex items-center justify-end gap-3">
				{loading && <span className="text-xs text-gray-500">Saving...</span>}
				<button type="button" disabled={loading} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-2 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50" onClick={update_template}>
					Update Settings
				</button>
			</div>
		</div>
	);
};

export default TemplateSettings;
