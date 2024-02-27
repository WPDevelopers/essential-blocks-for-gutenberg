import {
    wrapMarginConst,
    wrapPaddingConst,
    WrpBgConst,
    WrpBdShadowConst,
} from "./constants";
import { typoPrefix_title, typoPrefix_desc } from "./constants/typographyConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateBackgroundControlStyles,
    StyleComponent
} = EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        classHook,
        mapType,
        mapZoom,
        mapHeight,
        latitude,
        longitude,
        searchAddress,
        marker,
        titleColor,
        titleHoverColor,
        descColor,
        imageSize,
        cover,
        themeSource,
        googleMapStyle,
        snazzyMapStyle,
    } = attributes;
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

    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: "14",
    });

    const {
        typoStylesDesktop: descTypoStylesDesktop,
        typoStylesTab: descTypoStylesTab,
        typoStylesMobile: descTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_desc,
        defaultFontSize: "13",
    });

    const desktopStyles = `
	.${blockId}.eb-google-map-wrapper {
		${wrpMarginDesktop}
		${wrpPaddingDesktop}
		${wrpBackgroundStylesDesktop}
		${wrpBdShdStyesDesktop}
		transition:${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
	}
	.${blockId}.eb-google-map-wrapper:hover{
		${wrpHoverBackgroundStylesDesktop}
		${wrpBdShdStylesHoverDesktop}
	}
	.${blockId}.eb-google-map-wrapper:before{
		${wrpOverlayStylesDesktop}
		transition:${wrpOvlTransitionStyle};
	}
	.${blockId}.eb-google-map-wrapper:hover:before{
		${wrpHoverOverlayStylesDesktop}
	}
	.${blockId}.eb-google-map-wrapper .eb-google-map-overview  .eb-google-map-overview-title {
		color: ${titleColor};
		${titleTypoStylesDesktop};
	}
	.${blockId}.eb-google-map-wrapper .eb-google-map-overview  .eb-google-map-overview-title:hover {
		color: ${titleHoverColor};
	}
	.${blockId}.eb-google-map-wrapper .eb-google-map-overview  .eb-google-map-overview-content {
		color: ${descColor};
		${descTypoStylesDesktop};
	}
	`;
    const tabStyles = `
	.${blockId}.eb-google-map-wrapper {
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBackgroundStylesTab}
		${wrpBdShdStyesTab}
	}
	.${blockId}.eb-google-map-wrapper:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}
	}
	.${blockId}.eb-google-map-wrapper:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}
	}
	.${blockId}.eb-google-map-wrapper:before{
		${wrpOverlayStylesTab}
	}
	.${blockId}.eb-google-map-wrapper:hover:before{
		${wrpHoverOverlayStylesTab}
	}
	.${blockId}.eb-google-map-wrapper .eb-google-map-overview  .eb-google-map-overview-title {
		${titleTypoStylesTab};
	}
	.${blockId}.eb-google-map-wrapper .eb-google-map-overview  .eb-google-map-overview-content {
		${descTypoStylesTab};
	}
	`;
    const mobileStyles = `
	.${blockId}.eb-google-map-wrapper {
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBackgroundStylesMobile}
		${wrpBdShdStyesMobile}
	}
	.${blockId}.eb-google-map-wrapper:before{
		${wrpOverlayStylesMobile}
	}

	.${blockId}.eb-google-map-wrapper:hover:before{
		${wrpHoverOverlayStylesMobile}
	}
	.${blockId}.eb-google-map-wrapper .eb-google-map-overview  .eb-google-map-overview-title {
		${titleTypoStylesMobile};
	}
	.${blockId}.eb-google-map-wrapper .eb-google-map-overview  .eb-google-map-overview-content {
		${descTypoStylesMobile};
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
