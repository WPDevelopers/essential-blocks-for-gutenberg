import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const ICON_BG = "iconBg";
export const BORDER = "iconBrd";
export const BORDER_WIDTH = "iconBrdWidth";

// range control
export const ICON_SIZE = "iconSize";

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
];

export const ICON_ALIGN = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const ICON_SHAPE = [
    { label: __("Circle", "essential-blocks"), value: "circle" },
    { label: __("Square", "essential-blocks"), value: "square" },
];

export const SHAPE_VIEW = [
    { label: __("Default", "essential-blocks"), value: "default" },
    { label: __("Framed", "essential-blocks"), value: "framed" },
    { label: __("Stacked", "essential-blocks"), value: "stacked" },
];
export const NORMAL_HOVER = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];
