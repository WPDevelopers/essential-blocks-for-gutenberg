import { __ } from "@wordpress/i18n";

export const HEADERS = [
    { label: "H1", value: 1 },
    { label: "H2", value: 2 },
    { label: "H3", value: 3 },
    { label: "H4", value: 4 },
    { label: "H5", value: 5 },
    { label: "H6", value: 6 },
];

export const ALIGNS = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Right", "essential-blocks"), value: "right" },
];

export const TEXT_TRANSFORM = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Lowercase", "essential-blocks"), value: "lowercase" },
    { label: __("Capitalize", "essential-blocks"), value: "capitalize" },
    { label: __("Uppercase", "essential-blocks"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
    { label: __("Lighter", "essential-blocks"), value: "lighter" },
    { label: __("Normal", "essential-blocks"), value: "normal" },
    { label: __("Bold", "essential-blocks"), value: "bold" },
    { label: __("Bolder", "essential-blocks"), value: "bolder" },
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

export const LAYOUT_TYPES = [
    { label: __("Preset 1", "essential-blocks"), value: "preset1" },
    { label: __("Preset 2", "essential-blocks"), value: "preset2" },
    { label: __("Preset 3", "essential-blocks"), value: "preset3" },
    { label: __("Preset 4", "essential-blocks"), value: "preset4" },
];

export const MEDIA_TYPES = ["image", "icon", "number", "none"];

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

export const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

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

export const SHADOW_HOVER_OPTIONS = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

export const LETTER_SPACING_LINE_HEIGHT_UNITS = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
];

export const HOVER_EFFECT = [
    { label: __("Select Hover Effect", "essential-blocks"), value: "" },
    { label: __("Grow", "essential-blocks"), value: "hvr-grow" },
    { label: __("Shrink", "essential-blocks"), value: "hvr-shrink" },
    { label: __("Pulse", "essential-blocks"), value: "hvr-pulse" },
    { label: __("Pulse Grow", "essential-blocks"), value: "hvr-pulse-grow" },
    { label: __("Pulse Shrink", "essential-blocks"), value: "hvr-pulse-shrink" },
    { label: __("Push", "essential-blocks"), value: "hvr-push" },
    { label: __("Pop", "essential-blocks"), value: "hvr-pop" },
    { label: __("Bounce In", "essential-blocks"), value: "hvr-bounce-in" },
    { label: __("Bounce Out", "essential-blocks"), value: "hvr-bounce-out" },
    { label: __("Rotate", "essential-blocks"), value: "hvr-rotate" },
    { label: __("Grow Rotate", "essential-blocks"), value: "hvr-grow-rotate" },
    { label: __("Float", "essential-blocks"), value: "hvr-float" },
    { label: __("Sink", "essential-blocks"), value: "hvr-sink" },
    { label: __("Bob", "essential-blocks"), value: "hvr-bob" },
    { label: __("Hang", "essential-blocks"), value: "hvr-hang" },
    { label: __("Skew", "essential-blocks"), value: "hvr-skew" },
    { label: __("Skew Forward", "essential-blocks"), value: "hvr-skew-forward" },
    {
        label: __("Skew Backward", "essential-blocks"),
        value: "hvr-skew-backward",
    },
    {
        label: __("Wobble Horizontal", "essential-blocks"),
        value: "hvr-wobble-horizontal",
    },
    {
        label: __("Wobble Vertical", "essential-blocks"),
        value: "hvr-wobble-vertical",
    },
    {
        label: __("Wobble To Bottom Right", "essential-blocks"),
        value: "hvr-wobble-to-bottom-right",
    },
    {
        label: __("Wobble To Top Right", "essential-blocks"),
        value: "hvr-wobble-to-top-right",
    },
    { label: __("Wobble Top", "essential-blocks"), value: "hvr-wobble-top" },
    {
        label: __("Wobble Bottom", "essential-blocks"),
        value: "hvr-wobble-bottom",
    },
    { label: __("Wobble Skew", "essential-blocks"), value: "hvr-wobble-skew" },
    { label: __("Buzz", "essential-blocks"), value: "hvr-buzz" },
    { label: __("Buzz Out", "essential-blocks"), value: "hvr-buzz-out" },
    { label: __("Forward", "essential-blocks"), value: "hvr-forward" },
    { label: __("Fade", "essential-blocks"), value: "hvr-fade" },
    { label: __("Back Pulse", "essential-blocks"), value: "hvr-back-pulse" },
    {
        label: __("Sweep To Right", "essential-blocks"),
        value: "hvr-sweep-to-right",
    },
    {
        label: __("Sweep To Left", "essential-blocks"),
        value: "hvr-sweep-to-left",
    },
    {
        label: __("Sweep To Bottom", "essential-blocks"),
        value: "hvr-sweep-to-bottom",
    },
    { label: __("Sweep To Top", "essential-blocks"), value: "hvr-sweep-to-top" },
    {
        label: __("Bounce To Right", "essential-blocks"),
        value: "hvr-bounce-to-right",
    },
    {
        label: __("Bounce To Left", "essential-blocks"),
        value: "hvr-bounce-to-left",
    },
    {
        label: __("Bounce To Bottom", "essential-blocks"),
        value: "hvr-bounce-to-bottom",
    },
    {
        label: __("Bounce To Top", "essential-blocks"),
        value: "hvr-bounce-to-top",
    },
    { label: __("Radial Out", "essential-blocks"), value: "hvr-radial-out" },
    { label: __("Radial In", "essential-blocks"), value: "hvr-radial-in" },
    { label: __("Rectangle In", "essential-blocks"), value: "hvr-rectangle-in" },
    {
        label: __("Rectangle Out", "essential-blocks"),
        value: "hvr-rectangle-out",
    },
    {
        label: __("Shutter In Horizontal", "essential-blocks"),
        value: "hvr-shutter-in-horizontal",
    },
    {
        label: __("Shutter Out Horizontal", "essential-blocks"),
        value: "hvr-shutter-out-horizontal",
    },
    {
        label: __("Shutter In Vertical", "essential-blocks"),
        value: "hvr-shutter-in-vertical",
    },
    {
        label: __("Shutter Out Vertical", "essential-blocks"),
        value: "hvr-shutter-out-vertical",
    },
    {
        label: __("Curl Top Left", "essential-blocks"),
        value: "hvr-curl-top-left",
    },
    {
        label: __("Curl Top Right", "essential-blocks"),
        value: "hvr-curl-top-right",
    },
    {
        label: __("Curl Bottom Right", "essential-blocks"),
        value: "hvr-curl-bottom-right",
    },
    {
        label: __("Curl Bottom Left", "essential-blocks"),
        value: "hvr-curl-bottom-left",
    },
];

export const SCROLL_OPTIONS = [
    {
        label: __("Scroll to the top of page", "essential-blocks"),
        value: "scroll_to_page",
    },
    {
        label: __("Scroll to the TOC", "essential-blocks"),
        value: "scroll_to_toc",
    },
];

export const STICKY_POSITION = [
    {
        label: __("Left", "essential-blocks"),
        value: "left",
    },
    {
        label: __("Right", "essential-blocks"),
        value: "right",
    },
];
export const PRESET = [
    {
        label: __("Style 1", "essential-blocks"),
        value: "style-1",
    },
    {
        label: __("Style 2", "essential-blocks"),
        value: "style-2",
    },
];
