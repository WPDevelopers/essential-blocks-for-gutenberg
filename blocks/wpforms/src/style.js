const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBControls;

import {
    LABEL_SPACING,
    FORM_LISTS,
    INPUT_HEIGHT,
    INPUT_TEXTAREA_INDENT,
    INPUT_WIDTH,
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
    FORM_PADDING,
    FORM_MARGIN,
    FORM_BORDER,
} from "./constants";
import {
    typoPrefix_label,
    typoPrefix_input,
    typoPrefix_submit_btn,
    typoPrefix_success,
    typoPrefix_error,
} from "./constants/typographyPrefixConstants";

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        formActive,
        formId,
        labelColor,
        inputBackgroundColor,
        inputTextColor,
        inputFocusBackgroundColor,
        placeHolderColor,
        btnAlignment,
        btnWidthType,
        btnBackgroundColor,
        btnColor,
        btnBackgroundHoverColor,
        btnHoverColor,
        successBackgroundColor,
        successColor,
        errorColor,
        customCheckboxStyle,
        checkboxColor,
        checkboxBorderColor,
        checkboxCheckedColor,
        formBackgroundColor,
        formAlignment,
        showLabels,
        showPlaceholder,
        showErrorMessage,
        classHook,
        cover
    } = attributes;

    // label margin
    const {
        dimensionStylesDesktop: lblMarginDesktop,
        dimensionStylesTab: lblMarginTab,
        dimensionStylesMobile: lblMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: LABEL_SPACING,
        styleFor: "margin",
        attributes,
    });

    // label typography
    const {
        typoStylesDesktop: labelTypoStylesDesktop,
        typoStylesTab: labelTypoStylesTab,
        typoStylesMobile: labelTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_label,
    });

    // input & textarea typography
    const {
        typoStylesDesktop: inputTypoStylesDesktop,
        typoStylesTab: inputTypoStylesTab,
        typoStylesMobile: inputTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_input,
    });

    // text indent
    const {
        rangeStylesDesktop: inputTextIndentDesktop,
        rangeStylesTab: inputTextIndentTab,
        rangeStylesMobile: inputTextIndentMobile,
    } = generateResponsiveRangeStyles({
        controlName: INPUT_TEXTAREA_INDENT,
        property: "text-indent",
        attributes,
    });

    // input field width
    const {
        rangeStylesDesktop: inputWidthDesktop,
        rangeStylesTab: inputWidthTab,
        rangeStylesMobile: inputWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: INPUT_WIDTH,
        property: "width",
        attributes,
    });

    // input field height
    const {
        rangeStylesDesktop: inputHeightDesktop,
        rangeStylesTab: inputHeightTab,
        rangeStylesMobile: inputHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: INPUT_HEIGHT,
        property: "height",
        attributes,
    });

    // textarea field width
    const {
        rangeStylesDesktop: textareaWidthDesktop,
        rangeStylesTab: textareaWidthTab,
        rangeStylesMobile: textareaWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: TEXTAREA_WIDTH,
        property: "width",
        attributes,
    });

    // textarea field height
    const {
        rangeStylesDesktop: textareaHeightDesktop,
        rangeStylesTab: textareaHeightTab,
        rangeStylesMobile: textareaHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: TEXTAREA_HEIGHT,
        property: "height",
        attributes,
    });

    // input/textarea padding
    const {
        dimensionStylesDesktop: inpTxtPaddingDesktop,
        dimensionStylesTab: inpTxtPaddingTab,
        dimensionStylesMobile: inpTxtPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: INPUT_TEXTAREA_PADDING,
        styleFor: "padding",
        attributes,
    });

    // input/textarea spacing
    const {
        rangeStylesDesktop: inputTextSpaceDesktop,
        rangeStylesTab: inputTextSpaceTab,
        rangeStylesMobile: inputTextSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: INPUT_TEXTAREA_SPACING,
        property: "margin-bottom",
        attributes,
    });

    // input/textarea border shadow
    const {
        styesDesktop: inpTxtBrdShaDesktop,
        styesTab: inpTxtBrdShaTab,
        styesMobile: inpTxtBrdShaMobile,
        stylesHoverDesktop: inpTxtBrdShaHoverDesktop,
        stylesHoverTab: inpTxtBrdShaHoverTab,
        stylesHoverMobile: inpTxtBrdShaHoverMobile,
        transitionStyle: inpTxtBrdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: INPUT_TEXTAREA_BORDER,
        attributes,
    });

    // submit button width
    const {
        rangeStylesDesktop: submitBtnWidthDesktop,
        rangeStylesTab: submitBtnWidthTab,
        rangeStylesMobile: submitBtnWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: SUBMIT_BUTTON_WIDTH,
        property: "width",
        attributes,
    });

    // submit button typography
    const {
        typoStylesDesktop: submutBtnTypoStylesDesktop,
        typoStylesTab: submutBtnTypoStylesTab,
        typoStylesMobile: submutBtnTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_submit_btn,
    });

    // submit button padding
    const {
        dimensionStylesDesktop: submitBtnPaddingDesktop,
        dimensionStylesTab: submitBtnPaddingTab,
        dimensionStylesMobile: submitBtnPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: SUBMIT_BUTTON_PADDING,
        styleFor: "padding",
        attributes,
    });

    // submit button margin
    const {
        dimensionStylesDesktop: submitBtnMarginDesktop,
        dimensionStylesTab: submitBtnMarginTab,
        dimensionStylesMobile: submitBtnMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: SUBMIT_BUTTON_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // submit button border & shadow
    const {
        styesDesktop: btnBdShadowStyesDesktop,
        styesTab: btnBdShadowStyesTab,
        styesMobile: btnBdShadowStyesMobile,
        stylesHoverDesktop: btnBdShadowStylesHoverDesktop,
        stylesHoverTab: btnBdShadowStylesHoverTab,
        stylesHoverMobile: btnBdShadowStylesHoverMobile,
        transitionStyle: btnBdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: SUBMIT_BUTTON_BORDER,
        attributes,
    });

    // success typography
    const {
        typoStylesDesktop: successTypoStylesDesktop,
        typoStylesTab: successTypoStylesTab,
        typoStylesMobile: successTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_success,
    });

    // success border
    const {
        styesDesktop: successBorderDesktop,
        styesTab: successBorderTab,
        styesMobile: successBorderMobile,
        stylesHoverDesktop: successBorderHoverDesktop,
        stylesHoverTab: successBorderHoverTab,
        stylesHoverMobile: successBorderHoverMobile,
        transitionStyle: successTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: SUCCESS_BORDER,
        attributes,
        noShadow: true,
    });

    // error typography
    const {
        typoStylesDesktop: errorTypoStylesDesktop,
        typoStylesTab: errorTypoStylesTab,
        typoStylesMobile: errorTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_error,
    });

    // error padding
    const {
        dimensionStylesDesktop: errorPaddingDesktop,
        dimensionStylesTab: errorPaddingTab,
        dimensionStylesMobile: errorPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: ERROR_PADDING,
        styleFor: "padding",
        attributes,
    });

    // error margin
    const {
        dimensionStylesDesktop: errorMarginDesktop,
        dimensionStylesTab: errorMarginTab,
        dimensionStylesMobile: errorMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: ERROR_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // Checkbox Width
    const {
        rangeStylesDesktop: checkboxWidthDesktop,
        rangeStylesTab: checkboxWidthTab,
        rangeStylesMobile: checkboxWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: CHECKBOX_SIZE,
        property: "width",
        attributes,
    });

    // Checkbox Height
    const {
        rangeStylesDesktop: checkboxHeightDesktop,
        rangeStylesTab: checkboxHeightTab,
        rangeStylesMobile: checkboxHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: CHECKBOX_SIZE,
        property: "height",
        attributes,
    });

    // Checkbox border width
    const {
        rangeStylesDesktop: checkboxBorderWidthDesktop,
        rangeStylesTab: checkboxBorderWidthTab,
        rangeStylesMobile: checkboxBorderWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: CHECKBOX_BORDER,
        property: "border-width",
        attributes,
        customUnit: "px",
    });

    // checkbox radius
    const {
        dimensionStylesDesktop: checkboxRadiusDesktop,
        dimensionStylesTab: checkboxRadiusTab,
        dimensionStylesMobile: checkboxRadiusMobile,
    } = generateDimensionsControlStyles({
        controlName: CHECKBOX_RADIUS,
        styleFor: "border-radius",
        attributes,
    });

    // radio radius
    const {
        dimensionStylesDesktop: radioRadiusDesktop,
        dimensionStylesTab: radioRadiusTab,
        dimensionStylesMobile: radioRadiusMobile,
    } = generateDimensionsControlStyles({
        controlName: RADIO_RADIUS,
        styleFor: "border-radius",
        attributes,
    });

    // form width
    const {
        rangeStylesDesktop: formWidthDesktop,
        rangeStylesTab: formWidthTab,
        rangeStylesMobile: formWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: FORM_MAX_WIDTH,
        property: "max-width",
        attributes,
    });

    // form padding
    const {
        dimensionStylesDesktop: formPaddingDesktop,
        dimensionStylesTab: formPaddingTab,
        dimensionStylesMobile: formPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: FORM_PADDING,
        styleFor: "padding",
        attributes,
    });

    // form margin
    const {
        dimensionStylesDesktop: formMarginDesktop,
        dimensionStylesTab: formMarginTab,
        dimensionStylesMobile: formMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: FORM_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // form border shadow
    const {
        styesDesktop: formBrdShaDesktop,
        styesTab: formBrdShaTab,
        styesMobile: formBrdShaMobile,
        stylesHoverDesktop: formBrdShaHoverDesktop,
        stylesHoverTab: formBrdShaHoverTab,
        stylesHoverMobile: formBrdShaHoverMobile,
        transitionStyle: formBrdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: FORM_BORDER,
        attributes,
    });

    const desktopStyles = `

		.${blockId}.eb-wpforms-wrapper {
			${formBackgroundColor ? `background: ${formBackgroundColor};` : ""}
			${formWidthDesktop}
			${formPaddingDesktop}
			${formMarginDesktop}
			${formBrdShaDesktop}
			transition: ${formBrdTransitionStyle};
		}

		.${blockId}.eb-wpforms-wrapper:hover {
			${formBrdShaHoverDesktop}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field label {
			${labelTypoStylesDesktop}
			${lblMarginDesktop}
			${labelColor ? `color: ${labelColor};` : ""}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field textarea, .${blockId}.eb-wpforms-wrapper .wpforms-gutenberg-form-selector.wpforms-render-modern.wpforms-container-full .wpforms-form textarea:disabled, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field select {
			${inputTypoStylesDesktop}
			${inputTextIndentDesktop ? inputTextIndentDesktop : ""}
			${inpTxtPaddingDesktop}
			${inpTxtBrdShaDesktop}
			${inputBackgroundColor ? `background-color: ${inputBackgroundColor};` : ""}
			${inputTextColor ? `color: ${inputTextColor};` : ""}
			transition: ${inpTxtBrdTransitionStyle};
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):hover,
		.${blockId}.eb-wpforms-wrapper .wpforms-field textarea:hover,
		.${blockId}.eb-wpforms-wrapper .wpforms-field select:hover {
			${inpTxtBrdShaHoverDesktop}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file])::focus, .${blockId}.eb-wpforms-wrapper .wpforms-field textarea::focus {
			${inputFocusBackgroundColor
            ? `background-color: ${inputFocusBackgroundColor};`
            : ""
        }
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-wpforms-wrapper .wpforms-field select {
			${inputWidthDesktop ? inputWidthDesktop : ""}
			${inputHeightDesktop ? inputHeightDesktop : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field textarea {
			${textareaWidthDesktop ? textareaWidthDesktop : ""}
			${textareaHeightDesktop ? textareaHeightDesktop : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field {
			${inputTextSpaceDesktop ? inputTextSpaceDesktop : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field input::-webkit-input-placeholder, .${blockId}.eb-wpforms-wrapper .wpforms-field textarea::-webkit-input-placeholder {
			${placeHolderColor ? `color: ${placeHolderColor};` : ""}
		}

		${btnWidthType === "custom"
            ? `.${blockId}.eb-wpforms-wrapper .wpforms-submit-container {
			text-align: ${btnAlignment};
		}
		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit {
			${submitBtnWidthDesktop}
		}
		`
            : `
				.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit {
					width: 100%;
				}
				`
        }

		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit,
		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container input[type=submit]:disabled,
		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container button[type=submit]:disabled,
		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-page-button:disabled,
        .${blockId}.eb-wpforms-wrapper .wpforms-gutenberg-form-selector.wpforms-render-modern.wpforms-container-full .wpforms-form .wpforms-submit,
        .${blockId}.eb-wpforms-wrapper .wpforms-gutenberg-form-selector.wpforms-render-modern.wpforms-container-full .wpforms-form input[type=submit]:disabled,
        .${blockId}.eb-wpforms-wrapper .wpforms-gutenberg-form-selector.wpforms-render-modern.wpforms-container-full .wpforms-form button[type=submit]:disabled,
        .${blockId}.eb-wpforms-wrapper .wpforms-gutenberg-form-selector.wpforms-render-modern.wpforms-container-full .wpforms-form .wpforms-page-button:disabled,
        .${blockId}.eb-wpforms-wrapper div.wpforms-container-full button[type=submit]:not(:hover):not(:active)
		 {
			${submutBtnTypoStylesDesktop}
			${submitBtnPaddingDesktop}
			${submitBtnMarginDesktop}
			${btnBdShadowStyesDesktop}
			${btnBackgroundColor ? `background-color: ${btnBackgroundColor};` : ""}
			${btnColor ? `color: ${btnColor};` : ""}
			transition: all 0.5s, ${btnBdShadowTransitionStyle};
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit:hover {
			${btnBdShadowStylesHoverDesktop}
			${btnBackgroundHoverColor
            ? `background-color: ${btnBackgroundHoverColor};`
            : ""
        }
			${btnHoverColor ? `color: ${btnHoverColor};` : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-confirmation-container-full,
		.${blockId}.eb-wpforms-wrapper div[submit-success]>.wpforms-confirmation-container-full:not(.wpforms-redirection-message) {
			${successBackgroundColor ? `background-color: ${successBackgroundColor};` : ""}
			${successColor ? `color: ${successColor};` : ""}
			${successTypoStylesDesktop}
			${successBorderDesktop}
			transition: ${successTransitionStyle};
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-confirmation-container-full:hover {
			${successBorderHoverDesktop}
		}

		${showErrorMessage
            ? `
		.${blockId}.eb-wpforms-wrapper .wpforms-form label.wpforms-error {
			${errorTypoStylesDesktop}
			${errorPaddingDesktop}
			${errorMarginDesktop}
			${errorColor ? `color: ${errorColor};` : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field input.wpforms-error, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field input.user-invalid, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field textarea.wpforms-error, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field textarea.user-invalid, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field select.wpforms-error, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field select.user-invalid, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field.wpforms-has-error .choices__inner {
			border-color: ${errorColor};
		}
		`
            : ""
        }

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"] {
			${checkboxWidthDesktop}
			${checkboxHeightDesktop}
			${checkboxBorderWidthDesktop}
			${checkboxColor ? `background: ${checkboxColor};` : ""}
			${checkboxBorderColor ? `border-color: ${checkboxBorderColor};` : ""}
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"]:before {
			${checkboxRadiusDesktop}
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"]:before {
			${radioRadiusDesktop}
		}

		${checkboxCheckedColor
            ? `
			.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"]:checked:before,
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"]:checked:before {
background: ${checkboxCheckedColor};
		}
			`
            : ""
        }

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-alignment-center {
			margin: 0 auto;
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-alignment-right {
			margin: 0 0 0 auto;
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-labels .wpforms-field .wpforms-field-label,
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-errormessage label.wpforms-error {
			display: none !important;
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-labels .wpforms-field.wpforms-field-radio .wpforms-field-label,
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-labels .wpforms-field.wpforms-field-checkbox .wpforms-field-label {
			display: block !important;
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder input::-webkit-input-placeholder,
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder textarea::-webkit-input-placeholder {
		opacity: 0;
		visibility: hidden;
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder input::-moz-placeholder,
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder textarea::-moz-placeholder {
		opacity: 0;
		visibility: hidden;
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder input:-ms-input-placeholder,
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder textarea:-ms-input-placeholder {
		opacity: 0;
		visibility: hidden;
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder input:-moz-placeholder,
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-hide-placeholder textarea:-moz-placeholder {
		opacity: 0;
		visibility: hidden;
		}
	`;

    const tabStyles = `
		.${blockId}.eb-wpforms-wrapper {
			${formWidthTab}
			${formPaddingTab}
			${formMarginTab}
			${formBrdShaTab}
		}

		.${blockId}.eb-wpforms-wrapper:hover {
			${formBrdShaHoverTab}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field label {
			${labelTypoStylesTab}
			${lblMarginTab}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field textarea, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field select {
			${inputTypoStylesTab}
			${inputTextIndentTab}
			${inpTxtPaddingTab}
			${inpTxtBrdShaTab}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):hover, .${blockId}.eb-wpforms-wrapper .wpforms-field textarea:hover, .${blockId}.eb-wpforms-wrapper .wpforms-field select:hover {
			${inpTxtBrdShaHoverTab}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-wpforms-wrapper .wpforms-field select {
			${inputWidthTab ? inputWidthTab : ""}
			${inputHeightTab ? inputHeightTab : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field textarea {
			${textareaWidthTab ? textareaWidthTab : ""}
			${textareaHeightTab ? textareaHeightTab : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field {
			${inputTextSpaceTab ? inputTextSpaceTab : ""}
		}

		${btnWidthType === "custom"
            ? `.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit {
			${submitBtnWidthTab}
		}
		`
            : ""
        }

		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit {
			${submutBtnTypoStylesTab}
			${submitBtnPaddingTab}
			${submitBtnMarginTab}
			${btnBdShadowStyesTab}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container:hover .wpforms-submit {
			${btnBdShadowStylesHoverTab}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-confirmation-container-full,
		.${blockId}.eb-wpforms-wrapper div[submit-success]>.wpforms-confirmation-container-full:not(.wpforms-redirection-message) {
			${successTypoStylesTab}
			${successBorderTab}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-confirmation-container-full:hover {
			${successBorderHoverTab}
		}

		${showErrorMessage
            ? `
		.${blockId}.eb-wpforms-wrapper .wpforms-form label.wpforms-error {
			${errorTypoStylesTab}
			${errorPaddingTab}
			${errorMarginTab}
		}
		`
            : ""
        }

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"] {
			${checkboxWidthTab}
			${checkboxHeightTab}
			${checkboxBorderWidthTab}
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"]:before {
			${checkboxRadiusTab}
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"]:before {
			${radioRadiusTab}
		}

		.${blockId}.eb-wpforms-wrapper {
			${formBackgroundColor ? `background: ${formBackgroundColor};` : ""}
		}

	`;

    const mobileStyles = `
		.${blockId}.eb-wpforms-wrapper {
			${formWidthMobile}
			${formPaddingMobile}
			${formMarginMobile}
			${formBrdShaMobile}
		}

		.${blockId}.eb-wpforms-wrapper:hover {
			${formBrdShaHoverMobile}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field label {
			${labelTypoStylesMobile}
			${lblMarginMobile}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field textarea, .${blockId}.eb-wpforms-wrapper .wpforms-form .wpforms-field select {
			${inputTypoStylesMobile}
			${inputTextIndentMobile}
			${inpTxtPaddingMobile}
			${inpTxtBrdShaMobile}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):hover, .${blockId}.eb-wpforms-wrapper .wpforms-field textarea:hover, .${blockId}.eb-wpforms-wrapper .wpforms-field select:hover {
			${inpTxtBrdShaHoverMobile}
		}

		.${blockId}.eb-wpforms-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-wpforms-wrapper .wpforms-field select {
			${inputWidthMobile ? inputWidthMobile : ""}
			${inputHeightMobile ? inputHeightMobile : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field textarea {
			${textareaWidthMobile ? textareaWidthMobile : ""}
			${textareaHeightMobile ? textareaHeightMobile : ""}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-field {
			${inputTextSpaceMobile ? inputTextSpaceMobile : ""}
		}

		${btnWidthType === "custom"
            ? `.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit {
			${submitBtnWidthMobile}
		}
		`
            : ""
        }

		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit {
			${submutBtnTypoStylesMobile}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container .wpforms-submit {
			${submutBtnTypoStylesMobile}
			${submitBtnPaddingMobile}
			${submitBtnMarginMobile}
			${btnBdShadowStyesMobile}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-submit-container:hover .wpforms-submit {
			${btnBdShadowStylesHoverMobile}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-confirmation-container-full,
		.${blockId}.eb-wpforms-wrapper div[submit-success]>.wpforms-confirmation-container-full:not(.wpforms-redirection-message) {
			${successTypoStylesMobile}
			${successBorderMobile}
		}

		.${blockId}.eb-wpforms-wrapper .wpforms-confirmation-container-full:hover {
			${successBorderHoverMobile}
		}

		${showErrorMessage
            ? `
		.${blockId}.eb-wpforms-wrapper .wpforms-form label.wpforms-error {
			${errorTypoStylesMobile}
			${errorPaddingMobile}
			${errorMarginMobile}
		}
		`
            : ""
        }

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"] {
			${checkboxWidthMobile}
			${checkboxHeightMobile}
			${checkboxBorderWidthMobile}
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="checkbox"]:before {
			${checkboxRadiusMobile}
		}

		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"],
		.${blockId}.eb-wpforms-wrapper.eb-wpforms-custom-radio-checkbox input[type="radio"]:before {
			${radioRadiusMobile}
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${desktopStyles}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${tabStyles}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${mobileStyles}
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
