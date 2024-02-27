import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
];

export const SEPARATOR_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const SEPARATOR_TYPE = [
	{ label: __("Line", "essential-blocks"), value: "line" },
	{ label: __("Icon", "essential-blocks"), value: "icon" },
];

export const SEPARATOR_POSITION = [
	{ label: __("Top", "essential-blocks"), value: "top" },
	{ label: __("Bottom", "essential-blocks"), value: "bottom" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" }
];

export const HEADING = [
	{ label: __("H1", "essential-blocks"), value: "h1" },
	{ label: __("H2", "essential-blocks"), value: "h2" },
	{ label: __("H3", "essential-blocks"), value: "h3" },
	{ label: __("H4", "essential-blocks"), value: "h4" },
	{ label: __("H5", "essential-blocks"), value: "h5" },
	{ label: __("H6", "essential-blocks"), value: "h6" },
	{ label: __("P", "essential-blocks"), value: "p" },
];

export const SEPERATOR_STYLES = [
	{ label: __("Solid", "essential-blocks"), value: "solid" },
	{ label: __("Dashed", "essential-blocks"), value: "dashed" },
	{ label: __("Dotted", "essential-blocks"), value: "dotted" },
	{ label: __("Double", "essential-blocks"), value: "double" },
	{ label: __("Groove", "essential-blocks"), value: "groove" },
	{ label: __("Outset", "essential-blocks"), value: "outset" },
	{ label: __("Ridge", "essential-blocks"), value: "ridge" },
];