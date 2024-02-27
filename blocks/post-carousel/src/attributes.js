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
    HEADER_META_MARGIN,
    FOOTER_META_MARGIN,
    HEADER_META_SPACE,
    FOOTER_META_SPACE,
    AVATAR_BORDER_RADIUS,
    COLUMN_MEDIA_WIDTH,
    SLIDE_TO_SHOW,
    CUSTOM_HEIGHT,
    DOTS_GAP,
    ARROW_POSITION,
    DOTS_POSITION,
    ARROW_SIZE,
    DOTS_SIZE,
    SLIDES_GAP,
    DOT_PRESETS,
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
    dynamicMetaColor: {
        type: "string",
        default: "#333333",
    },
    dynamicMetaBgColor: {
        type: "string",
    },
    showMeta: {
        type: "boolean",
        default: true,
    },
    headerMeta: {
        type: "string",
        default: '[{"value":"categories","label":"Categories"}]',
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
    commonMetaDividerColor: {
        type: "string",
        default: "#9e9e9e",
    },
    categoryMetaColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    categoryMetaHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    categoryMetaDividerColor: {
        type: "string",
        default: "var(--eb-global-secondary-text-color)",
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
    tagMetaDividerColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },

    dateMetaColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },

    // slider
    arrows: {
        type: "boolean",
        default: true,
    },
    adaptiveHeight: {
        type: "boolean",
        default: true,
    },
    autoplay: {
        type: "bolean",
        default: true,
    },
    autoplaySpeed: {
        type: "number",
        default: 3000,
    },
    dots: {
        type: "boolean",
        default: true,
    },

    infinite: {
        type: "boolean",
        default: true,
    },

    pauseOnHover: {
        type: "boolean",
        default: true,
    },

    slidesToShow: {
        type: "number",
        default: 3,
    },
    speed: {
        type: "number",
        default: 500,
    },
    leftArrowIcon: {
        type: "string",
        default: "fas fa-chevron-circle-left",
    },
    rightArrowIcon: {
        type: "string",
        default: "fas fa-chevron-circle-right",
    },
    arrowColorType: {
        type: "string",
        default: "normal",
    },
    arrowColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    arrowHoverColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    dotsColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    dotsActiveColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    dotPreset: {
        type: "string",
        default: "dot-circle",
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING, {
        top: 0,
        bottom: 50,
        right: 0,
        left: 0,
        isLinked: false,
    }),
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
    ...generateDimensionsAttributes(THUMBNAIL_BORDER_RADIUS, {
        top: 5,
        bottom: 5,
        right: 5,
        left: 5,
        isLinked: true,
    }),
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
    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(COLUMN_BORDER_SHADOW, {
        noShadow: true,
        // noBorder: true,
        rdsDefaults: {
            top: 10,
            bottom: 10,
            right: 10,
            left: 10,
        },
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

    // slider
    // range controller Slide to Show
    ...generateResponsiveRangeAttributes(SLIDE_TO_SHOW, {
        defaultRange: 3,
    }),

    // range controller Slider Height
    ...generateResponsiveRangeAttributes(CUSTOM_HEIGHT, {
        defaultRange: 400,
    }),

    // range controller Dots Gap
    ...generateResponsiveRangeAttributes(DOTS_GAP, {
        defaultRange: 10,
    }),

    // range controller Arrow Position
    ...generateResponsiveRangeAttributes(ARROW_POSITION, {
        defaultRange: -25,
    }),

    // range controller Dots Position
    ...generateResponsiveRangeAttributes(DOTS_POSITION, {
        defaultRange: -35,
    }),

    // range controller Arrow Position
    ...generateResponsiveRangeAttributes(ARROW_SIZE, {
        defaultRange: 20,
    }),

    // range controller Dots Position
    ...generateResponsiveRangeAttributes(DOTS_SIZE, {
        defaultRange: 15,
    }),

    // range controller Slides Gap
    ...generateResponsiveRangeAttributes(SLIDES_GAP, {
        defaultRange: 25,
    }),
    cover: {
        type: "string",
        default: "",
    },
};

export default attributes;
