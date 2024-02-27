/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
const { omit } = lodash;

/**
 * Inteanal dependencies
 */
import AccordionIcon from "./components/accordion-icon";

import attributes from "./attributes";

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                classHook,
                accordionType,
                displayIcon,
                tabIcon,
                expandedIcon,
            } = attributes;
            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div
                            className={`eb-accordion-container ${blockId}`}
                            data-accordion-type={accordionType || "toggle"}
                            data-tab-icon={displayIcon ? tabIcon : ""}
                            data-expanded-icon={displayIcon ? expandedIcon : ""}
                        >
                            <div className="eb-accordion-inner">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: {
            ...omit({ ...attributes }, ["tabIcon", "expandedIcon"]),
            accordions: {
                type: "array",
                selector: ".eb-accordion-wrapper",
                source: "query",
                default: [],
                query: {
                    title: {
                        type: "string",
                        selector: ".eb-accordion-title",
                        source: "html",
                    },
                    content: {
                        type: "string",
                        selector: ".eb-accordion-content",
                        source: "html",
                    },
                    clickable: {
                        type: "string",
                        source: "attribute",
                        attribute: "data-clickable",
                    },
                },
            },
            selectedTab: {
                type: "string",
                default: "",
            },
            expandedTabs: {
                type: "array",
                default: [],
            },
            tabIcon: {
                type: "string",
                default: "fas fa-angle-right",
            },
            expandedIcon: {
                type: "string",
                default: "fas fa-angle-down",
            },
        },
        supports: {
            align: ["wide", "full"],
        },
        migrate(attributes) {
            const iBlocks = attributes.accordions.map((item) =>
                createBlock(
                    "essential-blocks/accordion-item",
                    {
                        title: item.title,
                    },
                    [createBlock("core/paragraph", { content: item.content })]
                )
            );

            return [omit(attributes, ["accordions"]), iBlocks];
        },
        save: ({ attributes }) => {
            const {
                blockId,
                classHook,
                accordionType,
                displayIcon,
                accordions,
                tabIcon,
                expandedIcon,
                tagName,
            } = attributes;
            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div
                            className={`eb-accordion-container ${blockId}`}
                            data-accordion-type={accordionType || "toggle"}
                            data-tab-icon={displayIcon ? tabIcon : ""}
                            data-expanded-icon={displayIcon ? expandedIcon : ""}
                        >
                            <div className="eb-accordion-inner">
                                {accordions.map((accordion, index) => (
                                    <div
                                        className="eb-accordion-wrapper"
                                        data-clickable={`${accordion.clickable}`}
                                        key={index}
                                    >
                                        <div className="eb-accordion-title-wrapper">
                                            {displayIcon && <AccordionIcon icon={tabIcon} />}

                                            <RichText.Content
                                                tagName={tagName}
                                                className="eb-accordion-title"
                                                value={accordion.title}
                                            />
                                        </div>
                                        <div className="eb-accordion-content-wrapper">
                                            <RichText.Content
                                                tagName="p"
                                                className="eb-accordion-content"
                                                value={accordion.content}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: {
            ...attributes,
            accordions: {
                type: "array",
                selector: ".eb-accordion-wrapper",
                source: "query",
                default: [],
                query: {
                    title: {
                        type: "string",
                        selector: ".eb-accordion-title",
                        source: "html",
                    },
                    content: {
                        type: "string",
                        selector: ".eb-accordion-content",
                        source: "html",
                    },
                    clickable: {
                        type: "string",
                        source: "attribute",
                        attribute: "data-clickable",
                    },
                },
            },
            selectedTab: {
                type: "string",
                default: "",
            },
            expandedTabs: {
                type: "array",
                default: [],
            },
        },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                accordionType,
                displayIcon,
                accordions,
                tabIcon,
                expandedIcon,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-accordion-container ${blockId}`}
                        data-accordion-type={accordionType || "toggle"}
                        data-tab-icon={displayIcon ? tabIcon : ""}
                        data-expanded-icon={displayIcon ? expandedIcon : ""}
                    >
                        <div className="eb-accordion-inner">
                            {accordions.map((accordion, index) => (
                                <div
                                    className="eb-accordion-wrapper"
                                    data-clickable={`${accordion.clickable}`}
                                    key={index}
                                >
                                    <div className="eb-accordion-title-wrapper">
                                        {displayIcon && <AccordionIcon icon={tabIcon} />}

                                        <RichText.Content
                                            tagName="h3"
                                            className="eb-accordion-title"
                                            value={accordion.title}
                                        />
                                    </div>
                                    <div className="eb-accordion-content-wrapper">
                                        <RichText.Content
                                            tagName="p"
                                            className="eb-accordion-content"
                                            value={accordion.content}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        },
    },
];

export default deprecated;
