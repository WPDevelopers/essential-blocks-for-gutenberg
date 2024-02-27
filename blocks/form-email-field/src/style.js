import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    LABEL_MARGIN,
    FIELD_BORDER,
    FIELD_PADDING,
    ICON_SIZE,
} from "./constants";
import {
    LABEL_TYPOGRAPHY,
    FIELD_TEXT,
    FIELD_TEXT_VALIDATION,
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
        parentBlockId,
        blockId,
        blockMeta,
        resOption,
        labelColor,
        requiredColor,
        fieldColor,
        fieldPlaceholderColor,
        fieldBgColor,
        fieldValidationColor,
        fieldValidationBorderColor,
        iconColor,
        fieldPaddingLeft,
        fieldPaddingUnit,
        iconSizeRange,
        parentBlockPaddingLeft,
        parentBlockPaddingUnit,
        parentBlockIconSize,
        isIcon,
        parentIconColor,
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
        typoStylesDesktop: fieldTypoStylesDesktop,
        typoStylesTab: fieldTypoStylesTab,
        typoStylesMobile: fieldTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: FIELD_TEXT,
        // defaultFontSize: 14,
    });
    const {
        typoStylesDesktop: fieldValidationTypoStylesDesktop,
        typoStylesTab: fieldValidationTypoStylesTab,
        typoStylesMobile: fieldValidationTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: FIELD_TEXT_VALIDATION,
        // defaultFontSize: 14,
    });

    const {
        dimensionStylesDesktop: fieldPaddingStylesDesktop,
        dimensionStylesTab: fieldPaddingStylesTab,
        dimensionStylesMobile: fieldPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: FIELD_PADDING,
        styleFor: "padding",
        attributes,
    });
    const {
        styesDesktop: fieldBDShadowDesktop,
        styesTab: fieldBDShadowTab,
        styesMobile: fieldBDShadowMobile,
        stylesHoverDesktop: fieldBDShadowHoverDesktop,
        stylesHoverTab: fieldBDShadowHoverTab,
        stylesHoverMobile: fieldBDShadowHoverMobile,
        transitionStyle: fieldBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: FIELD_BORDER,
        attributes,
        // noShadow: true,
    });

    const {
        rangeStylesDesktop: iconSizeStylesDesktop,
        rangeStylesTab: iconSizeStylesTab,
        rangeStylesMobile: iconSizeStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SIZE,
        property: "font-size",
        attributes,
        customUnit: "px",
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-email-field-wrapper.${blockId}{
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBDShadowDesktop}
			transition: ${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}
		.eb-email-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperBDShadowHoverDesktop}
		}
	`;

    const wrapperStylesTab = `
		.eb-email-field-wrapper.${blockId}{
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${wrapperBDShadowTab}
		}
		.eb-email-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${wrapperBDShadowHoverTab}
		}

	`;
    const wrapperStylesMobile = `
		.eb-email-field-wrapper.${blockId}{
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBDShadowMobile}
		}
		.eb-email-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${wrapperBDShadowHoverMobile}
		}

	`;

    const labelDesktop = `
        .eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} > label {
			color: ${labelColor};
            ${labelTypoStylesDesktop}
            ${labelMarginStylesDesktop}
		}
        .eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-required{
            color: ${requiredColor};
        }
	`;
    const labelTab = `
        .eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} > label {
			${labelTypoStylesTab}
            ${labelMarginStylesTab}
		}
	`;
    const labelMobile = `
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} > label {
            ${labelTypoStylesMobile}
            ${labelMarginStylesMobile}
		}
	`;

    const fieldDesktop = `
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-field-input {
			color: ${fieldColor};
			background-color: ${fieldBgColor};
            ${fieldTypoStylesDesktop}
            ${fieldPaddingStylesDesktop}
            ${fieldBDShadowDesktop}
		}
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-field-input::placeholder {
			color: ${fieldPlaceholderColor};
		}

		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId}.eb-validation-error .eb-form-validation {
            ${fieldValidationTypoStylesDesktop}
			color: ${fieldValidationColor};
		}
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId}.eb-validation-error .eb-field-input {
			border-color: ${fieldValidationBorderColor};
		}
	`;
    const fieldTab = `
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-field-input {
            ${fieldTypoStylesTab}
            ${fieldPaddingStylesTab}
            ${fieldBDShadowTab}
		}
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId}.eb-validation-error .eb-form-validation {
            ${fieldValidationTypoStylesTab}
		}
	`;
    const fieldMobile = `
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-field-input {
            ${fieldTypoStylesTab}
            ${fieldPaddingStylesTab}
            ${fieldBDShadowTab}
		}
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId}.eb-validation-error .eb-form-validation {
            ${fieldValidationTypoStylesTab}
		}
	`;

    const iconDesktop = `
		.eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-input-icon {
            ${iconSizeStylesDesktop}
            color: ${iconColor ? iconColor : parentIconColor};
		}

        ${isIcon
            ? `
                .eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-input-icon {
                    left: ${fieldPaddingLeft
                ? fieldPaddingLeft
                : parentBlockPaddingLeft
            }${fieldPaddingUnit};
                }
                .eb-form-wrapper.${parentBlockId} .eb-email-field-wrapper.${blockId} .eb-field-input {
                    padding-left: calc(${iconSizeRange ? iconSizeRange : parentBlockIconSize
            }px + (${fieldPaddingLeft
                ? fieldPaddingLeft
                : parentBlockPaddingLeft == 0
                    ? 8
                    : parentBlockPaddingLeft
            }${fieldPaddingUnit
                ? fieldPaddingUnit
                : parentBlockPaddingUnit
            } * 1.6));
                }`
            : ""
        }
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${labelDesktop}
		${fieldDesktop}
		${iconDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${labelTab}
		${fieldTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${labelMobile}
		${fieldMobile}
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
