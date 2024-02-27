/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { MediaUpload } from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    RangeControl,
    BaseControl,
    ButtonGroup,
    TabPanel,
} from "@wordpress/components";
/**
 * Internal dependencies
 */
const {
    // TypographyIcon,
    // UserIcon,
    LeftAlignIcon,
    RightAlignIcon,
    CenterAlignIcon,
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    ImageAvatar,
    ColorControl,
    // ResetControl,
    GradientColorControl,
    BorderShadowControl,
    BackgroundControl,
    DealSocialProfiles,
    faIcons: IconList,
    AdvancedControls,
} = window.EBControls;

import objAttributes from "../../../../blocks/team-member/src/attributes";

import {
    typoPrefix_descs,
    typoPrefix_name,
    typoPrefix_job,
} from "../../../../blocks/team-member/src/constants/typographyPrefixConstants";

import {
    wrapperWidth,
    imageWidth,
    imageHeight,
    rangeIconSize,
    rangeIconPadding,
    rangeIconDistance,
    rangeIconRowGap,
    imgTopBgHeight,
    cSepWPrefix,
    sSepWPrefix,
    cSepHPrefix,
    sSepHPrefix,
    sclDeviderPosRight,
    p9LGap,
} from "../../../../blocks/team-member/src/constants/rangeNames";

import {
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
    tmbDescsPaddingConst,
    tmbNamePaddingConst,
    tmbJobPaddingConst,
    iconsWrapPadding,
    iconsWrapMargin,
    imageMarginConst,
    imagePaddingConst,
    contentsPad,
    contentsMargin,
} from "../../../../blocks/team-member/src/constants/dimensionsConstants";

import {
    WrpBgConst,
    imgTopBgPrefix,
    socialWrpBg,
} from "../../../../blocks/team-member/src/constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    prefixSocialBdShadow,
    prefixImgBd,
    ovlBdPrefix,
} from "../../../../blocks/team-member/src/constants/borderShadowConstants";

import {
    sizeUnitTypes,
    IconsHzAligns,
    // CONTENTS_ALIGNMENTS
    STYLE_PRESETS,
    separatorTypes,
    ContentsVerticalAligns,
    HOVER_EFFECT,
} from "../../../../blocks/team-member/src/constants";

function TeamMember(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        imageUrl,
        imageId,
        isImgHeightAuto,
        showDescs,
        descsColor,
        jobColor,
        nameColor,
        showSocials,
        socialDetails,
        iconsJustify,
        iconsVAlign,
        contentsAlign,
        imageAlign,
        cSepAlign,
        sSepAlign,
        preset,
        imgBeforeEl,
        showCSeparator,
        showSSeparator,
        cSepType,
        sSepType,
        cSepColor,
        sSepColor,
        isIconsDevider,
        icnsDevideColor,
        icnSepW,
        icnSepH,
        hvIcnColor,
        hvIcnBgc,
        conVtAlign,
        isConBgGradient,
        conBgGradient,
        conBgColor,
        imgCnVtAlign,
        isP9reverse,
        icnEffect,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                name: "John Doe",
                jobTitle: "Software Engineer",
                showDescs: true,
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                imageUrl: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/user.jpg",
                isImgHeightAuto: false,
                showSocials: true,
                iconsJustify: "center",
                iconsVAlign: "center",
                socialDetails: [
                    {
                        icon: "fab fa-facebook-f",
                        color: "#fff",
                        bgColor: "#3b5998",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                    {
                        icon: "fab fa-twitter",
                        color: "#fff",
                        bgColor: "#1da1f2",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                    {
                        icon: "fab fa-linkedin-in",
                        color: "#fff",
                        bgColor: "#0077b5",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                    {
                        icon: "fab fa-youtube",
                        color: "#fff",
                        bgColor: "#cd201f",
                        link: "#",
                        linkOpenNewTab: false,
                        isExpanded: false,
                    },
                ],
                contentsAlign: "center",
                imageAlign: "center",
                preset: "default",
                socialInImage: false,
                imgBeforeEl: false,
                showCSeparator: false,
                showSSeparator: false,
                cSepAlign: "center",
                sSepAlign: "center",
                cSepType: "solid",
                sSepType: "solid",
                isIconsDevider: false,
                icnSepW: 1,
                icnSepH: 30,
                conVtAlign: "center",
                isConBgGradient: true,
                conBgGradient:
                    "linear-gradient(45deg, #7967ff, rgba(194,119,242,0.8))",
                imgCnVtAlign: "flex-start",
                isP9reverse: false,
                [`${tmbWrapMarginConst}Unit`]: "px",
                [`${tmbWrapMarginConst}isLinked`]: true,
                [`${tmbWrapPaddingConst}Unit`]: "px",
                [`${tmbWrapPaddingConst}isLinked`]: true,
                [`${WrpBdShadowConst}Bdr_Unit`]: "px",
                [`${WrpBdShadowConst}Bdr_isLinked`]: true,
                [`${WrpBdShadowConst}Rds_Unit`]: "px",
                [`${WrpBdShadowConst}Rds_isLinked`]: true,
                [`${WrpBdShadowConst}BorderType`]: "normal",
                [`${WrpBdShadowConst}shadowType`]: "normal",
                [`${tmbDescsPaddingConst}Unit`]: "px",
                [`${tmbDescsPaddingConst}isLinked`]: true,
                [`${tmbJobPaddingConst}Unit`]: "px",
                [`${tmbJobPaddingConst}isLinked`]: true,
                [`${tmbNamePaddingConst}Unit`]: "px",
                [`${tmbNamePaddingConst}isLinked`]: true,
                [`${imageMarginConst}Unit`]: "px",
                [`${imageMarginConst}isLinked`]: true,
                [`${imagePaddingConst}Unit`]: "px",
                [`${imagePaddingConst}isLinked`]: true,
                [`${prefixImgBd}Bdr_Unit`]: "px",
                [`${prefixImgBd}Bdr_isLinked`]: true,
                [`${prefixImgBd}Rds_Unit`]: "px",
                [`${prefixImgBd}Rds_isLinked`]: true,
                [`${prefixImgBd}BorderType`]: "normal",
                [`${prefixImgBd}shadowType`]: "normal",
                [`${prefixSocialBdShadow}Bdr_Unit`]: "px",
                [`${prefixSocialBdShadow}Bdr_isLinked`]: true,
                [`${prefixSocialBdShadow}Rds_Unit`]: "px",
                [`${prefixSocialBdShadow}Rds_isLinked`]: true,
                [`${prefixSocialBdShadow}BorderType`]: "normal",
                [`${prefixSocialBdShadow}shadowType`]: "normal",
                [`${wrapperWidth}Unit`]: "%",
                [`${wrapperWidth}Range`]: 100,
                [`${imageWidth}Unit`]: "px",
                [`${imageHeight}Unit`]: "px",
                [`${imgTopBgHeight}Unit`]: "px",
                [`${iconsWrapMargin}Unit`]: "px",
                [`${iconsWrapMargin}isLinked`]: true,
                [`${iconsWrapPadding}Unit`]: "px",
                [`${iconsWrapPadding}isLinked`]: true,
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
                    <PanelBody
                        title={__("Social Profiles", "essential-blocks")}
                        initialOpen={true}
                    >
                        <>
                            <ToggleControl
                                label={__(
                                    "Enable Social Profiles",
                                    "essential-blocks"
                                )}
                                checked={showSocials}
                                onChange={() =>
                                    handleBlockDefault({
                                        showSocials: !showSocials,
                                    })
                                }
                            />
                            {showSocials && (
                                <DealSocialProfiles
                                    profiles={socialDetails}
                                    onProfileAdd={(socialDetails) =>
                                        handleBlockDefault({ socialDetails })
                                    }
                                    iconList={IconList}
                                />
                            )}
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Separators", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__(
                                "Enable Content Separator",
                                "essential-blocks"
                            )}
                            checked={showCSeparator}
                            onChange={() =>
                                handleBlockDefault({
                                    showCSeparator: !showCSeparator,
                                })
                            }
                        />
                        {showSocials && "preset3" !== preset && (
                            <ToggleControl
                                label={__(
                                    "Enable Social Separator",
                                    "essential-blocks"
                                )}
                                checked={showSSeparator}
                                onChange={() =>
                                    handleBlockDefault({
                                        showSSeparator: !showSSeparator,
                                    })
                                }
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Container width", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ResponsiveRangeController
                            baseLabel={__("Max Width", "essential-blocks")}
                            controlName={wrapperWidth}
                            resRequiredProps={resRequiredProps}
                            min={100}
                            max={2000}
                            step={1}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Alignments", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BaseControl
                            id="eb-team-image-alignments"
                            label={__(
                                "Avatar Horizontal Alignments",
                                "essential-blocks"
                            )}
                        >
                            <ButtonGroup className="eb-btngrp-align">
                                <Button
                                    icon={() => (
                                        <LeftAlignIcon
                                            color={
                                                imageAlign === "left" &&
                                                "#6c40f7"
                                            }
                                        />
                                    )}
                                    onClick={() =>
                                        handleBlockDefault({
                                            imageAlign: "left",
                                        })
                                    }
                                />
                                <Button
                                    icon={() => (
                                        <CenterAlignIcon
                                            color={
                                                imageAlign === "center" &&
                                                "#6c40f7"
                                            }
                                        />
                                    )}
                                    onClick={() =>
                                        handleBlockDefault({
                                            imageAlign: "center",
                                        })
                                    }
                                />
                                <Button
                                    icon={() => (
                                        <RightAlignIcon
                                            color={
                                                imageAlign === "right" &&
                                                "#6c40f7"
                                            }
                                        />
                                    )}
                                    onClick={() =>
                                        handleBlockDefault({
                                            imageAlign: "right",
                                        })
                                    }
                                />
                            </ButtonGroup>
                        </BaseControl>

                        <BaseControl
                            id="eb-team-contents-alignments"
                            label="Contents Horizontal Alignments"
                        >
                            <ButtonGroup className="eb-btngrp-align">
                                <Button
                                    icon={() => (
                                        <LeftAlignIcon
                                            color={
                                                contentsAlign === "left" &&
                                                "#6c40f7"
                                            }
                                        />
                                    )}
                                    onClick={() =>
                                        handleBlockDefault({
                                            contentsAlign: "left",
                                        })
                                    }
                                />
                                <Button
                                    icon={() => (
                                        <CenterAlignIcon
                                            color={
                                                contentsAlign === "center" &&
                                                "#6c40f7"
                                            }
                                        />
                                    )}
                                    onClick={() =>
                                        handleBlockDefault({
                                            contentsAlign: "center",
                                        })
                                    }
                                />
                                <Button
                                    icon={() => (
                                        <RightAlignIcon
                                            color={
                                                contentsAlign === "right" &&
                                                "#6c40f7"
                                            }
                                        />
                                    )}
                                    onClick={() =>
                                        handleBlockDefault({
                                            contentsAlign: "right",
                                        })
                                    }
                                />
                            </ButtonGroup>
                        </BaseControl>

                        {showSocials && (
                            <>
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
                            </>
                        )}

                        {showCSeparator && (
                            <BaseControl
                                id="eb-team-contents-alignments"
                                label={__(
                                    "Content Separator Alignment",
                                    "essential-blocks"
                                )}
                            >
                                <ButtonGroup className="eb-btngrp-align">
                                    <Button
                                        icon={() => (
                                            <LeftAlignIcon
                                                color={
                                                    cSepAlign === "left" &&
                                                    "#6c40f7"
                                                }
                                            />
                                        )}
                                        onClick={() =>
                                            handleBlockDefault({
                                                cSepAlign: "left",
                                            })
                                        }
                                    />
                                    <Button
                                        icon={() => (
                                            <CenterAlignIcon
                                                color={
                                                    cSepAlign === "center" &&
                                                    "#6c40f7"
                                                }
                                            />
                                        )}
                                        onClick={() =>
                                            handleBlockDefault({
                                                cSepAlign: "center",
                                            })
                                        }
                                    />
                                    <Button
                                        icon={() => (
                                            <RightAlignIcon
                                                color={
                                                    cSepAlign === "right" &&
                                                    "#6c40f7"
                                                }
                                            />
                                        )}
                                        onClick={() =>
                                            handleBlockDefault({
                                                cSepAlign: "right",
                                            })
                                        }
                                    />
                                </ButtonGroup>
                            </BaseControl>
                        )}

                        {showSocials && showSSeparator && (
                            <BaseControl
                                id="eb-team-contents-alignments"
                                label="Social Separator Alignment"
                            >
                                <ButtonGroup className="eb-btngrp-align">
                                    <Button
                                        icon={() => (
                                            <LeftAlignIcon
                                                color={
                                                    sSepAlign === "left" &&
                                                    "#6c40f7"
                                                }
                                            />
                                        )}
                                        onClick={() =>
                                            handleBlockDefault({
                                                sSepAlign: "left",
                                            })
                                        }
                                    />
                                    <Button
                                        icon={() => (
                                            <CenterAlignIcon
                                                color={
                                                    sSepAlign === "center" &&
                                                    "#6c40f7"
                                                }
                                            />
                                        )}
                                        onClick={() =>
                                            handleBlockDefault({
                                                sSepAlign: "center",
                                            })
                                        }
                                    />
                                    <Button
                                        icon={() => (
                                            <RightAlignIcon
                                                color={
                                                    sSepAlign === "right" &&
                                                    "#6c40f7"
                                                }
                                            />
                                        )}
                                        onClick={() =>
                                            handleBlockDefault({
                                                sSepAlign: "right",
                                            })
                                        }
                                    />
                                </ButtonGroup>
                            </BaseControl>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Avatar", "essential-blocks")}
                        initialOpen={false}
                    >
                        {imageUrl && (
                            <>
                                <ResponsiveRangeController
                                    baseLabel={__(
                                        "Image Width",
                                        "essential-blocks"
                                    )}
                                    controlName={imageWidth}
                                    resRequiredProps={resRequiredProps}
                                    units={sizeUnitTypes}
                                    max={2000}
                                />
                                <ToggleControl
                                    label={__(
                                        "Auto Image Height",
                                        "essential-blocks"
                                    )}
                                    checked={isImgHeightAuto}
                                    onChange={() =>
                                        handleBlockDefault({
                                            isImgHeightAuto: !isImgHeightAuto,
                                        })
                                    }
                                />
                                {!isImgHeightAuto && (
                                    <ResponsiveRangeController
                                        baseLabel={__(
                                            "Image Height",
                                            "essential-blocks"
                                        )}
                                        controlName={imageHeight}
                                        resRequiredProps={resRequiredProps}
                                        units={sizeUnitTypes}
                                        max={2000}
                                    />
                                )}
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={imageMarginConst}
                                    baseLabel="Margin"
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={imagePaddingConst}
                                    baseLabel="Padding"
                                />
                                <BorderShadowControl
                                    controlName={prefixImgBd}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ToggleControl
                                    label={__(
                                        "Enable Background before Image",
                                        "essential-blocks"
                                    )}
                                    checked={imgBeforeEl}
                                    onChange={() =>
                                        handleBlockDefault({
                                            imgBeforeEl: !imgBeforeEl,
                                        })
                                    }
                                />
                                {imgBeforeEl && (
                                    <>
                                        <BackgroundControl
                                            noOverlay
                                            noMainBgi
                                            controlName={imgTopBgPrefix}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResponsiveRangeController
                                            noUnits
                                            baseLabel={__(
                                                "Height",
                                                "essential-blocks"
                                            )}
                                            controlName={imgTopBgHeight}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={300}
                                            step={1}
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Name", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={nameColor}
                            onChange={(nameColor) =>
                                handleBlockDefault({ nameColor })
                            }
                        />
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_name}
                            resRequiredProps={resRequiredProps}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={tmbNamePaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Job Title", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={jobColor}
                            onChange={(jobColor) =>
                                handleBlockDefault({ jobColor })
                            }
                        />
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_job}
                            resRequiredProps={resRequiredProps}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={tmbJobPaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Description", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Enable Description", "essential-blocks")}
                            checked={showDescs}
                            onChange={() =>
                                handleBlockDefault({ showDescs: !showDescs })
                            }
                        />
                        {showDescs && (
                            <>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={descsColor}
                                    onChange={(descsColor) =>
                                        handleBlockDefault({ descsColor })
                                    }
                                />
                                <TypographyDropdown
                                    baseLabel="Typography"
                                    typographyPrefixConstant={typoPrefix_descs}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={tmbDescsPaddingConst}
                                    baseLabel="Padding"
                                />
                            </>
                        )}
                    </PanelBody>
                    {showSocials && (
                        <PanelBody
                            title={__("Social Icons", "essential-blocks")}
                            initialOpen={false}
                        >
                            <ColorControl
                                label={__("Hover Color", "essential-blocks")}
                                color={hvIcnColor}
                                onChange={(hvIcnColor) =>
                                    handleBlockDefault({ hvIcnColor })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Hover Background",
                                    "essential-blocks"
                                )}
                                color={hvIcnBgc}
                                onChange={(hvIcnBgc) =>
                                    handleBlockDefault({ hvIcnBgc })
                                }
                            />
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
                                    N.B. 'Rows Gap' is used when you have
                                    multiple rows of social profiles. Normally
                                    in case of only one row, it's not needed
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
                                            handleBlockDefault({
                                                icnsDevideColor,
                                            })
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
                            <SelectControl
                                label={__(
                                    "Icon Hover Effect",
                                    "essential-blocks"
                                )}
                                value={icnEffect}
                                options={HOVER_EFFECT}
                                onChange={(icnEffect) => {
                                    handleBlockDefault({ icnEffect });
                                }}
                            />
                            <PanelBody
                                title={__("Icons Border", "essential-blocks")}
                                initialOpen={false}
                            >
                                <BorderShadowControl
                                    controlName={prefixSocialBdShadow}
                                    resRequiredProps={resRequiredProps}
                                    noShadow
                                    // noBorder
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "Container Background ",
                                    "essential-blocks"
                                )}
                                initialOpen={false}
                            >
                                <BackgroundControl
                                    controlName={socialWrpBg}
                                    resRequiredProps={resRequiredProps}
                                    noMainBgi
                                    noOverlay
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "Container Margin Padding ",
                                    "essential-blocks"
                                )}
                                initialOpen={false}
                            >
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={iconsWrapMargin}
                                    baseLabel="Margin"
                                />

                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={iconsWrapPadding}
                                    baseLabel="Padding"
                                />
                            </PanelBody>
                        </PanelBody>
                    )}
                    {showCSeparator && (
                        <PanelBody
                            title={__("Content Separator", "essential-blocks")}
                            initialOpen={false}
                        >
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={cSepColor}
                                onChange={(cSepColor) =>
                                    handleBlockDefault({ cSepColor })
                                }
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={cSepWPrefix}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={800}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Height", "essential-blocks")}
                                controlName={cSepHPrefix}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={20}
                                step={1}
                            />
                            <BaseControl
                                label={__("Separator Type", "essential-blocks")}
                            >
                                <SelectControl
                                    value={cSepType}
                                    options={separatorTypes}
                                    onChange={(cSepType) => {
                                        handleBlockDefault({ cSepType });
                                    }}
                                />
                            </BaseControl>
                        </PanelBody>
                    )}
                    {showSocials && showSSeparator && (
                        <PanelBody
                            title={__("Social Separator", "essential-blocks")}
                            initialOpen={false}
                        >
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={sSepColor}
                                onChange={(sSepColor) =>
                                    handleBlockDefault({ sSepColor })
                                }
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={sSepWPrefix}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={800}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Height", "essential-blocks")}
                                controlName={sSepHPrefix}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={20}
                                step={1}
                            />
                            <BaseControl
                                label={__("Separator Type", "essential-blocks")}
                            >
                                <SelectControl
                                    value={sSepType}
                                    options={separatorTypes}
                                    onChange={(sSepType) => {
                                        handleBlockDefault({ sSepType });
                                    }}
                                />
                            </BaseControl>
                        </PanelBody>
                    )}
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
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default TeamMember;
