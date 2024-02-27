import { __ } from "@wordpress/i18n";

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const BORDER_STYLES = [
	{ label: __("Solid", "essential-blocks"), value: "solid" },
	{ label: __("Dashed", "essential-blocks"), value: "dashed" },
	{ label: __("Dotted", "essential-blocks"), value: "dotted" },
	{ label: __("Double", "essential-blocks"), value: "double" },
	{ label: __("Groove", "essential-blocks"), value: "groove" },
	{ label: __("Inset", "essential-blocks"), value: "inset" },
	{ label: __("Outset", "essential-blocks"), value: "outset" },
	{ label: __("Ridge", "essential-blocks"), value: "ridge" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial", "essential-blocks"), value: "initial" },
	{ label: __("Overline", "essential-blocks"), value: "overline" },
	{ label: __("Line Through", "essential-blocks"), value: "line-through" },
	{ label: __("Underline", "essential-blocks"), value: "underline" },
	{ label: __("Underline Oveline", "essential-blocks"), value: "underline overline" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None", "essential-blocks"), value: "none" },
	{ label: __("Capitalize", "essential-blocks"), value: "capitalize" },
	{ label: __("Uppercase", "essential-blocks"), value: "uppercase" },
	{ label: __("Lowercase", "essential-blocks"), value: "lowercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Normal", "essential-blocks"), value: "normal" },
	{ label: __("Bold", "essential-blocks"), value: "bold" },
	{ label: __("Lighter", "essential-blocks"), value: "lighter" },
	{ label: __("Bolder", "essential-blocks"), value: "bolder" },
];
