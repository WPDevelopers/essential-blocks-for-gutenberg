import { useState } from "@wordpress/element";
import {
    DEFAULT_BACKGROUND,
    DEFAULT_ACTIVE_BG,
    DEFAULT_CONTROLLER_COLOR,
} from "./constants";

import {
    rangeButtonWidth,
    rangeButtonHeight,
    rangeHeadingSpace,
} from "./constants/rangeNames";

import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";

import {
    // typoPrefix_name,
    // typoPrefix_job,
    typoPrefix_tgl,
} from "./constants/typographyPrefixConstants";

import {
    tglWrapMarginConst,
    tglWrapPaddingConst,
} from "./constants/dimensionsConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateResponsiveRangeStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        classHook,
        switchStyle,
        seperatorType,
        alignment,
        activeColor,
        activeBg,
        primaryLabelColor,
        secondaryLabelColor,
        labelSpace,
        labelSpaceUnit,
        backgroundType,
        backgroundColor,
        backgroundGradient,
        controllerType,
        controllerColor,
        controllerGradient,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        shadowColor,
        hOffset,
        vOffset,
        blur,
        spread,
        inset,
        initialContent,
        switchSize,

        [`${typoPrefix_tgl}FontSize`]: fontSize,
        [`${typoPrefix_tgl}SizeUnit`]: sizeUnit,
    } = attributes;

    const [isPrimary, setPrimary] = useState(
        initialContent === "primary" ? true : false
    );

    const getTransform = () => {
        if (isPrimary) return "translateX(0px)";

        switch (switchSize) {
            case "s":
                return "translateX(22px)";
            case "m":
                return "translateX(26px)";
            case "l":
                return "translateX(36px)";
            case "xl":
                return "translateX(42px)";
        }
    };

    const getRadius = () => {
        if (switchStyle === "rectangle") return "0px";

        switch (switchSize) {
            case "s":
                return "10px";
            case "m":
                return "13px";
            case "l":
                return "16px";
            case "xl":
                return "21px";
        }
    };

    // styles related to generateTypographyStyles start ⬇

    const {
        typoStylesDesktop: tglTypoStylesDesktop,
        typoStylesTab: tglTypoStylesTab,
        typoStylesMobile: tglTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_tgl,
        // defaultFontSize: 20,
    });
    // styles related to generateTypographyStyles end

    // styles related to generateResponsiveRangeStyles start ⬇
    const {
        rangeStylesDesktop: btnHeightDesktop,
        rangeStylesTab: btnHeightTab,
        rangeStylesMobile: btnHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeButtonHeight,
        customUnit: "px",
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: btnWidthDesktop,
        rangeStylesTab: btnWidthTab,
        rangeStylesMobile: btnWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeButtonWidth,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: headingSpaceDesktop,
        rangeStylesTab: headingSpaceTab,
        rangeStylesMobile: headingSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeHeadingSpace,
        property: "margin-bottom",
        attributes,
    });

    // styles related to generateResponsiveRangeStyles end

    // styles related to generateDimensionsControlStyles start ⬇
    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tglWrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tglWrapPaddingConst,
        styleFor: "padding",
    });
    // styles related to generateDimensionsControlStyles end

    // styles related to generateBackgroundControlStyles start ⬇
    const {
        backgroundStylesDesktop: wrpBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrpBackgroundStylesTab,
        hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
        backgroundStylesMobile: wrpBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
        overlayStylesDesktop: wrpOverlayStylesDesktop,
        hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
        overlayStylesTab: wrpOverlayStylesTab,
        hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
        overlayStylesMobile: wrpOverlayStylesMobile,
        hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
        bgTransitionStyle: wrpBgTransitionStyle,
        ovlTransitionStyle: wrpOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WrpBgConst,
        // noOverlay: true,
        // noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    // styles related to generateBackgroundControlStyles End

    // styles related to generateBorderShadowStyles start ⬇
    const {
        styesDesktop: wrpBdShdStyesDesktop,
        styesTab: wrpBdShdStyesTab,
        styesMobile: wrpBdShdStyesMobile,
        stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
        stylesHoverTab: wrpBdShdStylesHoverTab,
        stylesHoverMobile: wrpBdShdStylesHoverMobile,
        transitionStyle: wrpBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WrpBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // styles related to generateBorderShadowStyles End

    const wrapperStylesDesktop = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginDesktop}
		${wrpPaddingDesktop}
		${wrpBackgroundStylesDesktop}
		${wrpBdShdStyesDesktop}
		transition: all 0.5s, ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
	}

	.${blockId}.eb-toggle-wrapper:hover{
		${wrpHoverBackgroundStylesDesktop}
		${wrpBdShdStylesHoverDesktop}
	}

	.${blockId}.eb-toggle-wrapper:before{
		${wrpOverlayStylesDesktop}
		transition: all 0.5s, ${wrpOvlTransitionStyle};
	}

	.${blockId}.eb-toggle-wrapper:hover:before{
		${wrpHoverOverlayStylesDesktop}
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label-text,
	.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label,
	.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label-text,
	.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label
	{
		z-index:2;
	}


	.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle{
		z-index:0;
	}

	${switchStyle === "toggle"
            ? `
			.${blockId}.eb-toggle-wrapper .eb-text-switch-content{
				${btnWidthDesktop}
			}
			`
            : ""
        }

	.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle,
	.${blockId}.eb-toggle-wrapper .eb-toggle-controller
	{
		position:absolute;
		content:"";
		z-index:1;
		background-color: ${controllerColor || DEFAULT_CONTROLLER_COLOR};
		background-image:${controllerType === "gradient" ? controllerGradient : "none"};
		transition:0.4s;
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		text-align: ${alignment || "center"};
		${tglTypoStylesDesktop}
		${headingSpaceDesktop}
	}

	.${blockId}.eb-toggle-wrapper .eb-text-switch-label,
	.${blockId}.eb-toggle-wrapper .eb-toggle-slider{
		${switchStyle === "toggle" ? `${btnHeightDesktop}` : ""}
		background-color:${backgroundColor || DEFAULT_BACKGROUND};
		background-image:${backgroundType === "gradient" ? backgroundGradient : "none"};
		${switchStyle === "rounded" ? `border-radius:21px;` : ""}
		border: ${borderWidth || 0}px ${borderStyle || "none"} ${borderColor || "#00000000"
        };
		box-shadow: ${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${spread || 0
        }px ${shadowColor || "#00000000"} ${inset ? "inset" : ""};

	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-switch{
		margin: 0 ${labelSpace || 10}${labelSpaceUnit || px};
		${switchStyle === "text" ? `display:none` : ""}
	}

	${switchStyle === "text"
            ? `
			.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label-text,
			.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label
			{
				${seperatorType !== "none" ? `margin:0 -10px 0 10px;` : ""}
				padding:10px 20px;
				border:${borderWidth || 0}px ${borderStyle || "none"} ${borderColor || "#00000000"
            };
				border-right:none;
				border-top-left-radius: ${borderRadius || 0}px;
				border-bottom-left-radius: ${borderRadius || 0}px;
			}


			.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label-text,
			.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label
			{
				${seperatorType !== "none" ? `margin:0 10px 0 -10px;` : ""}
				padding:10px 20px;
				border:${borderWidth || 0}px ${borderStyle || "none"} ${borderColor || "#00000000"
            };
				border-left:none;
				border-top-right-radius: ${borderRadius || 0}px;
				border-bottom-right-radius: ${borderRadius || 0}px;
			}
			`
            : ""
        }

	.${blockId}.eb-toggle-wrapper .eb-toggle-seperator{
		display: ${switchStyle === "text" ? "inline-block" : "none"};
	}

	.${blockId}.eb-toggle-wrapper .eb-switch-names{
		${fontSize ? `font-size:${fontSize}${sizeUnit || "px"};` : ""}
	}

	`;

    const wrapperStylesTab = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBackgroundStylesTab}
		${wrpBdShdStyesTab}
	}

	.${blockId}.eb-toggle-wrapper:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}
	}

	.${blockId}.eb-toggle-wrapper:before{
		${wrpOverlayStylesTab}
	}

	.${blockId}.eb-toggle-wrapper:hover:before{
		${wrpHoverOverlayStylesTab}
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		${tglTypoStylesTab}
		${headingSpaceTab}
	}

	${switchStyle === "toggle"
            ? `
			.${blockId}.eb-toggle-wrapper .eb-text-switch-content{
				${btnWidthTab}
			}

			.${blockId}.eb-toggle-wrapper .eb-text-switch-label,
			.${blockId}.eb-toggle-wrapper .eb-toggle-slider{
				${btnHeightTab}
			}
			`
            : ""
        }


	`;

    const wrapperStylesMobile = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBackgroundStylesMobile}
		${wrpBdShdStyesMobile}
	}

	.${blockId}.eb-toggle-wrapper:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}
	}

	.${blockId}.eb-toggle-wrapper:before{
		${wrpOverlayStylesMobile}
	}

	.${blockId}.eb-toggle-wrapper:hover:before{
		${wrpHoverOverlayStylesMobile}
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		${tglTypoStylesMobile}
		${headingSpaceMobile}
	}

	${switchStyle === "toggle"
            ? `
			.${blockId}.eb-toggle-wrapper .eb-text-switch-content{
				${btnWidthMobile}
			}

			.${blockId}.eb-toggle-wrapper .eb-text-switch-label,
			.${blockId}.eb-toggle-wrapper .eb-toggle-slider{
				${btnHeightMobile}
			}
			`
            : ""
        }

	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}


	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}


	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}


	`);

    //
    // styling codes End here
    //
    return (
        <>
            <style>
                {`
					.eb-toggle-content .block-editor-block-list__layout > p:nth-child(2) > span {
						opacity: 1 !important;
					}
					${!isPrimary
                        ? `
							.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle{
								margin-left: 50%;
							}
							`
                        : ""
                    }

					${switchStyle !== "toggle"
                        ? `
						.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle,
						.${blockId}.eb-toggle-wrapper .eb-toggle-controller{
							transform: ${getTransform()};
							border-radius: ${getRadius()};
						}
						`
                        : ""
                    }


					.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label-text,
					.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label
					{
						color: ${isPrimary
                        ? activeColor || primaryLabelColor || "inherit"
                        : primaryLabelColor || "inherit"
                    };
						${switchStyle === "text"
                        ? `background: ${isPrimary
                            ? activeBg || DEFAULT_ACTIVE_BG
                            : backgroundColor || DEFAULT_BACKGROUND
                        };`
                        : ""
                    }
					}


					.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label-text,
					.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label
					{
						color: ${!isPrimary
                        ? activeColor || secondaryLabelColor || "inherit"
                        : secondaryLabelColor || "inherit"
                    };
						${switchStyle === "text"
                        ? `background: ${!isPrimary
                            ? activeBg || DEFAULT_ACTIVE_BG
                            : backgroundColor || DEFAULT_BACKGROUND
                        };`
                        : ""
                    }
					}


					.${blockId}.eb-toggle-wrapper .eb-toggle-seperator{
						background:${backgroundColor || DEFAULT_BACKGROUND};
					}

				`}
            </style>

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
