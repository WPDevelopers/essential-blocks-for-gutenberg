/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    PanelBody,
    BaseControl,
    ToggleControl,
    RangeControl,
    SelectControl,
    ButtonGroup,
    Button,
    TextControl,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
const {
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    ColorControl,
    BorderShadowControl,
    UnitControl,
    ResetControl,
} = window.EBControls;
import objAttributes from "../../../../blocks/table-of-contents/src/attributes";
import Select2 from "react-select";
import {
    typoPrefix_title,
    typoPrefix_content,
} from "../../../../blocks/table-of-contents/src/constants/typographyPrefixConstants";

import { wrapMaxWidthPrefix } from "../../../../blocks/table-of-contents/src/constants/rangeNames";

import {
    WrpMarginConst,
    WrpPaddingConst,
    titlePaddingConst,
    contentPaddingConst,
} from "../../../../blocks/table-of-contents/src/constants/dimensionsConstants";

import { WrpBdShadowConst } from "../../../../blocks/table-of-contents/src/constants/borderShadowConstants";

import {
    //
    HEADERS,
    ALIGNS,
    BORDER_STYLES,
    SCROLL_OPTIONS,
    STICKY_POSITION,
} from "../../../../blocks/table-of-contents/src/constants";

function TableOfContents(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        collapsible,
        initialCollapse,
        mainBgc,
        titleBg,
        titleColor,
        contentBg,
        contentColor,
        contentHoverColor,
        indent,
        contentGap,
        contentGapUnit,
        displayTitle,
        titleAlign,
        isSmooth,
        seperator,
        seperatorSize,
        seperatorColor,
        seperatorStyle,
        scrollToTop,
        arrowHeight,
        arrowWidth,
        arrowBg,
        arrowColor,
        listSeperatorWidth,
        listSeperatorStyle,
        listSeperatorColor,
        hasUnderline,
        isSticky,
        contentHeight,
        topSpace,
        hideOnMobile,
        scrollTarget,
        stickyPosition,
        showListSeparator,
        topOffset,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                headers: [],
                visibleHeaders: Array(6).fill(true),
                listType: "ul",
                title: "Table of Contents",
                collapsible: false,
                initialCollapse: false,
                contentGapUnit: "px",
                displayTitle: true,
                titleAlign: "left",
                titleSizeUnit: "px",
                titleFontSize: 22,
                titleFontWeight: "normal",
                titleLetterSpacingUnit: "px",
                titleLineHeightUnit: "px",
                contentSizeUnit: "px",
                contentFontWeight: "normal",
                contentLetterSpacingUnit: "px",
                contentLineHeight: 1.4,
                isSmooth: true,
                seperator: false,
                seperatorStyle: "solid",
                borderStyle: "solid",
                titlePaddingTop: 0,
                titlePaddingRight: 0,
                titlePaddingBottom: 0,
                titlePaddingLeft: 10,
                titlePaddingUnit: "px",
                scrollToTop: false,
                contentPaddingTop: 0,
                contentPaddingRight: 0,
                contentPaddingBottom: 0,
                contentPaddingLeft: 0,
                contentPaddingUnit: "px",
                listSeperatorStyle: "solid",
                hasUnderline: false,
                topSpace: 25,
                contentHeightUnit: "px",
                contentWidth: 300,
                contentWidthUnit: "px",
                isSticky: false,
                hideOnMobile: false,
                zIndex: 999,
                contentAlign: "left",
                containerWidth: 100,
                scrollTarget: "scroll_to_toc",
                stickyPosition: "left",
                [`${wrapMaxWidthPrefix}Unit`]: "px",
                [`${wrapMaxWidthPrefix}isLinked`]: true,
                [`${titlePaddingConst}Unit`]: "px",
                [`${titlePaddingConst}isLinked`]: true,
                [`${contentPaddingConst}Unit`]: "px",
                [`${contentPaddingConst}isLinked`]: true,
                [`${WrpMarginConst}Unit`]: "px",
                [`${WrpMarginConst}isLinked`]: true,
                [`${WrpPaddingConst}Unit`]: "px",
                [`${WrpPaddingConst}isLinked`]: true,
                [`${WrpBdShadowConst}Bdr_Unit`]: "px",
                [`${WrpBdShadowConst}Bdr_isLinked`]: true,
                [`${WrpBdShadowConst}Rds_Unit`]: "px",
                [`${WrpBdShadowConst}Rds_isLinked`]: true,
                [`${WrpBdShadowConst}BorderType`]: "normal",
                [`${WrpBdShadowConst}shadowType`]: "normal",
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

    const onHeaderChange = (options) => {
        if (options) {
            let visibleHeaders = Array(6).fill(false);

            options.map((option) => (visibleHeaders[option.value - 1] = true));

            handleBlockDefault({ visibleHeaders });
        } else {
            handleBlockDefault({ visibleHeaders: [] });
        }
    };

    const CONTENT_GAP_STEP = contentGapUnit === "em" ? 0.1 : 1;
    const CONTENT_GAP_MAX = contentGapUnit === "em" ? 10 : 100;

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody
                        title={__("Visible Headers", "essential-blocks")}
                    >
                        <div className="fix-select-over-lapping">
                            <Select2
                                options={HEADERS}
                                defaultValue={HEADERS}
                                isMulti
                                onChange={onHeaderChange}
                            />
                        </div>
                    </PanelBody>

                    <PanelBody>
                        <div className="wrap-width-range-fix-style">
                            <ResponsiveRangeController
                                baseLabel={__(
                                    `${
                                        isSticky
                                            ? "sticky content max width"
                                            : "Container max width"
                                    }`
                                )}
                                controlName={wrapMaxWidthPrefix}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={2000}
                                step={1}
                            />
                        </div>

                        {displayTitle && !isSticky && (
                            <ToggleControl
                                label={__("Collapsible", "essential-blocks")}
                                checked={collapsible}
                                onChange={() =>
                                    handleBlockDefault({
                                        collapsible: !collapsible,
                                    })
                                }
                            />
                        )}

                        {displayTitle && collapsible && (
                            <ToggleControl
                                label={__(
                                    "Collapsed initially",
                                    "essential-blocks"
                                )}
                                checked={initialCollapse}
                                onChange={() =>
                                    handleBlockDefault({
                                        initialCollapse: !initialCollapse,
                                    })
                                }
                            />
                        )}

                        <ToggleControl
                            label={__("Sticky contents", "essential-blocks")}
                            help={__(
                                "Always show contents on sidebar (Visible on frontend only)"
                            )}
                            checked={isSticky}
                            onChange={() =>
                                handleBlockDefault({ isSticky: !isSticky })
                            }
                        />

                        {isSticky && (
                            <PanelBody
                                title={__(
                                    "Sticky settings",
                                    "essential-blocks"
                                )}
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__(
                                        "Sticky Position",
                                        "essential-blocks"
                                    )}
                                    value={stickyPosition}
                                    options={STICKY_POSITION}
                                    onChange={(stickyPosition) =>
                                        handleBlockDefault({ stickyPosition })
                                    }
                                />

                                <ToggleControl
                                    label={__(
                                        "Hide on Mobile",
                                        "essential-blocks"
                                    )}
                                    checked={hideOnMobile}
                                    onChange={() =>
                                        handleBlockDefault({
                                            hideOnMobile: !hideOnMobile,
                                        })
                                    }
                                />

                                <div className="eb-reset-button-margin-fix">
                                    <ResetControl
                                        onReset={() =>
                                            handleBlockDefault({
                                                contentHeight: undefined,
                                            })
                                        }
                                    >
                                        <RangeControl
                                            label={__(
                                                "Content min-height",
                                                "essential-blocks"
                                            )}
                                            help={__(
                                                "Visible on frontend only",
                                                "essential-blocks"
                                            )}
                                            value={contentHeight}
                                            onChange={(contentHeight) =>
                                                handleBlockDefault({
                                                    contentHeight,
                                                })
                                            }
                                            min={0}
                                            max={1000}
                                        />
                                    </ResetControl>
                                </div>
                                <RangeControl
                                    label={__("Top Space", "essential-blocks")}
                                    help={__(
                                        "Visible on frontend only",
                                        "essential-blocks"
                                    )}
                                    value={topSpace}
                                    onChange={(topSpace) =>
                                        handleBlockDefault({ topSpace })
                                    }
                                    min={0}
                                    max={100}
                                />
                            </PanelBody>
                        )}

                        {!isSticky && (
                            <ToggleControl
                                label={__("Display Title", "essential-blocks")}
                                checked={displayTitle}
                                onChange={() =>
                                    handleBlockDefault({
                                        displayTitle: !displayTitle,
                                    })
                                }
                            />
                        )}

                        {displayTitle && (
                            <PanelBody
                                title={__("Title Settings", "essential-blocks")}
                                initialOpen={false}
                            >
                                <BaseControl
                                    label={__("Align", "essential-blocks")}
                                    className="eb-base-control"
                                >
                                    <ButtonGroup>
                                        {ALIGNS.map((align, index) => (
                                            <Button
                                                key={index}
                                                isSmall
                                                isPrimary={
                                                    titleAlign === align.value
                                                }
                                                isSecondary={
                                                    titleAlign !== align.value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        titleAlign: align.value,
                                                    })
                                                }
                                            >
                                                {align.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                <ColorControl
                                    label={__(
                                        "Background Color",
                                        "essential-blocks"
                                    )}
                                    color={titleBg}
                                    onChange={(titleBg) =>
                                        handleBlockDefault({ titleBg })
                                    }
                                />

                                <ColorControl
                                    label={__("Text Color", "essential-blocks")}
                                    color={titleColor}
                                    onChange={(titleColor) =>
                                        handleBlockDefault({ titleColor })
                                    }
                                />

                                <TypographyDropdown
                                    baseLabel="Typography"
                                    typographyPrefixConstant={typoPrefix_title}
                                    resRequiredProps={resRequiredProps}
                                    defaultFontSize={22}
                                />

                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={titlePaddingConst}
                                    baseLabel="Padding"
                                />
                            </PanelBody>
                        )}

                        {displayTitle && (
                            <ToggleControl
                                label={__(
                                    "Title Separator",
                                    "essential-blocks"
                                )}
                                checked={seperator}
                                onChange={() =>
                                    handleBlockDefault({
                                        seperator: !seperator,
                                    })
                                }
                            />
                        )}

                        {displayTitle && seperator && (
                            <PanelBody
                                title={__(
                                    "Title separator settings",
                                    "essential-blocks"
                                )}
                                initialOpen={false}
                            >
                                <RangeControl
                                    label={__(
                                        "Seperator Size",
                                        "essential-blocks"
                                    )}
                                    value={seperatorSize}
                                    onChange={(seperatorSize) =>
                                        handleBlockDefault({ seperatorSize })
                                    }
                                    min={0}
                                    max={100}
                                />

                                <ColorControl
                                    label={__(
                                        "Separator Color",
                                        "essential-blocks"
                                    )}
                                    color={seperatorColor}
                                    onChange={(seperatorColor) =>
                                        handleBlockDefault({ seperatorColor })
                                    }
                                />

                                <SelectControl
                                    label={__(
                                        "Separator Style",
                                        "essential-blocks"
                                    )}
                                    value={seperatorStyle}
                                    options={BORDER_STYLES}
                                    onChange={(seperatorStyle) =>
                                        handleBlockDefault({ seperatorStyle })
                                    }
                                />
                            </PanelBody>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Content Settings", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Display Underline", "essential-blocks")}
                            checked={hasUnderline}
                            onChange={() =>
                                handleBlockDefault({
                                    hasUnderline: !hasUnderline,
                                })
                            }
                        />

                        <RangeControl
                            label={__("Indent", "essential-blocks")}
                            value={indent}
                            onChange={(indent) =>
                                handleBlockDefault({ indent })
                            }
                        />

                        <UnitControl
                            selectedUnit={contentGapUnit}
                            unitTypes={[
                                { label: "px", value: "px" },
                                { label: "%", value: "%" },
                                { label: "em", value: "em" },
                            ]}
                            onClick={(contentGapUnit) =>
                                handleBlockDefault({ contentGapUnit })
                            }
                        />

                        <RangeControl
                            label={__("Content Gap", "essential-blocks")}
                            value={contentGap}
                            onChange={(contentGap) =>
                                handleBlockDefault({ contentGap })
                            }
                            min={0}
                            max={CONTENT_GAP_MAX}
                            step={CONTENT_GAP_STEP}
                        />

                        <ColorControl
                            label={__("Background Color", "essential-blocks")}
                            color={contentBg}
                            onChange={(contentBg) =>
                                handleBlockDefault({ contentBg })
                            }
                        />

                        <ColorControl
                            label={__("Text Color", "essential-blocks")}
                            color={contentColor}
                            onChange={(contentColor) =>
                                handleBlockDefault({ contentColor })
                            }
                        />

                        <ColorControl
                            label={__("Hover Color", "essential-blocks")}
                            color={contentHoverColor}
                            onChange={(contentHoverColor) =>
                                handleBlockDefault({ contentHoverColor })
                            }
                        />

                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_content}
                            resRequiredProps={resRequiredProps}
                            defaultFontSize={20}
                        />

                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={contentPaddingConst}
                            baseLabel="Padding"
                        />

                        <ToggleControl
                            label={__("Show Separator", "essential-blocks")}
                            checked={showListSeparator}
                            onChange={() =>
                                handleBlockDefault({
                                    showListSeparator: !showListSeparator,
                                })
                            }
                        />

                        <TextControl
                            label={__("Offset Top", "essential-blocks")}
                            value={topOffset}
                            onChange={(value) =>
                                handleBlockDefault({ topOffset: value })
                            }
                            type="number"
                        />

                        {showListSeparator && (
                            <>
                                <SelectControl
                                    label={__(
                                        "Separator Style",
                                        "essential-blocks"
                                    )}
                                    value={listSeperatorStyle}
                                    options={BORDER_STYLES}
                                    onChange={(listSeperatorStyle) =>
                                        handleBlockDefault({
                                            listSeperatorStyle,
                                        })
                                    }
                                />

                                <ColorControl
                                    label={__(
                                        "Separator Color",
                                        "essential-blocks"
                                    )}
                                    color={listSeperatorColor}
                                    onChange={(listSeperatorColor) =>
                                        handleBlockDefault({
                                            listSeperatorColor,
                                        })
                                    }
                                />

                                <RangeControl
                                    label={__(
                                        "Separator Size",
                                        "essential-blocks"
                                    )}
                                    value={listSeperatorWidth}
                                    onChange={(listSeperatorWidth) =>
                                        handleBlockDefault({
                                            listSeperatorWidth,
                                        })
                                    }
                                    min={0}
                                    max={100}
                                />
                            </>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Scroll", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Smooth Scroll", "essential-blocks")}
                            checked={isSmooth}
                            onChange={() =>
                                handleBlockDefault({ isSmooth: !isSmooth })
                            }
                        />

                        <ToggleControl
                            label={__("Scroll To Top", "essential-blocks")}
                            checked={scrollToTop}
                            onChange={() =>
                                handleBlockDefault({
                                    scrollToTop: !scrollToTop,
                                })
                            }
                        />

                        {scrollToTop && (
                            <>
                                {!isSticky && (
                                    <SelectControl
                                        label={__(
                                            "Scroll Target",
                                            "essential-blocks"
                                        )}
                                        value={scrollTarget}
                                        options={SCROLL_OPTIONS}
                                        onChange={(scrollTarget) =>
                                            handleBlockDefault({ scrollTarget })
                                        }
                                    />
                                )}
                                <RangeControl
                                    label={__(
                                        "Arrow Height",
                                        "essential-blocks"
                                    )}
                                    value={arrowHeight}
                                    onChange={(arrowHeight) =>
                                        handleBlockDefault({ arrowHeight })
                                    }
                                    min={0}
                                    max={100}
                                />

                                <RangeControl
                                    label={__(
                                        "Arrow Width",
                                        "essential-blocks"
                                    )}
                                    value={arrowWidth}
                                    onChange={(arrowWidth) =>
                                        handleBlockDefault({ arrowWidth })
                                    }
                                    min={0}
                                    max={100}
                                />

                                <ColorControl
                                    label={__(
                                        "Arrow Background",
                                        "essential-blocks"
                                    )}
                                    color={arrowBg}
                                    onChange={(arrowBg) =>
                                        handleBlockDefault({ arrowBg })
                                    }
                                />

                                <ColorControl
                                    label={__(
                                        "Arrow Color",
                                        "essential-blocks"
                                    )}
                                    color={arrowColor}
                                    onChange={(arrowColor) =>
                                        handleBlockDefault({ arrowColor })
                                    }
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Margin & Padding")}
                        initialOpen={false}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={WrpMarginConst}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={WrpPaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Background ", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ColorControl
                            label={__("Background Color", "essential-blocks")}
                            color={mainBgc}
                            onChange={(mainBgc) =>
                                handleBlockDefault({ mainBgc })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Border & Shadow")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={WrpBdShadowConst}
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

export default TableOfContents;
