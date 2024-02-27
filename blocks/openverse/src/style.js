import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_BORDER_SHADOW,
    ATTRIBUTION_MARGIN,
    ATTRIBUTION_PADDING,
    ATTRIBUTION_TYPOGRAPHY,
    ATTRIBUTION_WIDTH,
} from "./constants";

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
        displayAttribution,
        attributionColor,
        attributionBGColor,
        horizontalAlign,
        verticalAlign,
        verticalAlignCap2,
        textAlign,
        stylePreset,
        attributionStyle,
        hoverEffect,
        imageAlign,
        complexStyle,
        autoFit,
        classHook,
        imageurl,
    } = attributes;

    /**
     * CSS/styling Codes Starts from Here
     */

    // Caption Typography
    const {
        typoStylesDesktop: attributionTypographyDesktop,
        typoStylesTab: attributionTypographyTab,
        typoStylesMobile: attributionTypographyMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: ATTRIBUTION_TYPOGRAPHY,
        defaultFontSize: 16,
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

    /* Caption Margin */
    const {
        dimensionStylesDesktop: attributionMarginDesktop,
        dimensionStylesTab: attributionMarginTab,
        dimensionStylesMobile: attributionMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: ATTRIBUTION_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Caption Padding */
    const {
        dimensionStylesDesktop: attributionPaddingDesktop,
        dimensionStylesTab: attributionPaddingTab,
        dimensionStylesMobile: attributionPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: ATTRIBUTION_PADDING,
        styleFor: "padding",
        attributes,
    });

    // range controller Separator Line Width
    const {
        rangeStylesDesktop: imageWidthDesktop,
        rangeStylesTab: imageWidthTab,
        rangeStylesMobile: imageWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMAGE_WIDTH,
        property: "",
        attributes,
    });

    // range controller Separator Line Width
    const {
        rangeStylesDesktop: imageHeightDesktop,
        rangeStylesTab: imageHeightTab,
        rangeStylesMobile: imageHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMAGE_HEIGHT,
        property: "",
        attributes,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: attributionWidthDesktop,
        rangeStylesTab: attributionWidthTab,
        rangeStylesMobile: attributionWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: ATTRIBUTION_WIDTH,
        property: "width",
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
        styesDesktop: imageBDShadowDesktop,
        styesTab: imageBDShadowTab,
        styesMobile: imageBDShadowMobile,
        stylesHoverDesktop: imageBDShadowHoverDesktop,
        stylesHoverTab: imageBDShadowHoverTab,
        stylesHoverMobile: imageBDShadowHoverMobile,
        transitionStyle: imageBDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: IMAGE_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // Openverse popup styleso ⬇
    const openversePopup = `
	.eb-openverse-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		align-items: stretch;
		--size: calc(50vw / 4);
		--gap: 10px;
		gap: var(--gap);
   }
	.eb-openverse-grid .eb-openverse-grid-item {
		cursor: pointer;
		border: 3px solid transparent;
   }

   .eb_openverse_item_thumbnail {
		height: calc(var(--size) - var(--gap));
   }

   .eb_openverse_item_thumbnail img {
		max-width: 100%;
		object-fit: cover;
   }
	.eb-openverse-grid .eb-openverse-grid-item.selected {
		border-color: #007cba;
   }
	.openverse-modal-open #adminmenumain, .openverse-modal-open .interface-interface-skeleton__header, .openverse-modal-open .interface-interface-skeleton__footer {
		// visibility: hidden;
   }
	.openverse-placheholderbox {
		padding: 20px;
		border: 1px solid;
   }
	.openverse-placheholderbox .openverse-placheholderbox__label {
		font-size: 25px;
		font-weight: 400;
		display: flex;
		align-items: center;
		margin-bottom: 15px;
   }
	.openverse-placheholderbox .openverse-placheholderbox__label svg {
		margin-right: 10px;
   }
	.openverse-placheholderbox__description {
		font-size: 15px;
		font-weight: 400;
		padding: 0;
		margin-bottom: 10px;
   }
   .openverse-placheholderbox__note {
		font-size: 13px;
	}

	.openverse-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 160000;
		display: flex;
		justify-content: center;
		align-items: center;
   }
	.openverse-modal__inner {
		overflow: hidden;
		position: relative;
        top: 25px;
		left: -60px;
		width: 72%;
		height: 70vh;
		background-color: #fff;
   }
	.openverse-modal__header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 60px;
		z-index: 200;
		padding: 15px;
		box-sizing: border-box;
   }
	.title-section {
		padding: 0;
		margin: 0;
		font-size: 19px;
		font-weight: 500;
		line-height: 1.2rem;
		display: inline-block;
   }
	.close-btn {
		position: absolute;
		top: 16px;
		right: 16px;
		cursor: pointer;
		margin: 0;
		padding: 0;
		border: 1px solid transparent;
		background: 0 0;
		color: #646970;
		z-index: 1000;
		cursor: pointer;
		outline: 0;
		transition: color 0.1s ease-in-out, background 0.1s ease-in-out;
   }
	.openverse-modal__content {
		position: absolute;
		top: 61px;
		left: 0;
		right: 0;
		bottom: 61px;
		height: auto;
		width: auto;
		margin: 0;
		overflow: auto;
		background: #fff;
		border-top: 1px solid #dcdcde;
   }
	.search-section {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 75px;
		padding: 15px;
		box-sizing: border-box;
		border: 0 solid #dcdcde;
		overflow: hidden;
		border-bottom: 1px solid #dcdcde;
		display: flex;

   }
	.search-section .openverse-search-input, .search-section .openverse-search-btn {
		height: 45px;
   }

	.search-result-section {
		position: absolute;
		top: 75px;
		left: 0;
		bottom: 0;
		overflow: auto;
		outline: 0;
		width: 100%;
		display: grid;
		grid-template-columns: 75% 25%;
   }
	.search-content {
		padding: 15px;
   }
	.search-filter {
		background-color: #f3f2f2;
		border-left: 1px solid #dcdcde;
		padding: 15px;
   }
	.openverse-modal__footer {
		top: auto;
		bottom: 0;
		height: auto;
		overflow: visible;
		border-top: 1px solid #dcdcde;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 100;
		height: 61px;
		padding: 15px;
		box-sizing: border-box;
		border-top: 1px solid #dcdcde;
		text-align: right;
   }
	.openverse-modal__footer button {
		font-size: 13px;
		background: #2673FF;
		color: #fff;
		outline: 1px solid #000 0;
		text-decoration: none;
		text-shadow: none;
		white-space: nowrap;
		align-items: center;
		-webkit-appearance: none;
		border: 0;
		border-radius: 0;
		box-sizing: border-box;
		cursor: pointer;
		font-family: inherit;
		font-weight: 400;
		text-align: center;
		height: 35px;
		margin: 0;
		padding: 3px 20px;
		text-decoration: none;
		transition: box-shadow 0.1s linear;
   }
	.openverse-modal__footer button:disabled {
		color: #a7aaad !important;
		background: #f6f7f7 !important;
		border: 1px solid #dcdcde !important;
		box-shadow: none !important;
		text-shadow: none !important;
		cursor: default;
   }

	`;

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-openverse-wrapper.${blockId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			transition:${wrapperBgTransitionStyle}, ${wrapperBDShadowTransitionStyle};
		}
		.eb-openverse-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverDesktop}
			${wrapperHoverBackgroundStylesDesktop}
		}
	`;
    const wrapperStylesTab = `
		.eb-openverse-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
		.eb-openverse-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverTab}
			${wrapperHoverBackgroundStylesTab}
		}
	`;
    const wrapperStylesMobile = `
		.eb-openverse-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
		.eb-openverse-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverMobile}
			${wrapperHoverBackgroundStylesMobile}
		}
	`;

    const imageStylesDesktop = `
		.eb-openverse-wrapper.${blockId} .image-wrapper{
			width${imageWidthDesktop || ": auto"};
			height${imageHeightDesktop || ": auto"};
			${!complexStyle ? imageBDShadowDesktop : ""}
			transition: transform 0.5s, ${imageBDShadowTransitionStyle};
			margin: ${imageAlign};
		}

		.eb-openverse-wrapper.${blockId} .image-wrapper img{
			transition: transform 0.5s, ${imageBDShadowTransitionStyle};
			${autoFit ? "object-fit: cover;" : ""}
		}

		.eb-openverse-wrapper.${blockId} .image-attribution{
			color: ${attributionColor};
			text-align: ${textAlign};
			${attributionMarginDesktop}
			${attributionPaddingDesktop}
			${attributionTypographyDesktop}
			${attributionWidthDesktop}
		}

		.eb-openverse-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverDesktop : ""}
		}
		${!displayAttribution
            ? ` .eb-openverse-wrapper.${blockId} .image-attribution {display:none;} `
            : ""
        }
	`;

    const imageStylesTab = `
		.eb-openverse-wrapper.${blockId} .image-wrapper{
			width${imageWidthTab || ": auto"};
			height${imageHeightTab || ": auto"};
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverTab : ""}
		}
		.eb-openverse-wrapper.${blockId} .image-attribution {
			${attributionMarginTab}
			${attributionPaddingTab}
			${attributionTypographyTab}
			${attributionWidthTab}
		}
	`;

    const imageStylesMobile = `
		.eb-openverse-wrapper.${blockId} .image-wrapper img{
			${!complexStyle ? imageBDShadowMobile : ""}
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverMobile : ""}
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper .image-attribution {
			${attributionMarginMobile}
			${attributionPaddingMobile}
			${attributionTypographyMobile}
			${attributionWidthMobile}
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper{
			width${imageWidthMobile || ": auto"};
			height${imageHeightMobile || ": auto"};
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const editAllStyles = softMinifyCssStrings(`
		${openversePopup}
	`);

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${imageStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${imageStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${imageStylesMobile}
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

            <style>
                {`
                ${editAllStyles}
                `}
            </style>
        </>
    );
}
