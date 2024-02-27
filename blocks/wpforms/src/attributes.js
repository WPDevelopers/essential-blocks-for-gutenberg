import {
    LABEL_SPACING,
    INPUT_TEXTAREA_INDENT,
    INPUT_WIDTH,
    INPUT_HEIGHT,
    TEXTAREA_WIDTH,
    TEXTAREA_HEIGHT,
    INPUT_TEXTAREA_PADDING,
    INPUT_TEXTAREA_SPACING,
    INPUT_TEXTAREA_BORDER,
    SUBMIT_BUTTON_WIDTH,
    SUBMIT_BUTTON_PADDING,
    SUBMIT_BUTTON_MARGIN,
    SUBMIT_BUTTON_BORDER,
    SUCCESS_BORDER,
    ERROR_PADDING,
    ERROR_MARGIN,
    CHECKBOX_SIZE,
    CHECKBOX_BORDER,
    CHECKBOX_RADIUS,
    RADIO_RADIUS,
    FORM_MAX_WIDTH,
    FORM_BORDER,
    FORM_MARGIN,
    FORM_PADDING,
} from "./constants";
import * as prefixObjs from "./constants/typographyPrefixConstants";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
    generateBorderShadowAttributes,
} = EBControls;

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
    formActive: {
        type: "string",
    },
    formId: {
        type: "string",
    },
    showLabels: {
        type: "boolean",
        default: true,
    },
    showPlaceholder: {
        type: "boolean",
        default: true,
    },
    showErrorMessage: {
        type: "boolean",
        default: true,
    },
    customCheckboxStyle: {
        type: "boolean",
        default: false,
    },
    labelColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    inputHoverType: {
        type: "string",
        default: "normal",
    },
    inputBackgroundColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    inputFocusBackgroundColor: {
        type: "string",
    },
    inputTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    placeholderColor: {
        type: "string",
    },
    sectionBreakContent: {
        type: "string",
        default: "center",
    },
    sectionBreakColor: {
        type: "string",
    },
    sectionBreakDescColor: {
        type: "string",
    },
    btnWidthType: {
        type: "string",
        default: "custom",
    },
    btnAlignment: {
        type: "string",
        default: "left",
    },
    btnBackgroundColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    btnColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    btnBackgroundHoverColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    btnHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    btnHoverType: {
        type: "string",
        default: "normal",
    },
    sectionBreakPosition: {
        type: "string",
        default: "center",
    },
    successColor: {
        type: "string",
    },
    successBackgroundColor: {
        type: "string",
    },
    errorColor: {
        type: "string",
    },
    checkboxSwitcher: {
        type: "string",
        default: "normal",
    },
    checkboxColor: {
        type: "string",
    },
    checkboxBorderColor: {
        type: "string",
    },
    checkboxCheckedColor: {
        type: "string",
    },
    formBackgroundColor: {
        type: "string",
    },
    formAlignment: {
        type: "string",
        default: "none",
    },
    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),
    // Responsive Range Controller
    ...generateResponsiveRangeAttributes(INPUT_TEXTAREA_INDENT),
    ...generateResponsiveRangeAttributes(INPUT_WIDTH),
    ...generateResponsiveRangeAttributes(INPUT_HEIGHT),
    ...generateResponsiveRangeAttributes(TEXTAREA_WIDTH),
    ...generateResponsiveRangeAttributes(TEXTAREA_HEIGHT),
    ...generateResponsiveRangeAttributes(INPUT_TEXTAREA_SPACING),
    ...generateResponsiveRangeAttributes(SUBMIT_BUTTON_WIDTH),
    ...generateResponsiveRangeAttributes(CHECKBOX_SIZE),
    ...generateResponsiveRangeAttributes(CHECKBOX_BORDER, {
        noUnits: true,
        defaultUnit: "px",
    }),
    ...generateResponsiveRangeAttributes(FORM_MAX_WIDTH),
    // Dimension controller
    ...generateDimensionsAttributes(LABEL_SPACING),
    ...generateDimensionsAttributes(INPUT_TEXTAREA_PADDING),
    ...generateDimensionsAttributes(SUBMIT_BUTTON_PADDING),
    ...generateDimensionsAttributes(SUBMIT_BUTTON_MARGIN),
    ...generateDimensionsAttributes(ERROR_PADDING),
    ...generateDimensionsAttributes(ERROR_MARGIN),
    ...generateDimensionsAttributes(CHECKBOX_RADIUS),
    ...generateDimensionsAttributes(RADIO_RADIUS),
    ...generateDimensionsAttributes(FORM_MARGIN, {
        top: 28,
        right: 0,
        bottom: 28,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(FORM_PADDING, {
        top: 0,
        right: 15,
        bottom: 0,
        left: 15,
        isLinked: false,
    }),
    // border shadow controller
    ...generateBorderShadowAttributes(INPUT_TEXTAREA_BORDER),
    ...generateBorderShadowAttributes(SUBMIT_BUTTON_BORDER),
    ...generateBorderShadowAttributes(SUCCESS_BORDER),
    ...generateBorderShadowAttributes(FORM_BORDER),
};

export default attributes;
