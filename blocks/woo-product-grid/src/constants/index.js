/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

export const LAYOUT = [
    { label: __("Grid"), value: "grid" },
    { label: __("List"), value: "list" },
];

export const SALE_BADGE_ALIGN = [
    { label: __("Top", "essential-blocks"), value: "align-top" },
    { label: __("Left", "essential-blocks"), value: "align-left" },
    { label: __("Right", "essential-blocks"), value: "align-right" },
];

export const CONTENT_ALIGNMENT = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Right", "essential-blocks"), value: "right" },
];

export const RATING_STYLE = [
    { label: __("Star"), value: "star" },
    { label: __("Number"), value: "number" },
];

// responsive range controll
export const RATING_ICON_SIZE = "ratingIcon";
export const GRID_SPACING = "gridSpace";
export const COLUMNS = "columns";
export const IMG_GAP = "imgGap";
export const IMG_WIDTH = "imgWidth";
export const IMG_HEIGHT = "imgHeight";

// BORDER & SHADOW
export const BTN_BORDER_SHADOW = "btnBorder";
export const SALE_BADGE_BORDER = "saleBorder";
export const IMAGE_BORDER_SHADOW = "imgBorder";

// responsive dimension
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BG = "wrpBackground";
export const CONTENT_PADDING = "contentPadding";
export const IMAGE_PADDING = "imagePadding";
export const TITLE_MARGIN = "titleMargin";
export const PRICE_MARGIN = "priceMargin";
export const RATING_MARGIN = "ratingMargin";
export const BUTTON_MARGIN = "btnMargin";
export const DESC_MARGIN = "descMargin";
export const LOADMORE_PADDING = "loadMorePadding";
export const LOADMORE_MARGIN = "loadMoreMargin";
export const LOADMORE_BORDER_SHADOW = "loadMoreBorderShadow";
// border shadow
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const PRODUCTS_BORDER_SHADOW = "productBorderShadow";
export const SOLD_COUNT_SPACE = "soldMargin";
export const FILTER_ITEM_GAP = "filterItemGap";
export const FILTER_MARGIN = "filterMargin";
export const FILTER_ITEM_PADDING = "filterItmPadding";
export const FILTER_ITEM_BORDER_SHADOW = "filterItmBdrShdw";
export const PROGRESSBAR_HEIGHT = "barHeight";

export const NORMAL_HOVER = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

export const NORMAL_HOVER_ACTIVE = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
    { label: "Active", value: "active" },
];
export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "%", value: "%" },
];

export const CONTENT_LISTS = [
    { label: "", value: "px" },
    { label: "em", value: "em" },
    { label: "%", value: "%" },
];
