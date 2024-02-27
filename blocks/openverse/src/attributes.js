import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_BORDER_SHADOW,
    ATTRIBUTION_MARGIN,
    ATTRIBUTION_PADDING,
    ATTRIBUTION_WIDTH,
} from "./constants";
import * as ATTRIBUTION_TYPOGRAPHY from "./typoConstants";

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
    searchQ: {
        type: "string",
        default: "",
    },
    apiKey: {
        type: "string",
    },
    apiInfo: {
        type: "object",
        default: {
            email: "",
            name: "",
        },
    },

    imageurl: {
        type: "string",
    },

    imageAttr: {
        type: "object",
        default: {
            title: "",
            foreignUrl: "",
            creator: "",
            creatorUrl: "",
            license: "",
            licenseUrl: "",
            licenseVersion: "",
        },
    },
    selectedImgIndex: {
        type: "number",
    },
    displayAttribution: {
        type: "boolean",
        default: true,
    },
    attributionColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    attributionBGColor: {
        type: "string",
        default: "",
    },
    horizontalAlign: {
        type: "string",
        default: "center",
    },
    verticalAlign: {
        type: "string",
        default: "bottom",
    },
    imageAlign: {
        type: "string",
        default: "0 auto",
    },
    textAlign: {
        type: "string",
        default: "left",
    },
    hoverEffect: {
        type: "string",
        default: "no-effect",
    },
    stylePreset: {
        type: "string",
        default: "rounded",
    },
    complexStyle: {
        type: "boolean",
        default: false,
    },
    attributionStyle: {
        type: "string",
        default: "attribution-style-1",
    },
    autoFit: {
        type: "boolean",
        default: true,
    },
    enableLink: {
        type: "boolean",
        default: false,
    },
    imageLink: {
        type: "string",
        default: "",
    },
    openInNewTab: {
        type: "boolean",
        default: false,
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(ATTRIBUTION_TYPOGRAPHY)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING, {
        top: 15,
        bottom: 15,
        right: 15,
        left: 15,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(ATTRIBUTION_MARGIN, {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(ATTRIBUTION_PADDING, {
        top: 20,
        bottom: 0,
        right: 10,
        left: 10,
        isLinked: false,
    }),

    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        defaultBdrColor: "var(--eb-global-secondary-color)",
        defaultBdrStyle: "solid",
        rdsDefaults: {
            top: 15,
            bottom: 15,
            right: 15,
            left: 15,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(IMAGE_BORDER_SHADOW, {
        defaultBdrColor: "var(--eb-global-tertiary-color)",
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 15,
            bottom: 15,
            right: 15,
            left: 15,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "var(--eb-gradient-background-color)",
        noOverlay: true,
    }),

    // range controller Separator Line Grid Column
    ...generateResponsiveRangeAttributes(IMAGE_WIDTH, {
        // defaultRange: 300,
    }),
    // range controller Separator Image Gap
    ...generateResponsiveRangeAttributes(IMAGE_HEIGHT, {
        // defaultRange: 300,
    }),
    // range controller Separator Caption Width
    ...generateResponsiveRangeAttributes(ATTRIBUTION_WIDTH),
    cover: {
        type: "string",
        default: "",
    },
};

export default attributes;
