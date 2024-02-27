/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal depenencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
} = window.EBControls;

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
        blockId,
        blockMeta,
        resOption,
        title,
        text,
        classHook,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        // const current_block_id = attributes.blockId;

        const BLOCK_PREFIX = "eb-notice";
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

    return (
        <>
            {isSelected && <Inspector {...props} />}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`eb-notice-wrapper ${blockId}`}
                        data-id={blockId}
                    >
                        <div className="eb-notice-title-wrapper">
                            <RichText
                                className="eb-notice-title"
                                value={title}
                                onChange={(newTitle) =>
                                    setAttributes({ title: newTitle })
                                }
                                placeholder="Add Title..."
                            />
                        </div>
                        <span className="eb-notice-dismiss" />
                        <div>
                            <RichText
                                className="eb-notice-text"
                                value={text}
                                onChange={(newText) =>
                                    setAttributes({ text: newText })
                                }
                                placeholder="Add Text..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
