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

import Inspector from "./inspector";

/**
 * External depencencies
 */
const {
    duplicateBlockIdFix,
    DynamicInputValueHandler,
    EBDisplayIcon
} = window.EBControls;

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
        resOption,
        blockId,
        blockMeta,
        preset,
        align,
        tagName,
        titleText,
        subtitleTagName,
        subtitleText,
        displaySubtitle,
        displaySeperator,
        seperatorPosition,
        seperatorType,
        separatorIcon,
        classHook,

    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-advance-heading";
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
            {isSelected && (
                <>
                    <BlockControls>
                        <AlignmentToolbar
                            value={align}
                            onChange={(align) => setAttributes({ align })}
                            controls={["left", "center", "right"]}
                        />
                    </BlockControls>
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
                        className={`eb-advance-heading-wrapper ${blockId} ${preset}`}
                        data-id={blockId}
                    >
                        {displaySeperator && seperatorPosition === "top" && (
                            <div className={"eb-ah-separator " + seperatorType}>
                                {seperatorType === "icon" && (
                                    // <i
                                    //     className={`${separatorIcon
                                    //         ? separatorIcon
                                    //         : "fas fa-arrow-circle-down"
                                    //         }`}
                                    // ></i>
                                    <EBDisplayIcon icon={separatorIcon} />
                                )}
                            </div>
                        )}

                        <DynamicInputValueHandler
                            value={titleText}
                            tagName={tagName}
                            className="eb-ah-title"
                            allowedFormats={[
                                "core/bold",
                                "core/italic",
                                "core/link",
                                "core/strikethrough",
                                "core/underline",
                                "core/text-color",
                            ]}
                            onChange={(titleText) =>
                                setAttributes({ titleText })
                            }
                            readOnly={true}
                        />

                        {displaySubtitle && (
                            <DynamicInputValueHandler
                                tagName={subtitleTagName}
                                className="eb-ah-subtitle"
                                value={subtitleText}
                                allowedFormats={[
                                    "core/bold",
                                    "core/italic",
                                    "core/link",
                                    "core/strikethrough",
                                    "core/underline",
                                    "core/text-color",
                                ]}
                                onChange={(subtitleText) =>
                                    setAttributes({ subtitleText })
                                }
                                readOnly={true}
                            />
                        )}
                        {displaySeperator && seperatorPosition === "bottom" && (
                            <div className={"eb-ah-separator " + seperatorType}>
                                {seperatorType === "icon" && (
                                    // <i
                                    //     className={`${separatorIcon
                                    //         ? separatorIcon
                                    //         : "fas fa-arrow-circle-down"
                                    //         }`}
                                    // ></i>
                                    <EBDisplayIcon icon={separatorIcon} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
