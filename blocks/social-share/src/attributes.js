import {
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
    iconsPadding,
} from "./constants/dimensionsConstants";

import { WrpBgConst } from "./constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    prefixSocialBdShadow,
} from "./constants/borderShadowConstants";

import {
    wrapperWidth,
    rangeIconSize,
    rangeIconDistance,
    rangeIconRowGap,
    sclDeviderPosRight,
    rangeIconMargin,
    rangeIconHeight,
    rangeIconWidth,
    rangeFloatingWidth,
} from "./constants/rangeNames";

import * as typographyObjs from "./constants/typographyPrefixConstants";

const {
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
    generateTypographyAttributes,
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

    //
    blockRoot: {
        type: "string",
        default: "essential_block",
    },

    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },

    //

    socialDetails: {
        type: "array",
        default: [],
    },

    profilesOnly: {
        type: "array",
    },

    iconsJustify: {
        type: "string",
        default: "center",
    },
    iconsVAlign: {
        type: "string",
        default: "center",
    },

    //
    isIconsDevider: {
        type: "boolean",
        default: false,
    },

    icnsDevideColor: {
        type: "string",
    },
    icnSepW: {
        type: "number",
        default: 1,
    },
    icnSepH: {
        type: "number",
        default: 30,
    },

    hvIcnColor: {
        type: "string",
    },
    hvIcnBgc: {
        type: "string",
    },

    //
    icnEffect: {
        type: "string",
    },

    showTitle: {
        type: "boolean",
        default: true,
    },
    iconShape: {
        type: "string",
        default: "rounded",
    },
    isFloating: {
        type: "boolean",
        default: false,
    },
    floatingWidth: {
        type: "string",
    },
    cover: {
        type: "string",
        default: "",
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // Responsive Range Controller attributes

    ...generateResponsiveRangeAttributes(rangeIconSize, {
        defaultRange: 16,
        noUnits: true,
    }),

    ...generateDimensionsAttributes(iconsPadding, {
        top: 10,
        left: 20,
        bottom: 10,
        right: 20,
        isLinked: false,
    }),

    ...generateResponsiveRangeAttributes(rangeIconDistance, {
        defaultRange: 20,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconHeight, {
        defaultRange: 140,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconWidth, {
        defaultRange: 140,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeFloatingWidth, {
        defaultRange: 100,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconMargin, {
        defaultRange: 10,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconRowGap, {
        // defaultRange: 10,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(sclDeviderPosRight, {
        defaultRange: 23,
    }),

    // boxs background attributes ⬇
    ...generateBackgroundAttributes(WrpBgConst, {
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
    }),

    // boxs BorderShadow attributes ⬇
    ...generateBorderShadowAttributes(WrpBdShadowConst),
    ...generateBorderShadowAttributes(prefixSocialBdShadow, {
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
    }),

    // dimensions Control related Attributes

    ...generateDimensionsAttributes(tmbWrapMarginConst),
    ...generateDimensionsAttributes(tmbWrapPaddingConst, {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
    }),
};

export default attributes;
