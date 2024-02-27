// const { __ } = wp.i18n;
import { __ } from "@wordpress/i18n";

export const COLUMNS_ALIGN = [
	{ label: "Default", value: "" },
	{ label: "Top", value: "flex-start" },
	{ label: "Center", value: "center" },
	{ label: "Bottom", value: "flex-end" },
];

export const ROW_OVERFLOWS = [
	{ label: __("Default", "essential-blocks"), value: "" },
	{ label: __("Hidden", "essential-blocks"), value: "hidden" },
];
