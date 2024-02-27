/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    ToggleControl,
    BaseControl,
    Button,
    ButtonGroup,
    __experimentalDivider as Divider,
} from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";


const {
    ColorControl,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    TypographyDropdown,
    BackgroundControl,
    BorderShadowControl,
    GradientColorControl,
    ImageAvatar,
    faIcons,
    EBIconPicker,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    MEDIA_TYPES,
    ICON_IMAGE_BG_TYPES,
    MEDIA_ALIGNMENTS_ON_FLEX_COLUMN,
    MEDIA_ALIGNMENTS_ON_FLEX_ROW,
    CONTENTS_ALIGNMENTS_ON_FLEX_ROW,
    sizeUnitTypes,
    imgHeightUnits,
    LAYOUT_TYPES,
    // HEADER_TAGS,
    CONTENTS_ALIGNMENTS,
    // HOVER_EFFECT,
} from "../../../../blocks/number-counter/src/constants";

import {
    typoPrefix_numPrefix,
    typoPrefix_numSuffix,
    typoPrefix_number,
    typoPrefix_title,
} from "../../../../blocks/number-counter/src/constants/typographyPrefixConstants";

import {
    wrapperMargin,
    wrapperPadding,

    //
    mediaBgPadding,
    mediaBgMargin,
    mediaBgRadius,
} from "../../../../blocks/number-counter/src/constants/dimensionsConstants";
import { WrapBg } from "../../../../blocks/number-counter/src/constants/backgroundsConstants";
import { wrpBdShadow } from "../../../../blocks/number-counter/src/constants/borderShadowConstants";
import {
    rgNumTitle,
    rgNumPrefix,
    rgNumSuffix,

    //
    mediaIconSize,
    mediaImageWidth,
    mediaImageHeight,
    mediaContentGap,
} from "../../../../blocks/number-counter/src/constants/rangeNames";

import objAttributes from "../../../../blocks/number-counter/src/attributes";

function NumberCounter(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        // counter color attributes ⬇
        titleColor,
        numberColor,
        numPrefixColor,
        numSuffixColor,

        //
        rootFlexDirection,
        contentAlignment,
        mediaAlignSelf,
        contentsAlignSelf,

        //
        media,
        selectedIcon,
        iconColor,
        useIconBg,
        iconBgType,
        iconBgColor,
        iconBgGradient,
        imageUrl,
        imageId,
        isMediaImgHeightAuto,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                wrapperFlexDirection: "column",
                layoutLabel: "",
                titleColor: "var(--eb-global-heading-color)",
                numberColor: "var(--eb-global-heading-color)",
                numPrefixColor: "var(--eb-global-text-color)",
                numSuffixColor: "var(--eb-global-text-color)",
                layoutPreset: "preset1",
                rootFlexDirection: "column",
                mediaAlignSelf: "center",
                contentsAlignSelf: "",
                contentAlignment: "center",
                media: "none",
                selectedIcon: "far fa-gem",
                iconColor: "var(--eb-global-primary-color)",
                useIconBg: true,
                iconBgType: "fill",
                iconBgColor: "var(--eb-global-background-color)",
                iconBgGradient: "linear-gradient(45deg,#ffc2de,#ff46a1)",
                imageUrl: "",
                imageId: "",
                isMediaImgHeightAuto: true,

                [`${mediaIconSize}Unit`]: "px",
                [`${mediaImageWidth}Unit`]: "px",
                [`${mediaImageHeight}Unit`]: "px",
                [`${mediaContentGap}Unit`]: "px",

                [`${rgNumTitle}Unit`]: "px",
                [`${rgNumPrefix}Unit`]: "px",
                [`${rgNumSuffix}Unit`]: "px",

                [`${mediaBgPadding}Top`]: 20,
                [`${mediaBgPadding}Bottom`]: 20,
                [`${mediaBgPadding}Right`]: 20,
                [`${mediaBgPadding}Left`]: 20,
                [`${mediaBgPadding}Unit`]: "px",
                [`${mediaBgPadding}isLinked`]: false,

                [`${mediaBgMargin}Unit`]: "px",
                [`${mediaBgMargin}isLinked`]: true,

                [`${mediaBgRadius}Top`]: 20,
                [`${mediaBgRadius}Bottom`]: 20,
                [`${mediaBgRadius}Right`]: 0,
                [`${mediaBgRadius}Left`]: 0,
                [`${mediaBgRadius}Unit`]: "px",
                [`${mediaBgRadius}isLinked`]: false,

                [`${wrapperPadding}Top`]: 15,
                [`${wrapperPadding}Bottom`]: 0,
                [`${wrapperPadding}Right`]: 0,
                [`${wrapperPadding}Left`]: 0,
                [`${wrapperMargin}Unit`]: "px",
                [`${wrapperMargin}isLinked`]: false,

                [`${wrapperPadding}Top`]: 30,
                [`${wrapperPadding}Bottom`]: 30,
                [`${wrapperPadding}Right`]: 10,
                [`${wrapperPadding}Left`]: 10,
                [`${wrapperPadding}Unit`]: "px",
                [`${wrapperPadding}isLinked`]: false,

                [`${wrpBdShadow}Bdr_Unit`]: "px",
                [`${wrpBdShadow}Bdr_isLinked`]: true,
                [`${wrpBdShadow}Rds_Unit`]: "px",
                [`${wrpBdShadow}Rds_isLinked`]: true,
                [`${wrpBdShadow}BorderType`]: "normal",
                [`${wrpBdShadow}shadowType`]: "normal",
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
                    <PanelBody initialOpen={true} title={__("Media Options", "essential-blocks")}>
                        <ButtonGroup id="eb-infobox-image-icon">
                            {MEDIA_TYPES.map((value, index) => (
                                <Button
                                    key={index}
                                    isSecondary={media !== value}
                                    isPrimary={media === value}
                                    onClick={() => handleBlockDefault({ media: value })}
                                >
                                    {value}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </PanelBody>

                    {media !== "none" && (
                        <>
                            <PanelBody initialOpen={false}>
                                <ResponsiveRangeController
                                    baseLabel={__("Media & content spacing", "Infobox")}
                                    controlName={mediaContentGap}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={500}
                                    step={1}
                                    noUnits
                                />
                            </PanelBody>
                        </>
                    )}

                    {/* Styles */}
                    {media !== "none" && (
                        <PanelBody title={__("Media", "essential-blocks")}>
                            {media === "icon" && (
                                <>
                                    <EBIconPicker
                                        value={selectedIcon}
                                        onChange={(icon) =>
                                            handleBlockDefault({
                                                selectedIcon: icon,
                                            })
                                        }
                                        title={__("Select Icon", "essential-blocks")}
                                    />
                                    {selectedIcon && (
                                        <ResponsiveRangeController
                                            baseLabel={__("Icon Size", "essential-blocks")}
                                            controlName={mediaIconSize}
                                            resRequiredProps={resRequiredProps}
                                            min={8}
                                            max={200}
                                            step={1}
                                        />
                                    )}

                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={iconColor}
                                        onChange={(iconColor) => handleBlockDefault({ iconColor })}
                                    />

                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={mediaBgPadding}
                                        baseLabel="Padding"
                                    />

                                    <ToggleControl
                                        label={__("Use Background", "essential-blocks")}
                                        checked={useIconBg}
                                        onChange={() =>
                                            handleBlockDefault({
                                                useIconBg: !useIconBg,
                                            })
                                        }
                                    />

                                    {useIconBg && (
                                        <>
                                            <BaseControl label={__("Background Type", "essential-blocks")}>
                                                <ButtonGroup id="eb-infobox-infobox-background">
                                                    {ICON_IMAGE_BG_TYPES.map(({ value, label }, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={iconBgType === value}
                                                            isSecondary={iconBgType !== value}
                                                            onClick={() =>
                                                                handleBlockDefault({
                                                                    iconBgType: value,
                                                                })
                                                            }
                                                        >
                                                            {label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {iconBgType === "fill" && (
                                                <ColorControl
                                                    label={__("Background Color", "essential-blocks")}
                                                    color={iconBgColor}
                                                    onChange={(iconBgColor) =>
                                                        handleBlockDefault({
                                                            iconBgColor,
                                                        })
                                                    }
                                                />
                                            )}

                                            {iconBgType === "gradient" && (
                                                <PanelBody
                                                    title={__("Gradient", "essential-blocks")}
                                                // initialOpen={false}
                                                >
                                                    <GradientColorControl
                                                        gradientColor={iconBgGradient}
                                                        onChange={(iconBgGradient) =>
                                                            handleBlockDefault({
                                                                iconBgGradient,
                                                            })
                                                        }
                                                    />
                                                </PanelBody>
                                            )}
                                        </>
                                    )}
                                </>
                            )}

                            {media === "image" && !imageUrl && (
                                <MediaUpload
                                    onSelect={({ id, url }) =>
                                        handleBlockDefault({
                                            imageUrl: url,
                                            imageId: id,
                                        })
                                    }
                                    type="image"
                                    value={imageId}
                                    render={({ open }) => {
                                        return (
                                            <Button
                                                className="eb-background-control-inspector-panel-img-btn components-button"
                                                label={__("Upload Image", "essential-blocks")}
                                                icon="format-image"
                                                onClick={open}
                                            />
                                        );
                                    }}
                                />
                            )}

                            {media === "image" && imageUrl && (
                                <>
                                    <ImageAvatar
                                        imageUrl={imageUrl}
                                        onDeleteImage={() =>
                                            handleBlockDefault({
                                                imageUrl: null,
                                            })
                                        }
                                    />
                                    <ResponsiveRangeController
                                        baseLabel={__("Image Width", "essential-blocks")}
                                        controlName={mediaImageWidth}
                                        resRequiredProps={resRequiredProps}
                                        units={sizeUnitTypes}
                                        min={0}
                                        max={500}
                                        step={1}
                                    />
                                    <ToggleControl
                                        label={__("Auto Image Height", "essential-blocks")}
                                        checked={isMediaImgHeightAuto}
                                        onChange={() =>
                                            handleBlockDefault({
                                                isMediaImgHeightAuto: !isMediaImgHeightAuto,
                                            })
                                        }
                                    />

                                    {!isMediaImgHeightAuto && (
                                        <>
                                            <ResponsiveRangeController
                                                baseLabel={__("Image Height", "essential-blocks")}
                                                controlName={mediaImageHeight}
                                                resRequiredProps={resRequiredProps}
                                                units={imgHeightUnits}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                        </>
                                    )}
                                </>
                            )}

                            <Divider />

                            <ResponsiveDimensionsControl
                                forBorderRadius
                                resRequiredProps={resRequiredProps}
                                controlName={mediaBgRadius}
                                baseLabel="Border Radius"
                            />

                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={mediaBgMargin}
                                baseLabel="Margin"
                            />
                        </PanelBody>
                    )}

                    <PanelBody title={__("Alignments", "essential-blocks")}>
                        {media !== "none" && (
                            <>
                                {(rootFlexDirection === "row" || rootFlexDirection === "row-reverse") && (
                                    <>
                                        <BaseControl id="eb-infobox-alignments" label="Media Vertical alignments">
                                            <ButtonGroup id="eb-infobox-alignments">
                                                {MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(({ value, label }, index) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={mediaAlignSelf !== value}
                                                        isPrimary={mediaAlignSelf === value}
                                                        onClick={() =>
                                                            handleBlockDefault({
                                                                mediaAlignSelf: value,
                                                            })
                                                        }
                                                    >
                                                        {label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <BaseControl id="eb-infobox-alignments" label="Content Vertical alignments">
                                            <ButtonGroup id="eb-infobox-alignments">
                                                {CONTENTS_ALIGNMENTS_ON_FLEX_ROW.map(({ value, label }, index) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={contentsAlignSelf !== value}
                                                        isPrimary={contentsAlignSelf === value}
                                                        onClick={() =>
                                                            handleBlockDefault({
                                                                contentsAlignSelf: value,
                                                            })
                                                        }
                                                    >
                                                        {label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>
                                    </>
                                )}

                                {(rootFlexDirection === "column" || rootFlexDirection === "column-reverse") && (
                                    <BaseControl id="eb-infobox-alignments" label="Media alignments">
                                        <ButtonGroup id="eb-infobox-alignments">
                                            {MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(({ value, label }, index) => (
                                                <Button
                                                    key={index}
                                                    isSecondary={mediaAlignSelf !== value}
                                                    isPrimary={mediaAlignSelf === value}
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            mediaAlignSelf: value,
                                                        })
                                                    }
                                                >
                                                    {label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>
                                )}
                            </>
                        )}

                        <BaseControl id="eb-infobox-alignments" label="Contents alignments">
                            <ButtonGroup id="eb-infobox-alignments">
                                {CONTENTS_ALIGNMENTS.map(({ value, label }, index) => (
                                    <Button
                                        key={index}
                                        isSecondary={contentAlignment !== value}
                                        isPrimary={contentAlignment === value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                contentAlignment: value,
                                            })
                                        }
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                    </PanelBody>

                    <PanelBody title={__("Number", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_number}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={numberColor}
                            onChange={(numberColor) => handleBlockDefault({ numberColor })}
                        />
                    </PanelBody>

                    <PanelBody title={__("Title", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleColor}
                            onChange={(titleColor) => handleBlockDefault({ titleColor })}
                        />
                    </PanelBody>

                    <PanelBody title={__("Number prefix", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_numPrefix}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={numPrefixColor}
                            onChange={(numPrefixColor) => handleBlockDefault({ numPrefixColor })}
                        />
                    </PanelBody>

                    <PanelBody title={__("Number Suffix", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_numSuffix}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={numSuffixColor}
                            onChange={(numSuffixColor) => handleBlockDefault({ numSuffixColor })}
                        />
                    </PanelBody>

                    <PanelBody title={__("Spacing", "essential-blocks")} initialOpen={false}>
                        <ResponsiveRangeController
                            baseLabel={__("Number & Title", "Number-counter")}
                            controlName={rgNumTitle}
                            resRequiredProps={resRequiredProps}
                            max={100}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Number & Prefix", "Number-counter")}
                            controlName={rgNumPrefix}
                            resRequiredProps={resRequiredProps}
                            max={100}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Number & Suffix", "Number-counter")}
                            controlName={rgNumSuffix}
                            resRequiredProps={resRequiredProps}
                            max={100}
                        />
                    </PanelBody>

                    {/* Advanced */}
                    <PanelBody title={__("Wrapper Margin Padding", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapperMargin}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapperPadding}
                            baseLabel="Padding"
                        />
                    </PanelBody>

                    <PanelBody title={__(" WrapperBackground", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={WrapBg} resRequiredProps={resRequiredProps} />
                    </PanelBody>

                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                        <BorderShadowControl controlName={wrpBdShadow} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default NumberCounter;
