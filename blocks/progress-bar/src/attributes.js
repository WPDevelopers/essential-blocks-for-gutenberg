import { __ } from "@wordpress/i18n";

import * as typoPrefixs from "./constants/typographyConstants";
import {
    PROGRESSBAR_HEIGHT,
    PROGRESSBAR_WIDTH,
    PROGRESSBAR_SIZE,
    STROKE_WIDTH,
    BOX_HEIGHT,
    BOX_WIDTH,
    WRAPPER_MARGIN,
    TITLE_SPACE,
} from "./constants";

// import {
// 	generateTypographyAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateDimensionsAttributes,
// } from "../../../util/helpers";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
} = window.EBControls;

const attributes = {
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
    // new attributes
    layout: {
        type: "string",
        default: "line",
    },
    wrapperAlign: {
        type: "string",
        default: "center",
    },
    title: {
        type: "string",
        default: __("Progress Bar", "essential-blocks"),
    },
    titleTag: {
        type: "string",
        default: "div",
    },
    progress: {
        type: "number",
        default: 50,
    },
    displayProgress: {
        type: "boolean",
        default: true,
    },
    animationDuration: {
        type: "number",
        default: 1500,
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    counterColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    progressColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    isProgressGradient: {
        type: "boolean",
        default: false,
    },
    progressGradient: {
        type: "string",
    },
    showInline: {
        type: "boolean",
        default: false,
    },
    backgroundColor: {
        type: "string",
    },
    showStripe: {
        type: "boolean",
        default: false,
    },
    stripeAnimation: {
        type: "string",
        default: "none",
    },
    strokeColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    prefix: {
        type: "string",
        default: __("Prefix", "essential-blocks"),
    },
    suffix: {
        type: "string",
        default: __("Postfix", "essential-blocks"),
    },
    prefixColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),
    // range controller
    ...generateResponsiveRangeAttributes(PROGRESSBAR_WIDTH),
    ...generateResponsiveRangeAttributes(PROGRESSBAR_HEIGHT, {
        defaultRange: 12,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(PROGRESSBAR_SIZE, {
        defaultRange: 200,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(STROKE_WIDTH, {
        defaultRange: 12,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(BOX_HEIGHT, {
        defaultRange: 200,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(BOX_WIDTH, {
        defaultRange: 140,
        noUnits: true,
    }),
    ...generateDimensionsAttributes(WRAPPER_MARGIN, {
        top: 0,
        right: 0,
        bottom: 25,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(TITLE_SPACE, {
        isLinked: false,
    }),
    // end new attributes
};

export default attributes;
