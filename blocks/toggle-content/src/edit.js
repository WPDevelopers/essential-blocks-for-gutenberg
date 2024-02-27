/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState, useRef } from "@wordpress/element";
import {
    useBlockProps,
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
    RichText,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { select, subscribe, dispatch, useSelect } from "@wordpress/data";

const { times } = lodash;

/**
 * Internal dependencies
 */

import Style from "./style";

import {
    DEFAULT_TEMPLATE,
} from "./constants";

import {
    typoPrefix_tgl,
} from "./constants/typographyPrefixConstants";

const {
    duplicateBlockIdFix,
} = window.EBControls;

import classnames from "classnames";

import Inspector from "./inspector";

export default function Edit(props) {
    const {
        clientId,
        isSelected,
        attributes,
        setAttributes,
        className,
        name
    } = props;

    const {
        resOption,
        blockId,
        blockMeta,
        classHook,
        initialContent,
        switchStyle,
        switchSize,
        seperatorType,
        primaryLabelText = "First",
        secondaryLabelText = "Second",
        alignment,

        [`${typoPrefix_tgl}FontSize`]: fontSize,
        [`${typoPrefix_tgl}SizeUnit`]: sizeUnit,
    } = attributes;

    const [isPrimary, setPrimary] = useState(
        initialContent === "primary" ? true : false
    );
    const [isRemoved, setRemoved] = useState(false);

    const contentRef = useRef(null);
    const primaryTextRef = useRef(null);
    const secondaryTextRef = useRef(null);
    const primaryRef = useRef(null);
    const secondaryRef = useRef(null);

    // this useEffect is for creating a unique blockId for each block's unique className
    useEffect(() => {
        const BLOCK_PREFIX = "eb-toggle";
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
        if (contentRef.current) {
            let container = contentRef.current.querySelector(
                ".block-editor-block-list__layout"
            );

            let childElemenets = [];
            const child = container.children;

            for (let i = 0; i < child.length; i++) {
                if (child[i].classList.contains("block-editor-block-list__block")) {
                    childElemenets.push(child[i]);
                }
            }

            if (container && childElemenets.length === 2) {
                let firstChild = childElemenets[0];
                let lastChild = childElemenets[1];

                if (isPrimary) {
                    hideBlock(lastChild);
                    showBlock(firstChild);
                } else {
                    hideBlock(firstChild);
                    showBlock(lastChild);
                }
            }
        }
    });

    /**
     * Get innerBlocks
     */
    const { innerBlocks } = useSelect(
        (select) => select("core/block-editor").getBlocksByClientId(clientId)[0]
    );
    useEffect(() => {
        const isBlockJustInserted = select("core/block-editor").wasBlockJustInserted(clientId);
        if (!isBlockJustInserted) {
            if (innerBlocks && innerBlocks.length === 2) {
                setRemoved(false);
            } else {
                setRemoved(true);
            }
        }
    }, [innerBlocks]);

    useEffect(() => {
        // Set block id
        setAttributes({ id: clientId });

        // Add label click event listender for text type switch
        setClickEvents();
    }, []);

    useEffect(() => {
        // Replace removed block with an empty block
        if (isRemoved) {
            const { replaceInnerBlocks } = dispatch("core/block-editor");
            const newBlock = createBlock("essential-blocks/wrapper", {});

            const filterInnerBlock = innerBlocks[0]
                ? innerBlocks[0]
                : createBlock("essential-blocks/wrapper", {});

            let replaceBlocks = [];
            if (isPrimary) {
                replaceBlocks = [newBlock, filterInnerBlock];
            } else {
                replaceBlocks = [filterInnerBlock, newBlock];
            }

            replaceInnerBlocks(clientId, replaceBlocks);
        }
    }, [isRemoved]);

    const setClickEvents = () => {
        primaryRef.current &&
            primaryRef.current.addEventListener("click", () => setPrimary(true));

        secondaryRef.current &&
            secondaryRef.current.addEventListener("click", () => setPrimary(false));

        primaryTextRef.current &&
            primaryTextRef.current.addEventListener("click", () => setPrimary(true));

        secondaryTextRef.current &&
            secondaryTextRef.current.addEventListener("click", () =>
                setPrimary(false)
            );
    };

    const hideBlock = (node) => (node.style.display = "none");

    const showBlock = (node) => (node.style.display = "block");

    const onSwitchClick = (e) => {
        setPrimary(e.target.checked);
    };




    const getMargin = () => {
        switch (alignment) {
            case "center":
                return {
                    marginLeft: "auto",
                    marginRight: "auto",
                };

            case "right":
                return {
                    marginLeft: "auto",
                    marginRight: "0px",
                };

            case "left":
                return {
                    marginLeft: "0px",
                    marginRight: "auto",
                };
        }

        return {
            marginLeft: "auto",
            marginRight: "auto",
        };
    };

    return (
        <>
            {isSelected && (
                <Inspector attributes={attributes} setAttributes={setAttributes} />
            )}

            <BlockControls>
                <AlignmentToolbar
                    value={alignment}
                    onChange={(alignment) => setAttributes({ alignment })}
                />
            </BlockControls>
            <div {...blockProps}>
                <Style {...props} />
                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div className={`${blockId} eb-toggle-wrapper`}>
                        <div
                            className="eb-toggle-heading"
                            style={{
                                // ...headingStyle,
                                display: switchStyle === "toggle" ? "block" : "none",
                            }}
                        >
                            <div className="eb-text-switch-wrapper">
                                <div
                                    className="eb-text-switch-content"
                                    style={{ ...getMargin() }}
                                >
                                    <label
                                        className="eb-text-switch-label"
                                    // style={sliderStyle}
                                    >
                                        <div
                                            className="eb-text-switch-toggle"
                                            style={{
                                                // ...controllerStyle,
                                                // zIndex: 0,
                                                marginLeft: !isPrimary && "50%",
                                            }}
                                        ></div>
                                        <div className="eb-switch-names">
                                            <RichText
                                                tagName="span"
                                                className="eb-toggle-primary-label-text"
                                                ref={primaryTextRef}
                                                // placeholder={__("First", "essential-blocks")}
                                                // style={primaryLabelStyle}
                                                value={primaryLabelText}
                                                onChange={(primaryLabelText) =>
                                                    setAttributes({ primaryLabelText })
                                                }
                                            />

                                            <RichText
                                                tagName="span"
                                                className="eb-toggle-secondary-label-text"
                                                ref={secondaryTextRef}
                                                // placeholder={__("Second", "essential-blocks")}
                                                // style={secondaryLabelStyle}
                                                value={secondaryLabelText}
                                                onChange={(secondaryLabelText) =>
                                                    setAttributes({ secondaryLabelText })
                                                }
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div
                            className="eb-toggle-heading"
                            style={{
                                // ...headingStyle,
                                display: switchStyle !== "toggle" ? "block" : "none",
                            }}
                        >
                            <RichText
                                tagName="span"
                                className="eb-toggle-primary-label"
                                ref={primaryRef}
                                placeholder={__("First", "essential-blocks")}
                                value={primaryLabelText}
                                onChange={(primaryLabelText) =>
                                    setAttributes({ primaryLabelText })
                                }
                            />
                            <label
                                className={`eb-toggle-switch toggle-${switchSize}`}
                            // style={labelStyle}
                            >
                                <input
                                    type="checkbox"
                                    checked={isPrimary}
                                    onChange={(e) => onSwitchClick(e)}
                                />
                                <span
                                    className="eb-toggle-controller"
                                // style={controllerStyle}
                                />
                                <span
                                    className="eb-toggle-slider"
                                // style={sliderStyle}
                                />
                            </label>

                            <span
                                className={`eb-toggle-seperator eb-toggle-${seperatorType}`}
                            // style={seperatorStyle}
                            ></span>

                            <RichText
                                tagName="span"
                                ref={secondaryRef}
                                className="eb-toggle-secondary-label"
                                placeholder={__("Second", "essential-blocks")}
                                value={secondaryLabelText}
                                onChange={(secondaryLabelText) =>
                                    setAttributes({ secondaryLabelText })
                                }
                            />
                        </div>
                        <div className="eb-toggle-content" ref={contentRef}>
                            <InnerBlocks
                                templateLock={false}
                                template={DEFAULT_TEMPLATE}
                                renderAppender={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

