/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    TextControl,
    RangeControl,
    BaseControl,
    Button,
    TabPanel,
    __experimentalDivider as Divider,
} from "@wordpress/components";

import objAttributes from "./attributes";

const {
    ColorControl,
    ImageAvatar,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    BorderShadowControl,
    TypographyDropdown,
    AdvancedControls,
} = window.EBControls;

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
} from "./constants";
import {
    typoPrefix_caption,
    typoPrefix_meta,
    typoPrefix_header,
} from "./constants/typographyPrefixConstants";

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
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
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: "general",
                            title: __("General", "essential-blocks"),
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: __("Style", "essential-blocks"),
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: __("Advanced", "essential-blocks"),
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
                                            "Feed Settings",
                                            "essential-blocks"
                                        )}
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
                                                    setAttributes({
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
                                                    setAttributes({
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
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
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
                                                    setAttributes({
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
                                            label={__(
                                                "Layout",
                                                "essential-blocks"
                                            )}
                                            value={layout}
                                            options={LAYOUT}
                                            onChange={(newLayout) =>
                                                setAttributes({
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
                                                    setAttributes({
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
                                                    setAttributes({
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
                                                    onChange={(
                                                        showProfileImg
                                                    ) =>
                                                        setAttributes({
                                                            showProfileImg,
                                                        })
                                                    }
                                                />
                                                {showProfileImg && !profileImg && (
                                                    <MediaUpload
                                                        onSelect={({
                                                            id,
                                                            url,
                                                        }) =>
                                                            setAttributes({
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
                                                                    onClick={
                                                                        open
                                                                    }
                                                                />
                                                            );
                                                        }}
                                                    />
                                                )}
                                                {showProfileImg && profileImg && (
                                                    <ImageAvatar
                                                        imageUrl={profileImg}
                                                        onDeleteImage={() =>
                                                            setAttributes({
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
                                                    onChange={(
                                                        showProfileName
                                                    ) =>
                                                        setAttributes({
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
                                                        onChange={(
                                                            newProfileName
                                                        ) =>
                                                            setAttributes({
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
                                                    setAttributes({
                                                        showCaptions,
                                                    })
                                                }
                                            />
                                        )}
                                        <ToggleControl
                                            label={__(
                                                "Show Link?",
                                                "essential-blocks"
                                            )}
                                            checked={enableLink}
                                            onChange={(enableLink) =>
                                                setAttributes({ enableLink })
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
                                                    setAttributes({
                                                        openInNewTab,
                                                    })
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
                                                    setAttributes({ showMeta })
                                                }
                                            />
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Feed Styles",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <>
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                className=""
                                                controlName={GRID_GAP}
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />
                                            {layout === "overlay" && (
                                                <ColorControl
                                                    label={__(
                                                        "Overlay Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={overlayColor}
                                                    onChange={(overlayColor) =>
                                                        setAttributes({
                                                            overlayColor,
                                                        })
                                                    }
                                                />
                                            )}
                                            <BaseControl>
                                                <h3 className="eb-control-title">
                                                    {__(
                                                        "Border",
                                                        "essential-blocks"
                                                    )}
                                                </h3>
                                            </BaseControl>
                                            <BorderShadowControl
                                                controlName={IMAGE_BORDER}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                noShadow
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Caption",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <>
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_caption
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={captionColor}
                                                onChange={(captionColor) =>
                                                    setAttributes({
                                                        captionColor,
                                                    })
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Meta", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <>
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_meta
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={metaColor}
                                                onChange={(metaColor) =>
                                                    setAttributes({ metaColor })
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                    {layout === "card" && (
                                        <PanelBody
                                            title={__(
                                                "Header",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <>
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        typoPrefix_header
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={headerColor}
                                                    onChange={(headerColor) =>
                                                        setAttributes({
                                                            headerColor,
                                                        })
                                                    }
                                                />
                                            </>
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody>
                                        <>
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={WRAPPER_PADDING}
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={WRAPPER_MARGIN}
                                                baseLabel={__(
                                                    "Margin",
                                                    "essential-blocks"
                                                )}
                                            />
                                        </>
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
};

export default Inspector;
