import * as typoPrefixs from "./constants/typographyConstants";
import {
    RATING_ICON_SIZE,
    BTN_BORDER_SHADOW,
    SALE_BADGE_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BG,
    WRAPPER_BORDER_SHADOW,
    CONTENT_PADDING,
    IMAGE_PADDING,
    PRODUCTS_BORDER_SHADOW,
    GRID_SPACING,
    TITLE_MARGIN,
    PRICE_MARGIN,
    RATING_MARGIN,
    BUTTON_MARGIN,
    DESC_MARGIN,
    COLUMNS,
    IMG_GAP,
    IMG_WIDTH,
    IMG_HEIGHT,
    IMAGE_BORDER_SHADOW,
    LOADMORE_PADDING,
    LOADMORE_MARGIN,
    LOADMORE_BORDER_SHADOW,
    SOLD_COUNT_SPACE,
    FILTER_ITEM_GAP,
    FILTER_MARGIN,
    FILTER_ITEM_PADDING,
    FILTER_ITEM_BORDER_SHADOW,
    PROGRESSBAR_HEIGHT,
} from "./constants";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
} = window.EBControls;

const attributes = {
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },
    // uniqueIdNumber attribute for making unique className
    uniqueIdNumber: {
        type: "number",
    },
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
    cover: {
        type: "string",
        default: "",
    },
    queryData: {
        type: "object",
    },
    queryResults: {
        type: "array",
    },
    layout: {
        type: "string",
        default: "grid",
    },
    gridPreset: {
        type: "string",
        default: "grid-preset-1",
    },
    gridColumns: {
        type: "string",
        default: "4",
    },
    showRating: {
        type: "boolean",
        default: true,
    },
    showPrice: {
        type: "boolean",
        default: true,
    },
    showSaleBadge: {
        type: "boolean",
        default: true,
    },
    listPreset: {
        type: "string",
        default: "list-preset-1",
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    titleHoverColor: {
        type: "string",
        default: "var(--eb-global-link-color)",
    },
    priceColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    salePriceColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    ratingColor: {
        type: "string",
    },
    saleBadgeAlign: {
        type: "string",
        default: "align-left",
    },
    saleText: {
        type: "string",
        default: "Sale",
    },
    saleTextColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    saleTextBackgroundColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    contentAlignment: {
        type: "string",
        default: "center",
    },
    contentBackgroundColor: {
        type: "string",
    },
    imageBackgroundColor: {
        type: "string",
    },
    btnColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    btnHoverColor: {
        type: "string",
    },
    btnBackgroundColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    btnBackgroundHoverColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    descColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    autoHeight: {
        type: "boolean",
        default: false,
    },
    backgroundOverlayColor: {
        type: "string",
    },
    isCustomCartBtn: {
        type: "boolean",
        default: false,
    },
    simpleCartText: {
        type: "string",
        default: "Buy Now",
    },
    variableCartText: {
        type: "string",
        default: "Select options",
    },
    groupedCartText: {
        type: "string",
        default: "View products",
    },
    externalCartText: {
        type: "string",
        default: "Buy now",
    },
    defaultCartText: {
        type: "string",
        default: "Read more",
    },
    imageOverlayColor: {
        type: "string",
        default: "rgb(0 0 0 / 25%)",
    },
    productDescLength: {
        type: "string",
        default: "5",
    },
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
        default: "var(--eb-global-primary-color)",
    },

    ratingStyle: {
        type: "string",
        default: "star",
    },
    showSoldCount: {
        type: "boolean",
        default: false,
    },
    showSoldCountBar: {
        type: "boolean",
        default: false,
    },
    soldCountPrefix: {
        type: "string",
        default: "Sold ",
    },
    soldCountSuffix: {
        type: "string",
        default: "+",
    },
    stockPercent: {
        type: "number",
        default: 50,
    },
    soldCountColor: {
        type: "string",
    },
    progressbarBackgroundColor: {
        type: "string",
    },
    progressbarFillColor: {
        type: "string",
    },
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
        default: "var(--eb-global-text-color)",
    },
    filterActiveBgColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
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
        default: "var(--eb-global-tertiary-color)",
    },
    contentLists: {
        type: "array",
        default: ["rating", "title", "price", "sold_count"],
    },
    enableContents: {
        type: "array",
        default: ["rating", "title", "price"],
    },
    ...generateTypographyAttributes(Object.values(typoPrefixs)),
    ...generateResponsiveRangeAttributes(RATING_ICON_SIZE),
    ...generateResponsiveRangeAttributes(IMG_GAP, { defaultRange: 10 }),
    ...generateResponsiveRangeAttributes(IMG_WIDTH),
    ...generateResponsiveRangeAttributes(IMG_HEIGHT, { defaultRange: 200 }),
    ...generateResponsiveRangeAttributes(GRID_SPACING, {
        defaultRange: 15,
    }),
    ...generateResponsiveRangeAttributes(COLUMNS, {
        defaultRange: 4,
    }),
    ...generateBorderShadowAttributes(BTN_BORDER_SHADOW),
    ...generateBorderShadowAttributes(SALE_BADGE_BORDER, {
        noShadow: true,
        noBdrHover: true,
    }),
    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
    }),
    ...generateBorderShadowAttributes(PRODUCTS_BORDER_SHADOW),
    ...generateBorderShadowAttributes(IMAGE_BORDER_SHADOW),
    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
    }),
    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(CONTENT_PADDING),
    ...generateDimensionsAttributes(IMAGE_PADDING),
    ...generateDimensionsAttributes(TITLE_MARGIN),
    ...generateDimensionsAttributes(RATING_MARGIN),
    ...generateDimensionsAttributes(PRICE_MARGIN),
    ...generateDimensionsAttributes(BUTTON_MARGIN),
    ...generateDimensionsAttributes(DESC_MARGIN),
    TABcolumnsRange: {
        type: "number",
        default: 3,
    },
    TABgridSpaceRange: {
        type: "number",
        default: 10,
    },
    MOBcolumnsRange: { type: "number", default: 1 },
    MOBgridSpaceRange: { type: "number", default: 0 },
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
    ...generateDimensionsAttributes(SOLD_COUNT_SPACE),
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
    ...generateResponsiveRangeAttributes(FILTER_ITEM_GAP, {
        defaultRange: 10,
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
    ...generateBorderShadowAttributes(FILTER_ITEM_BORDER_SHADOW, {
        defaultBdrColor: "var(--eb-global-primary-color)",
        defaultBdrStyle: "solid",
    }),
    ...generateResponsiveRangeAttributes(PROGRESSBAR_HEIGHT, {
        defaultRange: 10,
        noUnits: true,
    }),
};

export default attributes;
