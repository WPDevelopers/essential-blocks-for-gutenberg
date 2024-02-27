import {
    BUTTON_PADDING,
    FIXED_WIDTH,
    ICON_SIZE,
    ICON_SPACE,
    BUTTON_BACKGROUND,
    BUTTON_BORDER,
    WRAPPER_MARGIN,
} from "./constants";

import { typoPrefix_text } from "./typographyContants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateBackgroundControlStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockMeta,
        blockId,
        resOption,
        buttonWidth,
        addIcon,
        iconPosition,
        hoverTextColor,
        textColor,
        buttonAlign,
        hoverEffect,
        hoverTransition,
    } = attributes;

    /**
     * CSS/styling Codes Starts from Here
     */

    // button custom padding
    const {
        dimensionStylesDesktop: buttonPaddingDesktop,
        dimensionStylesTab: buttonPaddingTab,
        dimensionStylesMobile: buttonPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: BUTTON_PADDING,
        styleFor: "padding",
        attributes,
    });

    // button custom width
    const {
        rangeStylesDesktop: buttonWidthDesktop,
        rangeStylesTab: buttonWidthTab,
        rangeStylesMobile: buttonWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: FIXED_WIDTH,
        property: "width",
        attributes,
    });

    // button icon size
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

    // button gap right
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

    // button background styles
    const {
        backgroundStylesDesktop: btnBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: btnHoverBackgroundStylesDesktop,
        backgroundStylesTab: btnBackgroundStylesTab,
        hoverBackgroundStylesTab: btnHoverBackgroundStylesTab,
        backgroundStylesMobile: btnBackgroundStylesMobile,
        hoverBackgroundStylesMobile: btnHoverBackgroundStylesMobile,
        bgTransitionStyle: btnBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: BUTTON_BACKGROUND,
    });

    // border
    const {
        styesDesktop: bdShadowStyesDesktop,
        styesTab: bdShadowStyesTab,
        styesMobile: bdShadowStyesMobile,
        stylesHoverDesktop: bdShadowStylesHoverDesktop,
        stylesHoverTab: bdShadowStylesHoverTab,
        stylesHoverMobile: bdShadowStylesHoverMobile,
        transitionStyle: bdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: BUTTON_BORDER,
        attributes,
    });

    // typography
    const {
        typoStylesDesktop: textTypoStylesDesktop,
        typoStylesTab: textTypoStylesTab,
        typoStylesMobile: textTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_text,
    });

    // wrapper margin
    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const desktopStyles = `
		.eb-button-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
		}

		.eb-button-wrapper.${blockId}.eb-button-alignment {
			align-items: ${buttonAlign};
		}

		.eb-button-wrapper.${blockId} .eb-button {
			justify-content: ${buttonAlign};
		}

		.eb-button-wrapper.${blockId} .eb-button-anchor {
			${btnBackgroundStylesDesktop}
			${bdShadowStyesDesktop}
			${textTypoStylesDesktop}
			${buttonPaddingDesktop}
			${textColor ? `color: ${textColor};` : ""}
			transition: ${hoverTransition ? `all ${hoverTransition}s,` : ""
        } ${btnBgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		${hoverEffect
            ? `.eb-button-wrapper.${blockId} .eb-button-anchor:before {
				${btnHoverBackgroundStylesDesktop}
                ${bdShadowStylesHoverDesktop ? bdShadowStylesHoverDesktop : bdShadowStyesDesktop}
                ${hoverTextColor ? `color: ${hoverTextColor};` : ""}
			}
			`
            : ""
        }

		.eb-button-wrapper.${blockId} .eb-button-anchor:hover {
			${btnHoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
			${hoverTextColor ? `color: ${hoverTextColor};` : ""}
		}

		${buttonWidth !== "auto"
            ? buttonWidth === "full"
                ? `
					.eb-button-wrapper.${blockId} .eb-button-anchor {
						width: 100%;
					}`
                : `.eb-button-wrapper.${blockId} .eb-button-anchor {
							${buttonWidthDesktop}
						}`
            : ""
        }

		${addIcon
            ? `.eb-button-wrapper.${blockId} .eb-button-icon {
					${iconSizeDesktop}
					${iconPosition === "left" ? iconGapRightDesktop : iconGapLeftDesktop}
				}`
            : ""
        }
	`;

    const tabStyles = `
		.eb-button-wrapper.${blockId} {
			${wrapperMarginStylesTab}
		}

		.eb-button-wrapper.${blockId} .eb-button-anchor {
			${bdShadowStyesTab}
			${textTypoStylesTab}
			${buttonPaddingTab}
		}

		.eb-button-wrapper.${blockId} .eb-button-anchor:hover {
			${bdShadowStylesHoverTab}
		}

		${buttonWidth === "fixed"
            ? `.eb-button-wrapper.${blockId} .eb-button-anchor {
					${buttonWidthTab}
				}`
            : ""
        }

		${addIcon
            ? `.eb-button-wrapper.${blockId} .eb-button-icon {
					${iconSizeTab}
					${iconPosition === "left" ? iconGapRightTab : iconGapLeftTab}
				}`
            : ""
        }

        ${hoverEffect
            ? `.eb-button-wrapper.${blockId} .eb-button-anchor:before {
				${btnHoverBackgroundStylesTab}
                ${bdShadowStylesHoverTab ? bdShadowStylesHoverTab : bdShadowStyesDesktop}
			}
			`
            : ""
        }
	`;

    const mobileStyles = `
		.eb-button-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
		}

		.eb-button-wrapper.${blockId} .eb-button-anchor {
			${bdShadowStyesMobile}
			${textTypoStylesMobile}
			${buttonPaddingMobile}
		}

		.eb-button-wrapper.${blockId} .eb-button-anchor:hover {
			${bdShadowStylesHoverMobile}
		}

		${buttonWidth === "fixed"
            ? `.eb-button-wrapper.${blockId} .eb-button-anchor {
					${buttonWidthMobile}
				}`
            : ""
        }

		${addIcon
            ? `.eb-button-wrapper.${blockId} .eb-button-icon {
					${iconSizeMobile}
					${iconPosition === "left" ? iconGapRightMobile : iconGapLeftMobile}
				}`
            : ""
        }

        ${hoverEffect
            ? `.eb-button-wrapper.${blockId} .eb-button-anchor:before {
				${btnHoverBackgroundStylesMobile}
                ${bdShadowStylesHoverMobile ? bdShadowStylesHoverMobile : bdShadowStyesDesktop}
			}
			`
            : ""
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
