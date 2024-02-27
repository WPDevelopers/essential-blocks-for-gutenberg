/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
    {
        attributes: { ...attributes },
        save: ({ attributes }) => {
            const {
                blockId,
                showIcon,
                icon,
                title,
                titleTag,
                showSubtitle,
                subtitle,
                description,
                buttonText,
                buttonURL,
                sortableLists,
                buttonSize,
                btnHoverEffect,
                showButton,
                classHook,
                linkNewTab,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`eb-cia-wrapper ${blockId}`} data-icon={icon ? icon : ""}>
                            <div className="eb-cia-text-wrapper">
                                {sortableLists.map(({ label, value }, index) => {
                                    if (value === "title") {
                                        return (
                                            <RichText.Content
                                                key={index}
                                                tagName={titleTag}
                                                className="eb-cia-title"
                                                value={title}
                                            />
                                        );
                                    } else if (value === "subtitle") {
                                        return (
                                            showSubtitle && (
                                                <RichText.Content
                                                    key={index}
                                                    tagName="h4"
                                                    className="eb-cia-subtitle"
                                                    value={subtitle}
                                                />
                                            )
                                        );
                                    } else if (value === "icon") {
                                        return showIcon && <div key={index} className={`eb-cia-icon ${icon}`} />;
                                    } else if (value === "description") {
                                        return (
                                            <RichText.Content
                                                key={index}
                                                tagName="p"
                                                className="eb-cia-description"
                                                value={description}
                                            />
                                        );
                                    }
                                })}
                            </div>
                            {showButton && (
                                <div className="eb-cia-button-wrapper">
                                    <a href={buttonURL} target={linkNewTab ? "_blank" : "_self"} rel="noopener">
                                        <div
                                            className={`eb-cia-button is-${buttonSize}${btnHoverEffect ? ` ${btnHoverEffect}` : ""
                                                }`}
                                        >
                                            <RichText.Content value={buttonText} />
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: { ...attributes },
        save: ({ attributes }) => {
            const {
                blockId,
                showIcon,
                icon,
                title,
                titleTag,
                showSubtitle,
                subtitle,
                description,
                buttonText,
                buttonURL,
                sortableLists,
                buttonSize,
                btnHoverEffect,
                showButton,
                classHook,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div
                            className={`eb-cia-wrapper ${blockId}`}
                            data-icon={icon ? icon : ""}
                        >
                            <div className="eb-cia-text-wrapper">
                                {sortableLists.map(({ label, value }, index) => {
                                    if (value === "title") {
                                        return (
                                            <RichText.Content
                                                key={index}
                                                tagName={titleTag}
                                                className="eb-cia-title"
                                                value={title}
                                            />
                                        );
                                    } else if (value === "subtitle") {
                                        return (
                                            showSubtitle && (
                                                <RichText.Content
                                                    key={index}
                                                    tagName="h4"
                                                    className="eb-cia-subtitle"
                                                    value={subtitle}
                                                />
                                            )
                                        );
                                    } else if (value === "icon") {
                                        return (
                                            showIcon && (
                                                <div key={index} className={`eb-cia-icon ${icon}`} />
                                            )
                                        );
                                    } else if (value === "description") {
                                        return (
                                            <RichText.Content
                                                key={index}
                                                tagName="p"
                                                className="eb-cia-description"
                                                value={description}
                                            />
                                        );
                                    }
                                })}
                            </div>
                            {showButton && (
                                <div className="eb-cia-button-wrapper">
                                    <a href={buttonURL}>
                                        <div
                                            className={`eb-cia-button is-${buttonSize}${btnHoverEffect ? ` ${btnHoverEffect}` : ""
                                                }`}
                                        >
                                            <RichText.Content value={buttonText} />
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: { ...attributes },
        save: ({ attributes }) => {
            const {
                blockId,
                showIcon,
                icon,
                title,
                titleTag,
                showSubtitle,
                subtitle,
                description,
                buttonText,
                buttonURL,
                sortableLists,
                buttonSize,
                btnHoverEffect,
                showButton,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-cia-wrapper ${blockId}`}
                        data-icon={icon ? icon : ""}
                    >
                        <div className="eb-cia-text-wrapper">
                            {sortableLists.map(({ label, value }, index) => {
                                if (value === "title") {
                                    return (
                                        <RichText.Content
                                            key={index}
                                            tagName={titleTag}
                                            className="eb-cia-title"
                                            value={title}
                                        />
                                    );
                                } else if (value === "subtitle") {
                                    return (
                                        showSubtitle && (
                                            <RichText.Content
                                                key={index}
                                                tagName="h4"
                                                className="eb-cia-subtitle"
                                                value={subtitle}
                                            />
                                        )
                                    );
                                } else if (value === "icon") {
                                    return (
                                        showIcon && (
                                            <div key={index} className={`eb-cia-icon ${icon}`} />
                                        )
                                    );
                                } else if (value === "description") {
                                    return (
                                        <RichText.Content
                                            key={index}
                                            tagName="p"
                                            className="eb-cia-description"
                                            value={description}
                                        />
                                    );
                                }
                            })}
                        </div>
                        {showButton && (
                            <div className="eb-cia-button-wrapper">
                                <a href={buttonURL}>
                                    <div
                                        className={`eb-cia-button is-${buttonSize}${btnHoverEffect ? ` ${btnHoverEffect}` : ""
                                            }`}
                                    >
                                        <RichText.Content value={buttonText} />
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            );
        },
    },
];

export default deprecated;
