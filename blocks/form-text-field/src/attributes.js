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
    TEXT_PADDING,
    TEXT_BORDER,
    LABEL_MARGIN,
    FIELD_BORDER,
    FIELD_PADDING,
    ICON_SIZE,
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
    parentBlockPaddingLeft: {
        type: "string",
    },
    parentBlockPaddingUnit: {
        type: "string",
    },
    parentBlockIconSize: {
        type: "string",
    },
    parentIconColor: {
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
    formStyle: {
        type: "string",
    },
    showLabel: {
        type: "boolean",
        default: true,
    },
    labelText: {
        type: "string",
        default: "Field Title",
    },
    fieldName: {
        type: "string",
    },
    placeholderText: {
        type: "string",
        default: "Enter your text here...",
    },
    defaultValue: {
        type: "string",
    },
    isRequired: {
        type: "boolean",
        default: true,
    },
    isHidden: {
        type: "boolean",
        default: false,
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
    fieldColor: {
        type: "string",
    },
    fieldPlaceholderColor: {
        type: "string",
    },
    fieldBgColor: {
        type: "string",
    },
    fieldValidationColor: {
        type: "string",
    },
    fieldValidationBorderColor: {
        type: "string",
    },

    isIcon: {
        type: "boolean",
        default: false,
    },
    icon: {
        type: "string",
        default: "fas fa-user",
    },
    iconColor: {
        type: "string",
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),

    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateBackgroundAttributes(WRAPPER_BG),
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW),

    ...generateDimensionsAttributes(TEXT_PADDING),
    ...generateBorderShadowAttributes(TEXT_BORDER),

    ...generateDimensionsAttributes(FIELD_PADDING),
    ...generateBorderShadowAttributes(FIELD_BORDER),
    ...generateDimensionsAttributes(LABEL_MARGIN),
    ...generateResponsiveRangeAttributes(ICON_SIZE),
};

export default attributes;
