/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * Internal depencencies
 */
import {
    typoPrefix_original_price,
    typoPrefix_pricing_period,
    typoPrefix_saleprice,
    typoPrefix_sale_pricing_period,
} from "./constants/typographyPrefixConstants";
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    ALIGNMENT,
    priceCurrencyMargin,
    salepriceCurrencyMargin,
    PRICE_VIEW,
    ICON_SIZE,
    ICON_ALIGN,
    ICON_SHAPE,
    SHAPE_VIEW,
    NORMAL_HOVER,
    BORDER,
    BORDER_WIDTH,
} from "./constants";

const {
    faIcons,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
    AdvancedControls,
} = window.EBControls;

import objAttributes from "./attributes";

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resOption,
        icon,
        iconAlign,
        iconPrimaryColor,
        iconPrimaryHoverColor,
        iconSecondaryColor,
        iconSecondaryHoverColor,
        iconShape,
        iconView,
        iconPadding,
        iconColorType,
        //
        mainPrice,
        showOnSale,
        salePrice,
        priceCurrency,
        currencyPlacement,
        pricePeriod,
        priceAlignment,
        priceTextColor,
        salePriceTextColor,
        pricingPeriodTextColor,
        salePricePeriod,
        priceView,
        salePricingPeriodTextColor,
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
                                    <PanelBody title={__("Settings", "essential-blocks")} initialOpen={true}>
                                        <TextControl
                                            label={__("Price", "essential-blocks")}
                                            value={mainPrice}
                                            onChange={(newPrice) =>
                                                setAttributes({
                                                    mainPrice: newPrice,
                                                })
                                            }
                                        />
                                        <TextControl
                                            label={__("Price Period (per)")}
                                            value={pricePeriod}
                                            onChange={(pricePeriod) => setAttributes({ pricePeriod })}
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
                                            <>
                                                <TextControl
                                                    label={__("Sale Price", "essential-blocks")}
                                                    value={salePrice}
                                                    onChange={(newsalePrice) =>
                                                        setAttributes({
                                                            salePrice: newsalePrice,
                                                        })
                                                    }
                                                />
                                                <TextControl
                                                    label={__("Sale Price Period (per)")}
                                                    value={salePricePeriod}
                                                    onChange={(salePricePeriod) =>
                                                        setAttributes({
                                                            salePricePeriod,
                                                        })
                                                    }
                                                />
                                                <Divider />
                                            </>
                                        )}
                                        <TextControl
                                            label={__("Price Currency", "essential-blocks")}
                                            value={priceCurrency}
                                            onChange={(newPriceCurrency) =>
                                                setAttributes({
                                                    priceCurrency: newPriceCurrency,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Currency Placement", "essential-blocks")}
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
                                        <Divider />
                                        <SelectControl
                                            label={__("Price View", "essential-blocks")}
                                            value={priceView}
                                            options={PRICE_VIEW}
                                            onChange={(newPriceView) =>
                                                setAttributes({
                                                    priceView: newPriceView,
                                                })
                                            }
                                        />
                                    </PanelBody>
                                </>
                            )}

                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Styles", "essential-blocks")} initialOpen={true}>
                                        <BaseControl>
                                            <h3 className="eb-control-title">{__("Alignment", "essential-blocks")}</h3>
                                            <ButtonGroup>
                                                {ALIGNMENT.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        isPrimary={priceAlignment === item.value}
                                                        isSecondary={priceAlignment !== item.value}
                                                        onClick={() =>
                                                            setAttributes({
                                                                priceAlignment: item.value,
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <Divider />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__("Original Price", "essential-blocks")}
                                            </h3>
                                        </BaseControl>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={priceTextColor}
                                            onChange={(priceTextColor) =>
                                                setAttributes({
                                                    priceTextColor,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__("Typography", "essential-blocks")}
                                            typographyPrefixConstant={typoPrefix_original_price}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <Divider />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__("Pricing Period", "essential-blocks")}
                                            </h3>
                                        </BaseControl>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={pricingPeriodTextColor}
                                            F
                                            onChange={(pricingPeriodTextColor) =>
                                                setAttributes({
                                                    pricingPeriodTextColor,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__("Typography", "essential-blocks")}
                                            typographyPrefixConstant={typoPrefix_pricing_period}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        {showOnSale && (
                                            <>
                                                <Divider />
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__("Sale Price", "essential-blocks")}
                                                    </h3>
                                                </BaseControl>
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={salePriceTextColor}
                                                    onChange={(salePriceTextColor) =>
                                                        setAttributes({
                                                            salePriceTextColor,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    baseLabel={__("Typography", "essential-blocks")}
                                                    typographyPrefixConstant={typoPrefix_saleprice}
                                                    resRequiredProps={resRequiredProps}
                                                />
                                                <Divider />
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__("Sale Pricing Period", "essential-blocks")}
                                                    </h3>
                                                </BaseControl>
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={salePricingPeriodTextColor}
                                                    F
                                                    onChange={(salePricingPeriodTextColor) =>
                                                        setAttributes({
                                                            salePricingPeriodTextColor,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    baseLabel={__("Typography", "essential-blocks")}
                                                    typographyPrefixConstant={typoPrefix_sale_pricing_period}
                                                    resRequiredProps={resRequiredProps}
                                                />
                                            </>
                                        )}
                                    </PanelBody>
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
