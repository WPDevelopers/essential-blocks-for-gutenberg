import {
    buttonIconSpacing,
    buttonIconSize,
    buttonPadding,
    buttonMargin,
    wrapperPadding,
    wrapperMargin,
    titlePadding,
    titleMargin,
    priceCurrencyMargin,
    buttonBorderShadow,
    buttonBackgroundControl,
    priceTableBackground,
    wrapperBorderShadow,
    iconBorderShadow,
    ribbonBorderShadow,
    headerIconSize,
    headerIconWidth,
    headerIconHeight,
    salepriceCurrencyMargin,
    featuresIconSize,
} from "./constants";

import {
    typoPrefix_title,
    typoPrefix_subtitle,
    typoPrefix_price_title,
    typoPrefix_price_currency,
    typoPrefix_pricing_period,
    typoPrefix_saleprice,
    typoPrefix_saleprice_currency,
    typoPrefix_features_text,
    typoPrefix_button,
    typoPrefix_ribbon,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        pricingStyle,
        showTitleLine,
        salePriceTextColor,
        salepriceCurrencyTextColor,
        buttonIconPosition,
        featuresTextColor,
        titleBackgroundColor,
        titleTextColor,
        titleLineColor,
        subtitleTextColor,
        priceTextColor,
        priceCurrencyTextColor,
        pricingPeriodTextColor,
        buttonTextColor,
        hoverTextColor,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        showIconBackground,
        iconColor,
        iconHoverColor,
        contentAlign,
        showRibbon,
        ribbonStyle,
        ribbonText,
        ribbonColor,
        ribbonBackgroundColor,
        featuresAlignment,
        buttonAlignment,
        headerAlignment,
        priceAlignment,
        iconAlignment,
        classHook,
        pricingTopBgColor,
    } = attributes;

    // wrapper styles css in strings
    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: wrapperPadding,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: wrapperMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        backgroundStylesDesktop: priceTableBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: priceTableHoverBackgroundStylesDesktop,
        backgroundStylesTab: priceTableBackgroundStylesTab,
        hoverBackgroundStylesTab: priceTableHoverBackgroundStylesTab,
        backgroundStylesMobile: priceTableBackgroundStylesMobile,
        hoverBackgroundStylesMobile: priceTableHoverBackgroundStylesMobile,
        overlayStylesDesktop: priceTableOverlayStylesDesktop,
        hoverOverlayStylesDesktop: priceTableHoverOverlayStylesDesktop,
        overlayStylesTab: priceTableOverlayStylesTab,
        hoverOverlayStylesTab: priceTableHoverOverlayStylesTab,
        overlayStylesMobile: priceTableOverlayStylesMobile,
        hoverOverlayStylesMobile: priceTableHoverOverlayStylesMobile,
        bgTransitionStyle: priceTableBgTransitionStyle,
        ovlTransitionStyle: priceTableOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: priceTableBackground,
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
        controlName: wrapperBorderShadow,
        attributes,
    });

    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: 28,
    });

    const {
        typoStylesDesktop: subtitleTypoStylesDesktop,
        typoStylesTab: subtitleTypoStylesTab,
        typoStylesMobile: subtitleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_subtitle,
    });

    const {
        dimensionStylesDesktop: titlePaddingStylesDesktop,
        dimensionStylesTab: titlePaddingStylesTab,
        dimensionStylesMobile: titlePaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: titlePadding,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: titleMarginStylesDesktop,
        dimensionStylesTab: titleMarginStylesTab,
        dimensionStylesMobile: titleMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: titleMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        typoStylesDesktop: priceTextTypoStylesDesktop,
        typoStylesTab: priceTextTypoStylesTab,
        typoStylesMobile: priceTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_price_title,
    });

    const {
        typoStylesDesktop: priceCurrencyTypoStylesDesktop,
        typoStylesTab: priceCurrencyTypoStylesTab,
        typoStylesMobile: priceCurrencyTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_price_currency,
    });

    const {
        dimensionStylesDesktop: priceCurrencyMarginStylesDesktop,
        dimensionStylesTab: priceCurrencyMarginStylesTab,
        dimensionStylesMobile: priceCurrencyMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: priceCurrencyMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        typoStylesDesktop: pricePeriodTypoStylesDesktop,
        typoStylesTab: pricePeriodTypoStylesTab,
        typoStylesMobile: pricePeriodTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_pricing_period,
    });

    const {
        typoStylesDesktop: salePriceTypoStylesDesktop,
        typoStylesTab: salePriceTypoStylesTab,
        typoStylesMobile: salePriceTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_saleprice,
    });

    const {
        typoStylesDesktop: salePriceCurrencyTypoStylesDesktop,
        typoStylesTab: salePriceCurrencyTypoStylesTab,
        typoStylesMobile: salePriceCurrencyTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_saleprice_currency,
    });

    const {
        dimensionStylesDesktop: salePriceMarginStylesDesktop,
        dimensionStylesTab: salePriceMarginStylesTab,
        dimensionStylesMobile: salePriceMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: salepriceCurrencyMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        typoStylesDesktop: featuresTypoStylesDesktop,
        typoStylesTab: featuresTypoStylesTab,
        typoStylesMobile: featuresTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_features_text,
    });

    const {
        rangeStylesDesktop: featuresIconSizeDesktop,
        rangeStylesTab: featuresIconSizeTab,
        rangeStylesMobile: featuresIconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: featuresIconSize,
        property: "font-size",
        attributes,
        customUnit: "px",
    });

    const {
        rangeStylesDesktop: buttonIconSpaceRightDesktop,
        rangeStylesTab: buttonIconSpaceRightTab,
        rangeStylesMobile: buttonIconSpaceRightMobile,
    } = generateResponsiveRangeStyles({
        controlName: buttonIconSpacing,
        property: "margin-right",
        attributes,
        customUnit: "px",
    });

    const {
        rangeStylesDesktop: buttonIconSpaceLeftDesktop,
        rangeStylesTab: buttonIconSpaceLeftTab,
        rangeStylesMobile: buttonIconSpaceLeftMobile,
    } = generateResponsiveRangeStyles({
        controlName: buttonIconSpacing,
        property: "margin-left",
        attributes,
        customUnit: "px",
    });

    const {
        dimensionStylesDesktop: buttonPaddingStylesDesktop,
        dimensionStylesTab: buttonPaddingStylesTab,
        dimensionStylesMobile: buttonPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: buttonPadding,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonMarginStylesDesktop,
        dimensionStylesTab: buttonMarginStylesTab,
        dimensionStylesMobile: buttonMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: buttonMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        rangeStylesDesktop: buttonIconSizeDesktop,
        rangeStylesTab: buttonIconSizeTab,
        rangeStylesMobile: buttonIconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: buttonIconSize,
        property: "font-size",
        attributes,
        customUnit: "px",
    });

    const {
        typoStylesDesktop: buttonTypoStylesDesktop,
        typoStylesTab: buttonTypoStylesTab,
        typoStylesMobile: buttonTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_button,
    });

    const {
        backgroundStylesDesktop: buttonBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: buttonHoverBackgroundStylesDesktop,
        bgTransitionStyle: buttonBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: buttonBackgroundControl,
        noOverlay: true,
        noMainBgi: true,
    });

    const {
        styesDesktop: btnShadowStyesDesktop,
        styesTab: btnShadowStyesTab,
        styesMobile: btnShadowStyesMobile,
        stylesHoverDesktop: btnShadowStylesHoverDesktop,
        stylesHoverTab: btnShadowStylesHoverTab,
        stylesHoverMobile: btnShadowStylesHoverMobile,
    } = generateBorderShadowStyles({
        controlName: buttonBorderShadow,
        attributes,
    });

    const {
        rangeStylesDesktop: headerIconSizeDesktop,
        rangeStylesTab: headerIconSizeTab,
        rangeStylesMobile: headerIconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: headerIconSize,
        property: "font-size",
        attributes,
    });

    const {
        rangeStylesDesktop: headerIconWidthDesktop,
        rangeStylesTab: headerIconWidthTab,
        rangeStylesMobile: headerIconWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: headerIconWidth,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: headerIconHeightDesktop,
        rangeStylesTab: headerIconHeightTab,
        rangeStylesMobile: headerIconHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: headerIconHeight,
        property: "height",
        attributes,
    });

    const {
        styesDesktop: iconBorderShadowDesktop,
        styesTab: iconBorderShadowTab,
        styesMobile: iconBorderShadowMobile,
        stylesHoverDesktop: iconBorderShadowHoverDesktop,
        stylesHoverTab: iconBorderShadowHoverTab,
        stylesHoverMobile: iconBorderShadowHoverMobile,
    } = generateBorderShadowStyles({
        controlName: iconBorderShadow,
        attributes,
    });

    const iconAlign = iconAlignment || contentAlign;

    const {
        typoStylesDesktop: ribbonTypoStylesDesktop,
        typoStylesTab: ribbonTypoStylesTab,
        typoStylesMobile: ribbonTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_ribbon,
    });

    const {
        styesDesktop: ribbonBorderShadowDesktop,
        stylesHoverDesktop: ribbonBorderShadowHoverDesktop,
    } = generateBorderShadowStyles({
        controlName: ribbonBorderShadow,
        attributes,
    });

    const desktopStyles = `
		  .eb-pricing-wrapper.${blockId} .eb-pricing {
			  text-align: ${contentAlign};
			  ${ribbonStyle === "ribbon-4" ? "overflow: hidden;" : ""}
		  }

		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-1::before {
			  content: "";
			  color: ${ribbonColor};
			  background: ${ribbonBackgroundColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing.style-4 .eb-pricing-top {
			background-color: ${pricingTopBgColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-2::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-3::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-4::before {
			  ${ribbonTypoStylesDesktop}
			  ${ribbonBorderShadowDesktop}
			  content: "${ribbonText}";
			  color: ${ribbonColor};
			  background: ${ribbonBackgroundColor};
			  text-align: center;
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing:hover .eb-pricing-item.ribbon-2::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing:hover .eb-pricing-item.ribbon-3::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing:hover .eb-pricing-item.ribbon-4::before {
			  ${ribbonBorderShadowHoverDesktop}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-2::after {
			  border-bottom: 15px solid ${ribbonBackgroundColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item {
			  ${wrapperPaddingStylesDesktop}
			  ${wrapperMarginStylesDesktop}
			  ${priceTableBackgroundStylesDesktop}
			  ${bdShadowStyesDesktop}
			  transition: ${priceTableBgTransitionStyle}, ${bdShadowTransitionStyle};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing-item-overlay::before  {
			  ${priceTableOverlayStylesDesktop}
			  transition: ${priceTableOvlTransitionStyle};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item:hover {
			  ${priceTableHoverBackgroundStylesDesktop}
			  ${bdShadowStylesHoverDesktop}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item:hover .eb-pricing-item-overlay:before {
			  ${priceTableHoverOverlayStylesDesktop}
		  }
		  .eb-pricing-wrapper.eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header {
			  ${titlePaddingStylesDesktop}
			  ${titleMarginStylesDesktop}
			  background: ${titleBackgroundColor || (pricingStyle === "style-2" ? "#c8e6c9" : "none")};
			  position: relative;
			  z-index: 0;
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header .eb-pricing-title {
			  ${titleTypoStylesDesktop}
			  color: ${titleTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header .eb-pricing-subtitle {
			  ${subtitleTypoStylesDesktop}
			  color: ${subtitleTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .original-price {
			  ${priceTextTypoStylesDesktop}
			  color: ${priceTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .original-price .price-currency {
			  ${priceCurrencyTypoStylesDesktop}
			  ${priceCurrencyMarginStylesDesktop}
			  color: ${priceCurrencyTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .price-period {
			  ${pricePeriodTypoStylesDesktop}
			  color: ${pricingPeriodTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .sale-price {
			  ${salePriceTypoStylesDesktop}
			  color: ${salePriceTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .sale-price .price-currency {
			  ${salePriceCurrencyTypoStylesDesktop}
			  ${salePriceMarginStylesDesktop}
			  color: ${salepriceCurrencyTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-body ul li, .${blockId} .eb-pricing .eb-pricing-item .eb-pricing-body ul li a {
			  ${featuresTypoStylesDesktop}
			  color: ${featuresTextColor || "#6d6d6d"};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-body ul li .eb-pricebox-icon {
			  ${featuresIconSizeDesktop}
			  margin-right: 8px;
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button-wrapper {
			  ${buttonMarginStylesDesktop}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button {
			  ${buttonPaddingStylesDesktop}
			  ${buttonTypoStylesDesktop}
			  ${buttonBackgroundStylesDesktop}
			  ${btnShadowStyesDesktop}
			  color: ${buttonTextColor};
			  transition: ${buttonBgTransitionStyle};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button:hover {
			  ${btnShadowStylesHoverDesktop}
			  ${buttonHoverBackgroundStylesDesktop}
			  color: ${hoverTextColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button i {
			  ${buttonIconPosition === "left" ? buttonIconSpaceRightDesktop : buttonIconSpaceLeftDesktop}
			  ${buttonIconSizeDesktop}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon {
			  display: flex;
			  align-items: center;
			  justify-content: ${iconAlign === "left" ? "flex-start" : iconAlign === "right" ? "flex-end" : "center"};
		  }

		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon {
			  display: flex;
			  align-items: center;
			  justify-content: center;
			  ${headerIconWidthDesktop}
			  ${headerIconHeightDesktop}
			  ${iconBorderShadowDesktop}
			  ${showIconBackground ? "background-color: " + iconBackgroundColor + ";" : "background-color: transparent;"}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item:hover .eb-pricing-icon .icon {
			  ${iconBorderShadowHoverDesktop}
			  ${showIconBackground ? "background-color: " + iconBackgroundHoverColor + ";" : "background-color: transparent;"}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon {
			  ${headerIconSizeDesktop}
			  color: ${iconColor};
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item:hover .eb-pricing-icon .icon {
			  color: ${iconHoverColor};
		  }

		  ${featuresAlignment
            ? `.eb-pricing-wrapper.${blockId} .eb-pricing-body {
				  text-align: ${featuresAlignment};
			  }`
            : ""
        }

		  ${buttonAlignment
            ? `.eb-pricing-wrapper.${blockId} .eb-pricing-footer {
				  text-align: ${buttonAlignment};
			  }`
            : ""
        }

		  ${headerAlignment
            ? `.eb-pricing-wrapper.${blockId} .eb-pricing-header {
				  text-align: ${headerAlignment};
			  }`
            : ""
        }

		  ${priceAlignment
            ? `.eb-pricing-wrapper.${blockId} .eb-pricing-tag {
				  text-align: ${priceAlignment};
			  }`
            : ""
        }

	  `;

    const tabStyles = `
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-2::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-3::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-4::before {
			  ${ribbonTypoStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item {
			  ${wrapperPaddingStylesTab}
			  ${wrapperMarginStylesTab}
			  ${priceTableBackgroundStylesTab}
			  ${bdShadowStyesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing-item-overlay:before {
			  ${priceTableOverlayStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item:hover {
			  ${priceTableHoverBackgroundStylesTab}
			  ${bdShadowStylesHoverTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing-item:hover .eb-pricing-item-overlay:before {
			  ${priceTableHoverOverlayStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header {
			  ${titlePaddingStylesTab}
			  ${titleMarginStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header .eb-pricing-title {
			  ${titleTypoStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header .eb-pricing-subtitle {
			  ${subtitleTypoStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .original-price {
			  ${priceTextTypoStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .original-price .price-currency {
			  ${priceCurrencyTypoStylesTab}
			  ${priceCurrencyMarginStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .price-period {
			  ${pricePeriodTypoStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .sale-price {
			  ${salePriceTypoStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .sale-price .price-currency {
			  ${salePriceCurrencyTypoStylesTab}
			  ${salePriceMarginStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-body ul li {
			  ${featuresTypoStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-body ul li .eb-pricebox-icon {
			  ${featuresIconSizeTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button-wrapper {
			  ${buttonMarginStylesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button {
			  ${buttonPaddingStylesTab}
			  ${buttonTypoStylesTab}
			  ${btnShadowStyesTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button:hover {
			  ${btnShadowStylesHoverTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button i {
			  ${buttonIconPosition === "left" ? buttonIconSpaceRightTab : buttonIconSpaceLeftTab}
			  ${buttonIconSizeTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon {
			  ${headerIconWidthTab}
			  ${headerIconHeightTab}
			  ${iconBorderShadowTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon:hover {
			  ${iconBorderShadowHoverTab}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon {
			  ${headerIconSizeTab}
		  }
	  `;

    const mobileStyles = `
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-2::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-3::before,
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item.ribbon-4::before {
			  ${ribbonTypoStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item {
			  ${wrapperPaddingStylesMobile}
			  ${wrapperMarginStylesMobile}
			  ${priceTableBackgroundStylesMobile}
			  ${bdShadowStyesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing-item-overlay:before {
			  ${priceTableOverlayStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item:hover {
			  ${priceTableHoverBackgroundStylesMobile}
			  ${bdShadowStylesHoverMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing-item:hover .eb-pricing-item-overlay:before {
			  ${priceTableHoverOverlayStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header {
			  ${titlePaddingStylesMobile}
			  ${titleMarginStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header .eb-pricing-title {
			  ${titleTypoStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header .eb-pricing-subtitle {
			  ${subtitleTypoStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .original-price {
			  ${priceTextTypoStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .original-price .price-currency {
			  ${priceCurrencyTypoStylesMobile}
			  ${priceCurrencyMarginStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .price-period {
			  ${pricePeriodTypoStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .sale-price {
			  ${salePriceTypoStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag .sale-price .price-currency {
			  ${salePriceCurrencyTypoStylesMobile}
			  ${salePriceMarginStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-body ul li {
			  ${featuresTypoStylesMobile}
		  }

		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-body ul li .eb-pricebox-icon {
			  ${featuresIconSizeMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button-wrapper {
			  ${buttonMarginStylesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button {
			  ${buttonPaddingStylesMobile}
			  ${buttonTypoStylesMobile}
			  ${btnShadowStyesMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button:hover {
			  ${btnShadowStylesHoverMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-footer .eb-pricing-button i {
			  ${buttonIconPosition === "left" ? buttonIconSpaceRightMobile : buttonIconSpaceLeftMobile}
			  ${buttonIconSizeMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon {
			  ${headerIconWidthMobile}
			  ${headerIconHeightMobile}
			  ${iconBorderShadowMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon:hover {
			  ${iconBorderShadowHoverMobile}
		  }
		  .eb-pricing-wrapper.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-icon .icon {
			  ${headerIconSizeMobile}
		  }
	  `;

    var titleLineStyle = "";
    var headerAlign =
        headerAlignment === "left"
            ? "margin: 0 !important;"
            : headerAlignment === "right"
                ? "margin: 0 0 0 auto !important;"
                : "margin: 0 auto !important;";
    var headerAlignStyle3 =
        headerAlignment === "left"
            ? "transform: translateX(-80%) !important;"
            : headerAlignment === "right"
                ? "transform: translateX(80%) !important;"
                : "margin: 0 auto !important;";
    var priceAlign =
        priceAlignment === "left"
            ? "margin: 0 !important;"
            : priceAlignment === "right"
                ? "margin: 0 0 0 auto !important;"
                : "margin: 0 auto !important;";
    if (showTitleLine) {
        titleLineStyle = `
		  .${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header::after {
			  content: "";
			  position: absolute;
			  width: 140px;
			  height: 1px;
			  bottom: 0px;
			  left: 0px;
			  right: 0px;
			  margin: 0 auto;
			  z-index: 1;
			  background-color: ${titleLineColor};
		  }
		  .${blockId}.eb-pricing-content-left .eb-pricing-item .eb-pricing-header::after,
		  .${blockId}.eb-pricing-content-left .eb-pricing-item .eb-pricing-tag::after {
			  margin: 0;
		  }
		  .${blockId}.eb-pricing-content-right .eb-pricing-item .eb-pricing-header::after,
		  .${blockId}.eb-pricing-content-right .eb-pricing-item .eb-pricing-tag::after {
			  margin: 0 0 0 auto;
		  }
		  ${headerAlignment
                ? `.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-header::after {
							 ${headerAlign}
						 }`
                : ""
            }

		 ${priceAlignment
                ? `.${blockId} .eb-pricing .eb-pricing-item .eb-pricing-tag::after {
						 ${priceAlign}
					 }`
                : ""
            }

		  .${blockId}.eb-pricing-content-left .eb-pricing.style-3 .eb-pricing-item .eb-pricing-header:after, .${blockId}.eb-pricing-content-left .eb-pricing.style-3 .eb-pricing-item .eb-pricing-tag:after {
			  transform: translateX(-80%);
		  }
		  .${blockId}.eb-pricing-content-right .eb-pricing.style-3 .eb-pricing-item .eb-pricing-header:after, .${blockId}.eb-pricing-content-right .eb-pricing.style-3 .eb-pricing-item .eb-pricing-tag:after {
			  transform: translateX(80%);
		  }
		  ${headerAlignment
                ? `.${blockId} .eb-pricing.style-3 .eb-pricing-item .eb-pricing-header::after {
							 ${headerAlignStyle3}
						 }`
                : ""
            }
		  .eb-pricing.style-3 .eb-pricing-item .eb-pricing-header:after {
			  position: absolute;
			  content: "";
			  width: 100%;
			  height: 1px;
			  bottom: 0px;
			  left: 0px;
			  right: 0px;
			  margin: 0 auto;
			  z-index: 1;
			  -webkit-transition: 1s;
			  -o-transition: 1s;
			  transition: 1s;
			  -webkit-transform: scaleX(0.4);
			  -ms-transform: scaleX(0.4);
			  transform: scaleX(0.4);
		  }
		  .eb-pricing.style-3 .eb-pricing-item:hover .header:after,
		  .eb-pricing.style-3 .eb-pricing-item:hover .eb-pricing-header:after {
			  -webkit-transform: scaleX(1);
			  -ms-transform: scaleX(1);
			  transform: scaleX(1) !important;
		  }
	  `;
    }

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		  ${desktopStyles}
		  ${titleLineStyle}
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
