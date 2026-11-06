import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the featurebox's `featureboxTitle` and
	`featureboxDetails` blocks (the `type` prop): the tag, then the `*`
	classes. They had only the style editor, so the tag - which defaulted to
	h1 - could not be changed.
*/
const FeatureboxTextOptions = (props) => {

	var type = props?.type;
	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var isTitle = type === 'featureboxTitle';

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults(type, props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={options?.tag ?? (isTitle ? 'h3' : 'p')} onChange={ev => updateBlock('options', { ...options, tag: ev.target.value })}>
						{['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'strong'].map(t => <option key={t} value={t}>{t.toUpperCase()}</option>)}
					</select>
				</div>
				<p className="text-xs text-gray-500">Its text is the {isTitle ? 'title' : 'description'} of the feature it shows, set in the Featurebox's panel; the Featurebox's own {isTitle ? 'title' : 'description'} classes are added too.</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default FeatureboxTextOptions;
