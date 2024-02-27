/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
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
} from "../../../../blocks/popup/src/constants";

const {
    faIcons: iconList,
    ColorControl,
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    BorderShadowControl,
    BackgroundControl,
    EBIconPicker
} = window.EBControls;

import objAttributes from "../../../../blocks/popup/src/attributes";

import {
    typoPrefix_text,
    typoPrefix_close,
} from "../../../../blocks/popup/src/constants/typographyPrefixConstants";

function Popup(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
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
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                trigger: "btn_click",
                btnType: "button",
                btnText: "Open Popup",
                iconPosition: "left",
                btnAlignment: "center",
                triggerIcon: "fas fa-bullhorn",
                displayCloseIcon: true,
                escToExit: true,
                clickToExit: true,
                autoExit: false,
                autoExitTime: "3",
                autoHeight: true,
                position: "middle_center",
                pageLoadDelay: "1",
                eleIdentifier: "#open-popup",
                popupFullWidth: false,
                useCloseIcon: false,
                closeBtnText: "X",
                useCookies: true,
                cookieExpireTime: "",
                [`${wrapMarginConst}Unit`]: "px",
                [`${wrapMarginConst}isLinked`]: true,
                [`${wrapPaddingConst}Unit`]: "px",
                [`${wrapPaddingConst}isLinked`]: true,
                [`${CLOSE_PADDING}Unit`]: "px",
                [`${CLOSE_PADDING}isLinked`]: true,
                [`${CLOSE_BORDER}Bdr_Unit`]: "px",
                [`${CLOSE_BORDER}Bdr_isLinked`]: true,
                [`${CLOSE_BORDER}Rds_Unit`]: "px",
                [`${CLOSE_BORDER}Rds_isLinked`]: true,
                [`${CLOSE_BORDER}BorderType`]: "normal",
                [`${CLOSE_BORDER}shadowType`]: "normal",
                [`${POPUP_MARGIN}Unit`]: "px",
                [`${POPUP_MARGIN}isLinked`]: true,
                [`${POPUP_PADDING}Unit`]: "px",
                [`${POPUP_PADDING}isLinked`]: true,
                [`${POPUP_BORDER}Bdr_Unit`]: "px",
                [`${POPUP_BORDER}Bdr_isLinked`]: true,
                [`${POPUP_BORDER}Rds_Unit`]: "px",
                [`${POPUP_BORDER}Rds_isLinked`]: true,
                [`${POPUP_BORDER}BorderType`]: "normal",
                [`${POPUP_BORDER}shadowType`]: "normal",
                [`${CONTAINER_PADDING}Unit`]: "px",
                [`${CONTAINER_PADDING}isLinked`]: true,
                [`${BUTTON_PADDING}Unit`]: "px",
                [`${BUTTON_PADDING}isLinked`]: true,
                [`${BUTTON_BORDER}Bdr_Unit`]: "px",
                [`${BUTTON_BORDER}Bdr_isLinked`]: true,
                [`${BUTTON_BORDER}Rds_Unit`]: "px",
                [`${BUTTON_BORDER}Rds_isLinked`]: true,
                [`${BUTTON_BORDER}BorderType`]: "normal",
                [`${BUTTON_BORDER}shadowType`]: "normal",
                [`${POPUP_WIDTH}Unit`]: "px",
                [`${POPUP_HEIGHT}Unit`]: "px",
                [`${CLOSE_BTN_TOP}Unit`]: "px",
                [`${CLOSE_BTN_TOP}Range`]: 10,
                [`${CLOSE_BTN_RIGHT}Unit`]: "px",
                [`${CLOSE_BTN_RIGHT}Range`]: 10,
                [`${CLOSE_BTN_LEFT}Unit`]: "px",
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
                    <PanelBody title={__("Settings", "essential-blocks")}>
                        <SelectControl
                            label={__("Trigger", "essential-blocks")}
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
                                    label: __("Page Load", "essential-blocks"),
                                    value: "page_load",
                                },
                                {
                                    label: __(
                                        "External Element",
                                        "essential-blocks"
                                    ),
                                    value: "external",
                                },
                            ]}
                            onChange={(newTrigger) =>
                                handleBlockDefault({ trigger: newTrigger })
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
                                        label={__("Type", "essential-blocks")}
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
                                        onChange={(newBtnType) =>
                                            handleBlockDefault({
                                                btnType: newBtnType,
                                            })
                                        }
                                    />
                                </BaseControl>
                                {"button" === btnType && (
                                    <>
                                        <TextControl
                                            label={__(
                                                "Button Text",
                                                "essential-blocks"
                                            )}
                                            value={btnText}
                                            onChange={(newBtnText) =>
                                                handleBlockDefault({
                                                    btnText: newBtnText,
                                                })
                                            }
                                        />
                                        <EBIconPicker
                                            value={btnIcon}
                                            onChange={(btnIcon) =>
                                                handleBlockDefault({
                                                    btnIcon,
                                                })
                                            }
                                            title={__("Select Icon", "essential-blocks")}
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
                                                    (item, key) => (
                                                        <Button
                                                            key={key}
                                                            isSecondary={
                                                                iconPosition !==
                                                                item.value
                                                            }
                                                            isPrimary={
                                                                iconPosition ===
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                handleBlockDefault(
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
                                    </>
                                )}
                                {"icon" === btnType && (
                                    <>
                                        <EBIconPicker
                                            value={triggerIcon}
                                            onChange={(triggerIcon) =>
                                                handleBlockDefault({
                                                    triggerIcon,
                                                })
                                            }
                                            title={__("Trigger Icon", "essential-blocks")}
                                        />
                                    </>
                                )}
                                <BaseControl
                                    label={__("Alignment ", "essential-blocks")}
                                    id="eb-popup-button-alignment"
                                >
                                    <ButtonGroup>
                                        {BUTTON_ALIGNMENT.map((item, key) => (
                                            <Button
                                                key={key}
                                                isSecondary={
                                                    btnAlignment !== item.value
                                                }
                                                isPrimary={
                                                    btnAlignment === item.value
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
                                        ))}
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
                                    onChange={(newPageLoadDelay) =>
                                        handleBlockDefault({
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
                                        handleBlockDefault({
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
                                        onChange={(newCookieExpireTime) =>
                                            handleBlockDefault({
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
                                    label={__("Identifier", "essential-blocks")}
                                    value={eleIdentifier}
                                    onChange={(newEleIdentifier) =>
                                        handleBlockDefault({
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
                        <Divider />
                        <BaseControl>
                            <h3>{__("Exit Settings", "essential-blocks")}</h3>
                        </BaseControl>
                        <ToggleControl
                            label={__("Show Close Button", "essential-blocks")}
                            checked={displayCloseIcon}
                            onChange={() =>
                                handleBlockDefault({
                                    displayCloseIcon: !displayCloseIcon,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Esc to Exit", "essential-blocks")}
                            checked={escToExit}
                            onChange={() =>
                                handleBlockDefault({ escToExit: !escToExit })
                            }
                            help={__(
                                "Close the modal box by pressing the Esc key",
                                "essential-blocks"
                            )}
                        />
                        <ToggleControl
                            label={__("Click to Exit", "essential-blocks")}
                            checked={clickToExit}
                            onChange={() =>
                                handleBlockDefault({
                                    clickToExit: !clickToExit,
                                })
                            }
                            help={__(
                                "Close the modal box by clicking anywhere outside the modal window",
                                "essential-blocks"
                            )}
                        />
                        <ToggleControl
                            label={__("Auto Exit", "essential-blocks")}
                            checked={autoExit}
                            onChange={() =>
                                handleBlockDefault({ autoExit: !autoExit })
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
                                    handleBlockDefault({
                                        autoExitTime: newAutoExitTime,
                                    })
                                }
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Size & Position", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Full Width", "essential-blocks")}
                            checked={popupFullWidth}
                            onChange={() =>
                                handleBlockDefault({
                                    popupFullWidth: !popupFullWidth,
                                })
                            }
                        />
                        {!popupFullWidth && (
                            <>
                                <ResponsiveRangeController
                                    baseLabel={__("Width", "essential-blocks")}
                                    controlName={POPUP_WIDTH}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={1920}
                                    step={1}
                                />
                            </>
                        )}

                        <ToggleControl
                            label={__("Auto Height", "essential-blocks")}
                            checked={autoHeight}
                            onChange={() =>
                                handleBlockDefault({ autoHeight: !autoHeight })
                            }
                        />
                        {!autoHeight && (
                            <>
                                <ResponsiveRangeController
                                    baseLabel={__("Height", "essential-blocks")}
                                    controlName={POPUP_HEIGHT}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={1000}
                                    step={1}
                                />
                            </>
                        )}
                        <SelectControl
                            label={__("Position", "essential-blocks")}
                            value={position}
                            options={[
                                {
                                    label: __("Top Left", "essential-blocks"),
                                    value: "top_left",
                                },
                                {
                                    label: __("Top Center", "essential-blocks"),
                                    value: "top_center",
                                },
                                {
                                    label: __("Top Right", "essential-blocks"),
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
                                handleBlockDefault({ position: newPosition })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Close Button", "essential-blocks")}
                        initialOpen={false}
                    >
                        <>
                            <ToggleControl
                                label={__("Use close Icon", "essential-blocks")}
                                checked={useCloseIcon}
                                onChange={() =>
                                    handleBlockDefault({
                                        useCloseIcon: !useCloseIcon,
                                    })
                                }
                            />
                            {!useCloseIcon && (
                                <TextControl
                                    label={__("Text", "essential-blocks")}
                                    value={closeBtnText}
                                    onChange={(newCloseBtnText) =>
                                        handleBlockDefault({
                                            closeBtnText: newCloseBtnText,
                                        })
                                    }
                                />
                            )}
                            <Divider />
                            <BaseControl>
                                <h3>
                                    {__("Icon Position", "essential-blocks")}
                                </h3>
                            </BaseControl>
                            <ResponsiveRangeController
                                baseLabel={__("Top", "essential-blocks")}
                                controlName={CLOSE_BTN_TOP}
                                resRequiredProps={resRequiredProps}
                                min={-500}
                                max={500}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Right", "essential-blocks")}
                                controlName={CLOSE_BTN_RIGHT}
                                resRequiredProps={resRequiredProps}
                                min={-500}
                                max={500}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Left", "essential-blocks")}
                                controlName={CLOSE_BTN_LEFT}
                                resRequiredProps={resRequiredProps}
                                min={-500}
                                max={500}
                                step={1}
                            />
                        </>
                    </PanelBody>
                    {"btn_click" == trigger && (
                        <PanelBody
                            title={__("Button/Icon Styles", "essential-blocks")}
                            initialOpen={false}
                        >
                            <>
                                <TypographyDropdown
                                    baseLabel={__(
                                        "Typography",
                                        "essential-blocks"
                                    )}
                                    typographyPrefixConstant={typoPrefix_text}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={btnTextColor}
                                    onChange={(newTextColor) =>
                                        handleBlockDefault({
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
                                    onChange={(newHoverTextColor) =>
                                        handleBlockDefault({
                                            btnHoverTextColor: newHoverTextColor,
                                        })
                                    }
                                />
                                <Divider />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={BUTTON_PADDING}
                                    baseLabel={__(
                                        "Padding",
                                        "essential-blocks"
                                    )}
                                />
                                <PanelBody
                                    title={__("Background", "essential-blocks")}
                                    initialOpen={false}
                                >
                                    <BackgroundControl
                                        controlName={BUTTON_BACKGROUND}
                                        resRequiredProps={resRequiredProps}
                                        noOverlay={true}
                                        noMainBgi={true}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__("Border", "essential-blocks")}
                                    initialOpen={false}
                                >
                                    <BorderShadowControl
                                        controlName={BUTTON_BORDER}
                                        resRequiredProps={resRequiredProps}
                                    />
                                </PanelBody>
                            </>
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Popup Design", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ColorControl
                            label={__("Overlay Color", "essential-blocks")}
                            color={overlayColor}
                            onChange={(newOverlayColor) =>
                                handleBlockDefault({
                                    overlayColor: newOverlayColor,
                                })
                            }
                        />
                        <PanelBody
                            title={__("Margin & Padding", "essential-blocks")}
                            initialOpen={false}
                        >
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={POPUP_MARGIN}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={POPUP_PADDING}
                                baseLabel="Padding"
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Background ", "essential-blocks")}
                            initialOpen={false}
                        >
                            <BackgroundControl
                                controlName={POPUP_BACKGROUND}
                                resRequiredProps={resRequiredProps}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Border & Shadow", "essential-blocks")}
                            initialOpen={false}
                        >
                            <BorderShadowControl
                                controlName={POPUP_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Container Padding", "essential-blocks")}
                            initialOpen={false}
                        >
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={CONTAINER_PADDING}
                                baseLabel="Padding"
                            />
                        </PanelBody>
                    </PanelBody>
                    {displayCloseIcon && (
                        <PanelBody
                            title={__(
                                "Close Button Settings",
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
                                        resRequiredProps={resRequiredProps}
                                    />
                                )}
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={closeBtnColor}
                                    onChange={(newCloseBtnText) =>
                                        handleBlockDefault({
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
                                    onChange={(newCloseBtnHoverText) =>
                                        handleBlockDefault({
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
                                    onChange={(newCloseBtnBackText) =>
                                        handleBlockDefault({
                                            closeBtnBackColor: newCloseBtnBackText,
                                        })
                                    }
                                />
                                <ColorControl
                                    label={__(
                                        "Background Hover Color",
                                        "essential-blocks"
                                    )}
                                    color={closeBtnBackHoverColor}
                                    onChange={(newCloseBtnBackHoverText) =>
                                        handleBlockDefault({
                                            closeBtnBackHoverColor: newCloseBtnBackHoverText,
                                        })
                                    }
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={CLOSE_PADDING}
                                    baseLabel={__(
                                        "Padding",
                                        "essential-blocks"
                                    )}
                                />
                                <PanelBody
                                    title={__("Border", "essential-blocks")}
                                    initialOpen={false}
                                >
                                    <BorderShadowControl
                                        controlName={CLOSE_BORDER}
                                        resRequiredProps={resRequiredProps}
                                        noShadow={true}
                                    />
                                </PanelBody>
                            </>
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Margin & Padding", "essential-blocks")}
                        initialOpen={false}
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
                </div>
            )}
        </>
    );
}

export default Popup;
