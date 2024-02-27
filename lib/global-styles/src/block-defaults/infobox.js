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
    TextControl,
    Button,
    BaseControl,
    ButtonGroup,
    TabPanel,
    __experimentalDivider as Divider,
} from "@wordpress/components";

import { infoWrapBg, infoBtnBg } from "../../../../blocks/infobox/src/constants/backgroundsConstants";
import { wrpBdShadow, btnBdShd } from "../../../../blocks/infobox/src/constants/borderShadowConstants";

import objAttributes from "../../../../blocks/infobox/src/attributes";

const {
    BackgroundControl,
    BorderShadowControl,
    GradientColorControl,
    ColorControl,
    ImageAvatar,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    EBIconPicker,
} = window.EBControls;

import {
    typoPrefix_title,
    typoPrefix_content,
    typoPrefix_number,
    typoPrefix_subTitle,
    typoPrefix_buttonText,
} from "../../../../blocks/infobox/src/constants/typographyPrefixConstants";

import {
    mediaIconSize,
    mediaImageWidth,
    mediaImageHeight,
    mediaContentGap,
} from "../../../../blocks/infobox/src/constants/rangeNames";

import {
    mediaBackground,
    mediaBgMargin,
    mediaBgRadius,
    buttonPadding,
    // buttonRadius,
    subTitlePadding,
    contentPadding,
    titlePadding,
    wrapperMargin,
    wrapperPadding,
} from "../../../../blocks/infobox/src/constants/dimensionsConstants";

import {
    LAYOUT_TYPES,
    MEDIA_TYPES,
    ICON_IMAGE_BG_TYPES,
    sizeUnitTypes,
    HEADER_TAGS,
    CONTENTS_ALIGNMENTS,
    MEDIA_ALIGNMENTS_ON_FLEX_COLUMN,
    MEDIA_ALIGNMENTS_ON_FLEX_ROW,
    HOVER_EFFECT,
    imgHeightUnits,
} from "../../../../blocks/infobox/src/constants";

function Infobox(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        layoutPreset,
        media,
        enableSubTitle,
        number,
        imageUrl,
        selectedIcon,
        flexDirection,
        enableDescription,
        useNumIconBg,
        numIconColor,
        numIconBgType,
        numIconBgColor,
        numIconBgGradient,
        imageId,
        isMediaImgHeightAuto,
        titleTag,
        subTitleTag,
        enableButton,
        isInfoClick,
        buttonText,
        infoboxLink,
        buttonTextColor,
        buttonHvrTextColor,
        titleColor,
        subTitleColor,
        descriptionColor,
        mediaAlignment,
        contentsAlignment,
        btnAlignment,
        btnEffect,
        linkNewTab,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                isOverlay: false,
                layoutPreset: "preset1",
                media: "icon",
                useNumIconBg: true,
                numIconBgType: "fill",
                numIconBgColor: "var(--eb-global-primary-color)",
                numIconBgGradient: "linear-gradient(45deg,#ffc2de,#ff46a1)",
                mediaImgWidthUnit: "px",
                mediaImgWidth: 300,
                isMediaImgHeightAuto: true,
                mediaImgHeightUnit: "px",
                selectedIcon: "far fa-gem",
                enableSubTitle: false,
                enableDescription: true,
                enableButton: true,
                isInfoClick: false,
                buttonText: "Learn More",
                linkNewTab: false,
                title: "This is an info box",
                subTitle: "This is a Sub title",
                description:
                    "Write a short description, that will describe the title or something informational and useful",
                iconSize: 50,
                flexDirection: "string",
                mediaAlignSelf: "string",
                contentAlignment: "string",
                titleTag: "h2",
                subTitleTag: "h3",
                [`${mediaBackground}Unit`]: "px",
                [`${mediaBackground}isLinked`]: true,
                [`${mediaBgRadius}Unit`]: "px",
                [`${mediaBgRadius}isLinked`]: true,
                [`${mediaBgMargin}Unit`]: "px",
                [`${mediaBgMargin}isLinked`]: true,
                [`${titlePadding}Unit`]: "px",
                [`${titlePadding}isLinked`]: true,
                [`${subTitlePadding}Unit`]: "px",
                [`${subTitlePadding}isLinked`]: true,
                [`${contentPadding}Unit`]: "px",
                [`${contentPadding}isLinked`]: true,
                [`${buttonPadding}Unit`]: "px",
                [`${buttonPadding}isLinked`]: true,
                [`${btnBdShd}Bdr_Unit`]: "px",
                [`${btnBdShd}Bdr_isLinked`]: true,
                [`${btnBdShd}Rds_Unit`]: "px",
                [`${btnBdShd}Rds_isLinked`]: true,
                [`${btnBdShd}BorderType`]: "normal",
                [`${btnBdShd}shadowType`]: "normal",
                [`${wrapperMargin}Unit`]: "px",
                [`${wrapperMargin}isLinked`]: true,
                [`${wrapperPadding}Unit`]: "px",
                [`${wrapperPadding}isLinked`]: true,
                [`${wrpBdShadow}Bdr_Unit`]: "px",
                [`${wrpBdShadow}Bdr_isLinked`]: true,
                [`${wrpBdShadow}Rds_Unit`]: "px",
                [`${wrpBdShadow}Rds_isLinked`]: true,
                [`${wrpBdShadow}BorderType`]: "normal",
                [`${wrpBdShadow}shadowType`]: "normal",
                [`${mediaIconSize}Unit`]: "px",
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
                        title={__("Infobox Settings", "essential-blocks")}
                    // initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Clickable Infobox", "essential-blocks")}
                            checked={isInfoClick}
                            onChange={() =>
                                handleBlockDefault({
                                    isInfoClick: !isInfoClick,
                                })
                            }
                        />

                        {isInfoClick && (
                            <>
                                <TextControl
                                    // id={`info-link-input-${blockId}`}
                                    label={__("URL (use https:// at the beginning)")}
                                    placeholder="https://your-link.com"
                                    value={infoboxLink}
                                    onChange={(infoboxLink) => handleBlockDefault({ infoboxLink })}
                                />
                                <ToggleControl
                                    label={__("Open in New Tab", "essential-blocks")}
                                    checked={linkNewTab}
                                    onChange={() =>
                                        handleBlockDefault({
                                            linkNewTab: !linkNewTab,
                                        })
                                    }
                                />
                            </>
                        )}

                        {!isInfoClick && (
                            <ToggleControl
                                label={__("Show button", "essential-blocks")}
                                checked={enableButton}
                                onChange={() =>
                                    handleBlockDefault({
                                        enableButton: !enableButton,
                                    })
                                }
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__("Alignments", "essential-blocks")} initialOpen={false}>
                        {media !== "none" && (
                            <>
                                {(flexDirection === "row" || flexDirection === "row-reverse") && (
                                    <BaseControl id="eb-infobox-alignments" label="Media alignments">
                                        <ButtonGroup id="eb-infobox-alignments">
                                            {MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(({ value, label }, index) => (
                                                <Button
                                                    key={index}
                                                    isSecondary={mediaAlignment !== value}
                                                    isPrimary={mediaAlignment === value}
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            mediaAlignment: value,
                                                        })
                                                    }
                                                >
                                                    {label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>
                                )}

                                {(flexDirection === "column" || flexDirection === "column-reverse") && (
                                    <BaseControl id="eb-infobox-alignments" label="Media alignments">
                                        <ButtonGroup id="eb-infobox-alignments">
                                            {MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(({ value, label }, index) => (
                                                <Button
                                                    key={index}
                                                    isSecondary={mediaAlignment !== value}
                                                    isPrimary={mediaAlignment === value}
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            mediaAlignment: value,
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
                                        isSecondary={contentsAlignment !== value}
                                        isPrimary={contentsAlignment === value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                contentsAlignment: value,
                                            })
                                        }
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        {enableButton && !isInfoClick && (
                            <BaseControl id="eb-infobox-alignments" label="Button alignments">
                                <ButtonGroup id="eb-infobox-alignments">
                                    {CONTENTS_ALIGNMENTS.map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            isSecondary={btnAlignment !== value}
                                            isPrimary={btnAlignment === value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    btnAlignment: value,
                                                })
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                        )}
                    </PanelBody>

                    <PanelBody title={__("Media Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl id="eb-infobox-image-icon">
                            <ButtonGroup id="eb-infobox-image-icon">
                                {MEDIA_TYPES.map(({ label, value }, index) => (
                                    <Button
                                        key={index}
                                        isSecondary={media !== value}
                                        isPrimary={media === value}
                                        onClick={() => handleBlockDefault({ media: value })}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        {media !== "none" && (
                            <>
                                {media === "icon" && (
                                    <EBIconPicker
                                        value={selectedIcon}
                                        onChange={(icon) =>
                                            handleBlockDefault({
                                                selectedIcon: icon,
                                            })
                                        }
                                        title={__("Select Icon", "essential-blocks")}
                                    />
                                )}

                                {media === "icon" && selectedIcon && (
                                    <ResponsiveRangeController
                                        baseLabel={__("Icon Size", "essential-blocks")}
                                        controlName={mediaIconSize}
                                        resRequiredProps={resRequiredProps}
                                        min={8}
                                        max={200}
                                        step={1}
                                    />
                                )}

                                {media === "number" && (
                                    <>
                                        <BaseControl label={__("Text", "essential-blocks")} id="eb-infobox-number-id">
                                            <input
                                                type="text"
                                                value={`${number}`}
                                                id="eb-infobox-number-id"
                                                onChange={(e) =>
                                                    handleBlockDefault({
                                                        number: `${e.target.value}`,
                                                    })
                                                }
                                            />
                                        </BaseControl>

                                        <TypographyDropdown
                                            baseLabel="Text Typography"
                                            typographyPrefixConstant={typoPrefix_number}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </>
                                )}

                                {(media === "number" || media === "icon") && (
                                    <>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={numIconColor}
                                            onChange={(numIconColor) =>
                                                handleBlockDefault({
                                                    numIconColor,
                                                })
                                            }
                                        />

                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={mediaBackground}
                                            baseLabel="Padding"
                                        />

                                        <ToggleControl
                                            label={__("Use Background", "essential-blocks")}
                                            checked={useNumIconBg}
                                            onChange={() =>
                                                handleBlockDefault({
                                                    useNumIconBg: !useNumIconBg,
                                                })
                                            }
                                        />

                                        {useNumIconBg && (
                                            <>
                                                <BaseControl label={__("Background Type", "essential-blocks")}>
                                                    <ButtonGroup id="eb-infobox-infobox-background">
                                                        {ICON_IMAGE_BG_TYPES.map(({ value, label }, index) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={numIconBgType === value}
                                                                isSecondary={numIconBgType !== value}
                                                                onClick={() =>
                                                                    handleBlockDefault({
                                                                        numIconBgType: value,
                                                                    })
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {numIconBgType === "fill" && (
                                                    <ColorControl
                                                        label={__("Background Color", "essential-blocks")}
                                                        color={numIconBgColor}
                                                        onChange={(numIconBgColor) =>
                                                            handleBlockDefault({
                                                                numIconBgColor,
                                                            })
                                                        }
                                                    />
                                                )}

                                                {numIconBgType === "gradient" && (
                                                    <PanelBody
                                                        title={__("Gradient", "essential-blocks")}
                                                    // initialOpen={false}
                                                    >
                                                        <GradientColorControl
                                                            gradientColor={numIconBgGradient}
                                                            onChange={(numIconBgGradient) =>
                                                                handleBlockDefault({
                                                                    numIconBgGradient,
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

                                {media !== "none" && (
                                    <>
                                        <ResponsiveRangeController
                                            baseLabel={__("Media & content spacing", "Infobox")}
                                            controlName={mediaContentGap}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={500}
                                            step={1}
                                            noUnits
                                        />
                                    </>
                                )}

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
                            </>
                        )}
                    </PanelBody>

                    <PanelBody title={__("Title Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl label={__("Title Tag", "essential-blocks")}>
                            <ButtonGroup className="infobox-button-group">
                                {HEADER_TAGS.map((header, index) => (
                                    <Button
                                        key={index}
                                        isSecondary={titleTag !== header}
                                        isPrimary={titleTag === header}
                                        onClick={() =>
                                            handleBlockDefault({
                                                titleTag: header,
                                            })
                                        }
                                    >
                                        {header.toUpperCase()}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                        />

                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={titlePadding}
                            baseLabel="Title Padding"
                        />

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleColor}
                            onChange={(titleColor) => handleBlockDefault({ titleColor })}
                        />
                    </PanelBody>

                    <PanelBody title={__("Subtitle Style", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label={__("Enable", "essential-blocks")}
                            checked={enableSubTitle}
                            onChange={() =>
                                handleBlockDefault({
                                    enableSubTitle: !enableSubTitle,
                                })
                            }
                        />

                        {enableSubTitle && (
                            <>
                                <BaseControl label={__("Subtitle Tag", "essential-blocks")}>
                                    <ButtonGroup className="infobox-button-group">
                                        {HEADER_TAGS.map((header, index) => (
                                            <Button
                                                key={index}
                                                isSecondary={subTitleTag !== header}
                                                isPrimary={subTitleTag === header}
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        subTitleTag: header,
                                                    })
                                                }
                                            >
                                                {header.toUpperCase()}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                <TypographyDropdown
                                    baseLabel="Typography"
                                    typographyPrefixConstant={typoPrefix_subTitle}
                                    resRequiredProps={resRequiredProps}
                                />

                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={subTitlePadding}
                                    baseLabel="Subtitle Padding"
                                />

                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={subTitleColor}
                                    onChange={(subTitleColor) => handleBlockDefault({ subTitleColor })}
                                />
                            </>
                        )}
                    </PanelBody>

                    <PanelBody title={__("Content Style", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label={__("Show content", "essential-blocks")}
                            checked={enableDescription}
                            onChange={() =>
                                handleBlockDefault({
                                    enableDescription: !enableDescription,
                                })
                            }
                        />

                        {enableDescription && (
                            <>
                                <TypographyDropdown
                                    baseLabel="Typography"
                                    typographyPrefixConstant={typoPrefix_content}
                                    resRequiredProps={resRequiredProps}
                                />

                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={contentPadding}
                                    baseLabel="Content Padding"
                                />

                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={descriptionColor}
                                    onChange={(descriptionColor) => handleBlockDefault({ descriptionColor })}
                                />
                            </>
                        )}
                    </PanelBody>

                    {enableButton && !isInfoClick && (
                        <PanelBody title={__("Button Style", "essential-blocks")} initialOpen={false}>
                            <TextControl
                                label={__("Button Text", "essential-blocks")}
                                value={buttonText}
                                onChange={(buttonText) => handleBlockDefault({ buttonText })}
                            />

                            <TextControl
                                label={__("Link URL (use https:// at the beginning)")}
                                placeholder="https://your-site.com"
                                value={infoboxLink}
                                onChange={(infoboxLink) => handleBlockDefault({ infoboxLink })}
                            />

                            <ToggleControl
                                label={__("Open in New Tab", "essential-blocks")}
                                checked={linkNewTab}
                                onChange={() =>
                                    handleBlockDefault({
                                        linkNewTab: !linkNewTab,
                                    })
                                }
                            />

                            <TypographyDropdown
                                baseLabel="Typography"
                                typographyPrefixConstant={typoPrefix_buttonText}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={buttonPadding}
                                baseLabel="Button Padding"
                            />

                            <ColorControl
                                label={__("Text color", "essential-blocks")}
                                color={buttonTextColor}
                                onChange={(buttonTextColor) => handleBlockDefault({ buttonTextColor })}
                            />

                            <ColorControl
                                label={__("Hover text color", "essential-blocks")}
                                color={buttonHvrTextColor}
                                onChange={(buttonHvrTextColor) => handleBlockDefault({ buttonHvrTextColor })}
                            />

                            <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                                <BackgroundControl
                                    controlName={infoBtnBg}
                                    resRequiredProps={resRequiredProps}
                                    forButton
                                // noOverlay
                                // noMainBgi
                                // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                                />
                            </PanelBody>

                            <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                <BorderShadowControl controlName={btnBdShd} resRequiredProps={resRequiredProps} />
                            </PanelBody>
                            <PanelBody title={__("More Effects", "essential-blocks")} initialOpen={false}>
                                <SelectControl
                                    label={__("Button Hover Effect", "essential-blocks")}
                                    value={btnEffect}
                                    options={HOVER_EFFECT}
                                    // onChange={(preset) => handleBlockDefault({ preset })}
                                    onChange={(btnEffect) => {
                                        handleBlockDefault({ btnEffect });
                                    }}
                                />
                            </PanelBody>
                        </PanelBody>
                    )}
                    <PanelBody title={__("Wrapper Margin & Padding", "essential-blocks")} initialOpen={false}>
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
                    <PanelBody title={__("Wrapper Background", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={infoWrapBg} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                        <BorderShadowControl controlName={wrpBdShadow} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default Infobox;
