/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    __experimentalDivider as Divider,
} from "@wordpress/components";

import { TITLE_TYPOGRAPHY } from "./constants/typographyPrefixConstants";

/**
 * Internal dependencies
 */

const {
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    ColorControl,
    BorderShadowControl,
    BackgroundControl,
    AdvancedControls,
    TypographyDropdown,
} = window.EBControls;

import ShareButtons from "./shareButtons";

import objAttributes from "./attributes";

import {
    rangeIconSize,
    rangeIconMargin,
    rangeIconDistance,
    rangeIconRowGap,
    rangeIconHeight,
    rangeIconWidth,
    rangeFloatingWidth,
    rangeFloatingHeight,
} from "./constants/rangeNames";

import {
    iconsPadding,
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
} from "./constants/dimensionsConstants";

import { WrpBgConst } from "./constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    prefixSocialBdShadow,
} from "./constants/borderShadowConstants";

import { IconsHzAligns, HOVER_EFFECT, ICON_SHAPE } from "./constants";

function Inspector({ attributes, setAttributes }) {
    const {
        resOption,
        socialDetails,

        //
        iconsJustify,

        //
        hvIcnColor,
        hvIcnBgc,

        //
        icnEffect,
        iconShape,
        showTitle,
        isFloating,
    } = attributes;
    //
    useEffect(() => {
        const newSclDtails = socialDetails.map((item) => ({
            ...item,
            isExpanded: false,
        }));
        setAttributes({ socialDetails: newSclDtails });
    }, []);

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    useEffect(() => {
        onShapeChange(iconShape);
    }, []);

    const onShapeChange = (value) => {
        switch (value) {
            case "rounded":
                setAttributes({
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
                setAttributes({
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
                setAttributes({
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
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    // onSelect={onSelect}
                    tabs={[
                        {
                            name: "general",
                            title: "General",
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: "Style",
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: "Advanced",
                            className: "eb-tab advance",
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls " + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Share Buttons",
                                            "essential-blocks"
                                        )}
                                    // initialOpen={false}
                                    >
                                        <>
                                            <ToggleControl
                                                label={__(
                                                    "Show Title",
                                                    "essential-blocks"
                                                )}
                                                checked={showTitle}
                                                onChange={() =>
                                                    setAttributes({
                                                        showTitle: !showTitle,
                                                    })
                                                }
                                            />
                                            <ToggleControl
                                                label={__(
                                                    "Floating",
                                                    "essential-blocks"
                                                )}
                                                checked={isFloating}
                                                onChange={() =>
                                                    setAttributes({
                                                        isFloating: !isFloating,
                                                    })
                                                }
                                            />
                                            <Divider />
                                            <ShareButtons
                                                profiles={socialDetails}
                                                onProfileAdd={(socialDetails) =>
                                                    setAttributes({
                                                        socialDetails,
                                                    })
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Icons Styles",
                                            "essential-blocks"
                                        )}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Icon Shape",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup>
                                                {ICON_SHAPE.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isSecondary={
                                                                iconShape !==
                                                                item.value
                                                            }
                                                            isPrimary={
                                                                iconShape ===
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                onShapeChange(
                                                                    item.value
                                                                )
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
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
                                                    setAttributes({
                                                        iconsJustify,
                                                    })
                                                }
                                            />
                                        </BaseControl>

                                        {showTitle && (
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    TITLE_TYPOGRAPHY
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        )}

                                        <ResponsiveRangeController
                                            noUnits
                                            baseLabel={__(
                                                "Size",
                                                "essential-blocks"
                                            )}
                                            controlName={rangeIconSize}
                                            resRequiredProps={resRequiredProps}
                                            min={5}
                                            max={300}
                                            step={1}
                                        />

                                        {iconShape === "circular" && (
                                            <>
                                                <ResponsiveRangeController
                                                    noUnits
                                                    baseLabel={__(
                                                        "Height",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        rangeIconHeight
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={800}
                                                    step={1}
                                                />
                                                <ResponsiveRangeController
                                                    noUnits
                                                    baseLabel={__(
                                                        "Width",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={rangeIconWidth}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={800}
                                                    step={1}
                                                />
                                            </>
                                        )}

                                        {isFloating && (
                                            <>
                                                <ResponsiveRangeController
                                                    noUnits
                                                    baseLabel={__(
                                                        "Floating Width",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        rangeFloatingWidth
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={800}
                                                    step={1}
                                                />
                                                <ResponsiveRangeController
                                                    noUnits
                                                    baseLabel={__(
                                                        "Floating Height",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        rangeFloatingHeight
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={2000}
                                                    step={1}
                                                />
                                            </>
                                        )}

                                        <ResponsiveRangeController
                                            noUnits
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
                                            controlName={rangeIconMargin}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={250}
                                            step={1}
                                        />

                                        {iconShape !== "circular" && (
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={iconsPadding}
                                                baseLabel="Padding"
                                            />
                                        )}
                                        {!isFloating && (
                                            <>
                                                <ResponsiveRangeController
                                                    noUnits
                                                    baseLabel={__(
                                                        "Spacing",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        rangeIconDistance
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                />
                                                <ResponsiveRangeController
                                                    noUnits
                                                    baseLabel={__(
                                                        "Rows Gap",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        rangeIconRowGap
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
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
                                                        N.B. 'Rows Gap' is used
                                                        when you have multiple
                                                        rows of social profiles.
                                                        Normally in case of only
                                                        one row, it's not needed
                                                    </i>
                                                </label>
                                            </>
                                        )}

                                        <ColorControl
                                            label={__(
                                                "Hover Color",
                                                "essential-blocks"
                                            )}
                                            color={hvIcnColor}
                                            onChange={(hvIcnColor) =>
                                                setAttributes({ hvIcnColor })
                                            }
                                        />

                                        <ColorControl
                                            label={__(
                                                "Hover Background",
                                                "essential-blocks"
                                            )}
                                            color={hvIcnBgc}
                                            onChange={(hvIcnBgc) =>
                                                setAttributes({ hvIcnBgc })
                                            }
                                        />

                                        <SelectControl
                                            label={__(
                                                "Icon Hover Effect",
                                                "essential-blocks"
                                            )}
                                            value={icnEffect}
                                            options={HOVER_EFFECT}
                                            onChange={(icnEffect) => {
                                                setAttributes({ icnEffect });
                                            }}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Icons Border & Box-Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={prefixSocialBdShadow}
                                            resRequiredProps={resRequiredProps}
                                        // noShadow
                                        // noBorder
                                        />
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__("Margin & Padding")}
                                    // initialOpen={true}
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
                                        title={__(
                                            "Background ",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={WrpBgConst}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={WrpBdShadowConst}
                                            resRequiredProps={resRequiredProps}
                                        // noShadow
                                        // noBorder
                                        />
                                    </PanelBody>

                                    <AdvancedControls
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
        </InspectorControls>
    );
}
export default Inspector;
