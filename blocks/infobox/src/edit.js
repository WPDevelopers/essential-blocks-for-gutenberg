/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

const {
    duplicateBlockIdFix,
} = window.EBControls;

import InfoboxContainer from "./components/infobox-edit";

import classnames from "classnames";

import Inspector from "./inspector";
import Style from "./style";

const Edit = (props) => {
    const {
        attributes,
        setAttributes,
        className,
        isSelected,
        clientId,
        name
    } = props;
    const {
        // responsive control attributes ⬇
        resOption,
        // blockMeta is for keeping all the styles
        blockMeta,
        // blockId attribute for making unique className and other uniqueness
        blockId,
        number,
        enableButton,
        isInfoClick,
    } = attributes;

    useEffect(() => {
        // this codes is for creating a unique blockId for each block's unique className
        const BLOCK_PREFIX = "eb-infobox";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        //
        if (number === undefined) {
            setAttributes({ number: "01" });
        }
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });


    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />

                <InfoboxContainer
                    setAttributes={setAttributes}
                    attributes={attributes}
                />
            </div>
        </>
    );
};

export default Edit;

