import { __ } from "@wordpress/i18n";

export const CONTENT_WIDTH_OPTIONS = [
	{ label: __("Full Width", "essential-blocks"), value: "full" },
	{ label: __("Boxed", "essential-blocks"), value: "boxed" },
];

export const ROW_HEIGHTS = [
	{ label: __("Default", "essential-blocks"), value: "default" },
	{ label: __("Fit To Screen", "essential-blocks"), value: "fit" },
	{ label: __("Min Height", "essential-blocks"), value: "minH" },
	{ label: __("Equal Height", "essential-blocks"), value: "equalH" },
];

export const ROW_OVERFLOWS = [
	{ label: __("Visible", "essential-blocks"), value: "visible" },
	{ label: __("Hidden", "essential-blocks"), value: "hidden" },
	// { label: __("Scroll", "essential-blocks"), value: "scroll" },
];

export const COLUMNS_ALIGN = [
	{ label: "Default", value: "" },
	{ label: "Top", value: "flex-start" },
	{ label: "Center", value: "center" },
	{ label: "Bottom", value: "flex-end" },
];

export const COLUMNS_ORDER = [
	{ label: "Default", value: "default" },
	{ label: "Reverse Columns", value: "row-reverse" },
	{ label: "Custom Order", value: "custom" },
];

export const JUSTIFY_CONTENTS = [
	{ label: __("Start", "essential-blocks"), value: "flex-start" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("End", "essential-blocks"), value: "flex-end" },
	{ label: __("Space-Between", "essential-blocks"), value: "space-between" },
	{ label: __("Space-around", "essential-blocks"), value: "space-around" },
	{ label: __("Space-Evenly", "essential-blocks"), value: "space-evenly" },
];

// // export const BG_TYPES = ["fill", "gradient"];
// export const ALIGN_ITEMS = [
// 	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
// 	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
// 	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" },
// ];

// export const FLEX_DIRECTIONS = [
// 	{ label: "Row", value: "row" },
// 	{ label: "Row-Reverse", value: "row-reverse" },
// 	{ label: "Column", value: "column" },
// 	{ label: "Column-Reverse", value: "column-reverse" },
// ];
