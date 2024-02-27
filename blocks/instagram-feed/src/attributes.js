import { NUMBER_OF_COLUMNS, GRID_GAP, IMAGE_BORDER, WRAPPER_MARGIN, WRAPPER_PADDING } from "./constants";
import * as typoPrefixs from "./constants/typographyPrefixConstants";

// import {
// 	generateTypographyAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateDimensionsAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../util/helpers";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
    generateBorderShadowAttributes,
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
    token: {
        type: "string",
    },
    layout: {
        type: "string",
        default: "overlay",
    },
    overlayStyle: {
        type: "string",
        default: "overlay__simple",
    },
    cardStyle: {
        type: "string",
        default: "content__outter",
    },
    columns: {
        type: "string",
        default: 4,
    },
    numberOfImages: {
        type: "number",
        default: 6,
    },
    thumbs: {
        type: "array",
        default: [],
    },
    preview: {
        type: "boolean",
        default: false,
    },
    captionColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    metaColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    headerColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    overlayColor: {
        type: "string",
    },
    hasEqualImages: {
        type: "boolean",
        default: true,
    },
    showCaptions: {
        type: "boolean",
        default: true,
    },
    enableLink: {
        type: "boolean",
        default: false,
    },
    openInNewTab: {
        type: "boolean",
        default: false,
    },
    showProfileImg: {
        type: "boolean",
        default: true,
    },
    profileImg: {
        type: "string",
    },
    imageID: {
        type: "string",
        default: null,
    },
    showProfileName: {
        type: "boolean",
        default: true,
    },
    profileName: {
        type: "string",
    },
    sortBy: {
        type: "string",
        default: "most_recent",
    },
    showMeta: {
        type: "boolean",
        default: true,
    },
    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),
    ...generateResponsiveRangeAttributes(NUMBER_OF_COLUMNS, {
        defaultRange: 3,
        noUnits: true,
    }),
    ...generateDimensionsAttributes(GRID_GAP),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(WRAPPER_MARGIN, {
        top: 28,
        bottom: 28,
        isLinked: false,
    }),
    // border & shadow attributes
    ...generateBorderShadowAttributes(IMAGE_BORDER, {
        noShadow: true,
    }),
};

export default attributes;
