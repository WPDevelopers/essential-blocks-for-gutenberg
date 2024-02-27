import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const CONTENT_POSITION = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const HORIZONTAL_LABEL_POSITION = [
	{ label: __("Top", "essential-blocks"), value: "top" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Bottom", "essential-blocks"), value: "bottom" },
];

export const VERTICAL_LABEL_POSITION = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const IMAGE_WIDTH = "imgWidth";

// dimension control
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const LABEL_PADDING = "lblPadding";
