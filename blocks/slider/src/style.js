import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    BUTTON_BORDER_SHADOW,
    BUTTON2_MARGIN,
    BUTTON2_PADDING,
    BUTTON2_BORDER_SHADOW,
    SLIDE_TO_SHOW,
    CUSTOM_HEIGHT,
    DOTS_GAP,
    ARROW_POSITION,
    DOTS_POSITION,
    ARROW_SIZE,
    DOTS_SIZE,
    SLIDES_GAP,
} from "./constants/constants";
import {
    TITLE_TYPOGRAPHY,
    SUBTITLE_TYPOGRAPHY,
    BUTTON_TYPOGRAPHY,
    BUTTON2_TYPOGRAPHY,
} from "./constants/typography-constant";

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
        resOption,
        blockId,
        blockMeta,
        sliderType,
        sliderContentType,
        isCustomHeight,
        speed,
        initialSlide,
        titleColor,
        subtitleColor,
        buttonColor,
        buttonHoverColor,
        buttonBGColor,
        buttonHoverBGColor,
        secondButtonColor,
        secondButtonHoverColor,
        secondButtonBGColor,
        secondButtonHoverBGColor,
        overlayColor,
        arrowColor,
        arrowHoverColor,
        dotsColor,
        dotsActiveColor,
        textAlign,
        verticalAlign,
        classHook,
    } = attributes;

    // Title Typography
    const {
        typoStylesDesktop: titleTypographyDesktop,
        typoStylesTab: titleTypographyTab,
        typoStylesMobile: titleTypographyMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: TITLE_TYPOGRAPHY,
        defaultFontSize: 24,
    });

    // Sub Title Typography
    const {
        typoStylesDesktop: subtitleTypographyDesktop,
        typoStylesTab: subtitleTypographyTab,
        typoStylesMobile: subtitleTypographyMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: SUBTITLE_TYPOGRAPHY,
        defaultFontSize: 16,
    });

    // Button Typography
    const {
        typoStylesDesktop: buttonTypographyDesktop,
        typoStylesTab: buttonTypographyTab,
        typoStylesMobile: buttonTypographyMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: BUTTON_TYPOGRAPHY,
        defaultFontSize: 14,
    });
    const {
        typoStylesDesktop: button2TypographyDesktop,
        typoStylesTab: button2TypographyTab,
        typoStylesMobile: button2TypographyMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: BUTTON2_TYPOGRAPHY,
        defaultFontSize: 14,
    });

    /* Wrapper Margin */
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Wrapper Padding */
    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    /* Title Margin */
    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: TITLE_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Subtitle Margin */
    const {
        dimensionStylesDesktop: subtitleMarginDesktop,
        dimensionStylesTab: subtitleMarginTab,
        dimensionStylesMobile: subtitleMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: SUBTITLE_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Button Margin */
    const {
        dimensionStylesDesktop: buttonMarginDesktop,
        dimensionStylesTab: buttonMarginTab,
        dimensionStylesMobile: buttonMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: BUTTON_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Button Padding */
    const {
        dimensionStylesDesktop: buttonPaddingDesktop,
        dimensionStylesTab: buttonPaddingTab,
        dimensionStylesMobile: buttonPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: BUTTON_PADDING,
        styleFor: "padding",
        attributes,
    });
    const {
        dimensionStylesDesktop: button2MarginDesktop,
        dimensionStylesTab: button2MarginTab,
        dimensionStylesMobile: button2MarginMobile,
    } = generateDimensionsControlStyles({
        controlName: BUTTON2_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Button Padding */
    const {
        dimensionStylesDesktop: button2PaddingDesktop,
        dimensionStylesTab: button2PaddingTab,
        dimensionStylesMobile: button2PaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: BUTTON2_PADDING,
        styleFor: "padding",
        attributes,
    });

    // range controller Slider Height
    const {
        rangeStylesDesktop: sliderHeightDesktop,
        rangeStylesTab: sliderHeightTab,
        rangeStylesMobile: sliderHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: CUSTOM_HEIGHT,
        property: "height",
        attributes,
    });

    // range controller Slides to Show
    const {
        rangeStylesDesktop: slideToShowDesktop,
        rangeStylesTab: slideToShowTab,
        rangeStylesMobile: slideToShowMobile,
    } = generateResponsiveRangeStyles({
        controlName: SLIDE_TO_SHOW,
        property: "",
        attributes,
    });

    // range controller Slider Dots Gap
    const {
        rangeStylesDesktop: dotsGapDesktop,
        rangeStylesTab: dotsGapTab,
        rangeStylesMobile: dotsGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: DOTS_GAP,
        property: "margin-right",
        attributes,
    });

    // range controller Slider Left Arrow Position
    const {
        rangeStylesDesktop: leftArrowPositionDesktop,
        rangeStylesTab: leftArrowPositionTab,
        rangeStylesMobile: leftArrowPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: ARROW_POSITION,
        property: "left",
        attributes,
    });

    // range controller Slider Left Arrow Position
    const {
        rangeStylesDesktop: rightArrowPositionDesktop,
        rangeStylesTab: rightArrowPositionTab,
        rangeStylesMobile: rightArrowPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: ARROW_POSITION,
        property: "right",
        attributes,
    });

    // range controller Slider Arrow Size
    const {
        rangeStylesDesktop: arrowSizeDesktop,
        rangeStylesTab: arrowSizeTab,
        rangeStylesMobile: arrowSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: ARROW_SIZE,
        property: "font-size",
        attributes,
    });

    // range controller Slider Arrow Size
    const {
        rangeStylesDesktop: dotsSizeDesktop,
        rangeStylesTab: dotsSizeTab,
        rangeStylesMobile: dotsSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: DOTS_SIZE,
        property: "font-size",
        attributes,
    });

    // range controller Slider Slides Gap
    const {
        rangeStylesDesktop: slidesGapDesktop,
        rangeStylesTab: slidesGapTab,
        rangeStylesMobile: slidesGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: SLIDES_GAP,
        property: "padding",
        attributes,
    });

    // range controller Slider Dots Position
    const {
        rangeStylesDesktop: dotsPositionDesktop,
        rangeStylesTab: dotsPositionTab,
        rangeStylesMobile: dotsPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: DOTS_POSITION,
        property: "bottom",
        attributes,
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

    // generateBorderShadowStyles for Wrapper ⬇
    const {
        styesDesktop: wrapperBDShadowDesktop,
        styesTab: wrapperBDShadowTab,
        styesMobile: wrapperBDShadowMobile,
        stylesHoverDesktop: wrapperBDShadowHoverDesktop,
        stylesHoverTab: wrapperBDShadowHoverTab,
        stylesHoverMobile: wrapperBDShadowHoverMobile,
        transitionStyle: wrapperBDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WRAPPER_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // generateBorderShadowStyles for Button ⬇
    const {
        styesDesktop: buttonBDShadowDesktop,
        styesTab: buttonBDShadowTab,
        styesMobile: buttonBDShadowMobile,
        stylesHoverDesktop: buttonBDShadowHoverDesktop,
        stylesHoverTab: buttonBDShadowHoverTab,
        stylesHoverMobile: buttonBDShadowHoverMobile,
        transitionStyle: buttonBDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: BUTTON_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });
    const {
        styesDesktop: button2BDShadowDesktop,
        styesTab: button2BDShadowTab,
        styesMobile: button2BDShadowMobile,
        stylesHoverDesktop: button2BDShadowHoverDesktop,
        stylesHoverTab: button2BDShadowHoverTab,
        stylesHoverMobile: button2BDShadowHoverMobile,
        transitionStyle: button2BDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: BUTTON2_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-slider-wrapper.${blockId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			transition: ${wrapperBDShadowTransitionStyle}, ${wrapperBgTransitionStyle};
			${wrapperBackgroundStylesDesktop}
		}
		.eb-slider-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverDesktop}
		}
	`;
    const wrapperStylesTab = `
		.eb-slider-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
		.eb-slider-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverTab}
		}
	`;
    const wrapperStylesMobile = `
		.eb-slider-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
		.eb-slider-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverMobile}
		}
	`;

    const sliderRtlStyles = `
        [dir="rtl"] .eb-slider-wrapper.${blockId} .slick-prev {
            left: auto;
        }
        [dir="rtl"] .eb-slider-wrapper.${blockId} .slick-slide {
            pointer-events: auto;
        }
    `;

    const sliderStylesDesktop = `
		.eb-slider-wrapper.${blockId} .slick-slide > * {
			${slidesGapDesktop}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item {
			text-align: ${textAlign};
			align-items: ${verticalAlign};
		}
		.eb-slider-wrapper.${blockId} .slick-slider .eb-slider-item img {
			${isCustomHeight ? sliderHeightDesktop : ""}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item.content-1 .eb-slider-content {
			background-color: ${overlayColor};
			justify-content: ${verticalAlign};
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-title {
			color: ${titleColor};
			${titleMarginDesktop}
			${titleTypographyDesktop}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-subtitle {
			color: ${subtitleColor};
			${subtitleMarginDesktop}
			${subtitleTypographyDesktop}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-button {
			color: ${buttonColor};
			background-color: ${buttonBGColor};
			${buttonMarginDesktop}
			${buttonPaddingDesktop}
			${buttonTypographyDesktop}
			${buttonBDShadowDesktop}
			transition: ${buttonBDShadowTransitionStyle};
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-button:hover {
			color: ${buttonHoverColor};
			background-color: ${buttonHoverBGColor};
			${buttonTypographyDesktop}
			${buttonBDShadowHoverDesktop}
		}

		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-second-button {
			color: ${secondButtonColor};
			background-color: ${secondButtonBGColor};
			${button2MarginDesktop}
			${button2PaddingDesktop}
			${button2TypographyDesktop}
			${button2BDShadowDesktop}
			transition: ${button2BDShadowTransitionStyle};
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-second-button:hover {
			color: ${secondButtonHoverColor};
			background-color: ${secondButtonHoverBGColor};
			${button2TypographyDesktop}
			${button2BDShadowHoverDesktop}
		}
	`;
    const sliderStylesTab = `
		.eb-slider-wrapper.${blockId} .slick-slide > * {
			${slidesGapTab}
		}
		.eb-slider-wrapper.${blockId} .slick-slider .eb-slider-item img {
			${isCustomHeight &&
            (sliderType === "image" ||
                (sliderType === "content" &&
                    sliderContentType === "content-1"))
            ? sliderHeightTab
            : ""
        }
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-title {
			${titleMarginTab}
			${titleTypographyTab}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-subtitle {
			${subtitleMarginTab}
			${subtitleTypographyTab}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-button {
			${buttonMarginTab}
			${buttonPaddingTab}
			${buttonTypographyTab}
			${buttonBDShadowTab}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-button:hover {
			${buttonTypographyTab}
			${buttonBDShadowHoverTab}
		}

        .eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-second-button {
			${button2MarginTab}
			${button2PaddingTab}
			${button2TypographyTab}
			${button2BDShadowTab}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-second-button:hover {
			${button2TypographyTab}
			${button2BDShadowHoverTab}
		}
	`;
    const sliderStylesMobile = `
		.eb-slider-wrapper.${blockId} .slick-slide > * {
			${slidesGapMobile}
		}
		.eb-slider-wrapper.${blockId} .slick-slider .eb-slider-item img {
			${isCustomHeight &&
            (sliderType === "image" ||
                (sliderType === "content" &&
                    sliderContentType === "content-1"))
            ? sliderHeightMobile
            : ""
        }
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-title {
			${titleMarginMobile}
			${titleTypographyMobile}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-subtitle {
			${subtitleMarginMobile}
			${subtitleTypographyMobile}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-button {
			${buttonMarginMobile}
			${buttonPaddingMobile}
			${buttonTypographyMobile}
			${buttonBDShadowMobile}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-button:hover {
			${buttonTypographyMobile}
			${buttonBDShadowHoverMobile}
		}
        .eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-second-button {
			${button2MarginMobile}
			${button2PaddingMobile}
			${button2TypographyMobile}
			${button2BDShadowMobile}
		}
		.eb-slider-wrapper.${blockId} .eb-slider-type-content .eb-slider-item .eb-slider-content .eb-slider-second-button:hover {
			${button2TypographyMobile}
			${button2BDShadowHoverMobile}
		}
	`;
    const sliderControlsStylesDesktop = `
		.eb-slider-wrapper.${blockId} .slick-prev {
			${leftArrowPositionDesktop}
		}
		.eb-slider-wrapper.${blockId} .slick-next {
			${rightArrowPositionDesktop}
		}
		.eb-slider-wrapper.${blockId} .slick-prev i,
		.eb-slider-wrapper.${blockId} .slick-next i {
			color: ${arrowColor} !important;
			${arrowSizeDesktop}
		}
		.eb-slider-wrapper.${blockId} .slick-prev i:hover,
		.eb-slider-wrapper.${blockId} .slick-next i:hover {
			color: ${arrowHoverColor} !important;
		}
		.eb-slider-wrapper.${blockId} .slick-dots {
			${dotsPositionDesktop}
		}
		.eb-slider-wrapper.${blockId} .slick-dots li {
			${dotsGapDesktop}
		}
		.eb-slider-wrapper.${blockId} .slick-dots li button:before {
			color: ${dotsColor} !important;
			${dotsSizeDesktop}
		}
		.eb-slider-wrapper.${blockId} .slick-dots li.slick-active button:before {
			color: ${dotsActiveColor} !important;
		}
	`;
    const sliderControlsStylesTab = `
		.eb-slider-wrapper.${blockId} .slick-prev {
			${leftArrowPositionTab}
		}
		.eb-slider-wrapper.${blockId} .slick-next {
			${rightArrowPositionTab}
		}
		.eb-slider-wrapper.${blockId} .slick-prev i,
		.eb-slider-wrapper.${blockId} .slick-next i {
			${arrowSizeTab}
		}
		.eb-slider-wrapper.${blockId} .slick-dots {
			${dotsPositionTab}
		}
		.eb-slider-wrapper.${blockId} .slick-dots li {
			${dotsGapTab}
		}
		.eb-slider-wrapper.${blockId} .slick-dots li button:before {
			${dotsSizeTab}
		}
	`;
    const sliderControlsStylesMobile = `
		.eb-slider-wrapper.${blockId} .slick-prev {
			${leftArrowPositionMobile}
		}
		.eb-slider-wrapper.${blockId} .slick-next {
			${rightArrowPositionMobile}
		}
		.eb-slider-wrapper.${blockId} .slick-prev i,
		.eb-slider-wrapper.${blockId} .slick-next i {
			${arrowSizeMobile}
		}
		.eb-slider-wrapper.${blockId} .slick-dots {
			${dotsPositionMobile}
		}
		.eb-slider-wrapper.${blockId} .slick-dots li {
			${dotsGapMobile}
		}
		.eb-slider-wrapper.${blockId} .slick-dots li button:before {
			${dotsSizeMobile}
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${sliderStylesDesktop}
		${sliderControlsStylesDesktop}
        ${sliderRtlStyles}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${sliderStylesTab}
		${sliderControlsStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${sliderStylesMobile}
		${sliderControlsStylesMobile}
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
