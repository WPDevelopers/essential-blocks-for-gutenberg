import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    LABEL_MARGIN,
    FIELD_BORDER,
    FIELD_PADDING,
    RADIO_SIZE,
    RADIO_SPACING,
} from "./constants";
import {
    LABEL_TYPOGRAPHY,
    FIELD_TEXT,
    FIELD_TEXT_VALIDATION,
    RADIO_TEXT,
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
        parentBlockId,
        labelColor,
        requiredColor,
        radioColor,
        radioBgColor,
        radioBrColor,
        radioBrCheckedColor,
        radioSizeRange,
        TABradioSizeRange,
        MOBradioSizeRange,
        radioBorderborderColor,
        radioBorder,
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
        typoStylesDesktop: labelTypoStylesDesktop,
        typoStylesTab: labelTypoStylesTab,
        typoStylesMobile: labelTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: LABEL_TYPOGRAPHY,
        // defaultFontSize: 15,
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
        typoStylesDesktop: radioTypoStylesDesktop,
        typoStylesTab: radioTypoStylesTab,
        typoStylesMobile: radioTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: RADIO_TEXT,
        // defaultFontSize: 14,
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

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-radio-field-wrapper.${blockId}{
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBDShadowDesktop}
			transition: ${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}
		.eb-radio-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperBDShadowHoverDesktop}
		}
	`;

    const wrapperStylesTab = `
		.eb-radio-field-wrapper.${blockId}{
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${wrapperBDShadowTab}
		}
		.eb-radio-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${wrapperBDShadowHoverTab}
		}

	`;
    const wrapperStylesMobile = `
		.eb-radio-field-wrapper.${blockId}{
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBDShadowMobile}
		}
		.eb-radio-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${wrapperBDShadowHoverMobile}
		}

	`;
    const labelDesktop = `
        .eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} > label {
			color: ${labelColor};
            ${labelTypoStylesDesktop}
            ${labelMarginStylesDesktop}
		}
        .eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} .eb-required{
            color: ${requiredColor};
        }
	`;
    const labelTab = `
        .eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} > label {
			${labelTypoStylesTab}
            ${labelMarginStylesTab}
		}
	`;
    const labelMobile = `
		.eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} > label {
            ${labelTypoStylesMobile}
            ${labelMarginStylesMobile}
		}
	`;

    const radioDesktop = `
		.eb-form-wrapper.${parentBlockId} .eb-form-field .eb-radio-field-wrapper.${blockId} input[type=radio] {
			background-color: ${radioBgColor};
			border-color: ${radioBrColor};
			border-width: ${radioBorder}px;
            height: ${radioSizeRange}px;
            ${radioWidthStylesDesktop}
		}
		.eb-form-wrapper.${parentBlockId} .eb-form-field .eb-radio-field-wrapper.${blockId} input[type=radio]:checked {
			border-color: ${radioBrCheckedColor};
		}
		.eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} .eb-radio-inputarea label {
            ${radioTypoStylesDesktop}
            color: ${radioColor}
		}
        .eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} .eb-radio-inputarea {
            ${radioSpacingStylesDesktop}
        }

        .eb-form-wrapper.${parentBlockId} .eb-form-field .eb-radio-field-wrapper.${blockId} input[type=radio]::before {
            width: calc(${radioSizeRange}px / 2);
            height: calc(${radioSizeRange}px / 2);
            background-color: ${radioBrCheckedColor};
        }
	`;
    const radioTab = `
		.eb-form-wrapper.${parentBlockId} .eb-form-field .eb-radio-field-wrapper.${blockId} input[type=radio] {
            height: ${TABradioSizeRange}px;
            ${radioWidthStylesTab}
		}
		.eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} .eb-radio-inputarea label {
            ${radioTypoStylesTab}
		}
        .eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} .eb-radio-inputarea {
            ${radioSpacingStylesTab}
        }
        .eb-form-wrapper.${parentBlockId} .eb-form-field .eb-radio-field-wrapper.${blockId} input[type=radio]::before {
            width: calc(${TABradioSizeRange}px / 2);
            height: calc(${TABradioSizeRange}px / 2);
        }
	`;
    const radioMobile = `
		.eb-form-wrapper.${parentBlockId} .eb-form-field .eb-radio-field-wrapper.${blockId} input[type=radio] {
            height: ${MOBradioSizeRange}px;
            ${radioWidthStylesMobile}
		}
		.eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} .eb-radio-inputarea label {
            ${radioTypoStylesMobile}
		}
        .eb-form-wrapper.${parentBlockId} .eb-radio-field-wrapper.${blockId} .eb-radio-inputarea {
            ${radioSpacingStylesMobile}
        }
        .eb-form-wrapper.${parentBlockId} .eb-form-field .eb-radio-field-wrapper.${blockId} input[type=radio]::before {
            width: calc(${MOBradioSizeRange}px / 2);
            height: calc(${MOBradioSizeRange}px / 2);
        }
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${labelDesktop}
		${radioDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${labelTab}
		${radioTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${labelMobile}
		${radioMobile}
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
