import { __ } from "@wordpress/i18n";

export const DEFAULT_TEMPLATE = [
	["essential-blocks/wrapper", {}],
	["essential-blocks/wrapper", {}],
];

export const INITIAL_CONTENT = [
	{ label: __("Primary", "essential-blocks"), value: "primary" },
	{ label: __("Secondary", "essential-blocks"), value: "secondary" },
];

export const SWITCH_STYLES = [
	{ label: __("Rectangle", "essential-blocks"), value: "rectangle" },
	{ label: __("Rounded", "essential-blocks"), value: "rounded" },
	// { label: __("Text", "essential-blocks"), value: "text" },
	{ label: __("Toggle", "essential-blocks"), value: "toggle" },
];

export const SEPERATOR_TYPE = [
	{ label: __("None", "essential-blocks"), value: "none" },
	{ label: __("Circle", "essential-blocks"), value: "circle" },
	{ label: __("Diamond", "essential-blocks"), value: "diamond" },
];

export const SWITCH_SIZE = [
	{ label: __("Small", "essential-blocks"), value: "s" },
	{ label: __("Medium", "essential-blocks"), value: "m" },
	{ label: __("Large", "essential-blocks"), value: "l" },
	{ label: __("Extra Large", "essential-blocks"), value: "xl" },
];

export const ALIGNMENT = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const BORDER_STYLES = [
	{ label: __("None", "essential-blocks"), value: "none" },
	{ label: __("Dashed", "essential-blocks"), value: "dashed" },
	{ label: __("Solid", "essential-blocks"), value: "solid" },
	{ label: __("Dotted", "essential-blocks"), value: "dotted" },
	{ label: __("Double", "essential-blocks"), value: "double" },
	{ label: __("Groove", "essential-blocks"), value: "groove" },
	{ label: __("Inset", "essential-blocks"), value: "inset" },
	{ label: __("Outset", "essential-blocks"), value: "outset" },
	{ label: __("Ridge", "essential-blocks"), value: "ridge" },
];

export const BACKGROUND_TYPE = [
	{ label: __("Solid", "essential-blocks"), value: "solid" },
	{ label: __("Gradient", "essential-blocks"), value: "gradient" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None", "essential-blocks"), value: "none" },
	{ label: __("Lowercase", "essential-blocks"), value: "lowercase" },
	{ label: __("Capitalize", "essential-blocks"), value: "capitalize" },
	{ label: __("Uppercase", "essential-blocks"), value: "uppercase" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial", "essential-blocks"), value: "initial" },
	{ label: __("Overline", "essential-blocks"), value: "overline" },
	{ label: __("Line Through", "essential-blocks"), value: "line-through" },
	{ label: __("Underline", "essential-blocks"), value: "underline" },
	{ label: __("Underline Oveline", "essential-blocks"), value: "underline overline" },
];

export const DEFAULT_BACKGROUND = "#3074ff";

export const DEFAULT_ACTIVE_BG = "#0f52ba";

export const DEFAULT_CONTROLLER_COLOR = "white";
