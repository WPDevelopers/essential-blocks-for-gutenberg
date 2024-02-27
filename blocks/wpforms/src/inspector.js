/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { select } from "@wordpress/data";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    BaseControl,
    ButtonGroup,
    Button,
    TabPanel,
    __experimentalDivider as Divider,
} from "@wordpress/components";

import objAttributes from "./attributes";

const {
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    BorderShadowControl,
    TypographyDropdown,
    AdvancedControls,
} = EBControls;

import {
    LABEL_SPACING,
    INPUT_TEXTAREA_INDENT,
    INPUT_WIDTH,
    INPUT_HEIGHT,
    TEXTAREA_WIDTH,
    TEXTAREA_HEIGHT,
    INPUT_TEXTAREA_PADDING,
    INPUT_TEXTAREA_SPACING,
    SUBMIT_BUTTON_WIDTH,
    INPUT_TEXTAREA_BORDER,
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
    FORM_ALIGNMENT,
    FORM_MAX_WIDTH,
    FORM_BORDER,
    FORM_PADDING,
    FORM_MARGIN,
} from "./constants";
import {
    typoPrefix_label,
    typoPrefix_input,
    typoPrefix_submit_btn,
    typoPrefix_success,
    typoPrefix_error,
} from "./constants/typographyPrefixConstants";

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        // new
        showLabels,
        showPlaceholder,
        showErrorMessage,
        labelColor,
        inputHoverType,
        inputBackgroundColor,
        inputTextColor,
        inputFocusBackgroundColor,
        placeHolderColor,
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
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
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
                            title: __("General", "essential-blocks"),
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: __("Style", "essential-blocks"),
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: __("Advanced", "essential-blocks"),
                            className: "eb-tab advance",
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls " + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "WPForms",
                                            "essential-blocks"
                                        )}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Show Labels",
                                                "essential-blocks"
                                            )}
                                            checked={showLabels}
                                            onChange={(showLabels) =>
                                                setAttributes({ showLabels })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Show Placeholder",
                                                "essential-blocks"
                                            )}
                                            checked={showPlaceholder}
                                            onChange={(showPlaceholder) =>
                                                setAttributes({
                                                    showPlaceholder,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Show Error Message",
                                                "essential-blocks"
                                            )}
                                            checked={showErrorMessage}
                                            onChange={(showErrorMessage) =>
                                                setAttributes({
                                                    showErrorMessage,
                                                })
                                            }
                                        />
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Labels", "essential-blocks")}
                                        initialOpen={true}
                                    >
                                        <>
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={LABEL_SPACING}
                                                baseLabel={__(
                                                    "Margin",
                                                    "essential-blocks"
                                                )}
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
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_label
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Input & Textarea",
                                            "essential-blocks"
                                        )}
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
                                                    ].map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={
                                                                    inputHoverType ===
                                                                    value
                                                                }
                                                                isSecondary={
                                                                    inputHoverType !==
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            inputHoverType: value,
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>
                                            {inputHoverType === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Background Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            inputBackgroundColor
                                                        }
                                                        onChange={(
                                                            inputBackgroundColor
                                                        ) =>
                                                            setAttributes({
                                                                inputBackgroundColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={inputTextColor}
                                                        onChange={(
                                                            inputTextColor
                                                        ) =>
                                                            setAttributes({
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
                                                        color={
                                                            inputFocusBackgroundColor
                                                        }
                                                        onChange={(
                                                            inputFocusBackgroundColor
                                                        ) =>
                                                            setAttributes({
                                                                inputFocusBackgroundColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_input
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                            <Divider />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Text Indent",
                                                    "essential-blocks"
                                                )}
                                                controlName={
                                                    INPUT_TEXTAREA_INDENT
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
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
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
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
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
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
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
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
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={400}
                                                step={1}
                                            />
                                            <Divider />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={
                                                    INPUT_TEXTAREA_PADDING
                                                }
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Spacing",
                                                    "essential-blocks"
                                                )}
                                                controlName={
                                                    INPUT_TEXTAREA_SPACING
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        </>
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Border & Shadow",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <BorderShadowControl
                                            controlName={INPUT_TEXTAREA_BORDER}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Placeholder",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <>
                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={placeHolderColor}
                                                onChange={(placeHolderColor) =>
                                                    setAttributes({
                                                        placeHolderColor,
                                                    })
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Radio & Checkbox",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Custom Style",
                                                "essential-blocks"
                                            )}
                                            checked={customCheckboxStyle}
                                            onChange={(customCheckboxStyle) =>
                                                setAttributes({
                                                    customCheckboxStyle,
                                                })
                                            }
                                        />
                                        {customCheckboxStyle && (
                                            <>
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Size",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={CHECKBOX_SIZE}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
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
                                                                value:
                                                                    "checked",
                                                            },
                                                        ].map(
                                                            (
                                                                {
                                                                    value,
                                                                    label,
                                                                },
                                                                index
                                                            ) => (
                                                                <Button
                                                                    key={index}
                                                                    isPrimary={
                                                                        btnHoverType ===
                                                                        value
                                                                    }
                                                                    isSecondary={
                                                                        btnHoverType !==
                                                                        value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                checkboxSwitcher: value,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {label}
                                                                </Button>
                                                            )
                                                        )}
                                                    </ButtonGroup>
                                                </BaseControl>
                                                {checkboxSwitcher ===
                                                    "normal" && (
                                                    <>
                                                        <ColorControl
                                                            label={__(
                                                                "Color",
                                                                "essential-blocks"
                                                            )}
                                                            color={
                                                                checkboxColor
                                                            }
                                                            onChange={(
                                                                checkboxColor
                                                            ) =>
                                                                setAttributes({
                                                                    checkboxColor,
                                                                })
                                                            }
                                                        />
                                                        <ResponsiveRangeController
                                                            baseLabel={__(
                                                                "Border Width",
                                                                "essential-blocks"
                                                            )}
                                                            controlName={
                                                                CHECKBOX_BORDER
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
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
                                                            color={
                                                                checkboxBorderColor
                                                            }
                                                            onChange={(
                                                                checkboxBorderColor
                                                            ) =>
                                                                setAttributes({
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
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            controlName={
                                                                CHECKBOX_RADIUS
                                                            }
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
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            controlName={
                                                                RADIO_RADIUS
                                                            }
                                                            baseLabel={__(
                                                                "Border Radius",
                                                                "essential-blocks"
                                                            )}
                                                        />
                                                    </>
                                                )}
                                                {checkboxSwitcher ===
                                                    "checked" && (
                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            checkboxCheckedColor
                                                        }
                                                        onChange={(
                                                            checkboxCheckedColor
                                                        ) =>
                                                            setAttributes({
                                                                checkboxCheckedColor,
                                                            })
                                                        }
                                                    />
                                                )}
                                            </>
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Submit", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <>
                                            {btnWidthType === "custom" && (
                                                <BaseControl
                                                    label={__(
                                                        "Alignment",
                                                        "essential-blocks"
                                                    )}
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
                                                                        setAttributes(
                                                                            {
                                                                                btnAlignment:
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
                                            )}
                                            <SelectControl
                                                label={__(
                                                    "Width",
                                                    "essential-blocks"
                                                )}
                                                value={btnWidthType}
                                                options={BTN_WIDTH_STYLE}
                                                onChange={(newBtnWidthType) =>
                                                    setAttributes({
                                                        btnWidthType: newBtnWidthType,
                                                    })
                                                }
                                            />
                                            {btnWidthType === "custom" && (
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Width",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={
                                                        SUBMIT_BUTTON_WIDTH
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={1200}
                                                    step={1}
                                                />
                                            )}
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_submit_btn
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
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
                                                    ].map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={
                                                                    btnHoverType ===
                                                                    value
                                                                }
                                                                isSecondary={
                                                                    btnHoverType !==
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            btnHoverType: value,
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>
                                            {btnHoverType === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Background Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            btnBackgroundColor
                                                        }
                                                        onChange={(
                                                            btnBackgroundColor
                                                        ) =>
                                                            setAttributes({
                                                                btnBackgroundColor,
                                                            })
                                                        }
                                                    />
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
                                                </>
                                            )}
                                            {btnHoverType === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Background Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={
                                                            btnBackgroundHoverColor
                                                        }
                                                        onChange={(
                                                            btnBackgroundHoverColor
                                                        ) =>
                                                            setAttributes({
                                                                btnBackgroundHoverColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={btnHoverColor}
                                                        onChange={(
                                                            btnHoverColor
                                                        ) =>
                                                            setAttributes({
                                                                btnHoverColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                            <Divider />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={
                                                    SUBMIT_BUTTON_PADDING
                                                }
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={
                                                    SUBMIT_BUTTON_MARGIN
                                                }
                                                baseLabel={__(
                                                    "Margin",
                                                    "essential-blocks"
                                                )}
                                            />
                                            <BaseControl>
                                                <h3 className="eb-control-title">
                                                    {__(
                                                        "Border & Shadow",
                                                        "essential-blocks"
                                                    )}
                                                </h3>
                                            </BaseControl>
                                            <BorderShadowControl
                                                controlName={
                                                    SUBMIT_BUTTON_BORDER
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Success Message",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <ColorControl
                                            label={__(
                                                "Background Color",
                                                "essential-blocks"
                                            )}
                                            color={successBackgroundColor}
                                            onChange={(
                                                successBackgroundColor
                                            ) =>
                                                setAttributes({
                                                    successBackgroundColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={successColor}
                                            onChange={(successColor) =>
                                                setAttributes({ successColor })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_success
                                            }
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
                                                "Error Message",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
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
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_error
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
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
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={ERROR_MARGIN}
                                                baseLabel={__(
                                                    "Margin",
                                                    "essential-blocks"
                                                )}
                                            />
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody>
                                        <>
                                            <ColorControl
                                                label={__(
                                                    "Background Color",
                                                    "essential-blocks"
                                                )}
                                                color={formBackgroundColor}
                                                onChange={(
                                                    formBackgroundColor
                                                ) =>
                                                    setAttributes({
                                                        formBackgroundColor,
                                                    })
                                                }
                                            />
                                            <BaseControl
                                                label={__(
                                                    "Alignment",
                                                    "essential-blocks"
                                                )}
                                                id="eb-button-group-alignment"
                                            >
                                                <ButtonGroup id="eb-button-group-alignment">
                                                    {FORM_ALIGNMENT.map(
                                                        (item, index) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={
                                                                    formAlignment ===
                                                                    item.value
                                                                }
                                                                isSecondary={
                                                                    formAlignment !==
                                                                    item.value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            formAlignment:
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
                                                    "Form Max Width",
                                                    "essential-blocks"
                                                )}
                                                controlName={FORM_MAX_WIDTH}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={1500}
                                                step={1}
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={FORM_PADDING}
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={FORM_MARGIN}
                                                baseLabel={__(
                                                    "Margin",
                                                    "essential-blocks"
                                                )}
                                            />
                                            <Divider />
                                            <BaseControl>
                                                <h3 className="eb-control-title">
                                                    {__(
                                                        "Border & Shadow",
                                                        "essential-blocks"
                                                    )}
                                                </h3>
                                            </BaseControl>
                                            <BorderShadowControl
                                                controlName={FORM_BORDER}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        </>
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
};

export default Inspector;
