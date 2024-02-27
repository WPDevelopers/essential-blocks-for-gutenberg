/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ButtonGroup,
    Button,
    BaseControl,
    TextControl,
    TabPanel,
    ToggleControl,
} from "@wordpress/components";

/**
 * Internal Dependencies
 */
import {
    CONTENT_STYLES,
    HEADER_TAGS,
    BUTTON_SIZES,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    WRAPPER_BACK,
    WRAPPER_BORDER,
    BUTTON_BORDER,
    ICON_SIZE,
    BUTTON_PADDING,
    ICON_PADDING,
    DESC_PADDING,
    BUTTON_POSITION,
    HOVER_EFFECT,
} from "./constants";
import {
    typoPrefix_title,
    typoPrefix_subtitle,
    typoPrefix_desc,
    typoPrefix_btn,
} from "./typographyPrefixConstants";

import objAttributes from "./attributes";
import SortableLists from "./sortable-lists";

const {
    ColorControl,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BackgroundControl,
    BorderShadowControl,
    ResponsiveRangeController,
    AdvancedControls,
    EBIconPicker,
    DynamicInputControl
} = window.EBControls;

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        contentStyle,
        showIcon,
        icon,
        iconColor,
        title,
        titleTag,
        titleColor,
        showSubtitle,
        subtitle,
        subtitleColor,
        sortableLists,
        description,
        descriptionColor,
        showButton,
        buttonSize,
        buttonBackgroundColor,
        buttonTextColor,
        buttonHoverTextColor,
        buttonHoverBackgroundColor,
        buttonText,
        buttonURL,
        linkNewTab,
        buttonPosition,
        btnHoverEffect,
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
                                            "Content Settings",
                                            "essential-blocks"
                                        )}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Content Style",
                                                "essential-blocks"
                                            )}
                                            value={contentStyle}
                                            options={CONTENT_STYLES}
                                            onChange={(newStyle) =>
                                                setAttributes({
                                                    contentStyle: newStyle,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Show Subtitle",
                                                "essential-blocks"
                                            )}
                                            checked={showSubtitle}
                                            onChange={() =>
                                                setAttributes({
                                                    showSubtitle: !showSubtitle,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Show Icon",
                                                "essential-blocks"
                                            )}
                                            checked={showIcon}
                                            onChange={() =>
                                                setAttributes({
                                                    showIcon: !showIcon,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Show Button",
                                                "essential-blocks"
                                            )}
                                            checked={showButton}
                                            onChange={() =>
                                                setAttributes({
                                                    showButton: !showButton,
                                                })
                                            }
                                        />
                                        <DynamicInputControl
                                            label={__("Title", "essential-blocks")}
                                            attrName="title"
                                            inputValue={title}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ title: text })}
                                        />
                                        {showSubtitle && (
                                            <>
                                                <DynamicInputControl
                                                    label={__("Subtitle", "essential-blocks")}
                                                    attrName="subtitle"
                                                    inputValue={subtitle}
                                                    setAttributes={setAttributes}
                                                    onChange={(text) => setAttributes({ subtitle: text })}
                                                />
                                            </>
                                        )}
                                        <DynamicInputControl
                                            label={__("Description", "essential-blocks")}
                                            attrName="description"
                                            inputValue={description}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ description: text })}
                                            isTextarea={true}
                                        />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Sorting",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <SortableLists
                                            features={sortableLists}
                                            setAttributes={setAttributes}
                                        />
                                    </PanelBody>
                                    {showIcon && (
                                        <PanelBody
                                            title={__(
                                                "Icon Settings",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl>
                                                <EBIconPicker
                                                    value={icon}
                                                    onChange={(icon) =>
                                                        setAttributes({
                                                            icon,
                                                        })
                                                    }
                                                />
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
                                                min={0}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />
                                        </PanelBody>
                                    )}

                                    {showButton && (
                                        <PanelBody
                                            title={__(
                                                "Button Settings",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl
                                                label={__(
                                                    "Alignment",
                                                    "essential-blocks"
                                                )}
                                                id="eb-button-group-alignment"
                                            >
                                                <ButtonGroup id="eb-button-group-alignment">
                                                    {BUTTON_POSITION.map(
                                                        (item, index) => (
                                                            <Button
                                                                key={index}
                                                                isPrimary={
                                                                    buttonPosition ===
                                                                    item.value
                                                                }
                                                                isSecondary={
                                                                    buttonPosition !==
                                                                    item.value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            buttonPosition:
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
                                            <SelectControl
                                                label={__(
                                                    "Button Size",
                                                    "essential-blocks"
                                                )}
                                                value={buttonSize}
                                                options={BUTTON_SIZES}
                                                onChange={(newButtonSize) =>
                                                    setAttributes({
                                                        buttonSize: newButtonSize,
                                                    })
                                                }
                                            />
                                            {buttonSize === "custom" && (
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
                                            )}
                                            <DynamicInputControl
                                                label={__("Button Text", "essential-blocks")}
                                                attrName="buttonText"
                                                inputValue={buttonText}
                                                setAttributes={setAttributes}
                                                onChange={(text) => setAttributes({ buttonText: text })}
                                            />
                                            <DynamicInputControl
                                                label={__("Button Link", "essential-blocks")}
                                                attrName="buttonURL"
                                                inputValue={buttonURL}
                                                setAttributes={setAttributes}
                                                onChange={(text) => setAttributes({ buttonURL: text })}
                                                help={__(
                                                    "Use https or http",
                                                    "essential-blocks"
                                                )}
                                            />
                                            {buttonURL && (
                                                <ToggleControl
                                                    label={__(
                                                        "Open in New Tab",
                                                        "essential-blocks"
                                                    )}
                                                    checked={linkNewTab}
                                                    onChange={() =>
                                                        setAttributes({
                                                            linkNewTab: !linkNewTab,
                                                        })
                                                    }
                                                />
                                            )}

                                            <SelectControl
                                                label={__(
                                                    "Hover Effect",
                                                    "essential-blocks"
                                                )}
                                                value={btnHoverEffect}
                                                options={HOVER_EFFECT}
                                                onChange={(newHoverEffect) =>
                                                    setAttributes({
                                                        btnHoverEffect: newHoverEffect,
                                                    })
                                                }
                                            />
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Title", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Title Tag",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup>
                                                {HEADER_TAGS.map(
                                                    (header, index) => (
                                                        <Button
                                                            key={index}
                                                            isSecondary={
                                                                titleTag !==
                                                                header.value
                                                            }
                                                            isPrimary={
                                                                titleTag ===
                                                                header.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    titleTag:
                                                                        header.value,
                                                                })
                                                            }
                                                        >
                                                            {header.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={titleColor}
                                            onChange={(titleColor) =>
                                                setAttributes({ titleColor })
                                            }
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={TITLE_MARGIN}
                                            baseLabel={__(
                                                "Space",
                                                "essential-blocks"
                                            )}
                                        />
                                    </PanelBody>
                                    {showSubtitle && (
                                        <PanelBody
                                            title={__(
                                                "Subtitle",
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
                                                    typoPrefix_subtitle
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
                                                color={subtitleColor}
                                                onChange={(subtitleColor) =>
                                                    setAttributes({
                                                        subtitleColor,
                                                    })
                                                }
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={SUBTITLE_MARGIN}
                                                baseLabel={__(
                                                    "Space",
                                                    "essential-blocks"
                                                )}
                                            />
                                        </PanelBody>
                                    )}
                                    <PanelBody
                                        title={__(
                                            "Description",
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
                                                typoPrefix_desc
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={descriptionColor}
                                            onChange={(descriptionColor) =>
                                                setAttributes({
                                                    descriptionColor,
                                                })
                                            }
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={DESC_PADDING}
                                            baseLabel={__(
                                                "Space",
                                                "essential-blocks"
                                            )}
                                        />
                                    </PanelBody>
                                    {showIcon && (
                                        <PanelBody
                                            title={__(
                                                "Icon",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <ColorControl
                                                label={__(
                                                    "Icon Color",
                                                    "essential-blocks"
                                                )}
                                                color={iconColor}
                                                onChange={(iconColor) =>
                                                    setAttributes({ iconColor })
                                                }
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={ICON_PADDING}
                                                baseLabel={__(
                                                    "Space",
                                                    "essential-blocks"
                                                )}
                                            />
                                        </PanelBody>
                                    )}
                                    {showButton && (
                                        <PanelBody
                                            title={__(
                                                "Button",
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
                                                    typoPrefix_btn
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Button Text Color",
                                                    "essential-blocks"
                                                )}
                                                color={buttonTextColor}
                                                onChange={(buttonTextColor) =>
                                                    setAttributes({
                                                        buttonTextColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Button Hover Text Color",
                                                    "essential-blocks"
                                                )}
                                                color={buttonHoverTextColor}
                                                onChange={(
                                                    buttonHoverTextColor
                                                ) =>
                                                    setAttributes({
                                                        buttonHoverTextColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Button Background",
                                                    "essential-blocks"
                                                )}
                                                color={buttonBackgroundColor}
                                                onChange={(
                                                    buttonBackgroundColor
                                                ) =>
                                                    setAttributes({
                                                        buttonBackgroundColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Button Hover Background",
                                                    "essential-blocks"
                                                )}
                                                color={
                                                    buttonHoverBackgroundColor
                                                }
                                                onChange={(
                                                    buttonHoverBackgroundColor
                                                ) =>
                                                    setAttributes({
                                                        buttonHoverBackgroundColor,
                                                    })
                                                }
                                            />
                                            <BaseControl>
                                                <h3 className="eb-control-title">
                                                    {__(
                                                        "Border",
                                                        "essential-blocks"
                                                    )}
                                                </h3>
                                            </BaseControl>
                                            <BorderShadowControl
                                                controlName={BUTTON_BORDER}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_MARGIN}
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_PADDING}
                                            baseLabel={__(
                                                "Padding",
                                                "essential-blocks"
                                            )}
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
                                            controlName={WRAPPER_BACK}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Border", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={WRAPPER_BORDER}
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
};

export default Inspector;
