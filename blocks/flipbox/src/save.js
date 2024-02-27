/**
 * Internal dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
const { EBDisplayIcon } = window.EBControls;
const Save = ({ attributes }) => {
    const {
        blockId,
        flipType,
        frontIconOrImage,
        frontImageUrl,
        frontImageAlt,
        frontIcon,
        showFrontTitle,
        frontTitle,
        showFrontContent,
        frontContent,
        backIconOrImage,
        backImageUrl,
        backImageAlt,
        backIcon,
        showBackTitle,
        backTitle,
        showBackContent,
        backContent,
        link,
        linkType,
        buttonText,
        buttonIcon,
        buttonClasses,
        contentPosition,
        linkOpenNewTab,
        flipMode,
        isMouseLeaveOn,
        classHook,
    } = attributes;

    const alignmentClass =
        contentPosition === "center"
            ? " eb-flipbox-align-center"
            : contentPosition === "right"
                ? " eb-flipbox-align-right"
                : "";
    const flipModeClass =
        flipMode === "hover" ? " eb-hover-mode" : " eb-click-mode";

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`eb-flipbox-container ${blockId}${alignmentClass}${flipModeClass}`}
                    data-id={blockId}
                    data-flip-type={flipType}
                    data-flip-mode={flipMode}
                    {...("click" === flipMode
                        ? { "data-flip-mouseleave": isMouseLeaveOn }
                        : {})}
                >
                    <div
                        className={`eb-flipper${"hover" === flipMode ? " " + flipType : ""
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
                                                <RichText.Content
                                                    tagName="h3"
                                                    className="eb-flipbox-front-title"
                                                    value={frontTitle}
                                                />
                                            </a>
                                        ) : (
                                            <RichText.Content
                                                tagName="h3"
                                                className="eb-flipbox-front-title"
                                                value={frontTitle}
                                            />
                                        )}
                                    </div>
                                )}
                                {showFrontContent && (
                                    <div className="eb-flipbox-front-content-wrapper">
                                        <RichText.Content
                                            tagName="p"
                                            className="eb-flipbox-front-content"
                                            value={frontContent}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div
                            className="eb-flipbox-back"
                            onClick={
                                linkType === "box" && link && linkOpenNewTab
                                    ? `window.open('${link}', '_blank');`
                                    : linkType === "box" && link
                                        ? `window.location='${link}'`
                                        : undefined
                            }
                        >
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
                                                target={
                                                    linkOpenNewTab
                                                        ? `_blank`
                                                        : `_self`
                                                }
                                                rel="noopener"
                                            >
                                                <RichText.Content
                                                    tagName="h3"
                                                    className="eb-flipbox-back-title"
                                                    value={backTitle}
                                                />
                                            </a>
                                        ) : (
                                            <RichText.Content
                                                tagName="h3"
                                                className="eb-flipbox-back-title"
                                                value={backTitle}
                                            />
                                        )}
                                    </div>
                                )}
                                {showBackContent && (
                                    <div className="eb-flipbox-back-content-wrapper">
                                        <RichText.Content
                                            tagName="p"
                                            className="eb-flipbox-back-content"
                                            value={backContent}
                                        />
                                    </div>
                                )}
                                {linkType === "button" && (
                                    <div className="eb-flipbox-button-container">
                                        <a
                                            className={`eb-flipbox-button-link ${buttonClasses}`}
                                            href={link ? link : "#"}
                                            target={
                                                linkOpenNewTab
                                                    ? `_blank`
                                                    : `_self`
                                            }
                                            rel="noopener"
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
    );
};

export default Save;
