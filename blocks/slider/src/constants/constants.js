import { __ } from "@wordpress/i18n";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const TITLE_MARGIN = "titleMargin";
export const SUBTITLE_MARGIN = "subtitleMargin";
export const BUTTON_MARGIN = "buttonMargin";
export const BUTTON_PADDING = "buttonPadding";
export const BUTTON_BORDER_SHADOW = "buttonBorderShadow";
export const BUTTON2_MARGIN = "buttonMargin";
export const BUTTON2_PADDING = "buttonPadding";
export const BUTTON2_BORDER_SHADOW = "buttonBorderShadow";
export const SLIDE_TO_SHOW = "slideToShow";
export const CUSTOM_HEIGHT = "sliderHeight";
export const DOTS_GAP = "dotsGap";
export const ARROW_POSITION = "arrowPosition";
export const DOTS_POSITION = "dotsPosition";
export const ARROW_SIZE = "arrowSize";
export const DOTS_SIZE = "dotsSize";
export const SLIDES_GAP = "slidesGap";

export const NORMAL_HOVER = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

export const VERTICAL_ALIGN = [
    { label: __("Top", "essential-blocks"), value: "flex-start" },
    { label: __("Middle", "essential-blocks"), value: "center" },
    { label: __("Bottom", "essential-blocks"), value: "flex-end" },
];

export const TEXT_ALIGN = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Right", "essential-blocks"), value: "right" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Justify", "essential-blocks"), value: "justify" },
];

export const SLIDER_TYPE = [
    { label: __("Image Only", "essential-blocks"), value: "image" },
    { label: __("Image with Content", "essential-blocks"), value: "content" },
];

export const SLIDER_CONTENT_TYPE = [
    { label: __("Content Overlay", "essential-blocks"), value: "content-1" },
    { label: __("Content Bottom", "essential-blocks"), value: "content-2" },
    { label: __("Content Right", "essential-blocks"), value: "content-3" },
    { label: __("Content Left", "essential-blocks"), value: "content-4" },
];

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "vh", value: "vh" },
];

export const HEIGHT_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "vh", value: "vh" },
];

export const FONT_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
];

export const COLORS = [
    { name: "Black", color: "#000000" },
    { name: "Cyan bluish gray", color: "#abb8c3" },
    { name: "White", color: "#ffffff" },
    { name: "Pale pink", color: "#ffc0cb" },
    { name: "Vivid red", color: "#cf2e2e" },
    { name: "Luminous vivid orange", color: "#ff6900" },
    { name: "Luminous vivid amber", color: "#fcb900" },
    { name: "Light green cyan", color: "#7bdcb5" },
    { name: "Vivid green cyan", color: "#00d084" },
    { name: "Pale cyan blue", color: "#8ed1fc" },
    { name: "Vivid cyan blue", color: "#3593e3" },
    { name: "Vivid purple", color: "#9b51e0" },
];

export const DOT_PRESETS = [
    { label: __("Style 1", "essential-blocks"), value: "dot-style-default" },
    {
        label: __("Modern 1", "essential-blocks"),
        value: "eb-dot-style-modern-1",
    },
    {
        label: __("Modern 2", "essential-blocks"),
        value: "eb-dot-style-modern-2",
    },
    {
        label: __("Modern 3", "essential-blocks"),
        value: "eb-dot-style-modern-3",
    },
];

export const TAGS_TYPE = [
    { label: "H1", value: "h1" },
    { label: "H2", value: "h2" },
    { label: "H3", value: "h3" },
    { label: "H4", value: "h4" },
    { label: "H5", value: "h5" },
    { label: "H6", value: "h6" },
    { label: "P", value: "p" },
    { label: "Span", value: "span" },
];
