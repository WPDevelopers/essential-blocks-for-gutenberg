import { WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_BORDER_SHADOW, WRAPPER_BG, SHAPE_DIVIDER } from "./constants";

const {
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateShapeDividerAttributes,
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

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),

    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        noOverlay: true,
    }),
    // shape divider
    ...generateShapeDividerAttributes(SHAPE_DIVIDER, {
        dividerType: "style_1",
        defaultColor: "var(--eb-global-primary-color)",
    }),
    shapeDividerPosition: {
        type: "string",
        default: "top",
    },
};

export default attributes;
