/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
    useBlockProps,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect, Fragment } from "@wordpress/element";
import { select, dispatch, subscribe } from "@wordpress/data";
import { PanelBody } from "@wordpress/components";

const { times } = lodash;

import { createHigherOrderComponent } from "@wordpress/compose";

/**
 * Internal dependencies
 */

const {
    duplicateBlockIdFix,
} = EBControls;

import classnames from "classnames";

import Inspector from "./inspector";

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, name, clientId, isSelected, setAttributes } = props;

        if (name && name != "core/navigation") {
            return <BlockEdit {...props} />;
        }

        const parentBlock = select("core/block-editor").getBlockParents(
            clientId
        );
        let isParentBlockNavigation = false;
        let parentAttributes = {};
        parentBlock.map((block) => {
            const thisProps = select("core/block-editor").getBlock(block);
            if (
                thisProps &&
                thisProps.name == "essential-blocks/advanced-navigation"
            ) {
                isParentBlockNavigation = true;
                parentAttributes = { ...thisProps.attributes };
            }
        });

        let inspector;
        if (isParentBlockNavigation && isSelected) {
            setTimeout(() => {
                inspector = document.querySelector(
                    ".block-editor-block-inspector"
                );

                if (inspector) {
                    let buttonSelector = inspector.querySelector(".block-editor-block-inspector__tabs")
                    if (buttonSelector) {
                        let tabButtons = buttonSelector.querySelectorAll('[aria-label="Settings"], [aria-label="Styles"]');
                        tabButtons && tabButtons.forEach((element) => {
                            element.style.display = "none";
                        });
                    }
                }
            }, 200);

            if (inspector) {
                setTimeout(() => {
                    // inspector.querySelector(
                    //     ".block-editor-block-card"
                    // ).style.display = "none";

                    let nodes = inspector.children;

                    let tabButtons = inspector
                        .querySelector(".block-editor-block-inspector__tabs")
                        .querySelectorAll(
                            '[aria-label="Settings"], [aria-label="Styles"]'
                        );

                    tabButtons.forEach((element) => {
                        element.style.display = "none";
                    });

                    for (let i = 0; i <= nodes.length - 1; i++) {
                        let card = nodes[i].classList.contains(
                            "block-editor-block-card"
                        );
                        let tab = nodes[i].classList.contains(
                            "block-editor-block-inspector__tabs"
                        );

                        let childen = nodes[i].children;

                        if (!card && !tab) {
                            for (let x = 0; x <= childen.length - 1; x++) {
                                const hasNavigation = childen[x].querySelector(
                                    ".wp-block-navigation__navigation-selector"
                                );

                                if (!hasNavigation) {
                                    childen[x].style.display = "none";
                                }
                            }
                        }
                    }
                }, 200);

                return (
                    <Fragment>
                        <BlockEdit {...props} />
                    </Fragment>
                );
            } else {
                return <BlockEdit {...props} />;
            }
        } else {
            inspector = document.querySelector(".block-editor-block-inspector");

            if (inspector) {
                setTimeout(() => {
                    inspector.querySelector(
                        ".block-editor-block-card"
                    ).style.display = "block";

                    let nodes = inspector.children;
                    for (let i = 0; i <= nodes.length - 1; i++) {
                        let childen = nodes[i].children;

                        for (let x = 0; x <= childen.length - 1; x++) {
                            childen[x].style.display = "block";
                        }
                    }
                }, 200);
            }
            return <BlockEdit {...props} />;
        }
    };
}, "withInspectorControl");

wp.hooks.addFilter(
    "editor.BlockEdit",
    "essential-blocks/advanced-navigation",
    withInspectorControls
);

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
        // responsive control attributes ⬇
        resOption,

        // blockMeta is for keeping all the styles
        blockMeta,
        // blockId attribute for making unique className and other uniqueness
        blockId,
        //
        layout,
        //
        navAlign,
        preset,
        verticalPreset,
        dropdownOpenOnClick,
        navBtnType,
        showDropdownIcon,
        flexWrap,
        navVerticalAlign,
        hamburgerMenu,
        hamburgerCloseIconAlign,
        classHook,
    } = attributes;

    useEffect(() => {
        // this is for creating a unique blockId for each block's unique className
        const BLOCK_PREFIX = "eb-advanced-navigation";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    //
    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];

        const innerBlocks = parentBlocks?.innerBlocks;

        const { replaceInnerBlocks, updateBlockAttributes } = dispatch(
            "core/block-editor"
        );

        if (innerBlocks) {
            times(innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    className: `${layout} ${layout == "is-horizontal" ? navAlign : navVerticalAlign
                        } ${flexWrap === true ? "no-wrap" : ""}`,
                });
            });
        }
    }, [layout, navAlign, flexWrap, navVerticalAlign]);

    // Open on click
    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];

        const innerBlocks = parentBlocks?.innerBlocks;

        const { replaceInnerBlocks, updateBlockAttributes } = dispatch(
            "core/block-editor"
        );

        if (innerBlocks) {
            times(innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    openSubmenusOnClick: dropdownOpenOnClick,
                });
            });
        }
    }, [dropdownOpenOnClick]);

    // show submenu Icon
    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];
        const innerBlocks = parentBlocks?.innerBlocks;

        const { replaceInnerBlocks, updateBlockAttributes } = dispatch(
            "core/block-editor"
        );

        if (innerBlocks) {
            times(innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    showSubmenuIcon: showDropdownIcon,
                });
            });
        }
    }, [showDropdownIcon]);

    // icon
    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];
        const innerBlocks = parentBlocks?.innerBlocks;

        const { replaceInnerBlocks, updateBlockAttributes } = dispatch(
            "core/block-editor"
        );

        if (innerBlocks) {
            times(innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    hasIcon: navBtnType,
                });
            });
        }
    }, [navBtnType]);

    // hamburger screen
    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];
        const innerBlocks = parentBlocks?.innerBlocks;

        const { replaceInnerBlocks, updateBlockAttributes } = dispatch(
            "core/block-editor"
        );

        if (innerBlocks) {
            times(innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    overlayMenu: hamburgerMenu,
                });
            });
        }
    }, [hamburgerMenu]);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    if (layout == "is-horizontal") {
        var layoutPreset = preset;
    } else {
        var layoutPreset = verticalPreset;
    }

    return (
        <>
            {isSelected && (
                <Inspector
                    clientId={clientId}
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`${blockId} eb-advanced-navigation-wrapper ${layout} ${layoutPreset} ${layout == "is-horizontal"
                            ? navAlign
                            : navVerticalAlign
                            } ${showDropdownIcon ? "" : "remove-dropdown-icon"} ${navBtnType === true
                                ? "responsive-icon"
                                : "responsive-text"
                            } ${hamburgerCloseIconAlign}`}
                    >
                        <div className={`eb-nav-contents`}>
                            <InnerBlocks
                                templateLock={false}
                                template={[
                                    [
                                        "core/navigation",
                                        { className: `${layout} ${navAlign}` },
                                    ],
                                ]}
                                allowedBlocks={["core/navigation"]}
                                renderAppender={
                                    select("core/block-editor").getBlock(
                                        clientId
                                    )?.innerBlocks.length < 1
                                        ? InnerBlocks.ButtonBlockAppender
                                        : false
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

