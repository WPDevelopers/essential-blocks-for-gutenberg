import * as prefixObjs from "./constants/typographyPrefixConstants";
import {
    dimensionsMargin,
    dimensionsPadding,
} from "./constants/dimensionsNames";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../util/helpers";

const {
    //
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveAlignAttributes,
} = window.EBControls;

import { wrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";
import { NOTICE_ALIGNMENT } from "./constants";

const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
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

    dismissible: {
        type: "boolean",
        default: false,
    },
    noticeType: {
        type: "string",
        default: "default",
    },
    titleFontSize: {
        type: "number",
    },
    textFontSize: {
        type: "number",
    },
    title: {
        type: "string",
        source: "text",
        selector: ".eb-notice-title",
        default: "Save 20%",
    },
    text: {
        type: "string",
        source: "text",
        selector: ".eb-notice-text",
        default: "Free shipping on all orders",
    },
    backgroundColor: {
        type: "string",
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    textColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    noticeId: {
        type: "string",
    },
    showAfterDismiss: {
        type: "boolean",
        default: false,
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(dimensionsMargin),
    ...generateDimensionsAttributes(dimensionsPadding, {
        top: 65,
        bottom: 65,
        right: 60,
        left: 60,
        isLinked: false,
    }),

    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(wrpBdShadow, {
        // bdrDefaults: {
        // 	top: 0,
        // 	bottom: 0,
        // 	right: 0,
        // 	left: 0,
        // },
        // rdsDefaults: {
        // 	top: 0,
        // 	bottom: 50,
        // 	right: 500,
        // 	left: 1000,
        // },
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(wrapBg, {
        defaultFillColor: "var(--eb-global-background-color)",
        defaultBgGradient: "var(--eb-gradient-background-color)",
    }),
    ...generateResponsiveAlignAttributes(NOTICE_ALIGNMENT, {
        defaultAlign: "left",
        defaultTabAlign: "left",
        defaultMobileAlign: "left",
    }),
};

export default attributes;
