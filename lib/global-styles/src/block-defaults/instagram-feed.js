/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    ToggleControl,
    TextareaControl,
    SelectControl,
    TextControl,
    RangeControl,
    BaseControl,
    Button,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * External depencencies
 */

const {
    ColorControl,
    ImageAvatar,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    BorderShadowControl,
    TypographyDropdown,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    CARD_STYLE,
    LAYOUT,
    OVERLAY_STYLE,
    NUMBER_OF_COLUMNS,
    SORT_OPTIONS,
    GRID_GAP,
    IMAGE_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
} from "../../../../blocks/instagram-feed/src/constants";

import {
    typoPrefix_caption,
    typoPrefix_meta,
    typoPrefix_header,
} from "../../../../blocks/instagram-feed/src/constants/typographyPrefixConstants";

import objAttributes from "../../../../blocks/instagram-feed/src/attributes";

function InstagramFeed(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        token,
        layout,
        overlayStyle,
        cardStyle,
        thumbs,
        numberOfImages,
        captionColor,
        metaColor,
        headerColor,
        overlayColor,
        hasEqualImages,
        showCaptions,
        enableLink,
        openInNewTab,
        showProfileImg,
        profileImg,
        imageID,
        showProfileName,
        profileName,
        sortBy,
        showMeta,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                token: "",
                layout: "overlay",
                overlayStyle: "overlay__simple",
                cardStyle: "content__outter",
                columns: 4,
                numberOfImages: 6,
                thumbs: [],
                preview: false,
                captionColor: "",
                metaColor: "",
                headerColor: "",
                overlayColor: "",
                hasEqualImages: true,
                showCaptions: true,
                enableLink: false,
                openInNewTab: false,
                showProfileImg: true,
                profileImg: "",
                imageID: null,
                showProfileName: true,
                profileName: "",
                sortBy: "most_recent",
                showMeta: true,

                [`${NUMBER_OF_COLUMNS}Unit`]: "px",

                [`${GRID_GAP}Unit`]: "px",
                [`${GRID_GAP}isLinked`]: true,

                [`${IMAGE_BORDER}Bdr_Unit`]: "px",
                [`${IMAGE_BORDER}Bdr_isLinked`]: true,
                [`${IMAGE_BORDER}Rds_Unit`]: "px",
                [`${IMAGE_BORDER}Rds_isLinked`]: true,
                [`${IMAGE_BORDER}BorderType`]: "normal",
                [`${IMAGE_BORDER}shadowType`]: "normal",

                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: true,

                [`${WRAPPER_MARGIN}Top`]: 28,
                [`${WRAPPER_MARGIN}Bottom`]: 28,
                [`${WRAPPER_MARGIN}Right`]: 0,
                [`${WRAPPER_MARGIN}Left`]: 0,
                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: false,
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
                    {thumbs.length > 0 && (
                        <>
                            <PanelBody
                                title={__("Feed Settings", "essential-blocks")}
                                intialOpen={true}
                            >
                                <>
                                    <SelectControl
                                        label={__(
                                            "Sort By",
                                            "essential-blocks"
                                        )}
                                        value={sortBy}
                                        options={SORT_OPTIONS}
                                        onChange={(newSortBy) =>
                                            handleBlockDefault({
                                                sortBy: newSortBy,
                                            })
                                        }
                                    />
                                    <RangeControl
                                        label={__(
                                            "Number Of Images",
                                            "essential-blocks"
                                        )}
                                        value={numberOfImages}
                                        onChange={(numberOfImages) => {
                                            handleBlockDefault({
                                                numberOfImages,
                                            });
                                        }}
                                        min={1}
                                        max={100}
                                    />
                                    <ResponsiveRangeController
                                        baseLabel={__(
                                            "Columns",
                                            "essential-blocks"
                                        )}
                                        controlName={NUMBER_OF_COLUMNS}
                                        resRequiredProps={resRequiredProps}
                                        min={1}
                                        max={8}
                                        step={1}
                                        noUnits
                                    />
                                    <ToggleControl
                                        label={__(
                                            "Square thumbnail",
                                            "essential-blocks"
                                        )}
                                        checked={hasEqualImages}
                                        onChange={(hasEqualImages) =>
                                            handleBlockDefault({
                                                hasEqualImages,
                                            })
                                        }
                                    />
                                </>
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "General Settings",
                                    "essential-blocks"
                                )}
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__("Layout", "essential-blocks")}
                                    value={layout}
                                    options={LAYOUT}
                                    onChange={(newLayout) =>
                                        handleBlockDefault({
                                            layout: newLayout,
                                        })
                                    }
                                />
                                {layout === "overlay" && (
                                    <SelectControl
                                        label={__(
                                            "Overlay Style",
                                            "essential-blocks"
                                        )}
                                        value={overlayStyle}
                                        options={OVERLAY_STYLE}
                                        onChange={(newOverlayStyle) =>
                                            handleBlockDefault({
                                                overlayStyle: newOverlayStyle,
                                            })
                                        }
                                    />
                                )}
                                {layout === "card" && (
                                    <SelectControl
                                        label={__(
                                            "Card Style",
                                            "essential-blocks"
                                        )}
                                        value={cardStyle}
                                        options={CARD_STYLE}
                                        onChange={(newCardStyle) =>
                                            handleBlockDefault({
                                                cardStyle: newCardStyle,
                                            })
                                        }
                                    />
                                )}
                                {layout === "card" && (
                                    <>
                                        <Divider />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "User info",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ToggleControl
                                            label={__(
                                                "Show profile image",
                                                "essential-blocks"
                                            )}
                                            checked={showProfileImg}
                                            onChange={(showProfileImg) =>
                                                handleBlockDefault({
                                                    showProfileImg,
                                                })
                                            }
                                        />
                                        {showProfileImg && !profileImg && (
                                            <MediaUpload
                                                onSelect={({ id, url }) =>
                                                    handleBlockDefault({
                                                        profileImg: url,
                                                        imageID: id,
                                                    })
                                                }
                                                type="image"
                                                value={imageID}
                                                render={({ open }) => {
                                                    return (
                                                        <Button
                                                            className="eb-background-control-inspector-panel-img-btn components-button"
                                                            label={__(
                                                                "Upload Image",
                                                                "essential-blocks"
                                                            )}
                                                            icon="format-image"
                                                            onClick={open}
                                                        />
                                                    );
                                                }}
                                            />
                                        )}
                                        {showProfileImg && profileImg && (
                                            <ImageAvatar
                                                imageUrl={profileImg}
                                                onDeleteImage={() =>
                                                    handleBlockDefault({
                                                        profileImg: null,
                                                    })
                                                }
                                            />
                                        )}
                                        <ToggleControl
                                            label={__(
                                                "Show profile name",
                                                "essential-blocks"
                                            )}
                                            checked={showProfileName}
                                            onChange={(showProfileName) =>
                                                handleBlockDefault({
                                                    showProfileName,
                                                })
                                            }
                                        />
                                        {showProfileName && (
                                            <TextControl
                                                label={__(
                                                    "Custom Name",
                                                    "essential-blocks"
                                                )}
                                                value={profileName}
                                                onChange={(newProfileName) =>
                                                    handleBlockDefault({
                                                        profileName: newProfileName,
                                                    })
                                                }
                                            />
                                        )}
                                    </>
                                )}
                                {overlayStyle !== "overlay__simple" && (
                                    <ToggleControl
                                        label={__(
                                            "Show captions",
                                            "essential-blocks"
                                        )}
                                        checked={showCaptions}
                                        onChange={(showCaptions) =>
                                            handleBlockDefault({ showCaptions })
                                        }
                                    />
                                )}
                                <ToggleControl
                                    label={__("Show Link?", "essential-blocks")}
                                    checked={enableLink}
                                    onChange={(enableLink) =>
                                        handleBlockDefault({ enableLink })
                                    }
                                />
                                {enableLink && (
                                    <ToggleControl
                                        label={__(
                                            "Open in new window?",
                                            "essential-blocks"
                                        )}
                                        checked={openInNewTab}
                                        onChange={(openInNewTab) =>
                                            handleBlockDefault({ openInNewTab })
                                        }
                                    />
                                )}
                                {overlayStyle !== "overlay__simple" && (
                                    <ToggleControl
                                        label={__(
                                            "Show Meta?",
                                            "instagram-block"
                                        )}
                                        checked={showMeta}
                                        onChange={(showMeta) =>
                                            handleBlockDefault({ showMeta })
                                        }
                                    />
                                )}
                            </PanelBody>
                        </>
                    )}
                    {/* Styles */}
                    <PanelBody
                        title={__("Feed Styles", "essential-blocks")}
                        initialOpen={true}
                    >
                        <>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                className=""
                                controlName={GRID_GAP}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            {layout === "overlay" && (
                                <ColorControl
                                    label={__(
                                        "Overlay Color",
                                        "essential-blocks"
                                    )}
                                    color={overlayColor}
                                    onChange={(overlayColor) =>
                                        handleBlockDefault({ overlayColor })
                                    }
                                />
                            )}
                            <BaseControl>
                                <h3 className="eb-control-title">
                                    {__("Border", "essential-blocks")}
                                </h3>
                            </BaseControl>
                            <BorderShadowControl
                                controlName={IMAGE_BORDER}
                                resRequiredProps={resRequiredProps}
                                noShadow
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Caption Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_caption}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={captionColor}
                                onChange={(captionColor) =>
                                    handleBlockDefault({ captionColor })
                                }
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Meta Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_meta}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={metaColor}
                                onChange={(metaColor) =>
                                    handleBlockDefault({ metaColor })
                                }
                            />
                        </>
                    </PanelBody>
                    {layout === "card" && (
                        <PanelBody
                            title={__("Header Styles", "essential-blocks")}
                            initialOpen={false}
                        >
                            <>
                                <TypographyDropdown
                                    baseLabel={__(
                                        "Typography",
                                        "essential-blocks"
                                    )}
                                    typographyPrefixConstant={typoPrefix_header}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={headerColor}
                                    onChange={(headerColor) =>
                                        handleBlockDefault({ headerColor })
                                    }
                                />
                            </>
                        </PanelBody>
                    )}
                    {/* Advanced */}
                    <PanelBody
                        title={__(
                            "Wrapper Margin & Padding",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
                        <>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={WRAPPER_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={WRAPPER_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                        </>
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default InstagramFeed;
