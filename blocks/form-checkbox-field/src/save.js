/*
 * WordPress Dependencies
 *
 */
import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const {
        resOption,
        blockMeta,
        blockId,
        classHook,
        showLabel,
        labelText,
        options,
        fieldName,
        defaultValue,
        isRequired,
        validationMessage,
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
                    className={`${blockId} eb-checkbox-field-wrapper eb-field-wrapper`}
                >
                    {showLabel && (
                        <>
                            <label htmlFor={fieldName} className="eb-field-label">
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
                                        id={option.value}
                                        name={fieldName}
                                        value={option.value}
                                        checked={defaultValue === option.value}
                                        type="checkbox"
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
    );
};

export default save;
