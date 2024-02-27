const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateBackgroundControlStyles,
    StyleComponent,
} = window.EBControls;

import {
    dimensionsMargin,
    dimensionsPadding,
} from "./constants/dimensionsNames";
import {
    typoPrefix_prefixText,
    typoPrefix_suffixText,
    typoPrefix_typedText,
} from "./constants/typographyPrefixConstants";
import { WrpBdShadow } from "./constants/borderShadowConstants";
import { backgroundWrapper } from "./constants/backgroundsConstants";

export default function Style(props) {
    const { attributes, setAttributes, name } = props;

    const {
        blockId,
        prefixColor,
        typedTextColor,
        suffixTextColor,
        textAlign,
    } = attributes;

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

    // Prefix typography
    const {
        typoStylesDesktop: prefixTextTypoStylesDesktop,
        typoStylesTab: prefixTextTypoStylesTab,
        typoStylesMobile: prefixTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        defaultFontSize: 22,
        prefixConstant: typoPrefix_prefixText,
    });

    // suffix typoghraphy
    const {
        typoStylesDesktop: suffixTextTypoStylesDesktop,
        typoStylesTab: suffixTextTypoStylesTab,
        typoStylesMobile: suffixTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        defaultFontSize: 22,
        prefixConstant: typoPrefix_suffixText,
    });

    // typed text typoghrapy
    const {
        typoStylesDesktop: typedTextTypoStylesDesktop,
        typoStylesTab: typedTextTypoStylesTab,
        typoStylesMobile: typedTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        defaultFontSize: 22,
        prefixConstant: typoPrefix_typedText,
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
        controlName: WrpBdShadow,
        attributes,
    });

    // wrapper background controller
    const {
        backgroundStylesDesktop: wrpBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
        bgTransitionStyle: wrpBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: backgroundWrapper,
        noOverlay: true,
        noMainBgi: true,
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `

	 .eb-typed-wrapper.${blockId} {
		 ${wrapperMarginStylesDesktop}
		 ${wrapperPaddingStylesDesktop}
		 ${bdShadowStyesDesktop}
		 ${wrpBackgroundStylesDesktop}
		 text-align: ${textAlign};
		 transition: ${wrpBgTransitionStyle}, ${bdShadowTransitionStyle};
	 }

	 .eb-typed-wrapper.${blockId}:hover {
		 ${wrpHoverBackgroundStylesDesktop}
		 ${bdShadowStylesHoverDesktop}
	 }

	 .eb-typed-wrapper.${blockId}:before {
		 z-index: -11;
	 }
	 `;

    const wrapperStylesTab = `
	 .eb-typed-wrapper.${blockId}{
		 ${wrapperMarginStylesTab}
		 ${wrapperPaddingStylesTab}
		 ${bdShadowStyesTab}
	 }

	 .eb-typed-wrapper.${blockId}:hover {
		 ${bdShadowStylesHoverTab}
	 }
	 `;

    const wrapperStylesMobile = `
	 .eb-typed-wrapper.${blockId}{
		 ${wrapperMarginStylesMobile}
		 ${wrapperPaddingStylesMobile}
		 ${bdShadowStyesMobile}
	 }

	 .eb-typed-wrapper.${blockId}:hover {
		 ${bdShadowStylesHoverMobile}
	 }
	 `;

    // prefix text styles css in strings ⬇
    const prefixTypoStylesDesktop = `
	 .${blockId} .eb-typed-prefix{
		 ${prefixTextTypoStylesDesktop}
		 color: ${prefixColor || "#fff"};
	 }
	 `;

    const prefixTypoStylesTab = `
	 .${blockId} .eb-typed-prefix{
		 ${prefixTextTypoStylesTab}
	 }
	 `;

    const prefixTypoStylesMobile = `
	 .${blockId} .eb-typed-prefix{
		 ${prefixTextTypoStylesMobile}
	 }
	 `;

    // suffix text styles css in strings ⬇
    const suffixTypoStylesDesktop = `
	 .${blockId} .eb-typed-suffix{
		 ${suffixTextTypoStylesDesktop}
		 color: ${suffixTextColor || "#fff"};
	 }
	 `;

    const suffixTypoStylesTab = `
	 .${blockId} .eb-typed-suffix{
		 ${suffixTextTypoStylesTab}
	 }
	 `;

    const suffixTypoStylesMobile = `
	 .${blockId} .eb-typed-suffix{
		 ${suffixTextTypoStylesMobile}
	 }
	 `;

    // typed text styles css in strings ⬇
    const typedTypoStylesDesktop = `
	 .${blockId} .eb-typed-text,.${blockId} .eb-typed-view,.${blockId} .typed-cursor{
		 ${typedTextTypoStylesDesktop}
		 color: ${typedTextColor || "#fff"};
	 }
	 `;

    const typedTypoStylesTab = `
	 .${blockId} .eb-typed-text,.${blockId} .eb-typed-view, .${blockId} .typed-cursor{
		 ${typedTextTypoStylesTab}
	 }
	 `;

    const typedTypoStylesMobile = `
	 .${blockId} .eb-typed-text,.${blockId} .eb-typed-view, .${blockId} .typed-cursor{
		 ${typedTextTypoStylesMobile}
	 }
	 `;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		 ${wrapperStylesDesktop}
		 ${prefixTypoStylesDesktop}
		 ${suffixTypoStylesDesktop}
		 ${typedTypoStylesDesktop}
	 `);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		 ${wrapperStylesTab}
		 ${prefixTypoStylesTab}
		 ${suffixTypoStylesTab}
		 ${typedTypoStylesTab}
	 `);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		 ${wrapperStylesMobile}
		 ${prefixTypoStylesMobile}
		 ${suffixTypoStylesMobile}
		 ${typedTypoStylesMobile}
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
