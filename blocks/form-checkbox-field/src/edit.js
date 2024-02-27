/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { useEffect, useState, useRef } from "@wordpress/element";
import { select, dispatch, useSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */

const {
    duplicateBlockIdFix,
    filterBlocksByName,
    getBlockParentClientId,
} = EBControls;

import classnames from "classnames";

import Inspector from "./inspector";
import Style from "./style";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        isSelected,
        clientId,
        className,
        name,
    } = props;

    const {
        resOption,
        blockMeta,
        blockId,
        parentBlockId,
        classHook,
        showLabel,
        labelText,
        options,
        fieldName,
        defaultValue,
        isRequired,
        validationRules,
        validationMessage,
    } = attributes;

    useEffect(() => {
        // this is for creating a unique blockId for each block's unique className
        const BLOCK_PREFIX = "eb-checkbox-field";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        const parentClientId = getBlockParentClientId(
            clientId,
            "essential-blocks/form"
        );

        const getParentBlock = select("core/block-editor").getBlock(
            parentClientId
        );
        const getParentBlockId = getParentBlock?.attributes?.blockId;
        if (getParentBlockId)
            setAttributes({ parentBlockId: getParentBlockId });

        //Handle as per parent settings
        const isBlockJustInserted = select(
            "core/block-editor"
        ).wasBlockJustInserted(clientId);
        const getFormLabel = getParentBlock?.attributes?.showLabel;
        const getFormIcon = getParentBlock?.attributes?.showInputIcon;
        if (
            isBlockJustInserted &&
            typeof getFormLabel !== "undefined" &&
            typeof getFormIcon !== "undefined"
        ) {
            setAttributes({
                showLabel: getFormLabel,
                isIcon: getFormIcon,
            });
        }

        //Hanlde Field Name
        if (!fieldName) {
            if (parentClientId) {
                const parentAllChildBlocks = select(
                    "core/block-editor"
                ).getBlocksByClientId(parentClientId);
                const filteredBlocks = filterBlocksByName(
                    parentAllChildBlocks,
                    name
                );
                const currentBlockIndex = filteredBlocks.indexOf(clientId);
                if (currentBlockIndex !== -1) {
                    if (filteredBlocks.length === 1) {
                        setAttributes({ fieldName: `checkbox-field` });
                    } else {
                        setAttributes({
                            fieldName: `checkbox-field-${currentBlockIndex + 1
                                }`,
                        });
                    }
                }
            }
        }
    }, []);

    //UseEffect for set Validation rules
    useEffect(() => {
        const rules = {
            [fieldName]: {
                isRequired: {
                    status: isRequired,
                    message: validationMessage,
                },
            },
        };
        setAttributes({ validationRules: rules });
    }, [isRequired, fieldName, validationMessage]);

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `eb-guten-block-main-parent-wrapper eb-form-field`
        ),
    });

    return (
        <>
            {isSelected && (
                <Inspector
                    clientId={clientId}
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`${blockId} eb-checkbox-field-wrapper eb-field-wrapper`}
                    >
                        {showLabel && (
                            <>
                                <label
                                    htmlFor={fieldName}
                                    className="eb-field-label"
                                >
                                    {labelText}{" "}
                                    {isRequired && (
                                        <span className="eb-required">*</span>
                                    )}
                                </label>
                            </>
                        )}
                        {options.length > 0 &&
                            options.map((option) => (
                                <div className="eb-checkbox-inputarea">
                                    <label htmlFor={option.value}>
                                        <input
                                            type="checkbox"
                                            id={option.value}
                                            name={fieldName}
                                            value={option.value}
                                            checked={defaultValue === option.value}
                                        />{" "}
                                        {option.name}
                                    </label>
                                </div>
                            ))}
                        {isRequired && (
                            <>
                                <div
                                    className={`eb-form-validation eb-validate-${fieldName}`}
                                >
                                    {validationMessage}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
