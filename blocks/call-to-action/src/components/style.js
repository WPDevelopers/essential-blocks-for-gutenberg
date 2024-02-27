import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BACK,
    WRAPPER_BORDER,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    BUTTON_BORDER,
    BUTTON_PADDING,
    ICON_PADDING,
    ICON_SIZE,
    DESC_PADDING,
} from "./constants";
import {
    typoPrefix_title,
    typoPrefix_subtitle,
    typoPrefix_desc,
    typoPrefix_btn,
} from "./typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockMeta,
        blockId,
        resOption,
        contentStyle,
        contentAlign,
        iconColor,
        titleColor,
        subtitleColor,
        descriptionColor,
        buttonBackgroundColor,
        buttonTextColor,
        buttonSize,
        buttonHoverTextColor,
        buttonHoverBackgroundColor,
        buttonPosition,
        btnHoverEffect,
        classHook,
    } = attributes;

    const buttonSizeCss = (buttonSize) => {
        switch (buttonSize) {
            case "small":
                return `.eb-cia-wrapper.${blockId} .eb-cia-button.is-small {
					padding: 5px 10px;
					font-size: 14px;
				}`;
            case "medium":
                return `.eb-cia-wrapper.${blockId} .eb-cia-button.is-medium {
					padding: 8px 15px;
					font-size: 16px;
				}`;
            case "large":
                return `.eb-cia-wrapper.${blockId} .eb-cia-button.is-large {
					padding: 13px 20px;
					font-size: 18px;
				}`;
            case "extra-large":
                return `.eb-cia-wrapper.${blockId} .eb-cia-button.is-extra-large {
					padding: 15px 30px;
					font-size: 20px;
				}`;
            default:
                return "";
        }
    };

    // wrapper background
    const {
        backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrapperBackgroundStylesTab,
        hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
        backgroundStylesMobile: wrapperBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
        overlayStylesDesktop: wrapperOverlayStylesDesktop,
        hoverOverlayStylesDesktop: wrapperHoverOverlayStylesDesktop,
        overlayStylesTab: wrapperOverlayStylesTab,
        hoverOverlayStylesTab: wrapperHoverOverlayStylesTab,
        overlayStylesMobile: wrapperOverlayStylesMobile,
        hoverOverlayStylesMobile: wrapperHoverOverlayStylesMobile,
        bgTransitionStyle: wrapperBgTransitionStyle,
        ovlTransitionStyle: wrapperOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WRAPPER_BACK,
    });

    // wrapper border & shadow settings
    const {
        styesDesktop: bdShadowStyesDesktop,
        styesTab: bdShadowStyesTab,
        styesMobile: bdShadowStyesMobile,
        stylesHoverDesktop: bdShadowStylesHoverDesktop,
        stylesHoverTab: bdShadowStylesHoverTab,
        stylesHoverMobile: bdShadowStylesHoverMobile,
        transitionStyle: bdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WRAPPER_BORDER,
        attributes,
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

    // wrapper padding
    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    // title typography
    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
    });

    // title margin
    const {
        dimensionStylesDesktop: titleMarginStylesDesktop,
        dimensionStylesTab: titleMarginStylesTab,
        dimensionStylesMobile: titleMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: TITLE_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // subtitle typography
    const {
        typoStylesDesktop: subtitleTypoStylesDesktop,
        typoStylesTab: subtitleTypoStylesTab,
        typoStylesMobile: subtitleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_subtitle,
    });

    // subtitle margin
    const {
        dimensionStylesDesktop: subtitleMarginStylesDesktop,
        dimensionStylesTab: subtitleMarginStylesTab,
        dimensionStylesMobile: subtitleMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: SUBTITLE_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // description typography
    const {
        typoStylesDesktop: descTypoStylesDesktop,
        typoStylesTab: descTypoStylesTab,
        typoStylesMobile: descTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_desc,
    });

    // description padding
    const {
        dimensionStylesDesktop: descPaddingStylesDesktop,
        dimensionStylesTab: descPaddingStylesTab,
        dimensionStylesMobile: descPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: DESC_PADDING,
        styleFor: "padding",
        attributes,
    });

    // button typography
    const {
        typoStylesDesktop: btnTypoStylesDesktop,
        typoStylesTab: btnTypoStylesTab,
        typoStylesMobile: btnTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_btn,
    });

    // button padding
    const {
        dimensionStylesDesktop: btnPaddingStylesDesktop,
        dimensionStylesTab: btnPaddingStylesTab,
        dimensionStylesMobile: btnPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: BUTTON_PADDING,
        styleFor: "padding",
        attributes,
    });

    // btn border & shadow settings
    const {
        styesDesktop: btnBdShadowStyesDesktop,
        styesTab: btnBdShadowStyesTab,
        styesMobile: btnBdShadowStyesMobile,
        stylesHoverDesktop: btnBdShadowStylesHoverDesktop,
        stylesHoverTab: btnBdShadowStylesHoverTab,
        stylesHoverMobile: btnBdShadowStylesHoverMobile,
        transitionStyle: btnBdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: BUTTON_BORDER,
        attributes,
    });

    // icon size
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

    // icon padding
    const {
        dimensionStylesDesktop: iconPaddingStylesDesktop,
        dimensionStylesTab: iconPaddingStylesTab,
        dimensionStylesMobile: iconPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: ICON_PADDING,
        styleFor: "padding",
        attributes,
    });

    const desktopStyles = `
		.eb-cia-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${bdShadowStyesDesktop}
			flex-direction: ${contentStyle === "basic" ? "column" : "row"};
			transition: ${wrapperBgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-cia-wrapper.${blockId}:before {
			${wrapperOverlayStylesDesktop}
			transition: ${wrapperOvlTransitionStyle};
		}

		.eb-cia-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}

		.eb-cia-wrapper.${blockId}:hover:before {
			${wrapperHoverOverlayStylesDesktop}
		}

		${contentAlign
            ? `.eb-cia-wrapper.${blockId} .eb-cia-text-wrapper {
			text-align: ${contentAlign};
		}`
            : ""
        }

		.eb-cia-wrapper.${blockId} .eb-cia-title {
			${titleTypoStylesDesktop}
			${titleMarginStylesDesktop}
			${titleColor ? `color: ${titleColor}` : ""};
		}

		.eb-cia-wrapper.${blockId} .eb-cia-subtitle {
			${subtitleTypoStylesDesktop}
			${subtitleMarginStylesDesktop}
			${subtitleColor ? `color: ${subtitleColor}` : ""}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-description {
			${descTypoStylesDesktop}
			${descPaddingStylesDesktop}
			${descriptionColor ? `color: ${descriptionColor}` : ""}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-icon {
			${iconSizeStylesDesktop}
			${iconPaddingStylesDesktop}
			${iconColor ? `color: ${iconColor}` : ""}
		}

		${buttonSizeCss(buttonSize)}

		${buttonSize === "custom"
            ? `
				.eb-cia-wrapper.${blockId} .eb-cia-button.is-custom {
					${btnPaddingStylesDesktop}
				}
			`
            : ""
        }

		.eb-cia-wrapper.${blockId} .eb-cia-button-wrapper {
			justify-content: ${buttonPosition};
		}

		.eb-cia-wrapper.${blockId} .eb-cia-button {
			${btnTypoStylesDesktop}
			${btnBdShadowStyesDesktop}
			${buttonTextColor ? `color: ${buttonTextColor}` : ""};
			${buttonBackgroundColor ? `background-color: ${buttonBackgroundColor}` : ""};
			transition: background 0.5s, ${btnBdShadowTransitionStyle};
		}

		.eb-cia-wrapper.${blockId} .eb-cia-button:hover {
			${btnBdShadowStylesHoverDesktop}
			${buttonHoverTextColor ? `color: ${buttonHoverTextColor}` : ""};
			${buttonHoverBackgroundColor
            ? `background-color: ${buttonHoverBackgroundColor}`
            : ""
        };
		}

		${btnHoverEffect
            ? `.eb-cia-wrapper.${blockId} .eb-cia-button:before {
                ${btnBdShadowStylesHoverDesktop ? btnBdShadowStylesHoverDesktop : btnBdShadowStyesDesktop}
                ${buttonHoverTextColor ? `color: ${buttonHoverTextColor}` : ""};
                ${buttonHoverBackgroundColor
                ? `background-color: ${buttonHoverBackgroundColor}`
                : ""
            };
			}
			`
            : ""
        }
	`;

    const tabStyles = `
		.eb-cia-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${bdShadowStyesTab}
			flex-direction: column;
		}

		.eb-cia-wrapper.${blockId}:before {
			${wrapperOverlayStylesTab}
		}

		.eb-cia-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		}

		.eb-cia-wrapper.${blockId}:before:hover {
			${wrapperHoverOverlayStylesTab}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-title {
			${titleTypoStylesTab}
			${titleMarginStylesTab}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-subtitle {
			${subtitleTypoStylesTab}
			${subtitleMarginStylesTab}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-description {
			${descTypoStylesTab}
			${descPaddingStylesTab}
		}

		${buttonSize === "custom"
            ? `
				.eb-cia-wrapper.${blockId} .eb-cia-button.is-custom {
					${btnPaddingStylesTab}
				}
			`
            : ""
        }

		.eb-cia-wrapper.${blockId} .eb-cia-button {
			${btnTypoStylesTab}
			${btnBdShadowStyesTab}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-button:hover {
			${btnBdShadowStylesHoverTab}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-icon {
			${iconSizeStylesTab}
			${iconPaddingStylesTab}
		}

        ${btnHoverEffect
            ? `.eb-cia-wrapper.${blockId} .eb-cia-button:before {
                ${btnBdShadowStylesHoverTab ? btnBdShadowStylesHoverTab : btnBdShadowStyesDesktop}
			}
			`
            : ""
        }
	`;

    const mobileStyles = `
		.eb-cia-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${bdShadowStyesMobile}
		}

		.eb-cia-wrapper.${blockId}:before {
			${wrapperOverlayStylesMobile}
		}

		.eb-cia-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		}

		.eb-cia-wrapper.${blockId}:before:hover {
			${wrapperHoverOverlayStylesMobile}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-title {
			${titleTypoStylesMobile}
			${titleMarginStylesMobile}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-subtitle {
			${subtitleTypoStylesMobile}
			${subtitleMarginStylesMobile}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-description {
			${descTypoStylesMobile}
			${descPaddingStylesMobile}
		}

		${buttonSize === "custom"
            ? `
				.eb-cia-wrapper.${blockId} .eb-cia-button.is-custom {
					${btnPaddingStylesMobile}
				}
			`
            : ""
        }

		.eb-cia-wrapper.${blockId} .eb-cia-button {
			${btnTypoStylesMobile}
			${btnBdShadowStyesMobile}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-button:hover {
			${btnBdShadowStylesHoverMobile}
		}

		.eb-cia-wrapper.${blockId} .eb-cia-icon {
			${iconSizeStylesMobile}
			${iconPaddingStylesMobile}
		}
        ${btnHoverEffect
            ? `.eb-cia-wrapper.${blockId} .eb-cia-button:before {
                ${btnBdShadowStylesHoverMobile ? btnBdShadowStylesHoverMobile : btnBdShadowStyesDesktop}
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
