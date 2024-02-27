/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    BlockControls,
    AlignmentToolbar,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * External depencencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
    EBDisplayIcon
} = window.EBControls;

const edit = (props) => {
    const { attributes, isSelected, className, setAttributes, clientId, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        featureListAlign,
        features,
        iconPosition,
        iconShape,
        shapeView,
        showConnector,
        connectorStyle,
        classHook,
        useInlineDesign,
    } = attributes;

    const featureListAlignClass =
        featureListAlign === "center"
            ? " eb-feature-list-center"
            : featureListAlign === "right"
                ? " eb-feature-list-right"
                : " eb-feature-list-left";

    useEffect(() => {
        // this useEffect is for creating an unique id for each block's unique className by a random unique number
        const BLOCK_PREFIX = "eb-feature-list";
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

    const featureListWrapperClass =
        iconShape !== "none" ? ` ${iconShape} ${shapeView}` : " none";
    const inlineDesignClass = useInlineDesign ? " eb-inline-feature-list" : "";

    useEffect(() => {
        if (features.length > 0) return;

        const defaultFeatures = [
            {
                iconType: "icon",
                icon: "fas fa-check",
                title: "Feature Item 1",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna",
                iconColor: "",
                link: "",
                linkOpenNewTab: "false",
                iconBackgroundColor: "",
            },
            {
                iconType: "icon",
                icon: "fas fa-times",
                title: "Feature Item 2",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna",
                iconColor: "",
                link: "",
                linkOpenNewTab: "false",
                iconBackgroundColor: "",
            },
            {
                iconType: "icon",
                icon: "fas fa-anchor",
                title: "Feature Item 3",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna",
                iconColor: "",
                link: "",
                linkOpenNewTab: "false",
                iconBackgroundColor: "",
            },
        ];

        setAttributes({ features: defaultFeatures });
    }, []);

    let iconStyle = {};

    return (
        <>
            {isSelected && (
                <Inspector attributes={attributes} setAttributes={setAttributes} />
            )}
            <div {...blockProps}>
                <Style {...props} />
                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div
                        className={`${blockId} eb-feature-list-wrapper -icon-position-${iconPosition} -tablet-icon-position-${iconPosition} -mobile-icon-position-${iconPosition}${featureListAlignClass} ${!useInlineDesign && showConnector
                            ? "connector-" + connectorStyle
                            : ""
                            }`}
                    >
                        <ul
                            className={`eb-feature-list-items${featureListWrapperClass}${inlineDesignClass}`}
                        >
                            {features.map(
                                (
                                    {
                                        title,
                                        iconType,
                                        featureImage,
                                        featureImageId,
                                        featureImageAlt,
                                        featureImageTitle,
                                        icon,
                                        iconColor,
                                        iconBackgroundColor,
                                        content,
                                        link,
                                        linkOpenNewTab,
                                    },
                                    index
                                ) => {
                                    {
                                        iconStyle = {
                                            color: iconColor,
                                            backgroundColor: iconBackgroundColor,
                                        };
                                    }
                                    return (
                                        <li
                                            key={index}
                                            className="eb-feature-list-item"
                                            data-new-tab={
                                                linkOpenNewTab ? linkOpenNewTab.toString() : "false"
                                            }
                                            data-icon-type={iconType}
                                            data-image={featureImage}
                                            data-image-id={featureImageId}
                                            data-alt={featureImageAlt}
                                            data-title={featureImageTitle}
                                            data-icon={icon}
                                            data-icon-color={iconColor}
                                            data-icon-background-color={iconBackgroundColor}
                                            data-link={link}
                                        >
                                            {iconType !== "none" && (
                                                <div className="eb-feature-list-icon-box">
                                                    <div className="eb-feature-list-icon-inner">
                                                        <span
                                                            className="eb-feature-list-icon"
                                                            style={iconStyle}
                                                        >
                                                            {iconType === "icon" && <EBDisplayIcon icon={icon} />}
                                                            {iconType === "image" && (
                                                                <img
                                                                    className="eb-feature-list-img"
                                                                    src={featureImage}
                                                                    alt={
                                                                        featureImageAlt
                                                                            ? featureImageAlt
                                                                            : featureImageTitle
                                                                    }
                                                                />
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="eb-feature-list-content-box">
                                                {link ? (
                                                    <attributes.titleTag className="eb-feature-list-title">
                                                        <a href={link}>{title}</a>
                                                    </attributes.titleTag>
                                                ) : (
                                                    <attributes.titleTag className="eb-feature-list-title">
                                                        {title}
                                                    </attributes.titleTag>
                                                )}
                                                {!useInlineDesign && (
                                                    <p className="eb-feature-list-content">{content}</p>
                                                )}
                                            </div>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default edit;
