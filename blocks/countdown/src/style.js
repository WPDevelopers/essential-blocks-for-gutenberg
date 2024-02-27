import {
    typoPrefix_digits,
    typoPrefix_labels,
    typoPrefix_separator,
} from "./constants/typographyPrefixConstants";

import {
    wrapperWidth,
    boxsSpaceConst,
    separatorPosTop,
    separatorPosRight,
} from "./constants/rangeNames";

import {
    cdBoxsPaddingConst,
    cdWrapMarginConst,
    cdWrapPaddingConst,
    cdDigitsPaddingConst,
    cdLabelsPaddingConst,
} from "./constants/dimensionsConstants";

import {
    cdBoxsBgConst,
    cdDayBoxBgConst,
    cdHourBoxBgConst,
    cdMinuteBoxBgConst,
    cdSecondBoxBgConst,
    WrpBgConst,
} from "./constants/backgroundsConstants";

import {
    cdBoxsBdShadowConst,
    WrpBdShadowConst,
} from "./constants/borderShadowConstants";

const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateBackgroundControlStyles,
    StyleComponent,
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;

    const {
        resOption,
        blockId,
        blockMeta,

        //  deadline Date timestamp
        endTimeStamp,

        //
        showDays,
        showHours,
        showMinutes,
        showSeconds,
        //
        showSeparator,
        separatorType,
        // sepPositionRight,
        // sepPositionTop,
        separatorColor = "#4c457b",

        //
        contentsAlign,

        //
        contentsDirection,

        //
        contentsJustify,

        //
        flexDirection,

        //
        digitsColor = "#fff",
        dayDgColor,
        hourDgColor,
        minuteDgColor,
        secondDgColor,

        //
        labelsColor = "#fff",
        dayLbColor,
        hourLbColor,
        minuteLbColor,
        secondLbColor,

        //
        dayBdrColor,
        hourBdrColor,
        minuteBdrColor,
        secondBdrColor,

        //
        boxsBds_borderStyle,
        classHook,

    } = attributes;

    //
    // styling codes start from here
    //

    // styles related to generateResponsiveRangeStyles start ⬇
    const {
        rangeStylesDesktop: wrapWidthDesktop,
        rangeStylesTab: wrapWidthTab,
        rangeStylesMobile: wrapWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: wrapperWidth,
        customUnit: "px",
        property: "max-width",
        attributes,
    });

    const {
        rangeStylesDesktop: BoxsSpaceBetweenDesktop,
        rangeStylesTab: BoxsSpaceBetweenTab,
        rangeStylesMobile: BoxsSpaceBetweenMobile,
    } = generateResponsiveRangeStyles({
        controlName: boxsSpaceConst,
        customUnit: "px",
        property: flexDirection === "row" ? "margin-left" : "margin-top",
        attributes,
    });

    const {
        rangeStylesDesktop: SeparatorTopDesktop,
        rangeStylesTab: SeparatorTopTab,
        rangeStylesMobile: SeparatorTopMobile,
    } = generateResponsiveRangeStyles({
        controlName: separatorPosTop,
        property: "top",
        attributes,
    });

    const {
        rangeStylesDesktop: SeparatorRightDesktop,
        rangeStylesTab: SeparatorRightTab,
        rangeStylesMobile: SeparatorRightMobile,
    } = generateResponsiveRangeStyles({
        controlName: separatorPosRight,
        property: "padding-right",
        attributes,
    });
    // styles related to generateResponsiveRangeStyles end

    // styles related to generateTypographyStyles start ⬇
    const {
        typoStylesDesktop: digitsTypoStylesDesktop,
        typoStylesTab: digitsTypoStylesTab,
        typoStylesMobile: digitsTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_digits,
        defaultFontSize: 40,
    });

    const {
        typoStylesDesktop: labelsTypoStylesDesktop,
        typoStylesTab: labelsTypoStylesTab,
        typoStylesMobile: labelsTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_labels,
        defaultFontSize: 18,
    });

    const {
        typoStylesDesktop: separatorTypoStylesDesktop,
        typoStylesTab: separatorTypoStylesTab,
        typoStylesMobile: separatorTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_separator,
        defaultFontSize: 44,
    });
    // styles related to generateTypographyStyles end

    // styles related to generateBackgroundControlStyles start ⬇

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
        backgroundStylesDesktop: boxsBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: boxsHoverBackgroundStylesDesktop,
        backgroundStylesTab: boxsBackgroundStylesTab,
        hoverBackgroundStylesTab: boxsHoverBackgroundStylesTab,
        backgroundStylesMobile: boxsBackgroundStylesMobile,
        hoverBackgroundStylesMobile: boxsHoverBackgroundStylesMobile,
        bgTransitionStyle: boxsBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: cdBoxsBgConst,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: dayBoxBgStylesDesktop = "",
        hoverBackgroundStylesDesktop: dayBoxHoverBgStylesDesktop = "",
        backgroundStylesTab: dayBoxBgStylesTab = "",
        hoverBackgroundStylesTab: dayBoxHoverBgStylesTab = "",
        backgroundStylesMobile: dayBoxBgStylesMobile = "",
        hoverBackgroundStylesMobile: dayBoxHoverBgStylesMobile = "",
    } = showDays
            ? generateBackgroundControlStyles({
                noTransition: true,
                attributes,
                controlName: cdDayBoxBgConst,
                noOverlay: true,
                noMainBgi: true,
                // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
            })
            : {};

    const {
        backgroundStylesDesktop: hourBoxBgStylesDesktop = "",
        hoverBackgroundStylesDesktop: hourBoxHoverBgStylesDesktop = "",
        backgroundStylesTab: hourBoxBgStylesTab = "",
        hoverBackgroundStylesTab: hourBoxHoverBgStylesTab = "",
        backgroundStylesMobile: hourBoxBgStylesMobile = "",
        hoverBackgroundStylesMobile: hourBoxHoverBgStylesMobile = "",
    } = showHours
            ? generateBackgroundControlStyles({
                noTransition: true,
                attributes,
                controlName: cdHourBoxBgConst,
                noOverlay: true,
                noMainBgi: true,
                // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
            })
            : {};

    const {
        backgroundStylesDesktop: minuteBoxBgStylesDesktop = "",
        hoverBackgroundStylesDesktop: minuteBoxHoverBgStylesDesktop = "",
        backgroundStylesTab: minuteBoxBgStylesTab = "",
        hoverBackgroundStylesTab: minuteBoxHoverBgStylesTab = "",
        backgroundStylesMobile: minuteBoxBgStylesMobile = "",
        hoverBackgroundStylesMobile: minuteBoxHoverBgStylesMobile = "",
    } = showMinutes
            ? generateBackgroundControlStyles({
                noTransition: true,
                attributes,
                controlName: cdMinuteBoxBgConst,
                noOverlay: true,
                noMainBgi: true,
                // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
            })
            : {};

    const {
        backgroundStylesDesktop: secondBoxBgStylesDesktop = "",
        hoverBackgroundStylesDesktop: secondBoxHoverBgStylesDesktop = "",
        backgroundStylesTab: secondBoxBgStylesTab = "",
        hoverBackgroundStylesTab: secondBoxHoverBgStylesTab = "",
        backgroundStylesMobile: secondBoxBgStylesMobile = "",
        hoverBackgroundStylesMobile: secondBoxHoverBgStylesMobile = "",
    } = showSeconds
            ? generateBackgroundControlStyles({
                noTransition: true,
                attributes,
                controlName: cdSecondBoxBgConst,
                noOverlay: true,
                noMainBgi: true,
                // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
            })
            : {};

    // styles related to generateBackgroundControlStyles end

    // styles related to generateDimensionsControlStyles start ⬇
    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: cdWrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: cdWrapPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: boxsPaddingDesktop,
        dimensionStylesTab: boxsPaddingTab,
        dimensionStylesMobile: boxsPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: cdBoxsPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: digitsPaddingDesktop,
        dimensionStylesTab: digitsPaddingTab,
        dimensionStylesMobile: digitsPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: cdDigitsPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: labelsPaddingDesktop,
        dimensionStylesTab: labelsPaddingTab,
        dimensionStylesMobile: labelsPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: cdLabelsPaddingConst,
        styleFor: "padding",
    });
    // styles related to generateDimensionsControlStyles end

    // styles related to generateBorderShadowStyles start ⬇
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
        styesDesktop: boxsbdShadowStyesDesktop,
        styesTab: boxsbdShadowStyesTab,
        styesMobile: boxsbdShadowStyesMobile,
        stylesHoverDesktop: boxsbdShadowStylesHoverDesktop,
        stylesHoverTab: boxsbdShadowStylesHoverTab,
        stylesHoverMobile: boxsbdShadowStylesHoverMobile,
        transitionStyle: boxsbdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: cdBoxsBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });
    // styles related to generateBorderShadowStyles end

    const wrapperStylesDesktop = `
		.${blockId}.eb-cd-wrapper{
			${wrapWidthDesktop}
			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBackgroundStylesDesktop}
			${wrpBdShdStyesDesktop}
			transition: ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}

		div.${blockId}.eb-cd-wrapper{
			margin-left: auto;
			margin-right: auto;
		}

		.${blockId}.eb-cd-wrapper:hover{
			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
		}

		.${blockId}.eb-cd-wrapper:before{
			${wrpOverlayStylesDesktop}
			transition: ${wrpOvlTransitionStyle};
		}

		.${blockId}.eb-cd-wrapper:hover:before{
			${wrpHoverOverlayStylesDesktop}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner {
			flex-direction: ${flexDirection};
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box {
			${boxsBackgroundStylesDesktop}
			transition: ${boxsBgTransitionStyle}, ${boxsbdShadowTransitionStyle};
			${boxsPaddingDesktop}
			${boxsbdShadowStyesDesktop}
			${contentsDirection.includes("row")
            ? `justify-content: ${contentsJustify};`
            : " "
        }
			flex-direction: ${contentsDirection};
			align-items: ${contentsAlign};
		}


		.${blockId}.eb-cd-wrapper .eb-cd-inner .box:hover{
			${boxsHoverBackgroundStylesDesktop}
			${boxsbdShadowStylesHoverDesktop}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {
			${digitsTypoStylesDesktop}
			${digitsPaddingDesktop}
			color: ${digitsColor};
		}

		${showSeparator && flexDirection === "row"
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box:before {
				position: absolute;
				right: 90%;
				content: "${separatorType}";
				color: ${separatorColor};
				${SeparatorTopDesktop}
				${SeparatorRightDesktop}
				${separatorTypoStylesDesktop}
			}

			div.${blockId}.eb-cd-wrapper .eb-cd-inner .box:before{
				line-height:0;
			}
			`
            : " "
        }

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {
			${labelsTypoStylesDesktop}
			${labelsPaddingDesktop}
			color: ${labelsColor};
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box {
			margin: 0;
			${BoxsSpaceBetweenDesktop}
		}

		${showDays
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day{
				${dayBoxBgStylesDesktop}
				${boxsBds_borderStyle !== "none" && dayBdrColor
                ? `border-color: ${dayBdrColor};`
                : " "
            }
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{
				${dayBoxHoverBgStylesDesktop}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day span.eb-cd-label{
				${dayLbColor ? `color: ${dayLbColor};` : " "}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day span.eb-cd-digit{
				${dayDgColor ? `color: ${dayDgColor};` : " "}
			}
			`
            : " "
        }

		${showHours
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{
				${hourBoxBgStylesDesktop}
				${boxsBds_borderStyle !== "none" && hourBdrColor
                ? `border-color: ${hourBdrColor};`
                : " "
            }
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{
				${hourBoxHoverBgStylesDesktop}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour span.eb-cd-label{
				${hourLbColor ? `color: ${hourLbColor};` : " "}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour span.eb-cd-digit{
				${hourDgColor ? `color: ${hourDgColor};` : " "}
			}
			`
            : " "
        }

		${showMinutes
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{
				${minuteBoxBgStylesDesktop}
				${boxsBds_borderStyle !== "none" && minuteBdrColor
                ? `border-color: ${minuteBdrColor};`
                : " "
            }
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{
				${minuteBoxHoverBgStylesDesktop}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute span.eb-cd-label{
				${minuteLbColor ? `color: ${minuteLbColor};` : " "}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute span.eb-cd-digit{
				${minuteDgColor ? `color: ${minuteDgColor};` : " "}
			}
			`
            : " "
        }

		${showSeconds
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second{
				${secondBoxBgStylesDesktop}
				${boxsBds_borderStyle !== "none" && secondBdrColor
                ? `border-color: ${secondBdrColor};`
                : " "
            }
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{
				${secondBoxHoverBgStylesDesktop}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second span.eb-cd-label{
				${secondLbColor ? `color: ${secondLbColor};` : " "}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second span.eb-cd-digit{
				${secondDgColor ? `color: ${secondDgColor};` : " "}
			}
			`
            : " "
        }

	`;

    const wrapperStylesTab = `
		.${blockId}.eb-cd-wrapper{
			${wrapWidthTab}
			${wrpMarginTab}
			${wrpPaddingTab}
			${wrpBackgroundStylesTab}
			${wrpBdShdStyesTab}
		}

		.${blockId}.eb-cd-wrapper:hover{
			${wrpHoverBackgroundStylesTab}
			${wrpBdShdStylesHoverTab}
		}

		.${blockId}.eb-cd-wrapper:before{
			${wrpOverlayStylesTab}
		}

		.${blockId}.eb-cd-wrapper:hover:before{
			${wrpHoverOverlayStylesTab}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box {
			${boxsBackgroundStylesTab}
			${boxsPaddingTab}
			${boxsbdShadowStyesTab}
		}


		.${blockId}.eb-cd-wrapper .eb-cd-inner .box:hover{
			${boxsHoverBackgroundStylesTab}
			${boxsbdShadowStylesHoverTab}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {
			${digitsTypoStylesTab}
			${digitsPaddingTab}
		}

		${showSeparator && flexDirection === "row"
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box:before {
				${separatorTypoStylesTab}
				${SeparatorTopTab}
				${SeparatorRightTab}
			}
			`
            : " "
        }

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {
			${labelsTypoStylesTab}
			${labelsPaddingTab}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box {
			${BoxsSpaceBetweenTab}
		}

		${showDays
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day{
				${dayBoxBgStylesTab}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{
				${dayBoxHoverBgStylesTab}
			}
			`
            : " "
        }

		${showHours
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{
				${hourBoxBgStylesTab}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{
				${hourBoxHoverBgStylesTab}
			}
			`
            : " "
        }

		${showMinutes
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{
				${minuteBoxBgStylesTab}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{
				${minuteBoxHoverBgStylesTab}
			}
			`
            : " "
        }

		${showSeconds
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second{
				${secondBoxBgStylesTab}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{
				${secondBoxHoverBgStylesTab}
			}

			`
            : " "
        }

	`;

    const wrapperStylesMobile = `
		.${blockId}.eb-cd-wrapper{
			${wrapWidthMobile}
			${wrpBackgroundStylesMobile}
			${wrpMarginMobile}
			${wrpPaddingMobile}
			${wrpBdShdStyesMobile}
		}

		.${blockId}.eb-cd-wrapper:hover{
			${wrpHoverBackgroundStylesMobile}
			${wrpBdShdStylesHoverMobile}
		}

		.${blockId}.eb-cd-wrapper:before{
			${wrpOverlayStylesMobile}
		}

		.${blockId}.eb-cd-wrapper:hover:before{
			${wrpHoverOverlayStylesMobile}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box {
			${boxsBackgroundStylesMobile}
			${boxsPaddingMobile}
			${boxsbdShadowStyesMobile}
		}


		.${blockId}.eb-cd-wrapper .eb-cd-inner .box:hover{
			${boxsHoverBackgroundStylesMobile}
			${boxsbdShadowStylesHoverMobile}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {
			${digitsTypoStylesMobile}
			${digitsPaddingMobile}
		}

		${showSeparator && flexDirection === "row"
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box:before {
				${separatorTypoStylesMobile}
				${SeparatorTopMobile}
				${SeparatorRightMobile}
			}
			`
            : " "
        }

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {
			${labelsTypoStylesMobile}
			${labelsPaddingMobile}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box {
			${BoxsSpaceBetweenMobile}
		}

		${showDays
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day{
				${dayBoxBgStylesMobile}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{
				${dayBoxHoverBgStylesMobile}
			}
			`
            : " "
        }

		${showHours
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{
				${hourBoxBgStylesMobile}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{
				${hourBoxHoverBgStylesMobile}
			}
			`
            : " "
        }

		${showMinutes
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{
				${minuteBoxBgStylesMobile}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{
				${minuteBoxHoverBgStylesMobile}
			}
			`
            : " "
        }

		${showSeconds
            ? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second{
				${secondBoxBgStylesMobile}
			}

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{
				${secondBoxHoverBgStylesMobile}
			}

			`
            : " "
        }


	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}


	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}


	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}


	`);

    //
    // styling codes End here
    //

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
