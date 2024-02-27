/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";
import Style from "./style";

const {
    duplicateBlockIdFix,
    ShapeDividerContent,
    generateShapeDividerStyles,
} = window.EBControls;

import { SHAPE_DIVIDER } from "./constants";

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
        // responsive control attribute ⬇
        resOption,
        shapeDividerPosition,
        shapeDividerInvert,
        shapeDividerType,
        classHook,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-shape-divider";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className),
    });

    useEffect(() => {
        setAttributes({ shapeDividerInvert: false });
    }, [shapeDividerPosition, attributes[`${SHAPE_DIVIDER}Type`]]);

    return (
        <>
            {isSelected && <Inspector {...props} />}

            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`eb-shape-divider-wrapper ${blockId}`}
                        data-id={blockId}
                    >
                        <ShapeDividerContent
                            position={shapeDividerPosition}
                            style={
                                attributes[`${SHAPE_DIVIDER}Type`] != ""
                                    ? attributes[`${SHAPE_DIVIDER}Type`]
                                    : "style_1"
                            }
                            negative={shapeDividerInvert}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
