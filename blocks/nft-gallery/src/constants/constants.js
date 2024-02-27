import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const wrapBg = "wrp_";
export const wrpBdShadow = "wrp_";
export const dimensionsMargin = "margin";
export const dimensionsPadding = "padding";
export const rowNumber = "rowNum";
export const columnGap = "colGap";
export const rowGap = "rowGap";
export const imageMargin = "imgMargin";
export const imageRadius = "imgRadius";
export const imageHeight = "imgMaxHeight";
export const imageWidth = "imgMaxWidth";
export const titleMargin = "titleMargin";
export const creatorMargin = "creatorMargin";
export const creatorImageHeight = "creatorImgHeight";
export const creatorImageWidth = "creatorImgWidth";
export const creatorImageBorder = "creatorImgBorder";
export const priceMargin = "priceMargin";
export const buttonMargin = "btnMargin";
export const buttonPadding = "btnPadding";
export const buttonBdrSdw = "btnBdrSdw";
export const itemBg = "itemBg";
export const itemBdrSdw = "itemBdrSdw";
export const itemPadding = "itemPadding";

export const LAYOUT_TYPE = [
	{ label: __("Grid", "essential-blocks"), value: "grid" },
	{ label: __("List", "essential-blocks"), value: "list" },
];

export const GAP_UNIT = [
	{ label: __("PX", "essential-blocks"), value: "px" },
	{ label: __("EM", "essential-blocks"), value: "em" },
	{ label: __("%", "essential-blocks"), value: "%" },
];

export const GRID_PRESET = [
	{ label: __("Preset 1", "essential-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "essential-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "essential-blocks"), value: "preset-3" },
];

export const LIST_PRESET = [
	{ label: __("Preset 1", "essential-blocks"), value: "preset-1" },
];

export const HORIZONTAL_ALIGNMENT = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" }
];

export const VERTICAL_ALIGNMENT = [
	{ label: __("Top", "essential-blocks"), value: "flex-start" },
	{ label: __("Middle", "essential-blocks"), value: "center" },
	{ label: __("Bottom", "essential-blocks"), value: "flex-end" }
];