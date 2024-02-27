import * as typoPrefixs from "./constants/typographyPrefixConstants";

import { tglWrapMarginConst, tglWrapPaddingConst } from "./constants/dimensionsConstants";

import { rangeButtonWidth, rangeButtonHeight, rangeHeadingSpace } from "./constants/rangeNames";

import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";

// import {
// 	wrapperWidth,
// 	rangeIconSize,
// 	rangeIconPadding,
// 	rangeIconDistance,
// 	rangeIconRowGap,
// 	sclDeviderPosRight,
// } from "./constants/rangeNames";

// import {
// 	generateTypographyAttributes,
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

const {
    //
    generateTypographyAttributes,
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
    id: {
        type: "string",
    },
    initialContent: {
        type: "string",
        default: "primary",
    },
    switchStyle: {
        type: "string",
        default: "rounded",
    },
    // buttonHeight: {
    // 	type: "number",
    // },
    // buttonWidth: {
    // 	type: "number",
    // },
    alignment: {
        type: "string",
        default: "center",
    },
    switchSize: {
        type: "string",
        default: "m",
    },
    switchSizeUnit: {
        type: "string",
        default: "px",
    },
    seperatorType: {
        type: "string",
        default: "none",
    },
    activeColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    // headingSpace: {
    // 	type: "number",
    // },
    // headingSpaceUnit: {
    // 	type: "string",
    // 	default: "px",
    // },
    labelSpace: {
        type: "number",
    },
    labelSpaceUnit: {
        type: "string",
        default: "px",
    },
    backgroundType: {
        type: "string",
        default: "solid",
    },
    backgroundColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    backgroundGradient: {
        type: "string",
        default: "linear-gradient(45deg,#00F260,#0575E6)",
    },
    controllerType: {
        type: "string",
        default: "solid",
    },
    controllerColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    controllerGradient: {
        type: "string",
    },
    borderStyle: {
        type: "string",
    },
    borderWidth: {
        type: "number",
    },
    borderColor: {
        type: "string",
    },
    borderRadius: {
        type: "number",
    },
    primaryLabelText: {
        type: "string",
    },
    secondaryLabelText: {
        type: "string",
    },
    primaryLabelColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    secondaryLabelColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    activeBg: {
        type: "string",
    },
    shadowColor: {
        type: "string",
    },
    hOffset: {
        type: "number",
    },
    vOffset: {
        type: "number",
    },
    blur: {
        type: "number",
    },
    spread: {
        type: "number",
    },
    inset: {
        type: "boolean",
        default: false,
    },

    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),

    //
    ...generateDimensionsAttributes(
        tglWrapMarginConst
        //,
        // {
        // 	top: 15,
        // 	bottom: 20,
        // 	isLinked: false,
        // }
    ),
    ...generateDimensionsAttributes(
        tglWrapPaddingConst
        //,
        // {
        // 	top: 15,
        // 	bottom: 20,
        // 	isLinked: false,
        // }
    ),

    //  BorderShadow attributes  ⬇
    ...generateBorderShadowAttributes(WrpBdShadowConst, {
        // noShadow: true,
        // noBorder: true,
    }),

    //  background attributes ⬇
    ...generateBackgroundAttributes(WrpBgConst, {
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),

    //
    // Responsive Range Controller attributes ⬇
    ...generateResponsiveRangeAttributes(rangeButtonWidth, {
        defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),
    ...generateResponsiveRangeAttributes(rangeButtonHeight, {
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(rangeHeadingSpace, {}),
};

export default attributes;
