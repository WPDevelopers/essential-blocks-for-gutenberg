import { __ } from "@wordpress/i18n";

export const SORT_OPTIONS = [
	{ label: __("Most Recent", "essential-blocks"), value: "most_recent" },
	{ label: __("Least Recent", "essential-blocks"), value: "least_recent" },
	// { label: __("Most Liked", "essential-blocks"), value: "most_liked" },
	// { label: __("Least Liked", "essential-blocks"), value: "least_liked" },
	// { label: __("Most Commented", "essential-blocks"), value: "most_commented" },
	// { label: __("Least Commented", "essential-blocks"), value: "least_commented" },
];

export const LAYOUT = [
	{ label: __("Overlay", "essential-blocks"), value: "overlay" },
	{ label: __("Card", "essential-blocks"), value: "card" },
];

export const OVERLAY_STYLE = [
	{ label: __("Simple", "essential-blocks"), value: "overlay__simple" },
	{ label: __("Basic", "essential-blocks"), value: "overlay__basic" },
	{ label: __("Standard", "essential-blocks"), value: "overlay__standard" },
];

export const CARD_STYLE = [
	{ label: __("Content Outter", "essential-blocks"), value: "content_outter" },
	{ label: __("Content Inner", "essential-blocks"), value: "content__inner" },
];

export const NUMBER_OF_COLUMNS = "imgNum";
export const GRID_GAP = "gridGap";
export const IMAGE_BORDER = "imgBrdShd";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
