/*
 * WordPress Dependencies
 *
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/*
 * Internal  Dependencies
 *
 */
import { SHAPE_DIVIDER_TOP, SHAPE_DIVIDER_BOTTOM } from "./constants";
const { ShapeDividerContent } = window.EBControls;

const save = ({ attributes }) => {
    const {
        blockId,
        wrapperAlign,
        isWrapperWidth,
        wrpShapeTopInvert,
        wrpShapeBottomInvert,
        classHook,
    } = attributes;

    const alignmentClass =
        wrapperAlign === "center"
            ? "eb-wrapper-align-center"
            : wrapperAlign === "right"
            ? "eb-wrapper-align-right"
            : "";

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`eb-wrapper-outer ${blockId}${
                        isWrapperWidth ? ` ${alignmentClass}` : ""
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
                            style={attributes[`${SHAPE_DIVIDER_BOTTOM}Type`]}
                            negative={wrpShapeBottomInvert}
                        />
                    )}
                    <div className="eb-wrapper-inner">
                        <div
                            className={`eb-wrapper-inner-blocks${
                                !isWrapperWidth ? ` ${alignmentClass}` : ""
                            }`}
                        >
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default save;
