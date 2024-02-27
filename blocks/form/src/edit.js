/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InnerBlocks,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import { useEffect, useState, useRef, useCallback } from "@wordpress/element";
import {
    select,
    dispatch,
    useDispatch,
    subscribe,
} from "@wordpress/data";
import { applyFilters } from "@wordpress/hooks";
import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";


/**
 * Internal dependencies
 */
import { getValidationRules, getFormFields } from "./helpers";
const {
    duplicateBlockIdFix,
    fetchFormBlockData,
    saveFormBlockData,
    getAllBlockClientIds,
    EBDisplayIcon
} = EBControls;

import classnames from "classnames";

import {
    CONTACT_FORM_TEMPLATE_1,
    CONTACT_FORM_TEMPLATE_2,
} from "./templates/contact-form";

import {
    SUBSCRIPTION_FORM_TEMPLATE_1,
    SUBSCRIPTION_FORM_TEMPLATE_2,
} from "./templates/subscription-form";

import { RSVP_FORM_TEMPLATE } from "./templates/rsvp-form";

import Inspector from "./inspector";

import ContactFormIcon from "./icons/contact.svg";
import SubscriptionFormIcon from "./icons/subscription.svg";
import RSVPFormIcon from "./icons/rsvp.svg";
import BlankIcon from "./icons/blank.svg";

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
        blockMeta,
        cover,
        blockId,
        classHook,
        formId,
        notificationType,
        formTitle,
        formType,
        template,
        integrations,
        buttonText,
        btnAddIcon,
        icon,
        iconPosition,
        formLayout,
        showLabel,
        showInputIcon,
        inlineFormWidthRange,
        btnVerticalPositionRange,
        btnHorizontalPositionRange,
        successMessage,
        errorMessage,
        validationErrorMessage,
        formStyle,
    } = attributes;

    const [formSettings, setFormSettings] = useState({});
    const { replaceInnerBlocks } = useDispatch(blockEditorStore);

    const showLabelRef = useRef(showLabel);
    const showIconRef = useRef(showInputIcon);
    const formStyleRef = useRef(formStyle);

    const formTypeRef = useRef(formType);
    const templateRef = useRef(template);

    const allowedBlocks = applyFilters("eb-form-block-allowed-blocks", [
        "essential-blocks/form-text-field",
        "essential-blocks/form-textarea-field",
        "essential-blocks/form-email-field",
        "essential-blocks/form-number-field",
        "essential-blocks/form-select-field",
        "essential-blocks/form-checkbox-field",
        "essential-blocks/form-radio-field",
        "essential-blocks/advanced-heading",
        "essential-blocks/advanced-image",
        "essential-blocks/row",
        "core/image",
        "core/heading",
        "core/paragraph",
    ]);

    useEffect(() => {
        // this is for creating a unique blockId for each block's unique className
        const BLOCK_PREFIX = "eb-form";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        //Generate Custom Form ID
        let uniqueId = clientId.substr(clientId.length - 6);
        if (blockId && blockId.startsWith(BLOCK_PREFIX)) {
            uniqueId = blockId.replace(BLOCK_PREFIX + "-", "");
        }

        if (!formId || formId.length === 0) {
            setAttributes({ formId: `ebf-${uniqueId}` });
        }

        //Get formdata from Database
        const fetchData = async () => {
            return await fetchFormBlockData(blockId, "form_options");
        };

        fetchData().then((res) => {
            const response = res?.form_options;
            if (!response || (typeof response === "object" && Object.keys(response).length === 0)) {
                setFormSettings({
                    mailTo: "",
                    mailCc: "",
                    mailBcc: "",
                    mailSubject: "",
                });
            } else {
                setFormSettings(response);
                if (response.notification) {
                    setAttributes({ notificationType: response.notification })
                }
            }
        });
    }, []);

    const updateRecursiveAttributes = (blocks, attributes) => {
        if (typeof blocks !== "object" || typeof attributes !== "object") {
            return [];
        }

        // let parentId = false;
        if (blocks.length > 0 && Object.keys(attributes).length > 0) {
            for (const block of blocks) {
                if (block.attributes && typeof block.attributes === "object") {
                    block.attributes = {
                        ...block.attributes,
                        ...attributes,
                    };
                }
                if (block.innerBlocks) {
                    updateRecursiveAttributes(block.innerBlocks, attributes);
                }
            }
        }
    };

    //useEffect for Update innerblocks attribute values
    useEffect(() => {
        if (
            showLabel !== showLabelRef.current ||
            showInputIcon !== showIconRef.current ||
            formStyle !== formStyleRef.current
        ) {
            showLabelRef.current = showLabel;
            showIconRef.current = showInputIcon;
            formStyleRef.current = formStyle;

            const formInnerBlocks = select("core/block-editor").getBlock(
                clientId
            ).innerBlocks;
            updateRecursiveAttributes(formInnerBlocks, {
                showLabel: showLabel,
                isIcon: showInputIcon,
                formStyle: formStyle,
            });

            //Replace Innerblocks with updated attributes
            replaceInnerBlocks(clientId, formInnerBlocks);
        }
    }, [showLabel, showInputIcon, formStyle]);

    // On change formStyle
    useEffect(() => {
        if ("Desktop" !== resOption) {
            return;
        }
        if (formStyle === "form-style-modern") {
            const formWrapper = document.querySelector(`.${blockId}`);
            if (formWrapper) {
                const inputs = formWrapper.getElementsByClassName("eb-field-input");

                for (let input of inputs) {
                    if (input.value) {
                        input.nextSibling?.classList.add("active");
                    }

                    input.addEventListener("focus", function (e) {
                        if (!input.nextSibling?.classList.contains("active")) {
                            input.nextSibling?.classList.add("active");
                        }
                    });

                    // Remove the class when the input loses focus
                    input.addEventListener("blur", function () {
                        if (!input.value) {
                            input.nextSibling?.classList.remove("active");
                        }
                    });
                }
            }
        }
    }, [formStyle]);

    //On change "formType", change Template
    useEffect(() => {
        if (
            formTypeRef.current === formType &&
            templateRef.current === template
        ) {
            return;
        }
        formTypeRef.current = formType;
        templateRef.current = template;

        if (formType === "contact_form") {
            if (!formTitle) {
                setAttributes({ formTitle: "Contact Form" });
            }
            if (template === "contact_form_1") {
                replaceInnerBlocks(
                    clientId,
                    createBlocksFromInnerBlocksTemplate(CONTACT_FORM_TEMPLATE_1)
                );

                setAttributes({
                    showInputIcon: true,
                });
            } else if (template === "contact_form_2") {
                replaceInnerBlocks(
                    clientId,
                    createBlocksFromInnerBlocksTemplate(CONTACT_FORM_TEMPLATE_2)
                );


            }
        } else if (formType === "subscription_form") {
            if (!formTitle) {
                setAttributes({ formTitle: "Subscription Form" });
            }
            if (template === "subscription_form_1") {
                replaceInnerBlocks(
                    clientId,
                    createBlocksFromInnerBlocksTemplate(
                        SUBSCRIPTION_FORM_TEMPLATE_1
                    )
                );

                setAttributes({
                    showInputIcon: false,
                });
            } else if (template === "subscription_form_2") {
                replaceInnerBlocks(
                    clientId,
                    createBlocksFromInnerBlocksTemplate(
                        SUBSCRIPTION_FORM_TEMPLATE_2
                    )
                );


            }
        } else if (formType === "rsvp_form") {
            if (!formTitle) {
                setAttributes({ formTitle: "RSVP Form" });
            }
            replaceInnerBlocks(
                clientId,
                createBlocksFromInnerBlocksTemplate(RSVP_FORM_TEMPLATE)
            );

            setAttributes({
                showInputIcon: false,
            });
        } else if (formType === "blank") {
            if (!formTitle) {
                setAttributes({ formTitle: "New Form" });
            }
            replaceInnerBlocks(
                clientId,
                createBlocksFromInnerBlocksTemplate([["core/paragraph"]])
            );

            setAttributes({
                showInputIcon: false,
            });
        }
    }, [formType, template]);

    //set "isEditedPostPublishable" true when formSettings is changed
    useEffect(() => {
        const isEditedPostPublishable = select(
            "core/editor"
        ).isEditedPostPublishable();

        if (
            typeof isEditedPostPublishable !== "undefined" &&
            isEditedPostPublishable === false
        ) {
            dispatch("core/editor").editPost({ isPublishable: true });
        }
    }, [formSettings]);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    /**
     * Memorize function for hanlde endless render
     */
    const formSettingsSave = useCallback(() => {
        const isSavingPost = select("core/editor").isSavingPost();
        const isAutosavingPost = select("core/editor").isAutosavingPost();
        const isSavingTemplate = select("core/editor").isSavingNonPostEntityChanges();

        /**
         * Action
        */
        if ((isSavingPost && !isAutosavingPost) || isSavingTemplate) {
            const allBlocks = getAllBlockClientIds()
            if (allBlocks.includes(clientId) && typeof formSettings === "object" && Object.keys(formSettings).length > 0) {
                const blockObj = select("core/block-editor").getBlock(clientId)
                const rules = getValidationRules(blockObj);
                const fields = getFormFields(blockObj);

                const otherSettings = {
                    validationRules: { ...rules },
                    messages: {
                        success: successMessage,
                        error: errorMessage,
                        validationError: validationErrorMessage,
                    }
                };
                if (Object.keys(integrations).length > 0) {
                    otherSettings.integrations = integrations;
                }
                const updatedFormSettings = {
                    ...formSettings,
                    notification: notificationType,
                };

                const save = saveFormBlockData(
                    blockId,
                    formTitle || 'Form ID: ' + blockId,
                    fields,
                    updatedFormSettings,
                    otherSettings
                );
                //Display snackbar disable for now, will add later after fix multi render
                // save.then((res) => {
                //     //Show notice
                //     dispatch("core/notices").createNotice(
                //         res?.success ? "success" : "error",
                //         res.data || '',
                //         {
                //             type: "snackbar",
                //             isDismissible: true,
                //         }
                //     );
                // })

                unsubscribe();
            }
        }
    }, [
        blockId,
        formTitle,
        notificationType,
        formSettings,
        successMessage,
        errorMessage,
        validationErrorMessage,
        integrations
    ])

    // subscribe
    let unsubscribe = subscribe(formSettingsSave);

    return cover.length ? (
        <div>
            <img src={cover} alt="data table" style={{ maxWidth: "100%" }} />
        </div>
    ) : (
        <>
            {isSelected && (
                <Inspector
                    clientId={clientId}
                    attributes={attributes}
                    setAttributes={setAttributes}
                    formSettings={formSettings}
                    setFormSettings={setFormSettings}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />
                {EssentialBlocksLocalize?.unfilter_capability && EssentialBlocksLocalize.unfilter_capability === 'false' && (
                    <div style={{ marginLeft: '0', marginRight: '0' }} className="notice notice-error">
                        <p>You don't have permission to add/edit the Form Block. Any changes you make won't work in the frontend properly.</p>
                    </div>
                )}
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div id={blockId} className={`${blockId} eb-form-wrapper`}>
                        {!formType && (
                            <>
                                <div className="eb-form-editor-formtype-select">
                                    <h2>Please Select a Form Type</h2>
                                    <div
                                        className="eb-form-editor-formtype-item"
                                        onClick={() =>
                                            setAttributes({
                                                formType: "contact_form",
                                            })
                                        }
                                    >
                                        <div className="eb-form-editor-formtype-icon">
                                            <img
                                                src={ContactFormIcon}
                                                alt={"conact form icon"}
                                            />
                                        </div>
                                        <span>Contact Form</span>
                                    </div>
                                    <div
                                        className="eb-form-editor-formtype-item"
                                        onClick={() =>
                                            setAttributes({
                                                formType: "subscription_form",
                                            })
                                        }
                                    >
                                        <div className="eb-form-editor-formtype-icon">
                                            <img
                                                src={SubscriptionFormIcon}
                                                alt={"subscription form icon"}
                                            />
                                        </div>
                                        <span>Subscription Form</span>
                                    </div>
                                    <div
                                        className="eb-form-editor-formtype-item"
                                        onClick={() =>
                                            setAttributes({
                                                formType: "rsvp_form",
                                            })
                                        }
                                    >
                                        <div className="eb-form-editor-formtype-icon">
                                            <img
                                                src={RSVPFormIcon}
                                                alt={"rsvp form icon"}
                                            />
                                        </div>
                                        <span>RSVP Form</span>
                                    </div>
                                    <div
                                        className="eb-form-editor-formtype-item"
                                        onClick={() =>
                                            setAttributes({ formType: "blank" })
                                        }
                                    >
                                        <div className="eb-form-editor-formtype-icon">
                                            <img
                                                src={BlankIcon}
                                                alt={"blank form icon"}
                                            />
                                        </div>
                                        <span>Blank</span>
                                    </div>
                                </div>
                            </>
                        )}
                        {formType && formType.length > 0 && (
                            <>
                                <form
                                    id={formId}
                                    className={`eb-form form-layout-${formLayout} ${formStyle}`}
                                    action=""
                                >
                                    <div className={"eb-form-fields"}>
                                        <InnerBlocks
                                            template={[]}
                                            renderAppender={
                                                InnerBlocks.DefaultBlockAppender
                                            }
                                            allowedBlocks={allowedBlocks}
                                        />
                                    </div>
                                    <div className={"eb-form-submit"}>
                                        <button
                                            data-id={blockId}
                                            type="button"
                                            className="btn btn-primary eb-form-submit-button"
                                        >
                                            {btnAddIcon && iconPosition === "left" ? (
                                                <EBDisplayIcon className={"eb-button-icon"} icon={icon} />
                                            ) : (
                                                ""
                                            )}
                                            {buttonText}
                                            {btnAddIcon && iconPosition === "right" ? (
                                                <EBDisplayIcon className={"eb-button-icon"} icon={icon} />
                                            ) : (
                                                ""
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
