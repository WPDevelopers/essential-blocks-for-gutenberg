import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const WRAPPER_BG = "wrpBG";

export const COLUMNS = "columns";
export const COLUMN_GAP = "columnGap";
export const COLUMN_PADDING = "columnPadding";
export const COLUMN_MEDIA_WIDTH = "columnMediaWidth";
export const COLUMN_BG = "columnBG";
export const COLUMN_BORDER_SHADOW = "columnBorderShadow";

export const THUMBNAIL_IMAGE_SIZE = "thumbnailImageSize";
export const THUMBNAIL_BORDER_RADIUS = "thumbnailBDR";
export const THUMBNAIL_MARGIN = "thumbnailMargin";
export const TITLE_MARGIN = "titleMargin";
export const CONTENT_MARGIN = "contentMargin";
export const READMORE_MARGIN = "readmoreMargin";
export const READMORE_PADDING = "readmorePadding";
export const HEADER_META_MARGIN = "headerMetaMargin";
export const FOOTER_META_MARGIN = "footerMetaMargin";
export const HEADER_META_SPACE = "headerMetaSpace";
export const FOOTER_META_SPACE = "footerMetaSpace";
export const AVATAR_BORDER_RADIUS = "avatarBDR";

export const SLIDE_TO_SHOW = "slideToShow";
export const CUSTOM_HEIGHT = "sliderHeight";
export const DOTS_GAP = "dotsGap";
export const ARROW_POSITION = "arrowPosition";
export const DOTS_POSITION = "dotsPosition";
export const ARROW_SIZE = "arrowSize";
export const DOTS_SIZE = "dotsSize";
export const SLIDES_GAP = "slidesGap";

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "%", value: "%" },
];

export const HEIGHT_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "vh", value: "vh" },
];

export const NORMAL_HOVER = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

export const NORMAL_HOVER_ACTIVE = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
    { label: "Active", value: "active" },
];

export const META_POSITION = [
    { label: "Header", value: "header" },
    { label: "Footer", value: "hover" },
    { label: "Under Thumbnail", value: "thumbnail" },
];

export const TITLE_TAGS = [
    { label: "H1", value: "h1" },
    { label: "H2", value: "h2" },
    { label: "H3", value: "h3" },
    { label: "H4", value: "h4" },
    { label: "H5", value: "h5" },
    { label: "H6", value: "h6" },
    { label: "P", value: "p" },
];

export const PRESETS = [
    { label: __("Style 1", "essential-blocks"), value: "style-1" },
    { label: __("Style 2", "essential-blocks"), value: "style-2" },
    { label: __("Style 3 (List View)", "essential-blocks"), value: "style-3" }, // Media Left || Content Right Alignment
    {
        label: __("Style 4 (Content Overlay)", "essential-blocks"),
        value: "style-4",
    }, // Featured Image Background || Content Overlay
    // { label: __("Style 5 (Pro)", "essential-blocks"), value: "pro-style-5", isPro: true },
    // { label: __("Style 6 (Pro)", "essential-blocks"), value: "pro-style-6", isPro: true },
];

export const DOT_PRESETS = [
    { label: __("Style 1", "essential-blocks"), value: "dot-style-1" },
    { label: __("Style 2", "essential-blocks"), value: "dot-style-2" },
    { label: __("Style 3", "essential-blocks"), value: "dot-style-3" },
    { label: __("Style 4", "essential-blocks"), value: "dot-style-4" },
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

export const TEXT_ALIGN = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const CONTENT_POSITION = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" },
];

export const VERTICAL_POSITION = [
    { label: "Top", value: "flex-start" },
    { label: "Middle", value: "center" },
    { label: "Bottom", value: "flex-end" },
];

//slider
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
