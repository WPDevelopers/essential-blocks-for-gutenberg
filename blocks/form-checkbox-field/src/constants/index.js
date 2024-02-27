// const { __ } = wp.i18n;
import { __ } from "@wordpress/i18n";

export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const LABEL_MARGIN = "labelMargin";
export const CHECKBOX_SIZE = "checkboxSize";
export const CHECKBOX_SPACING = "checkboxSpacing";

export const CONTENTS_ALIGNMENTS = [
    { label: __("Left"), value: "left" },
    { label: __("Center"), value: "center" },
    { label: __("Right"), value: "right" },
];

export const OPTIONS_TYPE = [
    { label: __("Normal"), value: "normal" },
    { label: __("Advanced"), value: "advanced" },
];

export const NORMAL_CHECKED = [
    { label: __("Normal"), value: "normal" },
    { label: __("Checked"), value: "checked" },
];
