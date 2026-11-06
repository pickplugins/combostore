import React from "react";
import CssSelectors from "../CssSelectors";
import { sectionAnchor } from "./SectionView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `section` block: its anchor (the id a "#..." link
	scrolls to), then its `*` classes, which set the section's background,
	padding and how its content is laid out.
*/
const SectionOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('section', props?.cssSelectors);

	var anchor = sectionAnchor(options?.anchor);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Anchor</label>
					<input type="text" placeholder="about-us" className={inputClass} value={options?.anchor ?? ''} onChange={ev => updateBlock('options', { ...options, anchor: ev.target.value })} />
					<p className="text-xs text-gray-500">
						{anchor
							? <>Links to <code>#{anchor}</code> scroll to this section. Use it once per page. With a sticky header, add e.g. <code>scroll-mt-24</code> to <code>*</code> so the header does not cover it.</>
							: 'Optional. Set one so a button or menu link to #name scrolls to this section.'}
					</p>
				</div>

				<p className="text-xs text-gray-500">
					<code>*</code> styles the whole section (background, padding, layout). To keep its content at page width, put a Container inside it.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default SectionOptions;
