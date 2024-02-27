/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { useEffect, useState, useRef } from "@wordpress/element";
import { select, dispatch, useSelect } from "@wordpress/data";

const { times } = lodash;

/**
 * Internal dependencies
 */

const {
    duplicateBlockIdFix,
    EBDisplayIcon
} = EBControls;

import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";
export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
        name
    } = props;
    const {
        resOption,
        blockMeta,
        blockId,
        tabChildCount,
        tabTitles,
        isMediaOn,
        layout,
        classHook,
        tagName,
    } = attributes;

    const tabWrapRef = useRef(null);

    const [activeTabId, setActiveTabId] = useState(false);
    const [isClickTab, setIsClickTab] = useState(false);

    const activeDefaultTabId = (
        tabTitles.find((item) => item.isDefault) || { id: "1" }
    ).id;

    const handleTabTitleClick = (id) => {
        setIsClickTab(true);

        const tabsParentEl = (tabWrapRef || { current: false }).current;

        if (!tabsParentEl) return false;

        const allTabChildWraps = tabsParentEl.querySelectorAll(
            `.eb-tab-wrapper[data-tab-parent-id="${blockId}"]`
        );

        if (allTabChildWraps.length === 0) return false;

        for (const tabWrapDiv of allTabChildWraps) {
            const tabId = tabWrapDiv.dataset.tabId;

            if (tabId === id) {
                tabWrapDiv.style.display = "block";
                tabWrapDiv.style.animation = "fadeIn 0.3s";
            } else {
                tabWrapDiv.style.display = "none";
            }
        }

        setActiveTabId(`${id}`);
    };

    const onTabTitleChange = (text, index) => {
        const newTabTitles = tabTitles.map((item, i) => {
            if (i === index) {
                item.text = text;
            }

            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    useEffect(() => {
        // this is for creating a unique blockId for each block's unique className
        const BLOCK_PREFIX = "eb-advanced-tabs";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        if (tabTitles.length === 0) {
            setAttributes({
                tabTitles: [
                    {
                        text: "Tab Title 1",
                        id: "1",
                        media: "icon",
                        icon: "fas fa-home",
                        image: "",
                        isExpanded: true,
                        isDefault: true,
                        customId: "",
                    },
                    {
                        text: "Tab Title 2",
                        id: "2",
                        media: "icon",
                        icon: "fas fa-home",
                        image: "",
                        isExpanded: false,
                        isDefault: false,
                        customId: "",
                    },
                    {
                        text: "Tab Title 3",
                        id: "3",
                        media: "icon",
                        icon: "fas fa-home",
                        image: "",
                        isExpanded: false,
                        isDefault: false,
                        customId: "",
                    },
                ],
            });
        }
    }, []);

    const { innerBlocks } = useSelect(
        (select) => select("core/block-editor").getBlocksByClientId(clientId)[0]
    );
    //
    useEffect(() => {
        const { updateBlockAttributes } = dispatch("core/block-editor");

        times(innerBlocks.length, (n) => {
            updateBlockAttributes(innerBlocks[n].clientId, {
                tabParentId: `${blockId}`,
            });
        });
    }, [blockId, innerBlocks]);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    return (
        <>
            {isSelected && (
                <Inspector
                    clientId={clientId}
                    attributes={attributes}
                    setAttributes={setAttributes}
                    handleTabTitleClick={handleTabTitleClick}
                />
            )}
            <div {...blockProps}>
                <Style
                    {...props}
                    isClickTab={isClickTab}
                />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`${blockId} eb-advanced-tabs-wrapper ${layout}`}
                        ref={tabWrapRef}
                    >
                        <div className="eb-tabs-nav">
                            <ul
                                className="tabTitles"
                                data-tabs-ul-id={`${blockId}`}
                            >
                                {tabTitles.map((item, index) => {
                                    const itemId = item.id;

                                    return (
                                        <li
                                            key={index}
                                            data-title-tab-id={item.id}
                                            onClick={(e) => {
                                                handleTabTitleClick(item.id);
                                            }}
                                            className={
                                                (activeTabId ||
                                                    activeDefaultTabId) ===
                                                    item.id
                                                    ? "active"
                                                    : "inactive"
                                            }
                                        >
                                            {isMediaOn && (
                                                <>
                                                    {item.media === "icon" &&
                                                        item.icon && (
                                                            <EBDisplayIcon icon={item.icon} />
                                                        )}
                                                    {item.media === "image" &&
                                                        item.imgUrl && (
                                                            <img
                                                                src={
                                                                    item.imgUrl
                                                                }
                                                            />
                                                        )}
                                                </>
                                            )}
                                            <RichText
                                                tagName={tagName}
                                                className="tab-title-text"
                                                placeholder="Tab Title"
                                                value={item.text}
                                                onChange={(text) =>
                                                    onTabTitleChange(
                                                        text,
                                                        index
                                                    )
                                                }
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={`eb-tabs-contents`}>
                            <InnerBlocks
                                templateLock="all"
                                template={times(tabChildCount, (n) => [
                                    "essential-blocks/tab",
                                    {
                                        tabId: `${n + 1}`,
                                        tabParentId: blockId,
                                    },
                                ])}
                                allowedBlocks={["essential-blocks/tab"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

