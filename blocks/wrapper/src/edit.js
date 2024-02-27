/*
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useRef } from "@wordpress/element";
import {
    InnerBlocks,
    useBlockProps,
    BlockControls,
    AlignmentToolbar,
} from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/*
 * Internal  Dependencies
 */
import classnames from "classnames";
import Style from "./style";

import Inspector from "./inspector";
import { SHAPE_DIVIDER_TOP, SHAPE_DIVIDER_BOTTOM } from "./constants";

const { duplicateBlockIdFix, ShapeDividerContent } = window.EBControls;

const Edit = (props) => {
    const {
        isSelected,
        attributes,
        setAttributes,
        className,
        clientId,
    } = props;
    const {
        blockId,
        wrapperAlign,
        isWrapperWidth,
        classHook,
        wrpShapeTopInvert,
        wrpShapeBottomInvert,
    } = attributes;

    // this useEffect is for creating an unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-wrapper";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const isMount = useRef(null);
    useEffect(() => {
        // set isMount value
        isMount.current = true;
        return () => {
            isMount.current = false;
        };
    }, []);

    useEffect(() => {
        if (!isMount.current) {
            setAttributes({ wrpShapeTopInvert: false });
            setAttributes({ wrpShapeTopInvert: false });
        }
        isMount.current = false;
    }, [
        attributes[`${SHAPE_DIVIDER_TOP}Type`],
        attributes[`${SHAPE_DIVIDER_BOTTOM}Type`],
    ]);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    const alignmentClass =
        wrapperAlign === "center"
            ? "eb-wrapper-align-center"
            : wrapperAlign === "right"
                ? "eb-wrapper-align-right"
                : "";

    return (
        <>
            {isSelected && <Inspector {...props} />}
            <BlockControls>
                <AlignmentToolbar
                    value={wrapperAlign}
                    onChange={(wrapperAlign) => setAttributes({ wrapperAlign })}
                />
            </BlockControls>
            <div {...blockProps}>
                <Style {...props} />
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`eb-wrapper-outer ${blockId}${isWrapperWidth ? ` ${alignmentClass}` : ""
                            }`}
                    >
                        {attributes[`${SHAPE_DIVIDER_TOP}Type`] != "" && (
                            <ShapeDividerContent
                                position="top"
                                style={attributes[`${SHAPE_DIVIDER_TOP}Type`]}
                                negative={wrpShapeTopInvert}
                            />
                        )}
                        {attributes[`${SHAPE_DIVIDER_BOTTOM}Type`] != "" && (
                            <ShapeDividerContent
                                position="bottom"
                                style={
                                    attributes[`${SHAPE_DIVIDER_BOTTOM}Type`]
                                }
                                negative={wrpShapeBottomInvert}
                            />
                        )}
                        <div className="eb-wrapper-inner">
                            <div
                                className={`eb-wrapper-inner-blocks${!isWrapperWidth ? ` ${alignmentClass}` : ""
                                    }`}
                            >
                                <InnerBlocks
                                    renderAppender={
                                        select(
                                            "core/block-editor"
                                        ).getBlockOrder(clientId).length > 0
                                            ? undefined
                                            : InnerBlocks.ButtonBlockAppender
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
