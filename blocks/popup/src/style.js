const {
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateTypographyStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBControls;

import {
    typoPrefix_text,
    typoPrefix_close,
} from "./constants/typographyPrefixConstants";

import {
    POPUP_HEIGHT,
    POPUP_WIDTH,
    BUTTON_PADDING,
    BUTTON_BACKGROUND,
    BUTTON_BORDER,
    POPUP_MARGIN,
    POPUP_PADDING,
    POPUP_BACKGROUND,
    POPUP_BORDER,
    CLOSE_BORDER,
    CLOSE_PADDING,
    CONTAINER_PADDING,
    CLOSE_BTN_LEFT,
    CLOSE_BTN_RIGHT,
    CLOSE_BTN_TOP,
    wrapMarginConst,
    wrapPaddingConst,
} from "./constants";

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        classHook,

        autoHeight,
        btnTextColor,
        btnHoverTextColor,
        popupFullWidth,
        closeBtnColor,
        closeBtnHoverColor,
        closeBtnBackColor,
        closeBtnBackHoverColor,
        overlayColor,
    } = attributes;

    // popup design
    // content widht
    const {
        rangeStylesDesktop: popupWidthDesktop,
        rangeStylesTab: popupWidthTab,
        rangeStylesMobile: popupWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: POPUP_WIDTH,
        property: "width",
        attributes,
    });

    // content height
    const {
        rangeStylesDesktop: popupHeightDesktop,
        rangeStylesTab: popupHeightTab,
        rangeStylesMobile: popupHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: POPUP_HEIGHT,
        property: "height",
        attributes,
    });

    const {
        typoStylesDesktop: btnTextTypoStylesDesktop,
        typoStylesTab: btnTextTypoStylesTab,
        typoStylesMobile: btnTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_text,
        defaultFontSize: 18,
    });

    const {
        typoStylesDesktop: closeTypoStylesDesktop,
        typoStylesTab: closeTypoStylesTab,
        typoStylesMobile: closeTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_close,
    });

    const {
        dimensionStylesDesktop: btnPaddingDesktop,
        dimensionStylesTab: btnPaddingTab,
        dimensionStylesMobile: btnPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: BUTTON_PADDING,
        styleFor: "padding",
    });

    const {
        backgroundStylesDesktop: btnBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: btnHoverBackgroundStylesDesktop,
        bgTransitionStyle: btnBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: BUTTON_BACKGROUND,
    });

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

    const {
        dimensionStylesDesktop: popupPaddingDesktop,
        dimensionStylesTab: popupPaddingTab,
        dimensionStylesMobile: popupPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: POPUP_PADDING,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: popupMarginDesktop,
        dimensionStylesTab: popupMarginTab,
        dimensionStylesMobile: popupMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: POPUP_MARGIN,
        styleFor: "margin",
    });

    const {
        backgroundStylesDesktop: popupBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: popupHoverBackgroundStylesDesktop,
        backgroundStylesTab: popupBackgroundStylesTab,
        hoverBackgroundStylesTab: popupHoverBackgroundStylesTab,
        backgroundStylesMobile: popupBackgroundStylesMobile,
        hoverBackgroundStylesMobile: popupHoverBackgroundStylesMobile,
        overlayStylesDesktop: popupOverlayStylesDesktop,
        hoverOverlayStylesDesktop: popupHoverOverlayStylesDesktop,
        overlayStylesTab: popupOverlayStylesTab,
        hoverOverlayStylesTab: popupHoverOverlayStylesTab,
        overlayStylesMobile: popupOverlayStylesMobile,
        hoverOverlayStylesMobile: popupHoverOverlayStylesMobile,
        bgTransitionStyle: popupBgTransitionStyle,
        ovlTransitionStyle: popupOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: POPUP_BACKGROUND,
        // noOverlay: true,
        // noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        styesDesktop: popupBdShdStyesDesktop,
        styesTab: popupBdShdStyesTab,
        styesMobile: popupBdShdStyesMobile,
        stylesHoverDesktop: popupBdShdStylesHoverDesktop,
        stylesHoverTab: popupBdShdStylesHoverTab,
        stylesHoverMobile: popupBdShdStylesHoverMobile,
        transitionStyle: popupBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: POPUP_BORDER,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: closeBdShdStyesDesktop,
        styesTab: closeBdShdStyesTab,
        styesMobile: closeBdShdStyesMobile,
        stylesHoverDesktop: closeBdShdStylesHoverDesktop,
        stylesHoverTab: closeBdShdStylesHoverTab,
        stylesHoverMobile: closeBdShdStylesHoverMobile,
        transitionStyle: closeBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: CLOSE_BORDER,
        attributes,
        noShadow: true,
        // noBorder: true,
    });

    const {
        dimensionStylesDesktop: closePaddingDesktop,
        dimensionStylesTab: closePaddingTab,
        dimensionStylesMobile: closePaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: CLOSE_PADDING,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: containerPaddingDesktop,
        dimensionStylesTab: containerPaddingTab,
        dimensionStylesMobile: containerPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: CONTAINER_PADDING,
        styleFor: "padding",
    });

    const {
        rangeStylesDesktop: closeBtnTopDesktop,
        rangeStylesTab: closeBtnTopTab,
        rangeStylesMobile: closeBtnTopMobile,
    } = generateResponsiveRangeStyles({
        controlName: CLOSE_BTN_TOP,
        property: "top",
        attributes,
    });

    const {
        rangeStylesDesktop: closeBtnRightDesktop,
        rangeStylesTab: closeBtnRightTab,
        rangeStylesMobile: closeBtnRightMobile,
    } = generateResponsiveRangeStyles({
        controlName: CLOSE_BTN_RIGHT,
        property: "right",
        attributes,
    });

    const {
        rangeStylesDesktop: closeBtnLeftDesktop,
        rangeStylesTab: closeBtnLeftTab,
        rangeStylesMobile: closeBtnLeftMobile,
    } = generateResponsiveRangeStyles({
        controlName: CLOSE_BTN_LEFT,
        property: "left",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: wrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: wrapPaddingConst,
        styleFor: "padding",
    });

    const wrapperStylesDesktop = `
		.${blockId}.eb-popup-container {
			${wrpMarginDesktop}
			${wrpPaddingDesktop}
		}

		.${blockId}.eb-popup-container .eb-popup-content {
			${popupFullWidth ? `width: 100%;` : popupWidthDesktop}
			${!autoHeight ? popupHeightDesktop : ""}
		}

		.${blockId}.eb-popup-container .eb-popup-button a.eb-popup-button-anchor {
			${btnTextTypoStylesDesktop}
			${btnPaddingDesktop}
			${btnBackgroundStylesDesktop}
			${bdShadowStyesDesktop}
			${btnTextColor ? `color: ${btnTextColor};` : ""}
			transition: ${btnBgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.${blockId}.eb-popup-container .eb-popup-button a.eb-popup-button-anchor:hover {
			${btnHoverTextColor ? `color: ${btnHoverTextColor};` : ""}
			${btnHoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor,
		.${blockId}.eb-popup-container .eb-popup-content {
			${popupPaddingDesktop}
			${popupMarginDesktop}
			${popupBackgroundStylesDesktop}
			${popupBdShdStyesDesktop}
			transition: ${popupBdShdTransitionStyle};
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:hover,
		.${blockId}.eb-popup-container .eb-popup-content:hover {
			${popupHoverBackgroundStylesDesktop}
			${popupBdShdStylesHoverDesktop}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:before,
		.${blockId}.eb-popup-container .eb-popup-content:before {
			${popupOverlayStylesDesktop}
			transition: ${popupBgTransitionStyle};
			z-index: -1;
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:hover:before,
		.${blockId}.eb-popup-container .eb-popup-content:hover:before {
			${popupHoverOverlayStylesDesktop}
			transition: ${popupOvlTransitionStyle};
		}

		.${blockId}.eb-popup-container .eb-popup-close-icon {
			${closeBdShdStyesDesktop}
			${closePaddingDesktop}
			${closeTypoStylesDesktop}
			${closeBtnTopDesktop}
			${closeBtnRightDesktop}
			${closeBtnLeftDesktop}
			${closeBtnColor ? `color: ${closeBtnColor};` : ""}
			${closeBtnBackColor ? `background-color: ${closeBtnBackColor};` : ""}
			transition: ${closeBdShdTransitionStyle};
		}

		.${blockId}.eb-popup-container .eb-popup-close-icon:hover {
			${closeBdShdStylesHoverDesktop}
			${closeBtnHoverColor ? `color: ${closeBtnHoverColor};` : ""}
			${closeBtnBackHoverColor ? `background-color: ${closeBtnBackHoverColor};` : ""}
		}

		.${blockId}.eb-popup-container .eb-modal-container {
			${containerPaddingDesktop}
		}

		.${blockId}.eb-popup-container .eb-popup-overlay {
			${overlayColor ? `background: ${overlayColor};` : ""}
		}
	`;

    const wrapperStylesTab = `
		.${blockId}.eb-popup-container {
			${wrpMarginTab}
			${wrpPaddingTab}
		}

		.${blockId}.eb-popup-container .eb-popup-content {
			${popupFullWidth ? `width: 100%;` : popupWidthTab}
			${!autoHeight ? popupHeightTab : ""}
		}

		.${blockId}.eb-popup-container .eb-popup-button a.eb-popup-button-anchor {
			${btnTextTypoStylesTab}
			${btnPaddingTab}
			${bdShadowStyesTab}
		}

		.${blockId}.eb-popup-container .eb-popup-button a.eb-popup-button-anchor:hover {
			${bdShadowStylesHoverTab}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor,
		.${blockId}.eb-popup-container .eb-popup-content {
			${popupPaddingTab}
			${popupMarginTab}
			${popupBackgroundStylesTab}
			${popupBdShdStyesTab}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:hover,
		.${blockId}.eb-popup-container .eb-popup-content:hover {
			${popupHoverBackgroundStylesTab}
			${popupBdShdStylesHoverTab}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:before,
		.${blockId}.eb-popup-container .eb-popup-content:before {
			${popupOverlayStylesTab}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:before:hover,
		.${blockId}.eb-popup-container .eb-popup-content:before:hover {
			${popupHoverOverlayStylesTab}
		}

		.${blockId}.eb-popup-container .eb-popup-close-icon {
			${closeBdShdStyesTab}
			${closePaddingTab}
			${closeTypoStylesTab}
			${closeBtnTopTab}
			${closeBtnRightTab}
			${closeBtnLeftTab}
		}

		.${blockId}.eb-popup-container .eb-popup-close-icon:hover {
			${closeBdShdStylesHoverTab}
		}

		.${blockId}.eb-popup-container .eb-modal-container {
			${containerPaddingTab}
		}
	`;

    const wrapperStylesMobile = `
		.${blockId}.eb-popup-container {
			${wrpMarginMobile}
			${wrpPaddingMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-content {
			${popupFullWidth ? `width: 100%;` : popupWidthMobile}
			${!autoHeight ? popupHeightMobile : ""}
		}

		.${blockId}.eb-popup-container .eb-popup-button a.eb-popup-button-anchor {
			${btnTextTypoStylesMobile}
			${btnPaddingMobile}
			${bdShadowStyesMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-button a.eb-popup-button-anchor:hover {
			${bdShadowStylesHoverMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor,
		.${blockId}.eb-popup-container .eb-popup-content {
			${popupPaddingMobile}
			${popupMarginMobile}
			${popupBackgroundStylesMobile}
			${popupBdShdStyesMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:hover,
		.${blockId}.eb-popup-container .eb-popup-content:hover {
			${popupHoverBackgroundStylesMobile}
			${popupBdShdStylesHoverMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:before,
		.${blockId}.eb-popup-container .eb-popup-content:before {
			${popupOverlayStylesMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-content-editor:before:hover,
		.${blockId}.eb-popup-container .eb-popup-content:before:hover {
			${popupHoverOverlayStylesMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-close-icon {
			${closeBdShdStyesMobile}
			${closePaddingMobile}
			${closeTypoStylesMobile}
			${closeBtnTopMobile}
			${closeBtnRightMobile}
			${closeBtnLeftMobile}
		}

		.${blockId}.eb-popup-container .eb-popup-close-icon:hover {
			${closeBdShdStylesHoverMobile}
		}

		.${blockId}.eb-popup-container .eb-modal-container {
			${containerPaddingMobile}
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
