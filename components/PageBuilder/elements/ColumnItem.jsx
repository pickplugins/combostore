'use client'
import React from "react";
import { LayoutCellPreview } from "./GridItem";

/* Builder preview of one column: the shared layout-cell preview, with the parent columns block's `column` classes. */
const ColumnItem = (props) => (
	<LayoutCellPreview props={props} type="columnItem" parentType="columns" parentKey="column" emptyLabel="Empty column - drop elements here" />
);

export default ColumnItem;
