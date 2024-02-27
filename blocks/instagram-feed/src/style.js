import {
    NUMBER_OF_COLUMNS,
    GRID_GAP,
    IMAGE_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
} from "./constants";
import {
    typoPrefix_caption,
    typoPrefix_meta,
    typoPrefix_header,
} from "./constants/typographyPrefixConstants";
const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
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
        resOption,
        token,
        captionColor,
        metaColor,
        headerColor,
        overlayColor,
    } = attributes;

    // number of columns
    const {
        rangeStylesDesktop: numberOfColumnsDesktop,
        rangeStylesTab: numberOfColumnsTab,
        rangeStylesMobile: numberOfColumnsMobile,
    } = generateResponsiveRangeStyles({
        controlName: NUMBER_OF_COLUMNS,
        property: "",
        attributes,
        customUnit: "",
    });

    // padding between images
    const {
        dimensionStylesDesktop: gridGapDesktop,
        dimensionStylesTab: gridGapTab,
        dimensionStylesMobile: gridGapMobile,
    } = generateDimensionsControlStyles({
        controlName: GRID_GAP,
        styleFor: "padding",
        attributes,
    });

    // border & shadow
    const {
        styesDesktop: imageBdShadowStyesDesktop,
        styesTab: imageBdShadowStyesTab,
        styesMobile: imageBdShadowStyesMobile,
        stylesHoverDesktop: imageBdShadowStylesHoverDesktop,
        stylesHoverTab: imageBdShadowStylesHoverTab,
        stylesHoverMobile: imageBdShadowStylesHoverMobile,
        transitionStyle: imageBdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: IMAGE_BORDER,
        attributes,
    });

    // caption typography
    const {
        typoStylesDesktop: captionTypoStylesDesktop,
        typoStylesTab: captionTypoStylesTab,
        typoStylesMobile: captionTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_caption,
    });

    // meta typography
    const {
        typoStylesDesktop: metaTypoStylesDesktop,
        typoStylesTab: metaTypoStylesTab,
        typoStylesMobile: metaTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_meta,
    });

    // header typography
    const {
        typoStylesDesktop: headerTypoStylesDesktop,
        typoStylesTab: headerTypoStylesTab,
        typoStylesMobile: headerTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_header,
    });

    // wrapper margin
    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // wrapper padding
    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    const desktopStyles = `
		.eb-instagram-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapDesktop}
			width: calc((100% / ${numberOfColumnsDesktop.replace(/[^0-9]/g, "")}) - 20px );
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__item {
			${imageBdShadowStyesDesktop}
			overflow: hidden;
			transition: ${imageBdShadowTransitionStyle};
		}

		.eb-instagram-wrapper.${blockId}:hover .instagram__gallery__item {
			${imageBdShadowStylesHoverDesktop}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-caption p {
			${captionTypoStylesDesktop}
			${captionColor ? `color: ${captionColor};` : ""}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-meta .eb-instagram-date {
			${metaTypoStylesDesktop}
		}

		${metaColor
            ? `.eb-instagram-wrapper.${blockId} .eb-instagram-meta span {
			color: ${metaColor};
		}`
            : ""
        }

		${overlayColor
            ? `.eb-instagram-wrapper.${blockId} .instagram__gallery__item.instagram__gallery__item--overlay__simple .instagram__gallery__thumb::before,
		.eb-instagram-wrapper.${blockId} .instagram__gallery__item.instagram__gallery__item--overlay__basic .instagram__gallery__thumb::before,
		.eb-instagram-wrapper.${blockId} .instagram__gallery__item.instagram__gallery__item--overlay__standard .instagram__gallery__thumb::before {
			background: ${overlayColor}
		}`
            : ""
        }


		.eb-instagram-wrapper.${blockId} .author__info .author__name,
		.eb-instagram-wrapper.${blockId} .author__info .author__name a  {
			${headerTypoStylesDesktop}
			${headerColor ? `color: ${headerColor};` : ""}
		}


		.eb-instagram-wrapper.${blockId} .hide {
			display: none;
		}
	`;

    const tabStyles = `
		.eb-instagram-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapTab}
			${numberOfColumnsTab == ""
            ? `width: calc((100% / 2) - 20px)`
            : `width: calc((100% / ${numberOfColumnsTab.replace(
                /[^0-9]/g,
                ""
            )}) - 20px);`
        }
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__item {
			${imageBdShadowStyesTab}
		}

		.eb-instagram-wrapper.${blockId}:hover .instagram__gallery__item {
			${imageBdShadowStylesHoverTab}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-caption p {
			${captionTypoStylesTab}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-meta .eb-instagram-date {
			${metaTypoStylesTab}
		}

		.eb-instagram-wrapper.${blockId} .author__info .author__name,
		.eb-instagram-wrapper.${blockId} .author__info .author__name a  {
			${headerTypoStylesTab}
		}
	`;

    const mobileStyles = `
		.eb-instagram-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapMobile}
			${numberOfColumnsMobile == ""
            ? `width: calc((100% / 1) - 20px);`
            : `width: calc((100% / ${numberOfColumnsMobile.replace(
                /[^0-9]/g,
                ""
            )}) - 20px);`
        }
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__item {
			${imageBdShadowStyesMobile}
		}

		.eb-instagram-wrapper.${blockId}:hover .instagram__gallery__item {
			${imageBdShadowStylesHoverMobile}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-caption p {
			${captionTypoStylesMobile}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-meta .eb-instagram-date {
			${metaTypoStylesMobile}
		}

		.eb-instagram-wrapper.${blockId} .author__info .author__name,
		.eb-instagram-wrapper.${blockId} .author__info .author__name a  {
			${headerTypoStylesMobile}
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
