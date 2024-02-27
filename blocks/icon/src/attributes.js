import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    ICON_SIZE,
    ICON_BG,
    BORDER,
    BORDER_WIDTH,
} from "./constants";

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
    iconAlign: {
        type: "string",
        default: "center",
    },
    icon: {
        type: "string",
        default: "far fa-check-circle",
    },
    iconPrimaryColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    iconPrimaryHoverColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    iconSecondaryColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    iconSecondaryHoverColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    iconView: {
        type: "string",
        default: "default",
    },
    iconShape: { type: "string", default: "circle" },
    iconLink: {
        type: "string",
    },
    linkNewTab: {
        type: "boolean",
        default: false,
    },
    linkNoFollow: {
        type: "boolean",
        default: false,
    },
    iconPadding: {
        type: "string",
    },
    iconColorType: {
        type: "string",
        default: "normal",
    },
    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(BORDER, { styleFor: "border-radius" }),
    ...generateDimensionsAttributes(BORDER_WIDTH),

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
    ...generateBackgroundAttributes(ICON_BG, {
        noOverlay: true,
        noMainBgi: true,
    }),
    // range controller Separator Icon Size
    ...generateResponsiveRangeAttributes(ICON_SIZE, {
        defaultRange: 32,
    }),
};

export default attributes;
