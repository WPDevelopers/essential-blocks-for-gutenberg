/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    TextControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    __experimentalDivider as Divider,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import {
    TWOUNITS,
    ICON_POSITION,
    ALIGNMENT,
    buttonIconSpacing,
    buttonIconSize,
    buttonPadding,
    buttonMargin,
    wrapperPadding,
    wrapperMargin,
    titlePadding,
    titleMargin,
    priceCurrencyMargin,
    buttonBorderShadow,
    buttonBackgroundControl,
    priceTableBackground,
    wrapperBorderShadow,
    iconBorderShadow,
    ribbonBorderShadow,
    headerIconSize,
    headerIconWidth,
    headerIconHeight,
    salepriceCurrencyMargin,
    featuresIconSize,
    RIBBON_ALIGNMENT_HORIZONTAL,
    RIBBON_ALIGNMENT_VERTICAL,
} from "./constants";

import {
    typoPrefix_button,
    typoPrefix_title,
    typoPrefix_subtitle,
    typoPrefix_saleprice_currency,
    typoPrefix_price_title,
    typoPrefix_price_currency,
    typoPrefix_saleprice,
    typoPrefix_pricing_period,
    typoPrefix_features_text,
    typoPrefix_ribbon,
} from "./constants/typographyPrefixConstants";

import objAttributes from "./attributes";
import SortableFeatures from "./sortable-features";

const {
    faIcons,
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BackgroundControl,
    BorderShadowControl,
    AdvancedControls,
    DynamicInputControl,
    EBIconPicker
} = window.EBControls;

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        pricingStyle,
        title,
        defaultSubtitle,
        showSubtitle,
        subtitle,
        showHeaderIcon,
        defaultHeaderIcon,
        headerIcon,
        defaultTitleLine,
        showTitleLine,
        mainPrice,
        showOnSale,
        salePrice,
        priceCurrency,
        currencyPlacement,
        pricePeriod,
        periodSeparator,
        hideFeatures,
        features,
        showButton,
        buttonIcon,
        buttonIconPosition,
        buttonText,
        buttonURL,
        buttonTextColor,
        hoverTextColor,
        titleTextColor,
        titleLineColor,
        titleBackgroundColor,
        subtitleTextColor,
        showIconBackground,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        iconColor,
        iconHoverColor,
        priceTextColor,
        priceCurrencyTextColor,
        salePriceTextColor,
        salepriceCurrencyTextColor,
        pricingPeriodTextColor,
        featuresTextColor,
        showRibbon,
        ribbonStyle,
        ribbonText,
        ribbonColor,
        ribbonBackgroundColor,
        featuresAlignment,
        buttonAlignment,
        headerAlignment,
        priceAlignment,
        iconAlignment,
        ribbonAlignHorizontal,
        ribbonAlignVertical,
        newWindow,
        showFeatureLine,
        pricingTopBgColor,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const onFeatureAdd = () => {
        const count = attributes.features.length + 1;
        const features = [
            ...attributes.features,
            {
                icon: "fas fa-check",
                text: `Feature ${count}`,
                color: "#03bb89",
            },
        ];

        setAttributes({ features });
    };

    const handlePricingStyle = (pricingStyle) => {
        setAttributes({ pricingStyle });
        switch (pricingStyle) {
            case "style-1":
                setAttributes({
                    showSubtitle: false,
                    showHeaderIcon: false,
                    iconColor: "#000000",
                    iconHoverColor: "#000000",
                    titleTextColor: "#000000",
                    priceCurrencyTextColor: "#000000",
                    priceTextColor: "#000000",
                    pricingPeriodTextColor: "#999999",
                    ribbonBackgroundColor: "#00c853",
                    // ribbonColor: "#7967ff",
                    btnBgbackgroundColor: "#00c853",
                });
                defaultSubtitle ? setAttributes({ showSubtitle: true }) : "";
                defaultHeaderIcon
                    ? setAttributes({ showHeaderIcon: true })
                    : "";
                defaultTitleLine === undefined
                    ? setAttributes({ showTitleLine: true })
                    : "";
                break;

            case "style-2":
                setAttributes({
                    iconColor: "#000000",
                    iconHoverColor: "#000000",
                    titleTextColor: "#000000",
                    priceCurrencyTextColor: "#000000",
                    priceTextColor: "#000000",
                    pricingPeriodTextColor: "#999999",
                    ribbonBackgroundColor: "#00c853",
                    // ribbonColor: "#7967ff",
                    btnBgbackgroundColor: "#00c853",
                });
                defaultSubtitle === undefined
                    ? setAttributes({ showSubtitle: true })
                    : "";
                defaultHeaderIcon === undefined
                    ? setAttributes({ showHeaderIcon: true })
                    : "";
                defaultTitleLine === undefined
                    ? setAttributes({ showTitleLine: false })
                    : "";
                break;

            case "style-3":
                setAttributes({
                    showSubtitle: false,
                    showHeaderIcon: false,
                    iconColor: "#000000",
                    iconHoverColor: "#000000",
                    titleTextColor: "#000000",
                    priceCurrencyTextColor: "#000000",
                    priceTextColor: "#000000",
                    pricingPeriodTextColor: "#999999",
                    ribbonBackgroundColor: "#00c853",
                    // ribbonColor: "#7967ff",
                    btnBgbackgroundColor: "#00c853",
                });
                defaultSubtitle ? setAttributes({ showSubtitle: true }) : "";
                defaultHeaderIcon
                    ? setAttributes({ showHeaderIcon: true })
                    : "";
                defaultTitleLine === undefined
                    ? setAttributes({ showTitleLine: true })
                    : "";
                break;
            case "style-4":
                setAttributes({
                    iconColor: "#ffffff",
                    iconHoverColor: "#ffffff",
                    titleTextColor: "#ffffff",
                    priceCurrencyTextColor: "#ffffff",
                    priceTextColor: "#ffffff",
                    pricingPeriodTextColor: "#ffffff",
                    ribbonBackgroundColor: "#cc5ae7",
                    // ribbonColor: "#7967ff",
                    btnBgbackgroundColor: "#7967ff",
                });
                defaultHeaderIcon === undefined
                    ? setAttributes({ showHeaderIcon: true })
                    : "";
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
                        <div className={"eb-tab-controls" + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Settings",
                                            "essential-blocks"
                                        )}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Pricing Preset",
                                                "essential-blocks"
                                            )}
                                            value={pricingStyle}
                                            options={[
                                                {
                                                    label: "Default",
                                                    value: "style-1",
                                                },
                                                {
                                                    label: "Style 2",
                                                    value: "style-2",
                                                },
                                                {
                                                    label: "Style 3",
                                                    value: "style-3",
                                                },
                                                {
                                                    label: "Style 4 (New)",
                                                    value: "style-4",
                                                },
                                            ]}
                                            onChange={(pricingStyle) =>
                                                handlePricingStyle(pricingStyle)
                                            }
                                        />
                                        <TextControl
                                            label={__(
                                                "Title",
                                                "essential-blocks"
                                            )}
                                            value={title}
                                            onChange={(newTitle) =>
                                                setAttributes({
                                                    title: newTitle,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__("Show Subtitle?")}
                                            checked={showSubtitle}
                                            onChange={() => {
                                                setAttributes({
                                                    showSubtitle: !showSubtitle,
                                                    defaultSubtitle: !showSubtitle,
                                                });
                                            }}
                                        />

                                        {showSubtitle && (
                                            <TextControl
                                                label={__(
                                                    "Sub Title",
                                                    "essential-blocks"
                                                )}
                                                value={subtitle}
                                                onChange={(newSubtitle) =>
                                                    setAttributes({
                                                        subtitle: newSubtitle,
                                                    })
                                                }
                                            />
                                        )}

                                        <ToggleControl
                                            label={__("Show Icon?")}
                                            checked={showHeaderIcon}
                                            onChange={() => {
                                                setAttributes({
                                                    showHeaderIcon: !showHeaderIcon,
                                                    defaultHeaderIcon: !showHeaderIcon,
                                                });
                                            }}
                                        />

                                        {showHeaderIcon && (
                                            <EBIconPicker
                                                value={headerIcon}
                                                onChange={(icon) =>
                                                    setAttributes({
                                                        headerIcon: icon,
                                                    })
                                                }
                                                title={__("Icon", "essential-blocks")}
                                            />
                                        )}

                                        {pricingStyle !== "style-4" && (
                                            <ToggleControl
                                                label={__("Show title line?")}
                                                checked={showTitleLine}
                                                onChange={() => {
                                                    setAttributes({
                                                        showTitleLine: !showTitleLine,
                                                        defaultTitleLine: !showTitleLine,
                                                    });
                                                }}
                                            />
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Price", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <TextControl
                                            label={__(
                                                "Price",
                                                "essential-blocks"
                                            )}
                                            value={mainPrice}
                                            onChange={(newPrice) =>
                                                setAttributes({
                                                    mainPrice: newPrice,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__("On Sale?")}
                                            checked={showOnSale}
                                            onChange={() => {
                                                setAttributes({
                                                    showOnSale: !showOnSale,
                                                });
                                            }}
                                        />
                                        {showOnSale && (
                                            <TextControl
                                                label={__(
                                                    "Sale Price",
                                                    "essential-blocks"
                                                )}
                                                value={salePrice}
                                                onChange={(newsalePrice) =>
                                                    setAttributes({
                                                        salePrice: newsalePrice,
                                                    })
                                                }
                                            />
                                        )}
                                        <TextControl
                                            label={__(
                                                "Price Currency",
                                                "essential-blocks"
                                            )}
                                            value={priceCurrency}
                                            onChange={(newPriceCurrency) =>
                                                setAttributes({
                                                    priceCurrency: newPriceCurrency,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__(
                                                "Currency Placement",
                                                "essential-blocks"
                                            )}
                                            value={currencyPlacement}
                                            options={[
                                                {
                                                    label: "Left",
                                                    value: "left",
                                                },
                                                {
                                                    label: "Right",
                                                    value: "right",
                                                },
                                            ]}
                                            onChange={(currencyPlacement) => {
                                                setAttributes({
                                                    currencyPlacement,
                                                });
                                            }}
                                        />
                                        <TextControl
                                            label={__("Price Period (per)")}
                                            value={pricePeriod}
                                            onChange={(pricePeriod) =>
                                                setAttributes({ pricePeriod })
                                            }
                                        />
                                        <TextControl
                                            label={__(
                                                "Period Separator",
                                                "essential-blocks"
                                            )}
                                            value={periodSeparator}
                                            onChange={(periodSeparator) =>
                                                setAttributes({
                                                    periodSeparator,
                                                })
                                            }
                                        />
                                        <Divider />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Features",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__("Hide Features?")}
                                            checked={hideFeatures}
                                            onChange={() => {
                                                setAttributes({
                                                    hideFeatures: !hideFeatures,
                                                });
                                            }}
                                        />
                                        {hideFeatures !== true && (
                                            <>
                                                <ToggleControl
                                                    label={__("Show line?")}
                                                    checked={showFeatureLine}
                                                    onChange={() => {
                                                        setAttributes({
                                                            showFeatureLine: !showFeatureLine,
                                                        });
                                                    }}
                                                />

                                                <SortableFeatures
                                                    features={
                                                        attributes.features
                                                    }
                                                    setAttributes={
                                                        setAttributes
                                                    }
                                                />
                                                <Button
                                                    className="eb-pricebox-feature-button"
                                                    label={__(
                                                        "Add feature",
                                                        "essential-blocks"
                                                    )}
                                                    icon="plus-alt"
                                                    onClick={onFeatureAdd}
                                                >
                                                    <span className="eb-pricebox-add-button-label">
                                                        {__(
                                                            "Add Feature",
                                                            "essential-blocks"
                                                        )}
                                                    </span>
                                                </Button>
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Button", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__("Display Button?")}
                                            checked={showButton}
                                            onChange={() => {
                                                setAttributes({
                                                    showButton: !showButton,
                                                });
                                            }}
                                        />
                                        <EBIconPicker
                                            value={buttonIcon}
                                            onChange={(icon) =>
                                                setAttributes({
                                                    buttonIcon: icon,
                                                })
                                            }
                                            title={__("Button Icon", "essential-blocks")}
                                        />
                                        <BaseControl
                                            label={__(
                                                "Icon Position",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup>
                                                {RIBBON_ALIGNMENT_HORIZONTAL.map(
                                                    (item, index) => (
                                                        <Button
                                                            // isLarge
                                                            key={index}
                                                            isPrimary={
                                                                buttonIconPosition ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                buttonIconPosition !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    buttonIconPosition:
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
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Icon Spacing",
                                                "essential-blocks"
                                            )}
                                            controlName={buttonIconSpacing}
                                            resRequiredProps={resRequiredProps}
                                            min={1}
                                            max={60}
                                            step={1}
                                            noUnits
                                        />
                                        <DynamicInputControl
                                            label={__(
                                                "Button Text",
                                                "essential-blocks"
                                            )}
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
                                            label={__(
                                                "Button Link",
                                                "essential-blocks"
                                            )}
                                            attrName="buttonURL"
                                            inputValue={buttonURL}
                                            setAttributes={setAttributes}
                                            onChange={(link) =>
                                                setAttributes({
                                                    buttonURL: link,
                                                })
                                            }
                                        />

                                        {buttonURL && (
                                            <ToggleControl
                                                label={__(
                                                    "Open in New Tab",
                                                    "essential-blocks"
                                                )}
                                                checked={newWindow}
                                                onChange={() =>
                                                    setAttributes({
                                                        newWindow: !newWindow,
                                                    })
                                                }
                                            />
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Ribbon", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Featured",
                                                "essential-blocks"
                                            )}
                                            checked={showRibbon}
                                            onChange={() => {
                                                setAttributes({
                                                    showRibbon: !showRibbon,
                                                });
                                            }}
                                        />
                                        {showRibbon && (
                                            <>
                                                <SelectControl
                                                    label={__(
                                                        "Ribbon Style",
                                                        "essential-blocks"
                                                    )}
                                                    value={ribbonStyle}
                                                    options={[
                                                        {
                                                            label: "Style 1",
                                                            value: "ribbon-1",
                                                        },
                                                        {
                                                            label: "Style 2",
                                                            value: "ribbon-2",
                                                        },
                                                        {
                                                            label: "Style 3",
                                                            value: "ribbon-3",
                                                        },
                                                        {
                                                            label: "Style 4",
                                                            value: "ribbon-4",
                                                        },
                                                    ]}
                                                    onChange={(ribbonStyle) => {
                                                        setAttributes({
                                                            ribbonStyle,
                                                        });
                                                    }}
                                                />
                                                {ribbonStyle == "ribbon-1" && (
                                                    <BaseControl
                                                        label={__(
                                                            "Align",
                                                            "essential-blocks"
                                                        )}
                                                    >
                                                        <ButtonGroup>
                                                            {RIBBON_ALIGNMENT_VERTICAL.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <Button
                                                                        // isLarge
                                                                        key={
                                                                            index
                                                                        }
                                                                        isPrimary={
                                                                            ribbonAlignVertical ===
                                                                            item.value
                                                                        }
                                                                        isSecondary={
                                                                            ribbonAlignVertical !==
                                                                            item.value
                                                                        }
                                                                        onClick={() =>
                                                                            setAttributes(
                                                                                {
                                                                                    ribbonAlignVertical:
                                                                                        item.value,
                                                                                }
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </Button>
                                                                )
                                                            )}
                                                        </ButtonGroup>
                                                    </BaseControl>
                                                )}

                                                {ribbonStyle !== "ribbon-1" && (
                                                    <>
                                                        <BaseControl
                                                            label={__(
                                                                "Align",
                                                                "essential-blocks"
                                                            )}
                                                        >
                                                            <ButtonGroup>
                                                                {RIBBON_ALIGNMENT_HORIZONTAL.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <Button
                                                                            // isLarge
                                                                            key={
                                                                                index
                                                                            }
                                                                            isPrimary={
                                                                                ribbonAlignHorizontal ===
                                                                                item.value
                                                                            }
                                                                            isSecondary={
                                                                                ribbonAlignHorizontal !==
                                                                                item.value
                                                                            }
                                                                            onClick={() =>
                                                                                setAttributes(
                                                                                    {
                                                                                        ribbonAlignHorizontal:
                                                                                            item.value,
                                                                                    }
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                item.label
                                                                            }
                                                                        </Button>
                                                                    )
                                                                )}
                                                            </ButtonGroup>
                                                        </BaseControl>
                                                        <TextControl
                                                            label={__(
                                                                "Featured Tag Text",
                                                                "essential-blocks"
                                                            )}
                                                            value={ribbonText}
                                                            onChange={(
                                                                ribbonText
                                                            ) =>
                                                                setAttributes({
                                                                    ribbonText,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </PanelBody>
                                </>
                            )}

                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Price Table Box",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <BackgroundControl
                                            controlName={priceTableBackground}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                Border
                                            </h3>
                                        </BaseControl>

                                        <BorderShadowControl
                                            controlName={wrapperBorderShadow}
                                            resRequiredProps={resRequiredProps}
                                        />

                                        {pricingStyle == "style-4" && (
                                            <ColorControl
                                                label={__(
                                                    "Pricing Top Color",
                                                    "essential-blocks"
                                                )}
                                                color={pricingTopBgColor}
                                                onChange={(pricingTopBgColor) =>
                                                    setAttributes({
                                                        pricingTopBgColor,
                                                    })
                                                }
                                            />
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Header", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Alignment",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                            <ButtonGroup>
                                                {ALIGNMENT.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                headerAlignment ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                headerAlignment !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    headerAlignment:
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
                                        <Divider />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Title Style",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={titleTextColor}
                                            onChange={(titleTextColor) =>
                                                setAttributes({
                                                    titleTextColor,
                                                })
                                            }
                                        />
                                        {showTitleLine &&
                                            pricingStyle !== "style-4" && (
                                                <ColorControl
                                                    label={__(
                                                        "Line Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={titleLineColor}
                                                    onChange={(
                                                        titleLineColor
                                                    ) =>
                                                        setAttributes({
                                                            titleLineColor,
                                                        })
                                                    }
                                                />
                                            )}

                                        <ColorControl
                                            label={__(
                                                "Background Color",
                                                "essential-blocks"
                                            )}
                                            color={titleBackgroundColor}
                                            onChange={(titleBackgroundColor) =>
                                                setAttributes({
                                                    titleBackgroundColor,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <Divider />
                                        {showSubtitle && (
                                            <>
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__(
                                                            "Subtitle Style",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={subtitleTextColor}
                                                    onChange={(
                                                        subtitleTextColor
                                                    ) =>
                                                        setAttributes({
                                                            subtitleTextColor,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        typoPrefix_subtitle
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />
                                                <Divider />
                                            </>
                                        )}
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__("Margin & Padding")}
                                            </h3>
                                        </BaseControl>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={titlePadding}
                                            baseLabel={__(
                                                "Padding",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={titleMargin}
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Price", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Alignment",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                            <ButtonGroup>
                                                {ALIGNMENT.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                priceAlignment ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                priceAlignment !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    priceAlignment:
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
                                        <Divider />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Original Price",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={priceTextColor}
                                            onChange={(priceTextColor) =>
                                                setAttributes({
                                                    priceTextColor,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_price_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <Divider />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Original Price Currency",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={priceCurrencyTextColor}
                                            onChange={(
                                                priceCurrencyTextColor
                                            ) =>
                                                setAttributes({
                                                    priceCurrencyTextColor,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_price_currency
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={priceCurrencyMargin}
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
                                        />
                                        <Divider />
                                        {showOnSale && (
                                            <>
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__(
                                                            "Sale Price",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={salePriceTextColor}
                                                    onChange={(
                                                        salePriceTextColor
                                                    ) =>
                                                        setAttributes({
                                                            salePriceTextColor,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        typoPrefix_saleprice
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />
                                                <Divider />
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__(
                                                            "Sale Price Currency",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={
                                                        salepriceCurrencyTextColor
                                                    }
                                                    onChange={(
                                                        salepriceCurrencyTextColor
                                                    ) =>
                                                        setAttributes({
                                                            salepriceCurrencyTextColor,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        typoPrefix_saleprice_currency
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
                                                        salepriceCurrencyMargin
                                                    }
                                                    baseLabel={__(
                                                        "Margin",
                                                        "essential-blocks"
                                                    )}
                                                />
                                                <Divider />
                                            </>
                                        )}
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Pricing Period",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={pricingPeriodTextColor}
                                            F
                                            onChange={(
                                                pricingPeriodTextColor
                                            ) =>
                                                setAttributes({
                                                    pricingPeriodTextColor,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_pricing_period
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Features",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                Alignment
                                            </h3>
                                            <ButtonGroup>
                                                {ALIGNMENT.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                featuresAlignment ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                featuresAlignment !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    featuresAlignment:
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
                                        <Divider />
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={featuresTextColor}
                                            onChange={(featuresTextColor) =>
                                                setAttributes({
                                                    featuresTextColor,
                                                })
                                            }
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Icon Size",
                                                "essential-blocks"
                                            )}
                                            controlName={featuresIconSize}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={50}
                                            step={1}
                                            noUnits
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_features_text
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Button", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                Alignment
                                            </h3>
                                            <ButtonGroup>
                                                {ALIGNMENT.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                buttonAlignment ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                buttonAlignment !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    buttonAlignment:
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
                                        <Divider />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={buttonPadding}
                                            baseLabel={__(
                                                "Padding",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={buttonMargin}
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Icon Size",
                                                "essential-blocks"
                                            )}
                                            controlName={buttonIconSize}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={50}
                                            step={1}
                                            noUnits
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_button
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ColorControl
                                            label={__(
                                                "Text Color",
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
                                                "Text Hover Color",
                                                "essential-blocks"
                                            )}
                                            color={hoverTextColor}
                                            onChange={(hoverTextColor) =>
                                                setAttributes({
                                                    hoverTextColor,
                                                })
                                            }
                                        />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Button Background",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <BackgroundControl
                                            controlName={
                                                buttonBackgroundControl
                                            }
                                            resRequiredProps={resRequiredProps}
                                            noOverlay={true}
                                            noMainBgi={true}
                                        />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Button Border Style",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <BorderShadowControl
                                            controlName={buttonBorderShadow}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    {showHeaderIcon && (
                                        <PanelBody
                                            title={__(
                                                "Icon Settings",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl>
                                                <h3 className="eb-control-title">
                                                    {__(
                                                        "Alignment",
                                                        "essential-blocks"
                                                    )}
                                                </h3>
                                                <ButtonGroup>
                                                    {ALIGNMENT.map(
                                                        (item, index) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={
                                                                    iconAlignment ===
                                                                    item.value
                                                                }
                                                                isSecondary={
                                                                    iconAlignment !==
                                                                    item.value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            iconAlignment:
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
                                            <Divider />
                                            <ToggleControl
                                                label={__(
                                                    "Show Background",
                                                    "essential-blocks"
                                                )}
                                                checked={showIconBackground}
                                                onChange={() => {
                                                    setAttributes({
                                                        showIconBackground: !showIconBackground,
                                                    });
                                                }}
                                            />
                                            {showIconBackground && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Background Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            iconBackgroundColor
                                                        }
                                                        onChange={(
                                                            iconBackgroundColor
                                                        ) =>
                                                            setAttributes({
                                                                iconBackgroundColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Background Hover Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            iconBackgroundHoverColor
                                                        }
                                                        onChange={(
                                                            iconBackgroundHoverColor
                                                        ) =>
                                                            setAttributes({
                                                                iconBackgroundHoverColor,
                                                            })
                                                        }
                                                    />
                                                    <Divider />
                                                </>
                                            )}
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Icon Size",
                                                    "essential-blocks"
                                                )}
                                                controlName={headerIconSize}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={200}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Icon Area Width",
                                                    "essential-blocks"
                                                )}
                                                controlName={headerIconWidth}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                units={TWOUNITS}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Icon Area Height",
                                                    "essential-blocks"
                                                )}
                                                controlName={headerIconHeight}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                units={TWOUNITS}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Icon Color",
                                                    "essential-blocks"
                                                )}
                                                color={iconColor}
                                                onChange={(iconColor) =>
                                                    setAttributes({ iconColor })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Icon Hover Color",
                                                    "essential-blocks"
                                                )}
                                                color={iconHoverColor}
                                                onChange={(iconHoverColor) =>
                                                    setAttributes({
                                                        iconHoverColor,
                                                    })
                                                }
                                            />
                                            <Divider />
                                            <BaseControl>
                                                <h3 className="eb-control-title">
                                                    Border
                                                </h3>
                                            </BaseControl>
                                            <BorderShadowControl
                                                controlName={iconBorderShadow}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                noShadow
                                            />
                                        </PanelBody>
                                    )}
                                    {showRibbon && (
                                        <PanelBody
                                            title={__(
                                                "Ribbon",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_ribbon
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
                                                color={ribbonColor}
                                                onChange={(ribbonColor) =>
                                                    setAttributes({
                                                        ribbonColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Background Color",
                                                    "essential-blocks"
                                                )}
                                                color={ribbonBackgroundColor}
                                                onChange={(
                                                    ribbonBackgroundColor
                                                ) =>
                                                    setAttributes({
                                                        ribbonBackgroundColor,
                                                    })
                                                }
                                            />
                                            <BorderShadowControl
                                                controlName={ribbonBorderShadow}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                noBorder
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
                                            controlName={wrapperPadding}
                                            baseLabel={__(
                                                "Padding",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={wrapperMargin}
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
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
