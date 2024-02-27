import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    LABEL_MARGIN,
    CHECKBOX_SIZE,
    CHECKBOX_SPACING,
} from "./constants";

import {
    LABEL_TYPOGRAPHY,
    CHECKBOX_TEXT,
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

        checkboxColor,
        checkboxBgColor,
        checkboxBrColor,
        checkboxBrCheckedColor,
        checkboxSizeRange,
        TABcheckboxSizeRange,
        MOBcheckboxSizeRange,
        checkboxBorderborderColor,
        checkboxBorder,
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
        typoStylesDesktop: checkboxTypoStylesDesktop,
        typoStylesTab: checkboxTypoStylesTab,
        typoStylesMobile: checkboxTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: CHECKBOX_TEXT,
        // defaultFontSize: 14,
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

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-checkbox-field-wrapper.${blockId}{
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBDShadowDesktop}
			transition: ${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}
		.eb-checkbox-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperBDShadowHoverDesktop}
		}
	`;

    const wrapperStylesTab = `
		.eb-checkbox-field-wrapper.${blockId}{
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${wrapperBDShadowTab}
		}
		.eb-checkbox-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${wrapperBDShadowHoverTab}
		}

	`;
    const wrapperStylesMobile = `
		.eb-checkbox-field-wrapper.${blockId}{
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBDShadowMobile}
		}
		.eb-checkbox-field-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${wrapperBDShadowHoverMobile}
		}

	`;

    const labelDesktop = `
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} > label {
			color: ${labelColor};
            ${labelTypoStylesDesktop}
            ${labelMarginStylesDesktop}
		}
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} .eb-required{
            color: ${requiredColor};
        }
	`;
    const labelTab = `
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} > label {
			${labelTypoStylesTab}
            ${labelMarginStylesTab}
		}
	`;
    const labelMobile = `
		.eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} > label {
            ${labelTypoStylesMobile}
            ${labelMarginStylesMobile}
		}
	`;

    const checkboxDesktop = `
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} input[type=checkbox] {
			background-color: ${checkboxBgColor};
			border-color: ${checkboxBrColor};
			border-width: ${checkboxBorder}px;
            height: ${checkboxSizeRange}px;
            ${checkboxWidthStylesDesktop}
		}
		.eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} input[type=checkbox]:checked {
			border-color: ${checkboxBrCheckedColor};
		}
		.eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} .eb-checkbox-inputarea label {
            ${checkboxTypoStylesDesktop}
            color: ${checkboxColor}
		}
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} .eb-checkbox-inputarea {
            ${checkboxSpacingStylesDesktop}
        }

        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} input[type=checkbox]::before {
            color: ${checkboxBrCheckedColor};
            font-size: calc(${checkboxSizeRange}px /2);
        }
	`;
    const checkboxTab = `
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} input[type=checkbox] {
            height: ${TABcheckboxSizeRange}px;
            ${checkboxWidthStylesTab}
		}
		.eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} .eb-checkbox-inputarea label {
            ${checkboxTypoStylesTab}
		}
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} .eb-checkbox-inputarea {
            ${checkboxSpacingStylesTab}
        }
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} input[type=checkbox]::before {
            font-size: calc(${TABcheckboxSizeRange}px /2);
        }
	`;
    const checkboxMobile = `
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} input[type=checkbox] {
            height: ${MOBcheckboxSizeRange}px;
            ${checkboxWidthStylesMobile}
		}
		.eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} .eb-checkbox-inputarea label {
            ${checkboxTypoStylesMobile}
		}
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} .eb-checkbox-inputarea {
            ${checkboxSpacingStylesMobile}
        }
        .eb-form-wrapper.${parentBlockId} .eb-checkbox-field-wrapper.${blockId} input[type=checkbox]::before {
            font-size: calc(${MOBcheckboxSizeRange}px /2);
        }
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${labelDesktop}
		${checkboxDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${labelTab}
		${checkboxTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${labelMobile}
		${checkboxMobile}
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
