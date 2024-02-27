// const { __ } = wp.i18n;
import { __ } from "@wordpress/i18n";

export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";

export const LABEL_MARGIN = "labelMargin";
export const FIELD_BORDER = "fieldBorder";
export const FIELD_PADDING = "fieldPadding";
export const ICON_SIZE = "iconSize";

export const CONTENTS_ALIGNMENTS = [
    { label: __("Left"), value: "left" },
    { label: __("Center"), value: "center" },
    { label: __("Right"), value: "right" },
];

export const OPTIONS_TYPE = [
    { label: __("Normal"), value: "normal" },
    { label: __("Advanced"), value: "advanced" },
];
