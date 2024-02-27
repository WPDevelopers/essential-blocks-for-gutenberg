/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    BaseControl,
    ButtonGroup,
    Button,
    TextControl,
    SelectControl,
    ToggleControl,
    TabPanel,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
    POPUP_WIDTH,
    POPUP_HEIGHT,
    ICON_POSITIONS,
    BUTTON_ALIGNMENT,
    BUTTON_BACKGROUND,
    BUTTON_BORDER,
    BUTTON_PADDING,
    POPUP_MARGIN,
    POPUP_PADDING,
    POPUP_BACKGROUND,
    POPUP_BORDER,
    CLOSE_PADDING,
    CLOSE_BORDER,
    CLOSE_BTN_LEFT,
    CLOSE_BTN_RIGHT,
    CLOSE_BTN_TOP,
    CONTAINER_PADDING,
    wrapMarginConst,
    wrapPaddingConst,
} from "./constants";

const {
    faIcons: iconList,
    ColorControl,
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    BorderShadowControl,
    BackgroundControl,
    AdvancedControls,
    DynamicInputControl,
    EBIconPicker
} = window.EBControls;

import objAttributes from "./attributes";

import {
    typoPrefix_text,
    typoPrefix_close,
} from "./constants/typographyPrefixConstants";

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        trigger,
        btnType,
        btnText,
        btnIcon,
        btnAlignment,
        triggerIcon,
        displayCloseIcon,
        escToExit,
        clickToExit,
        autoExit,
        autoExitTime,
        autoHeight,
        position,
        pageLoadDelay,
        eleIdentifier,
        btnTextColor,
        btnHoverTextColor,
        popupFullWidth,
        iconPosition,
        useCloseIcon,
        closeBtnText,
        closeBtnColor,
        closeBtnHoverColor,
        closeBtnBackColor,
        closeBtnBackHoverColor,
        overlayColor,
        useCookies,
        cookieExpireTime,
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
                    // onSelect={onSelect}
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
                        <div className={"eb-tab-controls " + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Settings",
                                            "essential-blocks"
                                        )}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Trigger",
                                                "essential-blocks"
                                            )}
                                            value={trigger}
                                            options={[
                                                {
                                                    label: __(
                                                        "Button Click",
                                                        "essential-blocks"
                                                    ),
                                                    value: "btn_click",
                                                },
                                                {
                                                    label: __(
                                                        "Page Load",
                                                        "essential-blocks"
                                                    ),
                                                    value: "page_load",
                                                },
                                                {
                                                    label: __(
                                                        "External Element",
                                                        "essential-blocks"
                                                    ),
                                                    value: "external",
                                                },
                                                {
                                                    label: __(
                                                        "Exit Intent",
                                                        "essential-blocks"
                                                    ),
                                                    value: "exit_intent",
                                                }
                                            ]}
                                            onChange={(newTrigger) =>
                                                setAttributes({
                                                    trigger: newTrigger,
                                                })
                                            }
                                        />
                                        {"btn_click" === trigger && (
                                            <>
                                                <BaseControl
                                                    label={__(
                                                        "Button Settings",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <SelectControl
                                                        label={__(
                                                            "Type",
                                                            "essential-blocks"
                                                        )}
                                                        value={btnType}
                                                        options={[
                                                            {
                                                                label: __(
                                                                    "Button",
                                                                    "essential-blocks"
                                                                ),
                                                                value: "button",
                                                            },
                                                            {
                                                                label: __(
                                                                    "Icon",
                                                                    "essential-blocks"
                                                                ),
                                                                value: "icon",
                                                            },
                                                        ]}
                                                        onChange={(
                                                            newBtnType
                                                        ) =>
                                                            setAttributes({
                                                                btnType: newBtnType,
                                                            })
                                                        }
                                                    />
                                                </BaseControl>
                                                {"button" === btnType && (
                                                    <>
                                                        <DynamicInputControl
                                                            label={__(
                                                                "Button Text",
                                                                "essential-blocks"
                                                            )}
                                                            attrName="btnText"
                                                            inputValue={btnText}
                                                            setAttributes={
                                                                setAttributes
                                                            }
                                                            onChange={(
                                                                newBtnText
                                                            ) =>
                                                                setAttributes({
                                                                    btnText: newBtnText,
                                                                })
                                                            }
                                                        />
                                                        <EBIconPicker
                                                            value={btnIcon}
                                                            onChange={(icon) =>
                                                                setAttributes({
                                                                    btnIcon: icon,
                                                                })
                                                            }
                                                            title={__("Button Icon", "essential-blocks")}
                                                        />
                                                        <BaseControl
                                                            label={__(
                                                                "Icon Position",
                                                                "essential-blocks"
                                                            )}
                                                            id="eb-button-icon-position"
                                                        >
                                                            <ButtonGroup id="eb-icon-position-btgrp">
                                                                {ICON_POSITIONS.map(
                                                                    (
                                                                        item,
                                                                        key
                                                                    ) => (
                                                                        <Button
                                                                            key={
                                                                                key
                                                                            }
                                                                            isSecondary={
                                                                                iconPosition !==
                                                                                item.value
                                                                            }
                                                                            isPrimary={
                                                                                iconPosition ===
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
                                                                            {
                                                                                item.label
                                                                            }
                                                                        </Button>
                                                                    )
                                                                )}
                                                            </ButtonGroup>
                                                        </BaseControl>
                                                    </>
                                                )}
                                                {"icon" === btnType && (
                                                    <>
                                                        <EBIconPicker
                                                            value={triggerIcon}
                                                            onChange={(icon) =>
                                                                setAttributes({
                                                                    triggerIcon: icon,
                                                                })
                                                            }
                                                            title={__("Trigger Icon", "essential-blocks")}
                                                        />
                                                    </>
                                                )}
                                                <BaseControl
                                                    label={__(
                                                        "Alignment ",
                                                        "essential-blocks"
                                                    )}
                                                    id="eb-popup-button-alignment"
                                                >
                                                    <ButtonGroup>
                                                        {BUTTON_ALIGNMENT.map(
                                                            (item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    isSecondary={
                                                                        btnAlignment !==
                                                                        item.value
                                                                    }
                                                                    isPrimary={
                                                                        btnAlignment ===
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
                                            </>
                                        )}
                                        {"page_load" === trigger && (
                                            <>
                                                <BaseControl>
                                                    <h3>
                                                        {__(
                                                            "Page Load Settings",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <TextControl
                                                    label={__(
                                                        "Delay(Seconds)",
                                                        "essential-blocks"
                                                    )}
                                                    value={pageLoadDelay}
                                                    onChange={(
                                                        newPageLoadDelay
                                                    ) =>
                                                        setAttributes({
                                                            pageLoadDelay: newPageLoadDelay,
                                                        })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__(
                                                        "Use Cookies",
                                                        "essential-blocks"
                                                    )}
                                                    checked={useCookies}
                                                    onChange={() =>
                                                        setAttributes({
                                                            useCookies: !useCookies,
                                                        })
                                                    }
                                                />
                                                {useCookies && (
                                                    <TextControl
                                                        label={__(
                                                            "Cookie Expire(In days)",
                                                            "essential-blocks"
                                                        )}
                                                        value={cookieExpireTime}
                                                        onChange={(
                                                            newCookieExpireTime
                                                        ) =>
                                                            setAttributes({
                                                                cookieExpireTime: newCookieExpireTime,
                                                            })
                                                        }
                                                        help={__(
                                                            "Leave blank if you want to delete cookie after browser closed.",
                                                            "essential-blocks"
                                                        )}
                                                    />
                                                )}
                                            </>
                                        )}
                                        {"external" === trigger && (
                                            <>
                                                <TextControl
                                                    label={__(
                                                        "Identifier",
                                                        "essential-blocks"
                                                    )}
                                                    value={eleIdentifier}
                                                    onChange={(
                                                        newEleIdentifier
                                                    ) =>
                                                        setAttributes({
                                                            eleIdentifier: newEleIdentifier,
                                                        })
                                                    }
                                                    help={__(
                                                        "You can also use class identifier such as .open-popup",
                                                        "essential-blocks"
                                                    )}
                                                />
                                            </>
                                        )}
                                        {"exit_intent" === trigger && (
                                            <>
                                                <BaseControl>
                                                    <h3>
                                                        {__(
                                                            "Exit Intent Settings",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <ToggleControl
                                                    label={__(
                                                        "Use Cookies",
                                                        "essential-blocks"
                                                    )}
                                                    checked={useCookies}
                                                    onChange={() =>
                                                        setAttributes({
                                                            useCookies: !useCookies,
                                                        })
                                                    }
                                                />
                                                {useCookies && (
                                                    <TextControl
                                                        label={__(
                                                            "Cookie Expire(In days)",
                                                            "essential-blocks"
                                                        )}
                                                        value={cookieExpireTime}
                                                        onChange={(
                                                            newCookieExpireTime
                                                        ) =>
                                                            setAttributes({
                                                                cookieExpireTime: newCookieExpireTime,
                                                            })
                                                        }
                                                        help={__(
                                                            "Leave blank if you want to delete cookie after browser closed.",
                                                            "essential-blocks"
                                                        )}
                                                    />
                                                )}
                                            </>
                                        )}
                                        <Divider />
                                        <BaseControl>
                                            <h3>
                                                {__(
                                                    "Exit Settings",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ToggleControl
                                            label={__(
                                                "Show Close Button",
                                                "essential-blocks"
                                            )}
                                            checked={displayCloseIcon}
                                            onChange={() =>
                                                setAttributes({
                                                    displayCloseIcon: !displayCloseIcon,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Esc to Exit",
                                                "essential-blocks"
                                            )}
                                            checked={escToExit}
                                            onChange={() =>
                                                setAttributes({
                                                    escToExit: !escToExit,
                                                })
                                            }
                                            help={__(
                                                "Close the modal box by pressing the Esc key",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Click to Exit",
                                                "essential-blocks"
                                            )}
                                            checked={clickToExit}
                                            onChange={() =>
                                                setAttributes({
                                                    clickToExit: !clickToExit,
                                                })
                                            }
                                            help={__(
                                                "Close the modal box by clicking anywhere outside the modal window",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Auto Exit",
                                                "essential-blocks"
                                            )}
                                            checked={autoExit}
                                            onChange={() =>
                                                setAttributes({
                                                    autoExit: !autoExit,
                                                })
                                            }
                                        />
                                        {autoExit && (
                                            <TextControl
                                                label={__(
                                                    "Auto Exit Delay (Seconds)",
                                                    "essential-blocks"
                                                )}
                                                value={autoExitTime}
                                                onChange={(newAutoExitTime) =>
                                                    setAttributes({
                                                        autoExitTime: newAutoExitTime,
                                                    })
                                                }
                                            />
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Size & Position",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Full Width",
                                                "essential-blocks"
                                            )}
                                            checked={popupFullWidth}
                                            onChange={() =>
                                                setAttributes({
                                                    popupFullWidth: !popupFullWidth,
                                                })
                                            }
                                        />
                                        {!popupFullWidth && (
                                            <>
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Width",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={POPUP_WIDTH}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={1920}
                                                    step={1}
                                                />
                                            </>
                                        )}

                                        <ToggleControl
                                            label={__(
                                                "Auto Height",
                                                "essential-blocks"
                                            )}
                                            checked={autoHeight}
                                            onChange={() =>
                                                setAttributes({
                                                    autoHeight: !autoHeight,
                                                })
                                            }
                                        />
                                        {!autoHeight && (
                                            <>
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Height",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={POPUP_HEIGHT}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={1000}
                                                    step={1}
                                                />
                                            </>
                                        )}
                                        <SelectControl
                                            label={__(
                                                "Position",
                                                "essential-blocks"
                                            )}
                                            value={position}
                                            options={[
                                                {
                                                    label: __(
                                                        "Top Left",
                                                        "essential-blocks"
                                                    ),
                                                    value: "top_left",
                                                },
                                                {
                                                    label: __(
                                                        "Top Center",
                                                        "essential-blocks"
                                                    ),
                                                    value: "top_center",
                                                },
                                                {
                                                    label: __(
                                                        "Top Right",
                                                        "essential-blocks"
                                                    ),
                                                    value: "top_right",
                                                },
                                                {
                                                    label: __(
                                                        "Middle Left",
                                                        "essential-blocks"
                                                    ),
                                                    value: "middle_left",
                                                },
                                                {
                                                    label: __(
                                                        "Middle Center",
                                                        "essential-blocks"
                                                    ),
                                                    value: "middle_center",
                                                },
                                                {
                                                    label: __(
                                                        "Middle Right",
                                                        "essential-blocks"
                                                    ),
                                                    value: "middle_right",
                                                },
                                                {
                                                    label: __(
                                                        "Bottom Left",
                                                        "essential-blocks"
                                                    ),
                                                    value: "bottom_left",
                                                },
                                                {
                                                    label: __(
                                                        "Bottom Center",
                                                        "essential-blocks"
                                                    ),
                                                    value: "bottom_center",
                                                },
                                                {
                                                    label: __(
                                                        "Bottom Right",
                                                        "essential-blocks"
                                                    ),
                                                    value: "bottom_right",
                                                },
                                            ]}
                                            onChange={(newPosition) =>
                                                setAttributes({
                                                    position: newPosition,
                                                })
                                            }
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Close Button",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <>
                                            <ToggleControl
                                                label={__(
                                                    "Use close Icon",
                                                    "essential-blocks"
                                                )}
                                                checked={useCloseIcon}
                                                onChange={() =>
                                                    setAttributes({
                                                        useCloseIcon: !useCloseIcon,
                                                    })
                                                }
                                            />
                                            {!useCloseIcon && (
                                                <TextControl
                                                    label={__(
                                                        "Text",
                                                        "essential-blocks"
                                                    )}
                                                    value={closeBtnText}
                                                    onChange={(
                                                        newCloseBtnText
                                                    ) =>
                                                        setAttributes({
                                                            closeBtnText: newCloseBtnText,
                                                        })
                                                    }
                                                />
                                            )}
                                            <Divider />
                                            <BaseControl>
                                                <h3>
                                                    {__(
                                                        "Icon Position",
                                                        "essential-blocks"
                                                    )}
                                                </h3>
                                            </BaseControl>
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Top",
                                                    "essential-blocks"
                                                )}
                                                controlName={CLOSE_BTN_TOP}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={-500}
                                                max={500}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Right",
                                                    "essential-blocks"
                                                )}
                                                controlName={CLOSE_BTN_RIGHT}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={-500}
                                                max={500}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Left",
                                                    "essential-blocks"
                                                )}
                                                controlName={CLOSE_BTN_LEFT}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={-500}
                                                max={500}
                                                step={1}
                                            />
                                        </>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    {"btn_click" == trigger && (
                                        <PanelBody
                                            title={__(
                                                "Button/Icon Styles",
                                                "essential-blocks"
                                            )}
                                            initialOpen={true}
                                        >
                                            <>
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        typoPrefix_text
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
                                                    color={btnTextColor}
                                                    onChange={(newTextColor) =>
                                                        setAttributes({
                                                            btnTextColor: newTextColor,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Hover Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={btnHoverTextColor}
                                                    onChange={(
                                                        newHoverTextColor
                                                    ) =>
                                                        setAttributes({
                                                            btnHoverTextColor: newHoverTextColor,
                                                        })
                                                    }
                                                />
                                                <Divider />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={BUTTON_PADDING}
                                                    baseLabel={__(
                                                        "Padding",
                                                        "essential-blocks"
                                                    )}
                                                />
                                                <PanelBody
                                                    title={__(
                                                        "Background",
                                                        "essential-blocks"
                                                    )}
                                                    initialOpen={false}
                                                >
                                                    <BackgroundControl
                                                        controlName={
                                                            BUTTON_BACKGROUND
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        noOverlay={true}
                                                        noMainBgi={true}
                                                    />
                                                </PanelBody>
                                                <PanelBody
                                                    title={__(
                                                        "Border",
                                                        "essential-blocks"
                                                    )}
                                                    initialOpen={false}
                                                >
                                                    <BorderShadowControl
                                                        controlName={
                                                            BUTTON_BORDER
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    />
                                                </PanelBody>
                                            </>
                                        </PanelBody>
                                    )}
                                    <PanelBody
                                        title={__(
                                            "Popup Design",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <ColorControl
                                            label={__(
                                                "Overlay Color",
                                                "essential-blocks"
                                            )}
                                            color={overlayColor}
                                            onChange={(newOverlayColor) =>
                                                setAttributes({
                                                    overlayColor: newOverlayColor,
                                                })
                                            }
                                        />
                                        <PanelBody
                                            title={__(
                                                "Margin & Padding",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={POPUP_MARGIN}
                                                baseLabel="Margin"
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={POPUP_PADDING}
                                                baseLabel="Padding"
                                            />
                                        </PanelBody>
                                        <PanelBody
                                            title={__(
                                                "Background ",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BackgroundControl
                                                controlName={POPUP_BACKGROUND}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        </PanelBody>
                                        <PanelBody
                                            title={__(
                                                "Border & Shadow",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BorderShadowControl
                                                controlName={POPUP_BORDER}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        </PanelBody>
                                        <PanelBody
                                            title={__(
                                                "Container Padding",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={CONTAINER_PADDING}
                                                baseLabel="Padding"
                                            />
                                        </PanelBody>
                                    </PanelBody>
                                    {displayCloseIcon && (
                                        <PanelBody
                                            title={__(
                                                "Close Button",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <>
                                                {!useCloseIcon && (
                                                    <TypographyDropdown
                                                        baseLabel={__(
                                                            "Typography",
                                                            "essential-blocks"
                                                        )}
                                                        typographyPrefixConstant={
                                                            typoPrefix_close
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    />
                                                )}
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={closeBtnColor}
                                                    onChange={(
                                                        newCloseBtnText
                                                    ) =>
                                                        setAttributes({
                                                            closeBtnColor: newCloseBtnText,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Hover Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={closeBtnHoverColor}
                                                    onChange={(
                                                        newCloseBtnHoverText
                                                    ) =>
                                                        setAttributes({
                                                            closeBtnHoverColor: newCloseBtnHoverText,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Background Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={closeBtnBackColor}
                                                    onChange={(
                                                        newCloseBtnBackText
                                                    ) =>
                                                        setAttributes({
                                                            closeBtnBackColor: newCloseBtnBackText,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Background Hover Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={
                                                        closeBtnBackHoverColor
                                                    }
                                                    onChange={(
                                                        newCloseBtnBackHoverText
                                                    ) =>
                                                        setAttributes({
                                                            closeBtnBackHoverColor: newCloseBtnBackHoverText,
                                                        })
                                                    }
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={CLOSE_PADDING}
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
                                                            CLOSE_BORDER
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        noShadow={true}
                                                    />
                                                </PanelBody>
                                            </>
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Margin & Padding",
                                            "essential-blocks"
                                        )}
                                    // initialOpen={true}
                                    >
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={wrapMarginConst}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={wrapPaddingConst}
                                            baseLabel="Padding"
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
};

export default Inspector;
