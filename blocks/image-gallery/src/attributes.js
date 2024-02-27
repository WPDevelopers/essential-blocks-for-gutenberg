import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    GRID_COLUMNS,
    IMAGE_GAP,
    IMAGE_BORDER_SHADOW,
    CAPTION_MARGIN,
    CAPTION_PADDING,
    CAPTION_WIDTH,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_MAX_WIDTH,
    IMAGE_MAX_HEIGHT,
    FILTER_PADDING,
    FILTER_MARGIN,
    FILTER_BORDER_SHADOW,
    LOADMORE_PADDING,
    LOADMORE_BORDER,
} from "./constants";
import * as CAPTION_TYPOGRAPHY from "./typoConstants";
import { __ } from "@wordpress/i18n";

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

    images: {
        type: "array",
        default: [],
    },
    sources: {
        type: "array",
        default: [],
    },
    imageSize: {
        type: "string",
    },
    selectedImgIndex: {
        type: "number",
    },
    layouts: {
        type: "string",
        default: "grid",
    },
    displayCaption: {
        type: "boolean",
        default: false,
    },
    captionOnHover: {
        type: "boolean",
        default: false,
    },
    newImage: {
        type: "string",
    },
    captionColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    captionBGColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    overlayColor: {
        type: "string",
        default: "rgba(0 0 0 / 0.7)",
    },
    horizontalAlign: {
        type: "string",
        default: "center",
    },
    verticalAlign: {
        type: "string",
        default: "bottom",
    },
    textAlign: {
        type: "string",
        default: "center",
    },
    styleNumber: {
        type: "string",
        default: "0",
    },
    overlayStyle: {
        type: "string",
        default: "overlay-bottom",
    },
    disableLightBox: {
        type: "boolean",
        default: false,
    },
    addCustomLink: {
        type: "boolean",
        default: false,
    },
    imageSizeType: {
        type: "string",
        default: "fixed",
    },
    imageAlignment: {
        type: "string",
        default: "flex-start",
    },

    enableFilter: {
        type: "boolean",
        default: false,
    },
    filterItems: {
        type: "array",
        default: [
            {
                value: "filter-item-1",
                label: __("Filter Item 1", "essential-blocks"),
            },
        ],
    },
    enableFilterAll: {
        type: "boolean",
        default: true,
    },
    filterAllTitle: {
        type: "string",
        default: "All",
    },
    defaultFilter: {
        type: "string"
    },
    filterColorType: {
        type: "string",
        default: "normal",
    },
    filterColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    filterActColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    filterHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    filterBGColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    filterActBGColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    filterHoverBGColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    select2Options: {
        type: "string",
        default: "",
    },
    enableIsotope: {
        type: "boolean",
        default: false,
    },
    enableLoadMore: {
        type: "boolean",
        default: false,
    },

    loadmoreBtnText: {
        type: "string",
        default: "Load More",
    },
    imagesPerPage: {
        type: "number",
        default: 1,
    },
    loadmoreColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    loadmoreHvColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    loadmoreBGColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(CAPTION_TYPOGRAPHY)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(CAPTION_MARGIN, {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(CAPTION_PADDING, {
        top: 5,
        bottom: 5,
        right: 10,
        left: 10,
        isLinked: false,
    }),

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
    ...generateBorderShadowAttributes(IMAGE_BORDER_SHADOW, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
        noOverlay: true,
    }),

    // range controller Separator Line Grid Column
    ...generateResponsiveRangeAttributes(GRID_COLUMNS, {
        defaultRange: 3,
    }),
    // range controller Separator Image Gap
    ...generateResponsiveRangeAttributes(IMAGE_GAP, {
        defaultRange: 10,
    }),
    // range controller Separator Caption Width
    ...generateResponsiveRangeAttributes(CAPTION_WIDTH),

    //Image Controls
    ...generateResponsiveRangeAttributes(IMAGE_HEIGHT, {
        defaultRange: 300,
    }),
    ...generateResponsiveRangeAttributes(IMAGE_WIDTH, {
        defaultRange: 100,
        defaultUnit: "%",
    }),
    ...generateResponsiveRangeAttributes(IMAGE_MAX_HEIGHT),
    ...generateResponsiveRangeAttributes(IMAGE_MAX_WIDTH, {
        defaultRange: 100,
        defaultUnit: "%",
    }),

    ...generateDimensionsAttributes(FILTER_MARGIN, {
        top: 0,
        bottom: 0,
        right: 5,
        left: 5,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(FILTER_PADDING, {
        top: 5,
        bottom: 5,
        right: 10,
        left: 10,
        isLinked: false,
    }),
    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(FILTER_BORDER_SHADOW, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    ...generateBorderShadowAttributes(LOADMORE_BORDER, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
    }),
    ...generateDimensionsAttributes(LOADMORE_PADDING, {
        top: 14,
        bottom: 14,
        right: 14,
        left: 14,
        isLinked: true,
    }),

};

export default attributes;
