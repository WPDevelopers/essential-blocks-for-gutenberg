/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useEffect, useState, useRef } from "@wordpress/element";
import { select, useSelect } from "@wordpress/data";
import { doAction, applyFilters } from "@wordpress/hooks";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    RangeControl,
    BaseControl,
    ButtonGroup,
    TabPanel,
    TextControl,
    TextareaControl,
    PanelRow,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
const {
    BackgroundControl,
    BorderShadowControl,
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    AdvancedControls,
    ProSelectControl,
    DynamicInputControl,
    faIcons,
    EBIconPicker
} = EBControls;

import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    FORM_TYPE,
    NOTIFICATION_TYPE,
    INTEGRATIONS,
    CONFIRMATION_TYPE,
    NORMAL_HOVER,
    NORMAL_CHECKED,
    ROWS_GAP,
    BTN_PADDING,
    LABEL_MARGIN,
    BTN_BORDER,
    FIELDS_BORDER,
    FIELDS_PADDING,
    SUCCESS_PADDING,
    SUCCESS_BORDER,
    ERROR_PADDING,
    ERROR_BORDER,
    RADIO_SIZE,
    RADIO_SPACING,
    CHECKBOX_SIZE,
    CHECKBOX_SPACING,
    BUTTON_WIDTH,
    CONTENTS_ALIGNMENTS,
    FIXED_WIDTH,
    ICON_POSITION,
    ICON_SIZE,
    ICON_SPACE,
    MESSAGE_TYPE,
    TEMPLATES,
    SUBSCRIPTION_TEMPLATES,
    FORM_WIDTH,
    FORM_CUSTOM_WIDTH,
    BUTTON_STYLE,
    VERTICAL_ALIGN,
    BTN_VERTICAL_POSITION,
    BTN_HORIZONTAL_POSITION,
    INLINE_FORM_WIDTH,
    INPUT_ICON_SIZE,
    BTN_TOP_SPECING,
    FORM_STYLES,
    INPUT_WIDTH,
    SIZE_UNIT_TYPES,
} from "./constants";

import objAttributes from "./attributes";

import {
    LABEL_TYPOGRAPHY,
    BTN_TEXT,
    FIELDS_TEXT,
    SUCCESS_TYPO,
    ERROR_TYPO,
    RADIO_TEXT,
    CHECKBOX_TEXT,
    FIELDS_TEXT_VALIDATION,
} from "./constants/typographyPrefixConstants";

import { contactForm1, contactForm2, subscriptionForm1, subscriptionForm2, rsvpForm, blankForm } from "./helpers";

function Inspector(props) {
    const {
        clientId,
        attributes,
        setAttributes,
        formSettings,
        setFormSettings,
    } = props;

    const {
        blockId,
        resOption,
        formId,
        formTitle,
        formType,
        template,
        integrations,
        mailBody,
        notificationType,
        confirmationType,
        successMessage,
        errorMessage,
        validationErrorMessage,
        labelColor,
        buttonType,
        btnColor,
        btnHvColor,
        btnBgColor,
        btnBgHvColor,
        formWidth,
        formAlign,

        fieldsColor,
        fieldsPlaceholderColor,
        fieldsBgColor,

        messageType,
        messageAlign,
        successColor,
        successBgColor,
        errorColor,
        errorBgColor,

        radioType,
        radioColor,
        radioBgColor,
        radioBrColor,
        radioBrCheckedColor,
        radioBorder,
        checkboxType,
        checkboxColor,
        checkboxBgColor,
        checkboxBrColor,
        checkboxBrCheckedColor,
        checkboxBorder,
        dateBgColor,
        dateSelectedColor,
        fieldsValidationBorderColor,
        fieldsValidationColor,
        requiredColor,

        buttonAlign,
        buttonText,
        buttonWidth,
        btnAddIcon,
        icon,
        iconPosition,
        labelAlign,
        validationAlign,
        fieldAlign,
        formLayout,
        btnVerticalAlign,
        showInputIcon,
        showLabel,
        inputIconColor,
        formStyle,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const [formTemplates, setFormTemplates] = useState([]);
    const formTypeRef = useRef(formType);

    useEffect(() => {
        if (formType === "contact_form") {
            setFormTemplates(TEMPLATES);
        } else if (formType === "subscription_form") {
            setFormTemplates(SUBSCRIPTION_TEMPLATES);
        }
    }, []);

    useEffect(() => {
        if (formTypeRef.current === formType) {
            return;
        }
        formTypeRef.current = formType;

        if (formType === "contact_form") {
            setFormTemplates(TEMPLATES);
            setAttributes({ template: "contact_form_1" });
        } else if (formType === "subscription_form") {
            setFormTemplates(SUBSCRIPTION_TEMPLATES);
            setAttributes({ template: "subscription_form_1" });
        }
    }, [formType]);


    const formTypeAttr = (formType, template) => {
        let formAttr;

        if (formType === "contact_form") {
            if (template === "contact_form_1") {
                formAttr = contactForm1;
            } else if (template === "contact_form_2") {
                formAttr = contactForm2;
            }

        } else if (formType === "subscription_form") {
            if (template === "subscription_form_1") {
                formAttr = subscriptionForm1;
            } else if (template === "subscription_form_2") {
                formAttr = subscriptionForm2;
            }

        } else if (formType === "rsvp_form") {
            formAttr = rsvpForm;
        } else if (formType === "blank") {
            formAttr = blankForm;
        }

        return formAttr;
    }

    const changeFormType = (selected) => {
        setAttributes({ formType: selected });

        setAttributes(formTypeAttr(formType, template));
    };
    const changeFormTemplate = (selected) => {
        setAttributes({ template: selected });

        setAttributes(formTypeAttr(formType, template));
    };

    const changeFormStyle = (selected) => {
        setAttributes({ formStyle: selected });

        if (formStyle === "form-style-modern") {
            setAttributes({
                inputIconSizeRange: "20",
                fieldsBorderHBdr_Bottom: "1",
                fieldsBorderHBdr_Left: "1",
                fieldsBorderHBdr_Right: "1",
                fieldsBorderHBdr_Top: "1",
                fieldsBorderHBdr_Unit: "px",
                fieldsBorderHborderColor: "#000",
                fieldsBorderHborderStyle: "solid",

                fieldsPaddingisLinked: false,
                fieldsPaddingUnit: "px",
                fieldsPaddingTop: "25",
                fieldsPaddingBottom: "15",
                fieldsPaddingLeft: "15",
                fieldsPaddingRight: "15",
            });

            if (
                formType === "subscription_form" &&
                template === "subscription_form_1"
            ) {
                setAttributes({
                    inputIconSizeRange: "15",
                    fieldsPaddingLeft: "20",
                    fieldsPaddingRight: "220",
                    fieldsPaddingTop: "25",
                    fieldsPaddingBottom: "25",
                    fieldsPaddingisLinked: false,
                });
            }
        } else if (formStyle === "form-style-classic") {
            setAttributes({
                inputIconSizeRange: "15",
                fieldsBorderHBdr_Bottom: "1",
                fieldsBorderHBdr_Left: "1",
                fieldsBorderHBdr_Right: "1",
                fieldsBorderHBdr_Top: "1",
                fieldsBorderHBdr_Unit: "px",
                fieldsBorderHborderColor: "",
                fieldsBorderHborderStyle: "none",
            });

            if (
                formType === "subscription_form" &&
                template === "subscription_form_1"
            ) {
                setAttributes({
                    fieldsPaddingLeft: "20",
                    fieldsPaddingRight: "220",
                    fieldsPaddingTop: "25",
                    fieldsPaddingBottom: "25",
                    fieldsPaddingisLinked: false,
                });
            } else {
                setAttributes({
                    fieldsPaddingisLinked: true,
                    fieldsPaddingUnit: "px",
                    fieldsPaddingTop: "15",
                    fieldsPaddingBottom: "15",
                    fieldsPaddingLeft: "15",
                    fieldsPaddingRight: "15",
                });
            }
        }

    };

    const handleIntegrationChange = (selected) => {
        if (selected && selected.length > 0) {
            setAttributes({
                integrations: {
                    [selected]: true,
                },
            });
        } else {
            setAttributes({
                integrations: {},
            });
        }
    };
    const handleFormStyle = (selected) => {
        setAttributes({ formLayout: selected });

        switch (selected) {
            case "inline":
                setAttributes({
                    buttonAlign: "right",
                });
                break;
            case "block":
                setAttributes({
                    buttonAlign: "left",
                });
                break;
            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: "general",
                            title: "General",
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: "Style",
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: "Advanced",
                            className: "eb-tab advance",
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls" + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "General",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <TextControl
                                            label={__(
                                                "Form Title",
                                                "essential-blocks"
                                            )}
                                            value={formTitle}
                                            type="string"
                                            help={__(
                                                "Use Title to recognize in Form Response",
                                                "essential-blocks"
                                            )}
                                            onChange={(value) =>
                                                setAttributes({
                                                    formTitle: value,
                                                })
                                            }
                                        />
                                        <ProSelectControl
                                            label={__(
                                                "Form Type",
                                                "essential-blocks"
                                            )}
                                            value={formType}
                                            options={FORM_TYPE}
                                            onChange={(selected) =>
                                                changeFormType(selected)
                                            }
                                        />
                                        {['contact_form', 'subscription_form'].includes(formType) && (
                                            <ProSelectControl
                                                label={__(
                                                    "Template",
                                                    "essential-blocks"
                                                )}
                                                value={template}
                                                options={formTemplates}
                                                onChange={(selected) =>
                                                    changeFormTemplate(selected)
                                                }
                                            />
                                        )}

                                        {/* <TextControl
                                            label={__(
                                                "Custom Form ID",
                                                "essential-blocks"
                                            )}
                                            value={formId}
                                            type="string"
                                            onChange={(value) =>
                                                setAttributes({ formId: value })
                                            }
                                        /> */}
                                        {"Desktop" === resOption && (
                                            <>
                                                <ProSelectControl
                                                    label={__(
                                                        "Form Styles",
                                                        "essential-blocks"
                                                    )}
                                                    value={formStyle}
                                                    options={FORM_STYLES}
                                                    onChange={(selected) =>
                                                        changeFormStyle(
                                                            selected
                                                        )
                                                    }
                                                />
                                            </>
                                        )}

                                        <ToggleControl
                                            label={__(
                                                "Show Field Labels?",
                                                "essential-blocks"
                                            )}
                                            checked={showLabel}
                                            onChange={() =>
                                                setAttributes({
                                                    showLabel: !showLabel,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Show Field Icons?",
                                                "essential-blocks"
                                            )}
                                            checked={showInputIcon}
                                            onChange={() =>
                                                setAttributes({
                                                    showInputIcon: !showInputIcon,
                                                })
                                            }
                                        />

                                        <ProSelectControl
                                            label={__(
                                                "Integrations",
                                                "essential-blocks"
                                            )}
                                            value={Object.keys(integrations)[0]}
                                            options={INTEGRATIONS}
                                            onChange={(selected) =>
                                                handleIntegrationChange(
                                                    selected
                                                )
                                            }
                                        />

                                        {applyFilters(
                                            "eb_form_block_control_after_form_type",
                                            "",
                                            attributes,
                                            setAttributes
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Form Settings",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <ProSelectControl
                                            label={__(
                                                "Notification Type",
                                                "essential-blocks"
                                            )}
                                            value={notificationType}
                                            options={NOTIFICATION_TYPE}
                                            onChange={(selected) =>
                                                setAttributes({
                                                    notificationType: selected,
                                                })
                                            }
                                        />
                                        {/* <DynamicInputControl
                                            label="Email To"
                                           attrName="mailTo"
                                            inputValue={mailTo}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ mailTo: text })}
                                            help={__("Use , to seperate emails", "essential-blocks")}
                                        />
                                        <DynamicInputControl
                                            label="Email Cc"
                                           attrName="mailCc"
                                            inputValue={mailCc}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ mailCc: text })}
                                            help={__("Use , to seperate emails", "essential-blocks")}
                                        />
                                        <DynamicInputControl
                                            label="Email Bcc"
                                           attrName="mailBcc"
                                            inputValue={mailBcc}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ mailBcc: text })}
                                            help={__("Use , to seperate emails", "essential-blocks")}
                                        />
                                        <DynamicInputControl
                                            label="Email Subject"
                                           attrName="mailSubject"
                                            inputValue={mailSubject}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ mailSubject: text })}
                                        />
                                        <TextareaControl
                                            label="Email Body"
                                            help="Write your email body here"
                                            value={mailBody}
                                            rows={5}
                                            onChange={(text) => setAttributes({ mailBody: text })}
                                        /> */}
                                        <TextControl
                                            label={__(
                                                "Email To",
                                                "essential-blocks"
                                            )}
                                            value={formSettings.mailTo}
                                            placeholder={
                                                select("core")?.getSite()
                                                    ?.email ||
                                                __(
                                                    "Default is to Admin Email",
                                                    "essential-blocks"
                                                )
                                            }
                                            onChange={(text) =>
                                                setFormSettings({
                                                    ...formSettings,
                                                    mailTo: text,
                                                })
                                            }
                                            help={__(
                                                "Use commas to separate emails",
                                                "essential-blocks"
                                            )}
                                        />
                                        <TextControl
                                            label={__(
                                                "Email Cc (Optional)",
                                                "essential-blocks"
                                            )}
                                            placeholder={__(
                                                "Recipient Email Address",
                                                "essential-blocks"
                                            )}
                                            value={formSettings.mailCc}
                                            onChange={(text) =>
                                                setFormSettings({
                                                    ...formSettings,
                                                    mailCc: text,
                                                })
                                            }
                                            help={__(
                                                "Use commas to separate emails",
                                                "essential-blocks"
                                            )}
                                        />
                                        <TextControl
                                            label={__(
                                                "Email Bcc (Optional)",
                                                "essential-blocks"
                                            )}
                                            value={formSettings.mailBcc}
                                            placeholder={__(
                                                "Recipient Email Address",
                                                "essential-blocks"
                                            )}
                                            onChange={(text) =>
                                                setFormSettings({
                                                    ...formSettings,
                                                    mailBcc: text,
                                                })
                                            }
                                            help={__(
                                                "Use commas to separate emails",
                                                "essential-blocks"
                                            )}
                                        />
                                        <TextControl
                                            label={__(
                                                "Email Subject",
                                                "essential-blocks"
                                            )}
                                            attrName="mailSubject"
                                            value={formSettings.mailSubject}
                                            placeholder={
                                                "New Form Submission [" +
                                                select("core")?.getSite()?.url +
                                                "]"
                                            }
                                            onChange={(text) =>
                                                setFormSettings({
                                                    ...formSettings,
                                                    mailSubject: text,
                                                })
                                            }
                                        />

                                        {/* <TextareaControl
                                            label="Email Body"
                                            help="Write your email body here"
                                            value={mailBody}
                                            rows={5}
                                            onChange={(text) =>
                                                setAttributes({
                                                    mailBody: text,
                                                })
                                            }
                                        /> */}
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Confirmation Settings",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <ProSelectControl
                                            label={__(
                                                "Confirmation Type",
                                                "essential-blocks"
                                            )}
                                            value={confirmationType}
                                            options={CONFIRMATION_TYPE}
                                            onChange={(selected) =>
                                                setAttributes({
                                                    confirmationType: selected,
                                                })
                                            }
                                        />
                                        {applyFilters(
                                            "eb_form_block_control_after_confirmation_type",
                                            "",
                                            attributes,
                                            setAttributes
                                        )}

                                        {confirmationType === "message" && (
                                            <>
                                                <TextareaControl
                                                    label="Success Message"
                                                    // help="Write your email body here"
                                                    value={successMessage}
                                                    rows={3}
                                                    onChange={(text) =>
                                                        setAttributes({
                                                            successMessage: text,
                                                        })
                                                    }
                                                />
                                                <TextareaControl
                                                    label="Default Error Message"
                                                    // help="Write your email body here"
                                                    value={errorMessage}
                                                    rows={3}
                                                    onChange={(text) =>
                                                        setAttributes({
                                                            errorMessage: text,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                        <TextareaControl
                                            label="Validation Error Message"
                                            // help="Write your email body here"
                                            value={validationErrorMessage}
                                            rows={3}
                                            onChange={(text) =>
                                                setAttributes({
                                                    validationErrorMessage: text,
                                                })
                                            }
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Button", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <>
                                            <ProSelectControl
                                                label={__(
                                                    "Button Type",
                                                    "essential-blocks"
                                                )}
                                                value={formLayout}
                                                options={BUTTON_STYLE}
                                                onChange={(selected) =>
                                                    handleFormStyle(selected)
                                                }
                                            />

                                            {formLayout == "inline" && (
                                                <>
                                                    <ResponsiveRangeController
                                                        baseLabel={__(
                                                            "Fields Width (%)",
                                                            "essential-blocks"
                                                        )}
                                                        controlName={
                                                            INLINE_FORM_WIDTH
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        min={1}
                                                        max={100}
                                                        step={1}
                                                        noUnits
                                                    />
                                                </>
                                            )}

                                            <TextControl
                                                label={__(
                                                    "Text",
                                                    "essential-blocks"
                                                )}
                                                value={buttonText}
                                                onChange={(buttonText) =>
                                                    setAttributes({
                                                        buttonText,
                                                    })
                                                }
                                            />
                                            <ToggleControl
                                                label={__(
                                                    "Add icon",
                                                    "essential-blocks"
                                                )}
                                                checked={btnAddIcon}
                                                onChange={() =>
                                                    setAttributes({
                                                        btnAddIcon: !btnAddIcon,
                                                    })
                                                }
                                            />
                                            {btnAddIcon && (
                                                <>
                                                    <EBIconPicker
                                                        value={icon}
                                                        onChange={(icon) =>
                                                            setAttributes({
                                                                icon,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                        </>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Form", "essential-blocks")}
                                        initialOpen={true}
                                    >
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Fields Gap (PX)",
                                                "essential-blocks"
                                            )}
                                            controlName={ROWS_GAP}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                            noUnits
                                        />
                                        <BaseControl
                                            label={__(
                                                "Width",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {FORM_WIDTH.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                formWidth ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                formWidth !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    formWidth:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>

                                        {formWidth === "fixed" && (
                                            <>
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Fixed Width",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        FORM_CUSTOM_WIDTH
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={200}
                                                    max={2000}
                                                    step={10}
                                                />

                                                <BaseControl
                                                    label={__(
                                                        "Alignment",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <ButtonGroup id="eb-button-group-alignment">
                                                        {CONTENTS_ALIGNMENTS.map(
                                                            (item, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isPrimary={
                                                                        formAlign ===
                                                                        item.value
                                                                    }
                                                                    isSecondary={
                                                                        formAlign !==
                                                                        item.value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                formAlign:
                                                                                    item.value,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            )
                                                        )}
                                                    </ButtonGroup>
                                                </BaseControl>
                                            </>
                                        )}
                                    </PanelBody>
                                    {showLabel && (
                                        <PanelBody
                                            title={__(
                                                "Labels",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    LABEL_TYPOGRAPHY
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={labelColor}
                                                onChange={(labelColor) =>
                                                    setAttributes({
                                                        labelColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Requied Color",
                                                    "essential-blocks"
                                                )}
                                                color={requiredColor}
                                                onChange={(requiredColor) =>
                                                    setAttributes({
                                                        requiredColor,
                                                    })
                                                }
                                            />
                                            <BaseControl
                                                label={__(
                                                    "Alignment",
                                                    "essential-blocks"
                                                )}
                                            >
                                                <ButtonGroup id="eb-button-group-alignment">
                                                    {CONTENTS_ALIGNMENTS.map(
                                                        (item, index) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={
                                                                    labelAlign ===
                                                                    item.value
                                                                }
                                                                isSecondary={
                                                                    labelAlign !==
                                                                    item.value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            labelAlign:
                                                                                item.value,
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={LABEL_MARGIN}
                                                baseLabel={__(
                                                    "Margin",
                                                    "essential-blocks"
                                                )}
                                            />
                                        </PanelBody>
                                    )}
                                    {showInputIcon && (
                                        <>
                                            <PanelBody
                                                title={__(
                                                    "Fields Icon",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={inputIconColor}
                                                    onChange={(
                                                        inputIconColor
                                                    ) =>
                                                        setAttributes({
                                                            inputIconColor,
                                                        })
                                                    }
                                                />
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Size (PX)",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        INPUT_ICON_SIZE
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                    noUnits
                                                />
                                            </PanelBody>
                                        </>
                                    )}

                                    <PanelBody
                                        title={__(
                                            "Input Fields",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <>
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    FIELDS_TEXT
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={fieldsColor}
                                                onChange={(fieldsColor) =>
                                                    setAttributes({
                                                        fieldsColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Placeholder Color",
                                                    "essential-blocks"
                                                )}
                                                color={fieldsPlaceholderColor}
                                                onChange={(
                                                    fieldsPlaceholderColor
                                                ) =>
                                                    setAttributes({
                                                        fieldsPlaceholderColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                                color={fieldsBgColor}
                                                onChange={(fieldsBgColor) =>
                                                    setAttributes({
                                                        fieldsBgColor,
                                                    })
                                                }
                                            />

                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Width (%)",
                                                    "essential-blocks"
                                                )}
                                                controlName={INPUT_WIDTH}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={1}
                                                max={100}
                                                step={1}
                                                units={SIZE_UNIT_TYPES}
                                            />

                                            <BaseControl
                                                label={__(
                                                    "Alignment",
                                                    "essential-blocks"
                                                )}
                                            >
                                                <ButtonGroup id="eb-button-group-alignment">
                                                    {CONTENTS_ALIGNMENTS.map(
                                                        (item, index) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={
                                                                    fieldAlign ===
                                                                    item.value
                                                                }
                                                                isSecondary={
                                                                    fieldAlign !==
                                                                    item.value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            fieldAlign:
                                                                                item.value,
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={FIELDS_PADDING}
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />

                                            <PanelBody
                                                title={__(
                                                    "Border",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <BorderShadowControl
                                                    controlName={FIELDS_BORDER}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />
                                            </PanelBody>
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Checkbox Fields",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <>
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    CHECKBOX_TEXT
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={checkboxColor}
                                                onChange={(checkboxColor) =>
                                                    setAttributes({
                                                        checkboxColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                                color={checkboxBgColor}
                                                onChange={(checkboxBgColor) =>
                                                    setAttributes({
                                                        checkboxBgColor,
                                                    })
                                                }
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Size (PX)",
                                                    "essential-blocks"
                                                )}
                                                controlName={CHECKBOX_SIZE}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={1}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />
                                            <RangeControl
                                                label={__(
                                                    "Border Width",
                                                    "essential-blocks"
                                                )}
                                                value={checkboxBorder}
                                                onChange={(checkboxBorder) =>
                                                    setAttributes({
                                                        checkboxBorder,
                                                    })
                                                }
                                                min={1}
                                                max={5}
                                                step={1}
                                                allowReset={true}
                                            />

                                            <ButtonGroup className="eb-inspector-btn-group">
                                                {NORMAL_CHECKED.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                checkboxType ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                checkboxType !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    checkboxType:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>

                                            {checkboxType === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Border Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={checkboxBrColor}
                                                        onChange={(
                                                            checkboxBrColor
                                                        ) =>
                                                            setAttributes({
                                                                checkboxBrColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                            {checkboxType === "checked" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Border Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            checkboxBrCheckedColor
                                                        }
                                                        onChange={(
                                                            checkboxBrCheckedColor
                                                        ) =>
                                                            setAttributes({
                                                                checkboxBrCheckedColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Spacing (PX)",
                                                    "essential-blocks"
                                                )}
                                                controlName={CHECKBOX_SPACING}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={1}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Radio Fields",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <>
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    RADIO_TEXT
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={radioColor}
                                                onChange={(radioColor) =>
                                                    setAttributes({
                                                        radioColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                                color={radioBgColor}
                                                onChange={(radioBgColor) =>
                                                    setAttributes({
                                                        radioBgColor,
                                                    })
                                                }
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Size (PX)",
                                                    "essential-blocks"
                                                )}
                                                controlName={RADIO_SIZE}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={1}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />
                                            <RangeControl
                                                label={__(
                                                    "Border Width",
                                                    "essential-blocks"
                                                )}
                                                value={radioBorder}
                                                onChange={(radioBorder) =>
                                                    setAttributes({
                                                        radioBorder,
                                                    })
                                                }
                                                min={1}
                                                max={5}
                                                step={1}
                                                allowReset={true}
                                            />

                                            <ButtonGroup className="eb-inspector-btn-group">
                                                {NORMAL_CHECKED.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                radioType ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                radioType !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    radioType:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>

                                            {radioType === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Border Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={radioBrColor}
                                                        onChange={(
                                                            radioBrColor
                                                        ) =>
                                                            setAttributes({
                                                                radioBrColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                            {radioType === "checked" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Border Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            radioBrCheckedColor
                                                        }
                                                        onChange={(
                                                            radioBrCheckedColor
                                                        ) =>
                                                            setAttributes({
                                                                radioBrCheckedColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Spacing (PX)",
                                                    "essential-blocks"
                                                )}
                                                controlName={RADIO_SPACING}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={1}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Date Fields",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <>
                                            <ColorControl
                                                label={__(
                                                    "Selected Color",
                                                    "essential-blocks"
                                                )}
                                                color={dateSelectedColor}
                                                onChange={(dateSelectedColor) =>
                                                    setAttributes({
                                                        dateSelectedColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Selected Background",
                                                    "essential-blocks"
                                                )}
                                                color={dateBgColor}
                                                onChange={(dateBgColor) =>
                                                    setAttributes({
                                                        dateBgColor,
                                                    })
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Button", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Alignment",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {CONTENTS_ALIGNMENTS.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                buttonAlign ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                buttonAlign !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    buttonAlign:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                        {formLayout == "inline" && (
                                            <>
                                                <BaseControl
                                                    label={__(
                                                        "Vertical Align",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <ButtonGroup>
                                                        {VERTICAL_ALIGN.map(
                                                            (item) => (
                                                                <Button
                                                                    // isLarge
                                                                    isPrimary={
                                                                        btnVerticalAlign ===
                                                                        item.value
                                                                    }
                                                                    isSecondary={
                                                                        btnVerticalAlign !==
                                                                        item.value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                btnVerticalAlign:
                                                                                    item.value,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            )
                                                        )}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <Divider />

                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Vertical Position",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        BTN_VERTICAL_POSITION
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={-500}
                                                    max={500}
                                                    step={1}
                                                />
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Horizontal Position",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        BTN_HORIZONTAL_POSITION
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={500}
                                                    step={1}
                                                />
                                            </>
                                        )}
                                        <BaseControl
                                            label={__(
                                                "Width",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {BUTTON_WIDTH.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                buttonWidth ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                buttonWidth !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    buttonWidth:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                        {buttonWidth === "fixed" && (
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Fixed Width",
                                                    "essential-blocks"
                                                )}
                                                controlName={FIXED_WIDTH}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={100}
                                                max={900}
                                                step={1}
                                            />
                                        )}

                                        <>
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    BTN_TEXT
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                            <ButtonGroup className="eb-inspector-btn-group">
                                                {NORMAL_HOVER.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                buttonType ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                buttonType !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    buttonType:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>

                                            {buttonType === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={btnColor}
                                                        onChange={(btnColor) =>
                                                            setAttributes({
                                                                btnColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Background",
                                                            "essential-blocks"
                                                        )}
                                                        color={btnBgColor}
                                                        onChange={(
                                                            btnBgColor
                                                        ) =>
                                                            setAttributes({
                                                                btnBgColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            {buttonType === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={btnHvColor}
                                                        onChange={(
                                                            btnHvColor
                                                        ) =>
                                                            setAttributes({
                                                                btnHvColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Background",
                                                            "essential-blocks"
                                                        )}
                                                        color={btnBgHvColor}
                                                        onChange={(
                                                            btnBgHvColor
                                                        ) =>
                                                            setAttributes({
                                                                btnBgHvColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={BTN_PADDING}
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />

                                            {formLayout == "block" && (
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Margin Top (PX)",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        BTN_TOP_SPECING
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={500}
                                                    step={1}
                                                    noUnits
                                                />
                                            )}

                                            <PanelBody
                                                title={__(
                                                    "Border",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <BorderShadowControl
                                                    controlName={BTN_BORDER}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />
                                            </PanelBody>
                                        </>

                                        {btnAddIcon && (
                                            <>
                                                <Divider />
                                                <BaseControl
                                                    label={__(
                                                        "Icon Postion",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <ButtonGroup id="eb-button-group-alignment">
                                                        {ICON_POSITION.map(
                                                            (item, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isPrimary={
                                                                        iconPosition ===
                                                                        item.value
                                                                    }
                                                                    isSecondary={
                                                                        iconPosition !==
                                                                        item.value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                iconPosition:
                                                                                    item.value,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            )
                                                        )}
                                                    </ButtonGroup>
                                                </BaseControl>
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Size",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={ICON_SIZE}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    noUnits={true}
                                                />
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Gap",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={ICON_SPACE}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    noUnits={true}
                                                />
                                            </>
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Validation",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                FIELDS_TEXT_VALIDATION
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={fieldsValidationColor}
                                            onChange={(fieldsValidationColor) =>
                                                setAttributes({
                                                    fieldsValidationColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__(
                                                "Fields Border Color",
                                                "essential-blocks"
                                            )}
                                            color={fieldsValidationBorderColor}
                                            onChange={(
                                                fieldsValidationBorderColor
                                            ) =>
                                                setAttributes({
                                                    fieldsValidationBorderColor,
                                                })
                                            }
                                        />
                                        <BaseControl
                                            label={__(
                                                "Alignment",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {CONTENTS_ALIGNMENTS.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                validationAlign ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                validationAlign !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    validationAlign:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Message",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Alignment",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {CONTENTS_ALIGNMENTS.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                messageAlign ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                messageAlign !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    messageAlign:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <ButtonGroup className="eb-inspector-btn-group">
                                            {MESSAGE_TYPE.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={
                                                        messageType ===
                                                        item.value
                                                    }
                                                    isSecondary={
                                                        messageType !==
                                                        item.value
                                                    }
                                                    onClick={() =>
                                                        setAttributes({
                                                            messageType:
                                                                item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                        {messageType == "success" && (
                                            <>
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        SUCCESS_TYPO
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={successColor}
                                                    onChange={(successColor) =>
                                                        setAttributes({
                                                            successColor,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Background",
                                                        "essential-blocks"
                                                    )}
                                                    color={successBgColor}
                                                    onChange={(
                                                        successBgColor
                                                    ) =>
                                                        setAttributes({
                                                            successBgColor,
                                                        })
                                                    }
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={
                                                        SUCCESS_PADDING
                                                    }
                                                    baseLabel={__(
                                                        "Padding",
                                                        "essential-blocks"
                                                    )}
                                                />

                                                <PanelBody
                                                    title={__(
                                                        "Border",
                                                        "essential-blocks"
                                                    )}
                                                    initialOpen={false}
                                                >
                                                    <BorderShadowControl
                                                        controlName={
                                                            SUCCESS_BORDER
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    />
                                                </PanelBody>
                                            </>
                                        )}

                                        {messageType == "error" && (
                                            <>
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        ERROR_TYPO
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={errorColor}
                                                    onChange={(errorColor) =>
                                                        setAttributes({
                                                            errorColor,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Background",
                                                        "essential-blocks"
                                                    )}
                                                    color={errorBgColor}
                                                    onChange={(errorBgColor) =>
                                                        setAttributes({
                                                            errorBgColor,
                                                        })
                                                    }
                                                />

                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={ERROR_PADDING}
                                                    baseLabel={__(
                                                        "Padding",
                                                        "essential-blocks"
                                                    )}
                                                />

                                                <PanelBody
                                                    title={__(
                                                        "Border",
                                                        "essential-blocks"
                                                    )}
                                                    initialOpen={false}
                                                >
                                                    <BorderShadowControl
                                                        controlName={
                                                            ERROR_BORDER
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    />
                                                </PanelBody>
                                            </>
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Margin Padding",
                                            "essential-blocks"
                                        )}
                                    >
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_MARGIN}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_PADDING}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Background",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={WRAPPER_BG}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={WRAPPER_BORDER_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <AdvancedControls
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
        </InspectorControls>
    );
}
export default Inspector;
