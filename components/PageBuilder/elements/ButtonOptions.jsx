import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `button` block: its label, where it links (a URL,
	optionally with a scheme such as tel: or mailto:, and whether it opens in
	a new tab), the icon, then every part through its cssSelectors keys,
	declared with their defaults in ElementsDefinition.js.
*/
const ButtonOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	/* Schemes are saved both as "tel" and "tel:"; the select shows them without the colon. */
	var scheme = String(options?.scheme ?? '').replace(/:+$/, '');
	var newTab = options?.target === '_blank';

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('button', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<input type="text" className={inputClass} value={options?.text ?? ''} onChange={ev => setOption('text', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link To</label>
					<select className={inputClass} value={options?.linkTo ?? ''} onChange={ev => setOption('linkTo', ev.target.value)} >
						<option value="">None</option>
						<option value="custom">Custom URL</option>
					</select>
				</div>

				{options?.linkTo == 'custom' && (
					<>
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Scheme</label>
							<select className={inputClass} value={scheme} onChange={ev => setOption('scheme', ev.target.value)} >
								<option value="">None (a web address or page path)</option>
								<option value="tel">tel (phone call)</option>
								<option value="mailto">mailto (email)</option>
								<option value="sms">sms (text message)</option>
								<option value="geo">geo (map location)</option>
								<option value="webcal">webcal (calendar)</option>
							</select>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">{scheme ? 'Number or address' : 'Custom URL'}</label>
							<input type="text" placeholder={scheme ? '01XXXXXXXXX' : '/shop'} className={inputClass} value={options?.url ?? ''} onChange={ev => setOption('url', ev.target.value)} />
						</div>

						<div className="flex justify-between items-center">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Open in a new tab</label>
							<div className="cursor-pointer" onClick={() => setOption('target', newTab ? '' : '_blank')}>
								{newTab ? <IconCheckbox /> : <IconSquare />}
							</div>
						</div>
					</>
				)}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
					<input type="number" placeholder="24" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default ButtonOptions;
