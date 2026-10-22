import DropDown from "../../../../components/DropDown";
import ToggleControl from "../../../../components/ToggleControl";
import { useState, useEffect } from "react";



const CBcssFontSize = (props) => {

	var unitArgs = {
		px: { label: "PX", value: "px" },
		em: { label: "EM", value: "em" },
		rem: { label: "REM", value: "rem" },
		"%": { label: "%", value: "%" },
		cm: { label: "CM", value: "cm" },
		mm: { label: "MM", value: "mm" },
		in: { label: "IN", value: "in" },
		pt: { label: "PT", value: "pt" },
		pc: { label: "PC", value: "pc" },
		ex: { label: "EX", value: "ex" },
		ch: { label: "CH", value: "ch" },
		vw: { label: "VW", value: "vw" },
		vh: { label: "VH", value: "vh" },
		vmin: { label: "VMIN", value: "vmin" },
		vmax: { label: "VMAX", value: "vmax" },
		// large: { "label": "large", "value": "large" },
		// larger: { "label": "larger", "value": "larger" },
		// medium: { "label": "medium", "value": "medium" },
		// small: { "label": "small", "value": "small" },
		// smaller: { "label": "smaller", "value": "smaller" },
		// "x-large": { "label": "x-large", "value": "x-large" },
		// "x-small": { "label": "x-small", "value": "x-small" },
		// "xx-large": { "label": "xx-large", "value": "xx-large" },
		// "xx-small": { "label": "xx-small", "value": "xx-small" },
		// "xxx-large": { "label": "xxx-large", "value": "xxx-large" },
		// revert: { "label": "revert", "value": "revert" },
		// unset: { "label": "unset", "value": "unset" },
		// initial: { "label": "initial", "value": "initial" },
		// inherit: { "label": "inherit", "value": "inherit" },
	};
	var valZ =
		props.val == null || props.val == undefined || props.val.length == 0
			? "0px"
			: props.val;
	valZ =
		typeof valZ == "object"
			? (valZ.val == undefined ? "px" : valZ.val) +
			(valZ.unit == undefined ? "px" : valZ.unit)
			: valZ;
	var widthValX =
		valZ == undefined || valZ.match(/[+-]?([0-9]*[.])?[0-9]+/g) == null
			? 0
			: valZ.match(/[+-]?([0-9]*[.])?[0-9]+/g)[0];
	var widthUnitX =
		valZ == undefined || valZ.match(/[a-zA-Z%]+/g) == null
			? "px"
			: valZ.match(/[a-zA-Z%]+/g)[0];

	const [widthVal, setwidthVal] = useState(widthValX);
	const [widthUnit, setwidthUnit] = useState(widthUnitX);
	const [isImportant, setImportant] = useState(
		valZ.includes(" !important") ? true : false
	);
	return (
		<div className="flex justify-between">
			{widthUnit != "auto" && (
				<input
					value={widthVal}
					type="number"
					step="0.01"
					disabled={widthUnit == "auto" ? true : false}
					onChange={(newVal) => {
						setwidthVal(newVal);
						if (widthUnit == "auto") {
							// props.onChange(widthUnit, 'width');
							if (isImportant) {
								props.onChange(widthUnit + " !important", "fontSize");
							} else {
								props.onChange(widthUnit, "fontSize");
							}
						} else {
							//props.onChange(newVal + widthUnit, 'width');
							if (isImportant) {
								props.onChange(newVal + widthUnit + " !important", "fontSize");
							} else {
								props.onChange(newVal + widthUnit, "fontSize");
							}
						}
					}}
				/>
			)}
			<div>

				<DropDown
					className=""
					label=""
					value={''}
					options={unitArgs}
					onOptionsChoose={(newVal) => {


						setwidthUnit(newVal.value);
						if (newVal.value == "auto") {
							if (isImportant) {
								props.onChange(newVal.value + " !important", "fontSize");
							} else {
								props.onChange(newVal.value, "fontSize");
							}
						} else {
							if (isImportant) {
								props.onChange(
									widthVal + newVal.value + " !important",
									"fontSize"
								);
							} else {
								props.onChange(widthVal + newVal.value, "fontSize");
							}
						}


						onChangeCssVal(newVal, key);
					}}
				/>




			</div>
			<ToggleControl
				help={
					isImportant
						? ("Important Enabled")
						: ("Important?")
				}
				checked={isImportant}
				onChange={(arg) => {
					setImportant((isImportant) => !isImportant);
					if (isImportant) {
						if (widthUnit == "auto") {
							props.onChange(widthUnit, "fontSize");
						} else {
							props.onChange(widthVal + widthUnit, "fontSize");
						}
					} else {
						if (widthUnit == "auto") {
							props.onChange(widthUnit + " !important", "fontSize");
						} else {
							props.onChange(widthVal + widthUnit + " !important", "fontSize");
						}
					}
				}}
			/>
		</div>
	);
}

export default CBcssFontSize;
