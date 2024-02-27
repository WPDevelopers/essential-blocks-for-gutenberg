/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
    MediaUpload,
    useBlockProps,
    RichText,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect, useState, useRef } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { IconButton } from "@wordpress/components";
import { createBlock } from "@wordpress/blocks";

const { times } = lodash;

//
export const getBlocksMethods = () => {
    const { getBlock, getBlocks } = select("core/block-editor");
    const {
        moveBlockToPosition,
        updateBlockAttributes,
        insertBlock,
        replaceInnerBlocks,
    } = dispatch("core/block-editor");

    return {
        getBlock,
        getBlocks,
        moveBlockToPosition,
        updateBlockAttributes,
        insertBlock,
        replaceInnerBlocks,
    };
};

//
export const resetTabsOrder = ({ clientId, setAttributes, tabTitles }) => {
    const {
        //
        updateBlockAttributes,
    } = dispatch("core/block-editor");

    const innerBlocks = select("core/block-editor").getBlocks(clientId);

    const newTabTitles = tabTitles.map((item, index) => ({
        ...item,
        id: `${index + 1}`,
    }));

    //
    setAttributes({
        tabTitles: newTabTitles,
    });

    //
    times(innerBlocks.length, (n) => {
        updateBlockAttributes(innerBlocks[n].clientId, {
            tabId: `${n + 1}`,
        });
    });
};

//
export const addTab = ({
    clientId,
    tabChildCount,
    setAttributes,
    tabTitles,
    blockId,
    handleTabTitleClick,
}) => {
    // const thisBlock = getBlock(clientId);
    const innerBlocks = [...select("core/block-editor").getBlocks(clientId)];
    const maxId = tabTitles.reduce(
        (acc, curr) => Math.max(parseInt(acc), parseInt(curr.id)),
        0
    );
    const tabId = `${maxId + 1}`;

    const newBlock = createBlock("essential-blocks/tab", {
        tabId,
        tabParentId: `${blockId}`,
    });

    innerBlocks.splice(innerBlocks.length, 0, newBlock);
    dispatch("core/block-editor")
        .replaceInnerBlocks(clientId, innerBlocks)
        .then(() => {
            //
            setAttributes({
                tabTitles: [
                    ...tabTitles,
                    {
                        text: `Tab Title ${parseInt(innerBlocks.length)}`,
                        id: tabId,
                        media: "icon",
                        icon: "fas fa-home",
                    },
                ],
                tabChildCount: tabChildCount + 1,
            });
            handleTabTitleClick(tabId);
        });

    //
};
