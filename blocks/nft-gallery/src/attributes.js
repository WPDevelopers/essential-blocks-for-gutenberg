import * as prefixObjs from "./constants/typographyPrefixConstants";
import {
    dimensionsMargin,
    dimensionsPadding,
    wrapBg,
    wrpBdShadow,
    rowNumber,
    columnGap,
    rowGap,
    imageMargin,
    imageRadius,
    imageHeight,
    imageWidth,
    titleMargin,
    creatorMargin,
    creatorImageHeight,
    creatorImageWidth,
    creatorImageBorder,
    priceMargin,
    buttonMargin,
    buttonPadding,
    buttonBdrSdw,
    itemBg,
    itemBdrSdw,
    itemPadding,
} from "./constants/constants";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
} = window.EBControls;

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
    source: {
        type: "string",
        default: "opensea",
    },
    settings: {
        type: "object",
    },
    layout: {
        type: "string",
        default: "grid",
    },
    displayImage: {
        type: "boolean",
        default: true,
    },
    displayTitle: {
        type: "boolean",
        default: true,
    },
    displayCreator: {
        type: "boolean",
        default: true,
    },
    displayOwner: {
        type: "boolean",
        default: false,
    },
    displayPrice: {
        type: "boolean",
        default: true,
    },
    displayLastSale: {
        type: "boolean",
        default: false,
    },
    displayButton: {
        type: "boolean",
        default: true,
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    ownerTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    ownerLinkColor: {
        type: "string",
        default: "var(--eb-global-link-color)",
    },
    showOwnerImage: {
        type: "boolean",
        default: true,
    },
    showOwnerText: {
        type: "boolean",
        default: true,
    },
    creatorLabel: {
        type: "string",
        default: "Created by",
    },
    ownerLabel: {
        type: "string",
        default: "Owned by",
    },
    priceColor: {
        type: "string",
        default: "#333333",
    },
    buttonTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonBgColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    buttonHoverTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonHoverBgColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    buttonText: {
        type: "string",
        default: "See Details",
    },
    gridPreset: {
        type: "string",
        default: "preset-1",
    },
    listPreset: {
        type: "string",
        default: "preset-1",
    },
    gridOverlayBg: {
        type: "string",
        default: "#edecf6e6",
    },
    listHorizontalAlignment: {
        type: "string",
        default: "flex-start",
    },
    listVerticalAlignment: {
        type: "string",
        default: "flex-start",
    },

    //Number of Rows
    ...generateResponsiveRangeAttributes(rowNumber, {
        defaultRange: 3,
        noUnits: true,
    }),
    //Column Gap
    ...generateResponsiveRangeAttributes(columnGap, {
        defaultRange: 15,
    }),
    //Row Gap
    ...generateResponsiveRangeAttributes(rowGap, {
        defaultRange: 15,
    }),
    //Image Max Height
    ...generateResponsiveRangeAttributes(imageHeight, {
        defaultRange: 300,
    }),
    //Image Max Width
    ...generateResponsiveRangeAttributes(imageWidth, {
        // defaultRange: 100,
        // defaultUnit: "%"
    }),
    //Creator Image Height
    ...generateResponsiveRangeAttributes(creatorImageHeight, {
        defaultRange: 30,
    }),
    //Creator Image Width
    ...generateResponsiveRangeAttributes(creatorImageWidth, {
        defaultRange: 30,
    }),

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(dimensionsMargin),
    ...generateDimensionsAttributes(dimensionsPadding, {
        top: 15,
        bottom: 15,
        right: 15,
        left: 15,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(titleMargin, {
        top: 0,
        bottom: 15,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(imageMargin, {
        top: 0,
        bottom: 15,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(imageRadius, {
        top: 5,
        bottom: 5,
        right: 5,
        left: 5,
        isLinked: true,
    }),
    ...generateDimensionsAttributes(creatorMargin, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(priceMargin, {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(buttonMargin, {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(buttonPadding, {
        top: 15,
        bottom: 15,
        right: 20,
        left: 20,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(creatorImageBorder, {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50,
        isLinked: true,
        defaultUnit: "%",
    }),
    ...generateDimensionsAttributes(itemPadding, {
        top: 15,
        bottom: 15,
        right: 15,
        left: 15,
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
    ...generateBorderShadowAttributes(buttonBdrSdw, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(itemBdrSdw, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 10,
            bottom: 10,
            right: 10,
            left: 10,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(wrapBg, {
        // defaultFillColor: "#f6f6f6",
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
    }),
    ...generateBackgroundAttributes(itemBg, {
        defaultFillColor: "#ffffff",
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
    }),
    cover: {
        type: "string",
        default: "",
    },
};

export default attributes;
