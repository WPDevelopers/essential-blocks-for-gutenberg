/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            align: ["full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                classHook,
                showLabel,
                labelText,
                fieldName,
                textareaRows,
                defaultValue,
                placeholderText,
                isRequired,
                validationMessage,
                isIcon,
                icon,
                formStyle,
            } = attributes;

            const blockProps = useBlockProps.save({
                className: "eb-form-field",
            });

            return (
                <div {...blockProps}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div
                            className={`${blockId} eb-textarea-field-wrapper eb-field-wrapper`}
                        >
                            {showLabel && formStyle != "form-style-modern" && (
                                <>
                                    <label htmlFor={fieldName}>
                                        {labelText}{" "}
                                        {isRequired && (
                                            <span className="eb-required">*</span>
                                        )}
                                    </label>
                                </>
                            )}

                            <div className="eb-field-input-wrap">
                                {isIcon && icon && (
                                    <i className={`${icon} eb-input-icon`}></i>
                                )}
                                <textarea
                                    rows={textareaRows}
                                    cols="100"
                                    id={fieldName}
                                    className={"eb-field-input"}
                                    name={fieldName}
                                    placeholder={placeholderText}
                                >
                                    {defaultValue}
                                </textarea>
                                {formStyle == "form-style-modern" && (
                                    <>
                                        <label htmlFor={fieldName}>
                                            {labelText}{" "}
                                            {isRequired && (
                                                <span className="eb-required">*</span>
                                            )}
                                        </label>
                                    </>
                                )}
                            </div>
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
            );
        },
    },
];

export default deprecated;
