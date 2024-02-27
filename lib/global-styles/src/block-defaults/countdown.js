/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    Button,
    BaseControl,
    ButtonGroup,
    DateTimePicker,
    TabPanel,
} from "@wordpress/components";

const {
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    ColorControl,
    BorderShadowControl,
    BackgroundControl,
    AdvancedControls,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    STYLE_PRESETS,
    ALIGN_ITEMS,
    SEPARATOR_TYPES,
    LAYOUT_TYPES,
    JUSTIFY_CONTENTS,
    FLEX_DIRECTIONS,
} from "../../../../blocks/countdown/src/constants/index";

import {
    typoPrefix_digits,
    typoPrefix_labels,
    typoPrefix_separator,
} from "../../../../blocks/countdown/src/constants/typographyPrefixConstants";

import {
    wrapperWidth,
    boxsSpaceConst,
    separatorPosTop,
    separatorPosRight,
} from "../../../../blocks/countdown/src/constants/rangeNames";

import {
    cdBoxsPaddingConst,
    cdWrapMarginConst,
    cdWrapPaddingConst,
    cdDigitsPaddingConst,
    cdLabelsPaddingConst,
} from "../../../../blocks/countdown/src/constants/dimensionsConstants";

import {
    cdBoxsBgConst,
    cdDayBoxBgConst,
    cdHourBoxBgConst,
    cdMinuteBoxBgConst,
    cdSecondBoxBgConst,
    WrpBgConst,
} from "../../../../blocks/countdown/src/constants/backgroundsConstants";

import {
    cdBoxsBdShadowConst,
    WrpBdShadowConst,
} from "../../../../blocks/countdown/src/constants/borderShadowConstants";

import SingleBoxControl from "../../../../blocks/countdown/src/singleBoxControl";

import objAttributes from "../../../../blocks/countdown/src/attributes";

function Countdown(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        //
        showDays,
        showHours,
        showMinutes,
        showSeconds,

        daysLabel,
        hoursLabel,
        minutesLabel,
        secondsLabel,

        flexDirection,

        showSeparator,
        separatorType,
        // sepPositionRight,
        // sepPositionTop,
        separatorColor,

        contentsAlign,

        //
        contentsDirection,

        //
        contentsJustify,

        //
        digitsColor,

        //
        labelsColor,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                showDays: true,
                showHours: true,
                showMinutes: true,
                showSeconds: true,
                daysLabel: "Days",
                hoursLabel: "Hours",
                minutesLabel: "Minutes",
                secondsLabel: "Seconds",

                digitsColor: "var(--eb-global-heading-color)",
                dayDgColor: "",
                hourDgColor: "",
                minuteDgColor: "",
                secondDgColor: "",
                labelsColor: "var(--eb-global-text-color)",
                dayLbColor: "",
                hourLbColor: "",
                minuteLbColor: "",
                secondLbColor: "",
                dayBdrColor: "",
                hourBdrColor: "",
                minuteBdrColor: "",
                secondBdrColor: "",
                secondBdrColor: "",
                flexDirection: "row",
                contentsDirection: "column",

                [`${separatorPosTop}Unit`]: "px",
                [`${separatorPosTop}isLinked`]: false,

                [`${separatorPosRight}Unit`]: "px",
                [`${separatorPosRight}isLinked`]: false,

                [`${cdBoxsPaddingConst}Top`]: 20,
                [`${cdBoxsPaddingConst}Right`]: 0,
                [`${cdBoxsPaddingConst}Bottom`]: 20,
                [`${cdBoxsPaddingConst}Left`]: 0,
                [`${cdBoxsPaddingConst}Unit`]: "px",
                [`${cdBoxsPaddingConst}isLinked`]: false,

                [`${cdBoxsBdShadowConst}Bdr_Unit`]: "px",
                [`${cdBoxsBdShadowConst}Bdr_isLinked`]: true,
                [`${cdBoxsBdShadowConst}Rds_Unit`]: "px",
                [`${cdBoxsBdShadowConst}Rds_isLinked`]: true,
                [`${cdBoxsBdShadowConst}BorderType`]: "normal",
                [`${cdBoxsBdShadowConst}shadowType`]: "normal",

                [`${cdDigitsPaddingConst}Unit`]: "px",
                [`${cdDigitsPaddingConst}isLinked`]: true,
                [`${cdLabelsPaddingConst}Unit`]: "px",
                [`${cdLabelsPaddingConst}isLinked`]: true,

                [`${cdWrapMarginConst}Unit`]: "px",
                [`${cdWrapMarginConst}isLinked`]: true,

                [`${cdWrapPaddingConst}Unit`]: "px",
                [`${cdWrapPaddingConst}isLinked`]: true,

                [`${WrpBdShadowConst}Bdr_Unit`]: "px",
                [`${WrpBdShadowConst}Bdr_isLinked`]: true,
                [`${WrpBdShadowConst}Rds_Unit`]: "px",
                [`${WrpBdShadowConst}Rds_isLinked`]: true,
                [`${WrpBdShadowConst}BorderType`]: "normal",
                [`${WrpBdShadowConst}shadowType`]: "normal",
            });
        }
        setDefaultSet(true);
    }, []);

    /**
     * On change default value, set to block default
     */
    useEffect(() => {
        setBlockDefaults({
            [name]: defaultValues,
        });
    }, [defaultValues]);

    /**
     * handleBlockDefault
     * @param {*} obj
     */
    const handleBlockDefault = (obj) => {
        let values = { ...defaultValues };
        Object.keys(obj).map((item) => {
            values[item] = obj[item];
        });
        setDefaultValues(values);
    };

    /**
     * resRequiredProps
     */
    const resRequiredProps = {
        setAttributes: handleBlockDefault,
        resOption: deviceType,
        attributes: defaultValues,
        objAttributes,
    };

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody title={__("Content Settings", "essential-blocks")} initialOpen={true}>
                        <ToggleControl
                            label={__("Display Days", "essential-blocks")}
                            checked={showDays}
                            onChange={() => handleBlockDefault({ showDays: !showDays })}
                        />

                        {showDays && (
                            <>
                                <TextControl
                                    label={__("Custom Label For Days", "essential-blocks")}
                                    value={daysLabel}
                                    type="text"
                                    onChange={(daysLabel) => handleBlockDefault({ daysLabel })}
                                />

                                <p
                                    style={{
                                        marginTop: "-5px",
                                    }}
                                >
                                    <i>Leave blank to hide</i>
                                </p>
                            </>
                        )}

                        <ToggleControl
                            label={__("Display Hours", "essential-blocks")}
                            checked={showHours}
                            onChange={() => handleBlockDefault({ showHours: !showHours })}
                        />

                        {showHours && (
                            <>
                                <TextControl
                                    label={__("Custom Label For Hours", "essential-blocks")}
                                    value={hoursLabel}
                                    type="text"
                                    onChange={(hoursLabel) => handleBlockDefault({ hoursLabel })}
                                />

                                <p
                                    style={{
                                        marginTop: "-5px",
                                    }}
                                >
                                    <i>Leave blank to hide</i>
                                </p>
                            </>
                        )}

                        <ToggleControl
                            label={__("Display Minutes", "essential-blocks")}
                            checked={showMinutes}
                            onChange={() =>
                                handleBlockDefault({
                                    showMinutes: !showMinutes,
                                })
                            }
                        />

                        {showMinutes && (
                            <>
                                <TextControl
                                    label={__("Custom Label For Minutes", "essential-blocks")}
                                    value={minutesLabel}
                                    type="text"
                                    onChange={(minutesLabel) => handleBlockDefault({ minutesLabel })}
                                />

                                <p
                                    style={{
                                        marginTop: "-5px",
                                    }}
                                >
                                    <i>Leave blank to hide</i>
                                </p>
                            </>
                        )}

                        <ToggleControl
                            label={__("Display Seconds", "essential-blocks")}
                            checked={showSeconds}
                            onChange={() =>
                                handleBlockDefault({
                                    showSeconds: !showSeconds,
                                })
                            }
                        />

                        {showSeconds && (
                            <>
                                <TextControl
                                    label={__("Custom Label For Seconds", "essential-blocks")}
                                    value={secondsLabel}
                                    type="text"
                                    onChange={(secondsLabel) => handleBlockDefault({ secondsLabel })}
                                />

                                <p
                                    style={{
                                        marginTop: "-5px",
                                    }}
                                >
                                    <i>Leave blank to hide</i>
                                </p>
                            </>
                        )}
                    </PanelBody>
                    {/* Styles */}
                    <PanelBody title={__("Boxes Styles", "essential-blocks")}>
                        <BaseControl label="Layout">
                            <ButtonGroup>
                                {LAYOUT_TYPES.map(({ value, label }, index) => (
                                    <Button
                                        key={index}
                                        isSecondary={flexDirection !== value}
                                        isPrimary={flexDirection === value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                flexDirection: value,
                                            })
                                        }
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Container Max Width", "essential-blocks")}
                            controlName={wrapperWidth}
                            resRequiredProps={resRequiredProps}
                            min={100}
                            max={2000}
                            step={1}
                        />

                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Space Between Boxs", "essential-blocks")}
                            controlName={boxsSpaceConst}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={200}
                            step={1}
                        />

                        <BaseControl label={__("Contents Direction", "essential-blocks")}>
                            <SelectControl
                                value={contentsDirection}
                                options={FLEX_DIRECTIONS}
                                onChange={(contentsDirection) => handleBlockDefault({ contentsDirection })}
                            />
                        </BaseControl>

                        {contentsDirection && contentsDirection.includes("row") && (
                            <>
                                <BaseControl label={__("Contents Justify Position", "essential-blocks")}>
                                    <SelectControl
                                        value={contentsJustify}
                                        options={JUSTIFY_CONTENTS}
                                        onChange={(contentsJustify) =>
                                            handleBlockDefault({
                                                contentsJustify,
                                            })
                                        }
                                    />
                                </BaseControl>
                            </>
                        )}

                        <BaseControl label={__("Contents Alignment", "essential-blocks")}>
                            <ButtonGroup>
                                {ALIGN_ITEMS.map(({ value, label }, index) => (
                                    <Button
                                        key={index}
                                        isSecondary={contentsAlign !== value}
                                        isPrimary={contentsAlign === value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                contentsAlign: value,
                                            })
                                        }
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl
                                controlName={cdBoxsBgConst}
                                resRequiredProps={resRequiredProps}
                                noOverlay
                                noMainBgi
                            // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                            />
                        </PanelBody>

                        <PanelBody title={__("Padding", "essential-blocks")} initialOpen={false}>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={cdBoxsPaddingConst}
                                baseLabel="Padding"
                            />
                        </PanelBody>

                        <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={cdBoxsBdShadowConst}
                                resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                    <PanelBody title={__("Digits", "essential-blocks")} initialOpen={false}>
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={digitsColor}
                            onChange={(digitsColor) => handleBlockDefault({ digitsColor })}
                        />

                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_digits}
                            resRequiredProps={resRequiredProps}
                        />

                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={cdDigitsPaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody title={__("Labels", "essential-blocks")} initialOpen={false}>
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={labelsColor}
                            onChange={(labelsColor) => handleBlockDefault({ labelsColor })}
                        />

                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_labels}
                            resRequiredProps={resRequiredProps}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={cdLabelsPaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    {flexDirection === "row" && (
                        <PanelBody title={__("Separator", "essential-blocks")} initialOpen={false}>
                            <ToggleControl
                                label={__("Show Separator", "essential-blocks")}
                                checked={showSeparator}
                                onChange={() =>
                                    handleBlockDefault({
                                        showSeparator: !showSeparator,
                                    })
                                }
                            />

                            {showSeparator && (
                                <>
                                    <SelectControl
                                        label={__("Separator Type", "essential-blocks")}
                                        value={separatorType}
                                        options={SEPARATOR_TYPES}
                                        onChange={(separatorType) =>
                                            handleBlockDefault({
                                                separatorType,
                                            })
                                        }
                                    />

                                    <ResponsiveRangeController
                                        baseLabel={__("Position Top", "essential-blocks")}
                                        controlName={separatorPosTop}
                                        resRequiredProps={resRequiredProps}
                                        min={0}
                                        max={900}
                                        step={1}
                                    />

                                    <ResponsiveRangeController
                                        baseLabel={__("Position Right", "essential-blocks")}
                                        controlName={separatorPosRight}
                                        resRequiredProps={resRequiredProps}
                                        min={0}
                                        max={900}
                                        step={1}
                                    />

                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={separatorColor}
                                        onChange={(separatorColor) =>
                                            handleBlockDefault({
                                                separatorColor,
                                            })
                                        }
                                    />

                                    <TypographyDropdown
                                        baseLabel="Typography"
                                        typographyPrefixConstant={typoPrefix_separator}
                                        resRequiredProps={resRequiredProps}
                                    />
                                </>
                            )}
                        </PanelBody>
                    )}
                    <PanelBody title={__("Individual Box Styling", "essential-blocks")} initialOpen={false}>
                        {showDays && (
                            <SingleBoxControl
                                resRequiredProps={resRequiredProps}
                                heading="Days"
                                bgControlName={cdDayBoxBgConst}
                                dgColorAttrString="dayDgColor"
                                lbColorAttrString="dayLbColor"
                                bdColorAttrString="dayBdrColor"
                            />
                        )}
                        {showHours && (
                            <SingleBoxControl
                                resRequiredProps={resRequiredProps}
                                heading="Hours"
                                bgControlName={cdHourBoxBgConst}
                                dgColorAttrString="hourDgColor"
                                lbColorAttrString="hourLbColor"
                                bdColorAttrString="hourBdrColor"
                            />
                        )}
                        {showMinutes && (
                            <SingleBoxControl
                                resRequiredProps={resRequiredProps}
                                heading="Minutes"
                                bgControlName={cdMinuteBoxBgConst}
                                dgColorAttrString="minuteDgColor"
                                lbColorAttrString="minuteLbColor"
                                bdColorAttrString="minuteBdrColor"
                            />
                        )}
                        {showSeconds && (
                            <SingleBoxControl
                                resRequiredProps={resRequiredProps}
                                heading="Seconds"
                                bgControlName={cdSecondBoxBgConst}
                                dgColorAttrString="secondDgColor"
                                lbColorAttrString="secondLbColor"
                                bdColorAttrString="secondBdrColor"
                            />
                        )}
                    </PanelBody>
                    {/* Advanced */}
                    <PanelBody
                        title={__("Wrapper Margin & Padding", "essential-blocks")}
                    // initialOpen={true}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={cdWrapMarginConst}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={cdWrapPaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Background ", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={WrpBgConst} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                        <BorderShadowControl
                            controlName={WrpBdShadowConst}
                            resRequiredProps={resRequiredProps}
                        // noShadow
                        // noBorder
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default Countdown;
