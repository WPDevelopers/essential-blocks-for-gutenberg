import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    COLUMNS,
    COLUMN_GAP,
    COLUMN_PADDING,
    COLUMN_BG,
    COLUMN_BORDER_SHADOW,
    THUMBNAIL_IMAGE_SIZE,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_MARGIN,
    TITLE_MARGIN,
    CONTENT_MARGIN,
    READMORE_MARGIN,
    READMORE_PADDING,
    READMORE_BORDER_SHADOW,
    HEADER_META_MARGIN,
    FOOTER_META_MARGIN,
    HEADER_META_SPACE,
    FOOTER_META_SPACE,
    AVATAR_BORDER_RADIUS,
    COLUMN_MEDIA_WIDTH,
    LOADMORE_PADDING,
    LOADMORE_MARGIN,
    LOADMORE_BORDER_SHADOW,
    FILTER_MARGIN,
    FILTER_ITEM_PADDING,
    FILTER_ITEM_BORDER_SHADOW,
    FILTER_ITEM_GAP,
    INPUT_HEIGHT,
    INPUT_PADDING,
    INPUT_BORDER,
    ICON_WIDTH,
    SEARCH_RESULT_WIDTH,
    SEARCH_RESULT_BORDER,
    SEARCH_RESULT_PADDING,
    SEARCH_CONTENT_PADDING,
    SEARCH_CONTENT_MARGIN,
    SEARCH_CONTENT_BORDER,
    NO_SEARCH_ALIGNMENT,
    TAXONOMY_PADDING,
    TAXONOMY_BORDER,
    ICON_SIZE,
    ICON_SPACE,
} from "./constants/constants";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes
// } from "../../../util/helpers";

const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
    generateResponsiveAlignAttributes,
} = window.EBControls;

import * as typographyObjs from "./constants/typographyPrefixConstants";

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
    version: {
        type: "string",
    },
    queryData: {
        type: "object",
    },
    queryResults: {
        type: "array",
    },
    postTerms: {
        type: "object",
        default: {},
    },

    preset: {
        type: "string",
        default: "style-1",
    },
    showThumbnail: {
        type: "boolean",
        default: true,
    },
    thumbnailOverlayColor: {
        type: "string",
        default: "rgba(0 0 0 / 0)",
    },
    thumbnailOverlayHoverColor: {
        type: "string",
        default: "rgba(0 0 0 / 0.5)",
    },
    thumbnailSize: {
        type: "string",
    },
    styleVerticalAlignment: {
        type: "string",
        default: "flex-start",
    },
    showTitle: {
        type: "boolean",
        default: true,
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    titleHoverColor: {
        type: "string",
        default: "var(--eb-global-link-color)",
    },
    titleColorStyle: {
        type: "string",
        default: "normal",
    },
    titleLength: {
        type: "number",
    },
    titleTextAlign: {
        type: "string",
        default: "left",
    },
    titleTag: {
        type: "string",
        default: "h2",
    },
    showContent: {
        type: "boolean",
        default: true,
    },
    contentColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    contentTextAlign: {
        type: "string",
        default: "left",
    },
    contentLength: {
        type: "number",
        default: 20,
    },
    expansionIndicator: {
        type: "string",
        default: "...",
    },
    showReadMore: {
        type: "boolean",
        default: false,
    },
    readmoreText: {
        type: "string",
        default: "Read More",
    },
    readmoreColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    readmoreBGColor: {
        type: "string",
    },
    readmoreTextAlign: {
        type: "string",
        default: "left",
    },
    readmoreHoverColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    readmoreBGHoverColor: {
        type: "string",
    },
    readmoreColorType: {
        type: "string",
        default: "normal",
    },
    showMeta: {
        type: "boolean",
        default: true,
    },
    headerMeta: {
        type: "string",
        default: '[{"value":"category","label":"Categories"}]',
    },
    footerMeta: {
        type: "string",
        default:
            '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"},{"value":"date","label":"Published Date"}]',
    },
    authorPrefix: {
        type: "string",
        default: "by",
    },
    datePrefix: {
        type: "string",
        default: "on",
    },
    headerMetaTextAlign: {
        type: "string",
        default: "left",
    },
    footerMetaTextAlign: {
        type: "string",
        default: "left",
    },
    authorMetaColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    authorMetaHoverColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    metaColorType: {
        type: "string",
        default: "normal",
    },
    commonMetaColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    commonMetaHoverColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    commonMetaBgColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    commonMetaBgHoverColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    categoryMetaColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    categoryMetaHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    categoryMetaBgColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    categoryMetaBgHoverColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    tagMetaColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    tagMetaHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    tagMetaBgColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    tagMetaBgHoverColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    dateMetaColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },

    //Load More Attributes
    loadMoreOptions: {
        type: "object",
    },
    loadMoreColorType: {
        type: "string",
        default: "normal",
    },
    loadMoreColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    loadMoreBgColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    loadMoreHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    loadMoreHoverBgColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    loadMoreActiveColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    loadMoreActiveBgColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    ReadTimeMetaColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    dynamicMetaColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    dynamicMetaBgColor: {
        type: "string",
    },

    //filter
    showTaxonomyFilter: {
        type: "boolean",
        default: false,
    },
    selectedTaxonomy: {
        type: "string",
    },
    selectedTaxonomyItems: {
        type: "string",
        default: '[{"value":"all","label":"All"}]',
    },
    filterColorStyle: {
        type: "stroing",
        default: "normal",
    },
    filterBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    filterTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    filterActiveBgColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    filterActiveTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    filterHoverBgColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    filterHoverTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    showSearch: {
        type: "boolean",
        default: false,
    },
    enableAjaxSearch: {
        type: "boolean",
        default: false,
    },
    searchBgColor: {
        type: "string",
    },
    btnColorType: {
        type: "string",
        default: "normal",
    },
    inputColor: {
        type: "string",
        default: "#666666",
    },
    placeholderColor: {
        type: "string",
        default: "#949494",
    },
    textHoverColor: {
        type: "string",
    },
    textFocusColor: {
        type: "string",
    },
    placeholderHoverColor: {
        type: "string",
    },
    iconColor: {
        type: "string",
        default: "#949494",
    },
    closeIconColor: {
        type: "string",
        default: "#dc4444",
    },
    loaderColor: {
        type: "string",
        default: "#444b54",
    },
    searchResultBoxColor: {
        type: "string",
        default: "#FFFFFF",
    },
    contentColorType: {
        type: "string",
        default: "normal",
    },
    contentBgColor: {
        type: "string",
        default: "#ffffff",
    },
    contentHoverBgColor: {
        type: "string",
        default: "#ffffff",
    },
    contentTitleColor: {
        type: "string",
    },
    contentTitleHoverColor: {
        type: "string",
        default: "#5959E8",
    },
    contentHoverColor: {
        type: "string",
        default: "#b2b9c6",
    },
    notFoundColor: {
        type: "string",
        default: "#000000",
    },
    taxonomyBgColor: {
        type: "string",
        default: "#ffffff",
    },
    addIcon: {
        type: "boolean",
        default: false,
    },
    icon: {
        type: "string",
        default: "fas fa-chevron-right",
    },
    iconPosition: {
        type: "string",
        default: "left",
    },
    contentLists: {
        type: "array",
        default: ["thumbnail", "title", "excerpt", "button", "meta"],
    },
    enableContents: {
        type: "array",
        default: ["thumbnail", "title", "excerpt", "headerMeta", "footerMeta"],
    },
    enableThumbnailSort: {
        type: "boolean",
        default: true,
    },
    defaultFilter: {
        type: "string"
    },
    ...generateDimensionsAttributes(SEARCH_CONTENT_PADDING, {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        isLinked: true,
    }),
    ...generateDimensionsAttributes(SEARCH_CONTENT_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateBorderShadowAttributes(SEARCH_CONTENT_BORDER, {
        // defaultBdrColor: "#aaaaaa",
        defaultBdrStyle: "none",
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 5,
            bottom: 5,
            right: 5,
            left: 5,
        },
        noShadow: true,
        // noBorder: true,
    }),
    ...generateResponsiveAlignAttributes(NO_SEARCH_ALIGNMENT, {
        defaultAlign: "center",
    }),
    ...generateBorderShadowAttributes(SEARCH_RESULT_BORDER, {
        // defaultBdrColor: "#aaaaaa",
        defaultBdrStyle: "none",
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 5,
            bottom: 5,
            right: 5,
            left: 5,
        },
        noShadow: true,
        // noBorder: true,
    }),
    ...generateDimensionsAttributes(SEARCH_RESULT_PADDING, {
        top: 30,
        bottom: 30,
        right: 30,
        left: 30,
        isLinked: false,
    }),
    ...generateResponsiveRangeAttributes(SEARCH_RESULT_WIDTH, {
        defaultRange: 100,
        defaultUnit: "%",
    }),

    ...generateResponsiveRangeAttributes(INPUT_HEIGHT, {
        // defaultRange: 300,
    }),
    ...generateResponsiveRangeAttributes(ICON_WIDTH, {
        defaultRange: 30,
    }),
    ...generateDimensionsAttributes(INPUT_PADDING, {
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
        isLinked: true,
    }),

    ...generateDimensionsAttributes(TAXONOMY_PADDING, {
        top: 10,
        bottom: 10,
        right: 10,
        left: 10,
        isLinked: true,
    }),

    ...generateBorderShadowAttributes(INPUT_BORDER, {
        defaultBdrColor: "#C9D8EB",
        defaultBdrStyle: "solid",
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        rdsDefaults: {
            top: 5,
            bottom: 5,
            right: 5,
            left: 5,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    ...generateBorderShadowAttributes(TAXONOMY_BORDER, {
        defaultBdrColor: "#C9D8EB",
        defaultBdrStyle: "solid",
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        rdsDefaults: {
            top: 5,
            bottom: 5,
            right: 5,
            left: 5,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    ...generateDimensionsAttributes(LOADMORE_PADDING, {
        top: 5,
        bottom: 5,
        right: 10,
        left: 10,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(LOADMORE_MARGIN, {
        top: 10,
        bottom: 10,
        right: 5,
        left: 5,
        isLinked: false,
    }),
    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(LOADMORE_BORDER_SHADOW, {
        noShadow: true,
        defaultBdrColor: "#c3c3c3",
        defaultBdrStyle: "solid",
        bdrDefaults: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
        },
        rdsDefaults: {
            top: 4,
            right: 4,
            bottom: 4,
            left: 4,
        },
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(READMORE_BORDER_SHADOW, {
        noShadow: true,
        defaultBdrColor: "#F445FF",
        defaultBdrStyle: "none",
        bdrDefaults: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
        },
        rdsDefaults: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        // noBorder: true,
    }),

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(COLUMN_PADDING),
    ...generateDimensionsAttributes(TITLE_MARGIN, {
        top: 0,
        bottom: 10,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(CONTENT_MARGIN, {
        top: 0,
        bottom: 10,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(READMORE_MARGIN, {
        top: 0,
        bottom: 10,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(READMORE_PADDING, {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(HEADER_META_MARGIN, {
        top: 0,
        bottom: 10,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(FOOTER_META_MARGIN, {
        top: 0,
        bottom: 10,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(THUMBNAIL_MARGIN, {
        top: 0,
        bottom: 10,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(FILTER_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(FILTER_ITEM_PADDING, {
        top: 10,
        bottom: 10,
        right: 20,
        left: 20,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(THUMBNAIL_BORDER_RADIUS),
    ...generateDimensionsAttributes(AVATAR_BORDER_RADIUS, {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50,
        isLinked: true,
    }),

    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(COLUMN_BORDER_SHADOW, {
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(FILTER_ITEM_BORDER_SHADOW, {
        // defaultBdrColor: "var(--eb-global-tertiary-color)",
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        noOverlay: true,
    }),
    ...generateBackgroundAttributes(COLUMN_BG),

    // range controller
    ...generateResponsiveRangeAttributes(COLUMNS, {
        defaultRange: 3,
    }),
    ...generateResponsiveRangeAttributes(COLUMN_GAP, {
        defaultRange: 10,
    }),
    ...generateResponsiveRangeAttributes(HEADER_META_SPACE, {
        defaultRange: 10,
    }),
    ...generateResponsiveRangeAttributes(FOOTER_META_SPACE, {
        defaultRange: 10,
    }),
    ...generateResponsiveRangeAttributes(THUMBNAIL_IMAGE_SIZE, {
        defaultRange: 250,
    }),
    ...generateResponsiveRangeAttributes(COLUMN_MEDIA_WIDTH, {
        defaultRange: 40,
        defaultUnit: "%",
    }),
    ...generateResponsiveRangeAttributes(FILTER_ITEM_GAP, {
        defaultRange: 10,
    }),
    cover: {
        type: "string",
        default: "",
    },
    ...generateResponsiveRangeAttributes(ICON_SIZE, {
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(ICON_SPACE, {
        defaultRange: 8,
        noUnits: true,
    }),
};

export default attributes;
