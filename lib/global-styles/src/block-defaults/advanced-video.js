/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    TextControl,
    PanelRow,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * External depencencies
 */

const {
    ResponsiveDimensionsControl,
    BorderShadowControl,
    ImageAvatar,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    VIDEO_WIDTH,
    SIZE_UNIT_TYPES,
    VIDEO_BORDER_SHADOW,
    OPTIONS,
    OVERLAY,
    PLAY_ICON_WIDTH,
    LIGHTBOX_WIDTH,
    LIGHTBOX_HEIGHT,
    LIGHTBOX_BORDER_SHADOW,
    CLOSE_ICON_WIDTH,
    STICKY_VIDEO_HEIGHT,
    STICKY_VIDEO_WIDTH,
    PLACEHOLDER_IMAGE_WIDTH,
    PLACEHOLDER_IMAGE_HEIGHT,
    PLACEHOLDER_PLAY_ICON_WIDTH,
    LIGHTBOX_UNIT_TYPES,
    STICKY_POSITION,
} from "../../../../blocks/advanced-video/src/constants";

import objAttributes from "../../../../blocks/advanced-video/src/attributes";

function AdvancedVideo(prpos) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = prpos;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        showBar,
        videoConfig,
        videoOptions,
        imageOverlay,
        previewImage,
        previewImageId,
        customPlayIcon,
        lightboxPlayIcon,
        customPlayIconId,
        customPlayIconURL,
        lightboxBGColor,
        closeIconColor,
        closeIconBgColor,
        placeholderImage,
        placeholderImageId,
        placeholderPlayIconURL,
        placeholderPlayIconId,
        stickyPosition,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                videoSource: "youtube",
                videoURL: "https://www.youtube.com/watch?v=PnZx4ZOMyzI",
                videoLinkYoutube: "",
                videoLinkVimeo: "",
                videoLinkHtml: "",
                showBar: false,
                videoConfig: {
                    autoplay: false,
                    muted: false,
                    loop: false,
                },
                imageOverlay: false,
                previewImage: `${EssentialBlocksLocalize?.image_url}/adv-video-placeholder.jpg`,
                previewImageId: null,

                placeholderImage: `${EssentialBlocksLocalize?.image_url}/adv-video-placeholder.jpg`,
                placeholderImageId: null,
                customPlayIcon: true,
                customPlayIconURL: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/adv-video-playicon.svg",
                customPlayIconId: null,
                placeholderPlayIconURL:
                    EssentialBlocksLocalize?.eb_plugins_url + "assets/images/adv-video-playicon.svg",
                lightboxPlayIcon: true,
                placeholderPlayIconId: null,
                videoOptions: "none",
                image: {
                    id: "",
                    url: "",
                    alt: "",
                },
                selectedImgIndex: "number",
                closeIconColor: "#000000",
                closeIconBgColor: "#ffffff",
                lightboxBGColor: "rgba(0 0 0 / 0.4)",
                textAlign: "center",
                stickyPosition: "right",

                [`${VIDEO_WIDTH}Unit`]: "px",

                [`${VIDEO_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${VIDEO_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${VIDEO_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${VIDEO_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${VIDEO_BORDER_SHADOW}BorderType`]: "normal",
                [`${VIDEO_BORDER_SHADOW}shadowType`]: "normal",

                [`${STICKY_VIDEO_HEIGHT}Unit`]: "px",
                [`${STICKY_VIDEO_WIDTH}Unit`]: "px",
                [`${PLACEHOLDER_IMAGE_WIDTH}Unit`]: "px",
                [`${PLACEHOLDER_IMAGE_HEIGHT}Unit`]: "px",
                [`${PLACEHOLDER_PLAY_ICON_WIDTH}Unit`]: "px",

                [`${PLAY_ICON_WIDTH}Unit`]: "px",
                [`${LIGHTBOX_WIDTH}Unit`]: "px",
                [`${LIGHTBOX_HEIGHT}Unit`]: "px",

                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: true,

                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: true,

                [`${WRAPPER_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}BorderType`]: "normal",
                [`${WRAPPER_BORDER_SHADOW}shadowType`]: "normal",
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
                    <PanelBody title={__("General", "essential-blocks")} initialOpen={true}>
                        {videoOptions != "lightbox" && (
                            <>
                                <ToggleControl
                                    label={__("Autoplay", "essential-blocks")}
                                    checked={videoConfig.autoplay}
                                    onChange={(autoplay) =>
                                        handleBlockDefault({
                                            videoConfig: {
                                                ...videoConfig,
                                                autoplay: autoplay,
                                            },
                                        })
                                    }
                                />
                                {videoConfig.autoplay && (
                                    <PanelRow>
                                        <em>Audio will be muted by default if autoplay is enabled.</em>
                                    </PanelRow>
                                )}

                                <ToggleControl
                                    label={__("Mute", "essential-blocks")}
                                    checked={videoConfig.muted}
                                    onChange={(muted) =>
                                        handleBlockDefault({
                                            videoConfig: {
                                                ...videoConfig,
                                                muted: muted,
                                            },
                                        })
                                    }
                                />
                            </>
                        )}

                        <ToggleControl
                            label={__("Loop", "essential-blocks")}
                            checked={videoConfig.loop}
                            onChange={(loop) =>
                                handleBlockDefault({
                                    videoConfig: {
                                        ...videoConfig,
                                        loop: loop,
                                    },
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Show Controls", "essential-blocks")}
                            checked={showBar}
                            onChange={(showBar) => handleBlockDefault({ showBar })}
                        />

                        {videoOptions != "lightbox" && (
                            <>
                                <Divider />

                                <ToggleControl
                                    label={__("Image Overlay", "essential-blocks")}
                                    checked={imageOverlay}
                                    onChange={(imageOverlay) => handleBlockDefault({ imageOverlay })}
                                />

                                {imageOverlay && (
                                    <>
                                        {!previewImage && (
                                            <MediaUpload
                                                onSelect={({ id, url }) =>
                                                    handleBlockDefault({
                                                        previewImage: url,
                                                        previewImageId: id,
                                                    })
                                                }
                                                type="image"
                                                value={previewImageId}
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
                                        {previewImage && (
                                            <ImageAvatar
                                                imageUrl={previewImage}
                                                onDeleteImage={() =>
                                                    handleBlockDefault({
                                                        previewImage: null,
                                                    })
                                                }
                                            />
                                        )}

                                        <ToggleControl
                                            label={__("Custom Play Icon", "essential-blocks")}
                                            checked={customPlayIcon}
                                            onChange={(customPlayIcon) =>
                                                handleBlockDefault({
                                                    customPlayIcon,
                                                })
                                            }
                                        />

                                        {!customPlayIconURL && customPlayIcon && (
                                            <MediaUpload
                                                onSelect={({ id, url }) =>
                                                    handleBlockDefault({
                                                        customPlayIconURL: url,
                                                        customPlayIconId: id,
                                                    })
                                                }
                                                type="image"
                                                value={customPlayIconId}
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

                                        {customPlayIconURL && customPlayIcon && (
                                            <ImageAvatar
                                                imageUrl={customPlayIconURL}
                                                onDeleteImage={() =>
                                                    handleBlockDefault({
                                                        customPlayIconURL: null,
                                                    })
                                                }
                                            />
                                        )}
                                    </>
                                )}
                            </>
                        )}

                        {videoOptions == "eb-sticky" && (
                            <BaseControl label={__("Sticky Position", "essential-blocks")}>
                                <ButtonGroup>
                                    {STICKY_POSITION.map((item) => (
                                        <Button
                                            // isLarge
                                            isPrimary={stickyPosition === item.value}
                                            isSecondary={stickyPosition !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    stickyPosition: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                        )}

                        {videoOptions == "lightbox" && (
                            <>
                                <PanelRow>Placeholder Image</PanelRow>
                                {!placeholderImage && (
                                    <MediaUpload
                                        onSelect={({ id, url }) =>
                                            handleBlockDefault({
                                                placeholderImage: url,
                                                placeholderImageId: id,
                                            })
                                        }
                                        type="image"
                                        value={placeholderImageId}
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

                                {placeholderImage && (
                                    <ImageAvatar
                                        imageUrl={placeholderImage}
                                        onDeleteImage={() =>
                                            handleBlockDefault({
                                                placeholderImage: null,
                                            })
                                        }
                                    />
                                )}

                                <PanelRow>Play Icon</PanelRow>
                                <ToggleControl
                                    label={__("Show Play Icon", "essential-blocks")}
                                    checked={lightboxPlayIcon}
                                    onChange={(lightboxPlayIcon) => handleBlockDefault({ lightboxPlayIcon })}
                                />
                                {!placeholderPlayIconURL && lightboxPlayIcon && (
                                    <MediaUpload
                                        onSelect={({ id, url }) =>
                                            handleBlockDefault({
                                                placeholderPlayIconURL: url,
                                                placeholderPlayIconId: id,
                                            })
                                        }
                                        type="image"
                                        value={placeholderPlayIconId}
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

                                {placeholderPlayIconURL && lightboxPlayIcon && (
                                    <ImageAvatar
                                        imageUrl={placeholderPlayIconURL}
                                        onDeleteImage={() =>
                                            handleBlockDefault({
                                                placeholderPlayIconURL: null,
                                            })
                                        }
                                    />
                                )}
                            </>
                        )}
                    </PanelBody>
                    {/* Styles */}
                    <PanelBody title={__("Video Styles", "essential-blocks")} initialOpen={false}>
                        {videoOptions != "lightbox" && (
                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={VIDEO_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={1000}
                                step={1}
                                units={SIZE_UNIT_TYPES}
                            />
                        )}

                        {videoOptions == "lightbox" && (
                            <>
                                {lightboxPlayIcon && (
                                    <>
                                        <PanelRow>Play Icon</PanelRow>
                                        <ResponsiveRangeController
                                            baseLabel={__("Size", "essential-blocks")}
                                            controlName={PLACEHOLDER_PLAY_ICON_WIDTH}
                                            resRequiredProps={resRequiredProps}
                                            min={1}
                                            max={400}
                                            step={1}
                                            units={SIZE_UNIT_TYPES}
                                        />
                                    </>
                                )}

                                <PanelRow>Placeholder Image</PanelRow>
                                <ResponsiveRangeController
                                    baseLabel={__("Width", "essential-blocks")}
                                    controlName={PLACEHOLDER_IMAGE_WIDTH}
                                    resRequiredProps={resRequiredProps}
                                    min={1}
                                    max={1000}
                                    step={1}
                                    units={SIZE_UNIT_TYPES}
                                />
                                <ResponsiveRangeController
                                    baseLabel={__("Height", "essential-blocks")}
                                    controlName={PLACEHOLDER_IMAGE_HEIGHT}
                                    resRequiredProps={resRequiredProps}
                                    min={1}
                                    max={1000}
                                    step={1}
                                    units={SIZE_UNIT_TYPES}
                                />

                                <Divider />
                            </>
                        )}

                        <BaseControl>
                            <h3 className="eb-control-title">{__("Border", "essential-blocks")}</h3>
                        </BaseControl>
                        <BorderShadowControl
                            controlName={VIDEO_BORDER_SHADOW}
                            resRequiredProps={resRequiredProps}
                        // noShadow
                        // noBorder
                        />
                    </PanelBody>

                    {imageOverlay && customPlayIcon && (
                        <PanelBody title={__("Image Overlay", "essential-blocks")} initialOpen={false}>
                            <ResponsiveRangeController
                                baseLabel={__("Play Icon Size", "essential-blocks")}
                                controlName={PLAY_ICON_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={400}
                                step={1}
                                units={SIZE_UNIT_TYPES}
                            />
                        </PanelBody>
                    )}
                    {videoOptions == "lightbox" && (
                        <PanelBody title={__("Lightbox", "essential-blocks")}>
                            <PanelRow>Lightbox</PanelRow>
                            <ColorControl
                                label={__("Overlay Color", "essential-blocks")}
                                color={lightboxBGColor}
                                onChange={(backgroundColor) =>
                                    handleBlockDefault({
                                        lightboxBGColor: backgroundColor,
                                    })
                                }
                            />

                            <ResponsiveRangeController
                                baseLabel={__("Content Width", "essential-blocks")}
                                controlName={LIGHTBOX_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={1000}
                                step={1}
                                units={SIZE_UNIT_TYPES}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Content Height", "essential-blocks")}
                                controlName={LIGHTBOX_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={1000}
                                step={1}
                                units={LIGHTBOX_UNIT_TYPES}
                            />
                            <BorderShadowControl
                                controlName={LIGHTBOX_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                                noShadow
                                noBdrHover
                            // noBorder
                            />

                            <PanelRow>Close Icon</PanelRow>
                            <ColorControl
                                label={__("Background Color", "essential-blocks")}
                                color={closeIconBgColor}
                                onChange={(newColor) =>
                                    handleBlockDefault({
                                        closeIconBgColor: newColor,
                                    })
                                }
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={closeIconColor}
                                onChange={(newColor) =>
                                    handleBlockDefault({
                                        closeIconColor: newColor,
                                    })
                                }
                            />

                            <ResponsiveRangeController
                                baseLabel={__("Size (PX)", "essential-blocks")}
                                controlName={CLOSE_ICON_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits
                            />
                        </PanelBody>
                    )}
                    {videoOptions == "eb-sticky" && (
                        <PanelBody title={__("Sticky", "essential-blocks")} initialOpen={false}>
                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={STICKY_VIDEO_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={1000}
                                step={1}
                                units={SIZE_UNIT_TYPES}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Height", "essential-blocks")}
                                controlName={STICKY_VIDEO_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={1000}
                                step={1}
                                units={SIZE_UNIT_TYPES}
                            />

                            <PanelRow>Close Icon</PanelRow>
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={closeIconColor}
                                onChange={(newColor) =>
                                    handleBlockDefault({
                                        closeIconColor: newColor,
                                    })
                                }
                            />

                            <ResponsiveRangeController
                                baseLabel={__("Size", "essential-blocks")}
                                controlName={CLOSE_ICON_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={1000}
                                step={1}
                                units={SIZE_UNIT_TYPES}
                            />
                        </PanelBody>
                    )}

                    {/* Advanced */}
                    <PanelBody title={__("Wrapper Margin & Padding", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={WRAPPER_MARGIN}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={WRAPPER_PADDING}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Background", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} noOverlay />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                        <BorderShadowControl
                            controlName={WRAPPER_BORDER_SHADOW}
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

export default AdvancedVideo;
