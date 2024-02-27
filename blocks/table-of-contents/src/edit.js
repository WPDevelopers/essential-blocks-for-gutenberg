/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { renderToString, useEffect, useMemo } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import {
    BlockControls,
    RichText,
    AlignmentToolbar,
    useBlockProps,
} from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { select, withSelect } from "@wordpress/data";
import { decodeEntities } from "@wordpress/html-entities";
import {
    safeHTML, removeInvalidHTML
} from "@wordpress/dom";


/*
 * External dependencies
 */
import striptags from "striptags";

const {
    duplicateBlockIdFix,
    DynamicInputValueHandler,
    EBDisplayIcon
} = window.EBControls;

import { parseTocSlug } from "./helper";

import classnames from "classnames";
import Inspector from "./inspector";

import List from "./list";

import Style from "./style";

function getHeadingsFromHeadingElements(headingElements) {
    return [...headingElements].map((heading, index) => {
        let level;
        switch (heading.tagName) {
            case "H1":
                level = 1;
                break;
            case "H2":
                level = 2;
                break;
            case "H3":
                level = 3;
                break;
            case "H4":
                level = 4;
                break;
            case "H5":
                level = 5;
                break;
            case "H6":
                level = 6;
                break;
        }
        const content = heading.textContent;

        return {
            level: level,
            content: content,
            text: content,
            link: parseTocSlug(striptags(content)),
        };
    });
}

const getHeadersFromContent = (attributes, postContent) => {
    const safeContent = safeHTML(decodeEntities(postContent));

    const tempPostContentDOM = document.createElement("div");
    tempPostContentDOM.innerHTML = safeContent;


    let queryArray = ["h1", "h2", "h3", "h4", "h5", "h6"];
    if (attributes && undefined !== attributes.visibleHeaders && undefined !== attributes.visibleHeaders[0]) {
        queryArray = [];
        if (attributes.visibleHeaders[0]) {
            queryArray.push("h1");
        }
        if (attributes.visibleHeaders[1]) {
            queryArray.push("h2");
        }
        if (attributes.visibleHeaders[2]) {
            queryArray.push("h3");
        }
        if (attributes.visibleHeaders[3]) {
            queryArray.push("h4");
        }
        if (attributes.visibleHeaders[4]) {
            queryArray.push("h5");
        }
        if (attributes.visibleHeaders[5]) {
            queryArray.push("h6");
        }
    }
    const queryString = queryArray.toString();
    if (queryString) {
        const headingElements = tempPostContentDOM.querySelectorAll(queryString);
        return getHeadingsFromHeadingElements(headingElements);
    }
    return [];
};

function Edit(props) {
    const {
        isSelected,
        attributes,
        setAttributes,
        clientId,
        className,
        postContent,
        blockOrder,
        isTyping,
        name
    } = props;

    const {
        resOption,
        blockId,
        blockMeta,
        headers,
        title,
        collapsible,
        listType,
        displayTitle,
        scrollToTop,
        contentAlign,
        deleteHeaderList,
        isMigrated,
        scrollToTopIcon,
        classHook,
        cover,
        enableListStyle,
        preset,
        itemCollapsed
    } = attributes;


    const isBlockJustInserted = select(
        "core/block-editor"
    ).wasBlockJustInserted(clientId);

    const headerList = useMemo(() => getHeadersFromContent(attributes, postContent),
        [blockOrder, isTyping, postContent]
    );
    const deleteHeadersLists = useMemo(() => {
        let _headerList = headerList.map((item) => {
            let _item = {
                label: item.content,
                value: item.link,
                isDelete: false,
            };
            let _deleteHeaderList = deleteHeaderList.filter(
                (i) => i.value == _item.value
            );
            if (_deleteHeaderList.length > 0) {
                _item.isDelete =
                    _deleteHeaderList[0]?.isDelete ?? _item.isDelete;
            }
            return _item;
        });

        if (!isMigrated && !isBlockJustInserted) {
            if (JSON.stringify(headerList) !== JSON.stringify(headers)) {
                let newHeaderList = headerList.map((item) => item.text);
                let newHeaders = headers.map((item) => item.text);
                let difference = newHeaderList.filter(
                    (x) => !newHeaders.includes(x)
                );

                _headerList = [..._headerList].map((item) => {
                    if (difference.includes(item.label)) {
                        item.isDelete = true;
                    }
                    return item;
                });
            }

            setAttributes({ isMigrated: true });
        }

        return _headerList;
    }, [headerList, isBlockJustInserted]);

    useEffect(() => {
        if (JSON.stringify(headerList) !== JSON.stringify(headers)) {
            setAttributes({ headers: headerList });
        }
        if (
            JSON.stringify(deleteHeadersLists) !==
            JSON.stringify(deleteHeaderList)
        ) {
            setAttributes({ deleteHeaderList: deleteHeadersLists });
        }
    }, [deleteHeadersLists]);

    useEffect(() => {
        const previousGoTop = document.querySelector(".eb-toc-go-top");
        if (previousGoTop) {
            previousGoTop.remove();
        }

        const goTop = document.createElement("span");
        goTop.innerHTML = renderToString(<EBDisplayIcon icon={scrollToTopIcon} />);

        goTop.setAttribute("class", "eb-toc-go-top ");
        goTop.style.right = "300px";
        document.body.insertBefore(goTop, document.body.lastChild);
    }, [scrollToTopIcon]);

    useEffect(() => {
        const scrollElement = document.querySelector(".eb-toc-go-top");

        if (scrollToTop) {
            scrollElement.classList.add("show-scroll");
            scrollElement.classList.remove("hide-scroll");
        } else {
            scrollElement.classList.add("hide-scroll");
            scrollElement.classList.remove("show-scroll");
        }
    }, [scrollToTop, scrollToTopIcon]);

    // this useEffect is for creating a unique blockId for each block's unique className
    useEffect(() => {
        const BLOCK_PREFIX = "eb-toc";
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


    // CollapsedItem
    useEffect(() => {
        if (itemCollapsed) {
            let container = document.querySelector(`.eb-toc-container.${blockId}`);
            const items = container?.querySelectorAll(".eb-toc-wrapper .eb-toc__list-wrap > .eb-toc__list > li");

            for (let item of items) {
                const selector = item?.querySelector("a");
                const selectorIcon = item?.querySelector("svg");
                const collapsedItem = item?.querySelector(".eb-toc__list");

                if (collapsedItem !== null) {
                    selectorIcon?.addEventListener("click", function () {
                        item?.classList.toggle("hide-items");
                    });
                }

            }

        }
    })

    return cover.length ? (
        <div>
            <img src={cover} alt="table of content" style={{ maxWidth: "100%" }} />
        </div>
    ) : (
        <>
            {isSelected && (
                <Inspector
                    deleteHeaders={deleteHeadersLists}
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

            <BlockControls>
                <AlignmentToolbar
                    value={contentAlign}
                    onChange={(contentAlign) => setAttributes({ contentAlign })}
                    controls={["left", "center", "right"]}
                />
                <ToolbarGroup>
                    <ToolbarButton
                        title="Unordered"
                        icon="editor-ul"
                        isActive={listType === "ul"}
                        onClick={() => setAttributes({ listType: "ul" })}
                    />

                    <ToolbarButton
                        title="Ordered"
                        icon="editor-ol"
                        isActive={listType === "ol"}
                        onClick={() => setAttributes({ listType: "ol" })}
                    />

                    <ToolbarButton
                        title="None"
                        icon="minus"
                        isActive={listType === "none"}
                        onClick={() => setAttributes({ listType: "none" })}
                    />
                </ToolbarGroup>
            </BlockControls>

            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`${blockId} eb-toc-container ${preset} ${!enableListStyle ? 'list-style-none' : ''}`}>
                        <div
                            onClick={() => collapsible && setVisible(!visible)}
                        >
                            {displayTitle && (
                                <DynamicInputValueHandler
                                    value={title}
                                    className="eb-toc-title"
                                    tagName="div"
                                    allowedFormats={[
                                        "core/bold",
                                        "core/italic",
                                        "core/link",
                                        "core/strikethrough",
                                        "core/underline",
                                        "core/text-color",
                                    ]}
                                    placeholder={__(
                                        "Table of content",
                                        "essential-blocks"
                                    )}
                                    onChange={(title) =>
                                        setAttributes({
                                            title,
                                        })
                                    }
                                    readOnly={true}
                                />
                            )}
                        </div>
                        {headers.length > 0 ? (
                            <div className="eb-toc-wrapper">
                                <List attributes={attributes} />
                            </div>
                        ) : (
                            <p>Add header to generate table of contents</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default compose([
    withSelect((select, ownProps) => {
        const postContent = select("core/editor") ? select("core/editor").getEditedPostContent() : "";
        return {
            postContent: postContent.replace(/<\!--.*?-->/g, ""),
            blockOrder: select("core/block-editor").getBlockOrder(),
            isTyping: select("core/block-editor").isTyping(),
        };
    }),
])(Edit);
