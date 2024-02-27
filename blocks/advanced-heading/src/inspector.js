/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
} from "@wordpress/components";
import { applyFilters } from "@wordpress/hooks";

/**
 * Internal depencencies
 */
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    SEPARATOR_MARGIN,
    SEPARATOR_LINE_SIZE,
    SEPARATOR_ICON_SIZE,
    SEPARATOR_WIDTH,
    SEPARATOR_POSITION,
    UNIT_TYPES,
    SEPARATOR_UNIT_TYPES,
    PRESETS,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    SEPARATOR_TYPE,
} from "./constants/constants";
import { TITLE_TYPOGRAPHY, SUBTITLE_TYPOGRAPHY } from "./constants/typographyPrefixConstants";
const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    AdvancedControls,
    DynamicInputControl,
    ColorControl,
    EBIconPicker
} = window.EBControls;

import objAttributes from "./attributes";

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resOption,
        preset,
        align,
        tagName,
        titleText,
        subtitleTagName,
        subtitleText,
        displaySubtitle,
        displaySeperator,
        titleColor,
        titleHoverColor,
        subtitleColor,
        subtitleHoverColor,
        subtitleColorType,
        separatorColor,
        separatorHoverColor,
        separatorColorType,
        seperatorPosition,
        seperatorType,
        seperatorStyle,
        separatorIcon,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const changePreset = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case "preset-0":
                setAttributes({
                    displaySubtitle: false,
                    displaySeperator: false,
                    align: "left",
                    titleColor: "#551ef7",
                    subtitleColor: "#555555",
                    separatorColor: "#551ef7",
                    seperatorType: "line",
                    wrpPaddingisLinked: true,
                    wrpPaddingUnit: "px",
                    wrpPaddingTop: "0",
                    wrpPaddingBottom: "0",
                    wrpPaddingLeft: "0",
                    wrpPaddingRight: "0",
                    wrprBgbackgroundColor: "rgba(255,255,255,1)",
                    wrprBgbackgroundType: "classic",
                });
                break;
            case "preset-1":
                setAttributes({
                    displaySubtitle: true,
                    displaySeperator: true,
                    align: "left",
                    titleColor: "#551ef7",
                    subtitleColor: "#555555",
                    separatorColor: "#551ef7",
                    seperatorType: "line",
                    wrpPaddingisLinked: false,
                    wrpPaddingUnit: "px",
                    wrpPaddingTop: "0",
                    wrpPaddingBottom: "0",
                    wrpPaddingLeft: "0",
                    wrpPaddingRight: "0",
                    wrprBgbackgroundColor: "rgba(255,255,255,1)",
                    wrprBgbackgroundType: "classic",
                });
                break;
            case "preset-2":
                setAttributes({
                    displaySubtitle: true,
                    displaySeperator: true,
                    align: "center",
                    titleColor: "#551ef7",
                    subtitleColor: "#555555",
                    separatorColor: "#551ef7",
                    seperatorType: "icon",
                    separatorIcon: "fas fa-bullhorn",
                    wrpPaddingisLinked: false,
                    wrpPaddingUnit: "px",
                    wrpPaddingTop: "0",
                    wrpPaddingBottom: "0",
                    wrpPaddingLeft: "0",
                    wrpPaddingRight: "0",
                    wrprBgbackgroundColor: "rgba(255,255,255,1)",
                    wrprBgbackgroundType: "classic",
                });
                break;
            case "preset-3":
                setAttributes({
                    displaySubtitle: true,
                    displaySeperator: true,
                    align: "center",
                    titleColor: "#551ef7",
                    subtitleColor: "#9b51e0",
                    separatorColor: "#551ef7",
                    seperatorType: "icon",
                    separatorIcon: "fas fa-exchange-alt",
                    wrpPaddingisLinked: false,
                    wrpPaddingUnit: "px",
                    wrpPaddingTop: "30",
                    wrpPaddingBottom: "30",
                    wrpPaddingLeft: "15",
                    wrpPaddingRight: "15",
                    wrprBgbackgroundColor: "rgba(206,190,255,1)",
                    wrprBgbackgroundType: "classic",
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
                        <div className={"eb-tab-controls" + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody title={__("General", "essential-blocks")} initialOpen={true}>
                                        <SelectControl
                                            label={__("Preset Designs", "essential-blocks")}
                                            value={preset}
                                            options={applyFilters("eb_advanced_heading_preset", PRESETS)}
                                            onChange={(selected) => changePreset(selected)}
                                        />

                                        <BaseControl
                                            label={__("Alignment", "essential-blocks")}
                                            id="eb-advance-heading-alignment"
                                        >
                                            <ButtonGroup id="eb-advance-heading-alignment">
                                                {TEXT_ALIGN.map((item, key) => (
                                                    <Button
                                                        key={key}
                                                        // isLarge
                                                        isPrimary={align === item.value}
                                                        isSecondary={align !== item.value}
                                                        onClick={() =>
                                                            setAttributes({
                                                                align: item.value,
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <BaseControl
                                            label={__("Title Level", "essential-blocks")}
                                            id="eb-advance-heading-alignment"
                                        >
                                            <ButtonGroup className="eb-advance-heading-alignment eb-html-tag-buttongroup">
                                                {HEADING.map((item, key) => (
                                                    <Button
                                                        key={key}
                                                        // isLarge
                                                        isPrimary={tagName === item.value}
                                                        isSecondary={tagName !== item.value}
                                                        onClick={() => setAttributes({ tagName: item.value })}
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <DynamicInputControl
                                            label="Title Text"
                                            attrName="titleText"
                                            inputValue={titleText}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ titleText: text })}
                                        />
                                        <ToggleControl
                                            label={__("Display Subtilte", "essential-blocks")}
                                            checked={displaySubtitle}
                                            onChange={() => setAttributes({ displaySubtitle: !displaySubtitle })}
                                        />
                                        {displaySubtitle && (
                                            <>
                                                <BaseControl
                                                    label={__("Subtitle Level", "essential-blocks")}
                                                    id="eb-advance-heading-alignment"
                                                >
                                                    <ButtonGroup className="eb-advance-heading-alignment eb-html-tag-buttongroup">
                                                        {HEADING.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                // isLarge
                                                                isPrimary={subtitleTagName === item.value}
                                                                isSecondary={subtitleTagName !== item.value}
                                                                onClick={() =>
                                                                    setAttributes({ subtitleTagName: item.value })
                                                                }
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>
                                                <DynamicInputControl
                                                    label="Subtitle Text"
                                                    attrName="subtitleText"
                                                    inputValue={subtitleText}
                                                    setAttributes={setAttributes}
                                                    onChange={(text) => setAttributes({ subtitleText: text })}
                                                />
                                            </>
                                        )}
                                        <ToggleControl
                                            label={__("Display Separator", "essential-blocks")}
                                            checked={displaySeperator}
                                            onChange={() => setAttributes({ displaySeperator: !displaySeperator })}
                                        />
                                    </PanelBody>
                                </>
                            )}

                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Title", "essential-blocks")} initialOpen={true}>
                                        <TypographyDropdown
                                            baseLabel={__("Typography", "essential-blocks")}
                                            typographyPrefixConstant={TITLE_TYPOGRAPHY}
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__("Title Color", "essential-blocks")}
                                            color={titleColor}
                                            onChange={(color) => setAttributes({ titleColor: color })}
                                        />
                                        <ColorControl
                                            label={__("Title Hover Color", "essential-blocks")}
                                            color={titleHoverColor}
                                            onChange={(color) => setAttributes({ titleHoverColor: color })}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={TITLE_MARGIN}
                                            baseLabel="Margin"
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Subtitle", "essential-blocks")} initialOpen={false}>
                                        <TypographyDropdown
                                            baseLabel={__("Typography", "essential-blocks")}
                                            typographyPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__("Subtitle Color", "essential-blocks")}
                                            color={subtitleColor}
                                            onChange={(color) => setAttributes({ subtitleColor: color })}
                                        />
                                        <ColorControl
                                            label={__("Subtitle Hover Color", "essential-blocks")}
                                            color={subtitleHoverColor}
                                            onChange={(color) => setAttributes({ subtitleHoverColor: color })}
                                        />

                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={SUBTITLE_MARGIN}
                                            baseLabel="Margin"
                                        />
                                    </PanelBody>

                                    {displaySeperator && (
                                        <PanelBody title={__("Separator", "essential-blocks")} initialOpen={false}>
                                            <SelectControl
                                                label={__("Separator Position", "essential-blocks")}
                                                value={seperatorPosition}
                                                options={SEPARATOR_POSITION}
                                                onChange={(seperatorPosition) => setAttributes({ seperatorPosition })}
                                            />
                                            <BaseControl
                                                label={__("Separator Type", "essential-blocks")}
                                                id="eb-advance-heading-alignment"
                                            >
                                                <ButtonGroup id="eb-advance-heading-alignment">
                                                    {SEPARATOR_TYPE.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            // isLarge
                                                            isPrimary={seperatorType === item.value}
                                                            isSecondary={seperatorType !== item.value}
                                                            onClick={() =>
                                                                setAttributes({
                                                                    seperatorType: item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {seperatorType === "line" && (
                                                <>
                                                    <SelectControl
                                                        label={__("Separator Style", "essential-blocks")}
                                                        value={seperatorStyle}
                                                        options={SEPERATOR_STYLES}
                                                        onChange={(seperatorStyle) => setAttributes({ seperatorStyle })}
                                                    />
                                                    <ResponsiveRangeController
                                                        baseLabel={__("Separator Height", "essential-blocks")}
                                                        controlName={SEPARATOR_LINE_SIZE}
                                                        resRequiredProps={resRequiredProps}
                                                        units={UNIT_TYPES}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </>
                                            )}

                                            {seperatorType === "icon" && (
                                                <>
                                                    <EBIconPicker
                                                        value={separatorIcon}
                                                        onChange={(icon) =>
                                                            setAttributes({
                                                                separatorIcon: icon,
                                                            })
                                                        }
                                                    />
                                                    <ResponsiveRangeController
                                                        baseLabel={__("Icon Size", "essential-blocks")}
                                                        controlName={SEPARATOR_ICON_SIZE}
                                                        resRequiredProps={resRequiredProps}
                                                        units={UNIT_TYPES}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </>
                                            )}
                                            <ResponsiveRangeController
                                                baseLabel={__("Separator Width", "essential-blocks")}
                                                controlName={SEPARATOR_WIDTH}
                                                resRequiredProps={resRequiredProps}
                                                units={SEPARATOR_UNIT_TYPES}
                                                min={0}
                                                max={300}
                                                step={1}
                                            />

                                            <ColorControl
                                                label={__("Separator Color", "essential-blocks")}
                                                color={separatorColor}
                                                onChange={(color) => setAttributes({ separatorColor: color })}
                                            />
                                            <ColorControl
                                                label={__("Separator Hover Color", "essential-blocks")}
                                                color={separatorHoverColor}
                                                onChange={(color) => setAttributes({ separatorHoverColor: color })}
                                            />

                                            <ResponsiveDimensionsControl
                                                resRequiredProps={resRequiredProps}
                                                controlName={SEPARATOR_MARGIN}
                                                baseLabel="Margin"
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
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_PADDING}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>
                                    <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                                        <BackgroundControl
                                            controlName={WRAPPER_BG}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                        <BorderShadowControl
                                            controlName={WRAPPER_BORDER_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                        // noShadow
                                        // noBorder
                                        />
                                    </PanelBody>

                                    <AdvancedControls attributes={attributes} setAttributes={setAttributes} />
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
