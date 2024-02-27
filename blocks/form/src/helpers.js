import { DefaultBlockAppender } from "@wordpress/block-editor";


/**
 * Generate validate rules
 * @param {*} obj
 * @returns
 */
export const getValidationRules = (obj) => {
    let result = {};

    if (obj?.attributes && obj?.attributes?.validationRules) {
        const key = Object.keys(obj.attributes.validationRules)[0];
        result[key] = obj.attributes.validationRules[key];
    }

    if (obj?.innerBlocks && obj?.innerBlocks.length > 0) {
        for (const innerBlock of obj.innerBlocks) {
            const innerBlockRules = getValidationRules(innerBlock);
            if (
                typeof innerBlockRules === "object" &&
                Object.keys(innerBlockRules).length > 0
            ) {
                result = {
                    ...result,
                    ...innerBlockRules,
                };
            }
        }
    }

    //Remove recaptcha field
    if (result['g-recaptcha-response']) {
        delete result['g-recaptcha-response']
    }

    return result;
};

/**
 * get Form Fields
 * @param {*} obj
 * @returns
 */
export const getFormFields = (obj) => {
    let result = {};

    if (obj?.attributes && obj?.attributes?.fieldName) {
        result[obj.attributes.fieldName] = {
            type: getType(obj.name), //type of the filed
            label: obj?.attributes?.labelText || obj?.attributes?.fieldName, //label of the field
            ...(obj?.attributes?.options && { options: obj.attributes.options }) //label of the field
        };
    }

    if (obj?.innerBlocks && obj?.innerBlocks.length > 0) {
        for (const innerBlock of obj.innerBlocks) {
            const innerBlockRules = getFormFields(innerBlock);
            if (
                typeof innerBlockRules === "object" &&
                Object.keys(innerBlockRules).length > 0
            ) {
                result = {
                    ...result,
                    ...innerBlockRules,
                };
            }
        }
    }

    //Remove recaptcha field
    if (result['g-recaptcha-response']) {
        delete result['g-recaptcha-response']
    }

    return result;
};

const getType = (blockName) => {
    switch (blockName) {
        case 'essential-blocks/form-text-field':
            return 'text'
            break;
        case 'essential-blocks/form-textarea-field':
            return 'textarea'
            break;
        case 'essential-blocks/form-email-field':
            return 'email'
            break;
        case 'essential-blocks/form-number-field':
            return 'number'
            break;
        case 'essential-blocks/form-select-field':
            return 'select'
            break;
        case 'essential-blocks/form-checkbox-field':
            return 'checkbox'
            break;
        case 'essential-blocks/form-radio-field':
            return 'radio'
            break;
        case 'essential-blocks/pro-form-datetime-picker':
            return 'datetime'
            break;
        case 'essential-blocks/pro-form-recaptcha':
            return 'recaptcha'
            break;
        default:
            return 'input'
    }
}


export const contactForm1 = {
    formStyle: "form-style-classic",
    formLayout: "block",
    inlineFormWidthRange: 80,
    rowsGapRange: "15",

    showLabel: true,
    labelColor: "#1D2939",
    requiredColor: "#D92D20",

    showInputIcon: true,
    inputIconColor: "#CBCBCB",

    fieldAlign: "left",
    fields_FontFamily: "Poppins",
    fields_FontSize: 14,
    fields_FontStyle: "normal",
    fields_FontTransform: "uppercase",
    fields_FontWeight: "400",
    fields_LetterSpacingUnit: "px",
    fields_LineHeightUnit: "em",
    fields_SizeUnit: "px",

    fieldsBorderRds_Top: "4",
    fieldsBorderRds_Left: "4",
    fieldsBorderRds_Bottom: "4",
    fieldsBorderRds_Right: "4",
    fieldsBorderRds_isLinked: true,

    fieldsBorderBdr_Top: "1",
    fieldsBorderBdr_Left: "1",
    fieldsBorderBdr_Bottom: "1",
    fieldsBorderBdr_Right: "1",
    fieldsBorderBdr_isLinked: false,
    fieldsPaddingLeft: "15",
    fieldsPaddingRight: "15",
    fieldsPaddingTop: "15",
    fieldsPaddingBottom: "15",
    fieldsPaddingisLinked: false,

    buttonText: "Submit",
    btnColor: "#fff",
    btnBgColor: "#475467",
    btnText_FontFamily: "",
    btnText_FontSize: 16,
    btnText_FontWeight: "400",
    btnText_LetterSpacingUnit: "px",
    btnText_LineHeightUnit: "em",
    btnText_SizeUnit: "px",
    btnText_TextTransform: "capitalize",
    buttonWidth: "full",
    btnHorizontalPositionRange: "",
    btnVerticalPositionRange: "",
    btnAddIcon: false,
    btnBorderRds_Bottom: "4",
    btnBorderRds_Left: "4",
    btnBorderRds_Right: "4",
    btnBorderRds_Top: "4",
    btnBorderBdr_Bottom: "0",
    btnBorderBdr_Left: "0",
    btnBorderBdr_Right: "0",
    btnBorderBdr_Top: "0",
    btnTopSpecingRange: "20",

    wrpPaddingisLinked: true,
    wrpPaddingUnit: "px",
    wrpPaddingTop: "0",
    wrpPaddingBottom: "0",
    wrpPaddingLeft: "0",
    wrpPaddingRight: "0",

    wrpBorderShadowRds_Bottom: "0",
    wrpBorderShadowRds_Left: "0",
    wrpBorderShadowRds_Right: "0",
    wrpBorderShadowRds_Top: "0",
    wrpBorderShadowRds_Unit: "px",
    wrpBorderShadowRds_isLinked: true,

    wrpBorderShadowblur: 0,
    wrpBorderShadowvOffset: 0,
    wrpBorderShadowhOffset: 0,
    wrpBorderShadowshadowColor: "rgba(111, 159, 140, 0.00)",

    wrprBgbackgroundColor: "#FFFFFF",
    wrprBgbackgroundType: "classic",

};

export const contactForm2 = {
    formLayout: "block",
    formStyle: "form-style-modern",
    inlineFormWidthRange: 100,
    rowsGapRange: "15",

    showLabel: true,
    labelColor: "#C2C6C8",
    requiredColor: "#6E6C6C",

    fieldAlign: "left",
    fieldsBorderRds_Bottom: "0",
    fieldsBorderRds_Left: "0",
    fieldsBorderRds_Right: "0",
    fieldsBorderRds_Top: "0",
    fieldsBorderRds_Unit: "px",

    buttonText: "Send",
    btnText_FontFamily: "Manrope",
    btnText_FontSize: 18,
    btnText_FontWeight: "500",
    btnText_LetterSpacingUnit: "px",
    btnText_LineHeightUnit: "em",
    btnText_SizeUnit: "px",
    btnText_TextTransform: "capitalize",
    buttonWidth: "full",
    btnAddIcon: false,
    iconSize: "12px",
    btnBorderRds_Bottom: "0",
    btnBorderRds_Left: "0",
    btnBorderRds_Right: "0",
    btnBorderRds_Top: "0",
    btnBorderRds_Unit: "px",
    btnTopSpecingRange: "20",

    wrpPaddingisLinked: false,
    wrpPaddingUnit: "px",
    wrpPaddingTop: "30",
    wrpPaddingBottom: "30",
    wrpPaddingLeft: "0",
    wrpPaddingRight: "0",

    wrpBorderShadowRds_Bottom: "0",
    wrpBorderShadowRds_Left: "0",
    wrpBorderShadowRds_Right: "0",
    wrpBorderShadowRds_Top: "0",
    wrpBorderShadowRds_Unit: "px",
    wrpBorderShadowRds_isLinked: true,

    wrpBorderShadowblur: 0,
    wrpBorderShadowvOffset: 0,
    wrpBorderShadowhOffset: 0,
    wrpBorderShadowshadowColor: "rgba(111, 159, 140, 0.09)",

    wrprBgbackgroundColor: "#fff",
    wrprBgbackgroundType: "classic",
};

export const subscriptionForm1 = {
    formStyle: "form-style-classic",
    formLayout: "inline",
    inlineFormWidthRange: 100,
    showInputIcon: false,

    showLabel: false,
    fieldAlign: "left",
    requiredColor: "#D92D20",

    fieldsBgColor: "#fff",
    fieldsColor: "#787878",
    fields_FontFamily: "Manrope",
    fields_FontSize: 18,
    fields_FontStyle: "normal",
    fields_FontWeight: "400",
    fields_LineHeight: 1.2,
    fields_LineHeightUnit: "em",

    fieldsPaddingLeft: "20",
    fieldsPaddingRight: "220",
    fieldsPaddingTop: "25",
    fieldsPaddingBottom: "25",
    fieldsPaddingisLinked: false,

    fieldsBorderBdr_Top: "1",
    fieldsBorderBdr_Left: "1",
    fieldsBorderBdr_Bottom: "1",
    fieldsBorderBdr_Right: "1",
    fieldsBorderBdr_isLinked: false,

    fieldsBorderRds_Top: "4",
    fieldsBorderRds_Left: "4",
    fieldsBorderRds_Bottom: "4",
    fieldsBorderRds_Right: "4",
    fieldsBorderRds_isLinked: true,

    buttonText: "Subscribe",
    btnColor: "#fff",
    btnBgColor: "#475467",
    btnText_FontFamily: "Manrope",
    btnText_FontSize: 18,
    btnText_FontWeight: "500",
    btnText_LetterSpacingUnit: "px",
    btnText_LineHeightUnit: "em",
    btnText_SizeUnit: "px",
    btnText_TextTransform: "capitalize",

    btnBorderRds_Top: "4",
    btnBorderRds_Left: "4",
    btnBorderRds_Bottom: "4",
    btnBorderRds_Right: "4",
    btnBorderRds_isLinked: true,

    buttonWidth: "fixed",
    btnWidthRange: "200",
    btnHorizontalPositionRange: 210,
    btnVerticalPositionRange: 10,
    btnAddIcon: false,
    iconSize: "12px",
    btnTopSpecingRange: "",
    rowsGapRange: "30",

    wrpPaddingisLinked: false,
    wrpPaddingUnit: "%",
    wrpPaddingTop: "10",
    wrpPaddingBottom: "10",
    wrpPaddingLeft: "15",
    wrpPaddingRight: "15",

    wrpBorderShadowRds_Bottom: "0",
    wrpBorderShadowRds_Left: "0",
    wrpBorderShadowRds_Right: "0",
    wrpBorderShadowRds_Top: "0",
    wrpBorderShadowRds_Unit: "px",
    wrpBorderShadowRds_isLinked: true,

    wrpBorderShadowblur: 0,
    wrpBorderShadowvOffset: 0,
    wrpBorderShadowhOffset: 0,
    wrpBorderShadowshadowColor: "rgba(111, 159, 140, 0.09)",

    wrprBgbackgroundColor: "#eaeaea",
    wrprBgbackgroundType: "classic",
};

export const subscriptionForm2 = {
    formStyle: "form-style-classic",
    formLayout: "block",
    inlineFormWidthRange: 80,

    showLabel: false,
    requiredColor: "#D92D20",

    fieldAlign: "center",
    fields_FontFamily: "Poppins",
    fields_FontSize: 20,
    fields_FontStyle: "normal",
    fields_FontWeight: "400",
    fields_LetterSpacingUnit: "px",
    fields_LineHeightUnit: "em",
    fields_SizeUnit: "px",

    fieldsBorderRds_Top: "4",
    fieldsBorderRds_Left: "4",
    fieldsBorderRds_Bottom: "4",
    fieldsBorderRds_Right: "4",
    fieldsBorderRds_isLinked: true,

    buttonText: "Subscribe",
    btnText_FontFamily: "Poppins",
    btnText_FontSize: 24,
    btnText_FontWeight: "500",
    btnText_LetterSpacingUnit: "px",
    btnText_LineHeightUnit: "em",
    btnText_SizeUnit: "px",
    btnText_TextTransform: "uppercase",
    buttonWidth: "full",
    btnHorizontalPositionRange: "",
    btnVerticalPositionRange: "",
    btnAddIcon: false,
    btnTopSpecingRange: "25",

    wrpPaddingisLinked: false,
    wrpPaddingUnit: "%",
    wrpPaddingTop: "10",
    wrpPaddingBottom: "10",
    wrpPaddingLeft: "20",
    wrpPaddingRight: "20",

    wrpBorderShadowRds_Bottom: "15",
    wrpBorderShadowRds_Left: "15",
    wrpBorderShadowRds_Right: "15",
    wrpBorderShadowRds_Top: "15",
    wrpBorderShadowRds_Unit: "px",
    wrpBorderShadowRds_isLinked: true,

    wrpBorderShadowblur: 45,
    wrpBorderShadowvOffset: 0,
    wrpBorderShadowhOffset: 0,
    wrpBorderShadowshadowColor: "rgba(111, 159, 140, 0.09)",

    wrprBgbackgroundColor: "#FFFFFF",
    wrprBgbackgroundType: "classic",
};

export const rsvpForm = {
    formStyle: "form-style-classic",
    showInputIcon: false,
    formLayout: "block",
    inlineFormWidthRange: 80,
    rowsGapRange: "15",

    showLabel: false,
    requiredColor: "#D92D20",

    fieldAlign: "left",
    fields_FontFamily: "Poppins",
    fields_FontSize: 20,
    fields_FontStyle: "normal",
    fields_FontTransform: "uppercase",
    fields_FontWeight: "400",
    fields_LetterSpacingUnit: "px",
    fields_LineHeightUnit: "em",
    fields_SizeUnit: "px",
    fieldsBorderRds_Top: "0",
    fieldsBorderRds_Left: "0",
    fieldsBorderRds_Bottom: "0",
    fieldsBorderRds_Right: "0",
    fieldsBorderRds_isLinked: true,
    fieldsBorderBdr_Top: "0",
    fieldsBorderBdr_Left: "0",
    fieldsBorderBdr_Bottom: "1",
    fieldsBorderBdr_Right: "0",
    fieldsBorderBdr_isLinked: false,
    fieldsPaddingLeft: "0",
    fieldsPaddingRight: "0",
    fieldsPaddingisLinked: false,

    buttonText: "Send RSVP",
    btnColor: "#475467",
    btnBgColor: "#fff",
    btnText_FontFamily: "Poppins",
    btnText_FontSize: 18,
    btnText_FontWeight: "500",
    btnText_LetterSpacingUnit: "px",
    btnText_LineHeightUnit: "em",
    btnText_SizeUnit: "px",
    btnText_TextTransform: "uppercase",
    buttonWidth: "full",
    btnHorizontalPositionRange: "",
    btnVerticalPositionRange: "",
    btnAddIcon: false,
    btnBorderRds_Bottom: "0",
    btnBorderRds_Left: "0",
    btnBorderRds_Right: "0",
    btnBorderRds_Top: "0",
    btnBorderBdr_Bottom: "1",
    btnBorderBdr_Left: "1",
    btnBorderBdr_Right: "1",
    btnBorderBdr_Top: "1",
    btnTopSpecingRange: "40",

    wrpPaddingisLinked: false,
    wrpPaddingUnit: "%",
    wrpPaddingTop: "10",
    wrpPaddingBottom: "10",
    wrpPaddingLeft: "20",
    wrpPaddingRight: "20",

    wrpBorderShadowRds_Bottom: "15",
    wrpBorderShadowRds_Left: "15",
    wrpBorderShadowRds_Right: "15",
    wrpBorderShadowRds_Top: "15",
    wrpBorderShadowRds_Unit: "px",
    wrpBorderShadowRds_isLinked: true,

    wrpBorderShadowblur: 45,
    wrpBorderShadowvOffset: 0,
    wrpBorderShadowhOffset: 0,
    wrpBorderShadowshadowColor: "rgba(111, 159, 140, 0.09)",

    wrprBgbackgroundColor: "#FFFFFF",
    wrprBgbackgroundType: "classic",
};

export const blankForm = {
    formStyle: "form-style-classic",
    showInputIcon: false,
    formLayout: "block",
    inlineFormWidthRange: 80,
    rowsGapRange: "15",

    showLabel: true,
    labelColor: "#1D2939",
    requiredColor: "#D92D20",

    fieldAlign: "left",
    fields_FontFamily: "Poppins",
    fields_FontSize: 14,
    fields_FontStyle: "normal",
    fields_FontTransform: "uppercase",
    fields_FontWeight: "400",
    fields_LetterSpacingUnit: "px",
    fields_LineHeightUnit: "em",
    fields_SizeUnit: "px",
    fieldsBorderRds_Top: "4",
    fieldsBorderRds_Left: "4",
    fieldsBorderRds_Bottom: "4",
    fieldsBorderRds_Right: "4",
    fieldsBorderRds_isLinked: true,
    fieldsBorderBdr_Top: "1",
    fieldsBorderBdr_Left: "1",
    fieldsBorderBdr_Bottom: "1",
    fieldsBorderBdr_Right: "1",
    fieldsBorderBdr_isLinked: false,
    fieldsPaddingLeft: "15",
    fieldsPaddingRight: "15",
    fieldsPaddingTop: "15",
    fieldsPaddingBottom: "15",
    fieldsPaddingisLinked: false,

    buttonText: "Submit",
    btnColor: "#fff",
    btnBgColor: "#475467",
    btnText_FontFamily: "",
    btnText_FontSize: 16,
    btnText_FontWeight: "400",
    btnText_LetterSpacingUnit: "px",
    btnText_LineHeightUnit: "em",
    btnText_SizeUnit: "px",
    btnText_TextTransform: "capitalize",
    buttonWidth: "full",
    btnHorizontalPositionRange: "",
    btnVerticalPositionRange: "",
    btnAddIcon: false,
    btnBorderRds_Bottom: "4",
    btnBorderRds_Left: "4",
    btnBorderRds_Right: "4",
    btnBorderRds_Top: "4",
    btnBorderBdr_Bottom: "0",
    btnBorderBdr_Left: "0",
    btnBorderBdr_Right: "0",
    btnBorderBdr_Top: "0",
    btnTopSpecingRange: "20",

    wrpPaddingisLinked: true,
    wrpPaddingUnit: "px",
    wrpPaddingTop: "0",
    wrpPaddingBottom: "0",
    wrpPaddingLeft: "0",
    wrpPaddingRight: "0",

    wrpBorderShadowRds_Bottom: "0",
    wrpBorderShadowRds_Left: "0",
    wrpBorderShadowRds_Right: "0",
    wrpBorderShadowRds_Top: "0",
    wrpBorderShadowRds_Unit: "px",
    wrpBorderShadowRds_isLinked: true,

    wrpBorderShadowblur: 0,
    wrpBorderShadowvOffset: 0,
    wrpBorderShadowhOffset: 0,
    wrpBorderShadowshadowColor: "rgba(111, 159, 140, 0.00)",

    wrprBgbackgroundColor: "#FFFFFF",
    wrprBgbackgroundType: "classic",
};
