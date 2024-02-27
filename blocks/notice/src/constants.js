import { __ } from "@wordpress/i18n";

export const NOTICE_ALIGNMENT = "textAlign";

export const NOTICE_TYPES = [
    { label: __("Default", "essential-blocks"), value: "default" },
    { label: __("Success", "essential-blocks"), value: "success" },
    { label: __("Info", "essential-blocks"), value: "info" },
    { label: __("Warning", "essential-blocks"), value: "warning" },
    { label: __("Danger", "essential-blocks"), value: "danger" },
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

export const FONT_SIZE_UNITS = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "%", value: "%" },
];

export const TEXT_ALIGN = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Right", "essential-blocks"), value: "right" },
    { label: __("Center", "essential-blocks"), value: "center" },
];
