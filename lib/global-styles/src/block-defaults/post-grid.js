/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    PanelRow,
    SelectControl,
    ToggleControl,
    TextControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    RangeControl,
} from "@wordpress/components";
import { select, useSelect, withSelect } from "@wordpress/data";

/**
 * External Dependencies
 */
import Select2 from "react-select";

/**
 * Internal depencencies
 */
import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    COLUMNS,
    COLUMN_GAP,
    COLUMN_PADDING,
    COLUMN_BG,
    COLUMN_BORDER_SHADOW,
    THUMBNAIL_IMAGE_SIZE,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_MARGIN,
    TITLE_MARGIN,
    CONTENT_MARGIN,
    READMORE_MARGIN,
    READMORE_PADDING,
    HEADER_META_MARGIN,
    FOOTER_META_MARGIN,
    HEADER_META_SPACE,
    FOOTER_META_SPACE,
    AVATAR_BORDER_RADIUS,
    COLUMN_MEDIA_WIDTH,
    UNIT_TYPES,
    HEIGHT_UNIT_TYPES,
    NORMAL_HOVER,
    NORMAL_HOVER_ACTIVE,
    PRESETS,
    TEXT_ALIGN,
    TITLE_TAGS,
    CONTENT_POSITION,
    VERTICAL_POSITION,
    LOADMORE_PADDING,
    LOADMORE_MARGIN,
    LOADMORE_BORDER_SHADOW,
    FILTER_MARGIN,
    FILTER_ITEM_PADDING,
    FILTER_ITEM_BORDER_SHADOW,
    FILTER_ITEM_GAP,
} from "../../../../blocks/post-grid/src/constants/constants";
import {
    EBPG_TITLE_TYPOGRAPHY,
    EBPG_CONTENT_TYPOGRAPHY,
    EBPG_READMORE_TYPOGRAPHY,
    EBPG_META_TYPOGRAPHY,
    EBPG_LOAD_MORE_TYPOGRAPHY,
    FILTER_ITEM_TYPOGRAPHY,
} from "../../../../blocks/post-grid/src/constants/typographyPrefixConstants";

import objAttributes from "../../../../blocks/post-grid/src/attributes";
const {
    ColorControl,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    CustomQuery,
    MorePosts,
    AdvancedControls,
    ebImageSizes,
    EbImageSizeSelector,
} = window.EBControls;

function PostGrid(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        preset,
        queryData,
        queryResults,
        postTerms,
        loadMoreOptions,
        showThumbnail,
        thumbnailOverlayColor,
        thumbnailOverlayHoverColor,
        thumbnailSize,
        showTitle,
        titleColor,
        titleHoverColor,
        titleColorStyle,
        titleLength,
        titleTextAlign,
        titleTag,
        showContent,
        contentColor,
        contentTextAlign,
        contentLength,
        expansionIndicator,
        showReadMore,
        readmoreText,
        readmoreColor,
        readmoreBGColor,
        readmoreTextAlign,
        readmoreHoverColor,
        readmoreBGHoverColor,
        readmoreColorType,
        showMeta,
        headerMeta,
        footerMeta,
        headerMetaTextAlign,
        footerMetaTextAlign,
        metaColorType,
        authorMetaColor,
        authorMetaHoverColor,
        commonMetaColor,
        commonMetaHoverColor,
        commonMetaBgColor,
        commonMetaBgHoverColor,
        categoryMetaColor,
        categoryMetaHoverColor,
        categoryMetaBgColor,
        categoryMetaBgHoverColor,
        tagMetaColor,
        tagMetaHoverColor,
        tagMetaBgColor,
        tagMetaBgHoverColor,
        dateMetaColor,
        styleVerticalAlignment,
        loadMoreColorType,
        loadMoreColor,
        loadMoreBgColor,
        loadMoreHoverColor,
        loadMoreHoverBgColor,
        loadMoreActiveColor,
        loadMoreActiveBgColor,
        ReadTimeMetaColor,
        showTaxonomyFilter,
        selectedTaxonomy,
        selectedTaxonomyItems,
        filterColorStyle,
        filterBgColor,
        filterTextColor,
        filterActiveBgColor,
        filterActiveTextColor,
        filterHoverBgColor,
        filterHoverTextColor,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                postTerms: {},
                preset: "style-1",
                showThumbnail: true,
                thumbnailOverlayColor: "rgba(0 0 0 / 0)",
                thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.5)",
                styleVerticalAlignment: "flex-start",
                showTitle: true,
                titleColor: "#333333",
                titleHoverColor: "#333333",
                titleColorStyle: "normal",
                titleTextAlign: "left",
                titleTag: "h2",
                showContent: true,
                contentColor: "#333333",
                contentTextAlign: "left",
                contentLength: 20,
                expansionIndicator: "...",
                showReadMore: false,
                readmoreText: "Read More",
                readmoreColor: "#3d8fd4",
                readmoreTextAlign: "left",
                readmoreHoverColor: "#333333",
                readmoreColorType: "normal",
                showMeta: true,
                headerMeta: '[{"value":"category","label":"Categories"}]',
                footerMeta:
                    '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"},{"value":"date","label":"Published Date"}]',
                headerMetaTextAlign: "left",
                footerMetaTextAlign: "left",
                authorMetaColor: "#3d8fd4",
                authorMetaHoverColor: "#549edc",
                metaColorType: "normal",
                commonMetaColor: "#ffffff",
                commonMetaHoverColor: "#ffffff",
                commonMetaBgColor: "#c668f2",
                commonMetaBgHoverColor: "#ac61d0",
                categoryMetaColor: "#ffffff",
                categoryMetaHoverColor: "#ffffff",
                categoryMetaBgColor: "#d18df1",
                categoryMetaBgHoverColor: "#ac61d0",
                tagMetaColor: "#ffffff",
                tagMetaHoverColor: "#ffffff",
                tagMetaBgColor: "#3f6ddc",
                tagMetaBgHoverColor: "#2d59c3",
                dateMetaColor: "#9e9e9e",
                loadMoreColorType: "normal",
                loadMoreColor: "#333333",
                loadMoreBgColor: "#e3e3e3",
                loadMoreHoverColor: "#ffffff",
                loadMoreHoverBgColor: "#d18df1",
                loadMoreActiveColor: "#ffffff",
                loadMoreActiveBgColor: "#d18df1",
                ReadTimeMetaColor: "#333333",
                showTaxonomyFilter: false,
                selectedTaxonomyItems: '[{"value":"all","label":"All"}]',
                filterColorStyle: "normal",
                filterBgColor: "#ffffff",
                filterTextColor: "#b469d7",
                filterActiveBgColor: "#d18df1",
                filterActiveTextColor: "#ffffff",
                filterHoverBgColor: "#d18df1",
                filterHoverTextColor: "#ffffff",
                [`${COLUMNS}Range`]: 3,
                [`${COLUMN_GAP}Unit`]: "px",
                [`${COLUMN_GAP}Range`]: 10,
                [`${THUMBNAIL_IMAGE_SIZE}Unit`]: "px",
                [`${THUMBNAIL_IMAGE_SIZE}Range`]: 250,
                [`${COLUMN_PADDING}Unit`]: "px",
                [`${COLUMN_PADDING}isLinked`]: true,
                [`${COLUMN_PADDING}Top`]: 0,
                [`${COLUMN_PADDING}Bottom`]: 0,
                [`${COLUMN_PADDING}Left`]: 0,
                [`${COLUMN_PADDING}Right`]: 0,
                [`${COLUMN_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${COLUMN_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${COLUMN_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${COLUMN_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${COLUMN_BORDER_SHADOW}BorderType`]: "normal",
                [`${COLUMN_BORDER_SHADOW}shadowType`]: "normal",
                [`${THUMBNAIL_BORDER_RADIUS}Bdr_Unit`]: "px",
                [`${THUMBNAIL_BORDER_RADIUS}Bdr_isLinked`]: true,
                [`${THUMBNAIL_BORDER_RADIUS}Rds_Unit`]: "px",
                [`${THUMBNAIL_BORDER_RADIUS}Rds_isLinked`]: true,
                [`${THUMBNAIL_BORDER_RADIUS}BorderType`]: "normal",
                [`${THUMBNAIL_MARGIN}Unit`]: "px",
                [`${THUMBNAIL_MARGIN}isLinked`]: true,
                [`${THUMBNAIL_MARGIN}Top`]: 0,
                [`${THUMBNAIL_MARGIN}Right`]: 0,
                [`${THUMBNAIL_MARGIN}Bottom`]: 10,
                [`${THUMBNAIL_MARGIN}Left`]: 0,
                [`${TITLE_MARGIN}Unit`]: "px",
                [`${TITLE_MARGIN}isLinked`]: true,
                [`${TITLE_MARGIN}Top`]: 0,
                [`${TITLE_MARGIN}Right`]: 0,
                [`${TITLE_MARGIN}Bottom`]: 10,
                [`${TITLE_MARGIN}Left`]: 0,
                [`${CONTENT_MARGIN}Unit`]: "px",
                [`${CONTENT_MARGIN}isLinked`]: true,
                [`${CONTENT_MARGIN}Top`]: 0,
                [`${CONTENT_MARGIN}Right`]: 0,
                [`${CONTENT_MARGIN}Bottom`]: 10,
                [`${CONTENT_MARGIN}Left`]: 0,
                [`${HEADER_META_SPACE}Unit`]: "px",
                [`${HEADER_META_SPACE}Range`]: 10,
                [`${FOOTER_META_SPACE}Unit`]: "px",
                [`${FOOTER_META_SPACE}Range`]: 10,
                [`${FOOTER_META_MARGIN}Unit`]: "px",
                [`${FOOTER_META_MARGIN}isLinked`]: true,
                [`${FOOTER_META_MARGIN}Top`]: 0,
                [`${FOOTER_META_MARGIN}Right`]: 0,
                [`${FOOTER_META_MARGIN}Bottom`]: 10,
                [`${FOOTER_META_MARGIN}Left`]: 0,
                [`${AVATAR_BORDER_RADIUS}Unit`]: "px",
                [`${AVATAR_BORDER_RADIUS}isLinked`]: true,
                [`${AVATAR_BORDER_RADIUS}Top`]: 50,
                [`${AVATAR_BORDER_RADIUS}Right`]: 50,
                [`${AVATAR_BORDER_RADIUS}Bottom`]: 50,
                [`${AVATAR_BORDER_RADIUS}Left`]: 50,
                [`${LOADMORE_MARGIN}Unit`]: "px",
                [`${LOADMORE_MARGIN}isLinked`]: true,
                [`${LOADMORE_MARGIN}Top`]: 10,
                [`${LOADMORE_MARGIN}Right`]: 5,
                [`${LOADMORE_MARGIN}Bottom`]: 10,
                [`${LOADMORE_MARGIN}Left`]: 5,
                [`${LOADMORE_PADDING}Unit`]: "px",
                [`${LOADMORE_PADDING}isLinked`]: true,
                [`${LOADMORE_PADDING}Top`]: 5,
                [`${LOADMORE_PADDING}Right`]: 10,
                [`${LOADMORE_PADDING}Bottom`]: 5,
                [`${LOADMORE_PADDING}Left`]: 10,
                [`${LOADMORE_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${LOADMORE_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${LOADMORE_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${LOADMORE_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${LOADMORE_BORDER_SHADOW}BorderType`]: "normal",
                [`${LOADMORE_BORDER_SHADOW}shadowType`]: "normal",
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

    const [metaOptions, setMetaOptions] = useState([]);

    useEffect(() => {
        const meta = [
            { value: "date", label: "Published Date" },
            { value: "author", label: "Author Name" },
            { value: "avatar", label: "Author Avatar" },
            { value: "readtime", label: "Read Time" },
        ];

        if (postTerms && Object.keys(postTerms).length > 0) {
            Object.keys(postTerms).map((term) => {
                meta.push(postTerms[term]);
            });
        }
        //Set Meta Options
        setMetaOptions(meta);
    }, [postTerms]);

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody title={__("Layout Style", "essential-blocks")} initialOpen={true}>
                        <ResponsiveRangeController
                            baseLabel={__("Columns", "essential-blocks")}
                            controlName={COLUMNS}
                            resRequiredProps={resRequiredProps}
                            units={[]}
                            min={1}
                            max={6}
                            step={1}
                        />

                        <ResponsiveRangeController
                            baseLabel={__("Column Gap", "essential-blocks")}
                            controlName={COLUMN_GAP}
                            resRequiredProps={resRequiredProps}
                            units={UNIT_TYPES}
                            min={1}
                            max={100}
                            step={1}
                        />

                        <ToggleControl
                            label={__("Show Thumbnail?")}
                            checked={showThumbnail}
                            onChange={() => {
                                handleBlockDefault({
                                    showThumbnail: !showThumbnail,
                                });
                            }}
                        />

                        {showThumbnail && (
                            <>
                                <ResponsiveRangeController
                                    baseLabel={__("Thumbnail Height", "essential-blocks")}
                                    controlName={THUMBNAIL_IMAGE_SIZE}
                                    resRequiredProps={resRequiredProps}
                                    units={HEIGHT_UNIT_TYPES}
                                    min={1}
                                    max={500}
                                    step={1}
                                />
                                {preset === "style-4" && (
                                    <ResponsiveRangeController
                                        baseLabel={__("Thumbnail Width", "essential-blocks")}
                                        controlName={COLUMN_MEDIA_WIDTH}
                                        resRequiredProps={resRequiredProps}
                                        units={[{ label: "%", value: "%" }]}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                )}

                                <EbImageSizeSelector
                                    attrname={"thumbnailSize"}
                                    resRequiredProps={resRequiredProps}
                                    handleBlockDefault={handleBlockDefault}
                                />
                            </>
                        )}

                        {(preset === "style-4" || preset === "style-5") && (
                            <BaseControl
                                label={__("Content Vertical Alignment", "essential-blocks")}
                                id="essential-blocks"
                            >
                                <ButtonGroup id="essential-blocks">
                                    {VERTICAL_POSITION.map((item, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={styleVerticalAlignment === item.value}
                                            isSecondary={styleVerticalAlignment !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    styleVerticalAlignment: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                        )}

                        <ToggleControl
                            label={__("Show Title?")}
                            checked={showTitle}
                            onChange={() => {
                                handleBlockDefault({ showTitle: !showTitle });
                            }}
                        />

                        {showTitle && (
                            <>
                                <SelectControl
                                    label={__("Title Tag", "essential-blocks")}
                                    value={titleTag}
                                    options={TITLE_TAGS}
                                    onChange={(value) => {
                                        handleBlockDefault({ titleTag: value });
                                    }}
                                />

                                <RangeControl
                                    label="Title Words"
                                    value={titleLength}
                                    onChange={(value) =>
                                        handleBlockDefault({
                                            titleLength: value,
                                        })
                                    }
                                    min={-1}
                                    max={100}
                                    allowReset={true}
                                />
                            </>
                        )}

                        <ToggleControl
                            label={__("Show Excerpt?")}
                            checked={showContent}
                            onChange={() => {
                                handleBlockDefault({
                                    showContent: !showContent,
                                });
                            }}
                        />

                        {showContent && (
                            <>
                                <RangeControl
                                    label="Excerpt Words"
                                    value={contentLength}
                                    onChange={(value) =>
                                        handleBlockDefault({
                                            contentLength: value,
                                        })
                                    }
                                    min={-1}
                                    max={100}
                                    allowReset={true}
                                />

                                <TextControl
                                    label="Expansion Indicator"
                                    type={"text"}
                                    value={expansionIndicator}
                                    onChange={(text) =>
                                        handleBlockDefault({
                                            expansionIndicator: text,
                                        })
                                    }
                                />
                            </>
                        )}

                        <ToggleControl
                            label={__("Show Read More Button?")}
                            checked={showReadMore}
                            onChange={() => {
                                handleBlockDefault({
                                    showReadMore: !showReadMore,
                                });
                            }}
                        />

                        {showReadMore && (
                            <>
                                <TextControl
                                    label="Button Text"
                                    type={"text"}
                                    value={readmoreText}
                                    onChange={(text) =>
                                        handleBlockDefault({
                                            readmoreText: text,
                                        })
                                    }
                                />
                            </>
                        )}

                        <ToggleControl
                            label={__("Show Meta?")}
                            checked={showMeta}
                            onChange={() => {
                                handleBlockDefault({ showMeta: !showMeta });
                            }}
                        />

                        {showMeta && (
                            <>
                                <div className="eb-control-item-wrapper">
                                    <PanelRow>Header Meta</PanelRow>
                                    <Select2
                                        name="select-header-meta"
                                        value={headerMeta.length > 0 ? JSON.parse(headerMeta) : ""}
                                        onChange={(selected) =>
                                            handleBlockDefault({
                                                headerMeta: JSON.stringify(selected),
                                            })
                                        }
                                        options={metaOptions}
                                        isMulti="true"
                                    />
                                </div>

                                <div className="eb-control-item-wrapper">
                                    <PanelRow>Footer Meta</PanelRow>
                                    <Select2
                                        name="select-footer-meta"
                                        value={footerMeta.length > 0 ? JSON.parse(footerMeta) : ""}
                                        onChange={(selected) =>
                                            handleBlockDefault({
                                                footerMeta: JSON.stringify(selected),
                                            })
                                        }
                                        options={metaOptions}
                                        isMulti="true"
                                    />
                                </div>
                            </>
                        )}
                    </PanelBody>
                    <MorePosts
                        loadMoreOptions={loadMoreOptions}
                        queryData={queryData}
                        setAttributes={handleBlockDefault}
                        initialOpen={false}
                    />
                    <PanelBody title={__("Columns Style", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={COLUMN_PADDING}
                            baseLabel="Padding"
                        />
                        <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl controlName={COLUMN_BG} resRequiredProps={resRequiredProps} noOverlay />
                        </PanelBody>
                        <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={COLUMN_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                                // noShadow
                                // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                    {showThumbnail && (
                        <PanelBody title={__("Thumbnail Style", "essential-blocks")} initialOpen={false}>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={THUMBNAIL_BORDER_RADIUS}
                                baseLabel="Border Radius"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={THUMBNAIL_MARGIN}
                                baseLabel="Margin"
                            />
                            <ColorControl
                                label={__("Overlay Color", "essential-blocks")}
                                color={thumbnailOverlayColor}
                                onChange={(color) =>
                                    handleBlockDefault({
                                        thumbnailOverlayColor: color,
                                    })
                                }
                            />
                            <ColorControl
                                label={__("Overlay Hover Color", "essential-blocks")}
                                color={thumbnailOverlayHoverColor}
                                onChange={(color) =>
                                    handleBlockDefault({
                                        thumbnailOverlayHoverColor: color,
                                    })
                                }
                            />
                        </PanelBody>
                    )}
                    {showTitle && (
                        <PanelBody title={__("Title Style", "essential-blocks")} initialOpen={false}>
                            <ButtonGroup className="eb-inspector-btn-group">
                                {NORMAL_HOVER.map((item, index) => (
                                    <Button
                                        key={index}
                                        // isLarge
                                        isPrimary={titleColorStyle === item.value}
                                        isSecondary={titleColorStyle !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                titleColorStyle: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            {titleColorStyle === "normal" && (
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={titleColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            titleColor: newColor,
                                        })
                                    }
                                />
                            )}

                            {titleColorStyle === "hover" && (
                                <ColorControl
                                    label={__("Hover Color", "essential-blocks")}
                                    color={titleHoverColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            titleHoverColor: newColor,
                                        })
                                    }
                                />
                            )}
                            <BaseControl label={__("Alignment", "essential-blocks")} id="essential-blocks">
                                <ButtonGroup id="essential-blocks">
                                    {TEXT_ALIGN.map((item, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={titleTextAlign === item.value}
                                            isSecondary={titleTextAlign !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    titleTextAlign: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={EBPG_TITLE_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={TITLE_MARGIN}
                                baseLabel="Margin"
                            />
                        </PanelBody>
                    )}
                    {showContent && (
                        <PanelBody title={__("Excerpt Style", "essential-blocks")} initialOpen={false}>
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={contentColor}
                                onChange={(color) => handleBlockDefault({ contentColor: color })}
                            />
                            <BaseControl label={__("Alignment", "essential-blocks")} id="essential-blocks">
                                <ButtonGroup id="essential-blocks">
                                    {TEXT_ALIGN.map((item, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={contentTextAlign === item.value}
                                            isSecondary={contentTextAlign !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    contentTextAlign: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={EBPG_CONTENT_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={CONTENT_MARGIN}
                                baseLabel="Margin"
                            />
                        </PanelBody>
                    )}
                    {showReadMore && (
                        <PanelBody title={__("Read More Button", "essential-blocks")} initialOpen={false}>
                            <ButtonGroup className="eb-inspector-btn-group">
                                {NORMAL_HOVER.map((item, index) => (
                                    <Button
                                        key={index}
                                        // isLarge
                                        isPrimary={readmoreColorType === item.value}
                                        isSecondary={readmoreColorType !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                readmoreColorType: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            {readmoreColorType === "normal" && (
                                <>
                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={readmoreColor}
                                        onChange={(newColor) =>
                                            handleBlockDefault({
                                                readmoreColor: newColor,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Background Color", "essential-blocks")}
                                        color={readmoreBGColor}
                                        onChange={(newColor) =>
                                            handleBlockDefault({
                                                readmoreBGColor: newColor,
                                            })
                                        }
                                    />
                                </>
                            )}

                            {readmoreColorType === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Hover Color", "essential-blocks")}
                                        color={readmoreHoverColor}
                                        onChange={(newColor) =>
                                            handleBlockDefault({
                                                readmoreHoverColor: newColor,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Hover Background Color", "essential-blocks")}
                                        color={readmoreBGHoverColor}
                                        onChange={(newColor) =>
                                            handleBlockDefault({
                                                readmoreBGHoverColor: newColor,
                                            })
                                        }
                                    />
                                </>
                            )}
                            <BaseControl label={__("Alignment", "essential-blocks")} id="essential-blocks">
                                <ButtonGroup id="essential-blocks">
                                    {TEXT_ALIGN.map((item, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={readmoreTextAlign === item.value}
                                            isSecondary={readmoreTextAlign !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    readmoreTextAlign: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={EBPG_READMORE_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={READMORE_MARGIN}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={READMORE_PADDING}
                                baseLabel="Padding"
                            />
                        </PanelBody>
                    )}
                    {showMeta && (
                        <PanelBody title={__("Meta Styles", "essential-blocks")} initialOpen={false}>
                            <BaseControl label={__("Header Meta Alignment", "essential-blocks")} id="essential-blocks">
                                <ButtonGroup id="essential-blocks">
                                    {CONTENT_POSITION.map((item, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={headerMetaTextAlign === item.value}
                                            isSecondary={headerMetaTextAlign !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    headerMetaTextAlign: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <ResponsiveRangeController
                                baseLabel={__("Header Meta Gap", "essential-blocks")}
                                controlName={HEADER_META_SPACE}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={HEADER_META_MARGIN}
                                baseLabel="Header Meta Margin"
                            />

                            <BaseControl label={__("Footer Meta Alignment", "essential-blocks")} id="essential-blocks">
                                <ButtonGroup id="essential-blocks">
                                    {CONTENT_POSITION.map((item, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={footerMetaTextAlign === item.value}
                                            isSecondary={footerMetaTextAlign !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    footerMetaTextAlign: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <ResponsiveRangeController
                                baseLabel={__("Footer Meta Gap", "essential-blocks")}
                                controlName={FOOTER_META_SPACE}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={FOOTER_META_MARGIN}
                                baseLabel="Footer Meta Margin"
                            />

                            <ButtonGroup className="eb-inspector-btn-group">
                                {NORMAL_HOVER.map((item, index) => (
                                    <Button
                                        key={index}
                                        // isLarge
                                        isPrimary={metaColorType === item.value}
                                        isSecondary={metaColorType !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                metaColorType: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            {metaColorType === "normal" && (
                                <>
                                    <ColorControl
                                        label={__("Author Color", "essential-blocks")}
                                        color={authorMetaColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                authorMetaColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Date Color", "essential-blocks")}
                                        color={dateMetaColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                dateMetaColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Common Meta Color", "essential-blocks")}
                                        color={commonMetaColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                commonMetaColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Common Meta BG Color", "essential-blocks")}
                                        color={commonMetaBgColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                commonMetaBgColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Category Color", "essential-blocks")}
                                        color={categoryMetaColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                categoryMetaColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Category BG Color", "essential-blocks")}
                                        color={categoryMetaBgColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                categoryMetaBgColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Tag Color", "essential-blocks")}
                                        color={tagMetaColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                tagMetaColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Tag BG Color", "essential-blocks")}
                                        color={tagMetaBgColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                tagMetaBgColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Read Time Color", "essential-blocks")}
                                        color={ReadTimeMetaColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                ReadTimeMetaColor: color,
                                            })
                                        }
                                    />
                                </>
                            )}

                            {metaColorType === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Author Color", "essential-blocks")}
                                        color={authorMetaHoverColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                authorMetaHoverColor: color,
                                            })
                                        }
                                    />

                                    <ColorControl
                                        label={__("Common Meta Color", "essential-blocks")}
                                        color={commonMetaHoverColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                commonMetaHoverColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Common Meta BG Color", "essential-blocks")}
                                        color={commonMetaBgHoverColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                commonMetaBgHoverColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Category Color", "essential-blocks")}
                                        color={categoryMetaHoverColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                categoryMetaHoverColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Category BG Color", "essential-blocks")}
                                        color={categoryMetaBgHoverColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                categoryMetaBgHoverColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Tag Color", "essential-blocks")}
                                        color={tagMetaHoverColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                tagMetaHoverColor: color,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Tag BG Color", "essential-blocks")}
                                        color={tagMetaBgHoverColor}
                                        onChange={(color) =>
                                            handleBlockDefault({
                                                tagMetaBgHoverColor: color,
                                            })
                                        }
                                    />
                                </>
                            )}

                            <TypographyDropdown
                                baseLabel={__("Meta Typography", "essential-blocks")}
                                typographyPrefixConstant={EBPG_META_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={AVATAR_BORDER_RADIUS}
                                baseLabel="Avatar Radius"
                            />
                        </PanelBody>
                    )}
                    {loadMoreOptions && loadMoreOptions.enableMorePosts && (
                        <>
                            <PanelBody title={__("Load More Styles")} initialOpen={false}>
                                {/* If load More type "Load More Button" */}
                                {loadMoreOptions.loadMoreType === "1" && (
                                    <ButtonGroup id="essential-blocks" className="eb-inspector-btn-group">
                                        {NORMAL_HOVER.map((item, index) => (
                                            <Button
                                                key={index}
                                                isLarge
                                                isPrimary={loadMoreColorType === item.value}
                                                isSecondary={loadMoreColorType !== item.value}
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        loadMoreColorType: item.value,
                                                    })
                                                }
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                )}

                                {/* If load More type "Pagination" */}
                                {loadMoreOptions.loadMoreType === "2" && (
                                    <BaseControl label={__("", "essential-blocks")} id="eb-advance-heading-alignment">
                                        <ButtonGroup id="eb-advance-heading-alignment">
                                            {NORMAL_HOVER_ACTIVE.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isLarge
                                                    isPrimary={loadMoreColorType === item.value}
                                                    isSecondary={loadMoreColorType !== item.value}
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            loadMoreColorType: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>
                                )}

                                {loadMoreColorType === "normal" && (
                                    <>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={loadMoreColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    loadMoreColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={loadMoreBgColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    loadMoreBgColor: newColor,
                                                })
                                            }
                                        />
                                    </>
                                )}
                                {loadMoreColorType === "hover" && (
                                    <>
                                        <ColorControl
                                            label={__("Hover Color", "essential-blocks")}
                                            color={loadMoreHoverColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    loadMoreHoverColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Hover Color", "essential-blocks")}
                                            color={loadMoreHoverBgColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    loadMoreHoverBgColor: newColor,
                                                })
                                            }
                                        />
                                    </>
                                )}
                                {loadMoreColorType === "active" && (
                                    <>
                                        <ColorControl
                                            label={__("Active Color", "essential-blocks")}
                                            color={loadMoreActiveColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    loadMoreActiveColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={loadMoreActiveBgColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    loadMoreActiveBgColor: newColor,
                                                })
                                            }
                                        />
                                    </>
                                )}

                                <TypographyDropdown
                                    baseLabel={__("Typography", "essential-blocks")}
                                    typographyPrefixConstant={EBPG_LOAD_MORE_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />

                                <PanelBody>
                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={LOADMORE_MARGIN}
                                        baseLabel="Margin"
                                    />
                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={LOADMORE_PADDING}
                                        baseLabel="Padding"
                                    />
                                </PanelBody>
                                <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                    <BorderShadowControl
                                        controlName={LOADMORE_BORDER_SHADOW}
                                        resRequiredProps={resRequiredProps}
                                        noShadow
                                        // noBorder
                                    />
                                </PanelBody>
                            </PanelBody>
                        </>
                    )}
                    <PanelBody title={__("Wrapper Margin & Padding", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={WRAPPER_MARGIN}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={WRAPPER_MARGIN}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Background", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} noOverlay />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                        <BorderShadowControl controlName={WRAPPER_BORDER_SHADOW} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default PostGrid;
