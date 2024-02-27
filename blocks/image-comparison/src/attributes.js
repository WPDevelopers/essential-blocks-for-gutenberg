import { IMAGE_WIDTH, LABEL_PADDING, WRAPPER_MARGIN, WRAPPER_PADDING } from "./constants";
import * as typoPrefixs from "./constants/typographyConstants";

// import {
// 	generateTypographyAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateDimensionsAttributes,
// } from "../../../util/helpers";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
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
    id: {
        type: "string",
    },
    leftImageURL: {
        type: "string",
        source: "attribute",
        attribute: "data-left-image",
        selector: ".eb-image-comparison-wrapper",
    },
    rightImageURL: {
        type: "string",
        source: "attribute",
        attribute: "data-right-image",
        selector: ".eb-image-comparison-wrapper",
    },
    hover: {
        type: "boolean",
        default: false,
    },
    verticalMode: {
        type: "boolean",
        default: false,
    },
    circleControl: {
        type: "boolean",
        default: true,
    },
    circleBlur: {
        type: "boolean",
        default: true,
    },
    showLabels: {
        type: "boolean",
        default: false,
    },
    labelsOnHover: {
        type: "boolean",
        default: false,
    },
    fullWidth: {
        type: "boolean",
        default: true,
    },
    imageWidth: {
        type: "number",
    },
    position: {
        type: "number",
        default: 50,
    },
    beforeLabel: {
        type: "string",
        default: "Before",
    },
    afterLabel: {
        type: "string",
        default: "After",
    },
    swap: {
        type: "boolean",
        default: false,
    },
    lineWidth: {
        type: "number",
        default: 4,
    },
    lineColor: {
        type: "string",
    },
    arrowColor: {
        type: "string",
    },
    contentPosition: {
        type: "string",
        default: "center",
    },
    horizontalLabelPosition: {
        type: "string",
        default: "center",
    },
    verticalLabelPosition: {
        type: "string",
        default: "center",
    },
    noHandle: {
        type: "boolean",
        default: false,
    },
    labelColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    labelBackgroundColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),
    ...generateResponsiveRangeAttributes(IMAGE_WIDTH, {
        noUnits: true,
    }),
    ...generateDimensionsAttributes(WRAPPER_MARGIN, {
        top: 28,
        right: 0,
        bottom: 28,
        left: 0,
        isLinked: false,
        disableLeftRight: true,
    }),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(LABEL_PADDING),
};

export default attributes;
