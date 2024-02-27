/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
    useBlockProps,
    BlockControls,
    AlignmentToolbar,
} from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
    DynamicInputValueHandler,
    EBDisplayIcon
} = window.EBControls;

const edit = (props) => {
    const {
        attributes,
        isSelected,
        setAttributes,
        clientId,
        className,
        name
    } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        pricingStyle,
        title,
        showSubtitle,
        subtitle,
        showHeaderIcon,
        headerIcon,
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
        contentAlign,
        ribbonStyle,
        classHook,
        ribbonAlignHorizontal,
        ribbonAlignVertical,
        showFeatureLine,
        showRibbon
    } = attributes;

    // this useEffect is for creating an unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-pricing";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    useEffect(() => {
        if (features.length > 0) return;

        const defaultFeatures = [
            {
                icon: "fas fa-check",
                text: "Unlimited Calls",
                color: "var(--eb-global-primary-color)",
                clickable: "false",
                link: "",
            },
            {
                icon: "fas fa-check",
                text: "Free Hosting",
                color: "var(--eb-global-primary-color)",
                clickable: "false",
                link: "",
            },
            {
                icon: "fas fa-check",
                text: "500MB Free Storage",
                color: "var(--eb-global-primary-color)",
                clickable: "false",
                link: "",
            },
            {
                icon: "fas fa-check",
                text: "24/7 Support",
                color: "var(--eb-global-primary-color)",
                clickable: "false",
                link: "",
            },
        ];

        setAttributes({ features: defaultFeatures });
    }, []);

    // ribbon Class
    const ribbonClass = showRibbon ? ` featured ${ribbonStyle}` : "";

    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={contentAlign}
                    onChange={(contentAlign) => setAttributes({ contentAlign: contentAlign || "center" })}
                />
            </BlockControls>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <div {...blockProps}>
                <Style {...props} />
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`${blockId} eb-pricing-wrapper eb-pricing-content-${contentAlign}`}
                    >
                        <div className={`eb-pricing ${pricingStyle} `}>
                            <div
                                className={`eb-pricing-item${ribbonClass} ${ribbonStyle !== "ribbon-1"
                                    ? ribbonAlignHorizontal
                                    : ribbonAlignVertical
                                    }`}
                            >
                                <div className="eb-pricing-item-overlay"></div>

                                {pricingStyle == "style-4" && (
                                    <>
                                        <div className="eb-pricing-top">
                                            {showHeaderIcon && (
                                                <div
                                                    className="eb-pricing-icon"
                                                    data-icon={headerIcon}
                                                >
                                                    <EBDisplayIcon className={`icon`} icon={headerIcon} />
                                                </div>
                                            )}
                                            <div className="eb-pricing-tag">
                                                <span className="price-tag">
                                                    <span
                                                        className={`original-price${showOnSale === true
                                                            ? " line-through"
                                                            : ""
                                                            }`}
                                                        data-price={mainPrice}
                                                    >
                                                        {currencyPlacement ===
                                                            "left" && (
                                                                <span className="price-currency">
                                                                    {priceCurrency}
                                                                </span>
                                                            )}
                                                        {mainPrice}
                                                        {currencyPlacement ===
                                                            "right" && (
                                                                <span className="price-currency">
                                                                    {priceCurrency}
                                                                </span>
                                                            )}
                                                    </span>

                                                    {showOnSale && (
                                                        <>
                                                            <span
                                                                className="sale-price"
                                                                data-sale-price={
                                                                    salePrice
                                                                }
                                                            >
                                                                {currencyPlacement ===
                                                                    "left" && (
                                                                        <span className="price-currency">
                                                                            {
                                                                                priceCurrency
                                                                            }
                                                                        </span>
                                                                    )}
                                                                {salePrice}
                                                                {currencyPlacement ===
                                                                    "right" && (
                                                                        <span className="price-currency">
                                                                            {
                                                                                priceCurrency
                                                                            }
                                                                        </span>
                                                                    )}
                                                            </span>
                                                        </>
                                                    )}
                                                </span>
                                                <span
                                                    className="price-period"
                                                    data-period-separator={
                                                        periodSeparator
                                                    }
                                                    data-price-period={
                                                        pricePeriod
                                                    }
                                                >
                                                    {periodSeparator}{" "}
                                                    {pricePeriod}
                                                </span>
                                            </div>
                                            <div className="eb-pricing-header">
                                                <h2 className="eb-pricing-title">
                                                    {title}
                                                </h2>
                                                {showSubtitle && (
                                                    <span className="eb-pricing-subtitle">
                                                        {subtitle}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="eb-pricing-bottom">
                                            {hideFeatures !== true && (
                                                <div className="eb-pricing-body">
                                                    <ul
                                                        className={`eb-pricebox-features ${showFeatureLine
                                                            ? ""
                                                            : "no-border"
                                                            }`}
                                                    >
                                                        {features.map(
                                                            (
                                                                {
                                                                    icon,
                                                                    text,
                                                                    color,
                                                                    clickable,
                                                                    link,
                                                                },
                                                                index
                                                            ) => (
                                                                <li
                                                                    key={index}
                                                                    className="eb-pricebox-feature-item"
                                                                    data-icon={
                                                                        icon
                                                                    }
                                                                    data-color={
                                                                        color
                                                                    }
                                                                    data-clickable={
                                                                        clickable
                                                                    }
                                                                    data-link={
                                                                        link
                                                                    }
                                                                >
                                                                    {clickable &&
                                                                        link ? (
                                                                        <a
                                                                            href={
                                                                                link
                                                                            }
                                                                        >
                                                                            <EBDisplayIcon
                                                                                className={`eb-pricebox-icon`}
                                                                                icon={icon}
                                                                            />
                                                                            <span className="eb-pricebox-feature-text">
                                                                                {
                                                                                    text
                                                                                }
                                                                            </span>
                                                                        </a>
                                                                    ) : (
                                                                        <>
                                                                            <EBDisplayIcon
                                                                                className={`eb-pricebox-icon`}
                                                                                icon={icon}
                                                                            />
                                                                            <span className="eb-pricebox-feature-text">
                                                                                {
                                                                                    text
                                                                                }
                                                                            </span>
                                                                        </>
                                                                    )}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                            {showButton && (
                                                <div
                                                    className="eb-pricing-footer"
                                                    data-icon={buttonIcon}
                                                >
                                                    <div className="eb-pricing-button-wrapper">
                                                        <a
                                                            href={buttonURL}
                                                            className="eb-pricing-button"
                                                        >
                                                            {buttonIconPosition ===
                                                                "left" && (
                                                                    <EBDisplayIcon icon={buttonIcon} />
                                                                )}
                                                            <DynamicInputValueHandler
                                                                value={
                                                                    buttonText
                                                                }
                                                                tagName="span"
                                                                className="eb-button-text"
                                                                onChange={(
                                                                    buttonText
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            buttonText,
                                                                        }
                                                                    )
                                                                }
                                                                readOnly={true}
                                                            />
                                                            {buttonIconPosition ===
                                                                "right" && (
                                                                    <EBDisplayIcon icon={buttonIcon} />
                                                                )}
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}

                                {pricingStyle !== "style-4" && (
                                    <>
                                        {showHeaderIcon && (
                                            <div
                                                className="eb-pricing-icon"
                                                data-icon={headerIcon}
                                            >
                                                <EBDisplayIcon className={`icon`} icon={headerIcon} />
                                            </div>
                                        )}
                                        <div className="eb-pricing-header">
                                            <h2 className="eb-pricing-title">
                                                {title}
                                            </h2>
                                            {showSubtitle && (
                                                <span className="eb-pricing-subtitle">
                                                    {subtitle}
                                                </span>
                                            )}
                                        </div>
                                        {pricingStyle !== "style-3" && (
                                            <div className="eb-pricing-tag">
                                                <span className="price-tag">
                                                    <span
                                                        className={`original-price${showOnSale === true
                                                            ? " line-through"
                                                            : ""
                                                            }`}
                                                        data-price={mainPrice}
                                                    >
                                                        {currencyPlacement ===
                                                            "left" && (
                                                                <span className="price-currency">
                                                                    {priceCurrency}
                                                                </span>
                                                            )}
                                                        {mainPrice}
                                                        {currencyPlacement ===
                                                            "right" && (
                                                                <span className="price-currency">
                                                                    {priceCurrency}
                                                                </span>
                                                            )}
                                                    </span>

                                                    {showOnSale && (
                                                        <>
                                                            <span
                                                                className="sale-price"
                                                                data-sale-price={
                                                                    salePrice
                                                                }
                                                            >
                                                                {currencyPlacement ===
                                                                    "left" && (
                                                                        <span className="price-currency">
                                                                            {
                                                                                priceCurrency
                                                                            }
                                                                        </span>
                                                                    )}
                                                                {salePrice}
                                                                {currencyPlacement ===
                                                                    "right" && (
                                                                        <span className="price-currency">
                                                                            {
                                                                                priceCurrency
                                                                            }
                                                                        </span>
                                                                    )}
                                                            </span>
                                                        </>
                                                    )}
                                                </span>
                                                <span
                                                    className="price-period"
                                                    data-period-separator={
                                                        periodSeparator
                                                    }
                                                    data-price-period={
                                                        pricePeriod
                                                    }
                                                >
                                                    {periodSeparator}{" "}
                                                    {pricePeriod}
                                                </span>
                                            </div>
                                        )}

                                        {hideFeatures !== true && (
                                            <div className="eb-pricing-body">
                                                <ul
                                                    className={`eb-pricebox-features ${showFeatureLine
                                                        ? ""
                                                        : "no-border"
                                                        }`}
                                                >
                                                    {features.map(
                                                        (
                                                            {
                                                                icon,
                                                                text,
                                                                color,
                                                                clickable,
                                                                link,
                                                            },
                                                            index
                                                        ) => (
                                                            <li
                                                                key={index}
                                                                className="eb-pricebox-feature-item"
                                                                data-icon={icon}
                                                                data-color={
                                                                    color
                                                                }
                                                                data-clickable={
                                                                    clickable
                                                                }
                                                                data-link={link}
                                                            >
                                                                {clickable &&
                                                                    link ? (
                                                                    <a
                                                                        href={
                                                                            link
                                                                        }
                                                                    >
                                                                        <EBDisplayIcon
                                                                            className={`eb-pricebox-icon`}
                                                                            icon={icon}
                                                                            style={{ color: color }}
                                                                        />
                                                                        <span className="eb-pricebox-feature-text">
                                                                            {
                                                                                text
                                                                            }
                                                                        </span>
                                                                    </a>
                                                                ) : (
                                                                    <>
                                                                        <EBDisplayIcon
                                                                            className={`eb-pricebox-icon`}
                                                                            icon={icon}
                                                                            style={{ color: color }}
                                                                        />
                                                                        <span className="eb-pricebox-feature-text">
                                                                            {
                                                                                text
                                                                            }
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        )}

                                        {pricingStyle === "style-3" && (
                                            <div className="eb-pricing-tag">
                                                <span className="price-tag">
                                                    <span
                                                        className={`original-price${showOnSale === true
                                                            ? " line-through"
                                                            : ""
                                                            }`}
                                                        data-price={mainPrice}
                                                    >
                                                        {currencyPlacement ===
                                                            "left" && (
                                                                <span className="price-currency">
                                                                    {priceCurrency}
                                                                </span>
                                                            )}
                                                        {mainPrice}
                                                        {currencyPlacement ===
                                                            "right" && (
                                                                <span className="price-currency">
                                                                    {priceCurrency}
                                                                </span>
                                                            )}
                                                    </span>

                                                    {showOnSale && (
                                                        <>
                                                            <span
                                                                className="sale-price"
                                                                data-sale-price={
                                                                    salePrice
                                                                }
                                                            >
                                                                {currencyPlacement ===
                                                                    "left" && (
                                                                        <span className="price-currency">
                                                                            {
                                                                                priceCurrency
                                                                            }
                                                                        </span>
                                                                    )}
                                                                {salePrice}
                                                                {currencyPlacement ===
                                                                    "right" && (
                                                                        <span className="price-currency">
                                                                            {
                                                                                priceCurrency
                                                                            }
                                                                        </span>
                                                                    )}
                                                            </span>
                                                        </>
                                                    )}
                                                </span>
                                                <span
                                                    className="price-period"
                                                    data-period-separator={
                                                        periodSeparator
                                                    }
                                                    data-price-period={
                                                        pricePeriod
                                                    }
                                                >
                                                    {periodSeparator}{" "}
                                                    {pricePeriod}
                                                </span>
                                            </div>
                                        )}
                                        {showButton && (
                                            <div
                                                className="eb-pricing-footer"
                                                data-icon={buttonIcon}
                                            >
                                                <div className="eb-pricing-button-wrapper">
                                                    <a
                                                        href={buttonURL}
                                                        className="eb-pricing-button"
                                                    >
                                                        {buttonIconPosition ===
                                                            "left" && (
                                                                <EBDisplayIcon icon={buttonIcon} />
                                                            )}
                                                        <DynamicInputValueHandler
                                                            value={buttonText}
                                                            tagName="span"
                                                            className="eb-button-text"
                                                            onChange={(
                                                                buttonText
                                                            ) =>
                                                                setAttributes({
                                                                    buttonText,
                                                                })
                                                            }
                                                            readOnly={true}
                                                        />
                                                        {buttonIconPosition ===
                                                            "right" && (
                                                                <EBDisplayIcon icon={buttonIcon} />
                                                            )}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default edit;
