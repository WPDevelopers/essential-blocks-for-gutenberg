/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
const { times } = lodash;
import {
    PanelBody,
    BaseControl,
    ButtonGroup,
    Button,
    ToggleControl,
    RangeControl,
} from "@wordpress/components";

/**
 * External dependencies
 */
// import FontIconPicker from "@fonticonpicker/react-fonticonpicker";

/**
 * Internal dependencies
 */
import {
    ACCORDION_TYPES,
    ICON_POSITIONS,
    TITLE_ALIGNMENT,
    CONTENT_ALIGN,
    HEADING,
} from "../../../../blocks/accordion/src/constants";

const {
    //
    faIcons: iconList,
    ColorControl,
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    BorderShadowControl,
    BackgroundControl,
} = window.EBControls;

import objAttributes from "../../../../blocks/accordion/src/attributes";

import {
    typoPrefix_title,
    typoPrefix_content,
} from "../../../../blocks/accordion/src/constants/typographyPrefixConstants";

import {
    rangeIconSize,
    accGapRange,
} from "../../../../blocks/accordion/src/constants/rangeNames";

import {
    wrapMarginConst,
    wrapPaddingConst,
    iconMarginConst,
    iconPaddingConst,
    tabMarginConst,
    tabPaddingConst,
    conMarginConst,
    conPaddingConst,
} from "../../../../blocks/accordion/src/constants/dimensionsConstants";

import {
    WrpBgConst,
    iconBgConst,
    tabBgConst,
    conBgConst,
} from "../../../../blocks/accordion/src/constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    iconBdShadowConst,
    tabBdShadowConst,
    conBdShadowConst,
} from "../../../../blocks/accordion/src/constants/borderShadowConstants";

function Accordion(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        resOption,
        accordionType,
        displayIcon,
        transitionDuration,
        tabIcon,
        expandedIcon,
        titleColor,
        contentAlign,
        contentColor,
        iconColor,
        iconPosition,
        titleAlignment,
        hoverTitleColor,
        activeBgColor,
        activeTitleColor,
        tagName,
        faqSchema,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                accordionType: "accordion",
                displayIcon: true,
                transitionDuration: 0.5,
                contentAlign: "left",
                titleAlignment: "left",
                iconPosition: "right",
                tagName: "h3",
                accordionChildCount: 3,
                activeBgColor: "",
                activeTitleColor: "",

                [`${iconMarginConst}Unit`]: "px",
                [`${iconMarginConst}isLinked`]: true,
                [`${iconPaddingConst}Unit`]: "px",
                [`${iconPaddingConst}isLinked`]: true,
                [`${iconBdShadowConst}Bdr_Unit`]: "px",
                [`${iconBdShadowConst}Bdr_isLinked`]: true,
                [`${iconBdShadowConst}Rds_Unit`]: "px",
                [`${iconBdShadowConst}Rds_isLinked`]: true,
                [`${iconBdShadowConst}BorderType`]: "normal",
                [`${iconBdShadowConst}shadowType`]: "normal",

                [`${tabMarginConst}Unit`]: "px",
                [`${tabMarginConst}isLinked`]: true,

                [`${tabPaddingConst}Top`]: 15,
                [`${tabPaddingConst}Right`]: 20,
                [`${tabPaddingConst}Bottom`]: 15,
                [`${tabPaddingConst}Left`]: 20,
                [`${tabPaddingConst}Unit`]: "px",
                [`${tabPaddingConst}isLinked`]: false,
                [`${tabBdShadowConst}Bdr_Unit`]: "px",
                [`${tabBdShadowConst}Bdr_isLinked`]: true,
                [`${tabBdShadowConst}Rds_Unit`]: "px",
                [`${tabBdShadowConst}Rds_isLinked`]: true,
                [`${tabBdShadowConst}BorderType`]: "normal",
                [`${tabBdShadowConst}shadowType`]: "normal",

                [`${conMarginConst}Unit`]: "px",
                [`${conMarginConst}isLinked`]: true,
                [`${conPaddingConst}Top`]: 10,
                [`${conPaddingConst}Right`]: 15,
                [`${conPaddingConst}Bottom`]: 10,
                [`${conPaddingConst}Left`]: 15,
                [`${conPaddingConst}Unit`]: "px",
                [`${conPaddingConst}isLinked`]: false,
                [`${conBdShadowConst}Bdr_Unit`]: "px",
                [`${conBdShadowConst}Bdr_isLinked`]: true,
                [`${conBdShadowConst}Rds_Unit`]: "px",
                [`${conBdShadowConst}Rds_isLinked`]: true,
                [`${conBdShadowConst}BorderType`]: "normal",
                [`${conBdShadowConst}shadowType`]: "normal",

                [`${wrapPaddingConst}Unit`]: "px",
                [`${wrapPaddingConst}isLinked`]: true,

                [`${wrapMarginConst}Unit`]: "px",
                [`${wrapMarginConst}isLinked`]: true,

                [`${WrpBdShadowConst}Bdr_Unit`]: "px",
                [`${WrpBdShadowConst}Bdr_isLinked`]: true,
                [`${WrpBdShadowConst}Rds_Unit`]: "px",
                [`${WrpBdShadowConst}Rds_isLinked`]: true,
                [`${WrpBdShadowConst}BorderType`]: "normal",
                [`${WrpBdShadowConst}shadowType`]: "normal",
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
                    <PanelBody
                        title={__("General", "essential-blocks")}
                        initialOpen={true}
                    >
                        <BaseControl
                            label={__("Accordion Types", "essential-blocks")}
                            id="eb-accordion-type"
                        >
                            <ButtonGroup id="eb-accordion-type-btgrp">
                                {ACCORDION_TYPES.map((item, key) => (
                                    <Button
                                        key={key}
                                        // isLarge
                                        isSecondary={
                                            accordionType !== item.value
                                        }
                                        isPrimary={accordionType === item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                accordionType: item.value,
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
                            id="eb-accordion-heading-alignment"
                        >
                            <ButtonGroup className="eb-accordion-heading-alignment eb-html-tag-buttongroup">
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
                        <RangeControl
                            label={__("Toggle Speed", "essential-blocks")}
                            value={transitionDuration}
                            onChange={(transitionDuration) =>
                                handleBlockDefault({ transitionDuration })
                            }
                            min={0}
                            max={5}
                            step={0.1}
                            allowReset={true}
                        />
                        <ResponsiveRangeController
                            noUnits
                            baseLabel={__("Accordions Gap", "essential-blocks")}
                            controlName={accGapRange}
                            resRequiredProps={resRequiredProps}
                            min={1}
                            max={100}
                            step={1}
                        />
                    </PanelBody>
                    {/* <PanelBody
                        title={__("Icons Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Display Icon", "essential-blocks")}
                            checked={displayIcon}
                            onChange={() =>
                                handleBlockDefault({
                                    displayIcon: !displayIcon,
                                })
                            }
                        />
                        {displayIcon && (
                            <>
                                <BaseControl
                                    label={__("Tab Icon", "essential-blocks")}
                                >
                                    <FontIconPicker
                                        icons={iconList}
                                        value={tabIcon}
                                        onChange={(tabIcon) =>
                                            handleBlockDefault({ tabIcon })
                                        }
                                        appendTo="body"
                                    />
                                </BaseControl>

                                <BaseControl
                                    label={__(
                                        "Expanded Icon",
                                        "essential-blocks"
                                    )}
                                >
                                    <FontIconPicker
                                        icons={iconList}
                                        value={expandedIcon}
                                        onChange={(expandedIcon) =>
                                            handleBlockDefault({ expandedIcon })
                                        }
                                        appendTo="body"
                                    />
                                </BaseControl>

                                <BaseControl
                                    label={__(
                                        "Icon Position",
                                        "essential-blocks"
                                    )}
                                >
                                    <ButtonGroup id="eb-icon-pos-btgrp">
                                        {ICON_POSITIONS.map((item, key) => (
                                            <Button
                                                key={key}
                                                // isLarge
                                                isSecondary={
                                                    iconPosition !== item.value
                                                }
                                                isPrimary={
                                                    iconPosition === item.value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        iconPosition:
                                                            item.value,
                                                    })
                                                }
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                <ResponsiveRangeController
                                    noUnits
                                    baseLabel={__(
                                        "Icon Size",
                                        "essential-blocks"
                                    )}
                                    controlName={rangeIconSize}
                                    resRequiredProps={resRequiredProps}
                                    min={1}
                                    max={200}
                                    step={1}
                                />

                                <ColorControl
                                    label={__("Icon Color", "essential-blocks")}
                                    color={iconColor}
                                    onChange={(iconColor) =>
                                        handleBlockDefault({ iconColor })
                                    }
                                />

                                <PanelBody
                                    title={__("Margin & Padding")}
                                    // initialOpen={true}
                                >
                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={iconMarginConst}
                                        baseLabel="Margin"
                                    />
                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={iconPaddingConst}
                                        baseLabel="Padding"
                                    />
                                </PanelBody>

                                <PanelBody
                                    title={__(
                                        "Background ",
                                        "essential-blocks"
                                    )}
                                    // initialOpen={false}
                                >
                                    <BackgroundControl
                                        controlName={iconBgConst}
                                        resRequiredProps={resRequiredProps}
                                        noOverlay
                                        noMainBgi
                                    />
                                </PanelBody>

                                <PanelBody
                                    title={__("Border & Shadow")}
                                    // initialOpen={false}
                                >
                                    <BorderShadowControl
                                        controlName={iconBdShadowConst}
                                        resRequiredProps={resRequiredProps}
                                        defaultBdrColor={"#aaaaaa"}
                                        defaultBdrStyle={"solid"}
                                        // noShadow
                                        // noBorder
                                    />
                                </PanelBody>
                            </>
                        )}
                    </PanelBody> */}
                    <PanelBody
                        title={__("Tab Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BaseControl
                            label={__("Title Align ", "essential-blocks")}
                            id="eb-accoridon-title-align"
                        >
                            <ButtonGroup>
                                {TITLE_ALIGNMENT.map((item, key) => (
                                    <Button
                                        key={key}
                                        isSecondary={
                                            titleAlignment !== item.value
                                        }
                                        isPrimary={
                                            titleAlignment === item.value
                                        }
                                        onClick={() =>
                                            handleBlockDefault({
                                                titleAlignment: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        <TypographyDropdown
                            baseLabel="Title Typography"
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Title Color", "essential-blocks")}
                            color={titleColor}
                            onChange={(titleColor) =>
                                handleBlockDefault({ titleColor })
                            }
                        />

                        <ColorControl
                            label={__("Title hover Color", "essential-blocks")}
                            color={hoverTitleColor}
                            onChange={(hoverTitleColor) =>
                                handleBlockDefault({ hoverTitleColor })
                            }
                        />

                        <PanelBody
                            title={__("Margin & Padding")}
                            // initialOpen={true}
                        >
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={tabMarginConst}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={tabPaddingConst}
                                baseLabel="Padding"
                            />
                        </PanelBody>

                        <PanelBody
                            title={__("Background ", "essential-blocks")}
                            // initialOpen={false}
                        >
                            <BackgroundControl
                                controlName={tabBgConst}
                                resRequiredProps={resRequiredProps}
                                noMainBgi
                                noOverlay
                            />
                        </PanelBody>

                        <PanelBody
                            title={__(
                                "Expanded Tab Colors",
                                "essential-blocks"
                            )}
                            // initialOpen={false}
                        >
                            <ColorControl
                                label={__(
                                    "Background Color",
                                    "essential-blocks"
                                )}
                                color={activeBgColor}
                                onChange={(activeBgColor) =>
                                    handleBlockDefault({ activeBgColor })
                                }
                            />

                            <ColorControl
                                label={__("Title Color", "essential-blocks")}
                                color={activeTitleColor}
                                onChange={(activeTitleColor) =>
                                    handleBlockDefault({ activeTitleColor })
                                }
                            />
                        </PanelBody>

                        <PanelBody
                            title={__("Border & Shadow")}
                            // initialOpen={false}
                        >
                            <BorderShadowControl
                                controlName={tabBdShadowConst}
                                resRequiredProps={resRequiredProps}
                                // noShadow
                                // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                    <PanelBody
                        title={__("Content Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BaseControl label={__("Align", "essential-blocks")}>
                            <ButtonGroup>
                                {CONTENT_ALIGN.map((item, key) => (
                                    <Button
                                        key={key}
                                        // isLarge
                                        isSecondary={
                                            contentAlign !== item.value
                                        }
                                        isPrimary={contentAlign === item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                contentAlign: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        <TypographyDropdown
                            baseLabel="Content Typography"
                            typographyPrefixConstant={typoPrefix_content}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Content Color", "essential-blocks")}
                            color={contentColor}
                            onChange={(contentColor) =>
                                handleBlockDefault({ contentColor })
                            }
                        />

                        <PanelBody
                            title={__("Margin & Padding")}
                            // initialOpen={true}
                        >
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={conMarginConst}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={conPaddingConst}
                                baseLabel="Padding"
                            />
                        </PanelBody>

                        <PanelBody
                            title={__("Background ", "essential-blocks")}
                            // initialOpen={false}
                        >
                            <BackgroundControl
                                controlName={conBgConst}
                                resRequiredProps={resRequiredProps}
                                noOverlay
                                noMainBgi
                            />
                        </PanelBody>

                        <PanelBody
                            title={__("Border & Shadow")}
                            // initialOpen={false}
                        >
                            <BorderShadowControl
                                controlName={conBdShadowConst}
                                resRequiredProps={resRequiredProps}
                                // noShadow
                                // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                    <PanelBody
                        title={__(
                            "Wrapper Margin & Padding",
                            "essential-blocks"
                        )}
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
                    <PanelBody
                        title={__("Wrapper Background ", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BackgroundControl
                            controlName={WrpBgConst}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Border & Shadow")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={WrpBdShadowConst}
                            resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default Accordion;
