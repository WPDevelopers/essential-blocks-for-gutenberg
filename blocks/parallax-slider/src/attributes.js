import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    BUTTON_BORDER_SHADOW,
    CUSTOM_HEIGHT,
    SLIDES_GAP,
    CONTENTS_PADDING,
    SLIDE_BORDER_RADIUS,
} from "./constants/constants";
import * as TYPOGRAPHY from "./constants/typography-constant";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
} = window.EBControls;

const attributes = {
    resOption: {
        type: "string",
        default: "Desktop",
    },

    // blockId attribute for making unique className and other uniqueness
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    blockMeta: {
        type: "object",
    },
    sliderStyle: {
        type: "string",
        default: "style-1",
    },
    sliderData: {
        type: "array",
        default: [],
    },
    intensity: {
        type: "number",
        default: 50,
    },
    startIndex: {
        type: "number",
        default: 1,
    },
    isCustomHeight: {
        type: "boolean",
        default: true,
    },
    current: {
        type: "number",
        default: 1,
    },
    titleColorType: {
        type: "string",
        default: "normal",
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    titleBackgroundColor: {
        type: "string"
    },
    buttonColorType: {
        type: "string",
        default: "normal",
    },
    buttonBackgroundColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    buttonColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonHoverBackgroundColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    buttonHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    horizontalAlign: {
        type: "string",
        default: "center",
    },
    verticalAlign: {
        type: "string",
        default: "center",
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(TYPOGRAPHY)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(TITLE_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(BUTTON_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(BUTTON_PADDING, {
        top: 10,
        bottom: 10,
        right: 30,
        left: 30,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(CONTENTS_PADDING, {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20,
        isLinked: true,
    }),

    // border shadow attributes for Wrapper ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    // border shadow attributes for Button ⬇
    ...generateBorderShadowAttributes(BUTTON_BORDER_SHADOW, {
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes for Wrapper ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
        noOverlay: true,
    }),

    // range controller Slider Height
    ...generateResponsiveRangeAttributes(CUSTOM_HEIGHT, {
        defaultRange: 400,
    }),

    // range controller Slides Gap
    ...generateResponsiveRangeAttributes(SLIDES_GAP, {
        // defaultRange: 0,
    }),

    // range controller Slides Border Radius
    ...generateResponsiveRangeAttributes(SLIDE_BORDER_RADIUS, {
        // defaultRange: 0,
    }),
};

export default attributes;
