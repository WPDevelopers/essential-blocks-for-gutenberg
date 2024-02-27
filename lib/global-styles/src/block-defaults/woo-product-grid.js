/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    Button,
    ButtonGroup,
    BaseControl,
    ToggleControl,
    TextControl,
    PanelRow,
    __experimentalDivider as Divider,
} from "@wordpress/components";
/**
 * Internal dependencies
 */
import {
    RATING_ICON_SIZE,
    BTN_BORDER_SHADOW,
    SALE_BADGE_ALIGN,
    SALE_BADGE_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BG,
    WRAPPER_BORDER_SHADOW,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    IMAGE_PADDING,
    PRODUCTS_BORDER_SHADOW,
    GRID_SPACING,
    TITLE_MARGIN,
    PRICE_MARGIN,
    RATING_MARGIN,
    BUTTON_MARGIN,
    DESC_MARGIN,
    IMG_GAP,
    IMG_WIDTH,
    IMG_HEIGHT,
    IMAGE_BORDER_SHADOW,
} from "../../../../blocks/woo-product-grid/src/constants";
import {
    typoPrefix_title,
    typoPrefix_price,
    typoPrefix_sale,
    typoPrefix_desc,
    typoPrefix_btn,
} from "../../../../blocks/woo-product-grid/src/constants/typographyConstants";
import objAttributes from "../../../../blocks/wrapper/src/attributes";

const {
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    TypographyDropdown,
    ColorControl,
    BorderShadowControl,
    BackgroundControl,
} = window.EBControls;

function WooProductGrid(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        showRating,
        showPrice,
        showSaleBadge,
        titleColor,
        titleHoverColor,
        priceColor,
        salePriceColor,
        ratingColor,
        btnColor,
        btnHoverColor,
        btnBackgroundColor,
        btnBackgroundHoverColor,
        saleBadgeAlign,
        saleText,
        saleTextColor,
        saleTextBackgroundColor,
        contentAlignment,
        contentBackgroundColor,
        imageBackgroundColor,
        descColor,
        autoHeight,
        backgroundOverlayColor,
        isCustomCartBtn,
        simpleCartText,
        variableCartText,
        groupedCartText,
        externalCartText,
        defaultCartText,
        imageOverlayColor,
        productDescLength,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                layout: "grid",
                gridPreset: "grid-preset-1",
                gridColumns: "4",
                showRating: true,
                showPrice: true,
                showSaleBadge: true,
                listPreset: "list-preset-1",
                saleBadgeAlign: "align-left",
                saleText: "Sale",
                contentAlignment: "center",
                autoHeight: true,
                isCustomCartBtn: false,
                simpleCartText: "Buy Now",
                variableCartText: "Select options",
                groupedCartText: "View products",
                externalCartText: "Buy now",
                defaultCartText: "Read more",
                imageOverlayColor: "rgb(0 0 0 / 25%)",
                productDescLength: "5",
                loadMoreColorType: "normal",
                loadMoreColor: "#333333",
                loadMoreBgColor: "#e3e3e3",
                loadMoreHoverColor: "#ffffff",
                loadMoreHoverBgColor: "#d18df1",
                loadMoreActiveColor: "#ffffff",
                loadMoreActiveBgColor: "#d18df1",
                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: true,
                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: true,
                [`${CONTENT_PADDING}Unit`]: "px",
                [`${CONTENT_PADDING}isLinked`]: true,
                [`${IMAGE_PADDING}Unit`]: "px",
                [`${IMAGE_PADDING}isLinked`]: true,
                [`${TITLE_MARGIN}Unit`]: "px",
                [`${TITLE_MARGIN}isLinked`]: true,
                [`${PRICE_MARGIN}Unit`]: "px",
                [`${PRICE_MARGIN}isLinked`]: true,
                [`${RATING_MARGIN}Unit`]: "px",
                [`${RATING_MARGIN}isLinked`]: true,
                [`${BUTTON_MARGIN}Unit`]: "px",
                [`${BUTTON_MARGIN}isLinked`]: true,
                [`${DESC_MARGIN}Unit`]: "px",
                [`${DESC_MARGIN}isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}BorderType`]: "normal",
                [`${WRAPPER_BORDER_SHADOW}shadowType`]: "normal",
                [`${IMAGE_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${IMAGE_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${IMAGE_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${IMAGE_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${IMAGE_BORDER_SHADOW}BorderType`]: "normal",
                [`${IMAGE_BORDER_SHADOW}shadowType`]: "normal",
                [`${BTN_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${BTN_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${BTN_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${BTN_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${BTN_BORDER_SHADOW}BorderType`]: "normal",
                [`${BTN_BORDER_SHADOW}shadowType`]: "normal",
                [`${SALE_BADGE_BORDER}Bdr_Unit`]: "px",
                [`${SALE_BADGE_BORDER}Bdr_isLinked`]: true,
                [`${SALE_BADGE_BORDER}Rds_Unit`]: "px",
                [`${SALE_BADGE_BORDER}Rds_isLinked`]: true,
                [`${SALE_BADGE_BORDER}BorderType`]: "normal",
                [`${SALE_BADGE_BORDER}shadowType`]: "normal",
                [`${PRODUCTS_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${PRODUCTS_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${PRODUCTS_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${PRODUCTS_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${PRODUCTS_BORDER_SHADOW}BorderType`]: "normal",
                [`${PRODUCTS_BORDER_SHADOW}shadowType`]: "normal",
                [`${IMG_WIDTH}Unit`]: "px",
                [`${IMG_HEIGHT}Unit`]: "px",
                [`${IMG_HEIGHT}Range`]: "200",
                [`${RATING_ICON_SIZE}Unit`]: "px",
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

    const textToNumber = (value) => {
        if (value < 0) {
            handleBlockDefault({ productDescLength: 0 });
        } else {
            handleBlockDefault({ productDescLength: value });
        }
    };

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody
                        initialOpen={true}
                        title={__("Layout", "essential-blocks")}
                    >
                        <>
                            <ToggleControl
                                label={__("Show Rating", "essential-blocks")}
                                checked={showRating}
                                onChange={() =>
                                    handleBlockDefault({
                                        showRating: !showRating,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__("Show Price", "essential-blocks")}
                                checked={showPrice}
                                onChange={() =>
                                    handleBlockDefault({
                                        showPrice: !showPrice,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__(
                                    "Show Sale Badge",
                                    "essential-blocks"
                                )}
                                checked={showSaleBadge}
                                onChange={() =>
                                    handleBlockDefault({
                                        showSaleBadge: !showSaleBadge,
                                    })
                                }
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Cart Text", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__(
                                "Use Custom Cart Button Text",
                                "essential-blocks"
                            )}
                            checked={isCustomCartBtn}
                            onChange={() =>
                                handleBlockDefault({
                                    isCustomCartBtn: !isCustomCartBtn,
                                })
                            }
                        />
                        {isCustomCartBtn && (
                            <>
                                <TextControl
                                    label={__(
                                        "Simple Product",
                                        "essential-blocks"
                                    )}
                                    value={simpleCartText}
                                    onChange={(text) =>
                                        handleBlockDefault({
                                            simpleCartText: text,
                                        })
                                    }
                                />
                                <TextControl
                                    label={__(
                                        "Variable Product",
                                        "essential-blocks"
                                    )}
                                    value={variableCartText}
                                    onChange={(text) =>
                                        handleBlockDefault({
                                            variableCartText: text,
                                        })
                                    }
                                />
                                <TextControl
                                    label={__(
                                        "Grouped Product",
                                        "essential-blocks"
                                    )}
                                    value={groupedCartText}
                                    onChange={(text) =>
                                        handleBlockDefault({
                                            groupedCartText: text,
                                        })
                                    }
                                />
                                <TextControl
                                    label={__(
                                        "External Product",
                                        "essential-blocks"
                                    )}
                                    value={externalCartText}
                                    onChange={(text) =>
                                        handleBlockDefault({
                                            externalCartText: text,
                                        })
                                    }
                                />
                                <TextControl
                                    label={__(
                                        "Default Product",
                                        "essential-blocks"
                                    )}
                                    value={defaultCartText}
                                    onChange={(text) =>
                                        handleBlockDefault({
                                            defaultCartText: text,
                                        })
                                    }
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Sale Badge", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BaseControl
                            label={__("Alignment", "essential-blocks")}
                            id="eb-woo-products-alignment"
                        >
                            <ButtonGroup>
                                {SALE_BADGE_ALIGN.map((item, key) => (
                                    <Button
                                        key={key}
                                        isPrimary={
                                            saleBadgeAlign === item.value
                                        }
                                        isSecondary={
                                            saleBadgeAlign !== item.value
                                        }
                                        onClick={() =>
                                            handleBlockDefault({
                                                saleBadgeAlign: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <TextControl
                            label={__("Sale Text", "essential-blocks")}
                            value={saleText}
                            onChange={(text) =>
                                handleBlockDefault({ saleText: text })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Products Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <BaseControl
                                label={__(
                                    "Content Alignment",
                                    "essential-blocks"
                                )}
                                id="eb-woo-products-content-alignment"
                            >
                                <ButtonGroup>
                                    {CONTENT_ALIGNMENT.map((item, key) => (
                                        <Button
                                            key={key}
                                            isPrimary={
                                                contentAlignment === item.value
                                            }
                                            isSecondary={
                                                contentAlignment !== item.value
                                            }
                                            onClick={() =>
                                                handleBlockDefault({
                                                    contentAlignment:
                                                        item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <ColorControl
                                label={__(
                                    "Content Background Color",
                                    "essential-blocks"
                                )}
                                color={contentBackgroundColor}
                                onChange={(contentBackgroundColor) =>
                                    handleBlockDefault({
                                        contentBackgroundColor,
                                    })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Background Overlay Color",
                                    "essential-blocks"
                                )}
                                color={backgroundOverlayColor}
                                onChange={(backgroundOverlayColor) =>
                                    handleBlockDefault({
                                        backgroundOverlayColor,
                                    })
                                }
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={CONTENT_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Spacing", "essential-blocks")}
                                controlName={GRID_SPACING}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={200}
                                step={1}
                                noUnits={true}
                            />
                            <PanelBody
                                title={__("Border & Shadow")}
                                initialOpen={false}
                            >
                                <BorderShadowControl
                                    controlName={PRODUCTS_BORDER_SHADOW}
                                    resRequiredProps={resRequiredProps}
                                    // noShadow
                                    // noBorder
                                />
                            </PanelBody>
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Image Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={IMG_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1200}
                            />
                            {!autoHeight && (
                                <ResponsiveRangeController
                                    baseLabel={__("Height", "essential-blocks")}
                                    controlName={IMG_HEIGHT}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={1200}
                                />
                            )}
                            <ToggleControl
                                label={__("Auto Height", "essential-blocks")}
                                checked={autoHeight}
                                onChange={() =>
                                    handleBlockDefault({
                                        autoHeight: !autoHeight,
                                    })
                                }
                            />
                            <Divider />
                            <ColorControl
                                label={__(
                                    "Image Wrapper Background",
                                    "essential-blocks"
                                )}
                                color={imageBackgroundColor}
                                onChange={(imageBackgroundColor) =>
                                    handleBlockDefault({ imageBackgroundColor })
                                }
                            />

                            <PanelRow>
                                {__("List Layout", "essential-blocks")}
                            </PanelRow>
                            <ColorControl
                                label={__(
                                    "Image Overlay Color",
                                    "essential-blocks"
                                )}
                                color={imageOverlayColor}
                                onChange={(imageOverlayColor) =>
                                    handleBlockDefault({ imageOverlayColor })
                                }
                            />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Image Space",
                                    "essential-blocks"
                                )}
                                controlName={IMG_GAP}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={500}
                                step={1}
                                noUnits={true}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={IMAGE_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <BorderShadowControl
                                controlName={IMAGE_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Product Title Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_title}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={titleColor}
                                onChange={(titleColor) =>
                                    handleBlockDefault({ titleColor })
                                }
                            />
                            <ColorControl
                                label={__("Hover Color", "essential-blocks")}
                                color={titleHoverColor}
                                onChange={(titleHoverColor) =>
                                    handleBlockDefault({ titleHoverColor })
                                }
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={TITLE_MARGIN}
                                baseLabel={__("Space", "essential-blocks")}
                            />
                        </>
                    </PanelBody>

                    <PanelBody
                        title={__(
                            "Product Description Style(List Layout)",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_desc}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={descColor}
                                onChange={(descColor) =>
                                    handleBlockDefault({ descColor })
                                }
                            />
                            <TextControl
                                label={__(
                                    "Description length",
                                    "essential-blocks"
                                )}
                                value={productDescLength}
                                type="number"
                                onChange={(value) => textToNumber(value)}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={DESC_MARGIN}
                                baseLabel={__("Space", "essential-blocks")}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Product Price Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_price}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Price Color", "essential-blocks")}
                                color={priceColor}
                                onChange={(priceColor) =>
                                    handleBlockDefault({ priceColor })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Sale Price Color",
                                    "essential-blocks"
                                )}
                                color={salePriceColor}
                                onChange={(salePriceColor) =>
                                    handleBlockDefault({ salePriceColor })
                                }
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={PRICE_MARGIN}
                                baseLabel={__("Space", "essential-blocks")}
                            />
                        </>
                    </PanelBody>

                    <PanelBody
                        title={__("Product Rating Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <ColorControl
                                label={__("Rating Color", "essential-blocks")}
                                color={ratingColor}
                                onChange={(ratingColor) =>
                                    handleBlockDefault({ ratingColor })
                                }
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Icon Size", "essential-blocks")}
                                controlName={RATING_ICON_SIZE}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={50}
                                step={1}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={RATING_MARGIN}
                                baseLabel={__("Space", "essential-blocks")}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Button Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_btn}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Text Color", "essential-blocks")}
                                color={btnColor}
                                onChange={(btnColor) =>
                                    handleBlockDefault({ btnColor })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Text Hover Color",
                                    "essential-blocks"
                                )}
                                color={btnHoverColor}
                                onChange={(btnHoverColor) =>
                                    handleBlockDefault({ btnHoverColor })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Background Color",
                                    "essential-blocks"
                                )}
                                color={btnBackgroundColor}
                                onChange={(btnBackgroundColor) =>
                                    handleBlockDefault({ btnBackgroundColor })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Background Hover Color",
                                    "essential-blocks"
                                )}
                                color={btnBackgroundHoverColor}
                                onChange={(btnBackgroundHoverColor) =>
                                    handleBlockDefault({
                                        btnBackgroundHoverColor,
                                    })
                                }
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={BUTTON_MARGIN}
                                baseLabel={__("Space", "essential-blocks")}
                            />
                            <BaseControl>
                                <h3 className="eb-control-title">
                                    {__("Border", "essential-blocks")}
                                </h3>
                            </BaseControl>
                            <BorderShadowControl
                                controlName={BTN_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Sale Badge Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_sale}
                            resRequiredProps={resRequiredProps}
                        />
                        <ColorControl
                            label={__("Sale Text Color", "essential-blocks")}
                            color={saleTextColor}
                            onChange={(saleTextColor) =>
                                handleBlockDefault({ saleTextColor })
                            }
                        />
                        <ColorControl
                            label={__(
                                "Sale Text Background Color",
                                "essential-blocks"
                            )}
                            color={saleTextBackgroundColor}
                            onChange={(saleTextBackgroundColor) =>
                                handleBlockDefault({ saleTextBackgroundColor })
                            }
                        />
                        <BaseControl>
                            <h3 className="eb-control-title">
                                {__("Border", "essential-blocks")}
                            </h3>
                        </BaseControl>
                        <BorderShadowControl
                            controlName={SALE_BADGE_BORDER}
                            noShadow={true}
                            noBdrHover={true}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__(
                            "Wrapper Margin & Padding",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
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
                    <PanelBody
                        title={__("Wrapper Background", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BackgroundControl
                            controlName={WRAPPER_BG}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Border & Shadow")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={WRAPPER_BORDER_SHADOW}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default WooProductGrid;
