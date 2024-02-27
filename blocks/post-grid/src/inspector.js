/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState, useRef } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
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
import { doAction, applyFilters } from "@wordpress/hooks";

/**
 * External Dependencies
 */
import Select2 from "react-select";
import SortableContents from "./sortable-content";

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
    READMORE_BORDER_SHADOW,
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
    ICON_POSITION,
    ICON_SIZE,
    ICON_SPACE,
    PRESET_1_ORDER,
    PRESET_4_ORDER,
    PRESET_5_ORDER,
} from "./constants/constants";
import {
    EBPG_TITLE_TYPOGRAPHY,
    EBPG_CONTENT_TYPOGRAPHY,
    EBPG_READMORE_TYPOGRAPHY,
    EBPG_META_TYPOGRAPHY,
    EBPG_LOAD_MORE_TYPOGRAPHY,
    FILTER_ITEM_TYPOGRAPHY,
} from "./constants/typographyPrefixConstants";

import objAttributes from "./attributes";

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
    ProSelectControl,
    faIcons,
    DynamicInputControl,
    EBIconPicker
} = window.EBControls;

function Inspector(props) {
    const { attributes, setAttributes, taxonomyData, setQueryResults } = props;
    const { terms, taxonomies } = taxonomyData;
    const {
        resOption,
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
        authorPrefix,
        datePrefix,
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
        dynamicMetaColor,
        dynamicMetaBgColor,
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
        addIcon,
        icon,
        iconPosition,
        contentLists,
        enableContents,
        enableThumbnailSort,
        defaultFilter,
    } = attributes;

    const [metaOptions, setMetaOptions] = useState([]);
    const [defaultFilterOptions, setDefaultFilterOptions] = useState('');

    /**
     * Prepare Post Terms
     */
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

        //Meta option Filter
        const updatedMeta = applyFilters("essential_blocks_post_grid_meta", meta, queryData?.source);

        //Set Meta Options
        if (updatedMeta.then) {
            updatedMeta.then((resp) => {
                setMetaOptions(resp);
            });
        } else {
            setMetaOptions(updatedMeta);
        }
    }, [postTerms]);

    /**
     * Update HeaderMeta, FooterMeta on change postTerms
     */
    const prevSource = useRef(queryData?.source);
    const prevterms = useRef(postTerms);


    useEffect(() => {
        if (!queryData || !queryData.source) {
            return;
        }

        if (queryData.source != prevSource.current) {
            const terms =
                prevterms.current && typeof prevterms.current === "object" ? Object.keys(prevterms.current) : [];

            let headerMetaVal = headerMeta.length > 0 ? JSON.parse(headerMeta) : [];
            headerMetaVal = headerMetaVal.length > 0 && headerMetaVal.filter((item) => !terms.includes(item.value));

            let footerMetaVal = footerMeta.length > 0 ? JSON.parse(footerMeta) : [];
            footerMetaVal = footerMetaVal.length > 0 && footerMetaVal.filter((item) => !terms.includes(item.value));

            setAttributes({
                headerMeta: JSON.stringify(headerMetaVal),
                footerMeta: JSON.stringify(footerMetaVal),
            });
            prevSource.current = queryData.source;
        }
    }, [queryData?.source]);

    //resRequiredProps constant for Controls perameter
    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    /**
     * Change Preset Function
     * @param {*} selected
     * @returns
     */
    const changePreset = (selected) => {
        setAttributes({ preset: selected });
        //Filter for Pro
        applyFilters("eb_post_grid_preset_change", selected, attributes, setAttributes);
        switch (selected) {
            case "style-1":
                setAttributes({
                    thumbnailBDRBottom: "0",
                    thumbnailBDRLeft: "0",
                    thumbnailBDRRight: "0",
                    thumbnailBDRTop: "0",
                    thumbnailBDRUnit: "px",
                    showContent: true,
                    columnBorderShadowRds_Bottom: "0",
                    columnBorderShadowRds_Top: "0",
                    columnBorderShadowRds_Left: "0",
                    columnBorderShadowRds_Right: "0",
                    columnBorderShadowRds_Unit: "px",
                    columnBorderShadowhOffset: 0,
                    columnBorderShadowvOffset: 0,
                    columnBorderShadowblur: 0,
                    columnBorderShadowspread: 0,
                    columnBorderShadowshadowColor: "rgba(197,197,197,1)",
                    thumbnailImageSizeRange: 250,
                    columnsRange: 3,
                    columnGapRange: 10,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "0",
                    columnPaddingTop: "0",
                    columnPaddingRight: "0",
                    columnPaddingLeft: "0",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "left",
                    headerMeta: '[{"value":"category","label":"Categories"}]',
                    footerMeta:
                        '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"},{"value":"date","label":"Published Date"}]',
                    titleColor: "#333333",
                    contentColor: "#333333",
                    titleMarginLeft: "0",
                    titleMarginRight: "0",
                    titleMarginTop: "0",
                    titleMarginBottom: "10",
                    headerMetaMarginLeft: "0",
                    headerMetaMarginRight: "0",
                    headerMetaMarginTop: "0",
                    headerMetaMarginBottom: "10",
                    footerMetaMarginLeft: "0",
                    footerMetaMarginRight: "0",
                    footerMetaMarginTop: "0",
                    footerMetaMarginBottom: "10",
                    dateMetaColor: "#9e9e9e",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.5)",
                    styleVerticalAlignment: "flex-start",
                    contentMarginLeft: "0",
                    thumbnailMarginBottom: "10",
                    columnPaddingisLinked: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    ReadTimeMetaColor: "#333333",
                    authorMetaColor: "#3d8fd4",
                    showReadMore: false,
                    readmoreMarginLeft: "0",
                    readmoreMarginRight: "0",
                    readmoreMarginUnit: "px",
                    readmoreColor: "#3d8fd4",
                    queryData: {
                        ...attributes.queryData,
                        per_page: "6",
                    },
                    enableThumbnailSort: true,
                    enableContents: PRESET_1_ORDER,
                });
                break;
            case "style-2":
                setAttributes({
                    thumbnailBDRBottom: "5",
                    thumbnailBDRLeft: "5",
                    thumbnailBDRRight: "5",
                    thumbnailBDRTop: "5",
                    thumbnailBDRUnit: "px",
                    showContent: true,
                    columnBorderShadowRds_Bottom: "0",
                    columnBorderShadowRds_Top: "0",
                    columnBorderShadowRds_Left: "0",
                    columnBorderShadowRds_Right: "0",
                    columnBorderShadowRds_Unit: "px",
                    columnBorderShadowhOffset: 0,
                    columnBorderShadowvOffset: 0,
                    columnBorderShadowblur: 0,
                    columnBorderShadowspread: 0,
                    columnBorderShadowshadowColor: "rgba(197,197,197,1)",
                    thumbnailImageSizeRange: 200,
                    columnsRange: 3,
                    columnGapRange: 10,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "0",
                    columnPaddingTop: "0",
                    columnPaddingRight: "0",
                    columnPaddingLeft: "0",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "left",
                    headerMeta: '[{"value":"date","label":"Published Date"}]',
                    footerMeta: '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"}]',
                    titleColor: "#333333",
                    contentColor: "#333333",
                    titleMarginLeft: "0",
                    titleMarginRight: "0",
                    titleMarginTop: "0",
                    titleMarginBottom: "10",
                    headerMetaMarginLeft: "0",
                    headerMetaMarginRight: "0",
                    headerMetaMarginTop: "0",
                    headerMetaMarginBottom: "10",
                    footerMetaMarginLeft: "0",
                    footerMetaMarginRight: "0",
                    footerMetaMarginTop: "0",
                    footerMetaMarginBottom: "10",
                    dateMetaColor: "#9e9e9e",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.5)",
                    styleVerticalAlignment: "flex-start",
                    contentMarginLeft: "0",
                    thumbnailMarginBottom: "10",
                    columnPaddingisLinked: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    ReadTimeMetaColor: "#333333",
                    authorMetaColor: "#3d8fd4",
                    showReadMore: false,
                    readmoreMarginLeft: "0",
                    readmoreMarginRight: "0",
                    readmoreMarginUnit: "px",
                    readmoreColor: "#3d8fd4",
                    queryData: {
                        ...attributes.queryData,
                        per_page: "6",
                    },
                    enableThumbnailSort: true,
                    enableContents: PRESET_1_ORDER,
                });
                break;
            case "style-3":
                setAttributes({
                    thumbnailBDRBottom: "5",
                    thumbnailBDRLeft: "5",
                    thumbnailBDRRight: "5",
                    thumbnailBDRTop: "5",
                    thumbnailBDRUnit: "px",
                    showContent: true,
                    columnBorderShadowRds_Bottom: "5",
                    columnBorderShadowRds_Top: "5",
                    columnBorderShadowRds_Left: "5",
                    columnBorderShadowRds_Right: "5",
                    columnBorderShadowRds_Unit: "px",
                    columnBorderShadowhOffset: 0,
                    columnBorderShadowvOffset: 0,
                    columnBorderShadowblur: 10,
                    columnBorderShadowspread: 0,
                    columnBorderShadowshadowColor: "rgba(197,197,197,1)",
                    thumbnailImageSizeRange: 250,
                    columnsRange: 3,
                    columnGapRange: 15,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "10",
                    columnPaddingTop: "10",
                    columnPaddingRight: "10",
                    columnPaddingLeft: "10",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "center",
                    headerMeta: '[{"value":"date","label":"Published Date"}]',
                    footerMeta: '[{"value":"avatar","label":"Author Avatar"}]',
                    titleColor: "#333333",
                    contentColor: "#333333",
                    titleMarginLeft: "0",
                    titleMarginRight: "0",
                    titleMarginTop: "0",
                    titleMarginBottom: "10",
                    headerMetaMarginLeft: "0",
                    headerMetaMarginRight: "0",
                    headerMetaMarginTop: "0",
                    headerMetaMarginBottom: "10",
                    footerMetaMarginLeft: "0",
                    footerMetaMarginRight: "0",
                    footerMetaMarginTop: "0",
                    footerMetaMarginBottom: "10",
                    dateMetaColor: "#9e9e9e",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.5)",
                    styleVerticalAlignment: "flex-start",
                    contentMarginLeft: "0",
                    thumbnailMarginBottom: "10",
                    columnPaddingisLinked: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    ReadTimeMetaColor: "#333333",
                    authorMetaColor: "#3d8fd4",
                    showReadMore: false,
                    readmoreMarginLeft: "0",
                    readmoreMarginRight: "0",
                    readmoreMarginUnit: "px",
                    readmoreColor: "#3d8fd4",
                    queryData: {
                        ...attributes.queryData,
                        per_page: "6",
                    },
                    enableThumbnailSort: true,
                    enableContents: PRESET_1_ORDER,
                });
                break;
            case "style-4":
                setAttributes({
                    thumbnailBDRBottom: "0",
                    thumbnailBDRLeft: "0",
                    thumbnailBDRRight: "0",
                    thumbnailBDRTop: "0",
                    thumbnailBDRUnit: "px",
                    showContent: true,
                    columnBorderShadowRds_Bottom: "0",
                    columnBorderShadowRds_Top: "0",
                    columnBorderShadowRds_Left: "0",
                    columnBorderShadowRds_Right: "0",
                    columnBorderShadowRds_Unit: "px",
                    columnBorderShadowhOffset: 0,
                    columnBorderShadowvOffset: 0,
                    columnBorderShadowblur: 0,
                    columnBorderShadowspread: 0,
                    columnBorderShadowshadowColor: "rgba(197,197,197,1)",
                    thumbnailImageSizeRange: 200,
                    columnsRange: 1,
                    columnGapRange: 0,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "15",
                    columnPaddingTop: "15",
                    columnPaddingRight: "0",
                    columnPaddingLeft: "0",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "left",
                    headerMeta: '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"}]',
                    footerMeta: '[{"value":"readtime","label":"Read Time"},{"value":"date","label":"Published Date"}]',
                    titleColor: "#555",
                    contentColor: "#333333",
                    titleMarginLeft: "15",
                    titleMarginRight: "15",
                    titleMarginTop: "0",
                    titleMarginBottom: "15",
                    headerMetaMarginLeft: "15",
                    headerMetaMarginRight: "15",
                    headerMetaMarginTop: "0",
                    headerMetaMarginBottom: "15",
                    footerMetaMarginLeft: "15",
                    footerMetaMarginRight: "15",
                    footerMetaMarginTop: "0",
                    footerMetaMarginBottom: "15",
                    dateMetaColor: "#707070",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0.45)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.65)",
                    styleVerticalAlignment: "flex-start",
                    contentMarginLeft: "15",
                    thumbnailMarginBottom: "0",
                    columnPaddingisLinked: false,
                    columnBorderShadowborderStyle: "solid",
                    columnBorderShadowBdr_Top: "2",
                    columnBorderShadowBdr_Left: "0",
                    columnBorderShadowBdr_Right: "0",
                    columnBorderShadowBdr_Bottom: "0",
                    columnBorderShadowBdr_isLinked: false,
                    columnBorderShadowborderColor: "#000000",
                    ReadTimeMetaColor: "#707070",
                    authorMetaColor: "#3d8fd4",
                    showReadMore: false,
                    readmoreMarginLeft: "0",
                    readmoreMarginRight: "0",
                    readmoreMarginUnit: "px",
                    readmoreColor: "#3d8fd4",
                    queryData: {
                        ...attributes.queryData,
                        per_page: "6",
                    },
                    enableThumbnailSort: false,
                    enableContents: PRESET_4_ORDER,
                });
                break;
            case "style-5":
                setAttributes({
                    thumbnailBDRBottom: "0",
                    thumbnailBDRLeft: "0",
                    thumbnailBDRRight: "0",
                    thumbnailBDRTop: "0",
                    thumbnailBDRUnit: "px",
                    showContent: false,
                    columnBorderShadowRds_Bottom: "0",
                    columnBorderShadowRds_Top: "0",
                    columnBorderShadowRds_Left: "0",
                    columnBorderShadowRds_Right: "0",
                    columnBorderShadowRds_Unit: "px",
                    columnBorderShadowhOffset: 0,
                    columnBorderShadowvOffset: 0,
                    columnBorderShadowblur: 0,
                    columnBorderShadowspread: 0,
                    columnBorderShadowshadowColor: "rgba(197,197,197,1)",
                    thumbnailImageSizeRange: 250,
                    columnsRange: 3,
                    columnGapRange: 10,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "0",
                    columnPaddingTop: "0",
                    columnPaddingRight: "0",
                    columnPaddingLeft: "0",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "left",
                    headerMeta: '[{"value":"date","label":"Published Date"}]',
                    footerMeta: "[]",
                    titleColor: "#d18df1",
                    contentColor: "#ffffff",
                    titleMarginLeft: "15",
                    titleMarginRight: "15",
                    titleMarginTop: "15",
                    titleMarginBottom: "5",
                    headerMetaMarginLeft: "15",
                    headerMetaMarginRight: "15",
                    headerMetaMarginTop: "0",
                    headerMetaMarginBottom: "15",
                    footerMetaMarginLeft: "15",
                    footerMetaMarginRight: "15",
                    footerMetaMarginTop: "0",
                    footerMetaMarginBottom: "15",
                    dateMetaColor: "#ffffff",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0.45)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.65)",
                    styleVerticalAlignment: "flex-start",
                    contentMarginLeft: "15",
                    thumbnailMarginBottom: "10",
                    columnPaddingisLinked: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    ReadTimeMetaColor: "#333333",
                    authorMetaColor: "#3d8fd4",
                    showReadMore: false,
                    readmoreMarginLeft: "0",
                    readmoreMarginRight: "0",
                    readmoreMarginUnit: "px",
                    readmoreColor: "#3d8fd4",
                    queryData: {
                        ...attributes.queryData,
                        per_page: "6",
                    },

                    enableThumbnailSort: false,
                    enableContents: PRESET_5_ORDER,
                });
                break;
            default:
                return false;
        }
    };

    const ucFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    const makeEnableContent = (showItem, itemName) => {
        let newEnableContents = [...enableContents];
        if (showItem == true) {
            if (!newEnableContents.includes(itemName)) {
                if (itemName == "meta") {
                    headerMeta.length > 0 ? newEnableContents.push("headerMeta") : null;
                    footerMeta.length > 0 ? newEnableContents.push("footerMeta") : null;
                } else {
                    newEnableContents.push(itemName);
                }
            }
        } else {
            if (newEnableContents.includes(itemName)) {
                newEnableContents = newEnableContents.filter((item) => item !== itemName);
            }
        }
        setAttributes({
            enableContents: newEnableContents,
        });
    };

    useEffect(() => {
        if (!enableThumbnailSort && enableContents.includes("thumbnail")) {
            setAttributes({
                enableContents: enableContents.filter((item) => item !== "thumbnail"),
            });
        } else {
            if (!enableContents.includes("thumbnail")) {
                setAttributes({
                    enableContents: ["thumbnail", ...enableContents],
                });
            }
        }
    }, [enableThumbnailSort]);

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
                            title: "Styles",
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
                                    <CustomQuery attributes={attributes} setAttributes={setAttributes} setQueryResults={setQueryResults} />
                                    <PanelBody title={__("Layout Style", "essential-blocks")} initialOpen={false}>
                                        <ProSelectControl
                                            label={__("Template", "essential-blocks")}
                                            value={preset}
                                            options={applyFilters("eb_post_grid_preset", PRESETS)}
                                            onChange={(selected) => changePreset(selected)}
                                        />

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
                                            step={0}
                                        />

                                        {["style-5", "pro-style-6"].includes(preset) === false && (
                                            <ToggleControl
                                                label={__("Show Thumbnail?")}
                                                checked={showThumbnail}
                                                onChange={() => {
                                                    setAttributes({
                                                        showThumbnail: !showThumbnail,
                                                    });

                                                    makeEnableContent(!showThumbnail, "thumbnail");
                                                }}
                                            />
                                        )}

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
                                                        units={[
                                                            {
                                                                label: "%",
                                                                value: "%",
                                                            },
                                                        ]}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                )}

                                                <EbImageSizeSelector
                                                    attrname={"thumbnailSize"}
                                                    resRequiredProps={resRequiredProps}
                                                    setAttributes={setAttributes}
                                                />
                                            </>
                                        )}

                                        {(preset === "style-4" || preset === "style-5" || preset === "pro-style-6") && (
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
                                                                setAttributes({
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
                                                setAttributes({
                                                    showTitle: !showTitle,
                                                });
                                                makeEnableContent(!showTitle, "title");
                                            }}
                                        />

                                        {showTitle && (
                                            <>
                                                <SelectControl
                                                    label={__("Title Tag", "essential-blocks")}
                                                    value={titleTag}
                                                    options={TITLE_TAGS}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            titleTag: value,
                                                        });
                                                    }}
                                                />

                                                <RangeControl
                                                    label="Title Words"
                                                    value={titleLength}
                                                    onChange={(value) =>
                                                        setAttributes({
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
                                                setAttributes({
                                                    showContent: !showContent,
                                                });
                                                makeEnableContent(!showContent, "excerpt");
                                            }}
                                        />

                                        {showContent && (
                                            <>
                                                <RangeControl
                                                    label="Excerpt Words"
                                                    value={contentLength}
                                                    onChange={(value) =>
                                                        setAttributes({
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
                                                        setAttributes({
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
                                                setAttributes({
                                                    showReadMore: !showReadMore,
                                                });
                                            }}
                                        />

                                        {showReadMore && (
                                            <>
                                                <DynamicInputControl
                                                    label={__(
                                                        "Button Text",
                                                        "essential-blocks"
                                                    )}
                                                    attrName="readmoreText"
                                                    inputValue={readmoreText}
                                                    setAttributes={
                                                        setAttributes
                                                    }
                                                    onChange={(text) =>
                                                        setAttributes({
                                                            readmoreText: text,
                                                        })
                                                    }
                                                />
                                                <PanelBody title={__("Icon", "essential-blocks")} initialOpen={false}>
                                                    <ToggleControl
                                                        label={__("Add icon", "essential-blocks")}
                                                        checked={addIcon}
                                                        onChange={() =>
                                                            setAttributes({
                                                                addIcon: !addIcon,
                                                            })
                                                        }
                                                    />
                                                    {addIcon && (
                                                        <>
                                                            <EBIconPicker
                                                                value={icon}
                                                                onChange={(icon) =>
                                                                    setAttributes({
                                                                        icon,
                                                                    })
                                                                }
                                                            />
                                                            <BaseControl label={__("Icon Postion", "essential-blocks")}>
                                                                <ButtonGroup id="eb-button-group-alignment">
                                                                    {ICON_POSITION.map((item, index) => (
                                                                        <Button
                                                                            key={index}
                                                                            isPrimary={iconPosition === item.value}
                                                                            isSecondary={iconPosition !== item.value}
                                                                            onClick={() =>
                                                                                setAttributes({
                                                                                    iconPosition: item.value,
                                                                                })
                                                                            }
                                                                        >
                                                                            {item.label}
                                                                        </Button>
                                                                    ))}
                                                                </ButtonGroup>
                                                            </BaseControl>
                                                            <ResponsiveRangeController
                                                                baseLabel={__("Size", "essential-blocks")}
                                                                controlName={ICON_SIZE}
                                                                resRequiredProps={resRequiredProps}
                                                                noUnits={true}
                                                            />
                                                            <ResponsiveRangeController
                                                                baseLabel={__("Gap", "essential-blocks")}
                                                                controlName={ICON_SPACE}
                                                                resRequiredProps={resRequiredProps}
                                                                noUnits={true}
                                                            />
                                                        </>
                                                    )}
                                                </PanelBody>
                                            </>
                                        )}

                                        <ToggleControl
                                            label={__("Show Meta?")}
                                            checked={showMeta}
                                            onChange={() => {
                                                setAttributes({
                                                    showMeta: !showMeta,
                                                });
                                                makeEnableContent(!showMeta, "meta");
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
                                                            setAttributes({
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
                                                            setAttributes({
                                                                footerMeta: JSON.stringify(selected),
                                                            })
                                                        }
                                                        options={metaOptions}
                                                        isMulti="true"
                                                    />
                                                </div>
                                                <DynamicInputControl
                                                    label={__(
                                                        "Author Prefix",
                                                        "essential-blocks"
                                                    )}
                                                    help={__(
                                                        "Example: by John Doe",
                                                        "essential-blocks"
                                                    )}
                                                    attrName="authorPrefix"
                                                    inputValue={authorPrefix}
                                                    setAttributes={
                                                        setAttributes
                                                    }
                                                    onChange={(text) =>
                                                        setAttributes({
                                                            authorPrefix: text,
                                                        })
                                                    }
                                                />
                                                <DynamicInputControl
                                                    label={__(
                                                        "Published Date Prefix",
                                                        "essential-blocks"
                                                    )}
                                                    help={__(
                                                        "Example: on 01/01/2023",
                                                        "essential-blocks"
                                                    )}
                                                    attrName="datePrefix"
                                                    inputValue={datePrefix}
                                                    setAttributes={
                                                        setAttributes
                                                    }
                                                    onChange={(text) =>
                                                        setAttributes({
                                                            datePrefix: text,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Sortable Content", "essential-blocks-pro")}
                                        initialOpen={false}
                                    >
                                        {(preset == "style-1" || preset == "style-2" || preset == "style-3") &&
                                            showThumbnail && (
                                                <ToggleControl
                                                    label={__("Thumbnail Sorting")}
                                                    checked={enableThumbnailSort}
                                                    onChange={() => {
                                                        setAttributes({
                                                            enableThumbnailSort: !enableThumbnailSort,
                                                        });
                                                    }}
                                                />
                                            )}

                                        <SortableContents
                                            contentLists={enableContents}
                                            setAttributes={setAttributes}
                                            ucFirst={ucFirst}
                                        />
                                    </PanelBody>

                                    <MorePosts
                                        loadMoreOptions={loadMoreOptions}
                                        queryData={queryData}
                                        setAttributes={setAttributes}
                                        initialOpen={false}
                                    />
                                    <PanelBody title={__("Filter By Taxonomy", "essential-blocks")} initialOpen={false}>
                                        <ToggleControl
                                            label={__("Show Filter By Taxonomy?")}
                                            checked={showTaxonomyFilter}
                                            onChange={() => {
                                                setAttributes({
                                                    showTaxonomyFilter: !showTaxonomyFilter,
                                                });
                                            }}
                                        />
                                        {showTaxonomyFilter && (
                                            <>
                                                <div className="eb-control-item-wrapper">
                                                    <PanelRow>Select Taxonomy Type</PanelRow>
                                                    <Select2
                                                        name="select-header-meta"
                                                        value={
                                                            selectedTaxonomy && selectedTaxonomy.length > 0
                                                                ? JSON.parse(selectedTaxonomy)
                                                                : ""
                                                        }
                                                        onChange={(selected) =>
                                                            setAttributes({
                                                                selectedTaxonomy: JSON.stringify(selected),
                                                            })
                                                        }
                                                        options={taxonomies}
                                                    />
                                                </div>
                                                {selectedTaxonomy && selectedTaxonomy.length > 0 && (
                                                    <>
                                                        <SelectControl
                                                            label={__(
                                                                "Default Selected Filter",
                                                                "essential-blocks"
                                                            )}
                                                            value={defaultFilter}
                                                            options={defaultFilterOptions}
                                                            onChange={(selected) =>
                                                                setAttributes({ defaultFilter: selected })
                                                            }
                                                        />
                                                        <div className="eb-control-item-wrapper">
                                                            <PanelRow>Select Taxonomy</PanelRow>
                                                            <Select2
                                                                name="select-header-meta"
                                                                value={
                                                                    selectedTaxonomyItems &&
                                                                        selectedTaxonomyItems.length > 0
                                                                        ? JSON.parse(selectedTaxonomyItems)
                                                                        : ""
                                                                }
                                                                onChange={(selected) =>
                                                                    setAttributes({
                                                                        selectedTaxonomyItems: JSON.stringify(selected),
                                                                    })
                                                                }
                                                                options={terms}
                                                                isMulti="true"
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </PanelBody>
                                    {applyFilters(
                                        "eb_post_grid_pro_general_tab",
                                        "",
                                        attributes,
                                        setAttributes,
                                        resRequiredProps
                                    )}
                                </>
                            )}

                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Columns", "essential-blocks")} initialOpen={false}>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={COLUMN_PADDING}
                                            baseLabel="Padding"
                                        />
                                        <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                                            <BackgroundControl
                                                controlName={COLUMN_BG}
                                                resRequiredProps={resRequiredProps}
                                                noOverlay
                                            />
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
                                        <PanelBody title={__("Thumbnail", "essential-blocks")} initialOpen={false}>
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
                                                    setAttributes({
                                                        thumbnailOverlayColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__("Overlay Hover Color", "essential-blocks")}
                                                color={thumbnailOverlayHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        thumbnailOverlayHoverColor: color,
                                                    })
                                                }
                                            />
                                        </PanelBody>
                                    )}

                                    {showTitle && (
                                        <PanelBody title={__("Title", "essential-blocks")} initialOpen={false}>
                                            <ButtonGroup className="eb-inspector-btn-group">
                                                {NORMAL_HOVER.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        // isLarge
                                                        isPrimary={titleColorStyle === item.value}
                                                        isSecondary={titleColorStyle !== item.value}
                                                        onClick={() =>
                                                            setAttributes({
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
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            titleColor: color,
                                                        })
                                                    }
                                                />
                                            )}

                                            {titleColorStyle === "hover" && (
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={titleHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            titleHoverColor: color,
                                                        })
                                                    }
                                                />
                                            )}
                                            <BaseControl
                                                label={__("Alignment", "essential-blocks")}
                                                id="essential-blocks"
                                            >
                                                <ButtonGroup id="essential-blocks">
                                                    {TEXT_ALIGN.map((item, index) => (
                                                        <Button
                                                            key={index}
                                                            // isLarge
                                                            isPrimary={titleTextAlign === item.value}
                                                            isSecondary={titleTextAlign !== item.value}
                                                            onClick={() =>
                                                                setAttributes({
                                                                    titleTextAlign: item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                    )}
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
                                        <PanelBody title={__("Excerpt", "essential-blocks")} initialOpen={false}>
                                            <ColorControl
                                                label={__("Color", "essential-blocks")}
                                                color={contentColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        contentColor: color,
                                                    })
                                                }
                                            />
                                            <BaseControl
                                                label={__("Alignment", "essential-blocks")}
                                                id="essential-blocks"
                                            >
                                                <ButtonGroup id="essential-blocks">
                                                    {TEXT_ALIGN.map((item, index) => (
                                                        <Button
                                                            key={index}
                                                            // isLarge
                                                            isPrimary={contentTextAlign === item.value}
                                                            isSecondary={contentTextAlign !== item.value}
                                                            onClick={() =>
                                                                setAttributes({
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
                                        <PanelBody
                                            title={__("Read More Button", "essential-blocks")}
                                            initialOpen={false}
                                        >
                                            <ButtonGroup className="eb-inspector-btn-group">
                                                {NORMAL_HOVER.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        // isLarge
                                                        isPrimary={readmoreColorType === item.value}
                                                        isSecondary={readmoreColorType !== item.value}
                                                        onClick={() =>
                                                            setAttributes({
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
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                readmoreColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Background Color", "essential-blocks")}
                                                        color={readmoreBGColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                readmoreBGColor: color,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            {readmoreColorType === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__("Color", "essential-blocks")}
                                                        color={readmoreHoverColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                readmoreHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Background Color", "essential-blocks")}
                                                        color={readmoreBGHoverColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                readmoreBGHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            <BaseControl
                                                label={__(
                                                    "Alignment",
                                                    "essential-blocks"
                                                )}
                                                id="essential-blocks"
                                            >
                                                <ButtonGroup id="essential-blocks">
                                                    {TEXT_ALIGN.map(
                                                        (item, index) => (
                                                            <Button
                                                                key={index}
                                                                // isLarge
                                                                isPrimary={
                                                                    readmoreTextAlign ===
                                                                    item.value
                                                                }
                                                                isSecondary={
                                                                    readmoreTextAlign !==
                                                                    item.value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            readmoreTextAlign:
                                                                                item.value,
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        )
                                                    )}
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
                                            <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                                <BorderShadowControl
                                                    controlName={READMORE_BORDER_SHADOW}
                                                    resRequiredProps={resRequiredProps}
                                                    noShadow
                                                // noBorder
                                                />
                                            </PanelBody>
                                        </PanelBody>
                                    )}

                                    {showMeta && (
                                        <PanelBody title={__("Meta Styles", "essential-blocks")} initialOpen={false}>
                                            <BaseControl
                                                label={__("Header Meta Alignment", "essential-blocks")}
                                                id="essential-blocks"
                                            >
                                                <ButtonGroup id="essential-blocks">
                                                    {CONTENT_POSITION.map((item, index) => (
                                                        <Button
                                                            key={index}
                                                            // isLarge
                                                            isPrimary={headerMetaTextAlign === item.value}
                                                            isSecondary={headerMetaTextAlign !== item.value}
                                                            onClick={() =>
                                                                setAttributes({
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

                                            <BaseControl
                                                label={__("Footer Meta Alignment", "essential-blocks")}
                                                id="essential-blocks"
                                            >
                                                <ButtonGroup id="essential-blocks">
                                                    {CONTENT_POSITION.map((item, index) => (
                                                        <Button
                                                            key={index}
                                                            // isLarge
                                                            isPrimary={footerMetaTextAlign === item.value}
                                                            isSecondary={footerMetaTextAlign !== item.value}
                                                            onClick={() =>
                                                                setAttributes({
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
                                                            setAttributes({
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
                                                        label={__(
                                                            "Author Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={authorMetaColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                authorMetaColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Date Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={dateMetaColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                dateMetaColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Common Meta Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={commonMetaColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                commonMetaColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Common Meta BG Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            commonMetaBgColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                commonMetaBgColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Category Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            categoryMetaColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                categoryMetaColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Category BG Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            categoryMetaBgColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                categoryMetaBgColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Tag Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={tagMetaColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                tagMetaColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Tag BG Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={tagMetaBgColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                tagMetaBgColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Read Time Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            ReadTimeMetaColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                ReadTimeMetaColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Dynamic Data Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={dynamicMetaColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                dynamicMetaColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Dynamic Data BG Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            dynamicMetaBgColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                dynamicMetaBgColor: color,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            {metaColorType === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Author Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            authorMetaHoverColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                authorMetaHoverColor: color,
                                                            })
                                                        }
                                                    />

                                                    <ColorControl
                                                        label={__(
                                                            "Common Meta Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            commonMetaHoverColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                commonMetaHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Common Meta BG Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            commonMetaBgHoverColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                commonMetaBgHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Category Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            categoryMetaHoverColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                categoryMetaHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Category BG Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            categoryMetaBgHoverColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                categoryMetaBgHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Tag Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            tagMetaHoverColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                tagMetaHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Tag BG Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            tagMetaBgHoverColor
                                                        }
                                                        onChange={(color) =>
                                                            setAttributes({
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

                                    {loadMoreOptions.enableMorePosts && (
                                        <>
                                            <PanelBody title={__("Load More Styles")} initialOpen={false}>
                                                {/* If load More type "Load More Button" */}
                                                {loadMoreOptions.loadMoreType === "1" && (
                                                    <ButtonGroup
                                                        id="essential-blocks"
                                                        className="eb-inspector-btn-group"
                                                    >
                                                        {NORMAL_HOVER.map((item, index) => (
                                                            <Button
                                                                key={index}
                                                                isLarge
                                                                isPrimary={loadMoreColorType === item.value}
                                                                isSecondary={loadMoreColorType !== item.value}
                                                                onClick={() =>
                                                                    setAttributes({
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
                                                    <BaseControl
                                                        label={__("", "essential-blocks")}
                                                        id="eb-advance-heading-alignment"
                                                    >
                                                        <ButtonGroup id="eb-advance-heading-alignment">
                                                            {NORMAL_HOVER_ACTIVE.map((item, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isLarge
                                                                    isPrimary={loadMoreColorType === item.value}
                                                                    isSecondary={loadMoreColorType !== item.value}
                                                                    onClick={() =>
                                                                        setAttributes({
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
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    loadMoreColor: color,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__(
                                                                "Background Color",
                                                                "essential-blocks"
                                                            )}
                                                            color={
                                                                loadMoreBgColor
                                                            }
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    loadMoreBgColor: color,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}
                                                {loadMoreColorType ===
                                                    "hover" && (
                                                        <>
                                                            <ColorControl
                                                                label={__(
                                                                    "Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    loadMoreHoverColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        loadMoreHoverColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__(
                                                                    "Background Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    loadMoreHoverBgColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        loadMoreHoverBgColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                {loadMoreColorType ===
                                                    "active" && (
                                                        <>
                                                            <ColorControl
                                                                label={__(
                                                                    "Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    loadMoreActiveColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        loadMoreActiveColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__(
                                                                    "Background Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    loadMoreHoverBgColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
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

                                    {showTaxonomyFilter && (
                                        <PanelBody title={__("Taxonomy Filter Style")} initialOpen={false}>
                                            <PanelBody>
                                                <ButtonGroup className="eb-inspector-btn-group">
                                                    {NORMAL_HOVER.map((item, index) => (
                                                        <Button
                                                            key={index}
                                                            // isLarge
                                                            isPrimary={filterColorStyle === item.value}
                                                            isSecondary={filterColorStyle !== item.value}
                                                            onClick={() =>
                                                                setAttributes({
                                                                    filterColorStyle: item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                                {filterColorStyle ===
                                                    "normal" && (
                                                        <>
                                                            <ColorControl
                                                                label={__(
                                                                    "Background Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    filterBgColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        filterBgColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__(
                                                                    "Text Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    filterTextColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        filterTextColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__(
                                                                    "Active Background Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    filterActiveBgColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        filterActiveBgColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__(
                                                                    "Active Text Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    filterActiveTextColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        filterActiveTextColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                {filterColorStyle ===
                                                    "hover" && (
                                                        <>
                                                            <ColorControl
                                                                label={__(
                                                                    "Hover Background Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    filterHoverBgColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        filterHoverBgColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__(
                                                                    "Hover Text Color",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    filterHoverTextColor
                                                                }
                                                                onChange={(
                                                                    newColor
                                                                ) =>
                                                                    setAttributes({
                                                                        filterHoverTextColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                <ResponsiveRangeController
                                                    baseLabel={__("Items Gap", "essential-blocks")}
                                                    controlName={FILTER_ITEM_GAP}
                                                    resRequiredProps={resRequiredProps}
                                                    units={UNIT_TYPES}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                />
                                                <TypographyDropdown
                                                    baseLabel={__("Items Typography", "essential-blocks")}
                                                    typographyPrefixConstant={FILTER_ITEM_TYPOGRAPHY}
                                                    resRequiredProps={resRequiredProps}
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={resRequiredProps}
                                                    controlName={FILTER_MARGIN}
                                                    baseLabel="Filter Wrapper Margin"
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={resRequiredProps}
                                                    controlName={FILTER_ITEM_PADDING}
                                                    baseLabel="Items Padding"
                                                />
                                            </PanelBody>
                                            <PanelBody title={__("Items Border")} initialOpen={false}>
                                                <BorderShadowControl
                                                    controlName={FILTER_ITEM_BORDER_SHADOW}
                                                    resRequiredProps={resRequiredProps}
                                                // noShadow
                                                // noBorder
                                                />
                                            </PanelBody>
                                        </PanelBody>
                                    )}
                                    {applyFilters(
                                        "eb_post_grid_pro_style_tab",
                                        "",
                                        attributes,
                                        setAttributes,
                                        resRequiredProps
                                    )}
                                </>
                            )}

                            {tab.name === "advance" && (
                                <>
                                    <PanelBody>
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
                                    <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                                        <BackgroundControl
                                            controlName={WRAPPER_BG}
                                            resRequiredProps={resRequiredProps}
                                            noOverlay
                                        />
                                    </PanelBody>
                                    <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                        <BorderShadowControl
                                            controlName={WRAPPER_BORDER_SHADOW}
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

export default withSelect((select, ownProps) => {
    const {
        queryData,
        selectedTaxonomy,
        showTaxonomyFilter
    } = ownProps.attributes;

    if (showTaxonomyFilter) {
        //Get Taxonomies by post type
        const postTypes = select("core").getPostTypes();

        //Get Terms
        const selectedTax = selectedTaxonomy ? JSON.parse(selectedTaxonomy).value : "category";
        const terms = select("core").getEntityRecords("taxonomy", selectedTax, {
            per_page: -1,
        });
        const termArr = [
            {
                label: "All",
                value: "all",
            },
        ];
        if (terms && typeof terms === "object" && terms.length > 0) {
            terms.map((term, index) => {
                termArr.push({
                    label: term.name,
                    value: term.slug,
                });
            });
        }

        return {
            taxonomyData: {
                taxonomies: taxonomyFilter(postTypes, queryData),
                terms: termArr,
            },
        };
    }
    else {
        return {
            taxonomyData: {
                taxonomies: [],
                terms: [],
            },
        };
    }

})(Inspector);

//Function for filter taxonomies
const taxonomyFilter = (postTypes, queryData) => {
    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    };

    const defaultValue = [{ label: "Category", value: "category" }];

    if (!postTypes || postTypes.length === 0 || postTypes === null) {
        return defaultValue;
    }

    const postType = queryData && queryData.source ? queryData.source : "post";

    if (typeof postTypes === "object" || postTypes.length > 0) {
        const filteredValues = [];
        postTypes.map((item, index) => {
            if (
                item.slug === postType &&
                item.taxonomies &&
                typeof item.taxonomies === "object" &&
                item.taxonomies.length > 0
            ) {
                item.taxonomies.map((taxonomy) => {
                    filteredValues.push({
                        label: capitalize(taxonomy.replace(/[^a-zA-Z ]/g, " ")),
                        value: taxonomy,
                    });
                });
            }
        });
        return filteredValues;
    }

    return defaultValue;
};
