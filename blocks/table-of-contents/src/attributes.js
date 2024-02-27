import * as typoPrefixs from "./constants/typographyPrefixConstants";

import {
    //
    WrpMarginConst,
    WrpPaddingConst,
    titlePaddingConst,
    contentPaddingConst,
} from "./constants/dimensionsConstants";

// import {
// 	//
// 	WrpBgConst,
// } from "./constants/backgroundsConstants";
import {
    WrpBdShadowConst,
    ItemBdShadow,
    CLOSE_BORDER
} from "./constants/borderShadowConstants";

import {
    // mediaIconSize,
    // mediaImageWidth,
    // mediaImageHeight,
    // mediaContentGap,

    //
    wrapMaxWidthPrefix,
} from "./constants/rangeNames";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	// generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

const {
    //

    generateDimensionsAttributes,
    generateTypographyAttributes,
    // generateBackgroundAttributes,
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
    blockRoot: {
        type: "string",
        default: "essential_block",
    },

    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },
    cover: {
        type: "string",
        default: "",
    },

    //
    headers: {
        type: "array",
        default: [],
    },
    visibleHeaders: {
        type: "array",
        default: Array(6).fill(true),
    },
    deleteHeaderList: {
        type: "array",
        default: [],
    },
    isMigrated: {
        type: "boolean",
        default: false,
    },
    listType: {
        type: "string",
        default: "ul",
    },
    title: {
        type: "string",
        default: "Table of Contents",
    },
    collapsible: {
        type: "boolean",
        default: false,
    },
    initialCollapse: {
        type: "boolean",
        default: false,
    },
    mainBgc: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    titleBg: {
        type: "string",
        default: "",
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    contentBg: {
        type: "string",
        default: "",
    },
    contentColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    contentHoverColor: {
        type: "string",
        default: "var(--eb-global-link-color)",
    },
    contentGap: {
        type: "number",
        default: 10,
    },
    contentGapUnit: {
        type: "string",
        default: "px",
    },
    indent: {
        type: "number",
    },
    displayTitle: {
        type: "boolean",
        default: true,
    },
    titleAlign: {
        type: "string",
        default: "left",
    },
    titleFontFamily: {
        type: "string",
    },
    titleSizeUnit: {
        type: "string",
        default: "px",
    },
    titleFontSize: {
        type: "number",
        default: 22,
    },
    titleFontWeight: {
        type: "string",
        default: "normal",
    },
    titleTextTransform: {
        type: "string",
    },
    titleTextDecoration: {
        type: "string",
    },
    titleLetterSpacing: {
        type: "number",
    },
    titleLetterSpacingUnit: {
        type: "string",
        default: "px",
    },
    titleLineHeight: {
        type: "number",
    },
    titleLineHeightUnit: {
        type: "string",
        default: "px",
    },
    contentFontFamily: {
        type: "string",
    },
    contentSizeUnit: {
        type: "string",
        default: "px",
    },
    contentFontSize: {
        type: "number",
    },
    contentFontWeight: {
        type: "string",
        default: "normal",
    },
    contentTextTransform: {
        type: "string",
    },
    contentLetterSpacing: {
        type: "number",
    },
    contentLetterSpacingUnit: {
        type: "string",
        default: "px",
    },
    contentLineHeight: {
        type: "number",
        default: 1.4,
    },
    isSmooth: {
        type: "boolean",
        default: true,
    },
    seperator: {
        type: "boolean",
        default: false,
    },
    seperatorColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    seperatorSize: {
        type: "number",
    },
    seperatorStyle: {
        type: "string",
        default: "solid",
    },
    borderWidth: {
        type: "number",
    },
    borderColor: {
        type: "string",
        // default: "black",
    },
    borderStyle: {
        type: "string",
        default: "solid",
    },
    titlePaddingTop: {
        type: "number",
        default: 0,
    },
    titlePaddingRight: {
        type: "number",
        default: 0,
    },
    titlePaddingBottom: {
        type: "number",
        default: 0,
    },
    titlePaddingLeft: {
        type: "number",
        default: 10,
    },
    titlePaddingUnit: {
        type: "string",
        default: "px",
    },
    scrollToTop: {
        type: "boolean",
        default: false,
    },
    arrowHeight: {
        type: "number",
    },
    arrowWidth: {
        type: "number",
    },
    arrowBg: {
        type: "string",
    },
    arrowColor: {
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
    shadowColor: {
        type: "string",
        // default: "black",
    },
    contentPaddingTop: {
        type: "number",
        default: 0,
    },
    contentPaddingRight: {
        type: "number",
        default: 0,
    },
    contentPaddingBottom: {
        type: "number",
        default: 0,
    },
    contentPaddingLeft: {
        type: "number",
        default: 0,
    },
    contentPaddingUnit: {
        type: "string",
        default: "px",
    },
    listSeperatorWidth: {
        type: "number",
    },
    listSeperatorStyle: {
        type: "string",
        default: "solid",
    },
    listSeperatorColor: {
        type: "string",
    },
    hasUnderline: {
        type: "boolean",
        default: false,
    },
    topSpace: {
        type: "number",
        default: 25,
    },
    contentHeight: {
        type: "number",
    },
    contentHeightUnit: {
        type: "string",
        default: "px",
    },
    contentWidth: {
        type: "number",
        default: 300,
    },
    contentWidthUnit: {
        type: "string",
        default: "px",
    },
    isSticky: {
        type: "boolean",
        default: false,
    },
    stickyHideOnMobile: {
        type: "boolean",
        default: false,
    },
    zIndex: {
        type: "number",
        default: 999,
    },
    contentAlign: {
        type: "string",
        default: "left",
    },
    containerWidth: {
        type: "number",
        default: 100,
    },
    topOffset: {
        type: "string",
        default: "-50",
    },
    scrollTarget: {
        type: "string",
        default: "scroll_to_toc",
    },
    stickyPosition: {
        type: "string",
        default: "left",
    },
    enableCopyLink: {
        type: "boolean",
        default: false,
    },
    scrollToTopIcon: {
        type: "string",
        default: "fas fa-angle-up",
    },
    listStyle: { type: "string", default: "ul" },

    closeBtnColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    closeBtnHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    closeBtnBgColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    closeBtnBgHvColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    closeIconSize: {
        type: "number",
        default: 12,
    },
    closeBtnSize: {
        type: "number",
        default: 28,
    },
    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),

    //
    ...generateResponsiveRangeAttributes(wrapMaxWidthPrefix, {
        // noUnits: true,
        defaultRange: 610,
    }),

    showListSeparator: {
        type: "boolean",
        default: false,
    },
    enableListStyle: {
        type: "boolean",
        default: false,
    },
    itemCollapsed: {
        type: "boolean",
        default: false,
    },
    preset: {
        type: "string",
        default: "style-1",
    },
    contentItemBg: {
        type: "string",
        default: "#fff",
    },

    // //
    // ...generateBackgroundAttributes(WrpBgConst, {
    // 	defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
    // 	// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    // }),

    //
    ...generateBorderShadowAttributes(WrpBdShadowConst, {
        rdsDefaults: {
            top: 4,
            bottom: 4,
            right: 4,
            left: 4,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(ItemBdShadow, {
        rdsDefaults: {
            top: 4,
            bottom: 4,
            right: 4,
            left: 4,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    //
    ...generateDimensionsAttributes(WrpMarginConst),
    ...generateDimensionsAttributes(WrpPaddingConst, {
        top: 30,
        bottom: 30,
        right: 30,
        left: 30,
        isLinked: true,
    }),
    ...generateDimensionsAttributes(titlePaddingConst, {
        // left: 10,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(contentPaddingConst),
    ...generateBorderShadowAttributes(CLOSE_BORDER),

};

export default attributes;
