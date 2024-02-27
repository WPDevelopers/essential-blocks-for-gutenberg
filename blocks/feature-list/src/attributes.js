import * as typoPrefixs from "./constants/typographyPrefixConstants";
// import {
// 	generateTypographyAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../util/helpers";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
} = window.EBControls;

import {
    connectorWidth,
    listSpace,
    rowSpace,
    iconBackgroundType,
    iconBackgroundSize,
    iconPadding,
    iconSize,
    iconSpace,
    titleSpace,
    iconBorder,
    wrapperMargin,
    wrapperPadding,
    boxPadding,
    boxBackgroundType,
    boxBorder,
    wrapperBorder,
    wrapperBackgroundType,
} from "./constants";

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
    featureListAlign: {
        type: "string",
    },
    features: {
        type: "array",
        source: "query",
        selector: ".eb-feature-list-wrapper .eb-feature-list-items li",
        query: {
            title: {
                type: "string",
                source: "text",
                selector: ".eb-feature-list-title",
            },
            iconType: {
                type: "string",
                source: "attribute",
                attribute: "data-icon-type",
            },
            featureImageId: {
                type: "string",
                source: "attribute",
                attribute: "data-image-id",
            },
            featureImage: {
                type: "string",
                source: "attribute",
                attribute: "data-image",
            },
            featureImageAlt: {
                type: "string",
                source: "attribute",
                attribute: "data-alt",
            },
            featureImageTitle: {
                type: "string",
                source: "attribute",
                attribute: "data-title",
            },
            icon: {
                type: "string",
                source: "attribute",
                attribute: "data-icon",
            },
            iconColor: {
                type: "string",
                source: "attribute",
                attribute: "data-icon-color",
            },
            iconBackgroundColor: {
                type: "string",
                source: "attribute",
                attribute: "data-icon-background-color",
            },
            content: {
                type: "string",
                source: "text",
                selector: ".eb-feature-list-content",
            },
            link: {
                type: "string",
                source: "attribute",
                attribute: "data-link",
            },
            linkOpenNewTab: {
                type: "string",
                source: "attribute",
                attribute: "data-new-tab",
            },
        },
        default: [],
    },
    iconGlobalColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    titleTag: {
        type: "string",
        default: "h3",
    },
    iconShape: {
        type: "string",
        default: "circle",
    },
    shapeView: {
        type: "string",
        default: "stacked",
    },
    iconPosition: {
        type: "string",
        default: "left",
    },
    titleTextColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    titleTextHoverColor: {
        type: "string",
        default: "var(--eb-global-link-color)",
    },
    descTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    showContentVertical: {
        type: "boolean",
        default: false,
    },
    showConnector: {
        type: "boolean",
        default: false,
    },
    connectorStyle: {
        type: "string",
        default: "style-1",
    },
    connectorType: {
        type: "string",
        default: "solid",
    },
    connectorColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    useInlineDesign: {
        type: "boolean",
        default: false,
    },
    ...generateResponsiveRangeAttributes(connectorWidth, {
        defaultRange: 2,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(listSpace, {
        defaultRange: 20,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(rowSpace, {
        defaultRange: 10,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(iconBackgroundSize, {
        defaultRange: 60,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(iconSize, {
        defaultRange: 21,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(iconSpace, {
        defaultRange: 20,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(titleSpace, {
        defaultRange: 5,
        noUnits: true,
    }),
    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),
    // background attributes
    ...generateBackgroundAttributes(iconBackgroundType, {
        defaultFillColor: "var(--eb-global-primary-color)",
        noOverlay: true,
        noMainBgi: true,
    }),
    ...generateBackgroundAttributes(boxBackgroundType, {
        noOverlay: true,
        noMainBgi: true,
    }),
    ...generateBackgroundAttributes(wrapperBackgroundType),
    // Dimension attributes
    ...generateDimensionsAttributes(iconPadding, {
        top: 15,
        right: 15,
        bottom: 15,
        left: 15,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(boxPadding),
    ...generateDimensionsAttributes(wrapperMargin, {
        top: 28,
        right: 0,
        bottom: 28,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(wrapperPadding, {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        isLinked: true,
    }),
    // border
    ...generateBorderShadowAttributes(iconBorder, {
        bdrDefaults: {
            top: 2,
            right: 2,
            bottom: 2,
            left: 2,
        },
        noShadow: true,
        defaultBdrColor: "#6e2d8d",
        defaultBdrStyle: "solid",
    }),
    ...generateBorderShadowAttributes(boxBorder),
    ...generateBorderShadowAttributes(wrapperBorder),
};

export default attributes;
