import { __ } from "@wordpress/i18n";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const IMAGE_WIDTH = "width";
export const IMAGE_HEIGHT = "height";

export const IMAGE_BORDER_SHADOW = "imgBorderShadow";
export const CAPTION_MARGIN = "captionMargin";
export const CAPTION_PADDING = "captionPadding";
export const CAPTION_TYPOGRAPHY = "captionTypo";
export const CAPTION_WIDTH = "captionWidth";
export const TEXT_ALIGNMENT = "textAlign";
export const IMAGE_ALIGNMENT = "imageAlign";

export const VERTICAL_ALIGN = [
    { label: __("Top", "essential-blocks"), value: "top" },
    { label: __("Middle", "essential-blocks"), value: "middle" },
    { label: __("Bottom", "essential-blocks"), value: "bottom" },
];

export const VERTICAL_ALIGN_CAP_2 = [
    { label: __("Top", "essential-blocks"), value: "top" },
    { label: __("Bottom", "essential-blocks"), value: "bottom" },
];

export const HORIZONTAL_ALIGN = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Right", "essential-blocks"), value: "right" },
];

export const TEXT_ALIGN = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Right", "essential-blocks"), value: "right" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Justify", "essential-blocks"), value: "justify" },
];
export const IMAGE_ALIGN = [
    { label: __("Left", "essential-blocks"), value: "0" },
    { label: __("Center", "essential-blocks"), value: "0 auto" },
    { label: __("Right", "essential-blocks"), value: "0 0 0 auto" },
];

export const HOVER_EFFECT = [
    { label: __("No Effect", "essential-blocks"), value: "no-effect" },
    { label: __("Zoom In", "essential-blocks"), value: "zoom-in" },
    { label: __("Zoom Out", "essential-blocks"), value: "zoom-out" },
    { label: __("Slide", "essential-blocks"), value: "slide" },
    { label: __("Blur", "essential-blocks"), value: "blur" },
];

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
];

export const SIZE_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const STYLES = [
    { label: __("Rounded", "essential-blocks"), value: "rounded" },
    { label: __("Square", "essential-blocks"), value: "square" },
    { label: __("Circle", "essential-blocks"), value: "circle" },
    { label: __("Octagon", "essential-blocks"), value: "octagon" },
    { label: __("Rhombus", "essential-blocks"), value: "rhombus" },
    { label: __("Triangle", "essential-blocks"), value: "triangle" },
];

export const CAPTION_STYLES = [
    { label: __("Style 1", "essential-blocks"), value: "caption-style-1" },
    { label: __("Style 2", "essential-blocks"), value: "caption-style-2" },
];
export const FIT_STYLES = [
    { label: __("Fill", "essential-blocks"), value: "fill" },
    { label: __("Contain", "essential-blocks"), value: "contain" },
    { label: __("Cover", "essential-blocks"), value: "cover" },
];
