/*
 * WordPress Dependencies
 *
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { blockId, classHook } = attributes;

    return (
        <>
            <InnerBlocks.Content />
        </>
    );
};

export default save;
