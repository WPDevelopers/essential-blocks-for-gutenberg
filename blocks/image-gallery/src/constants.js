import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const GRID_COLUMNS = "columns";
export const IMAGE_GAP = "imageGap";
export const IMAGE_BORDER_SHADOW = "imgBorderShadow";
export const CAPTION_MARGIN = "captionMargin";
export const CAPTION_PADDING = "captionPadding";
export const CAPTION_TYPOGRAPHY = "captionTypo";
export const CAPTION_WIDTH = "captionWidth";
export const IMAGE_WIDTH = "imageWidth";
export const IMAGE_HEIGHT = "imageHeight";
export const IMAGE_MAX_WIDTH = "imageMaxWidth";
export const IMAGE_MAX_HEIGHT = "imageMaxHeight";

export const FILTER_MARGIN = "filterMargin";
export const FILTER_PADDING = "filterPadding";
export const FILTER_BORDER_SHADOW = "filterBorderShadow";

export const LOADMORE_PADDING = "loadmorePadding";
export const LOADMORE_BORDER = "loadmoreBorderShadow";


export const VERTICAL_ALIGN = [
	{ label: __("Top", "essential-blocks"), value: "top" },
	{ label: __("Middle", "essential-blocks"), value: "middle" },
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

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];

export const IMAGE_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "%", value: "%" },
];

export const LAYOUTS = [
	{ label: __("Grid Layout", "essential-blocks"), value: "grid" },
	{ label: __("Masonry Layout", "essential-blocks"), value: "masonry" },
];

export const IMAGE_SIZE_TYPE = [
	{ label: __("Fixed", "essential-blocks"), value: "fixed" },
	{ label: __("Adaptive", "essential-blocks"), value: "adaptive" },
];

export const STYLES = [
	{ label: __("None", "essential-blocks"), value: "0" },
	{ label: __("Black & White"), value: "1" },
	{ label: __("Color Overlay", "essential-blocks"), value: "2" },
];

export const OVERLAY_STYLES = [
	{ label: __("From Top", "essential-blocks"), value: "overlay-top" },
	{ label: __("From Bottom", "essential-blocks"), value: "overlay-bottom" },
	{ label: __("From Left", "essential-blocks"), value: "overlay-left" },
	{ label: __("From Right", "essential-blocks"), value: "overlay-right" },
	{ label: __("Zoom In Out", "essential-blocks"), value: "zoom" },
];

export const FLEX_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" },
];


export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
	{ label: "Active", value: "active" },
];
