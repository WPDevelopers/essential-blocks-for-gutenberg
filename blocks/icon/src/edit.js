/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
    BlockControls,
    AlignmentToolbar,
    RichText,
    useBlockProps,
} from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */
import classnames from "classnames";
import Style from "./style";
import Inspector from "./inspector";
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
} from "./constants";

/**
 * External depencencies
 */
const {
    duplicateBlockIdFix,
    EBDisplayIcon
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
        resOption,
        blockId,
        icon,
        iconView,
        iconShape,
        classHook,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-icon";
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

    const viewClass = iconView !== "default" ? " eb-icon-view-" + iconView : "";
    const shapeClass =
        iconView !== "default" ? " eb-icon-shape-" + iconShape : "";

    return (
        <>
            {isSelected && (
                <>
                    <Inspector
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />
                </>
            )}

            <div {...blockProps}>
                <Style {...props} />
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`eb-icon-wrapper ${blockId}${` eb-icon-view-${iconView}`}${shapeClass}`}
                        data-id={blockId}
                    >
                        <div className="eb-icon-container">
                            <EBDisplayIcon icon={icon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
