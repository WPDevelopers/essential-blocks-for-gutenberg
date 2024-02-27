import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    VIDEO_WIDTH,
    VIDEO_BORDER_SHADOW,
    PLAY_ICON_WIDTH,
    LIGHTBOX_WIDTH,
    LIGHTBOX_HEIGHT,
    LIGHTBOX_BORDER_SHADOW,
    CLOSE_ICON_WIDTH,
    STICKY_VIDEO_HEIGHT,
    STICKY_VIDEO_WIDTH,
    PLACEHOLDER_IMAGE_WIDTH,
    PLACEHOLDER_IMAGE_HEIGHT,
    PLACEHOLDER_PLAY_ICON_WIDTH,
} from "./constants";

/**
 * External depencencies
 */
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
        lightboxBGColor,
        closeIconColor,
        closeIconWidthRange,
        closeIconBgColor,
        videoAlignment,
        customPlayIconlibColor,
        lightboxPlayIconlibColor,
    } = attributes;

    /**
     * CSS/styling Codes Starts from Here
     */

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

    // range controller Separator Line Width
    const {
        rangeStylesDesktop: videoWidthDesktop,
        rangeStylesTab: videoWidthTab,
        rangeStylesMobile: videoWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: VIDEO_WIDTH,
        property: "",
        attributes,
    });

    // range controller Separator Line Width
    const {
        rangeStylesDesktop: playIconWidthDesktop,
        rangeStylesTab: playIconWidthTab,
        rangeStylesMobile: playIconWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: PLAY_ICON_WIDTH,
        property: "",
        attributes,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: stickyVideoWidthDesktop,
        rangeStylesTab: stickyVideoWidthTab,
        rangeStylesMobile: stickyVideoWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: STICKY_VIDEO_WIDTH,
        property: "",
        attributes,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: stickyVideoHeightDesktop,
        rangeStylesTab: stickyVideoHeightTab,
        rangeStylesMobile: stickyVideoHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: STICKY_VIDEO_HEIGHT,
        property: "",
        attributes,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: placeholderWidthDesktop,
        rangeStylesTab: placeholderWidthTab,
        rangeStylesMobile: placeholderWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: PLACEHOLDER_IMAGE_WIDTH,
        property: "",
        attributes,
    });
    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: placeholderHeightDesktop,
        rangeStylesTab: placeholderHeightTab,
        rangeStylesMobile: placeholderHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: PLACEHOLDER_IMAGE_HEIGHT,
        property: "",
        attributes,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: placeholderPlayIconWidthDesktop,
        rangeStylesTab: placeholderPlayIconWidthTab,
        rangeStylesMobile: placeholderPlayIconWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: PLACEHOLDER_PLAY_ICON_WIDTH,
        property: "",
        attributes,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: lightboxWidthDesktop,
        rangeStylesTab: lightboxWidthTab,
        rangeStylesMobile: lightboxWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: LIGHTBOX_WIDTH,
        property: "",
        attributes,
    });
    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: lightboxHeightDesktop,
        rangeStylesTab: lightboxHeightTab,
        rangeStylesMobile: lightboxHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: LIGHTBOX_HEIGHT,
        property: "",
        attributes,
    });

    // generateBorderShadowStyles for Lightbox ⬇
    const {
        styesDesktop: lightboxBDShadowDesktop,
        styesTab: lightboxBDShadowTab,
        styesMobile: lightboxBDShadowMobile,
        stylesHoverDesktop: lightboxBDShadowHoverDesktop,
        stylesHoverTab: lightboxBDShadowHoverTab,
        stylesHoverMobile: lightboxBDShadowHoverMobile,
        transitionStyle: lightboxBDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: LIGHTBOX_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: closeIconWidthDesktop,
        rangeStylesTab: closeIconWidthTab,
        rangeStylesMobile: closeIconWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: CLOSE_ICON_WIDTH,
        property: "",
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

    // generateBorderShadowStyles for Images ⬇
    const {
        styesDesktop: videoBDShadowDesktop,
        styesTab: videoBDShadowTab,
        styesMobile: videoBDShadowMobile,
        stylesHoverDesktop: videoBDShadowHoverDesktop,
        stylesHoverTab: videoBDShadowHoverTab,
        stylesHoverMobile: videoBDShadowHoverMobile,
        transitionStyle: videoBDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: VIDEO_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    let closePosition = closeIconWidthRange + 25;

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-advanced-video-wrapper.${blockId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			transition:${wrapperBgTransitionStyle}, ${wrapperBDShadowTransitionStyle};
		}
		.eb-advanced-video-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverDesktop}
			${wrapperHoverBackgroundStylesDesktop}
		}
        .eb-advanced-video-wrapper.${blockId} .eb-player-wrapper {
            ${"left" == videoAlignment ? `margin: 0 auto 0 0;` : ""}
            ${"center" == videoAlignment ? `margin: 0 auto;` : ""}
            ${"right" == videoAlignment ? `margin: 0 0 0 auto;` : ""}
        }
	`;
    const wrapperStylesTab = `
		.eb-advanced-video-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
		.eb-advanced-video-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverTab}
			${wrapperHoverBackgroundStylesTab}
		}
	`;
    const wrapperStylesMobile = `
		.eb-advanced-video-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
		.eb-advanced-video-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverMobile}
			${wrapperHoverBackgroundStylesMobile}
		}
	`;

    const videoStylesDesktop = `
		.eb-advanced-video-wrapper.${blockId} .eb-player-wrapper{
			width${videoWidthDesktop || ": auto"};
			transition: transform 0.5s, ${videoBDShadowTransitionStyle};
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player iframe {
			${videoBDShadowDesktop}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player iframe:hover {
			${videoBDShadowHoverDesktop}
		}

		.eb-advanced-video-wrapper.${blockId} .react-player__preview {
			${videoBDShadowDesktop}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview:hover {
			${videoBDShadowHoverDesktop}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview img {
			width${playIconWidthDesktop || ": auto"};
		}
		.eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview i {
			font-size${playIconWidthDesktop || ": 60px"};
            color: ${customPlayIconlibColor}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-player-option.sticky.stuck {
			width${stickyVideoWidthDesktop};
			height${stickyVideoHeightDesktop};
		}

		.eb-advanced-video-wrapper.${blockId} .player-placeholder{
			width${placeholderWidthDesktop};
			height${placeholderHeightDesktop};
			${videoBDShadowDesktop}
		}
		.eb-advanced-video-wrapper.${blockId} .player-placeholder:hover {
			${videoBDShadowHoverDesktop}
		}
		.eb-advanced-video-wrapper.${blockId} .player-placeholder img{
			width${placeholderPlayIconWidthDesktop};
		}
		.eb-advanced-video-wrapper.${blockId} .player-placeholder i{
			font-size${placeholderPlayIconWidthDesktop};
            color: ${lightboxPlayIconlibColor}
		}

		.eb-advanced-video-wrapper.${blockId}.lightbox .eb-player-wrapper {
			width${lightboxWidthDesktop};

		}
		.eb-advanced-video-wrapper.${blockId} .eb-player-option.lightbox {
			width: 100%;
			height${lightboxHeightDesktop};
			${lightboxBDShadowDesktop}
		}
		.eb-advanced-video-wrapper.${blockId} .eb-modal-player {
			background-color: ${lightboxBGColor};
		}
		.eb-advanced-video-wrapper.${blockId} .eb-modal-player .eb-modal-close {
			font-size${closeIconWidthDesktop};
			line-height${closeIconWidthDesktop};
			width${closeIconWidthDesktop};
			height${closeIconWidthDesktop};
			color: ${closeIconColor};
			background-color: ${closeIconBgColor};
		}
	`;

    const videoStylesTab = `
		.eb-advanced-video-wrapper.${blockId} .eb-player-wrapper{
			width${videoWidthTab || ": auto"};
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player iframe {
			${videoBDShadowTab}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player iframe:hover {
			${videoBDShadowHoverTab}
		}
		.eb-advanced-video-wrapper.${blockId} .react-player__preview {
			${videoBDShadowTab}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview:hover {
			${videoBDShadowHoverTab}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview img {
			width${playIconWidthTab || playIconWidthDesktop};
		}
        .eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview i {
			font-size${playIconWidthTab || playIconWidthDesktop};
		}

		.eb-advanced-video-wrapper.${blockId} .eb-player-option.sticky.stuck {
			width${stickyVideoWidthTab};
			height${stickyVideoHeightTab};
		}

		.eb-advanced-video-wrapper.${blockId} .player-placeholder{
			width${placeholderWidthTab};
			height${placeholderHeightTab};
			${videoBDShadowTab}
		}
		.eb-advanced-video-wrapper.${blockId} .player-placeholder:hover {
			${videoBDShadowHoverTab}
		}
		.eb-advanced-video-wrapper.${blockId} .player-placeholder img{
			width${placeholderPlayIconWidthTab};
		}
        .eb-advanced-video-wrapper.${blockId} .player-placeholder i{
			font-size${placeholderPlayIconWidthTab};
		}

		.eb-advanced-video-wrapper.${blockId}.lightbox .eb-player-wrapper {
			width${lightboxWidthTab};

		}
		.eb-advanced-video-wrapper.${blockId} .eb-player-option.lightbox {
			height${lightboxHeightTab};
			${lightboxBDShadowTab}
		}
		.eb-advanced-video-wrapper.${blockId} .eb-modal-player .eb-modal-close {
			font-size${closeIconWidthTab};
			line-height${closeIconWidthTab};
			width${closeIconWidthTab};
			height${closeIconWidthTab};
		}

	`;

    const videoStylesMobile = `
		.eb-advanced-video-wrapper.${blockId} .eb-player-wrapper{
			width${videoWidthMobile || ": auto"};
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player iframe {
			${videoBDShadowMobile}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player iframe:hover {
			${videoBDShadowHoverMobile}
		}
		.eb-advanced-video-wrapper.${blockId} .react-player__preview {
			${videoBDShadowMobile}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview:hover {
			${videoBDShadowHoverMobile}
		}

		.eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview img {
			width${playIconWidthMobile || playIconWidthTab};
		}
        .eb-advanced-video-wrapper.${blockId} .eb-react-player .react-player__preview i {
			font-size${playIconWidthMobile || playIconWidthMobile};
		}

		.eb-advanced-video-wrapper.${blockId} .eb-player-option.sticky.stuck {
			width${stickyVideoWidthMobile};
			height${stickyVideoHeightMobile};
		}

		.eb-advanced-video-wrapper.${blockId} .player-placeholder{
			width${placeholderWidthMobile};
			height${placeholderHeightMobile};
			${videoBDShadowMobile}
		}
		.eb-advanced-video-wrapper.${blockId} .player-placeholder:hover {
			${videoBDShadowHoverMobile}
		}
		.eb-advanced-video-wrapper.${blockId} .player-placeholder img{
			width${placeholderPlayIconWidthMobile};
		}
        .eb-advanced-video-wrapper.${blockId} .player-placeholder i{
			font-size${placeholderPlayIconWidthMobile};
		}

		.eb-advanced-video-wrapper.${blockId}.lightbox .eb-player-wrapper {
			width${lightboxWidthMobile};

		}
		.eb-advanced-video-wrapper.${blockId} .eb-player-option.lightbox {
			height${lightboxHeightMobile};
			${lightboxBDShadowMobile}
		}
		.eb-advanced-video-wrapper.${blockId} .eb-modal-player .eb-modal-close {
			font-size${closeIconWidthMobile};
			line-height${closeIconWidthMobile};
			width${closeIconWidthMobile};
			height${closeIconWidthMobile};
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${videoStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${videoStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${videoStylesMobile}
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
