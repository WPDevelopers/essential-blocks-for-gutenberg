import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const WRAPPER_MARGIN = "wrpMargin";
export const BUTTONS_MARGIN = "buttonsMargin";
export const BUTTONS_PADDING = "buttonsPadding";
export const BUTTON_ONE_BACKGROUND = "Btn1Bg";
export const BUTTON_TWO_BACKGROUND = "Btn2Bg";
export const BUTTON_ONE_BORDER_SHADOW = "buttonOneBorderShadow";
export const BUTTON_TWO_BORDER_SHADOW = "buttonTwoBorderShadow";
export const BUTTON_ONE_BG = "button1Bg";
export const BUTTON_TWO_BG = "button2Bg";
export const BUTTONS_WIDTH = "buttonsWidth";
export const BUTTONS_GAP = "buttonsGap";
export const BUTTONS_CONNECTOR_SIZE = "buttonsConnectorSize";
export const BUTTONS_CONNECTOR_ICON_SIZE = "buttonsConnectorIconSize";

export const BUTTON_STYLES = [
    { label: __("Fill", "essential-blocks"), value: "fill" },
    { label: __("Outline", "essential-blocks"), value: "outline" },
    { label: __("Text", "essential-blocks"), value: "text" },
];

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
];

export const NORMAL_HOVER = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

export const BUTTON_WIDTH_TYPE = [
    { label: "Custom Width", value: "custom" },
    { label: "Auto", value: "auto" },
];

export const CONNECTOR_TYPE = [
    { label: __("Text", "essential-blocks"), value: "text" },
    { label: __("Icon", "essential-blocks"), value: "icon" },
];

export const PRESETS = [
    { label: __("Preset 1", "essential-blocks"), value: "preset-1" },
    { label: __("Preset 2", "essential-blocks"), value: "preset-2" },
    { label: __("Preset 3", "essential-blocks"), value: "preset-3" },
    { label: __("Preset 4", "essential-blocks"), value: "preset-4" },
];

export const TEXT_ALIGN = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" }
];

export const CONTENT_POSITION = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" }
];
