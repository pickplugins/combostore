"use client";

import dynamic from "next/dynamic";

/*
	The icon picker (IconPickerPanel.jsx), loaded only when one is shown.

	The picker lists every Tabler icon, so it imports the whole library. The
	extensions' options panels import it, and extension configs - which the
	storefront loads for their blocks - import those panels, so a static
	import put all ~6,000 icons into every storefront page. Loaded this way,
	the icon set is fetched by the builder when a picker first appears.
*/
const IconPicker = dynamic(() => import("./IconPickerPanel"), { ssr: false });

export default IconPicker;
