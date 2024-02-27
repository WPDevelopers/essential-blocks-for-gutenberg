/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
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

import { infoWrapBg, infoBtnBg } from "./constants/backgroundsConstants";
import { wrpBdShadow, btnBdShd } from "./constants/borderShadowConstants";

import objAttributes from "./attributes";

const {
    BackgroundControl,
    BorderShadowControl,
    GradientColorControl,
    ColorControl,
    ImageAvatar,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    faIcons,
    AdvancedControls,
    DynamicInputControl,
    EBIconPicker
} = window.EBControls;

import {
    typoPrefix_title,
    typoPrefix_content,
    typoPrefix_number,
    typoPrefix_subTitle,
    typoPrefix_buttonText,
} from "./constants/typographyPrefixConstants";

import {
    mediaIconSize,
    mediaImageWidth,
    mediaImageHeight,
    mediaContentGap,
} from "./constants/rangeNames";

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
} from "./constants/dimensionsConstants";

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
} from "./constants";

function Inspector(props) {
    const { attributes, setAttributes } = props;

    const {
        blockId,

        // responsive control attributes ⬇
        resOption,

        //
        layoutPreset,

        //
        media,

        //
        enableSubTitle,

        //
        number,

        //
        imageUrl,
        imageAlt,

        //
        infoboxIcon,

        //
        flexDirection,

        //
        enableDescription,

        //
        useNumIconBg,

        //
        numIconColor,

        //
        numIconBgType,

        //
        numIconBgColor,

        //
        numIconBgGradient,

        //
        imageId,

        //
        isMediaImgHeightAuto,

        //
        titleTag,
        subTitleTag,

        //
        enableButton,
        isInfoClick,

        //
        buttonText,
        infoboxLink,

        //
        buttonTextColor,
        buttonHvrTextColor,

        //
        titleColor,

        //
        subTitleColor,

        //
        descriptionColor,

        //
        // buttonBgColor,

        //
        mediaAlignment,

        //
        contentsAlignment,
        btnAlignment,

        //
        btnEffect,
        linkNewTab,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    useEffect(() => {
        switch (layoutPreset) {
            case "preset1":
                setAttributes({
                    flexDirection: "column",
                    contentAlignment: "center",
                    mediaAlignSelf: "center",
                });
                break;

            case "preset2":
                setAttributes({
                    flexDirection: "column-reverse",
                    contentAlignment: "center",
                    mediaAlignSelf: "center",
                });
                break;

            case "preset3":
                setAttributes({
                    flexDirection: "row",
                    contentAlignment: "left",
                    mediaAlignSelf: "flex-start",
                });
                break;

            case "preset4":
                setAttributes({
                    flexDirection: "row-reverse",
                    contentAlignment: "right",
                    mediaAlignSelf: "flex-start",
                });
                break;
        }
    }, [layoutPreset]);

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
                                        title={__(
                                            "Infobox Settings",
                                            "essential-blocks"
                                        )}
                                    // initialOpen={false}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Layout Preset ",
                                                "essential-blocks"
                                            )}
                                            value={layoutPreset}
                                            options={LAYOUT_TYPES}
                                            onChange={(layoutPreset) =>
                                                setAttributes({ layoutPreset })
                                            }
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Clickable Infobox",
                                                "essential-blocks"
                                            )}
                                            checked={isInfoClick}
                                            onChange={() =>
                                                setAttributes({
                                                    isInfoClick: !isInfoClick,
                                                })
                                            }
                                        />

                                        {isInfoClick && (
                                            <>
                                                <TextControl
                                                    // id={`info-link-input-${blockId}`}
                                                    label={__(
                                                        "URL (use https:// at the beginning)"
                                                    )}
                                                    placeholder="https://your-link.com"
                                                    value={infoboxLink}
                                                    onChange={(infoboxLink) =>
                                                        setAttributes({
                                                            infoboxLink,
                                                        })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__(
                                                        "Open in New Tab",
                                                        "essential-blocks"
                                                    )}
                                                    checked={linkNewTab}
                                                    onChange={() =>
                                                        setAttributes({
                                                            linkNewTab: !linkNewTab,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}

                                        {!isInfoClick && (
                                            <ToggleControl
                                                label={__(
                                                    "Show button",
                                                    "essential-blocks"
                                                )}
                                                checked={enableButton}
                                                onChange={() =>
                                                    setAttributes({
                                                        enableButton: !enableButton,
                                                    })
                                                }
                                            />
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Alignments",
                                            "essential-blocks"
                                        )}
                                    >
                                        {media !== "none" && (
                                            <>
                                                {(flexDirection === "row" ||
                                                    flexDirection ===
                                                    "row-reverse") && (
                                                        <BaseControl
                                                            id="eb-infobox-alignments"
                                                            label="Media alignments"
                                                        >
                                                            <ButtonGroup id="eb-infobox-alignments">
                                                                {MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(
                                                                    (
                                                                        {
                                                                            value,
                                                                            label,
                                                                        },
                                                                        index
                                                                    ) => (
                                                                        <Button
                                                                            key={
                                                                                index
                                                                            }
                                                                            isSecondary={
                                                                                mediaAlignment !==
                                                                                value
                                                                            }
                                                                            isPrimary={
                                                                                mediaAlignment ===
                                                                                value
                                                                            }
                                                                            onClick={() =>
                                                                                setAttributes(
                                                                                    {
                                                                                        mediaAlignment: value,
                                                                                    }
                                                                                )
                                                                            }
                                                                        >
                                                                            {label}
                                                                        </Button>
                                                                    )
                                                                )}
                                                            </ButtonGroup>
                                                        </BaseControl>
                                                    )}

                                                {(flexDirection === "column" ||
                                                    flexDirection ===
                                                    "column-reverse") && (
                                                        <BaseControl
                                                            id="eb-infobox-alignments"
                                                            label="Media alignments"
                                                        >
                                                            <ButtonGroup id="eb-infobox-alignments">
                                                                {MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(
                                                                    (
                                                                        {
                                                                            value,
                                                                            label,
                                                                        },
                                                                        index
                                                                    ) => (
                                                                        <Button
                                                                            key={
                                                                                index
                                                                            }
                                                                            isSecondary={
                                                                                mediaAlignment !==
                                                                                value
                                                                            }
                                                                            isPrimary={
                                                                                mediaAlignment ===
                                                                                value
                                                                            }
                                                                            onClick={() =>
                                                                                setAttributes(
                                                                                    {
                                                                                        mediaAlignment: value,
                                                                                    }
                                                                                )
                                                                            }
                                                                        >
                                                                            {label}
                                                                        </Button>
                                                                    )
                                                                )}
                                                            </ButtonGroup>
                                                        </BaseControl>
                                                    )}
                                            </>
                                        )}

                                        <BaseControl
                                            id="eb-infobox-alignments"
                                            label="Contents alignments"
                                        >
                                            <ButtonGroup id="eb-infobox-alignments">
                                                {CONTENTS_ALIGNMENTS.map(
                                                    (
                                                        { value, label },
                                                        index
                                                    ) => (
                                                        <Button
                                                            key={index}
                                                            isSecondary={
                                                                contentsAlignment !==
                                                                value
                                                            }
                                                            isPrimary={
                                                                contentsAlignment ===
                                                                value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    contentsAlignment: value,
                                                                })
                                                            }
                                                        >
                                                            {label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>

                                        {enableButton && !isInfoClick && (
                                            <BaseControl
                                                id="eb-infobox-alignments"
                                                label="Button alignments"
                                            >
                                                <ButtonGroup id="eb-infobox-alignments">
                                                    {CONTENTS_ALIGNMENTS.map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                isSecondary={
                                                                    btnAlignment !==
                                                                    value
                                                                }
                                                                isPrimary={
                                                                    btnAlignment ===
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            btnAlignment: value,
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>
                                        )}
                                    </PanelBody>

                                    {enableButton && !isInfoClick && (
                                        <PanelBody
                                            title={__(
                                                "Button",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <DynamicInputControl
                                                label="Button Text"
                                                attrName="buttonText"
                                                inputValue={buttonText}
                                                setAttributes={setAttributes}
                                                onChange={(text) =>
                                                    setAttributes({
                                                        buttonText: text,
                                                    })
                                                }
                                            />

                                            <DynamicInputControl
                                                label={__("Button Link", "essential-blocks")}
                                                placeholder="https://your-site.com"
                                                attrName="infoboxLink"
                                                inputValue={infoboxLink}
                                                setAttributes={setAttributes}
                                                onChange={(text) =>
                                                    setAttributes({
                                                        infoboxLink: text,
                                                    })
                                                }
                                                help={__("Link URL (use https:// at the beginning)", "essential-blocks")}
                                            />

                                            <ToggleControl
                                                label={__(
                                                    "Open in New Tab",
                                                    "essential-blocks"
                                                )}
                                                checked={linkNewTab}
                                                onChange={() =>
                                                    setAttributes({
                                                        linkNewTab: !linkNewTab,
                                                    })
                                                }
                                            />
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Media", "essential-blocks")}
                                    >
                                        <BaseControl id="eb-infobox-image-icon">
                                            <ButtonGroup id="eb-infobox-image-icon">
                                                {MEDIA_TYPES.map(
                                                    (
                                                        { label, value },
                                                        index
                                                    ) => (
                                                        <Button
                                                            key={index}
                                                            isSecondary={
                                                                media !== value
                                                            }
                                                            isPrimary={
                                                                media === value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    media: value,
                                                                })
                                                            }
                                                        >
                                                            {label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>

                                        {media !== "none" && (
                                            <>
                                                {media === "icon" && (
                                                    <EBIconPicker
                                                        value={infoboxIcon}
                                                        onChange={(icon) =>
                                                            setAttributes({
                                                                infoboxIcon: icon,
                                                            })
                                                        }
                                                    />
                                                )}

                                                {media === "icon" &&
                                                    infoboxIcon && (
                                                        <ResponsiveRangeController
                                                            baseLabel={__(
                                                                "Icon Size",
                                                                "essential-blocks"
                                                            )}
                                                            controlName={
                                                                mediaIconSize
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            min={8}
                                                            max={200}
                                                            step={1}
                                                        />
                                                    )}

                                                {media === "number" && (
                                                    <>
                                                        <BaseControl
                                                            label={__(
                                                                "Text",
                                                                "essential-blocks"
                                                            )}
                                                            id="eb-infobox-number-id"
                                                        >
                                                            <input
                                                                type="text"
                                                                value={`${number}`}
                                                                id="eb-infobox-number-id"
                                                                onChange={(e) =>
                                                                    setAttributes(
                                                                        {
                                                                            number: `${e.target.value}`,
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        </BaseControl>

                                                        <TypographyDropdown
                                                            baseLabel="Text Typography"
                                                            typographyPrefixConstant={
                                                                typoPrefix_number
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                        />
                                                    </>
                                                )}

                                                {(media === "number" ||
                                                    media === "icon") && (
                                                        <>
                                                            <ColorControl
                                                                label={__(
                                                                    "Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={numIconColor}
                                                                onChange={(
                                                                    numIconColor
                                                                ) =>
                                                                    setAttributes({
                                                                        numIconColor,
                                                                    })
                                                                }
                                                            />

                                                            <ResponsiveDimensionsControl
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                controlName={
                                                                    mediaBackground
                                                                }
                                                                baseLabel="Padding"
                                                            />

                                                            <ToggleControl
                                                                label={__(
                                                                    "Use Background",
                                                                    "essential-blocks"
                                                                )}
                                                                checked={
                                                                    useNumIconBg
                                                                }
                                                                onChange={() =>
                                                                    setAttributes({
                                                                        useNumIconBg: !useNumIconBg,
                                                                    })
                                                                }
                                                            />

                                                            {useNumIconBg && (
                                                                <>
                                                                    <BaseControl
                                                                        label={__(
                                                                            "Background Type",
                                                                            "essential-blocks"
                                                                        )}
                                                                    >
                                                                        <ButtonGroup id="eb-infobox-infobox-background">
                                                                            {ICON_IMAGE_BG_TYPES.map(
                                                                                (
                                                                                    {
                                                                                        value,
                                                                                        label,
                                                                                    },
                                                                                    index
                                                                                ) => (
                                                                                    <Button
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        isPrimary={
                                                                                            numIconBgType ===
                                                                                            value
                                                                                        }
                                                                                        isSecondary={
                                                                                            numIconBgType !==
                                                                                            value
                                                                                        }
                                                                                        onClick={() =>
                                                                                            setAttributes(
                                                                                                {
                                                                                                    numIconBgType: value,
                                                                                                }
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            label
                                                                                        }
                                                                                    </Button>
                                                                                )
                                                                            )}
                                                                        </ButtonGroup>
                                                                    </BaseControl>

                                                                    {numIconBgType ===
                                                                        "fill" && (
                                                                            <ColorControl
                                                                                label={__(
                                                                                    "Background Color",
                                                                                    "essential-blocks"
                                                                                )}
                                                                                color={
                                                                                    numIconBgColor
                                                                                }
                                                                                onChange={(
                                                                                    numIconBgColor
                                                                                ) =>
                                                                                    setAttributes(
                                                                                        {
                                                                                            numIconBgColor,
                                                                                        }
                                                                                    )
                                                                                }
                                                                            />
                                                                        )}

                                                                    {numIconBgType ===
                                                                        "gradient" && (
                                                                            <PanelBody
                                                                                title={__(
                                                                                    "Gradient",
                                                                                    "essential-blocks"
                                                                                )}
                                                                            // initialOpen={false}
                                                                            >
                                                                                <GradientColorControl
                                                                                    gradientColor={
                                                                                        numIconBgGradient
                                                                                    }
                                                                                    onChange={(
                                                                                        numIconBgGradient
                                                                                    ) =>
                                                                                        setAttributes(
                                                                                            {
                                                                                                numIconBgGradient,
                                                                                            }
                                                                                        )
                                                                                    }
                                                                                />
                                                                            </PanelBody>
                                                                        )}
                                                                </>
                                                            )}
                                                        </>
                                                    )}

                                                {media === "image" &&
                                                    !imageUrl && (
                                                        <MediaUpload
                                                            onSelect={({
                                                                id,
                                                                url,
                                                                alt,
                                                            }) =>
                                                                setAttributes({
                                                                    imageUrl: url,
                                                                    imageId: id,
                                                                    imageAlt: alt,
                                                                })
                                                            }
                                                            type="image"
                                                            value={imageId}
                                                            render={({
                                                                open,
                                                            }) => {
                                                                return (
                                                                    <Button
                                                                        className="eb-background-control-inspector-panel-img-btn components-button"
                                                                        label={__(
                                                                            "Upload Image",
                                                                            "essential-blocks"
                                                                        )}
                                                                        icon="format-image"
                                                                        onClick={
                                                                            open
                                                                        }
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
                                                                setAttributes({
                                                                    imageUrl: null,
                                                                })
                                                            }
                                                        />
                                                        <ResponsiveRangeController
                                                            baseLabel={__(
                                                                "Image Width",
                                                                "essential-blocks"
                                                            )}
                                                            controlName={
                                                                mediaImageWidth
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            units={
                                                                sizeUnitTypes
                                                            }
                                                            min={0}
                                                            max={500}
                                                            step={1}
                                                        />
                                                        <ToggleControl
                                                            label={__(
                                                                "Auto Image Height",
                                                                "essential-blocks"
                                                            )}
                                                            checked={
                                                                isMediaImgHeightAuto
                                                            }
                                                            onChange={() =>
                                                                setAttributes({
                                                                    isMediaImgHeightAuto: !isMediaImgHeightAuto,
                                                                })
                                                            }
                                                        />

                                                        {!isMediaImgHeightAuto && (
                                                            <>
                                                                <ResponsiveRangeController
                                                                    baseLabel={__(
                                                                        "Image Height",
                                                                        "essential-blocks"
                                                                    )}
                                                                    controlName={
                                                                        mediaImageHeight
                                                                    }
                                                                    resRequiredProps={
                                                                        resRequiredProps
                                                                    }
                                                                    units={
                                                                        imgHeightUnits
                                                                    }
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
                                                            baseLabel={__(
                                                                "Media & content spacing",
                                                                "Infobox"
                                                            )}
                                                            controlName={
                                                                mediaContentGap
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            min={0}
                                                            max={500}
                                                            step={1}
                                                            noUnits
                                                        />
                                                    </>
                                                )}

                                                <ResponsiveDimensionsControl
                                                    forBorderRadius
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={mediaBgRadius}
                                                    baseLabel="Border Radius"
                                                />

                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={mediaBgMargin}
                                                    baseLabel="Margin"
                                                />
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Title", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Title Tag",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup className="infobox-button-group">
                                                {HEADER_TAGS.map(
                                                    (header, index) => (
                                                        <Button
                                                            key={index}
                                                            isSecondary={
                                                                titleTag !==
                                                                header
                                                            }
                                                            isPrimary={
                                                                titleTag ===
                                                                header
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    titleTag: header,
                                                                })
                                                            }
                                                        >
                                                            {header.toUpperCase()}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <TypographyDropdown
                                            baseLabel="Typography"
                                            typographyPrefixConstant={
                                                typoPrefix_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={titlePadding}
                                            baseLabel="Title Padding"
                                        />

                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={titleColor}
                                            onChange={(titleColor) =>
                                                setAttributes({ titleColor })
                                            }
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Subtitle",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Enable",
                                                "essential-blocks"
                                            )}
                                            checked={enableSubTitle}
                                            onChange={() =>
                                                setAttributes({
                                                    enableSubTitle: !enableSubTitle,
                                                })
                                            }
                                        />

                                        {enableSubTitle && (
                                            <>
                                                <BaseControl
                                                    label={__(
                                                        "Subtitle Tag",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <ButtonGroup className="infobox-button-group">
                                                        {HEADER_TAGS.map(
                                                            (header, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isSecondary={
                                                                        subTitleTag !==
                                                                        header
                                                                    }
                                                                    isPrimary={
                                                                        subTitleTag ===
                                                                        header
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                subTitleTag: header,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {header.toUpperCase()}
                                                                </Button>
                                                            )
                                                        )}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <TypographyDropdown
                                                    baseLabel="Typography"
                                                    typographyPrefixConstant={
                                                        typoPrefix_subTitle
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />

                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={
                                                        subTitlePadding
                                                    }
                                                    baseLabel="Subtitle Padding"
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={subTitleColor}
                                                    onChange={(subTitleColor) =>
                                                        setAttributes({
                                                            subTitleColor,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Content",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Show content",
                                                "essential-blocks"
                                            )}
                                            checked={enableDescription}
                                            onChange={() =>
                                                setAttributes({
                                                    enableDescription: !enableDescription,
                                                })
                                            }
                                        />

                                        {enableDescription && (
                                            <>
                                                <TypographyDropdown
                                                    baseLabel="Typography"
                                                    typographyPrefixConstant={
                                                        typoPrefix_content
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />

                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={contentPadding}
                                                    baseLabel="Content Padding"
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={descriptionColor}
                                                    onChange={(
                                                        descriptionColor
                                                    ) =>
                                                        setAttributes({
                                                            descriptionColor,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </PanelBody>

                                    {enableButton && !isInfoClick && (
                                        <PanelBody
                                            title={__(
                                                "Button",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            {/* <TextControl
                                                label={__(
                                                    "Button Text",
                                                    "essential-blocks"
                                                )}
                                                value={buttonText}
                                                onChange={(buttonText) =>
                                                    setAttributes({
                                                        buttonText,
                                                    })
                                                }
                                            />

                                            <TextControl
                                                label={__(
                                                    "Link URL (use https:// at the beginning)"
                                                )}
                                                placeholder="https://your-site.com"
                                                value={infoboxLink}
                                                onChange={(infoboxLink) =>
                                                    setAttributes({
                                                        infoboxLink,
                                                    })
                                                }
                                            /> */}

                                            <TypographyDropdown
                                                baseLabel="Typography"
                                                typographyPrefixConstant={
                                                    typoPrefix_buttonText
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />

                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={buttonPadding}
                                                baseLabel="Button Padding"
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Text color",
                                                    "essential-blocks"
                                                )}
                                                color={buttonTextColor}
                                                onChange={(buttonTextColor) =>
                                                    setAttributes({
                                                        buttonTextColor,
                                                    })
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Hover text color",
                                                    "essential-blocks"
                                                )}
                                                color={buttonHvrTextColor}
                                                onChange={(
                                                    buttonHvrTextColor
                                                ) =>
                                                    setAttributes({
                                                        buttonHvrTextColor,
                                                    })
                                                }
                                            />

                                            <PanelBody
                                                title={__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <BackgroundControl
                                                    controlName={infoBtnBg}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    forButton
                                                // noOverlay
                                                // noMainBgi
                                                // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                                                />
                                            </PanelBody>

                                            <PanelBody
                                                title={__("Border & Shadow")}
                                                initialOpen={false}
                                            >
                                                <BorderShadowControl
                                                    controlName={btnBdShd}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                // noShadow
                                                // noBorder
                                                />
                                            </PanelBody>
                                            <PanelBody
                                                title={__(
                                                    "More Effects",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <SelectControl
                                                    label={__(
                                                        "Button Hover Effect",
                                                        "essential-blocks"
                                                    )}
                                                    value={btnEffect}
                                                    options={HOVER_EFFECT}
                                                    // onChange={(preset) => setAttributes({ preset })}
                                                    onChange={(btnEffect) => {
                                                        setAttributes({
                                                            btnEffect,
                                                        });
                                                    }}
                                                />
                                            </PanelBody>

                                            {/* <ResponsiveDimensionsControl
												 resRequiredProps={resRequiredProps}
												 controlName={buttonRadius}
												 baseLabel="Button Border Radius"
											 />


											 <ColorControl
												 label={__("Button Color", "essential-blocks")}
												 color={buttonBgColor}
												 onChange={(buttonBgColor) =>
													 setAttributes({ buttonBgColor })
												 }
											 /> */}
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Margin & Padding",
                                            "essential-blocks"
                                        )}
                                    >
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

                                    <PanelBody
                                        title={__(
                                            "Background",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={infoWrapBg}
                                            resRequiredProps={resRequiredProps}
                                        // noOverlay
                                        // noMainBgi
                                        // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={wrpBdShadow}
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
