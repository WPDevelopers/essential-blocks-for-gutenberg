/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    RangeControl,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
} from "@wordpress/components";

/**
 * Internal dependencies
 */

const {
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    ColorControl,
    BorderShadowControl,
    BackgroundControl,
    DealSocialProfiles,
    faIcons: IconList,
    ResetControl,
    AdvancedControls,
} = window.EBControls;

import objAttributes from "../../../../blocks/social/src/attributes";

import {
    rangeIconSize,
    rangeIconPadding,
    rangeIconDistance,
    rangeIconRowGap,
    sclDeviderPosRight,
} from "../../../../blocks/social/src/constants/rangeNames";

import {
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
} from "../../../../blocks/social/src/constants/dimensionsConstants";

import { WrpBgConst } from "../../../../blocks/social/src/constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    prefixSocialBdShadow,
} from "../../../../blocks/social/src/constants/borderShadowConstants";

import {
    IconsHzAligns,
    HOVER_EFFECT,
    ICON_SHAPE,
} from "../../../../blocks/social/src/constants";

function Social(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        socialDetails,
        iconsJustify,
        isIconsDevider,
        icnsDevideColor,
        icnSepW,
        icnSepH,
        hvIcnColor,
        hvIcnBgc,
        icnEffect,
        iconShape,
        textShadowColor,
        textHOffset,
        textVOffset,
        blurRadius,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                socialDetails: [
                    {
                        icon: "fab fa-facebook-f",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                    {
                        icon: "fab fa-twitter",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                    {
                        icon: "fab fa-instagram",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                    {
                        icon: "fab fa-youtube",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                    {
                        icon: "fab fa-linkedin-in",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                ],
                iconsJustify: "center",
                iconsVAlign: "center",
                isIconsDevider: false,
                icnSepW: 1,
                icnSepH: 30,
                [`${tmbWrapMarginConst}Unit`]: "px",
                [`${tmbWrapMarginConst}isLinked`]: true,
                [`${tmbWrapPaddingConst}Unit`]: "px",
                [`${tmbWrapPaddingConst}isLinked`]: true,
                [`${prefixSocialBdShadow}Bdr_Unit`]: "px",
                [`${prefixSocialBdShadow}Bdr_isLinked`]: true,
                [`${prefixSocialBdShadow}Rds_Unit`]: "px",
                [`${prefixSocialBdShadow}Rds_isLinked`]: true,
                [`${prefixSocialBdShadow}BorderType`]: "normal",
                [`${prefixSocialBdShadow}shadowType`]: "normal",
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

    const onShapeChange = (value) => {
        switch (value) {
            case "rounded":
                handleBlockDefault({
                    iconShape: value,
                    sclBdSd_Rds_Bottom: "10",
                    sclBdSd_Rds_Left: "10",
                    sclBdSd_Rds_Right: "10",
                    sclBdSd_Rds_Top: "10",
                    sclBdSd_Rds_Unit: "px",
                    sclBdSd_Rds_isLinked: true,
                });
                break;

            case "circular":
                handleBlockDefault({
                    iconShape: value,
                    sclBdSd_Rds_Bottom: "50",
                    sclBdSd_Rds_Left: "50",
                    sclBdSd_Rds_Right: "50",
                    sclBdSd_Rds_Top: "50",
                    sclBdSd_Rds_Unit: "%",
                    sclBdSd_Rds_isLinked: true,
                });
                break;

            case "square":
                handleBlockDefault({
                    iconShape: value,
                    sclBdSd_Rds_Bottom: undefined,
                    sclBdSd_Rds_Left: undefined,
                    sclBdSd_Rds_Right: undefined,
                    sclBdSd_Rds_Top: undefined,
                    sclBdSd_Rds_Unit: "px",
                    sclBdSd_Rds_isLinked: true,
                });
                break;

            default:
                break;
        }
    };

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody
                        title={__("Social Profiles", "essential-blocks")}
                        // initialOpen={false}
                    >
                        <>
                            <DealSocialProfiles
                                profiles={socialDetails}
                                onProfileAdd={(socialDetails) =>
                                    handleBlockDefault({ socialDetails })
                                }
                                iconList={IconList}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Icons Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BaseControl
                            label={__("Icon Shape", "essential-blocks")}
                        >
                            <ButtonGroup>
                                {ICON_SHAPE.map((item, index) => (
                                    <Button
                                        key={index}
                                        isSecondary={iconShape !== item.value}
                                        isPrimary={iconShape === item.value}
                                        onClick={() =>
                                            onShapeChange(item.value)
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        <BaseControl
                            id="eb-team-icons-alignments"
                            label="Social Icons Horizontal Alignments"
                        >
                            <SelectControl
                                // label={__("Icons Horizontal Alignment", "essential-blocks")}
                                value={iconsJustify}
                                options={IconsHzAligns}
                                onChange={(iconsJustify) =>
                                    handleBlockDefault({ iconsJustify })
                                }
                            />
                        </BaseControl>

                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Size", "essential-blocks")}
                            controlName={rangeIconSize}
                            resRequiredProps={resRequiredProps}
                            min={5}
                            max={300}
                            step={1}
                        />

                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Padding", "essential-blocks")}
                            controlName={rangeIconPadding}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={6}
                            step={0.1}
                        />

                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Spacing", "essential-blocks")}
                            controlName={rangeIconDistance}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={100}
                            step={1}
                        />

                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Rows Gap", "essential-blocks")}
                            controlName={rangeIconRowGap}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={100}
                            step={1}
                        />

                        <label
                            style={{
                                display: "block",
                                margin: "-20px 0 20px",
                            }}
                        >
                            <i>
                                N.B. 'Rows Gap' is used when you have multiple
                                rows of social profiles. Normally in case of
                                only one row, it's not needed
                            </i>
                        </label>

                        <ToggleControl
                            label={__("Icons Devider", "essential-blocks")}
                            checked={isIconsDevider}
                            onChange={() =>
                                handleBlockDefault({
                                    isIconsDevider: !isIconsDevider,
                                })
                            }
                        />

                        {isIconsDevider && (
                            <>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={icnsDevideColor}
                                    onChange={(icnsDevideColor) =>
                                        handleBlockDefault({ icnsDevideColor })
                                    }
                                />

                                <RangeControl
                                    label={__("Width", "essential-blocks")}
                                    value={icnSepW}
                                    onChange={(icnSepW) =>
                                        handleBlockDefault({ icnSepW })
                                    }
                                    step={1}
                                    min={1}
                                    max={50}
                                />

                                <RangeControl
                                    label={__("Height", "essential-blocks")}
                                    value={icnSepH}
                                    onChange={(icnSepH) =>
                                        handleBlockDefault({ icnSepH })
                                    }
                                    step={1}
                                    min={1}
                                    max={300}
                                />

                                <ResponsiveRangeController
                                    baseLabel={__(
                                        "Position From Right",
                                        "essential-blocks"
                                    )}
                                    controlName={sclDeviderPosRight}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={80}
                                    step={1}
                                />
                            </>
                        )}

                        <ColorControl
                            label={__("Hover Color", "essential-blocks")}
                            color={hvIcnColor}
                            onChange={(hvIcnColor) =>
                                handleBlockDefault({ hvIcnColor })
                            }
                        />

                        <ColorControl
                            label={__("Hover Background", "essential-blocks")}
                            color={hvIcnBgc}
                            onChange={(hvIcnBgc) =>
                                handleBlockDefault({ hvIcnBgc })
                            }
                        />

                        <SelectControl
                            label={__("Icon Hover Effect", "essential-blocks")}
                            value={icnEffect}
                            options={HOVER_EFFECT}
                            // onChange={(preset) => handleBlockDefault({ preset })}
                            onChange={(icnEffect) => {
                                handleBlockDefault({ icnEffect });
                            }}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__(
                            "Icons Border & Box-Shadow Style",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={prefixSocialBdShadow}
                            resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Icons Shadow Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ColorControl
                            label={__("Shadow Color", "essential-blocks")}
                            color={textShadowColor}
                            onChange={(textShadowColor) =>
                                handleBlockDefault({ textShadowColor })
                            }
                        />

                        <ResetControl
                            onReset={() =>
                                handleBlockDefault({ textHOffset: undefined })
                            }
                        >
                            <RangeControl
                                label={__(
                                    "Horizontal Offset",
                                    "essential-blocks"
                                )}
                                value={textHOffset}
                                onChange={(newValue) =>
                                    handleBlockDefault({
                                        textHOffset: newValue,
                                    })
                                }
                                min={0}
                                max={100}
                            />
                        </ResetControl>

                        <ResetControl
                            onReset={() =>
                                handleBlockDefault({ textVOffset: undefined })
                            }
                        >
                            <RangeControl
                                label={__(
                                    "Vertical Offset",
                                    "essential-blocks"
                                )}
                                value={textVOffset}
                                onChange={(newValue) =>
                                    handleBlockDefault({
                                        textVOffset: newValue,
                                    })
                                }
                                min={0}
                                max={100}
                            />
                        </ResetControl>

                        <ResetControl
                            onReset={() =>
                                handleBlockDefault({ blurRadius: undefined })
                            }
                        >
                            <RangeControl
                                label={__("Blur Radius", "essential-blocks")}
                                value={blurRadius}
                                onChange={(newValue) =>
                                    handleBlockDefault({ blurRadius: newValue })
                                }
                                min={0}
                                max={100}
                            />
                        </ResetControl>
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Margin & Padding")}
                        initialOpen={false}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={tmbWrapMarginConst}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={tmbWrapPaddingConst}
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

export default Social;
