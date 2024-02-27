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
export const READMORE_BORDER_SHADOW = "readMoreBorderShadow";
export const HEADER_META_MARGIN = "headerMetaMargin";
export const FOOTER_META_MARGIN = "footerMetaMargin";
export const HEADER_META_SPACE = "headerMetaSpace";
export const FOOTER_META_SPACE = "footerMetaSpace";
export const AVATAR_BORDER_RADIUS = "avatarBDR";

export const LOADMORE_PADDING = "loadMorePadding";
export const LOADMORE_MARGIN = "loadMoreMargin";
export const LOADMORE_BORDER_SHADOW = "loadMoreBorderShadow";

export const FILTER_MARGIN = "filterMargin";
export const FILTER_ITEM_PADDING = "filterItmPadding";
export const FILTER_ITEM_BORDER_SHADOW = "filterItmBdrShdw";
export const FILTER_ITEM_GAP = "filterItemGap";

export const INPUT_HEIGHT = "inputHeight";
export const INPUT_PADDING = "inputPadding";
export const INPUT_BORDER = "inputBrd";
export const ICON_WIDTH = "iconWidth";
export const SEARCH_RESULT_WIDTH = "searchResultWidth";
export const SEARCH_RESULT_PADDING = "searchResultPadding";
export const SEARCH_RESULT_MARGIN = "searchResultMargin";
export const SEARCH_RESULT_BORDER = "searchResultBrd";
export const SEARCH_CONTENT_PADDING = "searchContentPadding";
export const SEARCH_CONTENT_MARGIN = "searchContentMargin";
export const SEARCH_CONTENT_BORDER = "searchContentBrd";
export const NO_SEARCH_ALIGNMENT = "noSearchAlignment";
export const TAXONOMY_PADDING = "taxonomyPadding";
export const TAXONOMY_BORDER = "taxonomyBorder";
export const ICON_SIZE = "iconSize";
export const ICON_SPACE = "iconSpace";

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
    { label: __("Style 3", "essential-blocks"), value: "style-3" },
    { label: __("Style 4 (List View)"), value: "style-4" }, // Media Left || Content Right Alignment
    { label: __("Style 5 (Content Overlay)"), value: "style-5" }, // Featured Image Background || Content Overlay
    {
        label: __("Style 6 (Pro)", "essential-blocks"),
        value: "pro-style-6",
        isPro: true,
    },
    {
        label: __("Style 7 (Pro)", "essential-blocks"),
        value: "pro-style-7",
        isPro: true,
    },
    {
        label: __("Style 8 (Pro)", "essential-blocks"),
        value: "pro-style-8",
        isPro: true,
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
export const ICON_POSITION = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const PRESET_1_ORDER = ["thumbnail", "title", "headerMeta", "excerpt", "footerMeta"];
export const PRESET_4_ORDER = ["headerMeta", "title", "excerpt", "footerMeta"];
export const PRESET_5_ORDER = ["title", "headerMeta"];
