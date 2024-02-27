import { __ } from "@wordpress/i18n";

export const LAYOUT = [
	{ label: __("Line", "essential-blocks"), value: "line" },
	{ label: __("Line Rainbow", "essential-blocks"), value: "line_rainbow" },
	{ label: __("Circle", "essential-blocks"), value: "circle" },
	{ label: __("Circle Fill", "essential-blocks"), value: "circle_fill" },
	{ label: __("Half Circle", "essential-blocks"), value: "half_circle" },
	{
		label: __("Half Circle Fill", "essential-blocks"),
		value: "half_circle_fill",
	},
	{ label: __("Box", "essential-blocks"), value: "box" },
];

export const CONTAINER_CLASS = {
	line: "line",
	line_rainbow: "line",
	circle: "circle",
	circle_fill: "circle",
	half_circle: "circle",
	half_circle_fill: "circle",
	box: "box",
};

export const WRAPPER_CLASS = {
	line: "eb-progressbar-line",
	line_rainbow: "eb-progressbar-line eb-progressbar-line-rainbow",
	circle: "eb-progressbar-circle",
	circle_fill: "eb-progressbar-circle eb-progressbar-circle-fill",
	half_circle: "eb-progressbar-half-circle",
	half_circle_fill:
		"eb-progressbar-half-circle eb-progressbar-half-circle-fill",
	box: "eb-progressbar-box",
};

export const STRIPE_CLASS = {
	none: "eb-progressbar-line-stripe",
	normal: "eb-progressbar-line-stripe eb-progressbar-line-animate",
	reverse: "eb-progressbar-line-stripe eb-progressbar-line-animate-rtl",
};

export const PX_PERCENTAGE = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];

// responsive range controll
export const PROGRESSBAR_WIDTH = "wrpWidth";
export const PROGRESSBAR_HEIGHT = "wrpHeight";
export const PROGRESSBAR_SIZE = "wrpSize";
export const STROKE_WIDTH = "stkWidth";
export const BOX_WIDTH = "boxWidth";
export const BOX_HEIGHT = "boxHeight";

// dimension control
export const WRAPPER_MARGIN = "wrpMargin";
export const TITLE_SPACE = "ttlSpace";
