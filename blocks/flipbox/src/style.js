import {
    dimensionsMargin,
    dimensionsPadding,
    buttonPadding,
    frontIconMargin,
    frontIconPadding,
    backIconMargin,
    backIconPadding,
    frontTitlePadding,
    backTitlePadding,
    frontContentPadding,
    backContentPadding,
    frontImgPadding,
    backImgPadding,
    frontItemPadding,
    backItemPadding,
} from "./constants/dimensionsNames";
import {
    typoPrefix_title,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import {
    flipboxBackWrapper,
    flipboxFrontWrapper,
} from "./constants/backgroundsConstants";

import {
    boxHeightAttr,
    boxFrontIconSizeAttr,
    boxBackIconSizeAttr,
    boxWidthAttr,
    buttonIconSizeAttr,
    frontImgSizeAttr,
    backImgSizeAttr,
    frontImgRadiusAttr,
    backImgRadiusAttr,
} from "./constants/rangeNames";
import {
    borderShadow,
    borderShadowBtn,
    borderShadowFrontIcon,
    borderShadowBackIcon,
} from "./constants/borderShadowConstants";

const {
    getFlipTransform,
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateResponsiveRangeStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const getFlexAlign = (align) => {
        switch (align) {
            case "left":
                return "flex-start";
            case "right":
                return "flex-end";
            default:
                return "center";
        }
    };
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        isHover,
        flipType,
        selectedSide,
        frontIconOrImage,
        frontIcon,
        frontImageUrl,
        backIconOrImage,
        backIcon,
        backImageUrl,
        linkType,
        buttonIconPos,
        link,
        frontTitleColor,
        backTitleColor,
        frontContentColor,
        backContentColor,
        frontIconColor,
        backIconColor,
        buttonStyle,
        buttonBackground,
        buttonColor,
        frontIconBackground,
        backIconBackground,
        transitionSpeed,
        displayButtonIcon,
        align,
        classHook,
    } = attributes;

    // Default colors
    const deafultFrontTitleColor = "#ffffff";
    const defaultFrontContentColor = "#ffffff";
    const defautlBackContentColor = "#ffffff";
    const defaultBackTitleColor = "#ffffff";
    const defaultFrontIconBackground = "transparent";
    const defaultBackIconBackground = "transparent";

    // wrapper styles css in strings ⬇
    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: dimensionsMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: dimensionsPadding,
        styleFor: "padding",
        attributes,
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
        controlName: borderShadow,
        attributes,
    });

    // responsive range controller
    const {
        rangeStylesDesktop: wrapperHeightStylesDesktop,
        rangeStylesTab: wrapperHeightStylesTab,
        rangeStylesMobile: wrapperHeightStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: boxHeightAttr,
        property: "height",
        attributes,
        customUnit: "px",
    });

    const {
        rangeStylesDesktop: wrapperMinHeightStylesDesktop,
        rangeStylesTab: wrapperMinHeightStylesTab,
        rangeStylesMobile: wrapperMinHeightStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: boxHeightAttr,
        property: "min-height",
        attributes,
        customUnit: "px",
    });

    const {
        rangeStylesDesktop: wrapperWidthStylesDesktop,
        rangeStylesTab: wrapperWidthStylesTab,
        rangeStylesMobile: wrapperWidthStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: boxWidthAttr,
        property: "max-width",
        attributes,
    });

    const {
        rangeStylesDesktop: frontFontSizeDesktop,
        rangeStylesTab: frontFontSizeTab,
        rangeStylesMobile: frontFontSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: boxFrontIconSizeAttr,
        property: "font-size",
        attributes,
    });

    const {
        rangeStylesDesktop: backFontSizeDesktop,
        rangeStylesTab: backFontSizeTab,
        rangeStylesMobile: backFontSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: boxBackIconSizeAttr,
        property: "font-size",
        attributes,
    });

    // front background controller
    const {
        backgroundStylesDesktop: frontBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: frontHoverBackgroundStylesDesktop,
        backgroundStylesTab: frontBackgroundStylesTab,
        hoverBackgroundStylesTab: frontHoverBackgroundStylesTab,
        backgroundStylesMobile: frontBackgroundStylesMobile,
        hoverBackgroundStylesMobile: frontHoverBackgroundStylesMobile,
        overlayStylesDesktop: frontOverlayStylesDesktop,
        hoverOverlayStylesDesktop: frontHoverOverlayStylesDesktop,
        overlayStylesTab: frontOverlayStylesTab,
        hoverOverlayStylesTab: frontHoverOverlayStylesTab,
        overlayStylesMobile: frontOverlayStylesMobile,
        hoverOverlayStylesMobile: frontHoverOverlayStylesMobile,
        bgTransitionStyle: frontBgTransitionStyle,
        ovlTransitionStyle: frontOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: flipboxFrontWrapper,
    });

    // front Icon Margin & Padding
    const {
        dimensionStylesDesktop: frontIconMarginStylesDesktop,
        dimensionStylesTab: frontIconMarginStylesTab,
        dimensionStylesMobile: frontIconMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: frontIconMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: frontIconPaddingStylesDesktop,
        dimensionStylesTab: frontIconPaddingStylesTab,
        dimensionStylesMobile: frontIconPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: frontIconPadding,
        styleFor: "padding",
        attributes,
    });

    // front icon border
    const {
        styesDesktop: frontIconBorderDesktop,
        styesTab: frontIconBorderTab,
        styesMobile: frontIconBorderMobile,
        stylesHoverDesktop: frontIconBorderHoverDesktop,
        stylesHoverTab: frontIconBorderHoverTab,
        stylesHoverMobile: frontIconBorderHoverMobile,
        transitionStyle: frontIconTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: borderShadowFrontIcon,
        attributes,
        noShadow: true,
    });

    // front image
    const {
        rangeStylesDesktop: frontImgHeightDesktop,
        rangeStylesTab: frontImgHeightTab,
        rangeStylesMobile: frontImgHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: frontImgSizeAttr,
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: frontImgWidthDesktop,
        rangeStylesTab: frontImgWidthTab,
        rangeStylesMobile: frontImgWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: frontImgSizeAttr,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: frontImgRadiusDesktop,
        rangeStylesTab: frontImgRadiusTab,
        rangeStylesMobile: frontImgRadiusMobile,
    } = generateResponsiveRangeStyles({
        controlName: frontImgRadiusAttr,
        property: "border-radius",
        attributes,
    });

    // back background controller
    const {
        backgroundStylesDesktop: backBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: backHoverBackgroundStylesDesktop,
        backgroundStylesTab: backBackgroundStylesTab,
        hoverBackgroundStylesTab: backHoverBackgroundStylesTab,
        backgroundStylesMobile: backBackgroundStylesMobile,
        hoverBackgroundStylesMobile: backHoverBackgroundStylesMobile,
        overlayStylesDesktop: backOverlayStylesDesktop,
        hoverOverlayStylesDesktop: backHoverOverlayStylesDesktop,
        overlayStylesTab: backOverlayStylesTab,
        hoverOverlayStylesTab: backHoverOverlayStylesTab,
        overlayStylesMobile: backOverlayStylesMobile,
        hoverOverlayStylesMobile: backHoverOverlayStylesMobile,
        bgTransitionStyle: backBgTransitionStyle,
        ovlTransitionStyle: backOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: flipboxBackWrapper,
    });

    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
    });

    const {
        typoStylesDesktop: contentTypoStylesDesktop,
        typoStylesTab: contentTypoStylesTab,
        typoStylesMobile: contentTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_content,
    });

    // back Icon Margin & Padding
    const {
        dimensionStylesDesktop: backIconMarginStylesDesktop,
        dimensionStylesTab: backIconMarginStylesTab,
        dimensionStylesMobile: backIconMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: backIconMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: backIconPaddingStylesDesktop,
        dimensionStylesTab: backIconPaddingStylesTab,
        dimensionStylesMobile: backIconPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: backIconPadding,
        styleFor: "padding",
        attributes,
    });

    // back icon border
    const {
        styesDesktop: backIconBorderDesktop,
        styesTab: backIconBorderTab,
        styesMobile: backIconBorderMobile,
        stylesHoverDesktop: backIconBorderHoverDesktop,
        stylesHoverTab: backIconBorderHoverTab,
        stylesHoverMobile: backIconBorderHoverMobile,
        transitionStyle: backIconTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: borderShadowBackIcon,
        attributes,
        noShadow: true,
    });

    // back image
    const {
        rangeStylesDesktop: backImgHeightDesktop,
        rangeStylesTab: backImgHeightTab,
        rangeStylesMobile: backImgHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: backImgSizeAttr,
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: backImgWidthDesktop,
        rangeStylesTab: backImgWidthTab,
        rangeStylesMobile: backImgWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: backImgSizeAttr,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: backImgRadiusDesktop,
        rangeStylesTab: backImgRadiusTab,
        rangeStylesMobile: backImgRadiusMobile,
    } = generateResponsiveRangeStyles({
        controlName: backImgRadiusAttr,
        property: "border-radius",
        attributes,
    });

    // front title
    const {
        dimensionStylesDesktop: frontTitlePaddingStylesDesktop,
        dimensionStylesTab: frontTitlePaddingStylesTab,
        dimensionStylesMobile: frontTitlePaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: frontTitlePadding,
        styleFor: "padding",
        attributes,
    });

    // back title
    const {
        dimensionStylesDesktop: backTitlePaddingStylesDesktop,
        dimensionStylesTab: backTitlePaddingStylesTab,
        dimensionStylesMobile: backTitlePaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: backTitlePadding,
        styleFor: "padding",
        attributes,
    });

    // front content padding
    const {
        dimensionStylesDesktop: frontContentPaddingStylesDesktop,
        dimensionStylesTab: frontContentPaddingStylesTab,
        dimensionStylesMobile: frontContentPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: frontContentPadding,
        styleFor: "padding",
        attributes,
    });

    // back content Padding
    const {
        dimensionStylesDesktop: backContentPaddingStylesDesktop,
        dimensionStylesTab: backContentPaddingStylesTab,
        dimensionStylesMobile: backContentPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: backContentPadding,
        styleFor: "padding",
        attributes,
    });

    // front Image Padding
    const {
        dimensionStylesDesktop: frontImgPaddingStylesDesktop,
        dimensionStylesTab: frontImgPaddingStylesTab,
        dimensionStylesMobile: frontImgPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: frontImgPadding,
        styleFor: "padding",
        attributes,
    });

    // back Image Padding
    const {
        dimensionStylesDesktop: backImgPaddingStylesDesktop,
        dimensionStylesTab: backImgPaddingStylesTab,
        dimensionStylesMobile: backImgPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: backImgPadding,
        styleFor: "padding",
        attributes,
    });

    // front Item Padding
    const {
        dimensionStylesDesktop: frontItemPaddingStylesDesktop,
        dimensionStylesTab: frontItemPaddingStylesTab,
        dimensionStylesMobile: frontItemPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: frontItemPadding,
        styleFor: "padding",
        attributes,
    });

    // back Item Padding
    const {
        dimensionStylesDesktop: backItemPaddingStylesDesktop,
        dimensionStylesTab: backItemPaddingStylesTab,
        dimensionStylesMobile: backItemPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: backItemPadding,
        styleFor: "padding",
        attributes,
    });

    const flipContainerStyleDesktop = `
		.eb-flipbox-align-center .eb-flipper {
			margin-right: auto !important;
			margin-left: auto !important;
		}
		.eb-flipbox-align-right .eb-flipper {
			margin-left: auto !important;
		}
		.eb-flipbox-container.${blockId}{
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			width: 100%;
			overflow: hidden;
		}
	`;

    const flipContainerStyleTab = `
	 .eb-flipbox-container.${blockId}{
		 ${wrapperMarginStylesTab}
		 ${wrapperPaddingStylesTab}
	 }
	 `;

    const flipContainerStyleMobile = `
	 .eb-flipbox-container.${blockId}{
		 ${wrapperMarginStylesMobile}
		 ${wrapperPaddingStylesMobile}
	 }
	 `;

    const itemsContainerStyle = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-items-container {
		${frontItemPaddingStylesDesktop}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-items-container {
		${backItemPaddingStylesDesktop}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-items-container {
	align-items: ${getFlexAlign(align)};
	}
	`;

    const itemsContainerStyleTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-items-container {
		${frontItemPaddingStylesTab}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-items-container {
		${backItemPaddingStylesTab}
	}
	`;

    const itemsContainerStyleMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-items-container {
		${frontItemPaddingStylesMobile}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-items-container {
		${backItemPaddingStylesMobile}
	}
	`;

    // prefix title styles css in strings ⬇
    const titleStylesDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title, .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesDesktop}
		 width: 100%;
		 text-align: ${align};
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title {
		${frontTitlePaddingStylesDesktop}
		 color: ${frontTitleColor ? frontTitleColor : deafultFrontTitleColor};
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		${backTitlePaddingStylesDesktop}
		 color: ${backTitleColor ? backTitleColor : defaultBackTitleColor};
	 }
	 `;

    const titleStylesTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front-title {
		${frontTitlePaddingStylesTab}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		${frontTitlePaddingStylesTab}
	}

	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title, .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesTab}
	 }
	 `;

    const titleStylesMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front-title {
		${frontTitlePaddingStylesMobile}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		${frontTitlePaddingStylesMobile}
	}

	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title, .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesMobile}
	 }
	 `;

    // prefix content styles css in strings ⬇
    const contentStylesDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content, .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesDesktop}
		 width: 100%;
		 text-align: ${align};
		 margin: 10px 0;
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content {
		 ${frontContentPaddingStylesDesktop}
		 color: ${frontContentColor ? frontContentColor : defaultFrontContentColor};
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 ${backContentPaddingStylesDesktop}
		 color: ${backContentColor ? backContentColor : defautlBackContentColor};
	 }
	 `;

    const contentStylesTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front-content {
		${frontContentPaddingStylesTab}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		${backContentPaddingStylesTab}
	}

	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content, .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesTab}
	 }
	 `;

    const contentStylesMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front-content {
		${frontContentPaddingStylesMobile}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		${backContentPaddingStylesMobile}
	}

	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content, .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesMobile}
	 }
	 `;

    // flipper style
    const flipperStyle = `
	 .eb-flipbox-container.${blockId} .eb-flipper {
		 transition: ${transitionSpeed ? transitionSpeed / 1000 : 0.6}s;
		 ${wrapperMinHeightStylesDesktop}
		 ${wrapperWidthStylesDesktop}
	 }
	 .eb-flipbox-container.${blockId} .eb-flipper.back-is-selected {
		 transform:
			  ${isHover || selectedSide === "back" ? getFlipTransform(flipType) : "none"};
	 }
	 `;

    const flipperStyleTab = `
		.eb-flipbox-container.${blockId} .eb-flipper {
			${wrapperMinHeightStylesTab}
			${wrapperWidthStylesTab}
		}
	`;

    const flipperStyleMobile = `
		.eb-flipbox-container.${blockId} .eb-flipper {
			${wrapperMinHeightStylesMobile}
			${wrapperWidthStylesMobile}
		}
	`;

    const frontStyleDesktop = `
		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front {
			${frontBackgroundStylesDesktop}
			${wrapperMinHeightStylesDesktop}
			${wrapperWidthStylesDesktop}
			${bdShadowStyesDesktop}
			display: flex;
			justify-content: center;
			align-items: center;
			height: auto;
			width: 100%;
			z-index: 1;
			transition: ${flipType === "fade" ? "opacity 0.6s, " : ""
        }${frontBgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover {
			${frontHoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:before{
			${frontOverlayStylesDesktop}
			transition: ${frontOvlTransitionStyle};
		}


		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover:before{
			${frontHoverOverlayStylesDesktop}
		}

		${(isHover || selectedSide === "front") && flipType === "fade"
            ? `
			.eb-flipbox-container.${blockId} .eb-flipper.back-is-selected .eb-flipbox-front {
				opacity: 0;
			}
			`
            : ""
        }

	 `;

    const frontStyleTab = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front {
			${wrapperMinHeightStylesTab}
			${wrapperWidthStylesTab}
			${frontBackgroundStylesTab}
			${bdShadowStyesTab}
		 }

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover {
			${frontHoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		}

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:before{
			${frontOverlayStylesTab}
		}

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover:before{
			${frontHoverOverlayStylesTab}
		}

	 `;

    const frontStyleMobile = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front {
			${wrapperMinHeightStylesMobile}
			${wrapperWidthStylesMobile}
			${frontBackgroundStylesMobile}
			${bdShadowStyesMobile}
		 }

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover {
			${frontHoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		}

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:before{
			${frontOverlayStylesMobile}
		}


		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover:before{
			${frontHoverOverlayStylesMobile}
		}
	 `;

    const frontImageStyleDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container {
		 ${frontImgPaddingStylesDesktop}
		 display: ${frontIconOrImage === "image" && frontImageUrl ? "flex" : "none"};
		 justify-content: center;
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container img {
		 ${frontImgHeightDesktop}
		 ${frontImgWidthDesktop}
		 ${frontImgRadiusDesktop}
	 }
	 `;

    const frontImageStyleTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container {
		${frontImgPaddingStylesTab}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container img {
		${frontImgHeightTab}
		 ${frontImgWidthTab}
		 ${frontImgRadiusTab}
	}
	`;

    const frontImageStyleMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container {
		${frontImgPaddingStylesMobile}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container img {
		${frontImgHeightMobile}
		 ${frontImgWidthMobile}
		 ${frontImgRadiusMobile}
	}
	`;

    const frontIconStyleDesktop = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front {
			 ${frontFontSizeDesktop}
			 ${frontIconMarginStylesDesktop}
			 ${frontIconPaddingStylesDesktop}
			 ${frontIconBorderDesktop}
			 color: ${frontIconColor ? frontIconColor : "#ffffff"};
			 background: ${frontIconBackground
            ? frontIconBackground
            : defaultFrontIconBackground
        };
			 width: 100%;
			 text-align:${align};
			 display: ${frontIconOrImage === "icon" && frontIcon ? "block" : "none"};
			 transition: ${frontIconTransitionStyle};
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front:hover {
			 ${frontIconBorderHoverDesktop}
		 }
         .eb-flipbox-container.${blockId} .eb-flipbox-icon-front  .dashicons {
            ${frontFontSizeDesktop}
         }
	 `;

    const frontIconStyleTab = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front {
		${frontFontSizeTab}
		${frontIconMarginStylesTab}
		${frontIconPaddingStylesTab}
		${frontIconBorderTab}
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front:hover {
		${frontIconBorderHoverTab}
	}
    .eb-flipbox-container.${blockId} .eb-flipbox-icon-front  .dashicons {
        ${frontFontSizeTab}
    }
	 `;

    const frontIconStyleMobile = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front {
		${frontFontSizeMobile}
		${frontIconMarginStylesMobile}
		${frontIconPaddingStylesMobile}
		${frontIconBorderMobile}
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front:hover {
		${frontIconBorderHoverMobile}
	}
    .eb-flipbox-container.${blockId} .eb-flipbox-icon-front  .dashicons {
        ${frontFontSizeMobile}
    }
	 `;

    const backStyleDesktop = `

	 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back {
		${backBackgroundStylesDesktop}
		${wrapperMinHeightStylesDesktop}
		${wrapperWidthStylesDesktop}
		${bdShadowStyesDesktop}
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
		 height: auto;
		 width: 100%;
		 transform:  ${(flipType === "flip-up" && "rotateX(-180deg)") ||
        (flipType === "flip-bottom" && "rotateX(180deg)") ||
        ((flipType === "zoom-in" ||
            flipType === "zoom-out" ||
            flipType === "fade") &&
            "none")
        };
		transition: ${flipType === "fade" ? "opacity 0.6s, " : ""
        }${backBgTransitionStyle}, ${bdShadowTransitionStyle};
		 cursor: ${linkType === "box" && link ? "pointer" : "default"};
		 ${isHover && (flipType === "zoom-in" || flipType === "zoom-out")
            ? "z-index: 5;"
            : ""
        }
	 }

	 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover {
		${backHoverBackgroundStylesDesktop}
		${bdShadowStylesHoverDesktop}
	 }


	.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:before{
		${backOverlayStylesDesktop}
		transition: ${backOvlTransitionStyle};
	}

	.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover:before{
		${backHoverOverlayStylesDesktop}
	}

	${(isHover || selectedSide === "back") && flipType === "fade"
            ? `.eb-flipbox-container.${blockId} .eb-flipper.back-is-selected .eb-flipbox-back {
		opacity: 1;
	 }`
            : ""
        }

	.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front,
	.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back{
	position: absolute;
	}

	 `;

    const backStyleTab = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back {
			 ${wrapperMinHeightStylesTab}
			 ${wrapperWidthStylesTab}
			 ${backBackgroundStylesTab}
			 ${bdShadowStyesTab}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover {
			${backHoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		 }

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:before{
			${backOverlayStylesTab}
		}

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover:before{
			${backHoverOverlayStylesTab}
		}

	 `;

    const backStyleMobile = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back {
			${wrapperMinHeightStylesMobile}
			${wrapperWidthStylesMobile}
			${backBackgroundStylesMobile}
			${bdShadowStyesMobile}
			${bdShadowStylesHoverMobile}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover {
			${backHoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		 }

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:before{
			${backOverlayStylesMobile}
		}

		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover:before{
			${backHoverOverlayStylesMobile}
		}
	 `;

    const backImageStyleDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container {
		${backImgPaddingStylesDesktop}
		display: ${backIconOrImage === "image" && backImageUrl ? "flex" : "none"};
		justify-content: center;
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container img {
		${backImgHeightDesktop}
		${backImgWidthDesktop}
		${backImgRadiusDesktop}
	 }
	 `;

    const backImageStyleTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container {
		${backImgPaddingStylesTab}
	}

	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container img {
		${backImgHeightTab}
		${backImgWidthTab}
		${backImgRadiusTab}
	 }
	 `;

    const backImageStyleMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container {
		${backImgPaddingStylesMobile}
	}

	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container img {
		${backImgHeightMobile}
		${backImgWidthMobile}
		${backImgRadiusMobile}
	 }
	 `;

    const backIconStyleDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-back {
		${backFontSizeDesktop}
		${backIconMarginStylesDesktop}
		${backIconPaddingStylesDesktop}
		${backIconBorderDesktop}
		color: ${backIconColor ? backIconColor : "#ffffff"};
		background: ${backIconBackground ? backIconBackground : defaultBackIconBackground
        };
		width: 100%;
		text-align: ${align};
		display: ${backIconOrImage === "icon" && backIcon ? "block" : "none"};
		transition: ${backIconTransitionStyle};
	 }
	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-back:hover {
		${backIconBorderHoverDesktop}
	 }
     .eb-flipbox-container.${blockId} .eb-flipbox-icon-back .dashicons {
        ${backFontSizeDesktop}
     }
	 `;

    const backIconStyleTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back {
		${backFontSizeTab}
		${backIconMarginStylesTab}
		${backIconPaddingStylesTab}
		${backIconBorderTab}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back:hover {
		${backIconBorderHoverTab}
	}
    .eb-flipbox-container.${blockId} .eb-flipbox-icon-back .dashicons {
        ${backFontSizeTab}
     }
	`;

    const backIconStyleMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back {
		${backFontSizeMobile}
		${backIconMarginStylesMobile}
		${backIconPaddingStylesMobile}
		${backIconBorderMobile}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back:hover {
		${backIconBorderHoverMobile}
	}
    .eb-flipbox-container.${blockId} .eb-flipbox-icon-back .dashicons {
        ${backFontSizeMobile}
     }
	`;

    let backButtonStyleDesktop = "";
    let backButtonStyleTab = "";
    let backButtonStyleMobile = "";
    if (buttonStyle === "custom") {
        const {
            dimensionStylesDesktop: buttonPaddingStylesDesktop,
            dimensionStylesTab: buttonPaddingStylesTab,
            dimensionStylesMobile: buttonPaddingStylesMobile,
        } = generateDimensionsControlStyles({
            controlName: buttonPadding,
            styleFor: "padding",
            attributes,
        });
        // border & shadow controller
        const {
            styesDesktop: btnBdShadowStyesDesktop,
            styesTab: btnBdShadowStyesTab,
            styesMobile: btnBdShadowStyesMobile,
            stylesHoverDesktop: btnBdShadowStylesHoverDesktop,
            stylesHoverTab: btnBdShadowStylesHoverTab,
            stylesHoverMobile: btnBdShadowStylesHoverMobile,
            transitionStyle: btnBdShadowTransitionStyle,
        } = generateBorderShadowStyles({
            controlName: borderShadowBtn,
            attributes,
        });
        // button size
        const {
            rangeStylesDesktop: buttonSizeDesktop,
            rangeStylesTab: buttonSizeTab,
            rangeStylesMobile: buttonSizeMobile,
        } = generateResponsiveRangeStyles({
            controlName: buttonIconSizeAttr,
            property: "width",
            attributes,
        });
        backButtonStyleDesktop = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesDesktop}
			 ${btnBdShadowStyesDesktop}
			 ${buttonSizeDesktop}
			 ${buttonBackground ? `background: ${buttonBackground};` : ""}
			 ${buttonColor ? `color: ${buttonColor};` : ""}
			 transition: ${btnBdShadowTransitionStyle};
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link:hover {
			 ${btnBdShadowStylesHoverDesktop}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-content {
			 display: flex;
			 flex-direction: ${buttonIconPos === "after" ? "row" : "row-reverse"};
			 justify-content: space-around;
			 align-items: center;
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-content .eb-flipbox-button-icon {
			 display: ${displayButtonIcon ? "block" : "none"};
		 }
		 `;

        backButtonStyleTab = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesTab}
			 ${btnBdShadowStyesTab}
			 ${buttonSizeTab}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link:hover {
			${buttonPaddingStylesTab}
			${btnBdShadowStylesHoverTab}
		}
		 `;

        backButtonStyleMobile = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesMobile}
			 ${btnBdShadowStyesMobile}
			 ${buttonSizeMobile}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link:hover {
			 ${btnBdShadowStylesHoverMobile}
		 }
		 `;
    }

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		 ${itemsContainerStyle}
		 ${flipContainerStyleDesktop}
		 ${titleStylesDesktop}
		 ${contentStylesDesktop}
		 ${flipperStyle}
		 ${frontStyleDesktop}
		 ${frontImageStyleDesktop}
		 ${frontIconStyleDesktop}
		 ${backIconStyleDesktop}
		 ${backStyleDesktop}
		 ${backImageStyleDesktop}
		 ${backButtonStyleDesktop}
	 `);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		 ${itemsContainerStyleTab}
		 ${flipContainerStyleTab}
		 ${titleStylesTab}
		 ${contentStylesTab}
		 ${flipperStyleTab}
		 ${backButtonStyleTab}
		 ${frontStyleTab}
		 ${backStyleTab}
		 ${frontIconStyleTab}
		 ${backIconStyleTab}
		 ${frontImageStyleTab}
		 ${backImageStyleTab}
	 `);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		 ${itemsContainerStyleMobile}
		 ${flipContainerStyleMobile}
		 ${titleStylesMobile}
		 ${contentStylesMobile}
		 ${flipperStyleMobile}
		 ${backButtonStyleMobile}
		 ${frontStyleMobile}
		 ${backStyleMobile}
		 ${frontIconStyleMobile}
		 ${backIconStyleMobile}
		 ${frontImageStyleMobile}
		 ${backImageStyleMobile}
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
