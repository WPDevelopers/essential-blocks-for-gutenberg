import {
    PROGRESSBAR_HEIGHT,
    PROGRESSBAR_WIDTH,
    STROKE_WIDTH,
    PROGRESSBAR_SIZE,
    BOX_HEIGHT,
    BOX_WIDTH,
    WRAPPER_MARGIN,
    TITLE_SPACE,
} from "./constants";

import {
    typoPrefix_title,
    typoPrefix_counter,
    typoPrefix_prefix,
} from "./constants/typographyConstants";

const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    generateDimensionsControlStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        layout,
        backgroundColor,
        progressColor,
        isProgressGradient,
        progressGradient,
        titleColor,
        counterColor,
        showInline,
        strokeColor,
        prefixColor,
        classHook,
    } = attributes;

    // wrapper margin
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // progress bar width
    const {
        rangeStylesDesktop: progressBarWidthDesktop,
        rangeStylesTab: progressBarWidthTab,
        rangeStylesMobile: progressBarWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: PROGRESSBAR_WIDTH,
        property: "width",
        attributes,
    });

    // progress bar height
    const {
        rangeStylesDesktop: progressBarHeightDesktop,
        rangeStylesTab: progressBarHeightTab,
        rangeStylesMobile: progressBarHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: PROGRESSBAR_HEIGHT,
        property: "height",
        attributes,
        customUnit: "px",
    });

    // stroke width
    const {
        rangeStylesDesktop: strokeWidthDesktop,
        rangeStylesTab: strokeWidthTab,
        rangeStylesMobile: strokeWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: STROKE_WIDTH,
        property: "border-width",
        attributes,
        customUnit: "px",
    });

    // circle progressbar width
    const {
        rangeStylesDesktop: circleWidthDesktop,
        rangeStylesTab: circleWidthTab,
        rangeStylesMobile: circleWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: PROGRESSBAR_SIZE,
        property: "width",
        attributes,
        customUnit: "px",
    });

    // circle progressbar height
    const {
        rangeStylesDesktop: circleHeightDesktop,
        rangeStylesTab: circleHeightTab,
        rangeStylesMobile: circleHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: PROGRESSBAR_SIZE,
        property: "height",
        attributes,
        customUnit: "px",
    });

    // box progressbar height
    const {
        rangeStylesDesktop: boxHeightDesktop,
        rangeStylesTab: boxHeightTab,
        rangeStylesMobile: boxHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: BOX_HEIGHT,
        property: "height",
        attributes,
        customUnit: "px",
    });

    // box progressbar width
    const {
        rangeStylesDesktop: boxWidthDesktop,
        rangeStylesTab: boxWidthTab,
        rangeStylesMobile: boxWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: BOX_WIDTH,
        property: "width",
        attributes,
        customUnit: "px",
    });

    // title typography
    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
    });

    // title margin
    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: TITLE_SPACE,
        styleFor: "margin",
        attributes,
    });

    // counter typography
    const {
        typoStylesDesktop: counterTypoStylesDesktop,
        typoStylesTab: counterTypoStylesTab,
        typoStylesMobile: counterTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_counter,
    });

    // prefix & suffix typography
    const {
        typoStylesDesktop: prefixTypoStylesDesktop,
        typoStylesTab: prefixTypoStylesTab,
        typoStylesMobile: prefixTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_prefix,
    });

    const halfCircleHeightTab = circleWidthTab || circleWidthDesktop;
    const halfCircleHeightMobile = circleWidthMobile || circleWidthDesktop;

    const desktopStyles = `
		.eb-progressbar-wrapper.${blockId} {
			${wrapperMarginDesktop}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-line {
			${progressBarHeightDesktop}
			${strokeColor ? `background-color: ${strokeColor};` : ""}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle {
			${circleWidthDesktop}
			${circleHeightDesktop}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-inner-content {
			padding: ${strokeWidthDesktop.replace(/\D/g, "")}px;
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-half {
			${strokeWidthDesktop}
			${progressColor ? `border-color: ${progressColor};` : ""}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-fill .eb-progressbar-circle-half,
		.eb-progressbar-wrapper.${blockId} .eb-progressbar-half-circle-fill .eb-progressbar-circle-half {
			${progressColor ? `background-color: ${progressColor};` : ""}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-line-fill {
			${progressBarHeightDesktop}
			${
                layout === "line" && isProgressGradient
                    ? progressGradient
                        ? `background-image: ${progressGradient};`
                        : ""
                    : progressColor
                    ? `background-color: ${progressColor};`
                    : ""
            };
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-line-container {
			${progressBarWidthDesktop}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-title {
			${titleTypoStylesDesktop}
			${titleMarginDesktop}
			${titleColor ? `color: ${titleColor};` : ""}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-count-wrap {
			${counterTypoStylesDesktop}
			${counterColor ? `color: ${counterColor};` : ""}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-inner {
			${backgroundColor ? `background-color: ${backgroundColor};` : ""}
			${strokeColor ? `border-color: ${strokeColor};` : ""}
			${strokeWidthDesktop}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-half-circle-after {
			${circleWidthDesktop}
			${prefixTypoStylesDesktop}
			${prefixColor ? `color: ${prefixColor};` : ""}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-half-circle {
			${circleWidthDesktop}
			height: calc(${circleWidthDesktop.replace(/\D/g, "") / 2} * 1px);
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-box {
			${boxHeightDesktop}
			${boxWidthDesktop}
			${strokeWidthDesktop}
			${backgroundColor ? `background-color: ${backgroundColor};` : ""}
			${strokeColor ? `border-color: ${strokeColor};` : ""}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-box-fill {
			${
                isProgressGradient
                    ? progressGradient
                        ? `background-image: ${progressGradient};`
                        : ""
                    : progressColor
                    ? `background-color: ${progressColor};`
                    : ""
            };
		}
 	`;

    const tabStyles = `
		.eb-progressbar-wrapper.${blockId} {
			${wrapperMarginTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-line, .eb-progressbar-wrapper.${blockId} .eb-progressbar-line-fill {
			${progressBarHeightTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle {
			${circleWidthTab}
			${circleHeightTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-line-container {
			${progressBarWidthTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-inner-content {
			padding: ${strokeWidthTab.replace(/\D/g, "")}px;
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-title {
			${titleTypoStylesTab}
			${titleMarginTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-count-wrap {
			${counterTypoStylesTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-half {
			${strokeWidthTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-inner {
			${strokeWidthTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-half-circle-after {
			${circleWidthTab}
			${prefixTypoStylesTab}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-half-circle {
			${circleWidthTab}
			height: calc(${halfCircleHeightTab.replace(/\D/g, "") / 2} * 1px);
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-box {
			${boxHeightTab}
			${boxWidthTab}
			${strokeWidthTab}
		}
	`;

    const mobileStyles = `
		.eb-progressbar-wrapper.${blockId} {
			${wrapperMarginMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-line, .eb-progressbar-wrapper.${blockId} .eb-progressbar-line-fill {
			${progressBarHeightMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle {
			${circleWidthMobile}
			${circleHeightMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-line-container {
			${progressBarWidthMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-inner-content {
			padding: ${strokeWidthMobile.replace(/\D/g, "")}px;
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-title {
			${titleTypoStylesMobile}
			${titleMarginMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-count-wrap {
			${counterTypoStylesMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-half {
			${strokeWidthMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-circle-inner {
			${strokeWidthMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-half-circle-after {
			${circleWidthMobile}
			${prefixTypoStylesMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-box {
			${boxHeightMobile}
			${boxWidthMobile}
			${strokeWidthMobile}
		}

		.eb-progressbar-wrapper.${blockId} .eb-progressbar-half-circle {
			${circleWidthMobile}
			height: calc(${halfCircleHeightMobile.replace(/\D/g, "") / 2} * 1px);
		}
	`;

    var inlineStyle = "";
    if (showInline) {
        inlineStyle = `
			.eb-progressbar-wrapper.${blockId} .eb-progressbar-line-container {
				position: relative;
			}

			.eb-progressbar-wrapper.${blockId} .eb-progressbar-line-container .eb-progressbar-title {
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				z-index: 9;
			}

			.eb-progressbar-wrapper.${blockId} .eb-progressbar-line-container .eb-progressbar-line .eb-progressbar-count-wrap {
				bottom: 50% !important;
				transform: translateY(50%) !important;
			}
		`;
    }

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${desktopStyles}
		${inlineStyle}
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
