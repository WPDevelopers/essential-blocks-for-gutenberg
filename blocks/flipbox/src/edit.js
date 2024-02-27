/**
 * WordPress dependencits
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
    BlockControls,
    AlignmentToolbar,
    useBlockProps,
    RichText,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { select } from "@wordpress/data";

/*
 * Internal dependencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
    isValidHtml,
    DynamicInputValueHandler,
    EBDisplayIcon
} = window.EBControls;

function Edit(props) {
    const {
        isSelected,
        attributes,
        setAttributes,
        className,
        clientId,
        name
    } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        isHover,
        selectedSide,
        frontIconOrImage,
        frontIcon,
        frontImageUrl,
        frontImageAlt,
        backIconOrImage,
        backIcon,
        backImageUrl,
        backImageAlt,
        showFrontTitle,
        frontTitle,
        showFrontContent,
        frontContent,
        showBackTitle,
        backTitle,
        showBackContent,
        backContent,
        linkType,
        buttonText,
        buttonIcon,
        link,
        buttonClasses,
        align,
        contentPosition,
        flipMode,
        isMouseLeaveOn,
        classHook,
    } = attributes;

    // this useEffect is for creating an unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-flipbox";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        if (!flipMode) {
            setAttributes({ flipMode: "hover" });
        }
        if (!isMouseLeaveOn) {
            setAttributes({ isMouseLeaveOn: true });
        }
    }, []);

    const alignmentClass =
        contentPosition === "center"
            ? " eb-flipbox-align-center"
            : contentPosition === "right"
                ? " eb-flipbox-align-right"
                : "";

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        title="Front"
                        icon="arrow-right-alt2"
                        isActive={selectedSide === "front"}
                        onClick={() => setAttributes({ selectedSide: "front" })}
                    />
                    <ToolbarButton
                        title="Back"
                        icon="arrow-left-alt2"
                        isActive={selectedSide === "back"}
                        onClick={() => setAttributes({ selectedSide: "back" })}
                    />
                </ToolbarGroup>
                <AlignmentToolbar
                    value={align}
                    onChange={(align) => setAttributes({ align })}
                />
            </BlockControls>

            <div {...blockProps}>
                <Style {...props} />
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`eb-flipbox-container ${blockId}${alignmentClass}`}
                        data-id={blockId}
                        onMouseEnter={() => setAttributes({ isHover: true })}
                        onMouseLeave={() => setAttributes({ isHover: false })}
                    >
                        <div
                            className={`eb-flipper${isHover || selectedSide === "back"
                                ? " back-is-selected"
                                : ""
                                }`}
                        >
                            <div className="eb-flipbox-front">
                                <div className="eb-flipbox-items-container">
                                    {frontIconOrImage !== "none" && (
                                        <div className="eb-flipbox-icon-wrapper">
                                            {frontIconOrImage === "image" &&
                                                frontImageUrl && (
                                                    <div className="eb-flipbox-front-image-container">
                                                        <img
                                                            src={frontImageUrl}
                                                            alt={frontImageAlt}
                                                        />
                                                    </div>
                                                )}
                                            {frontIconOrImage === "icon" &&
                                                frontIcon && (
                                                    <div
                                                        className="eb-flipbox-icon-front"
                                                        data-icon={frontIcon}
                                                    >
                                                        <EBDisplayIcon icon={frontIcon} />
                                                    </div>
                                                )}
                                        </div>
                                    )}
                                    {showFrontTitle && (
                                        <div className="eb-flipbox-front-title-wrapper">
                                            {linkType === "title" && link ? (
                                                <a
                                                    href={link ? link : "#"}
                                                    className="title-link"
                                                >
                                                    <DynamicInputValueHandler
                                                        value={
                                                            isValidHtml(
                                                                frontTitle
                                                            )
                                                                ? frontTitle
                                                                : __(
                                                                    "Invalid HTML Tag",
                                                                    "essential-blocks"
                                                                )
                                                        }
                                                        tagName="h3"
                                                        className="eb-flipbox-front-title"
                                                        allowedFormats={[
                                                            "core/bold",
                                                            "core/italic",
                                                            "core/link",
                                                            "core/strikethrough",
                                                            "core/underline",
                                                            "core/text-color",
                                                        ]}
                                                        onChange={(
                                                            frontTitle
                                                        ) =>
                                                            setAttributes({
                                                                frontTitle,
                                                            })
                                                        }
                                                        readOnly={true}
                                                    />
                                                </a>
                                            ) : (
                                                <DynamicInputValueHandler
                                                    value={
                                                        isValidHtml(frontTitle)
                                                            ? frontTitle
                                                            : __(
                                                                "Invalid HTML Tag",
                                                                "essential-blocks"
                                                            )
                                                    }
                                                    tagName="h3"
                                                    className="eb-flipbox-front-title"
                                                    allowedFormats={[
                                                        "core/bold",
                                                        "core/italic",
                                                        "core/link",
                                                        "core/strikethrough",
                                                        "core/underline",
                                                        "core/text-color",
                                                    ]}
                                                    onChange={(frontTitle) =>
                                                        setAttributes({
                                                            frontTitle,
                                                        })
                                                    }
                                                    readOnly={true}
                                                />
                                            )}
                                        </div>
                                    )}
                                    {showFrontContent && (
                                        <div className="eb-flipbox-front-content-wrapper">
                                            <DynamicInputValueHandler
                                                tagName="p"
                                                className="eb-flipbox-front-content"
                                                placeholder={__("Add subtitle...")}
                                                value={
                                                    isValidHtml(frontContent)
                                                        ? frontContent
                                                        : __(
                                                            "Invalid HTML Tag",
                                                            "essential-blocks"
                                                        )
                                                }
                                                onChange={(frontContent) =>
                                                    setAttributes({
                                                        frontContent,
                                                    })
                                                }
                                                readOnly={true}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="eb-flipbox-back">
                                <div className="eb-flipbox-items-container">
                                    {backIconOrImage !== "none" && (
                                        <div className="eb-flipbox-icon-wrapper">
                                            {backIconOrImage === "image" &&
                                                backImageUrl && (
                                                    <div className="eb-flipbox-back-image-container">
                                                        <img
                                                            src={backImageUrl}
                                                            alt={backImageAlt}
                                                        />
                                                    </div>
                                                )}
                                            {backIconOrImage === "icon" &&
                                                backIcon && (
                                                    <div
                                                        className="eb-flipbox-icon-back"
                                                        data-icon={backIcon}
                                                    >
                                                        <EBDisplayIcon icon={backIcon} />
                                                    </div>
                                                )}
                                        </div>
                                    )}
                                    {showBackTitle && (
                                        <div className="eb-flipbox-back-title-wrapper">
                                            {linkType === "title" && link ? (
                                                <a
                                                    href={link ? link : "#"}
                                                    className="title-link"
                                                >
                                                    {/* <RichText
                                                        tagName="h3"
                                                        className="eb-flipbox-back-title"
                                                        value={
                                                            isValidHtml(
                                                                backTitle
                                                            )
                                                                ? backTitle
                                                                : __(
                                                                      "Invalid HTML Tag",
                                                                      "essential-blocks"
                                                                  )
                                                        }
                                                        allowedFormats={[
                                                            "core/bold",
                                                            "core/italic",
                                                            "core/link",
                                                            "core/strikethrough",
                                                            "core/underline",
                                                            "core/text-color",
                                                        ]}
                                                        onChange={(backTitle) =>
                                                            setAttributes({
                                                                backTitle,
                                                            })
                                                        }
                                                    /> */}
                                                    <DynamicInputValueHandler
                                                        value={
                                                            isValidHtml(
                                                                backTitle
                                                            )
                                                                ? backTitle
                                                                : __(
                                                                    "Invalid HTML Tag",
                                                                    "essential-blocks"
                                                                )
                                                        }
                                                        tagName="h3"
                                                        className="eb-flipbox-back-title"
                                                        allowedFormats={[
                                                            "core/bold",
                                                            "core/italic",
                                                            "core/link",
                                                            "core/strikethrough",
                                                            "core/underline",
                                                            "core/text-color",
                                                        ]}
                                                        onChange={(backTitle) =>
                                                            setAttributes({
                                                                backTitle,
                                                            })
                                                        }
                                                        readOnly={true}
                                                    />
                                                </a>
                                            ) : (
                                                <DynamicInputValueHandler
                                                    value={
                                                        isValidHtml(backTitle)
                                                            ? backTitle
                                                            : __(
                                                                "Invalid HTML Tag",
                                                                "essential-blocks"
                                                            )
                                                    }
                                                    tagName="h3"
                                                    className="eb-flipbox-back-title"
                                                    allowedFormats={[
                                                        "core/bold",
                                                        "core/italic",
                                                        "core/link",
                                                        "core/strikethrough",
                                                        "core/underline",
                                                        "core/text-color",
                                                    ]}
                                                    onChange={(backTitle) =>
                                                        setAttributes({
                                                            backTitle,
                                                        })
                                                    }
                                                    readOnly={true}
                                                />
                                            )}
                                        </div>
                                    )}
                                    {showBackContent && (
                                        <div className="eb-flipbox-back-content-wrapper">
                                            <DynamicInputValueHandler
                                                tagName="p"
                                                className="eb-flipbox-back-content"
                                                value={
                                                    isValidHtml(backContent)
                                                        ? backContent
                                                        : __(
                                                            "Invalid HTML Tag",
                                                            "essential-blocks"
                                                        )
                                                }
                                                onChange={(backContent) =>
                                                    setAttributes({
                                                        backContent,
                                                    })
                                                }
                                                readOnly={true}
                                            />
                                        </div>
                                    )}
                                    {linkType === "button" && (
                                        <div className="eb-flipbox-button-container">
                                            <a
                                                className={`eb-flipbox-button-link ${buttonClasses}`}
                                                href={link ? link : "#"}
                                            >
                                                <div className="eb-flipbox-button-content">
                                                    <span>{buttonText}</span>
                                                    {buttonIcon && (
                                                        <EBDisplayIcon icon={buttonIcon} className="eb-flipbox-button-icon" />
                                                    )}
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;
