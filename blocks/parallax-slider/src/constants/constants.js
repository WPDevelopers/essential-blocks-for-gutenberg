import { __ } from "@wordpress/i18n";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const TITLE_MARGIN = "titleMargin";
export const BUTTON_MARGIN = "buttonMargin";
export const BUTTON_PADDING = "buttonPadding";
export const BUTTON_BORDER_SHADOW = "buttonBorderShadow";
export const SLIDE_TO_SHOW = "slideToShow";
export const CUSTOM_HEIGHT = "sliderHeight";
export const SLIDES_GAP = "slidesGap";
export const CONTENTS_PADDING = "contentsPadding";
export const SLIDE_BORDER_RADIUS = "slideBorderRadius";

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const HORIZONTAL_ALIGN = [
	{ label: __("Left", "essential-blocks"), value: "flex-start" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "flex-end" },
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

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "vh", value: "vh" },
];

export const GAP_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "%", value: "%" },
];

export const COLORS = [
    { name: 'Black', color: '#000000' },
    { name: 'Cyan bluish gray', color: '#abb8c3' },
    { name: 'White', color: '#ffffff' },
    { name: 'Pale pink', color: '#ffc0cb' },
    { name: 'Vivid red', color: '#cf2e2e' },
    { name: 'Luminous vivid orange', color: '#ff6900' },
    { name: 'Luminous vivid amber', color: '#fcb900' },
    { name: 'Light green cyan', color: '#7bdcb5' },
    { name: 'Vivid green cyan', color: '#00d084' },
    { name: 'Pale cyan blue', color: '#8ed1fc' },
    { name: 'Vivid cyan blue', color: '#3593e3' },
    { name: 'Vivid purple', color: '#9b51e0' },
];