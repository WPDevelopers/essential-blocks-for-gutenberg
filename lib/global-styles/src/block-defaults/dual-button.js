/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    Button,
    ButtonGroup,
    BaseControl,
} from "@wordpress/components";

const {
    ColorControl,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    EBIconPicker
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    NORMAL_HOVER,
    UNIT_TYPES,
    BUTTON_ONE_BACKGROUND,
    BUTTON_TWO_BACKGROUND,
    BUTTON_ONE_BORDER_SHADOW,
    BUTTON_TWO_BORDER_SHADOW,
    WRAPPER_MARGIN,
    BUTTONS_PADDING,
    BUTTONS_WIDTH,
    BUTTONS_GAP,
    CONNECTOR_TYPE,
    BUTTONS_CONNECTOR_SIZE,
    TEXT_ALIGN,
    CONTENT_POSITION,
    BUTTONS_CONNECTOR_ICON_SIZE,
    BUTTON_WIDTH_TYPE,
    BUTTONS_MARGIN,
} from "../../../../blocks/dual-button/src/constants/constants";

import {
    BUTTONS_TYPOGRAPHY,
    BUTTONS_CONNECTOR_TYPOGRAPHY,
} from "../../../../blocks/dual-button/src/constants/typographyPrefixConstants";

import objAttributes from "../../../../blocks/dual-button/src/attributes";

function DualButton(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        contentPosition,
        textOneColor,
        hoverTextOneColor,
        textTwoColor,
        hoverTextTwoColor,
        buttonTextOne,
        buttonURLOne,
        buttonTextTwo,
        buttonURLTwo,
        innerButtonText,
        innerButtonColor,
        innerButtonTextColor,
        innerButtonIcon,
        showConnector,
        connectorType,
        buttonsColorType,
        buttonTextAlign,
        buttonsWidthType,
        buttonOneNewWindow,
        buttonTwoNewWindow,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                contentPosition: "center",
                buttonWidth: "auto",
                buttonTextOne: "Button One",
                buttonTextTwo: "Button Two",
                buttonOneColor: "#7967ff",
                hoverButtonOneColor: "#513fd4",
                textOneColor: "var(--eb-global-button-text-color)",
                hoverTextOneColor: "var(--eb-global-button-text-color)",
                buttonTwoColor: "#309bff",
                hoverButtonTwoColor: "#2587e2",
                textTwoColor: "var(--eb-global-button-text-color)",
                hoverTextTwoColor: "var(--eb-global-button-text-color)",
                buttonURLOne: "#",
                buttonURLTwo: "#",
                buttonTextAlign: "center",
                isHoverOne: false,
                isHoverTwo: false,
                innerButtonText: "OR",
                innerButtonColor: "#fff",
                innerButtonTextColor: "#000",
                innerButtonIcon: "",
                showConnector: true,
                connectorType: "text",
                borderType: "normal",
                buttonsColorType: "normal",
                buttonsWidthType: "custom",
                buttonOneNewWindow: false,
                buttonTwoNewWindow: false,

                [`${BUTTONS_WIDTH}Unit`]: "px",
                [`${BUTTONS_GAP}Unit`]: "px",
                [`${BUTTONS_CONNECTOR_SIZE}Unit`]: "px",
                [`${BUTTONS_CONNECTOR_ICON_SIZE}Unit`]: "px",

                [`${BUTTONS_PADDING}Top`]: 10,
                [`${BUTTONS_PADDING}Right`]: 25,
                [`${BUTTONS_PADDING}Bottom`]: 10,
                [`${BUTTONS_PADDING}Left`]: 25,
                [`${BUTTONS_PADDING}Unit`]: "px",
                [`${BUTTONS_PADDING}isLinked`]: false,

                [`${BUTTONS_MARGIN}Unit`]: "px",
                [`${BUTTONS_MARGIN}isLinked`]: true,

                [`${BUTTON_ONE_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${BUTTON_ONE_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${BUTTON_ONE_BORDER_SHADOW}Rds_Top`]: 20,
                [`${BUTTON_ONE_BORDER_SHADOW}Rds_Right`]: 0,
                [`${BUTTON_ONE_BORDER_SHADOW}Rds_Bottom`]: 0,
                [`${BUTTON_ONE_BORDER_SHADOW}Rds_Left`]: 20,
                [`${BUTTON_ONE_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${BUTTON_ONE_BORDER_SHADOW}Rds_isLinked`]: false,
                [`${BUTTON_ONE_BORDER_SHADOW}BorderType`]: "normal",
                [`${BUTTON_ONE_BORDER_SHADOW}shadowType`]: "normal",

                [`${BUTTON_TWO_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${BUTTON_TWO_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${BUTTON_TWO_BORDER_SHADOW}Rds_Top`]: 0,
                [`${BUTTON_TWO_BORDER_SHADOW}Rds_Right`]: 20,
                [`${BUTTON_TWO_BORDER_SHADOW}Rds_Bottom`]: 20,
                [`${BUTTON_TWO_BORDER_SHADOW}Rds_Left`]: 0,
                [`${BUTTON_TWO_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${BUTTON_TWO_BORDER_SHADOW}Rds_isLinked`]: false,
                [`${BUTTON_TWO_BORDER_SHADOW}BorderType`]: "normal",
                [`${BUTTON_TWO_BORDER_SHADOW}shadowType`]: "normal",

                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: true,
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
                    {/*  General */}
                    <PanelBody title={__("General", "essential-blocks")} initialOpen={true}>
                        <BaseControl label={__("Alignment", "essential-blocks")} id="eb-button-group-alignment">
                            <ButtonGroup id="eb-button-group-alignment">
                                {CONTENT_POSITION.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={contentPosition === item.value}
                                        isSecondary={contentPosition !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                contentPosition: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <TextControl
                            label={__("Button One Text", "essential-blocks")}
                            value={buttonTextOne}
                            onChange={(text) => handleBlockDefault({ buttonTextOne: text })}
                        />

                        {buttonURLOne && (
                            <ToggleControl
                                label={__("Open in New Tab", "essential-blocks")}
                                checked={buttonOneNewWindow}
                                onChange={() =>
                                    handleBlockDefault({
                                        buttonOneNewWindow: !buttonOneNewWindow,
                                    })
                                }
                            />
                        )}

                        <TextControl
                            label={__("Button Two Text", "essential-blocks")}
                            value={buttonTextTwo}
                            onChange={(text) => handleBlockDefault({ buttonTextTwo: text })}
                        />

                        {buttonURLTwo && (
                            <ToggleControl
                                label={__("Open in New Tab", "essential-blocks")}
                                checked={buttonTwoNewWindow}
                                onChange={() =>
                                    handleBlockDefault({
                                        buttonTwoNewWindow: !buttonTwoNewWindow,
                                    })
                                }
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__("Buttons Settings", "essential-blocks")} initialOpen={true}>
                        <BaseControl label={__("Button Width Type", "essential-blocks")}>
                            <SelectControl
                                value={buttonsWidthType}
                                options={BUTTON_WIDTH_TYPE}
                                onChange={(value) => {
                                    handleBlockDefault({
                                        buttonsWidthType: value,
                                    });
                                }}
                            />
                        </BaseControl>
                        {buttonsWidthType === "custom" && (
                            <ResponsiveRangeController
                                baseLabel={__("Buttons Width", "essential-blocks")}
                                controlName={BUTTONS_WIDTH}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={0}
                                max={500}
                                step={1}
                            />
                        )}

                        <ResponsiveRangeController
                            baseLabel={__("Buttons Gap", "essential-blocks")}
                            controlName={BUTTONS_GAP}
                            resRequiredProps={resRequiredProps}
                            units={UNIT_TYPES}
                            min={0}
                            max={100}
                            step={1}
                        />

                        <BaseControl label={__("Text Align", "essential-blocks")} id="eb-button-group-text-align">
                            <ButtonGroup id="eb-button-group-text-align">
                                {TEXT_ALIGN.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={buttonTextAlign === item.value}
                                        isSecondary={buttonTextAlign !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                buttonTextAlign: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                    </PanelBody>
                    <PanelBody title={__("Connector Settings", "essential-blocks")} initialOpen={true}>
                        <ToggleControl
                            label={__("Show Connector?")}
                            checked={showConnector}
                            onChange={() => {
                                handleBlockDefault({
                                    showConnector: !showConnector,
                                });
                            }}
                        />
                        {showConnector && (
                            <>
                                <BaseControl label={__("Connector Type", "essential-blocks")}>
                                    <ButtonGroup id="eb-button-group-connector-type">
                                        {CONNECTOR_TYPE.map((item, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={connectorType === item.value}
                                                isSecondary={connectorType !== item.value}
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        connectorType: item.value,
                                                    })
                                                }
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {connectorType === "icon" && (
                                    <PanelBody title={__("Icon Settings", "essential-blocks")} initialOpen={true}>
                                        <EBIconPicker
                                            value={innerButtonIcon}
                                            onChange={(icon) =>
                                                handleBlockDefault({
                                                    innerButtonIcon: icon,
                                                })
                                            }
                                            title={__("Icon", "essential-blocks")}
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__("Icon Size", "essential-blocks")}
                                            controlName={BUTTONS_CONNECTOR_ICON_SIZE}
                                            resRequiredProps={resRequiredProps}
                                            units={UNIT_TYPES}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </PanelBody>
                                )}

                                {connectorType === "text" && (
                                    <TextControl
                                        label={__("Text", "essential-blocks")}
                                        value={innerButtonText}
                                        onChange={(text) =>
                                            handleBlockDefault({
                                                innerButtonText: text,
                                            })
                                        }
                                    />
                                )}

                                <ResponsiveRangeController
                                    baseLabel={__("Connector Size", "essential-blocks")}
                                    controlName={BUTTONS_CONNECTOR_SIZE}
                                    resRequiredProps={resRequiredProps}
                                    units={UNIT_TYPES}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </>
                        )}
                    </PanelBody>
                    {/*  styles */}
                    <PanelBody title={__("Buttons Styles", "essential-blocks")} initialOpen={true}>
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={BUTTONS_TYPOGRAPHY}
                            resRequiredProps={resRequiredProps}
                        />

                        <BaseControl>
                            <h3 className="eb-control-title">{__("Button One Background", "essential-blocks")}</h3>
                        </BaseControl>
                        <BackgroundControl
                            controlName={BUTTON_ONE_BACKGROUND}
                            resRequiredProps={resRequiredProps}
                            noOverlay={true}
                            noMainBgi={true}
                        />

                        <BaseControl>
                            <h3 className="eb-control-title">{__("Button Two Background", "essential-blocks")}</h3>
                        </BaseControl>
                        <BackgroundControl
                            controlName={BUTTON_TWO_BACKGROUND}
                            resRequiredProps={resRequiredProps}
                            noOverlay={true}
                            noMainBgi={true}
                        />

                        <BaseControl>
                            <h3 className="eb-control-title">{__("Text Color", "essential-blocks")}</h3>
                        </BaseControl>

                        <ButtonGroup className="eb-inspector-btn-group">
                            {NORMAL_HOVER.map((item, index) => (
                                <Button
                                    key={index}
                                    isPrimary={buttonsColorType === item.value}
                                    isSecondary={buttonsColorType !== item.value}
                                    onClick={() =>
                                        handleBlockDefault({
                                            buttonsColorType: item.value,
                                        })
                                    }
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>

                        {buttonsColorType === "normal" && (
                            <>
                                <ColorControl
                                    label={__("Button One", "essential-blocks")}
                                    color={textOneColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            textOneColor: newColor,
                                        })
                                    }
                                />
                                <ColorControl
                                    label={__("Button Two", "essential-blocks")}
                                    color={textTwoColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            textTwoColor: newColor,
                                        })
                                    }
                                />
                            </>
                        )}

                        {buttonsColorType === "hover" && (
                            <>
                                <ColorControl
                                    label={__("Button One Hover", "essential-blocks")}
                                    color={hoverTextOneColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            hoverTextOneColor: newColor,
                                        })
                                    }
                                />
                                <ColorControl
                                    label={__("Button Two Hover", "essential-blocks")}
                                    color={hoverTextTwoColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            hoverTextTwoColor: newColor,
                                        })
                                    }
                                />
                            </>
                        )}

                        <PanelBody
                            className={"eb-subpanel"}
                            title={__("Button One Border", "essential-blocks")}
                            initialOpen={true}
                        >
                            <BorderShadowControl
                                controlName={BUTTON_ONE_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                                noShadow
                            />
                        </PanelBody>

                        <PanelBody
                            className={"eb-subpanel"}
                            title={__("Button Two Border", "essential-blocks")}
                            initialOpen={true}
                        >
                            <BorderShadowControl
                                controlName={BUTTON_TWO_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                                noShadow
                            />
                        </PanelBody>

                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={BUTTONS_PADDING}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody title={__("Connector Styles", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={BUTTONS_CONNECTOR_TYPOGRAPHY}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Background Color", "essential-blocks")}
                            color={innerButtonColor}
                            onChange={(innerButtonColor) => handleBlockDefault({ innerButtonColor })}
                        />

                        <ColorControl
                            label={__("Text/ Icon Color")}
                            color={innerButtonTextColor}
                            onChange={(innerButtonTextColor) => handleBlockDefault({ innerButtonTextColor })}
                        />
                    </PanelBody>
                    {/*  advance */}
                    <PanelBody title={__("Wrapper Margin", "essential-blocks")} initialOpen={true}>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={WRAPPER_MARGIN}
                            baseLabel="Margin"
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default DualButton;
