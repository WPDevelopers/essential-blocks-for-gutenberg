
import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    ROWS_GAP,
    BTN_PADDING,
    BTN_BORDER,
    LABEL_MARGIN,
    FIELDS_BORDER,
    FIELDS_PADDING,
    SUCCESS_PADDING,
    SUCCESS_BORDER,
    ERROR_PADDING,
    ERROR_BORDER,
    RADIO_SIZE,
    RADIO_SPACING,
    CHECKBOX_SIZE,
    CHECKBOX_SPACING,
    FIXED_WIDTH,
    ICON_POSITION,
    ICON_SIZE,
    ICON_SPACE,
    FORM_CUSTOM_WIDTH,
    INPUT_ICON_SIZE,
    BTN_TOP_SPECING,
    BTN_VERTICAL_POSITION,
    BTN_HORIZONTAL_POSITION,
    INPUT_WIDTH,
} from "./constants";

import {
    BTN_TEXT,
    LABEL_TYPOGRAPHY,
    FIELDS_TEXT,
    SUCCESS_TYPO,
    ERROR_TYPO,
    RADIO_TEXT,
    CHECKBOX_TEXT,
    FIELDS_TEXT_VALIDATION,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateBackgroundControlStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        resOption,

        btnColor,
        btnHvColor,
        btnBgColor,
        btnBgHvColor,

        labelColor,
        fieldsColor,
        fieldsPlaceholderColor,
        fieldsBgColor,
        successColor,
        successBgColor,
        errorColor,
        errorBgColor,
        radioColor,
        radioBgColor,
        radioBrColor,
        radioBrCheckedColor,
        radioSizeRange,
        TABradioSizeRange,
        MOBradioSizeRange,
        radioBorderborderColor,
        radioBorder,
        checkboxColor,
        checkboxBgColor,
        checkboxBrColor,
        checkboxBrCheckedColor,
        checkboxSizeRange,
        TABcheckboxSizeRange,
        MOBcheckboxSizeRange,
        checkboxBorderborderColor,
        checkboxBorder,
        dateSelectedColor,
        dateBgColor,
        fieldsValidationBorderColor,
        fieldsValidationColor,
        requiredColor,
        buttonAlign,
        buttonWidth,
        btnAddIcon,
        iconPosition,
        formWidth,
        formAlign,
        labelAlign,
        validationAlign,
        messageAlign,
        fieldAlign,
        btnVerticalAlign,
        formLayout,
        btnHorizontalPositionRange,
        TABbtnHorizontalPositionRange,
        MOBbtnHorizontalPositionRange,
        btnHorizontalPositionUnit,
        btnVerticalPositionRange,
        btnVerticalPositionUnit,

        inlineFormWidthRange,
        TABinlineFormWidthRange,
        MOBinlineFormWidthRange,
        inputIconColor,
        fieldsPaddingLeft,
        TABfieldsPaddingLeft,
        MOBfieldsPaddingLeft,
        fieldsPaddingUnit,
        inputIconSizeRange,
        TABinputIconSizeRange,
        MOBinputIconSizeRange,
        showInputIcon,
        fieldsPaddingTop,
        formStyle,
    } = attributes;

    //
    // CSS/styling Codes Starts from Here

    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    const {
        styesDesktop: wrapperBDShadowDesktop,
        styesTab: wrapperBDShadowTab,
        styesMobile: wrapperBDShadowMobile,
        stylesHoverDesktop: wrapperBDShadowHoverDesktop,
        stylesHoverTab: wrapperBDShadowHoverTab,
        stylesHoverMobile: wrapperBDShadowHoverMobile,
        transitionStyle: wrapperBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: WRAPPER_BORDER_SHADOW,
        attributes,
        // noShadow: true,
    });

    //Generate Background
    const {
        backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrapperBackgroundStylesTab,
        hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
        backgroundStylesMobile: wrapperBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
        bgTransitionStyle: wrapperBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WRAPPER_BG,
        noOverlay: true,
    });

    const {
        rangeStylesDesktop: rowGapStylesDesktop,
        rangeStylesTab: rowGapStylesTab,
        rangeStylesMobile: rowGapStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: ROWS_GAP,
        property: "gap",
        attributes,
        customUnit: "px",
    });

    const {
        typoStylesDesktop: btnTypoStylesDesktop,
        typoStylesTab: btnTypoStylesTab,
        typoStylesMobile: btnTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: BTN_TEXT,
        defaultFontSize: 16,
    });
    const {
        dimensionStylesDesktop: btnPaddingStylesDesktop,
        dimensionStylesTab: btnPaddingStylesTab,
        dimensionStylesMobile: btnPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: BTN_PADDING,
        styleFor: "padding",
        attributes,
    });
    const {
        styesDesktop: btnBDShadowDesktop,
        styesTab: btnBDShadowTab,
        styesMobile: btnBDShadowMobile,
        stylesHoverDesktop: btnBDShadowHoverDesktop,
        stylesHoverTab: btnBDShadowHoverTab,
        stylesHoverMobile: btnBDShadowHoverMobile,
        transitionStyle: btnBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: BTN_BORDER,
        attributes,
        // noShadow: true,
    });
    const {
        rangeStylesDesktop: formWidthDesktop,
        rangeStylesTab: formWidthTab,
        rangeStylesMobile: formWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: FORM_CUSTOM_WIDTH,
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: inputWidthDesktop,
        rangeStylesTab: inputWidthTab,
        rangeStylesMobile: inputWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: INPUT_WIDTH,
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: buttonWidthDesktop,
        rangeStylesTab: buttonWidthTab,
        rangeStylesMobile: buttonWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: FIXED_WIDTH,
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SIZE,
        property: "font-size",
        attributes,
        customUnit: "px",
    });
    const {
        rangeStylesDesktop: btnTopSpecingDesktop,
        rangeStylesTab: btnTopSpecingTab,
        rangeStylesMobile: btnTopSpecingMobile,
    } = generateResponsiveRangeStyles({
        controlName: BTN_TOP_SPECING,
        property: "margin-top",
        attributes,
        customUnit: "px",
    });
    const {
        rangeStylesDesktop: btnHorizontalPositionDesktop,
        rangeStylesTab: btnHorizontalPositionTab,
        rangeStylesMobile: btnHorizontalPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: BTN_HORIZONTAL_POSITION,
        property: "right",
        attributes,
    });
    const {
        rangeStylesDesktop: btnVerticalPositionDesktop,
        rangeStylesTab: btnVerticalPositionTab,
        rangeStylesMobile: btnVerticalPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: BTN_VERTICAL_POSITION,
        property: "marign-top",
        attributes,
    });

    // button gap left
    const {
        rangeStylesDesktop: iconGapLeftDesktop,
        rangeStylesTab: iconGapLeftTab,
        rangeStylesMobile: iconGapLeftMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SPACE,
        property: "margin-left",
        attributes,
        customUnit: "px",
    });

    const {
        rangeStylesDesktop: iconGapRightDesktop,
        rangeStylesTab: iconGapRightTab,
        rangeStylesMobile: iconGapRightMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SPACE,
        property: "margin-right",
        attributes,
        customUnit: "px",
    });

    const {
        typoStylesDesktop: labelTypoStylesDesktop,
        typoStylesTab: labelTypoStylesTab,
        typoStylesMobile: labelTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: LABEL_TYPOGRAPHY,
        defaultFontSize: 15,
    });
    const {
        dimensionStylesDesktop: labelMarginStylesDesktop,
        dimensionStylesTab: labelMarginStylesTab,
        dimensionStylesMobile: labelMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: LABEL_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        typoStylesDesktop: successTypoStylesDesktop,
        typoStylesTab: successTypoStylesTab,
        typoStylesMobile: successTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: SUCCESS_TYPO,
        defaultFontSize: 20,
    });
    const {
        dimensionStylesDesktop: successPaddingStylesDesktop,
        dimensionStylesTab: successPaddingStylesTab,
        dimensionStylesMobile: successPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: SUCCESS_PADDING,
        styleFor: "padding",
        attributes,
    });
    const {
        styesDesktop: successBDShadowDesktop,
        styesTab: successBDShadowTab,
        styesMobile: successBDShadowMobile,
        stylesHoverDesktop: successBDShadowHoverDesktop,
        stylesHoverTab: successBDShadowHoverTab,
        stylesHoverMobile: successBDShadowHoverMobile,
        transitionStyle: successBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: SUCCESS_BORDER,
        attributes,
        // noShadow: true,
    });
    const {
        typoStylesDesktop: errorTypoStylesDesktop,
        typoStylesTab: errorTypoStylesTab,
        typoStylesMobile: errorTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: ERROR_TYPO,
        defaultFontSize: 20,
    });
    const {
        dimensionStylesDesktop: errorPaddingStylesDesktop,
        dimensionStylesTab: errorPaddingStylesTab,
        dimensionStylesMobile: errorPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: ERROR_PADDING,
        styleFor: "padding",
        attributes,
    });
    const {
        styesDesktop: errorBDShadowDesktop,
        styesTab: errorBDShadowTab,
        styesMobile: errorBDShadowMobile,
        stylesHoverDesktop: errorBDShadowHoverDesktop,
        stylesHoverTab: errorBDShadowHoverTab,
        stylesHoverMobile: errorBDShadowHoverMobile,
        transitionStyle: errorBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: ERROR_BORDER,
        attributes,
        // noShadow: true,
    });

    const {
        typoStylesDesktop: fieldsTypoStylesDesktop,
        typoStylesTab: fieldsTypoStylesTab,
        typoStylesMobile: fieldsTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: FIELDS_TEXT,
        defaultFontSize: 14,
    });
    const {
        typoStylesDesktop: fieldsValidationTypoStylesDesktop,
        typoStylesTab: fieldsValidationTypoStylesTab,
        typoStylesMobile: fieldsValidationTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: FIELDS_TEXT_VALIDATION,
        defaultFontSize: 14,
    });

    const {
        dimensionStylesDesktop: fieldsPaddingStylesDesktop,
        dimensionStylesTab: fieldsPaddingStylesTab,
        dimensionStylesMobile: fieldsPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: FIELDS_PADDING,
        styleFor: "padding",
        attributes,
    });
    const {
        styesDesktop: fieldsBDShadowDesktop,
        styesTab: fieldsBDShadowTab,
        styesMobile: fieldsBDShadowMobile,
        stylesHoverDesktop: fieldsBDShadowHoverDesktop,
        stylesHoverTab: fieldsBDShadowHoverTab,
        stylesHoverMobile: fieldsBDShadowHoverMobile,
        transitionStyle: fieldsBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: FIELDS_BORDER,
        attributes,
        // noShadow: true,
    });

    const {
        typoStylesDesktop: radioTypoStylesDesktop,
        typoStylesTab: radioTypoStylesTab,
        typoStylesMobile: radioTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: RADIO_TEXT,
        defaultFontSize: 14,
    });
    const {
        rangeStylesDesktop: radioWidthStylesDesktop,
        rangeStylesTab: radioWidthStylesTab,
        rangeStylesMobile: radioWidthStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: RADIO_SIZE,
        property: "Width",
        attributes,
        customUnit: "px",
    });
    const {
        rangeStylesDesktop: radioSpacingStylesDesktop,
        rangeStylesTab: radioSpacingStylesTab,
        rangeStylesMobile: radioSpacingStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: RADIO_SPACING,
        property: "margin-bottom",
        attributes,
        customUnit: "px",
    });

    const {
        typoStylesDesktop: checkboxTypoStylesDesktop,
        typoStylesTab: checkboxTypoStylesTab,
        typoStylesMobile: checkboxTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: CHECKBOX_TEXT,
        defaultFontSize: 14,
    });
    const {
        rangeStylesDesktop: checkboxWidthStylesDesktop,
        rangeStylesTab: checkboxWidthStylesTab,
        rangeStylesMobile: checkboxWidthStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: CHECKBOX_SIZE,
        property: "Width",
        attributes,
        customUnit: "px",
    });
    const {
        rangeStylesDesktop: checkboxSpacingStylesDesktop,
        rangeStylesTab: checkboxSpacingStylesTab,
        rangeStylesMobile: checkboxSpacingStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: CHECKBOX_SPACING,
        property: "margin-bottom",
        attributes,
        customUnit: "px",
    });

    const {
        rangeStylesDesktop: inputIconSizeStylesDesktop,
        rangeStylesTab: inputIconSizeStylesTab,
        rangeStylesMobile: inputIconSizeStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: INPUT_ICON_SIZE,
        property: "font-size",
        attributes,
        customUnit: "px",
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-form-wrapper.${blockId}{
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBDShadowDesktop}
			transition: ${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}
		.eb-form-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperBDShadowHoverDesktop}
		}
	`;

    const wrapperStylesTab = `
		.eb-form-wrapper.${blockId}{
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${wrapperBDShadowTab}
		}
		.eb-form-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${wrapperBDShadowHoverTab}
		}

	`;
    const wrapperStylesMobile = `
		.eb-form-wrapper.${blockId}{
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBDShadowMobile}
		}
		.eb-form-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${wrapperBDShadowHoverMobile}
		}

	`;

    const formDesktop = `
        ${formWidth === "full"
            ? `
                .eb-parent-${blockId} {
                    width: 100%;
                }`
            : `.eb-parent-${blockId} {
                        ${formWidthDesktop}
                    }`
        }

        ${formAlign === "left"
            ? `.eb-parent-${blockId}{
                        justify-content: left;
                    }`
            : ""
        }
        ${formAlign === "center"
            ? `.eb-parent-${blockId}{
                        justify-content: center;
                    }`
            : ""
        }
        ${formAlign === "right"
            ? `.eb-parent-${blockId}{
                        justify-content: right;
                    }`
            : ""
        }
	`;
    const formTab = `

        ${formWidth === "full"
            ? `
                .eb-form-wrapper.${blockId} {
                    width: 100%;
                }`
            : `.eb-form-wrapper.${blockId} {
                        ${formWidthTab}
                    }`
        }
	`;
    const formMobile = `

        ${formWidth === "full"
            ? `
                .eb-form-wrapper.${blockId} {
                    width: 100%;
                }`
            : `.eb-form-wrapper.${blockId} {
                        ${formWidthMobile}
                    }`
        }
	`;

    const labelDesktop = `
		.eb-form-wrapper.${blockId} .eb-field-wrapper > label,
        .eb-form-wrapper.${blockId} .eb-radio-inputarea,
        .eb-form-wrapper.${blockId} .eb-field-wrapper input ~ label,
        .eb-form-wrapper.${blockId} .eb-field-wrapper textarea ~ label {
			color: ${labelColor};
            text-align: ${labelAlign};
            ${labelTypoStylesDesktop}
            ${labelMarginStylesDesktop}
		}
        .eb-form-wrapper.${blockId} .eb-radio-inputarea label {
            margin-bottom: 0;
        }
        .eb-form-wrapper.${blockId} .eb-required{
            color: ${requiredColor};
        }

        ${formStyle == "form-style-modern"
            ? `
                .eb-form-wrapper.${blockId} .eb-field-input-wrap label,
                .eb-form-wrapper.${blockId} .eb-form.form-style-modern input:focus ~ label,
                .eb-form-wrapper.${blockId} .eb-form.form-style-modern input:valid ~ label,
                .eb-form-wrapper.${blockId} .eb-form.form-style-modern textarea:focus ~ label {
                    left: calc(${inputIconSizeRange}px + (${fieldsPaddingLeft}${fieldsPaddingUnit} * 1.6));
                }

                .eb-form-wrapper.${blockId} .eb-form.form-style-modern .eb-field-input-wrap textarea ~ label {
                    top: calc(${fieldsPaddingTop}${fieldsPaddingUnit} + 7px);
                }

                `
            : ""
        }
	`;
    const labelTab = `
		.eb-form-wrapper.${blockId} .eb-field-wrapper > label {
            ${labelTypoStylesTab}
            ${labelMarginStylesTab}
		}
	`;
    const labelMobile = `
		.eb-form-wrapper.${blockId} .eb-field-wrapper > label {
            ${labelTypoStylesMobile}
            ${labelMarginStylesMobile}
		}
	`;

    const fieldsDesktop = `
        .wp-admin .eb-form-wrapper.${blockId} .block-editor-block-list__layout,
        .eb-form-wrapper.${blockId} .eb-form-fields {
            ${rowGapStylesDesktop}
        }
		.eb-form-wrapper.${blockId} .eb-field-wrapper .eb-field-input {
			color: ${fieldsColor};
			background-color: ${fieldsBgColor};
            text-align: ${fieldAlign};
            ${fieldsTypoStylesDesktop}
            ${fieldsPaddingStylesDesktop}
            ${fieldsBDShadowDesktop}
            ${inputWidthDesktop}
		}
		.eb-form-wrapper.${blockId} .eb-field-wrapper .eb-field-input:hover,
        .eb-form-wrapper.${blockId} .eb-field-wrapper .eb-field-input:focus {
            ${fieldsBDShadowHoverDesktop}
		}
		.eb-form-wrapper.${blockId} .eb-field-wrapper .eb-field-input::placeholder {
			color: ${fieldsPlaceholderColor};
		}

		.eb-form-wrapper.${blockId} .eb-field-wrapper.eb-validation-error .eb-form-validation {
            ${fieldsValidationTypoStylesDesktop}
			color: ${fieldsValidationColor};
            text-align: ${validationAlign};
		}
		.eb-form-wrapper.${blockId} .eb-field-wrapper.eb-validation-error .eb-field-input {
			border-color: ${fieldsValidationBorderColor};
		}



        ${showInputIcon
            ? `
                .eb-form-wrapper.${blockId} .eb-field-wrapper .eb-input-icon {
                    ${inputIconSizeStylesDesktop}
                    color: ${inputIconColor};
                    left: ${fieldsPaddingLeft}${fieldsPaddingUnit};
                }
                .eb-form-wrapper.${blockId} .eb-field-wrapper.eb-textarea-field-wrapper .eb-input-icon {top: ${fieldsPaddingTop}${fieldsPaddingUnit};}
                .eb-form-wrapper.${blockId} .eb-field-wrapper .eb-field-input {
                    padding-left: calc(${inputIconSizeRange}px + (${fieldsPaddingLeft}${fieldsPaddingUnit} * 1.6));
                }`
            : ""
        }


	`;
    const fieldsTab = `
        .wp-admin .eb-form-wrapper.${blockId} .block-editor-block-list__layout,
        .eb-form-wrapper.${blockId} .eb-form-fields {
            ${rowGapStylesTab ? rowGapStylesTab : rowGapStylesDesktop}
        }
		.eb-form-wrapper.${blockId} .eb-field-wrapper .eb-field-input {
            ${fieldsTypoStylesTab}
            ${fieldsPaddingStylesTab}
            ${fieldsBDShadowTab}
            ${inputWidthTab}
		}
        .eb-form-wrapper.${blockId} .eb-form-validation {
            ${fieldsValidationTypoStylesTab}
		}
	`;

    const fieldsMobile = `
        .wp-admin .eb-form-wrapper.${blockId} .block-editor-block-list__layout,
        .eb-form-wrapper.${blockId} .eb-form-fields {
            ${rowGapStylesMobile ? rowGapStylesMobile : rowGapStylesDesktop}
        }
		.eb-form-wrapper.${blockId} .eb-field-wrapper .eb-field-input {
            ${fieldsTypoStylesMobile}
            ${fieldsPaddingStylesMobile}
            ${fieldsBDShadowMobile}
            ${inputWidthMobile}
		}
        .eb-form-wrapper.${blockId} .eb-form-validation {
            ${fieldsValidationTypoStylesMobile}
		}
	`;

    const radioDesktop = `
		.eb-form-wrapper.${blockId} .eb-form-field input[type=radio] {
			background-color: ${radioBgColor};
			border-color: ${radioBrColor};
			border-width: ${radioBorder}px;
            height: ${radioSizeRange}px;
            ${radioWidthStylesDesktop}
		}
		.eb-form-wrapper.${blockId} .eb-form-field input[type=radio]:checked {
			border-color: ${radioBrCheckedColor};
		}
		.eb-form-wrapper.${blockId} .eb-radio-inputarea label {
            ${radioTypoStylesDesktop}
            color: ${radioColor}
		}
        .eb-form-wrapper.${blockId} .eb-radio-field-wrapper .eb-radio-inputarea {
            ${radioSpacingStylesDesktop}
        }

        .eb-form-wrapper.${blockId} .eb-form-field input[type=radio]::before {
            width: calc(${radioSizeRange}px / 2);
            height: calc(${radioSizeRange}px / 2);
            background-color: ${radioBrCheckedColor};
        }
	`;
    const radioTab = `
		.eb-form-wrapper.${blockId} .eb-form-field input[type=radio] {
            height: ${TABradioSizeRange}px;
            ${radioWidthStylesTab}
		}
		.eb-form-wrapper.${blockId} .eb-radio-inputarea label {
            ${radioTypoStylesTab}
		}
        .eb-form-wrapper.${blockId} .eb-radio-field-wrapper .eb-radio-inputarea {
            ${radioSpacingStylesTab}
        }
        .eb-form-wrapper.${blockId} .eb-form-field input[type=radio]::before {
            width: calc(${TABradioSizeRange}px / 2);
            height: calc(${TABradioSizeRange}px / 2);
        }
	`;
    const radioMobile = `
		.eb-form-wrapper.${blockId} .eb-form-field input[type=radio] {
            height: ${MOBradioSizeRange}px;
            ${radioWidthStylesMobile}
		}
		.eb-form-wrapper.${blockId} .eb-radio-inputarea label {
            ${radioTypoStylesMobile}
		}
        .eb-form-wrapper.${blockId} .eb-radio-field-wrapper .eb-radio-inputarea {
            ${radioSpacingStylesMobile}
        }
        .eb-form-wrapper.${blockId} .eb-form-field input[type=radio]::before {
            width: calc(${MOBradioSizeRange}px / 2);
            height: calc(${MOBradioSizeRange}px / 2);
        }
	`;
    const checkboxDesktop = `
		.eb-form-wrapper.${blockId} .eb-field-wrapper input[type=checkbox] {
			background-color: ${checkboxBgColor};
			border-color: ${checkboxBrColor};
			border-width: ${checkboxBorder}px;
            height: ${checkboxSizeRange}px;
            ${checkboxWidthStylesDesktop}
		}
		.eb-form-wrapper.${blockId} .eb-field-wrapper input[type=checkbox]:checked {
			border-color: ${checkboxBrCheckedColor};
		}
		.eb-form-wrapper.${blockId} .eb-checkbox-inputarea label {
            ${checkboxTypoStylesDesktop}
            color: ${checkboxColor}
		}
        .eb-form-wrapper.${blockId} .eb-checkbox-field-wrapper .eb-checkbox-inputarea {
            ${checkboxSpacingStylesDesktop}
        }
        .eb-form-wrapper.${blockId} .eb-field-wrapper input[type=checkbox]::before {
            color: ${checkboxBrCheckedColor};
            font-size: calc(${checkboxSizeRange}px /2);
        }
	`;

    const checkboxTab = `
		.eb-form-wrapper.${blockId} .eb-form-field input[type=checkbox] {
            height: ${TABcheckboxSizeRange}px;
            ${checkboxWidthStylesTab}
		}

		.eb-form-wrapper.${blockId} .eb-checkbox-inputarea label {
            ${checkboxTypoStylesTab}
		}
        .eb-form-wrapper.${blockId} .eb-checkbox-field-wrapper .eb-checkbox-inputarea {
            ${checkboxSpacingStylesTab}
        }
        .eb-form-wrapper.${blockId} .eb-field-wrapper input[type=checkbox]::before {
            font-size: calc(${TABcheckboxSizeRange}px /1.4);
        }
	`;
    const checkboxMobile = `
		.eb-form-wrapper.${blockId} .eb-form-field input[type=checkbox] {
            height: ${MOBcheckboxSizeRange}px;
            ${checkboxWidthStylesMobile}
		}
		.eb-form-wrapper.${blockId} .eb-checkbox-inputarea label {
            ${checkboxTypoStylesMobile}
		}
        .eb-form-wrapper.${blockId} .eb-checkbox-field-wrapper .eb-checkbox-inputarea {
            ${checkboxSpacingStylesMobile}
        }
        .eb-form-wrapper.${blockId} .eb-field-wrapper input[type=checkbox]::before {
            font-size: calc(${MOBcheckboxSizeRange}px /1.4);
        }
	`;

    const dateDesktop = `
		.eb-form-wrapper.${blockId} .eb-datetime-field-wrapper .react-datepicker .react-datepicker__day--selected {
			background-color: ${dateBgColor};
			color: ${dateSelectedColor};
		}
	`;

    const btnDesktop = `
        ${buttonAlign === "left"
            ? `.eb-form-wrapper.${blockId} .eb-form-submit {
                        justify-content: left;
                    }`
            : ""
        }
        ${buttonAlign === "center"
            ? `.eb-form-wrapper.${blockId} .eb-form-submit {
                        justify-content: center;
                    }`
            : ""
        }
        ${buttonAlign === "right"
            ? `.eb-form-wrapper.${blockId} .eb-form-submit {
                        justify-content: right;
                    }`
            : ""
        }
        ${formLayout === "inline"
            ? `.eb-form-wrapper.${blockId} .eb-form-submit {
                        align-items: ${btnVerticalAlign};
                    }
                    .eb-form-wrapper.${blockId} .eb-form.form-layout-inline .eb-form-fields {
                        flex-basis: ${inlineFormWidthRange}%;
                    }
                    .eb-form-wrapper.${blockId} .eb-form.form-layout-inline .eb-form-submit {
                        flex-basis: calc(100% - ${inlineFormWidthRange}%);
                    }

                    ${btnHorizontalPositionRange !== "undefined"
                ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
                                    position: relative;
                                    right: ${btnHorizontalPositionRange}${btnHorizontalPositionUnit};
                                }`
                : ""
            }
                    ${btnVerticalAlign === "flex-start"
                ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
                                    margin-top: ${btnVerticalPositionRange}${btnVerticalPositionUnit};
                                }`
                : ""
            }
                    ${btnVerticalAlign === "flex-end"
                ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
                                    margin-bottom: ${btnVerticalPositionRange}${btnVerticalPositionUnit};
                                }`
                : ""
            }
                    `
            : ""
        }
        ${formLayout === "block"
            ? `.eb-form-wrapper.${blockId} .eb-form-submit{
                        ${btnTopSpecingDesktop};
                    }
                    .eb-form-wrapper.${blockId}{
                        flex-direction: column;
                    }
                    `
            : ""
        }


		.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button {
			color: ${btnColor};
			background-color: ${btnBgColor};
            ${btnTypoStylesDesktop}
            ${btnPaddingStylesDesktop}
            ${btnBDShadowDesktop}
		}
		.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button:hover {
			color: ${btnHvColor};
			background-color: ${btnBgHvColor};
            ${btnBDShadowHoverDesktop}
		}

        ${buttonWidth !== "auto"
            ? buttonWidth === "full"
                ? `
					.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button {
						width: 100%;
					}`
                : `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
							${buttonWidthDesktop}
						}`
            : ""
        }

        ${btnAddIcon
            ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button .eb-button-icon {
					${iconSizeDesktop}
					${iconPosition === "left" ? iconGapRightDesktop : iconGapLeftDesktop}
				}`
            : ""
        }

	`;

    const btnTab = `
        ${formLayout === "inline"
            ? `
                        .eb-form-wrapper.${blockId} .eb-form.form-layout-inline .eb-form-fields {
                            flex-basis: ${TABinlineFormWidthRange}%;
                        }
                        .eb-form-wrapper.${blockId} .eb-form.form-layout-inline .eb-form-submit {
                            flex-basis: calc(100% - ${TABinlineFormWidthRange}%);
                        }

                        ${btnHorizontalPositionRange !== "undefined"
                ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
                                        position: relative;
                                        right: ${btnHorizontalPositionRange}${btnHorizontalPositionUnit};
                                    }`
                : ""
            }
                        ${btnVerticalAlign === "flex-start"
                ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
                                        margin-top: ${btnVerticalPositionRange}${btnVerticalPositionUnit};
                                    }`
                : ""
            }
                        ${btnVerticalAlign === "flex-end"
                ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
                                        margin-bottom: ${btnVerticalPositionRange}${btnVerticalPositionUnit};
                                    }`
                : ""
            }
                        `
            : ""
        }
        ${formLayout === "block"
            ? `.eb-form-wrapper.${blockId} .eb-form-submit {
                            ${btnTopSpecingTab};
                        }
                        `
            : ""
        }
		.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button {
            ${btnTypoStylesTab}
            ${btnPaddingStylesTab}
            ${btnBDShadowTab}
		}
        .eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button:hover {
            ${btnBDShadowHoverTab}
		}

        ${buttonWidth !== "auto"
            ? buttonWidth === "full"
                ? `
					.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button {
						width: 100%;
					}`
                : `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
							${buttonWidthTab}
						}`
            : ""
        }

        ${btnAddIcon
            ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button .eb-button-icon {
					${iconSizeTab}
					${iconPosition === "left" ? iconGapRightTab : iconGapLeftTab}
				}`
            : ""
        }
	`;
    const btnMobile = `
        ${formLayout === "block"
            ? `.eb-form-wrapper.${blockId} .eb-form-submit {
                                ${btnTopSpecingMobile};
                            }
                            `
            : ""
        }
		.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button {
            ${btnTypoStylesMobile}
            ${btnPaddingStylesMobile}
            ${btnBDShadowMobile}
		}
        .eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button:hover {
            ${btnBDShadowHoverMobile}
		}

        ${buttonWidth !== "auto"
            ? buttonWidth === "full"
                ? `
					.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button {
						width: 100%;
					}`
                : `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button{
							${buttonWidthMobile}
						}`
            : ""
        }

        ${btnAddIcon
            ? `.eb-form-wrapper.${blockId} .eb-form-submit .eb-form-submit-button .eb-button-icon {
					${iconSizeMobile}
					${iconPosition === "left" ? iconGapRightMobile : iconGapLeftMobile}
				}`
            : ""
        }
	`;

    const successDesktop = `
		.eb-form-wrapper.${blockId} .eb_form_submit_response {
            text-align: ${messageAlign};
        }
		.eb-form-wrapper.${blockId} .eb_form_submit_response.success {
			color: ${successColor};
			background-color: ${successBgColor};
            ${successTypoStylesDesktop}
            ${successPaddingStylesDesktop}
            ${successBDShadowDesktop}
            ${successBDShadowTransition}
		}
		.eb-form-wrapper.${blockId} .eb_form_submit_response.success:hover {
            ${successBDShadowHoverDesktop}
		}
		.eb-form-wrapper.${blockId} .eb_form_submit_response.error {
			color: ${errorColor};
			background-color: ${errorBgColor};
            ${errorTypoStylesDesktop}
            ${errorPaddingStylesDesktop}
            ${errorBDShadowDesktop}
            ${errorBDShadowTransition}
		}
		.eb-form-wrapper.${blockId} .eb_form_submit_response.error:hover {
            ${errorBDShadowHoverDesktop}
		}
	`;
    const successTab = `
		.eb-form-wrapper.${blockId} .eb_form_submit_response.success {
            ${successTypoStylesTab}
            ${successPaddingStylesTab}
            ${successBDShadowTab}
		}
        .eb-form-wrapper.${blockId} .eb_form_submit_response.success:hover {
            ${successBDShadowHoverTab}
		}
        .eb-form-wrapper.${blockId} .eb_form_submit_response.error {
            ${errorTypoStylesTab}
            ${errorPaddingStylesTab}
            ${errorBDShadowTab}
		}
        .eb-form-wrapper.${blockId} .eb_form_submit_response.error:hover {
             ${errorBDShadowHoverTab}
		}
	`;
    const successMobile = `
		.eb-form-wrapper.${blockId} .eb_form_submit_response.success {
            ${successTypoStylesMobile}
            ${successPaddingStylesMobile}
            ${successBDShadowMobile}
		}
        .eb-form-wrapper.${blockId} .eb_form_submit_response.success:hover {
            ${successBDShadowHoverMobile}
		}
        .eb-form-wrapper.${blockId} .eb_form_submit_response.error {
            ${errorTypoStylesMobile}
            ${errorPaddingStylesMobile}
            ${errorBDShadowMobile}
		}
        .eb-form-wrapper.${blockId} .eb_form_submit_response.error:hover {
            ${errorBDShadowHoverMobile}
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${formDesktop}
		${labelDesktop}
		${fieldsDesktop}
		${radioDesktop}
		${checkboxDesktop}
		${dateDesktop}
		${btnDesktop}
		${successDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${formTab}
		${labelTab}
        ${fieldsTab}
		${radioTab}
		${checkboxTab}
		${btnTab}
		${successTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${labelMobile}
		${formMobile}
		${fieldsMobile}
		${radioMobile}
		${checkboxMobile}
		${btnMobile}
		${successMobile}
	`);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}
