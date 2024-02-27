
import {
    dimensionsMargin,
    dimensionsPadding,
    wrapBg,
    wrpBdShadow,
    rowNumber,
    columnGap,
    rowGap,
    imageMargin,
    imageRadius,
    imageHeight,
    imageWidth,
    titleMargin,
    creatorMargin,
    creatorImageHeight,
    creatorImageWidth,
    creatorImageBorder,
    priceMargin,
    buttonMargin,
    buttonPadding,
    buttonBdrSdw,
    itemBg,
    itemBdrSdw,
    itemPadding,
} from "./constants/constants";

import {
    typoPrefix_title,
    typoPrefix_owner,
    typoPrefix_price,
    typoPrefix_button,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateTypographyStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const {
        attributes,
        setAttributes,
        name
    } = props;

    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        source,
        settings,
        layout,
        gridPreset,
        displayImage,
        displayTitle,
        displayCreator,
        displayOwner,
        displayPrice,
        displayLastSale,
        displayButton,
        titleColor,
        ownerTextColor,
        ownerLinkColor,
        showOwnerImage,
        showOwnerText,
        priceColor,
        buttonTextColor,
        buttonBgColor,
        buttonHoverTextColor,
        buttonHoverBgColor,
        gridOverlayBg,
        listHorizontalAlignment,
        listVerticalAlignment,
    } = attributes;


    //
    // CSS/styling Codes Starts from Here
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
        dimensionStylesDesktop: imageMarginDesktop,
        dimensionStylesTab: imageMarginTab,
        dimensionStylesMobile: imageMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: imageMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: imageRadiusDesktop,
        dimensionStylesTab: imageRadiusTab,
        dimensionStylesMobile: imageRadiusMobile,
    } = generateDimensionsControlStyles({
        controlName: imageRadius,
        styleFor: "border-radius",
        attributes,
    });

    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: titleMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: creatorMarginDesktop,
        dimensionStylesTab: creatorMarginTab,
        dimensionStylesMobile: creatorMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: creatorMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: priceMarginDesktop,
        dimensionStylesTab: priceMarginTab,
        dimensionStylesMobile: priceMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: priceMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonMarginDesktop,
        dimensionStylesTab: buttonMarginTab,
        dimensionStylesMobile: buttonMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: buttonMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonPaddingDesktop,
        dimensionStylesTab: buttonPaddingTab,
        dimensionStylesMobile: buttonPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: buttonPadding,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: itemPaddingDesktop,
        dimensionStylesTab: itemPaddingTab,
        dimensionStylesMobile: itemPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: itemPadding,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: creatorImgBdrRdsDesktop,
        dimensionStylesTab: creatorImgBdrRdsTab,
        dimensionStylesMobile: creatorImgBdrRdsMobile,
    } = generateDimensionsControlStyles({
        controlName: creatorImageBorder,
        styleFor: "border-radius",
        attributes,
    });

    const {
        backgroundStylesDesktop,
        hoverBackgroundStylesDesktop,
        backgroundStylesTab,
        hoverBackgroundStylesTab,
        backgroundStylesMobile,
        hoverBackgroundStylesMobile,
        bgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: wrapBg,
    });

    const {
        backgroundStylesDesktop: itemBgStyleDesktop,
        hoverBackgroundStylesDesktop: itemHoverBgStyleDesktop,
        backgroundStylesTab: itemBgStyleTab,
        hoverBackgroundStylesTab: itemHoverBgStyleTab,
        backgroundStylesMobile: itemBgStyleMobile,
        hoverBackgroundStylesMobile: itemHoverBgStyleMobile,
        bgTransitionStyle: itemBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: itemBg,
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

    const {
        styesDesktop: btnBorderShadowDesktop,
        styesTab: btnBorderShadowTab,
        styesMobile: btnBorderShadowMobile,
        stylesHoverDesktop: btnBorderShadowHoverDesktop,
        stylesHoverTab: btnBorderShadowHoverTab,
        stylesHoverMobile: btnBorderShadowHoverMobile,
        transitionStyle: btnBorderShadowTransition,
    } = generateBorderShadowStyles({
        controlName: buttonBdrSdw,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: itemBorderShadowDesktop,
        styesTab: itemBorderShadowTab,
        styesMobile: itemBorderShadowMobile,
        stylesHoverDesktop: itemBorderShadowHoverDesktop,
        stylesHoverTab: itemBorderShadowHoverTab,
        stylesHoverMobile: itemBorderShadowHoverMobile,
        transitionStyle: itemBorderShadowTransition,
    } = generateBorderShadowStyles({
        controlName: itemBdrSdw,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // styles related to generateResponsiveRangeStyles start ⬇
    const {
        rangeStylesDesktop: rowNumberDesktop,
        rangeStylesTab: rowNumberTab,
        rangeStylesMobile: rowNumberMobile,
    } = generateResponsiveRangeStyles({
        controlName: rowNumber,
        property: null,
        attributes,
        noUnits: true
    });

    const {
        rangeStylesDesktop: columnGapDesktop,
        rangeStylesTab: columnGapTab,
        rangeStylesMobile: columnGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: columnGap,
        property: "grid-column-gap",
        attributes,
    });
    const {
        rangeStylesDesktop: rowGapDesktop,
        rangeStylesTab: rowGapTab,
        rangeStylesMobile: rowGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: rowGap,
        property: "grid-row-gap",
        attributes,
    });
    const {
        rangeStylesDesktop: imageHeightDesktop,
        rangeStylesTab: imageHeightTab,
        rangeStylesMobile: imageHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: imageHeight,
        property: "height",
        attributes,
    });
    const {
        rangeStylesDesktop: imageWidthDesktop,
        rangeStylesTab: imageWidthTab,
        rangeStylesMobile: imageWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: imageWidth,
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: creatorImageHeightDesktop,
        rangeStylesTab: creatorImageHeightTab,
        rangeStylesMobile: creatorImageHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: creatorImageHeight,
        property: "height",
        attributes,
    });
    const {
        rangeStylesDesktop: creatorImageWidthDesktop,
        rangeStylesTab: creatorImageWidthTab,
        rangeStylesMobile: creatorImageWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: creatorImageWidth,
        property: "width",
        attributes,
    });


    //styles related to generateTypographyStyles start ⬇
    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: 16,
    });

    const {
        typoStylesDesktop: ownerTypoStylesDesktop,
        typoStylesTab: ownerTypoStylesTab,
        typoStylesMobile: ownerTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_owner,
        defaultFontSize: 14,
    });

    const {
        typoStylesDesktop: priceTypoStylesDesktop,
        typoStylesTab: priceTypoStylesTab,
        typoStylesMobile: priceTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_price,
        defaultFontSize: 14,
    });

    const {
        typoStylesDesktop: buttonTypoStylesDesktop,
        typoStylesTab: buttonTypoStylesTab,
        typoStylesMobile: buttonTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_button,
        defaultFontSize: 14,
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
        .eb-nft-gallery-wrapper.${blockId} {
            ${wrapperMarginStylesDesktop}
            ${wrapperPaddingStylesDesktop}
            ${backgroundStylesDesktop}
            ${bdShadowStyesDesktop}
            transition:${bgTransitionStyle}, ${bdShadowTransitionStyle};
        }
        .eb-nft-gallery-wrapper.${blockId}:hover {
            ${bdShadowStylesHoverDesktop}
            ${hoverBackgroundStylesDesktop}
        }
	`;

    const wrapperStylesTab = `
        .eb-nft-gallery-wrapper.${blockId} {
            ${wrapperMarginStylesTab}
            ${wrapperPaddingStylesTab}
            ${backgroundStylesTab}
            ${bdShadowStyesTab}
        }
        .eb-nft-gallery-wrapper.${blockId}:hover {
            ${bdShadowStylesHoverTab}
            ${hoverBackgroundStylesTab}
        }
	`;

    const wrapperStylesMobile = `
        .eb-nft-gallery-wrapper.${blockId} {
            ${wrapperMarginStylesMobile}
            ${wrapperPaddingStylesMobile}
            ${backgroundStylesMobile}
            ${bdShadowStyesMobile}
        }
        .eb-nft-gallery-wrapper.${blockId}:hover {
            ${bdShadowStylesHoverMobile}
            ${hoverBackgroundStylesMobile}
        }
	`;

    // Layout styles css in strings ⬇
    const layoutStylesDesktop = `
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_grid,
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_list {
            grid-template-columns: repeat(${rowNumberDesktop}, 1fr);
            ${columnGapDesktop}
            ${rowGapDesktop}
        }
	`;

    const layoutStylesTab = `
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_grid,
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_list {
            grid-template-columns: repeat(${rowNumberTab}, 1fr);
            ${columnGapTab}
            ${rowGapTab}
        }
	`;

    const layoutStylesMobile = `
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_grid,
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_list {
            grid-template-columns: repeat(${rowNumberMobile}, 1fr);
            ${columnGapMobile}
            ${rowGapMobile}
        }
	`;

    // Content styles css in strings ⬇
    const contentStylesDesktop = `
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_item {
            ${itemPaddingDesktop}
            ${itemBgStyleDesktop}
            ${itemBorderShadowDesktop}
            transition:${itemBgTransitionStyle}, ${itemBorderShadowTransition};
        }
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_item:hover {
            ${itemHoverBgStyleDesktop}
            ${itemBorderShadowHoverDesktop}
        }
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_list .eb_nft_item {
            justify-content: ${listHorizontalAlignment};
            align-items: ${listVerticalAlignment};
        }
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap.eb_nft_grid.preset-3 .eb_nft_item .eb_nft_content {
            background-color: ${gridOverlayBg};
        }
        ${displayImage ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_thumbnail {
                ${imageMarginDesktop}
                ${imageRadiusDesktop}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_thumbnail img {
                ${imageHeightDesktop}
                ${imageWidthDesktop}
                ${imageRadiusDesktop}
            }` : ""
        }

        ${displayTitle ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_title {
                color: ${titleColor};
                ${titleTypoStylesDesktop}
                ${titleMarginDesktop}
            }` : ""
        }

        ${(displayPrice || displayLastSale) ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_price {
                color: ${priceColor};
                ${priceTypoStylesDesktop}
                ${priceMarginDesktop}
            }` : ""
        }
        ${(gridPreset === 'preset-1') ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_price_wrapper {
                min-height: 20px;
            }` : ""
        }
        ${(displayCreator || displayOwner) ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator {
                color: ${ownerTextColor};
                ${ownerTypoStylesDesktop}
                ${creatorMarginDesktop}
            }
            ${showOwnerText ?
                `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator a {
                    color: ${ownerLinkColor};
                    ${ownerTypoStylesDesktop}
                }` : ""
            }

            ${showOwnerImage ?
                `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator img {
                    ${creatorImageHeightDesktop}
                    ${creatorImageWidthDesktop}
                    ${creatorImgBdrRdsDesktop}
                }` : ""
            }` : ""
        }

        ${displayButton ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button {
                ${buttonMarginDesktop}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button a {
                background-color: ${buttonBgColor};
                color: ${buttonTextColor};
                ${buttonTypoStylesDesktop}
                ${buttonPaddingDesktop}
                ${btnBorderShadowDesktop}
                transition: ${btnBorderShadowTransition};
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button:hover a {
                background-color: ${buttonHoverBgColor};
                color: ${buttonHoverTextColor};
                ${btnBorderShadowHoverDesktop}
            }` : ""
        }
	`;

    const contentStylesTab = `
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_item {
            ${itemPaddingTab}
            ${itemBgStyleTab}
            ${itemBorderShadowTab}
        }
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_item:hover {
            ${itemHoverBgStyleTab}
            ${itemBorderShadowHoverTab}
        }
        ${displayImage ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_thumbnail {
                ${imageMarginTab}
                ${imageRadiusTab}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_thumbnail img {
                ${imageHeightTab}
                ${imageWidthTab}
                ${imageRadiusTab}
            }` : ""
        }

        ${displayTitle ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_title {
                ${titleTypoStylesTab}
                ${titleMarginTab}
            }` : ""
        }

        ${(displayPrice || displayLastSale) ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_price {
                ${priceTypoStylesTab}
                ${priceMarginTab}
            }` : ""
        }
        ${(displayCreator || displayOwner) ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator {
                ${ownerTypoStylesTab}
                ${creatorMarginTab}
            }
            ${showOwnerText ?
                `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator a {
                    ${ownerTypoStylesTab}
                }` : ""
            }

            ${showOwnerImage ?
                `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator img {
                    ${creatorImageHeightTab}
                    ${creatorImageWidthTab}
                    ${creatorImgBdrRdsTab}
                }` : ""
            }` : ""
        }

        ${displayButton ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button {
                ${buttonMarginTab}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button a {
                ${buttonTypoStylesTab}
                ${buttonPaddingTab}
                ${btnBorderShadowTab}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button:hover a {
                ${btnBorderShadowHoverTab}
            }` : ""
        }
	`;

    const contentStylesMobile = `
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_item {
            ${itemPaddingMobile}
            ${itemBgStyleMobile}
            ${itemBorderShadowMobile}
        }
        .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_item:hover {
            ${itemHoverBgStyleMobile}
            ${itemBorderShadowHoverMobile}
        }
        ${displayImage ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_thumbnail {
                ${imageMarginMobile}
                ${imageRadiusMobile}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_content_wrap .eb_nft_thumbnail img {
                ${imageHeightMobile}
                ${imageWidthMobile}
                ${imageRadiusMobile}
            }` : ""
        }

        ${displayTitle ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_title {
                ${titleTypoStylesMobile}
                ${titleMarginMobile}
            }` : ""
        }

        ${(displayPrice || displayLastSale) ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_price {
                ${priceTypoStylesMobile}
                ${priceMarginMobile}
            }` : ""
        }
        ${(displayCreator || displayOwner) ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator {
                ${ownerTypoStylesMobile}
                ${creatorMarginMobile}
            }
            ${showOwnerText ?
                `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator a {
                    ${ownerTypoStylesMobile}
                }` : ""
            }

            ${showOwnerImage ?
                `.eb-nft-gallery-wrapper.${blockId} .eb_nft_content .eb_nft_creator img {
                    ${creatorImageHeightMobile}
                    ${creatorImageWidthMobile}
                    ${creatorImgBdrRdsMobile}
                }` : ""
            }` : ""
        }

        ${displayButton ?
            `.eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button {
                ${buttonMarginMobile}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button a {
                ${buttonTypoStylesMobile}
                ${buttonPaddingMobile}
                ${btnBorderShadowMobile}
            }
            .eb-nft-gallery-wrapper.${blockId} .eb_nft_item .eb_nft_content .eb_nft_button button:hover a {
                ${btnBorderShadowHoverMobile}
            }` : ""
        }
	`;


    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${layoutStylesDesktop}
		${contentStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
        ${wrapperStylesTab}
        ${layoutStylesTab}
        ${contentStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
        ${wrapperStylesMobile}
        ${layoutStylesMobile}
        ${contentStylesMobile}
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
    )
}
