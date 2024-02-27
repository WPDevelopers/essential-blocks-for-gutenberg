import * as prefixObjs from "./constants/typographyPrefixConstants";
import { dimensionsMargin, dimensionsPadding } from "./constants/dimensionsNames";
import { WrpBdShadow } from "./constants/borderShadowConstants";
import { backgroundWrapper } from "./constants/backgroundsConstants";
// import {
// 	generateTypographyAttributes,
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../util/helpers";

const {
    generateTypographyAttributes,
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
} = window.EBControls;

const attributes = {
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },
    // uniqueIdNumber attribute for making unique className
    uniqueIdNumber: {
        type: "number",
    },
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
    prefix: {
        type: "string",
        source: "text",
        selector: ".eb-typed-prefix",
    },
    typedText: {
        type: "array",
        source: "query",
        selector: ".eb-typed-text",
        query: {
            text: {
                type: "string",
                source: "text",
            },
        },
        default: [],
    },
    suffix: {
        type: "string",
        source: "text",
        selector: ".eb-typed-suffix",
    },
    prefixColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    typedTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    suffixTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    typeSpeed: {
        type: "number",
        default: 50,
    },
    startDelay: {
        type: "number",
        default: 0,
    },
    smartBackspace: {
        type: "boolean",
        default: true,
    },
    backSpeed: {
        type: "number",
        default: 40,
    },
    backDelay: {
        type: "number",
        default: 700,
    },
    fadeOut: {
        type: "boolean",
        default: false,
    },
    fadeOutDelay: {
        type: "number",
        default: 500,
    },
    loop: {
        type: "boolean",
        default: false,
    },
    showCursor: {
        type: "boolean",
        default: true,
    },
    textAlign: {
        type: "string",
        default: "left",
    },
    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),
    // border shadow controller
    ...generateBorderShadowAttributes(WrpBdShadow),
    // margin padding attributes ⬇
    ...generateDimensionsAttributes(dimensionsMargin),
    ...generateDimensionsAttributes(dimensionsPadding),
    // background Attributes
    ...generateBackgroundAttributes(backgroundWrapper, {
        noOverlay: true,
        noMainBgi: true,
    }),
    typedTextFontWeight: {
        type: "string",
        default: 600,
    },
    prefixTextFontWeight: {
        type: "string",
        default: 600,
    },
    suffixTextFontWeight: {
        type: "string",
        default: 600,
    },
};

export default attributes;
