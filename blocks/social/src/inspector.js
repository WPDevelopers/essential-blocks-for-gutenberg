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
    RangeControl,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
} from "@wordpress/components";
import { select } from "@wordpress/data";

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

import objAttributes from "./attributes";

import {
    rangeIconSize,
    rangeIconPadding,
    rangeIconDistance,
    rangeIconRowGap,
    sclDeviderPosRight,
} from "./constants/rangeNames";

import {
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
        isIconsDevider,
        icnsDevideColor,
        icnSepW,
        icnSepH,

        //
        hvIcnColor,
        hvIcnBgc,

        //
        icnEffect,
        iconShape,

        //
        textShadowColor,
        textHOffset,
        textVOffset,
        blurRadius,
        showLinkNewTab
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
                        <div className={"eb-tab-controls" + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__("Social Profiles", "essential-blocks")}
                                    // initialOpen={false}
                                    >
                                        <>
                                            <ToggleControl
                                                label={__("Show link in new tab", "essential-blocks")}
                                                checked={showLinkNewTab}
                                                onChange={() =>
                                                    setAttributes({
                                                        showLinkNewTab: !showLinkNewTab,
                                                    })
                                                }
                                            />
                                            <DealSocialProfiles
                                                profiles={socialDetails}
                                                onProfileAdd={(socialDetails) =>
                                                    setAttributes({ socialDetails })
                                                }
                                                iconList={IconList}
                                                showLinkNewTab={showLinkNewTab}
                                            />
                                        </>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Icons Styles", "essential-blocks")}
                                    // initialOpen={false}
                                    >
                                        <BaseControl label={__("Icon Shape", "essential-blocks")}>
                                            <ButtonGroup>
                                                {ICON_SHAPE.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={iconShape !== item.value}
                                                        isPrimary={iconShape === item.value}
                                                        onClick={() => onShapeChange(item.value)}
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
                                                    setAttributes({ iconsJustify })
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
                                                N.B. 'Rows Gap' is used when you have multiple rows of
                                                social profiles. Normally in case of only one row, it's
                                                not needed
                                            </i>
                                        </label>

                                        <ToggleControl
                                            label={__("Icons Devider", "essential-blocks")}
                                            checked={isIconsDevider}
                                            onChange={() =>
                                                setAttributes({
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
                                                        setAttributes({ icnsDevideColor })
                                                    }
                                                />

                                                <RangeControl
                                                    label={__("Width", "essential-blocks")}
                                                    value={icnSepW}
                                                    onChange={(icnSepW) => setAttributes({ icnSepW })}
                                                    step={1}
                                                    min={1}
                                                    max={50}
                                                />

                                                <RangeControl
                                                    label={__("Height", "essential-blocks")}
                                                    value={icnSepH}
                                                    onChange={(icnSepH) => setAttributes({ icnSepH })}
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
                                            onChange={(hvIcnColor) => setAttributes({ hvIcnColor })}
                                        />

                                        <ColorControl
                                            label={__("Hover Background", "essential-blocks")}
                                            color={hvIcnBgc}
                                            onChange={(hvIcnBgc) => setAttributes({ hvIcnBgc })}
                                        />

                                        <SelectControl
                                            label={__("Icon Hover Effect", "essential-blocks")}
                                            value={icnEffect}
                                            options={HOVER_EFFECT}
                                            // onChange={(preset) => setAttributes({ preset })}
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
                                    <PanelBody
                                        title={__("Icons Shadow", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <ColorControl
                                            label={__("Shadow Color", "essential-blocks")}
                                            color={textShadowColor}
                                            onChange={(textShadowColor) =>
                                                setAttributes({ textShadowColor })
                                            }
                                        />

                                        <ResetControl
                                            onReset={() => setAttributes({ textHOffset: undefined })}
                                        >
                                            <RangeControl
                                                label={__("Horizontal Offset", "essential-blocks")}
                                                value={textHOffset}
                                                onChange={(newValue) =>
                                                    setAttributes({ textHOffset: newValue })
                                                }
                                                min={0}
                                                max={100}
                                            />
                                        </ResetControl>

                                        <ResetControl
                                            onReset={() => setAttributes({ textVOffset: undefined })}
                                        >
                                            <RangeControl
                                                label={__("Vertical Offset", "essential-blocks")}
                                                value={textVOffset}
                                                onChange={(newValue) =>
                                                    setAttributes({ textVOffset: newValue })
                                                }
                                                min={0}
                                                max={100}
                                            />
                                        </ResetControl>

                                        <ResetControl
                                            onReset={() => setAttributes({ blurRadius: undefined })}
                                        >
                                            <RangeControl
                                                label={__("Blur Radius", "essential-blocks")}
                                                value={blurRadius}
                                                onChange={(newValue) =>
                                                    setAttributes({ blurRadius: newValue })
                                                }
                                                min={0}
                                                max={100}
                                            />
                                        </ResetControl>
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
                                        title={__("Background ", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={WrpBgConst}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                        <BorderShadowControl
                                            controlName={WrpBdShadowConst}
                                            resRequiredProps={resRequiredProps}
                                        // noShadow
                                        // noBorder
                                        />
                                    </PanelBody>

                                    <AdvancedControls attributes={attributes} setAttributes={setAttributes} />
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
