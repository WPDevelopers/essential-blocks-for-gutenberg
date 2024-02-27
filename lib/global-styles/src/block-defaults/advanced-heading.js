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
    TextareaControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    ColorPicker,
} from "@wordpress/components";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    AdvancedControls,
    ColorControl,
    EBIconPicker
} = window.EBControls;

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
    NORMAL_HOVER,
    UNIT_TYPES,
    SEPARATOR_UNIT_TYPES,
    PRESETS,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    SEPARATOR_TYPE,
} from "../../../../blocks/advanced-heading/src/constants/constants";

import {
    TITLE_TYPOGRAPHY,
    SUBTITLE_TYPOGRAPHY,
} from "../../../../blocks/advanced-heading/src/constants/typographyPrefixConstants";

import objAttributes from "../../../../blocks/advanced-heading/src/attributes";

function AdvancedHeading(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        tagName,
        subtitleTagName,
        titleColor,
        titleHoverColor,
        subtitleColor,
        subtitleHoverColor,
        separatorColor,
        separatorHoverColor,
        align,
        displaySubtitle,
        displaySeperator,
        seperatorPosition,
        seperatorType,
        seperatorStyle,
        separatorIcon,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                tagName: "h2",
                subtitleTagName: "p",
                titleColor: "var(--eb-global-heading-color)",
                titleHoverColor: "",
                subtitleColor: "var(--eb-global-text-color)",
                subtitleHoverColor: "",
                separatorColor: "var(--eb-global-primary-color)",
                separatorHoverColor: "",
                align: "left",
                displaySubtitle: false,
                displaySeperator: false,
                seperatorPosition: "bottom",
                seperatorType: "line",
                seperatorStyle: "solid",
                separatorIcon: "",

                [`${TITLE_MARGIN}Top`]: 0,
                [`${TITLE_MARGIN}Right`]: 0,
                [`${TITLE_MARGIN}Bottom`]: 15,
                [`${TITLE_MARGIN}Left`]: 0,
                [`${TITLE_MARGIN}Unit`]: "px",
                [`${TITLE_MARGIN}isLinked`]: false,

                [`${SUBTITLE_MARGIN}Top`]: 0,
                [`${SUBTITLE_MARGIN}Right`]: 0,
                [`${SUBTITLE_MARGIN}Bottom`]: 20,
                [`${SUBTITLE_MARGIN}Left`]: 0,
                [`${SUBTITLE_MARGIN}Unit`]: "px",
                [`${SUBTITLE_MARGIN}isLinked`]: false,

                [`${SEPARATOR_MARGIN}Top`]: 0,
                [`${SEPARATOR_MARGIN}Bottom`]: 0,
                [`${SEPARATOR_MARGIN}Right`]: 0,
                [`${SEPARATOR_MARGIN}Left`]: 0,
                [`${SEPARATOR_MARGIN}Unit`]: "px",
                [`${SEPARATOR_MARGIN}isLinked`]: false,

                [`${SEPARATOR_WIDTH}Unit`]: "px",
                [`${SEPARATOR_WIDTH}isLinked`]: true,

                [`${SEPARATOR_LINE_SIZE}Unit`]: "px",
                [`${SEPARATOR_LINE_SIZE}isLinked`]: true,

                [`${SEPARATOR_ICON_SIZE}Unit`]: "px",
                [`${SEPARATOR_ICON_SIZE}isLinked`]: true,

                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: true,

                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: true,

                [`${WRAPPER_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}BorderType`]: "normal",
                [`${WRAPPER_BORDER_SHADOW}shadowType`]: "normal",
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
                    <PanelBody title={__("General", "essential-blocks")} initialOpen={true}>
                        <BaseControl label={__("Alignment", "essential-blocks")} id="eb-advance-heading-alignment">
                            <ButtonGroup id="eb-advance-heading-alignment">
                                {TEXT_ALIGN.map((item, key) => (
                                    <Button
                                        key={key}
                                        // isLarge
                                        isPrimary={align === item.value}
                                        isSecondary={align !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                align: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <BaseControl label={__("Title Level", "essential-blocks")} id="eb-advance-heading-alignment">
                            <ButtonGroup className="eb-advance-heading-alignment eb-html-tag-buttongroup">
                                {HEADING.map((item, key) => (
                                    <Button
                                        key={key}
                                        // isLarge
                                        isPrimary={tagName === item.value}
                                        isSecondary={tagName !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                tagName: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <ToggleControl
                            label={__("Display Subtitle", "essential-blocks")}
                            checked={displaySubtitle}
                            onChange={() =>
                                handleBlockDefault({
                                    displaySubtitle: !displaySubtitle,
                                })
                            }
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
                                                    handleBlockDefault({
                                                        subtitleTagName: item.value,
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
                        <ToggleControl
                            label={__("Display Separator", "essential-blocks")}
                            checked={displaySeperator}
                            onChange={() =>
                                handleBlockDefault({
                                    displaySeperator: !displaySeperator,
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody title={__("Title Styles", "essential-blocks")} initialOpen={true}>
                        <TypographyDropdown
                            baseLabel={__("Title Typography", "essential-blocks")}
                            typographyPrefixConstant={TITLE_TYPOGRAPHY}
                            resRequiredProps={resRequiredProps}
                        />
                        <ColorControl
                            label={"Title Color"}
                            color={titleColor}
                            onChange={(value) => handleBlockDefault({ titleColor: value })}
                            defaultValue={titleColor}
                        />
                        <ColorControl
                            label={"Title Hover Color"}
                            color={titleHoverColor}
                            onChange={(value) => handleBlockDefault({ titleHoverColor: value })}
                            defaultValue={titleHoverColor}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={TITLE_MARGIN}
                            baseLabel="Title Margin"
                        />
                    </PanelBody>

                    {displaySubtitle && (
                        <PanelBody title={__("Subtitle Styles", "essential-blocks")} initialOpen={true}>
                            <TypographyDropdown
                                baseLabel={__("Subtitle Typography", "essential-blocks")}
                                typographyPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={"Subtitle Color"}
                                color={subtitleColor}
                                onChange={(value) => handleBlockDefault({ subtitleColor: value })}
                                defaultValue={subtitleColor}
                            />
                            <ColorControl
                                label={"Subtitle Hover Color"}
                                color={subtitleHoverColor}
                                onChange={(value) =>
                                    handleBlockDefault({
                                        subtitleHoverColor: value,
                                    })
                                }
                                defaultValue={subtitleHoverColor}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SUBTITLE_MARGIN}
                                baseLabel="Subtitle Margin"
                            />
                        </PanelBody>
                    )}

                    {displaySeperator && (
                        <PanelBody title={__("Separator", "essential-blocks")} initialOpen={false}>
                            <SelectControl
                                label={__("Separator Position", "essential-blocks")}
                                value={seperatorPosition}
                                options={SEPARATOR_POSITION}
                                onChange={(seperatorPosition) => handleBlockDefault({ seperatorPosition })}
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
                                                handleBlockDefault({
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
                                        onChange={(seperatorStyle) =>
                                            handleBlockDefault({
                                                seperatorStyle,
                                            })
                                        }
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
                                            handleBlockDefault({
                                                separatorIcon: icon,
                                            })
                                        }
                                        title={__(
                                            "Select Icon",
                                            "essential-blocks-pro"
                                        )}
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
                                label={"Separator Color"}
                                color={separatorColor}
                                onChange={(value) =>
                                    handleBlockDefault({
                                        separatorColor: value,
                                    })
                                }
                                defaultValue={separatorColor}
                            />
                            <ColorControl
                                label={"Separator Hover Color"}
                                color={separatorHoverColor}
                                onChange={(value) =>
                                    handleBlockDefault({
                                        separatorHoverColor: value,
                                    })
                                }
                                defaultValue={separatorHoverColor}
                            />

                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SEPARATOR_MARGIN}
                                baseLabel="Separator Margin"
                            />
                        </PanelBody>
                    )}
                    <PanelBody title={__("Advanced", "essential-blocks")} initialOpen={true}>
                        <PanelBody>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={WRAPPER_MARGIN}
                                baseLabel="Wrapper Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={WRAPPER_PADDING}
                                baseLabel="Wrapper Padding"
                            />
                        </PanelBody>
                        <PanelBody title={__("Wrapper Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} />
                        </PanelBody>
                        <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={WRAPPER_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default AdvancedHeading;
