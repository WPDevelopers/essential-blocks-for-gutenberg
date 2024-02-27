const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
} = EBControls;

import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    LABEL_MARGIN,
    CHECKBOX_SIZE,
    CHECKBOX_SPACING,
} from "./constants";

import * as prefixObjs from "./constants/typographyPrefixConstants";

const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },

    // blockId attribute for making unique className and other uniqueness ⬇
    parentBlockId: {
        type: "string",
    },
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
    showLabel: {
        type: "boolean",
        default: true,
    },
    labelText: {
        type: "string",
        default: "Field Title",
    },
    options: {
        type: "array",
        default: [
            { name: "Option 1", value: "checkbox_1" },
            { name: "Option 2", value: "checkbox_2" },
            { name: "Option 3", value: "checkbox_3" },
        ],
    },
    fieldName: {
        type: "string",
    },
    defaultValue: {
        type: "string",
    },
    isRequired: {
        type: "boolean",
        default: true,
    },
    validationRules: {
        type: "object",
    },
    validationMessage: {
        type: "string",
        default: "This field is required.",
    },

    labelColor: {
        type: "string",
    },

    requiredColor: {
        type: "string",
    },

    checkboxType: {
        type: "string",
        default: "normal",
    },
    checkboxColor: {
        type: "string",
    },
    checkboxBgColor: {
        type: "string",
    },
    checkboxBrColor: {
        type: "string",
    },
    checkboxBrCheckedColor: {
        type: "string",
    },
    checkboxBorder: {
        type: "number",
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),

    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateBackgroundAttributes(WRAPPER_BG),
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW),

    ...generateDimensionsAttributes(LABEL_MARGIN),

    ...generateResponsiveRangeAttributes(CHECKBOX_SIZE),
    ...generateResponsiveRangeAttributes(CHECKBOX_SPACING),
};

export default attributes;
