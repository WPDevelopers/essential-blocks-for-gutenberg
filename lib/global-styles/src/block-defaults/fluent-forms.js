/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    BaseControl,
    ButtonGroup,
    Button,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * External depencencies
 */

const {
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    BorderShadowControl,
    TypographyDropdown,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    INPUT_TEXTAREA_INDENT,
    INPUT_WIDTH,
    INPUT_HEIGHT,
    TEXTAREA_WIDTH,
    TEXTAREA_HEIGHT,
    INPUT_TEXTAREA_PADDING,
    INPUT_TEXTAREA_SPACING,
    SUBMIT_BUTTON_WIDTH,
    SUBMIT_BUTTON_HEIGHT,
    INPUT_TEXTAREA_BORDER,
    SECTION_BREAK_PADDING,
    SECTION_BREAK_MARGIN,
    SECTION_BREAK_DESC_PADDING,
    SECTION_BREAK_DESC_MARGIN,
    SECTION_BREAK_POSITION,
    CUSTOM_HTML_PADDING,
    CUSTOM_HTML_MARGIN,
    BTN_WIDTH_STYLE,
    SUBMIT_BUTTON_POSITION,
    SUBMIT_BUTTON_PADDING,
    SUBMIT_BUTTON_MARGIN,
    SUBMIT_BUTTON_BORDER,
    SUCCESS_BORDER,
    ERROR_PADDING,
    ERROR_MARGIN,
    CHECKBOX_SIZE,
    CHECKBOX_BORDER,
    CHECKBOX_RADIUS,
    RADIO_RADIUS,
    CHECKBOX_ITEM_SPACING,
    FORM_ALIGNMENT,
    FORM_MAX_WIDTH,
    FORM_BORDER,
    FORM_PADDING,
    FORM_MARGIN,
    BUTTON_POSITION,
} from "../../../../blocks/fluent-forms/src/constants";

import {
    typoPrefix_label,
    typoPrefix_input,
    typoPrefix_section_break,
    typoPrefix_section_break_desc,
    typoPrefix_custom_html,
    typoPrefix_submit_btn,
    typoPrefix_success,
    typoPrefix_error,
} from "../../../../blocks/fluent-forms/src/constants/typographyPrefixConstants";

import objAttributes from "../../../../blocks/fluent-forms/src/attributes";

function FluentForms(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        // new
        showLabels,
        showPlaceholder,
        showErrorMessage,
        labelColor,
        inputHoverType,
        inputBackgroundColor,
        inputTextColor,
        inputFocusBackgroundColor,
        placeholderColor,
        sectionBreakColor,
        sectionBreakPosition,
        sectionBreakDescColor,
        customHtmlPosition,
        customHtmlColor,
        btnWidthType,
        btnAlignment,
        btnHoverType,
        btnBackgroundColor,
        btnColor,
        btnBackgroundHoverColor,
        btnHoverColor,
        successBackgroundColor,
        successColor,
        errorColor,
        customCheckboxStyle,
        checkboxSwitcher,
        checkboxColor,
        checkboxBorderColor,
        checkboxCheckedColor,
        formBackgroundColor,
        formAlignment,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                formActive: "boolean",
                formId: "",
                showLabels: true,
                showPlaceholder: true,
                customCheckboxStyle: false,
                labelColor: "",
                inputHoverType: "normal",
                inputBackgroundColor: "",
                inputFocusBackgroundColor: "",
                inputTextColor: "",
                placeholderColor: "",
                sectionBreakContent: "center",
                sectionBreakColor: "",
                sectionBreakDescColor: "",
                btnWidthType: "custom",
                btnAlignment: "left",
                btnBackgroundColor: "",
                btnColor: "",
                btnBackgroundHoverColor: "",
                btnHoverColor: "",
                btnHoverType: "normal",
                sectionBreakPosition: "center",
                successColor: "",
                successBackgroundColor: "",
                checkboxSwitcher: "normal",
                checkboxColor: "",
                checkboxBorderColor: "",
                checkboxCheckedColor: "",
                formBackgroundColor: "",
                formAlignment: "none",
                customHtmlPosition: "left",
                customHtmlColor: "",

                [`${CUSTOM_HTML_PADDING}Unit`]: "px",
                [`${CUSTOM_HTML_PADDING}isLinked`]: true,

                [`${CUSTOM_HTML_MARGIN}Unit`]: "px",
                [`${CUSTOM_HTML_MARGIN}isLinked`]: true,

                [`${INPUT_WIDTH}Unit`]: "px",
                [`${INPUT_HEIGHT}Unit`]: "px",
                [`${INPUT_TEXTAREA_INDENT}Unit`]: "px",

                [`${TEXTAREA_WIDTH}Unit`]: "px",
                [`${TEXTAREA_HEIGHT}Unit`]: "px",
                [`${INPUT_TEXTAREA_SPACING}Unit`]: "px",

                [`${INPUT_TEXTAREA_PADDING}Unit`]: "px",
                [`${INPUT_TEXTAREA_PADDING}isLinked`]: true,

                [`${INPUT_TEXTAREA_BORDER}Bdr_Unit`]: "px",
                [`${INPUT_TEXTAREA_BORDER}Bdr_isLinked`]: true,
                [`${INPUT_TEXTAREA_BORDER}Rds_Unit`]: "px",
                [`${INPUT_TEXTAREA_BORDER}Rds_isLinked`]: true,
                [`${INPUT_TEXTAREA_BORDER}BorderType`]: "normal",
                [`${INPUT_TEXTAREA_BORDER}shadowType`]: "normal",

                [`${SECTION_BREAK_PADDING}Unit`]: "px",
                [`${SECTION_BREAK_PADDING}isLinked`]: true,

                [`${SECTION_BREAK_MARGIN}Unit`]: "px",
                [`${SECTION_BREAK_MARGIN}isLinked`]: true,

                [`${SECTION_BREAK_DESC_PADDING}Unit`]: "px",
                [`${SECTION_BREAK_DESC_PADDING}isLinked`]: true,

                [`${SECTION_BREAK_DESC_MARGIN}Unit`]: "px",
                [`${SECTION_BREAK_DESC_MARGIN}isLinked`]: true,

                [`${FORM_MAX_WIDTH}Unit`]: "px",
                [`${FORM_MAX_WIDTH}Unit`]: "px",

                [`${SUBMIT_BUTTON_WIDTH}Unit`]: "px",
                [`${SUBMIT_BUTTON_HEIGHT}Unit`]: "px",

                [`${SUBMIT_BUTTON_MARGIN}Unit`]: "px",
                [`${SUBMIT_BUTTON_MARGIN}isLinked`]: true,

                [`${SUBMIT_BUTTON_PADDING}Unit`]: "px",
                [`${SUBMIT_BUTTON_PADDING}isLinked`]: true,

                [`${SUBMIT_BUTTON_BORDER}Bdr_Unit`]: "px",
                [`${SUBMIT_BUTTON_BORDER}Bdr_isLinked`]: true,
                [`${SUBMIT_BUTTON_BORDER}Rds_Unit`]: "px",
                [`${SUBMIT_BUTTON_BORDER}Rds_isLinked`]: true,
                [`${SUBMIT_BUTTON_BORDER}BorderType`]: "normal",
                [`${SUBMIT_BUTTON_BORDER}shadowType`]: "normal",

                [`${SUCCESS_BORDER}Bdr_Unit`]: "px",
                [`${SUCCESS_BORDER}Bdr_isLinked`]: true,
                [`${SUCCESS_BORDER}Rds_Unit`]: "px",
                [`${SUCCESS_BORDER}Rds_isLinked`]: true,
                [`${SUCCESS_BORDER}BorderType`]: "normal",
                [`${SUCCESS_BORDER}shadowType`]: "normal",

                [`${ERROR_MARGIN}Unit`]: "px",
                [`${ERROR_MARGIN}isLinked`]: true,

                [`${ERROR_PADDING}Unit`]: "px",
                [`${ERROR_PADDING}isLinked`]: true,

                [`${CHECKBOX_SIZE}Unit`]: "px",

                [`${CHECKBOX_BORDER}Bdr_Unit`]: "px",
                [`${CHECKBOX_BORDER}Bdr_isLinked`]: true,
                [`${CHECKBOX_BORDER}Rds_Unit`]: "px",
                [`${CHECKBOX_BORDER}Rds_isLinked`]: true,
                [`${CHECKBOX_BORDER}BorderType`]: "normal",
                [`${CHECKBOX_BORDER}shadowType`]: "normal",

                [`${CHECKBOX_RADIUS}Unit`]: "px",
                [`${CHECKBOX_RADIUS}isLinked`]: true,

                [`${RADIO_RADIUS}Unit`]: "px",
                [`${RADIO_RADIUS}isLinked`]: true,

                [`${CHECKBOX_ITEM_SPACING}Unit`]: "px",

                [`${FORM_MAX_WIDTH}Unit`]: "px",

                [`${FORM_MARGIN}Top`]: 28,
                [`${FORM_MARGIN}Right`]: 0,
                [`${FORM_MARGIN}Bottom`]: 28,
                [`${FORM_MARGIN}Left`]: 0,
                [`${FORM_MARGIN}Unit`]: "px",
                [`${FORM_MARGIN}isLinked`]: false,

                [`${FORM_PADDING}Unit`]: "px",
                [`${FORM_PADDING}isLinked`]: true,

                [`${FORM_BORDER}Bdr_Unit`]: "px",
                [`${FORM_BORDER}Bdr_isLinked`]: true,
                [`${FORM_BORDER}Rds_Unit`]: "px",
                [`${FORM_BORDER}Rds_isLinked`]: true,
                [`${FORM_BORDER}BorderType`]: "normal",
                [`${FORM_BORDER}shadowType`]: "normal",
            });
        }
        setDefaultSet(true);
    }, []);

    /**
     * On change default value, set to block default
     */
    useEffect(() => {
        setBlockDefaults({
            [name]: defaultValues,
        });
    }, [defaultValues]);

    /**
     * handleBlockDefault
     * @param {*} obj
     */
    const handleBlockDefault = (obj) => {
        let values = { ...defaultValues };
        Object.keys(obj).map((item) => {
            values[item] = obj[item];
        });
        setDefaultValues(values);
    };

    /**
     * resRequiredProps
     */
    const resRequiredProps = {
        setAttributes: handleBlockDefault,
        resOption: deviceType,
        attributes: defaultValues,
        objAttributes,
    };

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody title={__("Fluent Form", "essential-blocks")}>
                        <ToggleControl
                            label={__("Show Labels", "essential-blocks")}
                            checked={showLabels}
                            onChange={(showLabels) =>
                                handleBlockDefault({ showLabels })
                            }
                        />
                        <ToggleControl
                            label={__("Show Placeholder", "essential-blocks")}
                            checked={showPlaceholder}
                            onChange={(showPlaceholder) =>
                                handleBlockDefault({ showPlaceholder })
                            }
                        />
                        <ToggleControl
                            label={__("Show Error Message", "essential-blocks")}
                            checked={showErrorMessage}
                            onChange={(showErrorMessage) =>
                                handleBlockDefault({ showErrorMessage })
                            }
                        />
                    </PanelBody>
                    {/* Style */}
                    <PanelBody
                        title={__("Labels Style", "essential-blocks")}
                        initialOpen={true}
                    >
                        <>
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={labelColor}
                                onChange={(labelColor) =>
                                    handleBlockDefault({ labelColor })
                                }
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_label}
                                resRequiredProps={resRequiredProps}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Input & Textarea Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <BaseControl>
                                <ButtonGroup>
                                    {[
                                        {
                                            label: __(
                                                "NORMAL",
                                                "essential-blocks"
                                            ),
                                            value: "normal",
                                        },
                                        {
                                            label: __(
                                                "FOCUS",
                                                "essential-blocks"
                                            ),
                                            value: "focus",
                                        },
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={inputHoverType === value}
                                            isSecondary={
                                                inputHoverType !== value
                                            }
                                            onClick={() =>
                                                handleBlockDefault({
                                                    inputHoverType: value,
                                                })
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            {inputHoverType === "normal" && (
                                <>
                                    <ColorControl
                                        label={__(
                                            "Background Color",
                                            "essential-blocks"
                                        )}
                                        color={inputBackgroundColor}
                                        onChange={(inputBackgroundColor) =>
                                            handleBlockDefault({
                                                inputBackgroundColor,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={inputTextColor}
                                        onChange={(inputTextColor) =>
                                            handleBlockDefault({
                                                inputTextColor,
                                            })
                                        }
                                    />
                                </>
                            )}
                            {inputHoverType === "focus" && (
                                <>
                                    <ColorControl
                                        label={__(
                                            "Background Color",
                                            "essential-blocks"
                                        )}
                                        color={inputFocusBackgroundColor}
                                        onChange={(inputFocusBackgroundColor) =>
                                            handleBlockDefault({
                                                inputFocusBackgroundColor,
                                            })
                                        }
                                    />
                                </>
                            )}
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_input}
                                resRequiredProps={resRequiredProps}
                            />
                            <Divider />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Text Indent",
                                    "essential-blocks"
                                )}
                                controlName={INPUT_TEXTAREA_INDENT}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={60}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Input Width",
                                    "essential-blocks"
                                )}
                                controlName={INPUT_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1200}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Input Height",
                                    "essential-blocks"
                                )}
                                controlName={INPUT_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={200}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Textarea Width",
                                    "essential-blocks"
                                )}
                                controlName={TEXTAREA_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1200}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Textarea Height",
                                    "essential-blocks"
                                )}
                                controlName={TEXTAREA_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={400}
                                step={1}
                            />
                            <Divider />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={INPUT_TEXTAREA_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Spacing", "essential-blocks")}
                                controlName={INPUT_TEXTAREA_SPACING}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </>
                        <BaseControl>
                            <h3 className="eb-control-title">
                                {__("Border & Shadow", "essential-blocks")}
                            </h3>
                        </BaseControl>
                        <BorderShadowControl
                            controlName={INPUT_TEXTAREA_BORDER}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Placeholder Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={placeholderColor}
                                onChange={(placeholderColor) =>
                                    handleBlockDefault({ placeholderColor })
                                }
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Radio & Checkbox Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Custom Style", "essential-blocks")}
                            checked={customCheckboxStyle}
                            onChange={(customCheckboxStyle) =>
                                handleBlockDefault({ customCheckboxStyle })
                            }
                        />
                        {customCheckboxStyle && (
                            <>
                                <ResponsiveRangeController
                                    baseLabel={__("Size", "essential-blocks")}
                                    controlName={CHECKBOX_SIZE}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={80}
                                    step={1}
                                />
                                <BaseControl>
                                    <ButtonGroup>
                                        {[
                                            {
                                                label: __(
                                                    "NORMAL",
                                                    "essential-blocks"
                                                ),
                                                value: "normal",
                                            },
                                            {
                                                label: __(
                                                    "CHECKED",
                                                    "essential-blocks"
                                                ),
                                                value: "checked",
                                            },
                                        ].map(({ value, label }, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={
                                                    btnHoverType === value
                                                }
                                                isSecondary={
                                                    btnHoverType !== value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        checkboxSwitcher: value,
                                                    })
                                                }
                                            >
                                                {label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                {checkboxSwitcher === "normal" && (
                                    <>
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={checkboxColor}
                                            onChange={(checkboxColor) =>
                                                handleBlockDefault({
                                                    checkboxColor,
                                                })
                                            }
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Border Width",
                                                "essential-blocks"
                                            )}
                                            controlName={CHECKBOX_BORDER}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={15}
                                            step={1}
                                            noUnits={true}
                                        />
                                        <ColorControl
                                            label={__(
                                                "Border Color",
                                                "essential-blocks"
                                            )}
                                            color={checkboxBorderColor}
                                            onChange={(checkboxBorderColor) =>
                                                handleBlockDefault({
                                                    checkboxBorderColor,
                                                })
                                            }
                                        />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Checkbox",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={CHECKBOX_RADIUS}
                                            baseLabel={__(
                                                "Border Radius",
                                                "essential-blocks"
                                            )}
                                        />

                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Radio Buttons",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={RADIO_RADIUS}
                                            baseLabel={__(
                                                "Border Radius",
                                                "essential-blocks"
                                            )}
                                        />
                                    </>
                                )}
                                {checkboxSwitcher === "checked" && (
                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={checkboxCheckedColor}
                                        onChange={(checkboxCheckedColor) =>
                                            handleBlockDefault({
                                                checkboxCheckedColor,
                                            })
                                        }
                                    />
                                )}
                                <ResponsiveRangeController
                                    baseLabel={__(
                                        "Item Spacing",
                                        "essential-blocks"
                                    )}
                                    controlName={CHECKBOX_ITEM_SPACING}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Section Break", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <BaseControl
                                label={__("Alignment", "essential-blocks")}
                                id="eb-button-group-alignment"
                            >
                                <ButtonGroup id="eb-button-group-alignment">
                                    {SECTION_BREAK_POSITION.map(
                                        (item, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={
                                                    sectionBreakPosition ===
                                                    item.value
                                                }
                                                isSecondary={
                                                    sectionBreakPosition !==
                                                    item.value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        sectionBreakPosition:
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
                            <Divider />
                            <BaseControl>
                                <h3 className="eb-control-title">
                                    {__("Label", "essential-blocks")}
                                </h3>
                            </BaseControl>
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={sectionBreakColor}
                                onChange={(sectionBreakColor) =>
                                    handleBlockDefault({ sectionBreakColor })
                                }
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={
                                    typoPrefix_section_break
                                }
                                resRequiredProps={resRequiredProps}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SECTION_BREAK_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SECTION_BREAK_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                            <Divider />
                            <BaseControl>
                                <h3 className="eb-control-title">
                                    {__("Description", "essential-blocks")}
                                </h3>
                            </BaseControl>
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={sectionBreakDescColor}
                                onChange={(sectionBreakDescColor) =>
                                    handleBlockDefault({
                                        sectionBreakDescColor,
                                    })
                                }
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={
                                    typoPrefix_section_break_desc
                                }
                                resRequiredProps={resRequiredProps}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SECTION_BREAK_DESC_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SECTION_BREAK_DESC_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                        </>
                    </PanelBody>

                    <PanelBody
                        title={__("Custom HTML", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <BaseControl
                                label={__("Alignment", "essential-blocks")}
                                id="eb-button-group-alignment"
                            >
                                <ButtonGroup id="eb-button-group-alignment">
                                    {SECTION_BREAK_POSITION.map(
                                        (item, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={
                                                    customHtmlPosition ===
                                                    item.value
                                                }
                                                isSecondary={
                                                    customHtmlPosition !==
                                                    item.value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        customHtmlPosition:
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
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={customHtmlColor}
                                onChange={(customHtmlColor) =>
                                    handleBlockDefault({ customHtmlColor })
                                }
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={
                                    typoPrefix_custom_html
                                }
                                resRequiredProps={resRequiredProps}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={CUSTOM_HTML_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={CUSTOM_HTML_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                        </>
                    </PanelBody>

                    <PanelBody
                        title={__("Submit Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            {btnWidthType === "custom" && (
                                <BaseControl
                                    label={__("Alignment", "essential-blocks")}
                                    id="eb-button-group-alignment"
                                >
                                    <ButtonGroup id="eb-button-group-alignment">
                                        {SUBMIT_BUTTON_POSITION.map(
                                            (item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={
                                                        btnAlignment ===
                                                        item.value
                                                    }
                                                    isSecondary={
                                                        btnAlignment !==
                                                        item.value
                                                    }
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            btnAlignment:
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
                            )}
                            <ResponsiveRangeController
                                baseLabel={__("Height", "essential-blocks")}
                                controlName={SUBMIT_BUTTON_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <SelectControl
                                label={__("Width", "essential-blocks")}
                                value={btnWidthType}
                                options={BTN_WIDTH_STYLE}
                                onChange={(newBtnWidthType) =>
                                    handleBlockDefault({
                                        btnWidthType: newBtnWidthType,
                                    })
                                }
                            />
                            {btnWidthType === "custom" && (
                                <ResponsiveRangeController
                                    baseLabel={__("Width", "essential-blocks")}
                                    controlName={SUBMIT_BUTTON_WIDTH}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={1200}
                                    step={1}
                                />
                            )}
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_submit_btn}
                                resRequiredProps={resRequiredProps}
                            />
                            <BaseControl>
                                <ButtonGroup>
                                    {[
                                        {
                                            label: __(
                                                "NORMAL",
                                                "essential-blocks"
                                            ),
                                            value: "normal",
                                        },
                                        {
                                            label: __(
                                                "HOVER",
                                                "essential-blocks"
                                            ),
                                            value: "hover",
                                        },
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={btnHoverType === value}
                                            isSecondary={btnHoverType !== value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    btnHoverType: value,
                                                })
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            {btnHoverType === "normal" && (
                                <>
                                    <ColorControl
                                        label={__(
                                            "Background Color",
                                            "essential-blocks"
                                        )}
                                        color={btnBackgroundColor}
                                        onChange={(btnBackgroundColor) =>
                                            handleBlockDefault({
                                                btnBackgroundColor,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={btnColor}
                                        onChange={(btnColor) =>
                                            handleBlockDefault({ btnColor })
                                        }
                                    />
                                </>
                            )}
                            {btnHoverType === "hover" && (
                                <>
                                    <ColorControl
                                        label={__(
                                            "Background Color",
                                            "essential-blocks"
                                        )}
                                        color={btnBackgroundHoverColor}
                                        onChange={(btnBackgroundHoverColor) =>
                                            handleBlockDefault({
                                                btnBackgroundHoverColor,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={btnHoverColor}
                                        onChange={(btnHoverColor) =>
                                            handleBlockDefault({
                                                btnHoverColor,
                                            })
                                        }
                                    />
                                </>
                            )}
                            <Divider />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SUBMIT_BUTTON_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SUBMIT_BUTTON_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Button Position",
                                    "essential-blocks"
                                )}
                                controlName={BUTTON_POSITION}
                                resRequiredProps={resRequiredProps}
                                min={-1000}
                                max={1000}
                                step={1}
                            />
                            <BaseControl>
                                <h3 className="eb-control-title">
                                    {__("Border & Shadow", "essential-blocks")}
                                </h3>
                            </BaseControl>
                            <BorderShadowControl
                                controlName={SUBMIT_BUTTON_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Success Message Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ColorControl
                            label={__("Background Color", "essential-blocks")}
                            color={successBackgroundColor}
                            onChange={(successBackgroundColor) =>
                                handleBlockDefault({ successBackgroundColor })
                            }
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={successColor}
                            onChange={(successColor) =>
                                handleBlockDefault({ successColor })
                            }
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_success}
                            resRequiredProps={resRequiredProps}
                        />
                        <BorderShadowControl
                            controlName={SUCCESS_BORDER}
                            resRequiredProps={resRequiredProps}
                            noShadow={true}
                        />
                    </PanelBody>
                    {showErrorMessage && (
                        <PanelBody
                            title={__(
                                "Error Message Style",
                                "essential-blocks"
                            )}
                            initialOpen={false}
                        >
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={errorColor}
                                onChange={(errorColor) =>
                                    handleBlockDefault({ errorColor })
                                }
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_error}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={ERROR_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={ERROR_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                        </PanelBody>
                    )}

                    {/* Advanced */}
                    <PanelBody
                        title={__("Wrapper Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <ColorControl
                                label={__(
                                    "Background Color",
                                    "essential-blocks"
                                )}
                                color={formBackgroundColor}
                                onChange={(formBackgroundColor) =>
                                    handleBlockDefault({ formBackgroundColor })
                                }
                            />
                            <BaseControl
                                label={__("Alignment", "essential-blocks")}
                                id="eb-button-group-alignment"
                            >
                                <ButtonGroup id="eb-button-group-alignment">
                                    {FORM_ALIGNMENT.map((item, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={
                                                formAlignment === item.value
                                            }
                                            isSecondary={
                                                formAlignment !== item.value
                                            }
                                            onClick={() =>
                                                handleBlockDefault({
                                                    formAlignment: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Form Max Width",
                                    "essential-blocks"
                                )}
                                controlName={FORM_MAX_WIDTH}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={1500}
                                step={1}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={FORM_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={FORM_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                            <Divider />
                            <BaseControl>
                                <h3 className="eb-control-title">
                                    {__("Border & Shadow", "essential-blocks")}
                                </h3>
                            </BaseControl>
                            <BorderShadowControl
                                controlName={FORM_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                        </>
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default FluentForms;
