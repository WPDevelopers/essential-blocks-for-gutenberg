import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const WrpBdShadow = "wrp_";
export const ImgBdShadow = "img_";
export const IMG_WIDTH = "imgWidth_";
export const IMG_GAP = "imgGap_";

export const TestimonialWrapBg = "wrp_";
export const QUOTE_SIZE = "quoteSize";
export const RATING_SIZE = "ratingSize";

export const COLUMN_NUMBERS = [
    { label: __("One", "essential-blocks"), value: 1 },
    { label: __("Two", "essential-blocks"), value: 2 },
    { label: __("Three", "essential-blocks"), value: 3 },
];

export const DESC_POSITIONS = [
    { label: __("Top", "essential-blocks"), value: 1 },
    { label: __("Bottom", "essential-blocks"), value: 0 },
];

export const TEXT_ALIGN = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const ALIGN_ITEMS = [
    { label: __("Left", "essential-blocks"), value: "flex-start" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Right", "essential-blocks"), value: "flex-end" },
];

export const UNIT_TYPES = [
    { label: __("PX", "essential-blocks"), value: "px" },
    { label: __("EM", "essential-blocks"), value: "em" },
];

export const ALIGN_ITEMS_VERTICAL = [
    { label: __("Top", "essential-blocks"), value: "flex-start" },
    { label: __("Middle", "essential-blocks"), value: "center" },
    { label: __("Bottom", "essential-blocks"), value: "flex-end" },
];
export const RATING_POSITION = [
    { label: __("Top", "essential-blocks"), value: 2 },
    // { label: __("Middle", "essential-blocks"), value: 2 },
    { label: __("Bottom", "essential-blocks"), value: 3 },
];

export const IMG_POSITIONS = [
    { label: __("Before", "essential-blocks"), value: 0 },
    { label: __("After", "essential-blocks"), value: 1 },
];

export const BG_TYPES = [
    { label: "Color", value: "color" },
    { label: "Image", value: "image" },
];

export const TEXT_TRANSFORM = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Lowercase", "essential-blocks"), value: "lowercase" },
    { label: __("Capitalize", "essential-blocks"), value: "capitalize" },
    { label: __("Uppercase", "essential-blocks"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
    { label: __("Lighter", "essential-blocks"), value: "lighter" },
    { label: __("Normal", "essential-blocks"), value: "normal" },
    { label: __("Bold", "essential-blocks"), value: "bold" },
    { label: __("Bolder", "essential-blocks"), value: "bolder" },
];

export const TEXT_DECORATION = [
    { label: __("Initial", "essential-blocks"), value: "initial" },
    { label: __("Overline", "essential-blocks"), value: "overline" },
    { label: __("Line Through", "essential-blocks"), value: "line-through" },
    { label: __("Underline", "essential-blocks"), value: "underline" },
    {
        label: __("Underline Oveline", "essential-blocks"),
        value: "underline overline",
    },
];

export const BACKGROUND_SIZE = [
    { label: __("Auto", "essential-blocks"), value: "auto" },
    { label: __("Cover", "essential-blocks"), value: "cover" },
    { label: __("Contain", "essential-blocks"), value: "contain" },
    { label: __("Custom", "essential-blocks"), value: "custom" },
];

export const BACKGROUND_REPEAT = [
    { label: __("Default", "essential-blocks"), value: "" },
    { label: __("No-repeat", "essential-blocks"), value: "no-repeat" },
    { label: __("Repeat", "essential-blocks"), value: "repeat" },
    { label: __("Repeat-x", "essential-blocks"), value: "repeat-x" },
    { label: __("Repeat-y", "essential-blocks"), value: "repeat-y" },
];

export const BACKGROUND_POSITION = [
    { label: __("Default", "essential-blocks"), value: "initial" },
    { label: __("Center Center", "essential-blocks"), value: "center center" },
    { label: __("Center Left", "essential-blocks"), value: "center left" },
    { label: __("Center Right", "essential-blocks"), value: "center right" },
    { label: __("Top Center", "essential-blocks"), value: "top center" },
    { label: __("Top Left", "essential-blocks"), value: "top left" },
    { label: __("Top Right", "essential-blocks"), value: "top right" },
    { label: __("Bottom Center", "essential-blocks"), value: "bottom center" },
    { label: __("Bottom Left", "essential-blocks"), value: "bottom left" },
    { label: __("Bottom Right", "essential-blocks"), value: "bottom right" },
    { label: __("Custom", "essential-blocks"), value: "custom" },
];

export const BACKGROUND_ATTACHMENT = [
    { label: __("Default", "essential-blocks"), value: "initial" },
    { label: __("Fixed", "essential-blocks"), value: "fixed" },
    { label: __("Scroll", "essential-blocks"), value: "scroll" },
];

export const LAYOUT_PRESETS = [
    { label: __("Style 1", "essential-blocks"), value: "layout-preset-1" },
    { label: __("Style 2", "essential-blocks"), value: "layout-preset-2" },
    { label: __("Style 3", "essential-blocks"), value: "layout-preset-3" },
];
