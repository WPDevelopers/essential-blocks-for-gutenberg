import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    SEPARATOR_MARGIN,
    SEPARATOR_LINE_SIZE,
    SEPARATOR_ICON_SIZE,
    SEPARATOR_WIDTH,
} from "./constants/constants";

const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
} = window.EBControls;

import * as typographyObjs from "./constants/typographyPrefixConstants";

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

    preset: {
        type: "string",
        default: "button-1",
    },
    tagName: {
        type: "string",
        default: "h2",
    },
    titleText: {
        type: "string",
        default: "Essential Blocks Advanced Heading",
    },
    subtitleTagName: {
        type: "string",
        default: "p",
    },
    subtitleText: {
        type: "string",
        default: "Essential Blocks Advance Subtitle",
    },
    topSpace: {
        type: "number",
    },
    topSpaceUnit: {
        type: "string",
        default: "px",
    },
    bottomSpace: {
        type: "number",
    },
    bottomSpaceUnit: {
        type: "string",
        default: "px",
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    titleHoverColor: {
        type: "string",
    },
    subtitleColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    subtitleHoverColor: {
        type: "string",
    },
    separatorColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    separatorHoverColor: {
        type: "string",
    },
    align: {
        type: "string",
        default: "left",
    },
    displaySubtitle: {
        type: "boolean",
        default: false,
    },
    displaySeperator: {
        type: "boolean",
        default: false,
    },
    seperatorPosition: {
        type: "string",
        default: "bottom",
    },
    seperatorType: {
        type: "string",
        default: "line",
    },
    seperatorStyle: {
        type: "string",
        default: "solid",
    },
    separatorIcon: {
        type: "string",
        default: "fas fa-arrow-circle-down"
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(TITLE_MARGIN, {
        top: 0,
        bottom: 15,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(SUBTITLE_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(SEPARATOR_MARGIN, {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        isLinked: false,
    }),

    // border shadow attributes ⬇
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

    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
    }),

    // range controller Separator Line Border Size
    ...generateResponsiveRangeAttributes(SEPARATOR_LINE_SIZE, {
        defaultRange: 4,
    }),
    // range controller Separator Icon Size
    ...generateResponsiveRangeAttributes(SEPARATOR_ICON_SIZE, {
        defaultRange: 30,
    }),
    // range controller Separator Line Width
    ...generateResponsiveRangeAttributes(SEPARATOR_WIDTH, {
        defaultRange: 100,
    }),
};

export default attributes;
