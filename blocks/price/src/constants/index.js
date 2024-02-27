import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";

// price
export const priceCurrencyMargin = "priceCurrencyMargin";
export const salepriceCurrencyMargin = "salepriceCurrencyMargin";

export const ALIGNMENT = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];
export const PRICE_VIEW = [
    { label: __("Inline", "essential-blocks"), value: "inline" },
    { label: __("Stacked", "essential-blocks"), value: "stacked" },
];
