/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { select, dispatch } from "@wordpress/data";
const { times } = lodash;
import {
    PanelBody,
    BaseControl,
    ButtonGroup,
    Button,
    ToggleControl,
    RangeControl,
    TabPanel,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
    ACCORDION_TYPES,
    ICON_POSITIONS,
    TITLE_ALIGNMENT,
    CONTENT_ALIGN,
    HEADING,
} from "./constants";

const {
    ColorControl,
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    BorderShadowControl,
    BackgroundControl,
    AdvancedControls,
    EBIconPicker
} = window.EBControls;

import objAttributes from "./attributes";

import {
    typoPrefix_title,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import { rangeIconSize, accGapRange } from "./constants/rangeNames";

import {
    wrapMarginConst,
    wrapPaddingConst,
    iconMarginConst,
    iconPaddingConst,
    tabMarginConst,
    tabPaddingConst,
    conMarginConst,
    conPaddingConst,
} from "./constants/dimensionsConstants";

import {
    WrpBgConst,
    iconBgConst,
    tabBgConst,
    conBgConst,
} from "./constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    iconBdShadowConst,
    tabBdShadowConst,
    conBdShadowConst,
} from "./constants/borderShadowConstants";

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const {
        resOption,
        accordionType,
        displayIcon,
        transitionDuration,
        tabIcon,
        expandedIcon,
        titleColor,
        contentAlign,
        contentColor,
        iconColor,
        iconPosition,
        titleAlignment,
        hoverTitleColor,
        activeBgColor,
        activeTitleColor,
        tagName,
        faqSchema,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];

        const innerBlocks = parentBlocks?.innerBlocks;

        const { updateBlockAttributes } = dispatch("core/block-editor");

        if (innerBlocks) {
            times(innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    inheritedAccordionType: accordionType,
                    inheritedDisplayIcon: displayIcon,
                    inheritedTabIcon: tabIcon,
                    inheritedExpandedIcon: expandedIcon,
                    inheritedTagName: tagName,
                    faqSchema: faqSchema,
                });
            });
        }
    }, [accordionType, displayIcon, tabIcon, expandedIcon, tagName, faqSchema]);

    return (
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
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
                                    <PanelBody>
                                        <BaseControl
                                            label={__(
                                                "Accordion Types",
                                                "essential-blocks"
                                            )}
                                            id="eb-accordion-type"
                                        >
                                            <ButtonGroup id="eb-accordion-type-btgrp">
                                                {ACCORDION_TYPES.map(
                                                    (item, key) => (
                                                        <Button
                                                            key={key}
                                                            // isLarge
                                                            isSecondary={
                                                                accordionType !==
                                                                item.value
                                                            }
                                                            isPrimary={
                                                                accordionType ===
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    accordionType:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <BaseControl
                                            label={__(
                                                "Title Level",
                                                "essential-blocks"
                                            )}
                                            id="eb-accordion-heading-alignment"
                                        >
                                            <ButtonGroup className="eb-accordion-heading-alignment eb-html-tag-buttongroup">
                                                {HEADING.map((item, key) => (
                                                    <Button
                                                        key={key}
                                                        // isLarge
                                                        isPrimary={
                                                            tagName ===
                                                            item.value
                                                        }
                                                        isSecondary={
                                                            tagName !==
                                                            item.value
                                                        }
                                                        onClick={() =>
                                                            setAttributes({
                                                                tagName:
                                                                    item.value,
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <RangeControl
                                            label={__(
                                                "Toggle Speed",
                                                "essential-blocks"
                                            )}
                                            value={transitionDuration}
                                            onChange={(transitionDuration) =>
                                                setAttributes({
                                                    transitionDuration,
                                                })
                                            }
                                            min={0}
                                            max={5}
                                            step={0.1}
                                            allowReset={true}
                                        />
                                        <ResponsiveRangeController
                                            noUnits
                                            baseLabel={__(
                                                "Accordions Gap",
                                                "essential-blocks"
                                            )}
                                            controlName={accGapRange}
                                            resRequiredProps={resRequiredProps}
                                            min={1}
                                            max={100}
                                            step={1}
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Enable FAQ Schema",
                                                "essential-blocks"
                                            )}
                                            checked={faqSchema}
                                            onChange={() =>
                                                setAttributes({
                                                    faqSchema: !faqSchema,
                                                })
                                            }
                                        />
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Icon", "essential-blocks")}
                                    // initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Display Icon",
                                                "essential-blocks"
                                            )}
                                            checked={displayIcon}
                                            onChange={() =>
                                                setAttributes({
                                                    displayIcon: !displayIcon,
                                                })
                                            }
                                        />
                                        {displayIcon && (
                                            <>
                                                <EBIconPicker
                                                    title={__(
                                                        "Tab Icon",
                                                        "essential-blocks"
                                                    )}
                                                    value={tabIcon}
                                                    onChange={(icon) =>
                                                        setAttributes({
                                                            tabIcon: icon,
                                                        })
                                                    }
                                                />
                                                <EBIconPicker
                                                    title={__(
                                                        "Expanded Icon",
                                                        "essential-blocks"
                                                    )}
                                                    value={expandedIcon}
                                                    onChange={(icon) =>
                                                        setAttributes({
                                                            expandedIcon: icon,
                                                        })
                                                    }
                                                />
                                                <BaseControl
                                                    label={__(
                                                        "Icon Position",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <ButtonGroup id="eb-icon-pos-btgrp">
                                                        {ICON_POSITIONS.map(
                                                            (item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    // isLarge
                                                                    isSecondary={
                                                                        iconPosition !==
                                                                        item.value
                                                                    }
                                                                    isPrimary={
                                                                        iconPosition ===
                                                                        item.value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                iconPosition:
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

                                                <ResponsiveRangeController
                                                    noUnits
                                                    baseLabel={__(
                                                        "Icon Size",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={rangeIconSize}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={1}
                                                    max={200}
                                                    step={1}
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Icon Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={iconColor}
                                                    onChange={(iconColor) =>
                                                        setAttributes({
                                                            iconColor,
                                                        })
                                                    }
                                                />

                                                <PanelBody
                                                    title={__(
                                                        "Margin & Padding"
                                                    )}
                                                // initialOpen={true}
                                                >
                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        controlName={
                                                            iconMarginConst
                                                        }
                                                        baseLabel="Margin"
                                                    />
                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        controlName={
                                                            iconPaddingConst
                                                        }
                                                        baseLabel="Padding"
                                                    />
                                                </PanelBody>

                                                <PanelBody
                                                    title={__(
                                                        "Background ",
                                                        "essential-blocks"
                                                    )}
                                                // initialOpen={false}
                                                >
                                                    <BackgroundControl
                                                        controlName={
                                                            iconBgConst
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        noOverlay
                                                        noMainBgi
                                                    />
                                                </PanelBody>

                                                <PanelBody
                                                    title={__(
                                                        "Border & Shadow"
                                                    )}
                                                // initialOpen={false}
                                                >
                                                    <BorderShadowControl
                                                        controlName={
                                                            iconBdShadowConst
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        defaultBdrColor={
                                                            "#aaaaaa"
                                                        }
                                                        defaultBdrStyle={
                                                            "solid"
                                                        }
                                                    // noShadow
                                                    // noBorder
                                                    />
                                                </PanelBody>
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Tab", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Title Align ",
                                                "essential-blocks"
                                            )}
                                            id="eb-accoridon-title-align"
                                        >
                                            <ButtonGroup>
                                                {TITLE_ALIGNMENT.map(
                                                    (item, key) => (
                                                        <Button
                                                            key={key}
                                                            isSecondary={
                                                                titleAlignment !==
                                                                item.value
                                                            }
                                                            isPrimary={
                                                                titleAlignment ===
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    titleAlignment:
                                                                        item.value,
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
                                            baseLabel="Title Typography"
                                            typographyPrefixConstant={
                                                typoPrefix_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__(
                                                "Title Color",
                                                "essential-blocks"
                                            )}
                                            color={titleColor}
                                            onChange={(titleColor) =>
                                                setAttributes({ titleColor })
                                            }
                                        />

                                        <ColorControl
                                            label={__(
                                                "Title hover Color",
                                                "essential-blocks"
                                            )}
                                            color={hoverTitleColor}
                                            onChange={(hoverTitleColor) =>
                                                setAttributes({
                                                    hoverTitleColor,
                                                })
                                            }
                                        />

                                        <PanelBody
                                            title={__("Margin & Padding")}
                                        // initialOpen={true}
                                        >
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={tabMarginConst}
                                                baseLabel="Margin"
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={tabPaddingConst}
                                                baseLabel="Padding"
                                            />
                                        </PanelBody>

                                        <PanelBody
                                            title={__(
                                                "Background ",
                                                "essential-blocks"
                                            )}
                                        // initialOpen={false}
                                        >
                                            <BackgroundControl
                                                controlName={tabBgConst}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                noMainBgi
                                                noOverlay
                                            />
                                        </PanelBody>

                                        <PanelBody
                                            title={__(
                                                "Expanded Tab Colors",
                                                "essential-blocks"
                                            )}
                                        // initialOpen={false}
                                        >
                                            <ColorControl
                                                label={__(
                                                    "Background Color",
                                                    "essential-blocks"
                                                )}
                                                color={activeBgColor}
                                                onChange={(activeBgColor) =>
                                                    setAttributes({
                                                        activeBgColor,
                                                    })
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Title Color",
                                                    "essential-blocks"
                                                )}
                                                color={activeTitleColor}
                                                onChange={(activeTitleColor) =>
                                                    setAttributes({
                                                        activeTitleColor,
                                                    })
                                                }
                                            />
                                            <span>
                                                <i>
                                                    {__(
                                                        "To see the changes, go to frontend page",
                                                        "essential-blocks"
                                                    )}
                                                </i>
                                            </span>
                                        </PanelBody>

                                        <PanelBody
                                            title={__("Border & Shadow")}
                                        // initialOpen={false}
                                        >
                                            <BorderShadowControl
                                                controlName={tabBdShadowConst}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            // noShadow
                                            // noBorder
                                            />
                                        </PanelBody>
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Content ",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Align",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup>
                                                {CONTENT_ALIGN.map(
                                                    (item, key) => (
                                                        <Button
                                                            key={key}
                                                            // isLarge
                                                            isSecondary={
                                                                contentAlign !==
                                                                item.value
                                                            }
                                                            isPrimary={
                                                                contentAlign ===
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    contentAlign:
                                                                        item.value,
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
                                            baseLabel="Content Typography"
                                            typographyPrefixConstant={
                                                typoPrefix_content
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__(
                                                "Content Color",
                                                "essential-blocks"
                                            )}
                                            color={contentColor}
                                            onChange={(contentColor) =>
                                                setAttributes({ contentColor })
                                            }
                                        />

                                        <PanelBody
                                            title={__("Margin & Padding")}
                                        // initialOpen={true}
                                        >
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={conMarginConst}
                                                baseLabel="Margin"
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={conPaddingConst}
                                                baseLabel="Padding"
                                            />
                                        </PanelBody>

                                        <PanelBody
                                            title={__(
                                                "Background ",
                                                "essential-blocks"
                                            )}
                                        // initialOpen={false}
                                        >
                                            <BackgroundControl
                                                controlName={conBgConst}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                noOverlay
                                                noMainBgi
                                            />
                                        </PanelBody>

                                        <PanelBody
                                            title={__("Border & Shadow")}
                                        // initialOpen={false}
                                        >
                                            <BorderShadowControl
                                                controlName={conBdShadowConst}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            // noShadow
                                            // noBorder
                                            />
                                        </PanelBody>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Margin & Padding",
                                            "essential-blocks"
                                        )}
                                    // initialOpen={true}
                                    >
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={wrapMarginConst}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={wrapPaddingConst}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Background ",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={WrpBgConst}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={WrpBdShadowConst}
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
};

export default Inspector;
