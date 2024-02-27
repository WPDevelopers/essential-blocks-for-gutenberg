/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { SelectControl, PanelBody, BaseControl } from "@wordpress/components";

/**
 * External depencencies
 */

const {
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    // TypographyDropdown,
    BorderShadowControl,
    // ColorControl,
    BackgroundControl,
    // ResetControl,
    ResponsiveSelectController,
} = window.EBControls;

/**
 * Internal depencencies
 */

import {
    CONTENT_WIDTH_OPTIONS,
    ROW_HEIGHTS,
    ROW_OVERFLOWS,
    COLUMNS_ALIGN,
    COLUMNS_ORDER,
    // JUSTIFY_CONTENTS,
} from "../../../../blocks/row/src/constants";

import {
    rWrapMarginConst,
    rWrapPaddingConst,
} from "../../../../blocks/row/src/constants/dimensionsNames";

import {
    rMinHConst,
    rMaxWConst,
    rColsGapConst,
    rColsNumber,
    // boxsSpaceConst,
    // separatorPosTop,
    // separatorPosRight,
} from "../../../../blocks/row/src/constants/rangeNames";

import { WrpBgConst } from "../../../../blocks/row/src/constants/backgroundsConstants";
import { WrpBdShadowConst } from "../../../../blocks/row/src/constants/borderShadowConstants";
import {
    rowOverflowPrefix,
    columnsOrderPrefix,
} from "../../../../blocks/row/src/constants/selectControlPrefixs";

import objAttributes from "../../../../blocks/row/src/attributes";

function Row(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        resOption,
        //
        rowWidthName,
        rowHeightName,
        // rowCusWidth,
        // colGap,
        rowAli,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                align: "full",
                isLayoutSelected: false,
                rowWidthName: "boxed",
                rowHeightName: "default",
                rowOverFlow: "",
                rowAli: "",

                [`${rWrapMarginConst}Unit`]: "px",
                [`${rWrapMarginConst}isLinked`]: true,

                [`${rWrapPaddingConst}Unit`]: "px",
                [`${rWrapPaddingConst}isLinked`]: true,

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
                    <PanelBody title={__("Row settings", "essential-blocks")}>
                        <BaseControl label={__("Layout", "essential-blocks")}>
                            <SelectControl
                                // label={__("Design Preset", "essential-blocks")}
                                value={rowWidthName}
                                options={CONTENT_WIDTH_OPTIONS}
                                onChange={(rowWidthName) =>
                                    handleBlockDefault({ rowWidthName })
                                }
                            />
                        </BaseControl>
                        {rowWidthName === "boxed" && (
                            <ResponsiveRangeController
                                noUnits
                                baseLabel={__(
                                    "Max Width (px)",
                                    "essential-blocks"
                                )}
                                controlName={rMaxWConst}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1800}
                                step={1}
                            />
                        )}

                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Columns Number", "essential-blocks")}
                            controlName={rColsNumber}
                            resRequiredProps={resRequiredProps}
                            min={1}
                            max={6}
                            step={1}
                        />

                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Columns Gap", "essential-blocks")}
                            controlName={rColsGapConst}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={100}
                            step={1}
                        />

                        <BaseControl label={__("Height", "essential-blocks")}>
                            <SelectControl
                                // label={__("Design Preset", "essential-blocks")}
                                value={rowHeightName}
                                options={ROW_HEIGHTS}
                                onChange={(rowHeightName) =>
                                    handleBlockDefault({ rowHeightName })
                                }
                            />
                        </BaseControl>
                        {rowHeightName === "minH" && (
                            <ResponsiveRangeController
                                units={[
                                    { label: "px", value: "px" },
                                    { label: "vh", value: "vh" },
                                    { label: "vw", value: "vw" },
                                ]}
                                baseLabel={__(
                                    "Minimum height",
                                    "essential-blocks"
                                )}
                                controlName={rMinHConst}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1500}
                                step={1}
                            />
                        )}
                        <BaseControl
                            label={__(
                                "Columns Vertical Align",
                                "essential-blocks"
                            )}
                        >
                            <SelectControl
                                // label={__("Design Preset", "essential-blocks")}
                                value={rowAli}
                                options={COLUMNS_ALIGN}
                                // onChange={(preset) => handleBlockDefault({ preset })}
                                onChange={(rowAli) => {
                                    handleBlockDefault({ rowAli });
                                }}
                            />
                        </BaseControl>

                        <ResponsiveSelectController
                            baseLabel={"Columns Order"}
                            controlName={columnsOrderPrefix}
                            resRequiredProps={resRequiredProps}
                            options={COLUMNS_ORDER}
                            resOption={resOption}
                        />

                        <ResponsiveSelectController
                            baseLabel={"Overflow"}
                            controlName={rowOverflowPrefix}
                            resRequiredProps={resRequiredProps}
                            options={ROW_OVERFLOWS}
                            resOption={resOption}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Wrapper Margin & Padding")}
                        initialOpen={false}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={rWrapMarginConst}
                            baseLabel="Margin"
                            disableLeftRight
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={rWrapPaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Wrapper Background ", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BackgroundControl
                            controlName={WrpBgConst}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Wrapper Border & Shadow")}
                        initialOpen={false}
                    >
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

export default Row;
