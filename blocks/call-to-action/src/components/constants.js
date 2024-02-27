import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const CONTENT_STYLES = [
	{ label: __("Basic", "essential-blocks"), value: "basic" },
	{ label: __("Inline", "essential-blocks"), value: "inline" },
];

export const CONTENT_ALIGN = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const HEADER_TAGS = [
	{ label: __("H1", "essential-blocks"), value: "h1" },
	{ label: __("H2", "essential-blocks"), value: "h2" },
	{ label: __("H3", "essential-blocks"), value: "h3" },
	{ label: __("H4", "essential-blocks"), value: "h4" },
	{ label: __("H5", "essential-blocks"), value: "h5" },
	{ label: __("H6", "essential-blocks"), value: "h6" },
];

export const BUTTON_SIZES = [
	{ label: "Small", value: "small" },
	{ label: "Medium", value: "medium" },
	{ label: "Large", value: "large" },
	{ label: "Extra Large", value: "extra-large" },
	{ label: "Custom", value: "custom" },
];

export const BUTTON_POSITION = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" },
];

export const HOVER_EFFECT = [
	{ label: __("Select Hover Effect", "essential-blocks"), value: "" },
	{ label: __("Grow", "essential-blocks"), value: "hvr-grow" },
	{ label: __("Shrink", "essential-blocks"), value: "hvr-shrink" },
	{ label: __("Pulse", "essential-blocks"), value: "hvr-pulse" },
	{ label: __("Pulse Grow", "essential-blocks"), value: "hvr-pulse-grow" },
	{ label: __("Pulse Shrink", "essential-blocks"), value: "hvr-pulse-shrink" },
	{ label: __("Push", "essential-blocks"), value: "hvr-push" },
	{ label: __("Pop", "essential-blocks"), value: "hvr-pop" },
	{ label: __("Bounce In", "essential-blocks"), value: "hvr-bounce-in" },
	{ label: __("Bounce Out", "essential-blocks"), value: "hvr-bounce-out" },
	{ label: __("Rotate", "essential-blocks"), value: "hvr-rotate" },
	{ label: __("Grow Rotate", "essential-blocks"), value: "hvr-grow-rotate" },
	{ label: __("Float", "essential-blocks"), value: "hvr-float" },
	{ label: __("Sink", "essential-blocks"), value: "hvr-sink" },
	{ label: __("Bob", "essential-blocks"), value: "hvr-bob" },
	{ label: __("Hang", "essential-blocks"), value: "hvr-hang" },
	{ label: __("Skew", "essential-blocks"), value: "hvr-skew" },
	{ label: __("Skew Forward", "essential-blocks"), value: "hvr-skew-forward" },
	{
		label: __("Skew Backward", "essential-blocks"),
		value: "hvr-skew-backward",
	},
	{
		label: __("Wobble Horizontal", "essential-blocks"),
		value: "hvr-wobble-horizontal",
	},
	{
		label: __("Wobble Vertical", "essential-blocks"),
		value: "hvr-wobble-vertical",
	},
	{
		label: __("Wobble To Bottom Right", "essential-blocks"),
		value: "hvr-wobble-to-bottom-right",
	},
	{
		label: __("Wobble To Top Right", "essential-blocks"),
		value: "hvr-wobble-to-top-right",
	},
	{ label: __("Wobble Top", "essential-blocks"), value: "hvr-wobble-top" },
	{
		label: __("Wobble Bottom", "essential-blocks"),
		value: "hvr-wobble-bottom",
	},
	{ label: __("Wobble Skew", "essential-blocks"), value: "hvr-wobble-skew" },
	{ label: __("Buzz", "essential-blocks"), value: "hvr-buzz" },
	{ label: __("Buzz Out", "essential-blocks"), value: "hvr-buzz-out" },
	{ label: __("Forward", "essential-blocks"), value: "hvr-forward" },
	{ label: __("Fade", "essential-blocks"), value: "hvr-fade" },
	{ label: __("Back Pulse", "essential-blocks"), value: "hvr-back-pulse" },
	{
		label: __("Sweep To Right", "essential-blocks"),
		value: "hvr-sweep-to-right",
	},
	{
		label: __("Sweep To Left", "essential-blocks"),
		value: "hvr-sweep-to-left",
	},
	{
		label: __("Sweep To Bottom", "essential-blocks"),
		value: "hvr-sweep-to-bottom",
	},
	{ label: __("Sweep To Top", "essential-blocks"), value: "hvr-sweep-to-top" },
	{
		label: __("Bounce To Right", "essential-blocks"),
		value: "hvr-bounce-to-right",
	},
	{
		label: __("Bounce To Left", "essential-blocks"),
		value: "hvr-bounce-to-left",
	},
	{
		label: __("Bounce To Bottom", "essential-blocks"),
		value: "hvr-bounce-to-bottom",
	},
	{
		label: __("Bounce To Top", "essential-blocks"),
		value: "hvr-bounce-to-top",
	},
	{ label: __("Radial Out", "essential-blocks"), value: "hvr-radial-out" },
	{ label: __("Radial In", "essential-blocks"), value: "hvr-radial-in" },
	{ label: __("Rectangle In", "essential-blocks"), value: "hvr-rectangle-in" },
	{
		label: __("Rectangle Out", "essential-blocks"),
		value: "hvr-rectangle-out",
	},
	{
		label: __("Shutter In Horizontal", "essential-blocks"),
		value: "hvr-shutter-in-horizontal",
	},
	{
		label: __("Shutter Out Horizontal", "essential-blocks"),
		value: "hvr-shutter-out-horizontal",
	},
	{
		label: __("Shutter In Vertical", "essential-blocks"),
		value: "hvr-shutter-in-vertical",
	},
	{
		label: __("Shutter Out Vertical", "essential-blocks"),
		value: "hvr-shutter-out-vertical",
	},
	{
		label: __("Curl Top Left", "essential-blocks"),
		value: "hvr-curl-top-left",
	},
	{
		label: __("Curl Top Right", "essential-blocks"),
		value: "hvr-curl-top-right",
	},
	{
		label: __("Curl Bottom Right", "essential-blocks"),
		value: "hvr-curl-bottom-right",
	},
	{
		label: __("Curl Bottom Left", "essential-blocks"),
		value: "hvr-curl-bottom-left",
	},
];

// dimension control
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const TITLE_MARGIN = "titleMargin";
export const SUBTITLE_MARGIN = "subtitleMargin";
export const BUTTON_PADDING = "btnPadding";
export const ICON_PADDING = "iconPadding";
export const DESC_PADDING = "descPadding";

// background control
export const WRAPPER_BACK = "wrpBack";

// border control
export const WRAPPER_BORDER = "wrpBrd";
export const BUTTON_BORDER = "btnBrd";

// responsive range controller
export const ICON_SIZE = "iconSize";
