import {
    typoPrefix_text,
    typoPrefix_title,
} from "./constants/typographyPrefixConstants";

import {
    dimensionsMargin,
    dimensionsPadding,
} from "./constants/dimensionsNames";

import { wrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";
import { NOTICE_ALIGNMENT } from "./constants";

const {
    //
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    generateResponsiveAlignStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,

        dismissible,
        title,
        text,
        titleColor,
        textColor,
        classHook,
    } = attributes;

    //
    // CSS/styling Codes Starts from Here

    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: 32,
    });

    const {
        typoStylesDesktop: textTypoStylesDesktop,
        typoStylesTab: textTypoStylesTab,
        typoStylesMobile: textTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_text,
        defaultFontSize: 18,
    });

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

    const {
        alignStylesDesktop: noticeAlignDesktop,
        alignStylesTab: noticeAlignTab,
        alignStylesMobile: noticeAlignMobile,
    } = generateResponsiveAlignStyles({
        controlName: NOTICE_ALIGNMENT,
        property: "text-align",
        attributes,
    });

    const {
        backgroundStylesDesktop,
        hoverBackgroundStylesDesktop,
        backgroundStylesTab,
        hoverBackgroundStylesTab,
        backgroundStylesMobile,
        hoverBackgroundStylesMobile,
        overlayStylesDesktop,
        hoverOverlayStylesDesktop,
        overlayStylesTab,
        hoverOverlayStylesTab,
        overlayStylesMobile,
        hoverOverlayStylesMobile,
        bgTransitionStyle,
        ovlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: wrapBg,
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
        controlName: wrpBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `

	.eb-notice-wrapper.${blockId} > * {
		position: relative;
	}

	.eb-notice-wrapper.${blockId}{
		${wrapperMarginStylesDesktop}
		${wrapperPaddingStylesDesktop}
		${backgroundStylesDesktop}
		${bdShadowStyesDesktop}
		transition:${bgTransitionStyle}, ${bdShadowTransitionStyle};
		overflow: hidden;
		position: relative;
		${noticeAlignDesktop}
	}

	.eb-notice-wrapper.${blockId}:hover{
		${hoverBackgroundStylesDesktop}
		${bdShadowStylesHoverDesktop}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlayStylesDesktop}
		transition:${ovlTransitionStyle};
	}

	.eb-notice-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesDesktop}
	}

	`;

    const wrapperStylesTab = `
	.eb-notice-wrapper.${blockId}{
		${wrapperMarginStylesTab}
		${wrapperPaddingStylesTab}
		${backgroundStylesTab}
		${bdShadowStyesTab}
		${noticeAlignTab}
	}

	.eb-notice-wrapper.${blockId}:hover{
		${hoverBackgroundStylesTab}
		${bdShadowStylesHoverTab}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlayStylesTab}
	}

	.eb-notice-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesTab}
	}

	`;

    const wrapperStylesMobile = `
	.eb-notice-wrapper.${blockId}{
		${wrapperMarginStylesMobile}
		${wrapperPaddingStylesMobile}
		${backgroundStylesMobile}
		${bdShadowStyesMobile}
		${noticeAlignMobile}
	}

	.eb-notice-wrapper.${blockId}:hover{
		${hoverBackgroundStylesMobile}
		${bdShadowStylesHoverMobile}
	}

	.eb-notice-wrapper.${blockId}:before{
		${overlayStylesMobile}
	}

	.eb-notice-wrapper.${blockId}:hover:before{
		${hoverOverlayStylesMobile}
	}
	`;

    //
    // titleWrapper styles css in strings ⬇
    const titleWrapperStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-title-wrapper{
		// display: flex;
		justify-content: space-between;
	}
	`;

    // title styles css in strings ⬇
    const titleStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-title{
		${titleTypoStylesDesktop}
		color: ${titleColor || "#fff"};
	}
	`;

    const titleStylesTab = `
	.eb-notice-wrapper.${blockId} .eb-notice-title{
		${titleTypoStylesTab}
	}
	`;

    const titleStylesMobile = `
	.eb-notice-wrapper.${blockId} .eb-notice-title{
		${titleTypoStylesMobile}
	}
	`;

    // text styles css in strings ⬇
    const textStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-text{
		${textTypoStylesDesktop}
		color: ${textColor || "#edf1f7"};
	}
	`;

    const textStylesTab = `
	.eb-notice-wrapper.${blockId} .eb-notice-text{
		${textTypoStylesTab}
	}
	`;

    const textStylesMobile = `
	.eb-notice-wrapper.${blockId} .eb-notice-text{
		${textTypoStylesMobile}
	}
	`;

    // dismiss styles css in strings ⬇
    const dismissStylesDesktop = `
	.eb-notice-wrapper.${blockId} .eb-notice-dismiss{
		color: ${textColor || "#edf1f7"};
		display: ${dismissible ? "flex" : "none"};

		top: 0px;
		right: 0px;
		width: 24px;
		height: 24px;
		position: absolute;
		justify-content: center;
	}

	.eb-notice-wrapper.${blockId} .eb-notice-dismiss:after{
		content: "\\00d7";
	}

	.entry-content
	> *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce) {
		margin-left: auto;
		margin-right: auto;
	}

	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${titleWrapperStylesDesktop}
		${dismissStylesDesktop}
		${titleStylesDesktop}
		${textStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${titleStylesTab}
		${textStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${titleStylesMobile}
		${textStylesMobile}
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
