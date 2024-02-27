import {
    IMAGE_WIDTH,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    LABEL_PADDING
} from "./constants";
import { typoPrefix_label } from "./constants/typographyConstants";

const {
    softMinifyCssStrings,
    // mimmikCssForPreviewBtnClick,
    duplicateBlockIdFix,
    generateDimensionsControlStyles,
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
        leftImageURL,
        rightImageURL,
        hover,
        verticalMode,
        showLabels,
        beforeLabel,
        afterLabel,
        fullWidth,
        position,
        lineWidth,
        lineColor,
        contentPosition,
        horizontalLabelPosition,
        verticalLabelPosition,
        noHandle,
        labelColor,
        labelBackgroundColor,
        classHook,
    } = attributes;

    const {
        rangeStylesDesktop: imageWidthDesktop,
        rangeStylesTab: imageWidthTab,
        rangeStylesMobile: imageWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMAGE_WIDTH,
        property: "max-width",
        attributes,
        customUnit: "px",
    });

    // wrapper margin
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        disableLeftRight: true,
        attributes,
    });

    // wrapper padding
    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    // label typography
    const {
        typoStylesDesktop: labelTypoStylesDesktop,
        typoStylesTab: labelTypoStylesTab,
        typoStylesMobile: labelTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_label,
    });

    // label padding
    let {
        dimensionStylesDesktop: labelPaddingDesktop,
        dimensionStylesTab: labelPaddingTab,
        dimensionStylesMobile: labelPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: LABEL_PADDING,
        styleFor: "padding",
        attributes,
    });

    labelPaddingDesktop = labelPaddingDesktop.split(";").join(" !important;");
    labelPaddingTab = labelPaddingTab.split(";").join(" !important;");
    labelPaddingMobile = labelPaddingMobile.split(";").join(" !important;");

    const desktopStyles = `
		.eb-image-comparison-align-center {
			margin-right: auto !important;
			margin-left: auto !important;
		}
		.eb-image-comparison-align-right {
			margin-left: auto !important;
		}
		.eb-image-comparison-wrapper.${blockId} {
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${!fullWidth ? imageWidthDesktop : ""}
		}

		${showLabels
            ? `
			.eb-image-comparison-wrapper.${blockId} div[data-testid="container"] >div:nth-child(4) div,
			.eb-image-comparison-wrapper.${blockId} div[data-testid="container"] >div:nth-child(5) div {
				${labelPaddingDesktop}
				${labelTypoStylesDesktop}
				${labelColor ? `color: ${labelColor} !important;` : ""}
				${labelBackgroundColor
                ? `background-color: ${labelBackgroundColor} !important;`
                : ""
            }
			}

			.eb-image-comparison-wrapper.${blockId}.eb-label-horizontal-top div[data-testid="container"] >div:nth-child(4) div,
			.eb-image-comparison-wrapper.${blockId}.eb-label-horizontal-top div[data-testid="container"] >div:nth-child(5) div {
				top: 5% !important;
				transform: none !important;
			}

			.eb-image-comparison-wrapper.${blockId}.eb-label-horizontal-bottom div[data-testid="container"] >div:nth-child(4) div,
			.eb-image-comparison-wrapper.${blockId}.eb-label-horizontal-bottom div[data-testid="container"] >div:nth-child(5) div {
				top: unset !important;
				bottom: 5% !important;
				transform: none !important;
			}

			.eb-image-comparison-wrapper.${blockId}.eb-label-vertical-left div[data-testid="container"] >div:nth-child(4) div,
			.eb-image-comparison-wrapper.${blockId}.eb-label-vertical-left div[data-testid="container"] >div:nth-child(5) div {
				left: 5% !important;
				transform: none !important;
			}

			.eb-image-comparison-wrapper.${blockId}.eb-label-vertical-right div[data-testid="container"] >div:nth-child(4) div,
			.eb-image-comparison-wrapper.${blockId}.eb-label-vertical-right div[data-testid="container"] >div:nth-child(5) div {
				left: unset !important;
				right: 5% !important;
				transform: none !important;
			}
			`
            : ""
        }
	`;

    const tabStyles = `
		.eb-image-comparison-wrapper.${blockId} {
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${!fullWidth ? imageWidthTab : ""}
		}

		${showLabels
            ? `
			.eb-image-comparison-wrapper.${blockId} div[data-testid="container"] >div:nth-child(4) div,
			.eb-image-comparison-wrapper.${blockId} div[data-testid="container"] >div:nth-child(5) div {
				${labelTypoStylesTab}
				${labelPaddingTab}
			}
			`
            : ""
        }
	`;

    const mobileStyles = `
		.eb-image-comparison-wrapper.${blockId} {
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${!fullWidth ? imageWidthMobile : ""}
		}

		${showLabels
            ? `
			.eb-image-comparison-wrapper.${blockId} div[data-testid="container"] >div:nth-child(4) div,
			.eb-image-comparison-wrapper.${blockId} div[data-testid="container"] >div:nth-child(5) div {
				${labelTypoStylesMobile}
				${labelPaddingMobile}
			}
			`
            : ""
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
