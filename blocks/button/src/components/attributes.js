import { __ } from "@wordpress/i18n";

import {
    FIXED_WIDTH,
    BUTTON_PADDING,
    ICON_SIZE,
    ICON_SPACE,
    BUTTON_BACKGROUND,
    BUTTON_BORDER,
    WRAPPER_MARGIN,
} from "./constants";
import * as typoPrefixs from "./typographyContants";

// import {
// 	generateResponsiveRangeAttributes,
// 	generateTypographyAttributes,
// 	generateBorderShadowAttributes,
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// } from "../../../../util/helpers";

const {
    generateResponsiveRangeAttributes,
    generateTypographyAttributes,
    generateBorderShadowAttributes,
    generateDimensionsAttributes,
    generateBackgroundAttributes,
} = window.EBControls;

const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },
    // blockId attribute for making unique className and other uniqueness ⬇
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },
    addIcon: {
        type: "boolean",
        default: false,
    },
    type: {
        type: "string",
        default: "default",
    },
    icon: {
        type: "string",
        default: "fas fa-chevron-right",
    },
    iconPosition: {
        type: "string",
        default: "left",
    },
    iconSize: {
        type: "string",
    },
    iconSpace: {
        type: "string",
        default: "5px",
    },
    buttonText: {
        type: "string",
        default: __("Click Me!", "essential-blocks"),
    },
    textColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonURL: {
        type: "string",
        default: "",
    },
    newWindow: {
        type: "boolean",
        default: false,
    },
    addNofollow: {
        type: "boolean",
        default: false,
    },
    buttonAlign: {
        type: "string",
        default: "center",
    },
    buttonWidth: {
        type: "string",
        default: "auto",
    },
    hoverEffect: {
        type: "string",
    },
    hoverTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    hoverTransition: {
        type: "number",
        default: 0.3,
    },
    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(typoPrefixs)),
    // responsive range control
    ...generateResponsiveRangeAttributes(FIXED_WIDTH),
    ...generateResponsiveRangeAttributes(ICON_SIZE, {
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(ICON_SPACE, {
        defaultRange: 8,
        noUnits: true,
    }),
    // dimension control
    ...generateDimensionsAttributes(BUTTON_PADDING, {
        top: 15,
        right: 30,
        bottom: 15,
        left: 30,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(WRAPPER_MARGIN, {
        top: 28,
        right: 0,
        bottom: 28,
        left: 0,
        isLinked: false,
    }),
    // background Attributes
    ...generateBackgroundAttributes(BUTTON_BACKGROUND, {
        noOverlay: true,
        noMainBgi: true,
        defaultFillColor: "var(--eb-global-button-background-color)",
        defaultHovFillColor: "var(--eb-global-tertiary-color)",
    }),
    // border shadow
    ...generateBorderShadowAttributes(BUTTON_BORDER),
};

export default attributes;
