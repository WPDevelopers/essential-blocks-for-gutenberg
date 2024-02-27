import { __ } from "@wordpress/i18n";

export const SHAPE_DIVIDER_POSITIONS = [
    { label: __("Top", "essential-blocks"), value: "top" },
    { label: __("Bottom", "essential-blocks"), value: "bottom" },
];

export const WRAPPER_ALIGN = [
    { label: __("Full", "essential-blocks"), value: "full" },
    { label: __("Wide", "essential-blocks"), value: "wide" },
    { label: __("None", "essential-blocks"), value: undefined },
];
export const HEIGHT_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "vh", value: "vh" },
];
export const CONTENT_ALIGNMENT = [
    { label: "Top", value: "flex-start" },
    { label: "Center", value: "center" },
    { label: "Bottom", value: "flex-end" },
];
// responsive range control
export const WRAPPER_WIDTH = "wrpWidth";
export const WRAPPER_HEIGHT = "wrpHeight";

// background control
export const WRAPPER_BACKGROUND = "wrpBackground";

// border & shadow control
export const WRAPPER_BORDER = "wrpBrdShd";

// responsive dimension control
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";

// shape divider
export const SHAPE_DIVIDER_TOP = "wrpShapeTop";
export const SHAPE_DIVIDER_BOTTOM = "wrpShapeBottom";
