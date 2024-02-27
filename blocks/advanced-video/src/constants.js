import { __ } from "@wordpress/i18n";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";

export const VIDEO_BORDER_SHADOW = "videoBorderShadow";
export const VIDEO_WIDTH = "width";
export const PLAY_ICON_WIDTH = "playIconWidth";
export const LIGHTBOX_WIDTH = "lightboxWidth";
export const LIGHTBOX_HEIGHT = "lightboxHeight";
export const LIGHTBOX_BORDER_SHADOW = "lightboxBorderShadow";
export const CLOSE_ICON_WIDTH = "closeIconWidth";
export const STICKY_VIDEO_WIDTH = "stickyVideoWidth";
export const STICKY_VIDEO_HEIGHT = "stickyVideoHeight";
export const PLACEHOLDER_IMAGE_WIDTH = "placeholderImageWidth";
export const PLACEHOLDER_IMAGE_HEIGHT = "placeholderImageHeight";
export const PLACEHOLDER_PLAY_ICON_WIDTH = "placeholderPlayIconWidth";
export const stickyVisibility = "stickyVisibility";

export const SOURCE = [
    { label: __("YouTube", "essential-blocks"), value: "youtube" },
    { label: __("Vimeo", "essential-blocks"), value: "vimeo" },
    { label: __("Self Hosted", "essential-blocks"), value: "html5" },
];

export const OPTIONS = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Sticky", "essential-blocks"), value: "eb-sticky" },
    { label: __("Lightbox", "essential-blocks"), value: "lightbox" },
];

export const OVERLAY = [
    { label: __("None", "essential-blocks"), value: "none" },
    { label: __("Custom", "essential-blocks"), value: "custom" },
];

export const STICKY_POSITION = [
    { label: __("Left", "essential-blocks"), value: "left" },
    { label: __("Right", "essential-blocks"), value: "right" },
];

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
];

export const SIZE_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const LIGHTBOX_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "vh", value: "vh" },
];

export const ALIGNMENT = [
    { label: "Left", value: "left" },
    { label: "Center", value: "center" },
    { label: "Right", value: "right" },
];
export const ICON_TYPE = [
    { label: "Image", value: "image" },
    { label: "Icon", value: "icon" },
];

export const STICKY_VISIBILITY = [
    { label: __("Visible", "essential-blocks"), value: "visible" },
    { label: __("Hidden", "essential-blocks"), value: "hidden" },
];
