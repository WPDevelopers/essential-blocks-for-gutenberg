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
import { select } from "@wordpress/data";
import { doAction, applyFilters } from "@wordpress/hooks";

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
    DOTS_GAP,
    ARROW_POSITION,
    DOTS_POSITION,
    ARROW_SIZE,
    DOTS_SIZE,
    SLIDES_GAP,
    SLIDE_TO_SHOW,
    CUSTOM_HEIGHT,
    FONT_UNIT_TYPES,
    COLORS,
    DOT_PRESETS,
} from "./constants/constants";
import {
    EBPG_TITLE_TYPOGRAPHY,
    EBPG_CONTENT_TYPOGRAPHY,
    EBPG_READMORE_TYPOGRAPHY,
    EBPG_META_TYPOGRAPHY,
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
    faArrowIcons,
    DynamicInputControl,
    EBIconPicker
} = window.EBControls;

function Inspector(props) {
    const { attributes, setAttributes, slider, setQueryResults } = props;
    const {
        resOption,
        preset,
        queryData,
        postTerms,
        showThumbnail,
        thumbnailOverlayColor,
        thumbnailOverlayHoverColor,
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
        commonMetaDividerColor,
        categoryMetaColor,
        categoryMetaHoverColor,
        categoryMetaDividerColor,
        tagMetaDividerColor,
        tagMetaColor,
        tagMetaHoverColor,
        tagMetaBgColor,
        tagMetaBgHoverColor,
        dateMetaColor,
        dynamicMetaColor,
        dynamicMetaBgColor,
        styleVerticalAlignment,
        leftArrowIcon,
        rightArrowIcon,
        arrowColorType,
        arrowColor,
        arrowHoverColor,
        dotsColor,
        dotsActiveColor,
        initialSlide,
        speed,
        slidesToShow,
        isCustomHeight,
        pauseOnHover,
        vertical,
        infinite,
        fade,
        dots,
        autoplaySpeed,
        autoplay,
        adaptiveHeight,
        arrows,
        dotPreset,
    } = attributes;

    const [metaOptions, setMetaOptions] = useState([]);

    useEffect(() => {
        const meta = [
            { value: "date", label: "Published Date" },
            { value: "author", label: "Author Name" },
            { value: "avatar", label: "Author Avatar" },
        ];

        if (postTerms && Object.keys(postTerms).length > 0) {
            Object.keys(postTerms).map((term) => {
                meta.push(postTerms[term]);
            });
        }

        //Meta option Filter
        const updatedMeta = applyFilters("essential_blocks_post_carousel_meta", meta, queryData?.source);

        //Set Meta Options
        if (updatedMeta.then) {
            updatedMeta.then((resp) => {
                setMetaOptions(resp);
            });
        } else {
            setMetaOptions(updatedMeta);
        }
    }, [postTerms]);

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

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const changePreset = (selected) => {
        //Filter for Pro
        applyFilters("eb_post_carousel_preset_change", selected, attributes, setAttributes);
        setAttributes({ preset: selected });
        switch (selected) {
            case "style-1":
                setAttributes({
                    thumbnailBDRBottom: "5",
                    thumbnailBDRLeft: "5",
                    thumbnailBDRRight: "5",
                    thumbnailBDRTop: "5",
                    thumbnailBDRUnit: "px",
                    thumbnailBDRisLinked: true,
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
                    slideToShowRange: 3,
                    columnGapRange: 10,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "0",
                    columnPaddingTop: "0",
                    columnPaddingRight: "0",
                    columnPaddingLeft: "0",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "left",
                    headerMeta: '[{"value":"categories","label":"Categories"}]',
                    footerMeta:
                        '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"},{"value":"date","label":"Published Date"}]',
                    contentColor: "#333333",
                    titleColor: "#333333",
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
                    footerMetaMarginBottom: "0",
                    dateMetaColor: "#9e9e9e",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.5)",
                    styleVerticalAlignment: "flex-start",
                    dotPreset: "dot-style-1",
                    arrows: true,
                    dots: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    thumbnailMarginBottom: 0,
                    leftArrowIcon: "fas fa-chevron-circle-left",
                    rightArrowIcon: "fas fa-chevron-circle-right",
                    arrowPositionRange: -25,
                    arrowPositionUnit: "px",
                });
                break;
            case "style-2":
                setAttributes({
                    thumbnailBDRBottom: "0",
                    thumbnailBDRLeft: "0",
                    thumbnailBDRRight: "9",
                    thumbnailBDRTop: "9",
                    thumbnailBDRUnit: "px",
                    thumbnailBDRisLinked: false,
                    showContent: true,
                    columnBorderShadowRds_Bottom: "9",
                    columnBorderShadowRds_Top: "9",
                    columnBorderShadowRds_Left: "9",
                    columnBorderShadowRds_Right: "9",
                    columnBorderShadowRds_Unit: "px",
                    columnBorderShadowhOffset: 0,
                    columnBorderShadowvOffset: 0,
                    columnBorderShadowblur: 0,
                    columnBorderShadowspread: 0,
                    columnBorderShadowshadowColor: "rgba(197,197,197,1)",
                    thumbnailImageSizeRange: 200,
                    slideToShowRange: 3,
                    columnGapRange: 10,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "20",
                    columnPaddingTop: "20",
                    columnPaddingRight: "20",
                    columnPaddingLeft: "20",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "left",
                    headerMeta: '[{"value":"date","label":"Published Date"}]',
                    footerMeta: '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"}]',
                    contentColor: "#333333",
                    titleColor: "#333333",
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
                    footerMetaMarginBottom: "0",
                    dateMetaColor: "#d18df1",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.5)",
                    styleVerticalAlignment: "flex-start",
                    dotPreset: "dot-style-1",
                    arrows: true,
                    dots: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    thumbnailMarginBottom: 0,
                    leftArrowIcon: "fas fa-chevron-circle-left",
                    rightArrowIcon: "fas fa-chevron-circle-right",
                    arrowPositionRange: -25,
                    arrowPositionUnit: "px",
                });
                break;
            case "style-3":
                setAttributes({
                    thumbnailBDRBottom: "5",
                    thumbnailBDRLeft: "5",
                    thumbnailBDRRight: "5",
                    thumbnailBDRTop: "5",
                    thumbnailBDRUnit: "px",
                    thumbnailBDRisLinked: true,
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
                    thumbnailImageSizeRange: 165,
                    slideToShowRange: 1,
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
                    contentColor: "#333333",
                    titleColor: "#333333",
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
                    footerMetaMarginBottom: "0",
                    dateMetaColor: "#d18df1",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.5)",
                    styleVerticalAlignment: "flex-start",
                    dotPreset: "dot-style-1",
                    arrows: true,
                    dots: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    thumbnailMarginBottom: 0,
                    leftArrowIcon: "fas fa-chevron-circle-left",
                    rightArrowIcon: "fas fa-chevron-circle-right",
                    arrowPositionRange: -25,
                    arrowPositionUnit: "px",
                });
                break;
            case "style-4":
                setAttributes({
                    thumbnailBDRBottom: "0",
                    thumbnailBDRLeft: "0",
                    thumbnailBDRRight: "0",
                    thumbnailBDRTop: "0",
                    thumbnailBDRUnit: "px",
                    thumbnailBDRisLinked: true,
                    showContent: false,
                    columnBorderShadowRds_Bottom: "15",
                    columnBorderShadowRds_Top: "15",
                    columnBorderShadowRds_Left: "15",
                    columnBorderShadowRds_Right: "15",
                    columnBorderShadowRds_Unit: "px",
                    columnBorderShadowhOffset: 0,
                    columnBorderShadowvOffset: 0,
                    columnBorderShadowblur: 0,
                    columnBorderShadowspread: 0,
                    columnBorderShadowshadowColor: "rgba(197,197,197,1)",
                    thumbnailImageSizeRange: 350,
                    slideToShowRange: 3,
                    columnGapRange: 10,
                    columnGapUnit: "px",
                    thumbnailImageSizeUnit: "px",
                    columnPaddingBottom: "30",
                    columnPaddingTop: "30",
                    columnPaddingRight: "30",
                    columnPaddingLeft: "30",
                    columnPaddingUnit: "px",
                    footerMetaTextAlign: "left",
                    headerMeta: '[{"value":"avatar","label":"Author Avatar"}]',
                    footerMeta: '[{"value":"date","label":"Published Date"}]',
                    contentColor: "#ffffff",
                    titleColor: "#ffffff",
                    titleMarginLeft: "0",
                    titleMarginRight: "",
                    titleMarginTop: "0",
                    titleMarginBottom: "15",
                    headerMetaMarginLeft: "0",
                    headerMetaMarginRight: "0",
                    headerMetaMarginTop: "0",
                    headerMetaMarginBottom: "15",
                    footerMetaMarginLeft: "0",
                    footerMetaMarginRight: "0",
                    footerMetaMarginTop: "0",
                    footerMetaMarginBottom: "0",
                    authorMetaColor: "#d18df1",
                    dateMetaColor: "#FAFAFA",
                    thumbnailOverlayColor: "rgba(0 0 0 / 0.45)",
                    thumbnailOverlayHoverColor: "rgba(0 0 0 / 0.65)",
                    styleVerticalAlignment: "flex-end",
                    dotPreset: "dot-style-4",
                    arrows: false,
                    dots: true,
                    columnBorderShadowborderStyle: "none",
                    columnBorderShadowBdr_Top: "1",
                    columnBorderShadowBdr_Left: "1",
                    columnBorderShadowBdr_Right: "1",
                    columnBorderShadowBdr_Bottom: "1",
                    columnBorderShadowBdr_isLinked: true,
                    columnBorderShadowborderColor: "#000000",
                    thumbnailMarginBottom: 0,
                    leftArrowIcon: "fas fa-caret-left",
                    rightArrowIcon: "fas fa-caret-right",
                    arrowPositionRange: -25,
                    arrowPositionUnit: "px",
                });
                break;
            default:
                return false;
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
                                    <PanelBody title={__("Carousel", "essential-blocks")} initialOpen={true}>
                                        <ToggleControl
                                            label={__("Show Arrows", "essential-blocks")}
                                            checked={arrows}
                                            onChange={() => {
                                                setAttributes({
                                                    arrows: !arrows,
                                                });
                                            }}
                                        />
                                        <ToggleControl
                                            label={__("Equal Height", "essential-blocks")}
                                            checked={adaptiveHeight}
                                            onChange={() => {
                                                setAttributes({
                                                    adaptiveHeight: !adaptiveHeight,
                                                });
                                            }}
                                        />

                                        <ToggleControl
                                            label={__("Autoplay", "essential-blocks")}
                                            checked={autoplay}
                                            onChange={() => {
                                                autoplay ? slider.current.slickPlay() : slider.current.slickPause();
                                                setAttributes({
                                                    autoplay: !autoplay,
                                                });
                                            }}
                                        />

                                        <ToggleControl
                                            label={__("Dots", "essential-blocks")}
                                            checked={dots}
                                            onChange={() => setAttributes({ dots: !dots })}
                                        />

                                        <ToggleControl
                                            label={__("Infinite", "essential-blocks")}
                                            checked={infinite}
                                            onChange={() =>
                                                setAttributes({
                                                    infinite: !infinite,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__("Pause on Hover", "essential-blocks")}
                                            checked={pauseOnHover}
                                            onChange={() =>
                                                setAttributes({
                                                    pauseOnHover: !pauseOnHover,
                                                })
                                            }
                                        />

                                        <ResponsiveRangeController
                                            baseLabel={__("Slides to Show", "essential-blocks")}
                                            controlName={SLIDE_TO_SHOW}
                                            resRequiredProps={resRequiredProps}
                                            units={[]}
                                            min={1}
                                            max={8}
                                            step={1}
                                        />

                                        {autoplay && (
                                            <RangeControl
                                                label={__("Autoplay Speed", "essential-blocks")}
                                                value={autoplaySpeed}
                                                onChange={(autoplaySpeed) =>
                                                    setAttributes({
                                                        autoplaySpeed,
                                                    })
                                                }
                                                min={0}
                                                max={8000}
                                            />
                                        )}

                                        <RangeControl
                                            label={__("Animation Speed", "essential-blocks")}
                                            value={speed}
                                            onChange={(speed) => setAttributes({ speed })}
                                            min={0}
                                            max={3000}
                                        />

                                        {dots && (
                                            <SelectControl
                                                label={__("Dot Preset", "essential-blocks")}
                                                value={dotPreset}
                                                options={DOT_PRESETS}
                                                onChange={(dotPreset) => setAttributes({ dotPreset })}
                                            />
                                        )}
                                    </PanelBody>

                                    <PanelBody title={__("Layout", "essential-blocks")} initialOpen={false}>
                                        <SelectControl
                                            label={__("Template", "essential-blocks")}
                                            value={preset}
                                            options={PRESETS}
                                            onChange={(selected) => changePreset(selected)}
                                        />

                                        <ToggleControl
                                            label={__("Show Thumbnail?")}
                                            checked={showThumbnail}
                                            onChange={() => {
                                                setAttributes({
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
                                                {preset === "style-3" && (
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
                                            </>
                                        )}

                                        {preset === "style-4" && preset === "pro-style-5" && (
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
                                                <TextControl
                                                    label="Button Text"
                                                    type={"text"}
                                                    value={readmoreText}
                                                    onChange={(text) =>
                                                        setAttributes({
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
                                                setAttributes({
                                                    showMeta: !showMeta,
                                                });
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

                                    <CustomQuery
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        setQueryResults={setQueryResults}
                                    />
                                </>
                            )}

                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Carousel", "essential-blocks")} initialOpen={true}>
                                        <ResponsiveRangeController
                                            baseLabel={__("Slides Gap", "essential-blocks")}
                                            controlName={SLIDES_GAP}
                                            resRequiredProps={resRequiredProps}
                                            units={[]}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </PanelBody>

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
                                        <PanelBody title={__("Border")} initialOpen={false}>
                                            <BorderShadowControl
                                                controlName={COLUMN_BORDER_SHADOW}
                                                resRequiredProps={resRequiredProps}
                                                noShadow
                                            // noBorder
                                            />
                                        </PanelBody>
                                    </PanelBody>

                                    {showThumbnail && (
                                        <PanelBody title={__("Thumbnail", "essential-blocks")} initialOpen={false}>
                                            {preset != "style-4" ||
                                                (preset != "pro-style-5" && (
                                                    <>
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
                                                    </>
                                                ))}

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
                                                    onChange={(newColor) =>
                                                        setAttributes({
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
                                                        setAttributes({
                                                            titleHoverColor: newColor,
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

                                    {preset != "style-4" ||
                                        (preset != "pro-style-5" && showReadMore && (
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
                                                            onChange={(newColor) =>
                                                                setAttributes({
                                                                    readmoreColor: newColor,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__("Background Color", "essential-blocks")}
                                                            color={readmoreBGColor}
                                                            onChange={(newColor) =>
                                                                setAttributes({
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
                                                                setAttributes({
                                                                    readmoreHoverColor: newColor,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__("Hover Background Color", "essential-blocks")}
                                                            color={readmoreBGHoverColor}
                                                            onChange={(newColor) =>
                                                                setAttributes({
                                                                    readmoreBGHoverColor: newColor,
                                                                })
                                                            }
                                                        />
                                                    </>
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
                                                                isPrimary={readmoreTextAlign === item.value}
                                                                isSecondary={readmoreTextAlign !== item.value}
                                                                onClick={() =>
                                                                    setAttributes({
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
                                        ))}

                                    {showMeta && (
                                        <PanelBody title={__("Meta", "essential-blocks")} initialOpen={false}>
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
                                                        label={__("Author Color", "essential-blocks")}
                                                        color={authorMetaColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                authorMetaColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Date Color", "essential-blocks")}
                                                        color={dateMetaColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                dateMetaColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Common Color", "essential-blocks")}
                                                        color={commonMetaColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                commonMetaColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Common Divider Color", "essential-blocks")}
                                                        color={commonMetaDividerColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                commonMetaDividerColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Category Color", "essential-blocks")}
                                                        color={categoryMetaColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                categoryMetaColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Category Divider Color", "essential-blocks")}
                                                        color={categoryMetaDividerColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                categoryMetaDividerColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Tag Color", "essential-blocks")}
                                                        color={tagMetaColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                tagMetaColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Tag BG Color", "essential-blocks")}
                                                        color={tagMetaBgColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                tagMetaBgColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Tag Divider Color", "essential-blocks")}
                                                        color={tagMetaDividerColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                tagMetaDividerColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Dynamic Data Color", "essential-blocks")}
                                                        color={dynamicMetaColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                dynamicMetaColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Dynamic Data BG Color", "essential-blocks")}
                                                        color={dynamicMetaBgColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                dynamicMetaBgColor: newColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            {metaColorType === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__("Author Hover Color", "essential-blocks")}
                                                        color={authorMetaHoverColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                authorMetaHoverColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Common Hover Color", "essential-blocks")}
                                                        color={commonMetaHoverColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                commonMetaHoverColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Category Hover Color", "essential-blocks")}
                                                        color={categoryMetaHoverColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                categoryMetaHoverColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Tag Hover Color", "essential-blocks")}
                                                        color={tagMetaHoverColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                tagMetaHoverColor: newColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__("Tag BG Hover Color", "essential-blocks")}
                                                        color={tagMetaBgHoverColor}
                                                        onChange={(newColor) =>
                                                            setAttributes({
                                                                tagMetaBgHoverColor: newColor,
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
                                                baseLabel="Avatar Border Radius"
                                            />
                                        </PanelBody>
                                    )}

                                    {arrows && (
                                        <PanelBody title={__("Arrow", "essential-blocks")} initialOpen={false}>
                                            <EBIconPicker
                                                value={leftArrowIcon}
                                                onChange={(icon) =>
                                                    setAttributes({
                                                        leftArrowIcon: icon,
                                                    })
                                                }
                                                title={__("Left Arrow Icon", "essential-blocks")}
                                                icons={{ fontAwesome: faArrowIcons }}
                                                disableDashicon={true}
                                            />
                                            <EBIconPicker
                                                value={rightArrowIcon}
                                                onChange={(icon) =>
                                                    setAttributes({
                                                        rightArrowIcon: icon,
                                                    })
                                                }
                                                title={__("Right Arrow Icon", "essential-blocks")}
                                                icons={{ fontAwesome: faArrowIcons }}
                                                disableDashicon={true}
                                            />
                                            <ButtonGroup className="eb-inspector-btn-group">
                                                {NORMAL_HOVER.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        isPrimary={arrowColorType === item.value}
                                                        isSecondary={arrowColorType !== item.value}
                                                        onClick={() =>
                                                            setAttributes({
                                                                arrowColorType: item.value,
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>

                                            {arrowColorType === "normal" && (
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={arrowColor}
                                                    onChange={(newColor) =>
                                                        setAttributes({
                                                            arrowColor: newColor,
                                                        })
                                                    }
                                                />
                                            )}

                                            {arrowColorType === "hover" && (
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={arrowHoverColor}
                                                    onChange={(newColor) =>
                                                        setAttributes({
                                                            arrowHoverColor: newColor,
                                                        })
                                                    }
                                                />
                                            )}

                                            <ResponsiveRangeController
                                                baseLabel={__("Arrow Size", "essential-blocks")}
                                                controlName={ARROW_SIZE}
                                                resRequiredProps={resRequiredProps}
                                                units={FONT_UNIT_TYPES}
                                                min={1}
                                                max={50}
                                                step={1}
                                            />

                                            <ResponsiveRangeController
                                                baseLabel={__("Arrow Position", "essential-blocks")}
                                                controlName={ARROW_POSITION}
                                                resRequiredProps={resRequiredProps}
                                                units={UNIT_TYPES}
                                                min={-100}
                                                max={100}
                                                step={1}
                                            />
                                        </PanelBody>
                                    )}

                                    {dots && (
                                        <PanelBody title={__("Dot", "essential-blocks")} initialOpen={false}>
                                            <ColorControl
                                                label={__("Color", "essential-blocks")}
                                                color={dotsColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        dotsColor: color,
                                                    })
                                                }
                                            />

                                            <ColorControl
                                                label={__("Active Color", "essential-blocks")}
                                                color={dotsActiveColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        dotsActiveColor: color,
                                                    })
                                                }
                                            />

                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Dots Size",
                                                    "essential-blocks"
                                                )}
                                                controlName={DOTS_SIZE}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                units={FONT_UNIT_TYPES}
                                                min={1}
                                                max={50}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Dots Gap",
                                                    "essential-blocks"
                                                )}
                                                controlName={DOTS_GAP}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                units={UNIT_TYPES}
                                                min={0}
                                                max={50}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Dots Size",
                                                    "essential-blocks"
                                                )}
                                                controlName={DOTS_SIZE}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                units={FONT_UNIT_TYPES}
                                                min={1}
                                                max={50}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Dots Gap",
                                                    "essential-blocks"
                                                )}
                                                controlName={DOTS_GAP}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                units={UNIT_TYPES}
                                                min={0}
                                                max={50}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Dots Position (PX)",
                                                    "essential-blocks"
                                                )}
                                                controlName={DOTS_POSITION}
                                                resRequiredProps={resRequiredProps}
                                                min={-100}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />
                                        </PanelBody>
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
export default Inspector;
