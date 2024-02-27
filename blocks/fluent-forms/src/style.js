import {
    FORM_LISTS,
    INPUT_HEIGHT,
    INPUT_TEXTAREA_INDENT,
    INPUT_WIDTH,
    TEXTAREA_WIDTH,
    TEXTAREA_HEIGHT,
    INPUT_TEXTAREA_PADDING,
    INPUT_TEXTAREA_SPACING,
    INPUT_TEXTAREA_BORDER,
    SECTION_BREAK_PADDING,
    SECTION_BREAK_MARGIN,
    SECTION_BREAK_DESC_PADDING,
    SECTION_BREAK_DESC_MARGIN,
    CUSTOM_HTML_PADDING,
    CUSTOM_HTML_MARGIN,
    SUBMIT_BUTTON_WIDTH,
    SUBMIT_BUTTON_HEIGHT,
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
    CHECKBOX_ITEM_SPACING,
    FORM_MAX_WIDTH,
    FORM_PADDING,
    FORM_MARGIN,
    FORM_BORDER,
    FORM_FULL_LISTS,
    BUTTON_POSITION,
} from "./constants";
import {
    typoPrefix_label,
    typoPrefix_input,
    typoPrefix_section_break,
    typoPrefix_section_break_desc,
    typoPrefix_custom_html,
    typoPrefix_submit_btn,
    typoPrefix_success,
    typoPrefix_error,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = EBControls;

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
        placeholderColor,
        sectionBreakColor,
        sectionBreakDescColor,
        sectionBreakPosition,
        customHtmlColor,
        customHtmlPosition,
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

    // section break typography
    const {
        typoStylesDesktop: sectionBreakTypoStylesDesktop,
        typoStylesTab: sectionBreakTypoStylesTab,
        typoStylesMobile: sectionBreakTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_section_break,
    });

    // Section break label padding
    const {
        dimensionStylesDesktop: sectionBreakLabelPaddingDesktop,
        dimensionStylesTab: sectionBreakLabelPaddingTab,
        dimensionStylesMobile: sectionBreakLabelPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: SECTION_BREAK_PADDING,
        styleFor: "padding",
        attributes,
    });

    // Section break label margin
    const {
        dimensionStylesDesktop: sectionBreakLabelMarginDesktop,
        dimensionStylesTab: sectionBreakLabelMarginTab,
        dimensionStylesMobile: sectionBreakLabelMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: SECTION_BREAK_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // custom html padding
    const {
        dimensionStylesDesktop: customHtmlPaddingDesktop,
        dimensionStylesTab: customHtmlPaddingTab,
        dimensionStylesMobile: customHtmlPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: CUSTOM_HTML_PADDING,
        styleFor: "padding",
        attributes,
    });

    // custom html margin
    const {
        dimensionStylesDesktop: customHtmlMarginDesktop,
        dimensionStylesTab: customHtmlMarginTab,
        dimensionStylesMobile: customHtmlMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: CUSTOM_HTML_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // custom html typography
    const {
        typoStylesDesktop: customHtmlTypoStylesDesktop,
        typoStylesTab: customHtmlTypoStylesTab,
        typoStylesMobile: customHtmlTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_custom_html,
    });

    // section break desc typography
    const {
        typoStylesDesktop: sectionBreakDescTypoStylesDesktop,
        typoStylesTab: sectionBreakDescTypoStylesTab,
        typoStylesMobile: sectionBreakDescTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_section_break_desc,
    });

    // Section break DESC margin
    const {
        dimensionStylesDesktop: sectionBreakDescPaddingDesktop,
        dimensionStylesTab: sectionBreakDescPaddingTab,
        dimensionStylesMobile: sectionBreakDescPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: SECTION_BREAK_DESC_PADDING,
        styleFor: "padding",
        attributes,
    });

    // Section break DESC padding
    const {
        dimensionStylesDesktop: sectionBreakDescMarginDesktop,
        dimensionStylesTab: sectionBreakDescMarginTab,
        dimensionStylesMobile: sectionBreakDescMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: SECTION_BREAK_DESC_MARGIN,
        styleFor: "margin",
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

    // submit button height
    const {
        rangeStylesDesktop: submitBtnHeightDesktop,
        rangeStylesTab: submitBtnHeightTab,
        rangeStylesMobile: submitBtnHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: SUBMIT_BUTTON_HEIGHT,
        property: "height",
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

    // submit button position
    const {
        rangeStylesDesktop: submitBtnPositionDesktop,
        rangeStylesTab: submitBtnPositionTab,
        rangeStylesMobile: submitBtnPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: BUTTON_POSITION,
        property: "right",
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

    // checkbox/radio buttons list spacing
    const {
        rangeStylesDesktop: checkboxSpaceDesktop,
        rangeStylesTab: checkboxSpaceTab,
        rangeStylesMobile: checkboxSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: CHECKBOX_ITEM_SPACING,
        property: "margin-bottom",
        attributes,
    });

    // form width
    const {
        rangeStylesDesktop: formWidthDesktop,
        rangeStylesTab: formWidthTab,
        rangeStylesMobile: formWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: FORM_MAX_WIDTH,
        property: "width",
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

		.${blockId}.eb-fluent-form-wrapper {
			${formBackgroundColor ? `background: ${formBackgroundColor};` : ""}
			${formWidthDesktop}
			${formPaddingDesktop}
			${formMarginDesktop}
			${formBrdShaDesktop}
			transition: ${formBrdTransitionStyle};
            box-sizing: border-box;
		}

		.${blockId}.eb-fluent-form-wrapper:hover {
			${formBrdShaHoverDesktop}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group label {
			${labelTypoStylesDesktop}
			${labelColor ? `color: ${labelColor};` : ""}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-fluent-form-wrapper .ff-el-group textarea, .${blockId}.eb-fluent-form-wrapper .ff-el-group select {
			${inputTypoStylesDesktop}
			${inputTextIndentDesktop ? inputTextIndentDesktop : ""}
			${inpTxtPaddingDesktop}
			${inpTxtBrdShaDesktop}
			${inputBackgroundColor ? `background-color: ${inputBackgroundColor};` : ""}
			${inputTextColor ? `color: ${inputTextColor};` : ""}
			transition: ${inpTxtBrdTransitionStyle};
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):hover,
		.${blockId}.eb-fluent-form-wrapper .ff-el-group textarea:hover,
		.${blockId}.eb-fluent-form-wrapper .ff-el-group select:hover {
			${inpTxtBrdShaHoverDesktop}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file])::focus, .${blockId}.eb-fluent-form-wrapper .ff-el-group textarea::focus {
			${inputFocusBackgroundColor
            ? `background-color: ${inputFocusBackgroundColor};`
            : ""
        }
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-fluent-form-wrapper .ff-el-group select.ff-el-form-control {
			${inputWidthDesktop ? inputWidthDesktop : ""}
			${inputHeightDesktop ? inputHeightDesktop : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group textarea {
			${textareaWidthDesktop ? textareaWidthDesktop : ""}
			${textareaHeightDesktop ? textareaHeightDesktop : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group {
			${inputTextSpaceDesktop ? inputTextSpaceDesktop : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group input::-webkit-input-placeholder, .${blockId}.eb-fluent-form-wrapper .ff-el-group textarea::-webkit-input-placeholder {
			${placeholderColor ? `color: ${placeholderColor};` : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-section-break, .${blockId}.eb-fluent-form-wrapper .ff-el-section-break hr {
			text-align: ${sectionBreakPosition};
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title{
			${sectionBreakTypoStylesDesktop}
			${sectionBreakLabelPaddingDesktop}
			${sectionBreakLabelMarginDesktop}
			${sectionBreakColor ? `color: ${sectionBreakColor};` : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-section-break div {
			${sectionBreakDescTypoStylesDesktop}
			${sectionBreakDescPaddingDesktop}
			${sectionBreakDescMarginDesktop}
			${sectionBreakDescColor ? `color: ${sectionBreakDescColor};` : ""}
		}
		${btnWidthType === "custom"
            ? `.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper.ff-text-left,
		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper.ff-text-center,
		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper.ff-text-right {
			text-align: ${btnAlignment};
		}
		`
            : ``
        }

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
			${btnWidthType === "custom" ? submitBtnWidthDesktop : "width: 100%;"}
			${submitBtnHeightDesktop.length != 0 ? submitBtnHeightDesktop : "height: auto;"}
			${submutBtnTypoStylesDesktop}
			${submitBtnPaddingDesktop}
			${submitBtnMarginDesktop}
			${btnBdShadowStyesDesktop}
			${btnBackgroundColor ? `background-color: ${btnBackgroundColor};` : ""}
			${btnColor ? `color: ${btnColor};` : ""}
			transition: all 0.5s, ${btnBdShadowTransitionStyle};
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
			${btnBdShadowStylesHoverDesktop}
			${btnBackgroundHoverColor
            ? `background-color: ${btnBackgroundHoverColor};`
            : ""
        }
			${btnHoverColor ? `color: ${btnHoverColor};` : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-message-success {
			${successBackgroundColor ? `background-color: ${successBackgroundColor};` : ""}
			${successColor ? `color: ${successColor};` : ""}
			${successTypoStylesDesktop}
			${successBorderDesktop}
			transition: ${successTransitionStyle};
		}

		.${blockId}.eb-fluent-form-wrapper .ff-message-success:hover {
			${successBorderHoverDesktop}
		}

		${showErrorMessage
            ? `
		.${blockId}.eb-fluent-form-wrapper .error.text-danger {
			${errorTypoStylesDesktop}
			${errorPaddingDesktop}
			${errorMarginDesktop}
			${errorColor ? `color: ${errorColor};` : ""}
		}
		`
            : ""
        }

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-input--content input[type="checkbox"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-input--content input[type="radio"] {
			appearance: none;
			position: relative;
			${checkboxColor ? `background: ${checkboxColor};` : ""}
			${checkboxBorderColor ? `border-color:${checkboxBorderColor};` : ""}
			${checkboxWidthDesktop}
			${checkboxHeightDesktop}
			${checkboxBorderWidthDesktop}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-form-check:not(:last-child) {
			${checkboxSpaceDesktop}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"]:before {
			${checkboxRadiusDesktop}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"]:before {
			${radioRadiusDesktop}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"]:checked:before, .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"]:checked:before {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			display: block;
			margin: 0;
			${checkboxCheckedColor ? `background: ${checkboxCheckedColor};` : ""}
			width: calc(${checkboxWidthDesktop.replace(
            /\D/g,
            ""
        )}px - ${checkboxBorderWidthDesktop.replace(/\D/g, "")}px*2);
			height: calc(${checkboxHeightDesktop.replace(
            /\D/g,
            ""
        )}px - ${checkboxBorderWidthDesktop.replace(/\D/g, "")}px*2);
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-alignment-center {
			margin: 0 auto;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-alignment-right {
			margin: 0 0 0 auto;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-labels .ff-el-group label:not(.ff-el-form-check-label),
		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-labels .ff-el-group .ff-el-input--label,
		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-errormessage .error.text-danger {
			display: none;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder input::-webkit-input-placeholder,
		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder textarea::-webkit-input-placeholder {
		opacity: 0;
		visibility: hidden;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder input::-moz-placeholder,
		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder textarea::-moz-placeholder {
		opacity: 0;
		visibility: hidden;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder input:-ms-input-placeholder,
		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder textarea:-ms-input-placeholder {
		opacity: 0;
		visibility: hidden;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder input:-moz-placeholder,
		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-hide-placeholder textarea:-moz-placeholder {
		opacity: 0;
		visibility: hidden;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-default-subscription input {
			max-width: unset !important;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-default-subscription .ff-el-input--content {
			position: relative;
			z-index: 1;
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-default-subscription .ff-el-group .ff-btn-submit {
			${submitBtnPositionDesktop}
			position: relative;
			min-width: inherit;
		}

		.${blockId}.eb-fluent-form-wrapper .ff-custom_html > * {
			${customHtmlMarginDesktop}
			${customHtmlPaddingDesktop}
			${customHtmlTypoStylesDesktop}
			${customHtmlColor ? `color: ${customHtmlColor};` : ""}
			${customHtmlPosition ? `text-align: ${customHtmlPosition};` : ""}
		}
	`;

    const tabStyles = `
		.${blockId}.eb-fluent-form-wrapper {
			${formWidthTab}
			${formPaddingTab}
			${formMarginTab}
			${formBrdShaTab}
		}

		.${blockId}.eb-fluent-form-wrapper:hover {
			${formBrdShaHoverTab}
		}

		.${blockId}.eb-fluent-form-wrapper:hover {
			${formBrdShaHoverTab}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group label {
			${labelTypoStylesTab}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-fluent-form-wrapper .ff-el-group textarea, .${blockId}.eb-fluent-form-wrapper .ff-el-group select.ff-el-form-control {
			${inputTypoStylesTab}
			${inputTextIndentTab}
			${inpTxtPaddingTab}
			${inpTxtBrdShaTab}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):hover, .${blockId}.eb-fluent-form-wrapper .ff-el-group textarea:hover, .${blockId}.eb-fluent-form-wrapper .ff-el-group select.ff-el-form-control:hover {
			${inpTxtBrdShaHoverTab}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-fluent-form-wrapper .ff-el-group select.ff-el-form-control {
			${inputWidthTab ? inputWidthTab : ""}
			${inputHeightTab ? inputHeightTab : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group textarea {
			${textareaWidthTab ? textareaWidthTab : ""}
			${textareaHeightTab ? textareaHeightTab : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group {
			${inputTextSpaceTab ? inputTextSpaceTab : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title{
			${sectionBreakTypoStylesTab}
			${sectionBreakLabelPaddingTab}
			${sectionBreakLabelMarginTab}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-section-break div {
			${sectionBreakDescTypoStylesTab}
			${sectionBreakDescPaddingTab}
			${sectionBreakDescMarginTab}
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
			${btnWidthType === "custom" ? submitBtnWidthTab : ""}
			${submitBtnHeightTab}
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
			${submutBtnTypoStylesTab}
			${submitBtnPaddingTab}
			${submitBtnMarginTab}
			${btnBdShadowStyesTab}
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper:hover .ff-btn-submit {
			${btnBdShadowStylesHoverTab}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-message-success {
			${successTypoStylesTab}
			${successBorderTab}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-message-success:hover {
			${successBorderHoverTab}
		}

		${showErrorMessage
            ? `
		.${blockId}.eb-fluent-form-wrapper .error.text-danger {
			${errorTypoStylesTab}
			${errorPaddingTab}
			${errorMarginTab}
		}
		`
            : ""
        }

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-input--content input[type="checkbox"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-input--content input[type="radio"] {
			${checkboxWidthTab}
			${checkboxHeightTab}
			${checkboxBorderWidthTab}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-form-check:not(:last-child) {
			${checkboxSpaceTab}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"]:before {
			${checkboxRadiusTab}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"]:before {
			${radioRadiusTab}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"]:checked:before, .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"]:checked:before {
			width: calc(${checkboxWidthTab.replace(
            /\D/g,
            ""
        )}px - ${checkboxBorderWidthTab.replace(/\D/g, "")}px*2);
			height: calc(${checkboxHeightTab.replace(
            /\D/g,
            ""
        )}px - ${checkboxBorderWidthTab.replace(/\D/g, "")}px*2);
		}

		.${blockId}.eb-fluent-form-wrapper {
			${formBackgroundColor ? `background: ${formBackgroundColor};` : ""}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-default-subscription .ff-el-group .ff-btn-submit {
			${submitBtnPositionTab}
		}
	`;

    const mobileStyles = `
		.${blockId}.eb-fluent-form-wrapper {
			${formWidthMobile}
			${formPaddingMobile}
			${formMarginMobile}
			${formBrdShaMobile}
		}

		.${blockId}.eb-fluent-form-wrapper:hover {
			${formBrdShaHoverMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group label {
			${labelTypoStylesMobile}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-fluent-form-wrapper .ff-el-group textarea, .${blockId}.eb-fluent-form-wrapper .ff-el-group select.ff-el-form-control {
			${inputTypoStylesMobile}
			${inputTextIndentMobile}
			${inpTxtPaddingMobile}
			${inpTxtBrdShaMobile}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):hover, .${blockId}.eb-fluent-form-wrapper .ff-el-group textarea:hover, .${blockId}.eb-fluent-form-wrapper .ff-el-group select.ff-el-form-control:hover {
			${inpTxtBrdShaHoverMobile}
		}

		.${blockId}.eb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .${blockId}.eb-fluent-form-wrapper .ff-el-group select.ff-el-form-control {
			${inputWidthMobile ? inputWidthMobile : ""}
			${inputHeightMobile ? inputHeightMobile : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group textarea {
			${textareaWidthMobile ? textareaWidthMobile : ""}
			${textareaHeightMobile ? textareaHeightMobile : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-group {
			${inputTextSpaceMobile ? inputTextSpaceMobile : ""}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title{
			${sectionBreakTypoStylesMobile}
			${sectionBreakLabelPaddingMobile}
			${sectionBreakLabelMarginMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-el-section-break div {
			${sectionBreakDescTypoStylesMobile}
			${sectionBreakDescPaddingMobile}
			${sectionBreakDescMarginMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
			${btnWidthType === "custom" ? submitBtnWidthMobile : ""}
			${submitBtnHeightMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
			${submutBtnTypoStylesMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
			${submutBtnTypoStylesMobile}
			${submitBtnPaddingMobile}
			${submitBtnMarginMobile}
			${btnBdShadowStyesMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff_submit_btn_wrapper:hover .ff-btn-submit {
			${btnBdShadowStylesHoverMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-message-success {
			${successTypoStylesMobile}
			${successBorderMobile}
		}

		.${blockId}.eb-fluent-form-wrapper .ff-message-success:hover {
			${successBorderHoverMobile}
		}

		${showErrorMessage
            ? `
		.${blockId}.eb-fluent-form-wrapper .error.text-danger {
			${errorTypoStylesMobile}
			${errorPaddingMobile}
			${errorMarginMobile}
		}
		`
            : ""
        }

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-input--content input[type="checkbox"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-input--content input[type="radio"] {
			${checkboxWidthMobile}
			${checkboxHeightMobile}
			${checkboxBorderWidthMobile}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox .ff-el-form-check:not(:last-child) {
			${checkboxSpaceMobile}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"]:before {
			${checkboxRadiusMobile}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"], .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"]:before {
			${radioRadiusMobile}
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="checkbox"]:checked:before, .${blockId}.eb-fluent-form-wrapper.eb-fluent-custom-radio-checkbox input[type="radio"]:checked:before {
			width: calc(${checkboxWidthMobile.replace(
            /\D/g,
            ""
        )}px - ${checkboxBorderWidthMobile.replace(/\D/g, "")}px*2);
			height: calc(${checkboxHeightMobile.replace(
            /\D/g,
            ""
        )}px - ${checkboxBorderWidthMobile.replace(/\D/g, "")}px*2);
		}

		.${blockId}.eb-fluent-form-wrapper.eb-fluentform-default-subscription .ff-el-group .ff-btn-submit {
			${submitBtnPositionMobile}
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
