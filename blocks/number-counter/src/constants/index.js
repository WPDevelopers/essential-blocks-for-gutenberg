import { __ } from "@wordpress/i18n";

export const SEPARATOR_OPTIONS = [
    { label: __("Default", "essential-blocks"), value: "Default" },
    { label: __("Dot", "essential-blocks"), value: "Dot" },
    { label: __("Space", "essential-blocks"), value: "Space" },
];

export const LAYOUT_OPTIONS = [
    { label: __("Default", "essential-blocks"), value: "Default" },
    { label: __("Reverse", "essential-blocks"), value: "Reverse" },
];

export const FONT_WEIGHTS = [
    { label: __("100", "essential-blocks"), value: "100" },
    { label: __("200", "essential-blocks"), value: "200" },
    { label: __("300", "essential-blocks"), value: "300" },
    { label: __("400", "essential-blocks"), value: "400" },
    { label: __("500", "essential-blocks"), value: "500" },
    { label: __("600", "essential-blocks"), value: "600" },
    { label: __("700", "essential-blocks"), value: "700" },
    { label: __("800", "essential-blocks"), value: "800" },
    { label: __("900", "essential-blocks"), value: "900" },
];

export const TEXT_TRANSFORM = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Lowercase", "essential-blocks"), value: "lowercase" },
    { label: __("Capitalize", "essential-blocks"), value: "capitalize" },
    { label: __("Uppercase", "essential-blocks"), value: "uppercase" },
];

export const TEXT_DECORATION = [
    { label: __("Initial", "essential-blocks"), value: "initial" },
    { label: __("Overline", "essential-blocks"), value: "overline" },
    { label: __("Line Through", "essential-blocks"), value: "line-through" },
    { label: __("Underline", "essential-blocks"), value: "underline" },
    {
        label: __("Underline Oveline", "essential-blocks"),
        value: "underline overline",
    },
];

export const FONT_SIZE_UNITS = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "%", value: "%" },
];

export const LETTER_SPACING_LINE_HEIGHT_UNITS = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
];

export const BACKGROUND_TYPES = [
    { label: __("Fill", "essential-blocks"), value: "fill" },
    { label: __("Gradient", "essential-blocks"), value: "gradient" },
    { label: __("Image", "essential-blocks"), value: "image" },
];

export const BACKGROUND_SIZES = [
    { label: __("Auto", "essential-blocks"), value: "auto" },
    { label: __("Cover", "essential-blocks"), value: "cover" },
    { label: __("Contain", "essential-blocks"), value: "contain" },
];

export const BORDER_STYLES = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Dashed", "essential-blocks"), value: "dashed" },
    { label: __("Solid", "essential-blocks"), value: "solid" },
    { label: __("Dotted", "essential-blocks"), value: "dotted" },
    { label: __("Double", "essential-blocks"), value: "double" },
    { label: __("Groove", "essential-blocks"), value: "groove" },
    { label: __("Inset", "essential-blocks"), value: "inset" },
    { label: __("Outset", "essential-blocks"), value: "outset" },
    { label: __("Ridge", "essential-blocks"), value: "ridge" },
];

export const SHADOW_HOVER_OPTIONS = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

//
//
//
//
export const LAYOUT_TYPES = [
    { label: __("Preset 1", "essential-blocks"), value: "preset1" },
    { label: __("Preset 2", "essential-blocks"), value: "preset2" },
    { label: __("Preset 3", "essential-blocks"), value: "preset3" },
    { label: __("Preset 4", "essential-blocks"), value: "preset4" },
];

export const MEDIA_TYPES = ["image", "icon", "none"];

export const CONTENTS_ALIGNMENTS = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Right", "essential-blocks"), value: "right" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [
    { label: __("Left", "essential-blocks"), value: "flex-start" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Right", "essential-blocks"), value: "flex-end" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_ROW = [
    { label: __("Top", "essential-blocks"), value: "flex-start" },
    { label: __("Middle", "essential-blocks"), value: "center" },
    { label: __("Bottom", "essential-blocks"), value: "flex-end" },
];

export const CONTENTS_ALIGNMENTS_ON_FLEX_ROW = [
    { label: __("Top", "essential-blocks"), value: "start" },
    { label: __("Middle", "essential-blocks"), value: "center" },
    { label: __("Bottom", "essential-blocks"), value: "end" },
];

export const ICON_IMAGE_BG_TYPES = [
    { label: "Fill", value: "fill" },
    { label: "Gradient", value: "gradient" },
];

export const sizeUnitTypes = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const imgHeightUnits = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "vh", value: "vh" },
];

export const HEADER_TAGS = [
    { label: __("H1", "essential-blocks"), value: "h1" },
    { label: __("H2", "essential-blocks"), value: "h2" },
    { label: __("H3", "essential-blocks"), value: "h3" },
    { label: __("H4", "essential-blocks"), value: "h4" },
    { label: __("H5", "essential-blocks"), value: "h5" },
    { label: __("H6", "essential-blocks"), value: "h6" },
    { label: __("P", "essential-blocks"), value: "p" },
];
