// const { __ } = wp.i18n;
import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const LAYOUT_TYPES = [
	{ label: __("Preset 1"), value: "preset1" },
	{ label: __("Preset 2"), value: "preset2" },
	{ label: __("Preset 3"), value: "preset3" },
	{ label: __("Preset 4"), value: "preset4" },
];

export const PRESET = [
	{ label: __("Preset 1"), value: "preset-1" },
	{ label: __("Preset 2"), value: "preset-2" },
	{ label: __("Preset 3"), value: "preset-3" },
	{ label: __("Preset 4"), value: "preset-4" },
];
export const VERTICAL_PRESET = [
	{ label: __("Preset 1"), value: "vertical-preset-1" },
	{ label: __("Preset 2"), value: "vertical-preset-2" },
];

export const ANIMATION = [{ label: __("Fade"), value: "preset-1" }];

export const NAV_POSITION = [
	{
		label: __(<Dashicon icon={"editor-alignleft"} />),
		value: "items-justified-left",
	},
	{
		label: __(<Dashicon icon={"editor-aligncenter"} />),
		value: "items-justified-center",
	},
	{
		label: __(<Dashicon icon={"editor-alignright"} />),
		value: "items-justified-right",
	},
	{
		label: __(<Dashicon icon={"editor-justify"} />),
		value: "items-justified-space-between",
	},
];

export const NAV_V_POSITION = [
	{
		label: __(<Dashicon icon={"editor-alignleft"} />),
		value: "items-justified-left",
	},
	{
		label: __(<Dashicon icon={"editor-aligncenter"} />),
		value: "items-justified-center",
	},
	{
		label: __(<Dashicon icon={"editor-alignright"} />),
		value: "items-justified-right",
	},
];

export const NAV_RESPONSIVE_BTN = [
	{ label: __("Text"), value: false },
	{ label: __("Icon"), value: true },
];
export const HAMBURGER_SCREEN = [
	{ label: __("OFF"), value: "never" },
	{ label: __("MOBILE"), value: "mobile" },
	{ label: __("ALWAYS"), value: "always" },
];

export const MEDIA_TYPES = ["image", "icon", "number", "none"];

export const CLOSE_ICON_ALIGN = [
	{ label: __("Left"), value: "close-icon-left" },
	{ label: __("Center"), value: "close-icon-center" },
	{ label: __("Right"), value: "close-icon-right" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [
	{ label: __("Left"), value: "flex-start" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "flex-end" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_ROW = [
	{ label: __("Top"), value: "flex-start" },
	{ label: __("Middle"), value: "center" },
	{ label: __("Bottom"), value: "flex-end" },
];

export const ICON_IMAGE_BG_TYPES = [
	{ label: "Fill", value: "fill" },
	{ label: "Gradient", value: "gradient" },
];

export const sizeUnitTypes = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const imgHeightUnits = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "vh", value: "vh" },
];

export const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const BACKGROUND_TYPES = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Gradient"), value: "gradient" },
	{ label: __("Image"), value: "image" },
];

export const BACKGROUND_SIZES = [
	{ label: __("Auto"), value: "auto" },
	{ label: __("Cover"), value: "cover" },
	{ label: __("Contain"), value: "contain" },
];

export const BORDER_STYLES = [
	{ label: __("None"), value: "none" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];

export const SHADOW_HOVER_OPTIONS = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const LETTER_SPACING_LINE_HEIGHT_UNITS = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
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
