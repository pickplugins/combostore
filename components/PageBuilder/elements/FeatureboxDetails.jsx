import React from "react";
import { FeatureboxTextPreview } from "./FeatureboxTitle";

/* Builder (canvas) preview of a featurebox item's description: the shared featurebox text preview, with the featurebox's `description` classes. */
const FeatureboxDetails = (props) => (
	<FeatureboxTextPreview props={props} type="featureboxDetails" parentKey="description" field="description" fallbackTag="p" sample="A short description of this feature." />
);

export default FeatureboxDetails;
