/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { select, dispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";

const ALLOWED_BLOCKS = ["essential-blocks/accordion-item"];

const {
    duplicateBlockIdFix,
    EBDisplayIcon
} = window.EBControls;

/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { times } from "lodash";
import Style from "./style";

const Edit = (props) => {
    const {
        attributes,
        setAttributes,
        className,
        isSelected,
        clientId
    } = props;
    const {
        blockId,
        classHook,
        accordionType,
        displayIcon,
        tabIcon,
        expandedIcon,
        tagName,
        faqSchema,
        accordionChildCount,
    } = attributes;

    // this useEffect is for creating a unique blockId for each block's unique className
    useEffect(() => {
        const BLOCK_PREFIX = "eb-accordion";
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

    const addAccordion = () => {
        const innerBlocks = [
            ...select("core/block-editor").getBlocks(clientId),
        ];
        let count = innerBlocks ? innerBlocks.length : 3;

        const newBlock = createBlock("essential-blocks/accordion-item", {
            itemId: count + 1,
            title: __(`Accordion title ${count + 1}`, "essential-blocks"),
            inheritedAccordionType: accordionType,
            inheritedTagName: tagName,
            inheritedDisplayIcon: displayIcon,
            inheritedTabIcon: tabIcon,
            inheritedExpandedIcon: expandedIcon,
            parentBlockId: blockId,
        });
        innerBlocks.splice(innerBlocks.length, 0, newBlock);
        dispatch("core/block-editor")
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({ accordionChildCount: count + 1 });
            });
    };

    useEffect(() => {
        if (!tabIcon) {
            setAttributes({ tabIcon: "fas fa-angle-right" });
        }
        if (!expandedIcon) {
            setAttributes({ expandedIcon: "fas fa-angle-down" });
        }
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];

        const innerBlocks = parentBlocks?.innerBlocks;

        const { updateBlockAttributes } = dispatch("core/block-editor");

        if (innerBlocks) {
            times(innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    itemId: n + 1,
                    inheritedAccordionType: accordionType,
                    inheritedDisplayIcon: displayIcon,
                    inheritedTabIcon: tabIcon,
                    inheritedExpandedIcon: expandedIcon,
                    inheritedTagName: tagName,
                    faqSchema: faqSchema,
                    parentBlockId: parentBlocks.attributes.blockId,
                });
            });
        }
    }, []);

    const insertAccodionItem = (accordionChildCount) => {
        return times(accordionChildCount, (n) => [
            "essential-blocks/accordion-item",
            {
                itemId: n + 1,
                title: __(`Accordion title ${n + 1}`, "essential-blocks"),
                inheritedAccordionType: accordionType,
                inheritedDisplayIcon: displayIcon,
                inheritedTabIcon: "fas fa-angle-right",
                inheritedExpandedIcon: "fas fa-angle-down",
                inheritedTagName: tagName,
                faqSchema: faqSchema,
                parentBlockId: blockId,
            },
        ]);
    };

    return (
        <>
            {isSelected && <Inspector {...props} addAccordion={addAccordion} />}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`${blockId} eb-accordion-container`}>
                        <div className="eb-accordion-inner">
                            <InnerBlocks
                                template={insertAccodionItem(
                                    accordionChildCount
                                )}
                                templateLock={false}
                                allowedBlocks={ALLOWED_BLOCKS}
                            />
                        </div>
                    </div>
                    <div className="eb-accordion-add-button">
                        <Button
                            className="is-default"
                            label={__("Add Accordion Item", "essential-blocks")}
                            icon="plus-alt"
                            onClick={addAccordion}
                        >
                            <span className="eb-accordion-add-button-label">
                                {__("Add Accordion Item", "essential-blocks")}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
