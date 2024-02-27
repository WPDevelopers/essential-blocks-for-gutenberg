/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
    {
        attributes: { ...attributes },
        save: ({ attributes }) => {
            const {
                blockId,
                preset,
                buttonTextOne,
                buttonTextTwo,
                buttonURLOne,
                buttonURLTwo,
                innerButtonText,
                innerButtonIcon,
                showConnector,
                connectorType,
                classHook,
                buttonOneNewWindow,
                buttonTwoNewWindow,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`eb-button-group-wrapper ${blockId} ${preset}`} data-id={blockId}>
                            <a
                                className={"eb-button-parent eb-button-one"}
                                href={buttonURLOne}
                                {...(buttonOneNewWindow && { target: "_blank" })}
                                rel="noopener"
                            >
                                <div className="eb-button-text eb-button-one-text">{buttonTextOne}</div>
                            </a>

                            {showConnector && (
                                <div className="eb-button-group__midldeInner">
                                    {connectorType === "icon" && (
                                        <span>
                                            <i
                                                className={`${innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h"
                                                    }`}
                                            ></i>
                                        </span>
                                    )}

                                    {connectorType === "text" && <span>{innerButtonText}</span>}
                                </div>
                            )}

                            <a
                                className={"eb-button-parent eb-button-two"}
                                href={buttonURLTwo}
                                {...(buttonTwoNewWindow && { target: "_blank" })}
                                rel="noopener"
                            >
                                <div className="eb-button-text eb-button-two-text">{buttonTextTwo}</div>
                            </a>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: { ...attributes },
        save: ({ attributes }) => {
            const {
                blockId,
                preset,
                buttonTextOne,
                buttonTextTwo,
                buttonURLOne,
                buttonURLTwo,
                innerButtonText,
                innerButtonIcon,
                showConnector,
                connectorType,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-button-group-wrapper ${blockId} ${preset}`} data-id={blockId}>
                        <a className={"eb-button-parent eb-button-one"} href={buttonURLOne}>
                            <div className="eb-button-text eb-button-one-text">{buttonTextOne}</div>
                        </a>

                        {showConnector && (
                            <div
                                className="eb-button-group__midldeInner"
                            >
                                {connectorType === 'icon' && (
                                    <span>
                                        <i className={`${innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h"}`}></i>
                                    </span>
                                )}

                                {connectorType === 'text' && <span>{innerButtonText}</span>}
                            </div>
                        )}

                        <a className={"eb-button-parent eb-button-two"} href={buttonURLTwo}>
                            <div className="eb-button-text eb-button-two-text">{buttonTextTwo}</div>
                        </a>
                    </div>
                </div>
            );
        }
    },
];

export default deprecated;
