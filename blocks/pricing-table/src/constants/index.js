import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const BORDER_STYLES = [
    { label: __("Dashed", "essential-blocks"), value: "dashed" },
    { label: __("Solid", "essential-blocks"), value: "solid" },
    { label: __("Dotted", "essential-blocks"), value: "dotted" },
    { label: __("Double", "essential-blocks"), value: "double" },
    { label: __("Groove", "essential-blocks"), value: "groove" },
    { label: __("Inset", "essential-blocks"), value: "inset" },
    { label: __("Outset", "essential-blocks"), value: "outset" },
    { label: __("Ridge", "essential-blocks"), value: "ridge" },
];

export const TEXT_TRANSFORM = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Lowercase", "essential-blocks"), value: "lowercase" },
    { label: __("Capitalize", "essential-blocks"), value: "capitalize" },
    { label: __("Uppercase", "essential-blocks"), value: "uppercase" },
];

export const FONT_WEIGHT = [
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

export const TWOUNITS = [
    { label: __("px", "essential-blocks"), value: "px" },
    { label: __("%"), value: "%" },
];

export const ALIGNMENT = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const RIBBON_ALIGNMENT_HORIZONTAL = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];
export const RIBBON_ALIGNMENT_VERTICAL = [
    { label: __("Top", "essential-blocks"), value: "top" },
    { label: __("Bottom", "essential-blocks"), value: "bottom" },
];

// Responsive Range Controller
export const buttonIconSpacing = "btnIconSpace";
export const buttonIconSize = "btnIconSize";
export const headerIconSize = "headerIconSize";
export const headerIconWidth = "headerIconWidth";
export const headerIconHeight = "headerIconHeight";
export const featuresIconSize = "featuresIconSize";

// dimension controls
export const buttonPadding = "btnPadding";
export const buttonMargin = "btnMargin";
export const wrapperMargin = "wrapperMargin";
export const wrapperPadding = "wrapperPadding";
export const titlePadding = "titlePadding";
export const titleMargin = "titleMargin";
export const priceCurrencyMargin = "priceCurrencyMargin";
export const salepriceCurrencyMargin = "salepriceCurrencyMargin";

// background controls
export const buttonBackgroundControl = "btnBg";
export const priceTableBackground = "priceTableBg";

// border shadow controller
export const buttonBorderShadow = "btnBrdSdw";
export const wrapperBorderShadow = "wrpBrdSdw";
export const iconBorderShadow = "iconBrdSdw";
export const ribbonBorderShadow = "ribbonBrdSdw";
