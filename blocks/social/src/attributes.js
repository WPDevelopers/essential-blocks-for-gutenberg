import {
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
} from "./constants/dimensionsConstants";

import { WrpBgConst } from "./constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    prefixSocialBdShadow,
} from "./constants/borderShadowConstants";

import {
    wrapperWidth,
    rangeIconSize,
    rangeIconPadding,
    rangeIconDistance,
    rangeIconRowGap,
    sclDeviderPosRight,
} from "./constants/rangeNames";

// import {
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

const {
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
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

    //
    textShadowColor: {
        type: "string",
    },
    textHOffset: {
        type: "number",
    },
    textVOffset: {
        type: "number",
    },
    blurRadius: {
        type: "number",
    },
    showLinkNewTab: {
        type: "boolean",
        default: true,
    },

    // Responsive Range Controller attributes

    ...generateResponsiveRangeAttributes(rangeIconSize, {
        defaultRange: 35,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconPadding, {
        defaultRange: 1,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconDistance, {
        defaultRange: 20,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconRowGap, {
        // defaultRange: 10,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(wrapperWidth, {
        defaultUnit: "%",
        defaultRange: 100,
    }),

    ...generateResponsiveRangeAttributes(sclDeviderPosRight, {
        defaultRange: 23,
    }),

    // boxs background attributes ⬇
    ...generateBackgroundAttributes(WrpBgConst, {
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),

    // ...generateBackgroundAttributes(cdBoxsBgConst, {
    // 	// defaultFillColor: "#7967ff",
    // 	isBgDefaultGradient: true,
    // 	noOverlay: true,
    // 	noMainBgi: true,
    // 	defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
    // 	// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    // }),

    // boxs BorderShadow attributes ⬇
    ...generateBorderShadowAttributes(WrpBdShadowConst, {
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(prefixSocialBdShadow, {
        // noShadow: true,
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        // noBorder: true,
    }),
    // ...generateBorderShadowAttributes(cdBoxsBdShadowConst, {
    // 	// bdrDefaults: {
    // 	// 	top: 0,
    // 	// 	bottom: 0,
    // 	// 	right: 0,
    // 	// 	left: 0,
    // 	// },
    // 	rdsDefaults: {
    // 		top: 10,
    // 		bottom: 10,
    // 		right: 10,
    // 		left: 10,
    // 	},
    // 	// noShadow: true,
    // 	// noBorder: true,
    // }),

    // dimensions Control related Attributes

    ...generateDimensionsAttributes(tmbWrapMarginConst),
    ...generateDimensionsAttributes(tmbWrapPaddingConst, {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        // isLinked: false,
    }),
};

export default attributes;
