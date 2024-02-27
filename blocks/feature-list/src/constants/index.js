import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const TITLE_TAG = [
	{ label: __("H1", "essential-blocks"), value: "h1" },
	{ label: __("H2", "essential-blocks"), value: "h2" },
	{ label: __("H3", "essential-blocks"), value: "h3" },
	{ label: __("H4", "essential-blocks"), value: "h4" },
	{ label: __("H5", "essential-blocks"), value: "h5" },
	{ label: __("H6", "essential-blocks"), value: "h6" },
	{ label: __("div", "essential-blocks"), value: "div" },
	{ label: __("span", "essential-blocks"), value: "span" },
	{ label: __("p", "essential-blocks"), value: "p" },
];

export const CONNECTOR_STYLE = [
	{ label: __("Style 1", "essential-blocks"), value: "style-1" },
	{ label: __("Style 2", "essential-blocks"), value: "style-2" },
];

export const CONNECTOR_TYPE = [
	{ label: __("Solid", "essential-blocks"), value: "solid" },
	{ label: __("Dotted", "essential-blocks"), value: "dotted" },
	{ label: __("Dashed", "essential-blocks"), value: "dashed" },
];

export const ICON_SHAPE = [
	{ label: __("None", "essential-blocks"), value: "none" },
	{ label: __("Circle", "essential-blocks"), value: "circle" },
	{ label: __("Square", "essential-blocks"), value: "square" },
	{ label: __("Rhombus", "essential-blocks"), value: "rhombus" },
];

export const SHAPE_VIEW = [
	{ label: __("Framed", "essential-blocks"), value: "framed" },
	{ label: __("Stacked", "essential-blocks"), value: "stacked" },
];

export const MEDIA_TYPES = [
	{ label: __("None", "essential-blocks"), value: "none" },
	{ label: __("Icon", "essential-blocks"), value: "icon" },
	{ label: __("Image", "essential-blocks"), value: "image" },
];

export const ICON_POSITION = [
	{ label: <Dashicon icon={"editor-alignleft"} />, value: "left" },
	{ label: <Dashicon icon={"editor-aligncenter"} />, value: "top" },
	{ label: <Dashicon icon={"editor-alignright"} />, value: "right" },
];

export const FEATURE_ITEM_POSITION = [
	{ label: <Dashicon icon={"editor-alignleft"} />, value: "left" },
	{ label: <Dashicon icon={"editor-aligncenter"} />, value: "center" },
	{ label: <Dashicon icon={"editor-alignright"} />, value: "right" },
];

// Responsive Range Controller
export const connectorWidth = "connWidth";
export const listSpace = "listSpace";
export const rowSpace = "rowSpace";
export const iconBackgroundSize = "iconBgSize";
export const iconSize = "iconSize";
export const iconSpace = "iconSpace";
export const titleSpace = "titleSpace";

// dimension controls
export const iconPadding = "iconPadding";
export const boxPadding = "boxPadding";

export const wrapperMargin = "wrapperMargin";
export const wrapperPadding = "wrapperPadding";

// background controls
export const iconBackgroundType = "iconBg";
export const boxBackgroundType = "boxBg";
export const wrapperBackgroundType = "wrapperBg";

// border shadow controller
export const iconBorder = "iconBrdSdw";
export const boxBorder = "boxBrdSdw";
export const wrapperBorder = "wrapperBrdSdw";
