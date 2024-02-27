import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const STYLE_PRESETS = [
    { label: __("Default", "essential-blocks"), value: "default" },
    { label: __("Preset 1", "essential-blocks"), value: "preset1" },
    { label: __("Preset 2", "essential-blocks"), value: "preset2" },
    { label: __("Preset 3", "essential-blocks"), value: "preset3" },
    { label: __("Preset 4", "essential-blocks"), value: "preset4" },
    { label: __("Preset 5", "essential-blocks"), value: "preset5" },
    { label: __("Preset 6", "essential-blocks"), value: "preset6" },
    { label: __("Preset 7", "essential-blocks"), value: "preset7" },
    {
        label: __("Preset 8 (Pro)", "essential-blocks"),
        value: "pro-preset8",
        isPro: true,
    },
    {
        label: __("Preset 9 (Pro)", "essential-blocks"),
        value: "pro-preset9",
        isPro: true,
    },
];

export const SEPARATOR_TYPES = [
    { label: __("Dotted", "essential-blocks"), value: ":" },
    { label: __("Solid", "essential-blocks"), value: "|" },
];
export const LAYOUT_TYPES = [
    { label: "Grid View", value: "row" },
    { label: "List View", value: "column" },
];

// export const BG_TYPES = ["fill", "gradient"];
export const ALIGN_ITEMS = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" },
];

export const JUSTIFY_CONTENTS = [
    { label: __("Start", "essential-blocks"), value: "flex-start" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("End", "essential-blocks"), value: "flex-end" },
    { label: __("Space-Between", "essential-blocks"), value: "space-between" },
    { label: __("Space-around", "essential-blocks"), value: "space-around" },
    { label: __("Space-Evenly", "essential-blocks"), value: "space-evenly" },
];

export const FLEX_DIRECTIONS = [
    { label: "Row", value: "row" },
    { label: "Row-Reverse", value: "row-reverse" },
    { label: "Column", value: "column" },
    { label: "Column-Reverse", value: "column-reverse" },
];
