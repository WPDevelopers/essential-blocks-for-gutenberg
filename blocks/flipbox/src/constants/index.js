import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const DEFAULT_ICON_SIZE = "50";
export const DEFAULT_FRONT_BACKGROUND = "#7967ff";
export const DEFAULT_BACK_BACKGROUND = "#4a5059";

export const FLIPBOX_SIDES = [
    { label: __("Front", "essential-blocks"), value: "front" },
    { label: __("Back", "essential-blocks"), value: "back" },
];

export const FLIPBOX_TYPE = [
    { label: __("Flip Left", "essential-blocks"), value: "flip-left" },
    { label: __("Flip Right", "essential-blocks"), value: "flip-right" },
    { label: __("Flip Up", "essential-blocks"), value: "flip-up" },
    { label: __("Flip Bottom", "essential-blocks"), value: "flip-bottom" },
    { label: __("Zoom In", "essential-blocks"), value: "zoom-in" },
    { label: __("Zoom Out", "essential-blocks"), value: "zoom-out" },
    { label: __("Fade", "essential-blocks"), value: "fade" },
];

export const BORDER_STYLES = [
    { label: __("Dashed", "essential-blocks"), value: "dashed" },
    { label: __("Solid", "essential-blocks"), value: "solid" },
    { label: __("Dotted", "essential-blocks"), value: "dotted" },
    { label: __("Double", "essential-blocks"), value: "double" },
    { label: __("Groove", "essential-blocks"), value: "groove" },
    { label: __("Inset", "essential-blocks"), value: "inset" },
    { label: __("Outset", "essential-blocks"), value: "outset" },
    { label: __("Ridge", "essential-blocks"), value: "ridge" },
];

export const ICON_TYPE = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Icon", "essential-blocks"), value: "icon" },
    { label: __("Image", "essential-blocks"), value: "image" },
];

export const LINK_TYPE = [
    { label: __("Box", "essential-blocks"), value: "box" },
    { label: __("Title", "essential-blocks"), value: "title" },
    { label: __("Button", "essential-blocks"), value: "button" },
];

export const ICON_POSITIONS = [
    { label: __("Before", "essential-blocks"), value: "before" },
    { label: __("After", "essential-blocks"), value: "after" },
];

export const BUTTON_STYLES = [
    { label: __("Style 1", "essential-blocks"), value: "styleOne" },
    { label: __("Style 2", "essential-blocks"), value: "styleTwo" },
    { label: __("Style 3", "essential-blocks"), value: "styleThree" },
    { label: __("Custom", "essential-blocks"), value: "custom" },
];

export const BACKGROUND_TYPE = [
    { label: __("Fill", "essential-blocks"), value: "fill" },
    { label: __("Gradient", "essential-blocks"), value: "gradient" },
    { label: __("Image", "essential-blocks"), value: "image" },
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
    { label: __("Default", "essential-blocks"), value: "" },
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
    { label: __("Default", "essential-blocks"), value: "" },
    { label: __("Fixed", "essential-blocks"), value: "fixed" },
    { label: __("Scroll", "essential-blocks"), value: "scroll" },
];

export const FLIPBOX_STYLES = [
    { label: __("Default", "essential-blocks"), value: "default" },
    { label: __("Mint", "essential-blocks"), value: "mint" },
    { label: __("Tangelo", "essential-blocks"), value: "tangelo" },
    { label: __("Royal", "essential-blocks"), value: "royal" },
];

export const FONT_SIZES = [
    { name: __("Small", "essential-blocks"), size: 12, slug: "s" },
    { name: __("Medium", "essential-blocks"), size: 16, slug: "m" },
    { name: __("Large", "essential-blocks"), size: 24, slug: "l" },
    { name: __("Extra Large", "essential-blocks"), size: 36, slug: "xl" },
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

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const BOX_HEIGHT_UNIT = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
];

export const FRONT_IMAGE_UNITS = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
];

export const CONTENT_POSITION = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const FLIP_MODE = [
    { label: __("Hover", "essential-blocks"), value: "hover" },
    { label: __("Click", "essential-blocks"), value: "click" },
];
