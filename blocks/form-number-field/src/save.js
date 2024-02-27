/*
 * WordPress Dependencies
 *
 */
import { useBlockProps } from "@wordpress/block-editor";
const { EBDisplayIcon } = window.EBControls;
const save = ({ attributes }) => {
    const {
        blockId,
        classHook,
        showLabel,
        labelText,
        fieldName,
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
                    className={`${blockId} eb-number-field-wrapper eb-field-wrapper`}
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
                        {isIcon && icon && <EBDisplayIcon icon={icon} className={"eb-input-icon"} />}
                        <input
                            type="number"
                            id={fieldName}
                            name={fieldName}
                            className={"eb-field-input"}
                            value={defaultValue}
                            placeholder={placeholderText}
                            required={isRequired}
                        />
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
};

export default save;
