/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
    {
        attributes: {
            ...attributes,
            titleText: {
                type: "string",
                default: "Essential Block Advanced Heading",
            },
            subtitleText: {
                type: "string",
                default: "Essential Block Advance Subtitle",
            },
        },
        supports: {
            anchor: true,
        },
        save: ({ attributes }) => {
            const {
                blockId,
                preset,
                tagName,
                titleText,
                subtitleTagName,
                displaySubtitle,
                subtitleText,
                seperatorType,
                displaySeperator,
                seperatorPosition,
                separatorIcon,
                classHook,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`eb-advance-heading-wrapper ${blockId} ${preset}`} data-id={blockId}>
                            {displaySeperator && seperatorPosition === "top" && (
                                <div className={"eb-ah-separator " + seperatorType}>
                                    {seperatorType === "icon" && (
                                        <i
                                            className={`${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"
                                                }`}
                                        ></i>
                                    )}
                                </div>
                            )}
                            <RichText.Content
                                tagName={tagName}
                                className="eb-ah-title"
                                value={titleText}
                            />
                            {displaySubtitle && (
                                <RichText.Content
                                    tagName={subtitleTagName}
                                    className="eb-ah-subtitle"
                                    value={subtitleText}
                                />
                            )}
                            {displaySeperator && seperatorPosition === "bottom" && (
                                <div className={"eb-ah-separator " + seperatorType}>
                                    {seperatorType === "icon" && (
                                        <i
                                            className={`${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"
                                                }`}
                                        ></i>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div >
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            anchor: true,
        },
        save: ({ attributes }) => {
            const {
                blockId,
                preset,
                tagName,
                titleText,
                subtitleTagName,
                displaySubtitle,
                subtitleText,
                seperatorType,
                displaySeperator,
                separatorIcon,
                classHook,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`eb-advance-heading-wrapper ${blockId} ${preset}`} data-id={blockId}>
                            <RichText.Content
                                tagName={tagName}
                                className="eb-ah-title"
                                value={titleText}
                            />
                            {displaySubtitle && (
                                <RichText.Content
                                    tagName={subtitleTagName}
                                    className="eb-ah-subtitle"
                                    value={subtitleText}
                                />
                            )}
                            {displaySeperator && (
                                <div className={"eb-ah-separator " + seperatorType}>
                                    {seperatorType === "icon" && (
                                        <i className={`${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"}`}></i>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div >
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            anchor: true,
        },
        save: ({ attributes }) => {
            const {
                blockId,
                preset,
                tagName,
                titleText,
                displaySubtitle,
                subtitleText,
                seperatorType,
                displaySeperator,
                separatorIcon,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-advance-heading-wrapper ${blockId} ${preset}`}
                        data-id={blockId}
                    >
                        <RichText.Content
                            tagName={tagName}
                            className="eb-ah-title"
                            value={titleText}
                        />
                        {displaySubtitle && (
                            <RichText.Content
                                tagName={"p"}
                                className="eb-ah-subtitle"
                                value={subtitleText}
                            />
                        )}
                        {displaySeperator && (
                            <div className={"eb-ah-separator " + seperatorType}>
                                {seperatorType === "icon" && (
                                    <i
                                        className={`${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"
                                            }`}
                                    ></i>
                                )}
                            </div>
                        )}
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
                preset,
                tagName,
                titleText,
                displaySubtitle,
                subtitleText,
                seperatorType,
                displaySeperator,
                separatorIcon,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-advance-heading-wrapper ${blockId} ${preset}`}
                        data-id={blockId}
                    >
                        <RichText.Content
                            tagName={tagName}
                            className="eb-ah-title"
                            value={titleText}
                        />
                        {displaySubtitle && (
                            <RichText.Content
                                tagName={"p"}
                                className="eb-ah-subtitle"
                                value={subtitleText}
                            />
                        )}
                        {displaySeperator && (
                            <div className={"eb-ah-separator " + seperatorType}>
                                {seperatorType === "icon" && (
                                    <i
                                        className={`${separatorIcon ? separatorIcon : "fas fa-arrow-circle-down"
                                            }`}
                                    ></i>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
        },
    },
];

export default deprecated;
