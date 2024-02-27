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
    BTN_PADDING,
    BTN_BORDER,
    LABEL_MARGIN,
    FIELDS_BORDER,
    FIELDS_PADDING,
    ROWS_GAP,
    SUCCESS_PADDING,
    SUCCESS_BORDER,
    ERROR_PADDING,
    ERROR_BORDER,
    RADIO_SIZE,
    RADIO_SPACING,
    CHECKBOX_SIZE,
    CHECKBOX_SPACING,
    FIXED_WIDTH,
    ICON_SIZE,
    ICON_SPACE,
    FORM_CUSTOM_WIDTH,
    BTN_HORIZONTAL_POSITION,
    BTN_VERTICAL_POSITION,
    INLINE_FORM_WIDTH,
    INPUT_ICON_SIZE,
    BTN_TOP_SPECING,
    INPUT_WIDTH,
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
    formType: {
        type: "string",
    },
    formStyle: {
        type: "string",
        default: "form-style-classic",
    },
    template: {
        type: "string",
        default: "contact_form_1",
    },
    formId: {
        type: "string",
    },
    formTitle: {
        type: "string",
    },
    integrations: {
        type: "object",
        default: {},
    },
    mailTo: {
        type: "string",
    },
    mailCc: {
        type: "string",
    },
    mailBcc: {
        type: "string",
    },
    mailSubject: {
        type: "string",
    },
    mailBody: {
        type: "string",
    },
    notificationType: {
        type: "string",
        default: EssentialBlocksLocalize?.is_pro_active === "true" ? "emailsave" : "email",
    },
    confirmationType: {
        type: "string",
        default: "message",
    },
    redirectUrl: {
        type: "string",
    },
    successMessage: {
        type: "string",
        default: "Your form has been submitted Successfully!",
    },
    errorMessage: {
        type: "string",
        default: "Your form couldn't been submitted! Please try again.",
    },
    validationErrorMessage: {
        type: "string",
        default: "Validation Failed! Please check the error messages.",
    },

    // style
    formWidth: {
        type: "string",
        default: "full",
    },
    formAlign: {
        type: "string",
        default: "left",
    },
    labelColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    labelAlign: {
        type: "string",
        default: "left",
    },

    requiredColor: {
        type: "string",
        default: "#D92D20",
    },
    fieldsColor: {
        type: "string",
        default: "var(--eb-global-text-color)"
    },
    fieldsPlaceholderColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    fieldsBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },

    buttonType: {
        type: "string",
        default: "normal",
    },
    btnColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    btnHvColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    btnBgColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    btnBgHvColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    buttonText: {
        type: "string",
        default: "Submit",
    },
    buttonAlign: {
        type: "string",
        default: "left",
    },
    btnVerticalAlign: {
        type: "string",
        default: "flex-end",
    },
    buttonWidth: {
        type: "string",
        default: "full",
    },
    //Icon
    btnAddIcon: {
        type: "boolean",
        default: false,
    },
    icon: {
        type: "string",
        default: "fas fa-chevron-right",
    },
    iconPosition: {
        type: "string",
        default: "right",
    },
    iconSize: {
        type: "string",
    },
    iconSpace: {
        type: "string",
        default: "5px",
    },

    messageAlign: {
        type: "string",
        default: "left",
    },
    messageType: {
        type: "string",
        default: "success",
    },
    successColor: {
        type: "string",
        default: "#4E4E4E",
    },
    successBgColor: {
        type: "string",
        default: "#EDFFF5",
    },
    errorColor: {
        type: "string",
        default: "#4E4E4E",
    },
    errorBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },

    radioType: {
        type: "string",
        default: "normal",
    },
    radioColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    radioBgColor: {
        type: "string",
        default: "",
    },
    radioBrColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    radioBrCheckedColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    radioBorder: {
        type: "number",
        default: 1,
    },

    checkboxType: {
        type: "string",
        default: "normal",
    },
    checkboxColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    checkboxBgColor: {
        type: "string",
        default: "",
    },
    checkboxBrColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    checkboxBrCheckedColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    checkboxBorder: {
        type: "number",
        default: 1,
    },
    dateBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    dateSelectedColor: {
        type: "string",
        default: "#fff",
    },

    fieldAlign: {
        type: "string",
        default: "left",
    },
    fieldsValidationColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    fieldsValidationBorderColor: {
        type: "string",
        default: "#dc072f",
    },
    validationAlign: {
        type: "string",
        default: "left",
    },

    formLayout: {
        type: "string",
        default: "block",
    },
    showLabel: {
        type: "boolean",
        default: true,
    },
    showInputIcon: {
        type: "boolean",
        default: false,
    },
    inputIconColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),

    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING, {
        top: 30,
        bottom: 30,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateBackgroundAttributes(WRAPPER_BG),
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW),

    ...generateDimensionsAttributes(BTN_PADDING),
    ...generateBorderShadowAttributes(BTN_BORDER, {
        defaultBdrColor: "var(--eb-global-tertiary-color)",
        defaultBdrStyle: "solid",
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 4,
            bottom: 4,
            right: 4,
            left: 4,
        },
    }),
    ...generateResponsiveRangeAttributes(FIXED_WIDTH, {
        defaultRange: 200,
    }),
    ...generateResponsiveRangeAttributes(FORM_CUSTOM_WIDTH, {
        defaultRange: 500,
    }),
    ...generateResponsiveRangeAttributes(INPUT_WIDTH, {
        defaultRange: 100,
        defaultUnit: "%",
    }),
    ...generateResponsiveRangeAttributes(ICON_SIZE, {
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(ICON_SPACE, {
        defaultRange: 8,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(ROWS_GAP, {
        defaultRange: 15,
    }),

    ...generateDimensionsAttributes(LABEL_MARGIN, {
        top: 0,
        bottom: 10,
        left: 0,
        right: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(FIELDS_PADDING, {
        top: 15,
        bottom: 15,
        left: 15,
        right: 15,
        isLinked: true,
    }),
    ...generateBorderShadowAttributes(FIELDS_BORDER, {
        defaultBdrColor: "var(--eb-global-tertiary-color)",
        defaultBdrStyle: "solid",
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        rdsDefaults: {
            top: 4,
            bottom: 4,
            right: 4,
            left: 4,
        },
    }),

    ...generateDimensionsAttributes(SUCCESS_PADDING),
    ...generateBorderShadowAttributes(SUCCESS_BORDER),
    ...generateDimensionsAttributes(ERROR_PADDING),
    ...generateBorderShadowAttributes(ERROR_BORDER),

    ...generateResponsiveRangeAttributes(RADIO_SIZE, {
        defaultRange: 16,
    }),
    ...generateResponsiveRangeAttributes(RADIO_SPACING, {
        defaultRange: 10,
    }),
    ...generateResponsiveRangeAttributes(CHECKBOX_SIZE, {
        defaultRange: 18,
    }),
    ...generateResponsiveRangeAttributes(CHECKBOX_SPACING, {
        defaultRange: 10,
    }),

    ...generateResponsiveRangeAttributes(BTN_HORIZONTAL_POSITION, {
        defaultRange: 0,
    }),
    ...generateResponsiveRangeAttributes(BTN_VERTICAL_POSITION, {
        defaultRange: 0,
    }),
    ...generateResponsiveRangeAttributes(BTN_TOP_SPECING, {
        defaultRange: 20,
    }),
    ...generateResponsiveRangeAttributes(INLINE_FORM_WIDTH, {
        defaultRange: 80,
    }),
    ...generateResponsiveRangeAttributes(INPUT_ICON_SIZE, { defaultRange: 15 }),
};

export default attributes;
