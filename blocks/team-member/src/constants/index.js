import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const sizeUnitTypes = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const IconsHzAligns = [
    { label: "Center", value: "center" },
    { label: "Left", value: "flex-start" },
    { label: "Right", value: "flex-end" },
    { label: "Space Between", value: "space-between" },
    { label: "Space Around", value: "space-around" },
    { label: "Space Evenly", value: "space-evenly" },
];

export const ContentsVerticalAligns = [
    { label: "Top", value: "flex-start" },
    { label: "Center", value: "center" },
    { label: "Bottom", value: "flex-end" },
];

export const STYLE_PRESETS = [
    { label: __("Default", "essential-blocks"), value: "default" },
    { label: __("Preset 1", "essential-blocks"), value: "preset1" },
    // { label: __("Preset 2 (hover overlay)"), value: "preset2" }, // this was preset 3
    { label: __("Preset 2  (hover overlay)"), value: "preset3" }, // this was preset 5
    // { label: __("Preset 4 (hover overlay)"), value: "preset4" }, // this was preset 8
    // { label: __("Preset 5", "essential-blocks"), value: "preset5" }, // this was preset 9
    // { label: __("Preset 6", "essential-blocks"), value: "preset6" }, // this was preset 15
    { label: __("Preset 3", "essential-blocks"), value: "new-preset1", isPro: true },
    { label: __("Preset 4", "essential-blocks"), value: "new-preset2", isPro: true },
    { label: __("Preset 5", "essential-blocks"), value: "new-preset3", isPro: true },
];
export const HOVER_ALIGN = [
    { label: __("Left", "essential-blocks"), value: "hover-left" },
    { label: __("Right", "essential-blocks"), value: "hover-right" },

];

export const separatorTypes = [
    { label: __("Solid", "essential-blocks"), value: "solid" },
    { label: __("Dashed", "essential-blocks"), value: "dashed" },
    { label: __("Dotted", "essential-blocks"), value: "dotted" },
    { label: __("Double", "essential-blocks"), value: "double" },
    { label: __("Groove", "essential-blocks"), value: "groove" },
    { label: __("Inset", "essential-blocks"), value: "inset" },
    { label: __("Outset", "essential-blocks"), value: "outset" },
    { label: __("Ridge", "essential-blocks"), value: "ridge" },
];

export const HOVER_EFFECT = [
    { label: __("Select Hover Effect", "essential-blocks"), value: "" },
    { label: __("Grow", "essential-blocks"), value: "hvr-grow" },
    { label: __("Shrink", "essential-blocks"), value: "hvr-shrink" },
    { label: __("Pulse", "essential-blocks"), value: "hvr-pulse" },
    { label: __("Pulse Grow", "essential-blocks"), value: "hvr-pulse-grow" },
    {
        label: __("Pulse Shrink", "essential-blocks"),
        value: "hvr-pulse-shrink",
    },
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
    {
        label: __("Skew Forward", "essential-blocks"),
        value: "hvr-skew-forward",
    },
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
    {
        label: __("Sweep To Top", "essential-blocks"),
        value: "hvr-sweep-to-top",
    },
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
    {
        label: __("Rectangle In", "essential-blocks"),
        value: "hvr-rectangle-in",
    },
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
    { label: __("Icon Back", "essential-blocks"), value: "hvr-icon-back" },
    {
        label: __("Icon Forward", "essential-blocks"),
        value: "hvr-icon-forward",
    },
    { label: __("Icon Down", "essential-blocks"), value: "hvr-icon-down" },
    { label: __("Icon Up", "essential-blocks"), value: "hvr-icon-up" },
    { label: __("Icon Spin", "essential-blocks"), value: "hvr-icon-spin" },
    { label: __("Icon Drop", "essential-blocks"), value: "hvr-icon-drop" },
    { label: __("Icon Fade", "essential-blocks"), value: "hvr-icon-fade" },
    {
        label: __("Icon Float Away", "essential-blocks"),
        value: "hvr-icon-float-away",
    },
    {
        label: __("Icon Sink Away", "essential-blocks"),
        value: "hvr-icon-sink-away",
    },
    {
        label: __("Icon Grow", "essential-blocks"),
        value: "hvr-icon-grow",
    },
    {
        label: __("Icon Shrink", "essential-blocks"),
        value: "hvr-icon-shrink",
    },
    {
        label: __("Icon Pulse", "essential-blocks"),
        value: "hvr-icon-pulse",
    },
    {
        label: __("Icon Pulse Grow", "essential-blocks"),
        value: "hvr-icon-pulse-grow",
    },
    {
        label: __("Icon Pulse Shrink", "essential-blocks"),
        value: "hvr-icon-pulse-shrink",
    },
    {
        label: __("Icon Push", "essential-blocks"),
        value: "hvr-icon-push",
    },
    {
        label: __("Icon Pop", "essential-blocks"),
        value: "hvr-icon-pop",
    },
    {
        label: __("Icon Bounce", "essential-blocks"),
        value: "hvr-icon-bounce",
    },
    {
        label: __("Icon Rotate", "essential-blocks"),
        value: "hvr-icon-rotate",
    },
    {
        label: __("Icon Grow Rotate", "essential-blocks"),
        value: "hvr-icon-grow-rotate",
    },
    {
        label: __("Icon Float", "essential-blocks"),
        value: "hvr-icon-float",
    },
    {
        label: __("Icon Sink", "essential-blocks"),
        value: "hvr-icon-sink",
    },
    {
        label: __("Icon Bob", "essential-blocks"),
        value: "hvr-icon-bob",
    },
    {
        label: __("Icon Hang", "essential-blocks"),
        value: "hvr-icon-hang",
    },
    {
        label: __("Icon Wobble Horizontal", "essential-blocks"),
        value: "hvr-icon-wobble-horizontal",
    },
    {
        label: __("Icon Wobble Vertical", "essential-blocks"),
        value: "hvr-icon-wobble-vertical",
    },
    {
        label: __("Icon Buzz", "essential-blocks"),
        value: "hvr-icon-buzz",
    },
    {
        label: __("Icon Buzz Out", "essential-blocks"),
        value: "hvr-icon-buzz-out",
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
