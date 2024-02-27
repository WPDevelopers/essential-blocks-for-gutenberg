/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    Button,
    ButtonGroup,
    BaseControl,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
    TITLE_TAG,
    CONNECTOR_STYLE,
    CONNECTOR_TYPE,
    ICON_SHAPE,
    SHAPE_VIEW,
    ICON_POSITION,
    FEATURE_ITEM_POSITION,
    connectorWidth,
    listSpace,
    rowSpace,
    iconBackgroundType,
    iconBackgroundSize,
    iconSize,
    iconPadding,
    iconSpace,
    titleSpace,
    iconBorder,
    wrapperMargin,
    wrapperPadding,
    boxPadding,
    boxBackgroundType,
    boxBorder,
    wrapperBackgroundType,
    wrapperBorder,
} from "../../../../blocks/feature-list/src/constants";

import {
    typoPrefix_title,
    typoPrefix_content,
} from "../../../../blocks/feature-list/src/constants/typographyPrefixConstants";

import objAttributes from "../../../../blocks/feature-list/src/attributes";

const {
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BackgroundControl,
    BorderShadowControl,
} = window.EBControls;

function FeatureList(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        titleTag,
        iconShape,
        shapeView,
        iconPosition,
        iconGlobalColor,
        titleTextColor,
        descTextColor,
        showContentVertical,
        showConnector,
        connectorStyle,
        connectorType,
        connectorColor,
        titleTextHoverColor,
        useInlineDesign,
        featureListAlign,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                features: [
                    {
                        iconType: "icon",
                        icon: "fas fa-check",
                        title: "Feature Item 1",
                        content:
                            "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna",
                        iconColor: "",
                        link: "",
                        linkOpenNewTab: "false",
                        iconBackgroundColor: "",
                    },
                    {
                        iconType: "icon",
                        icon: "fas fa-times",
                        title: "Feature Item 2",
                        content:
                            "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna",
                        iconColor: "",
                        link: "",
                        linkOpenNewTab: "false",
                        iconBackgroundColor: "",
                    },
                    {
                        iconType: "icon",
                        icon: "fas fa-anchor",
                        title: "Feature Item 3",
                        content:
                            "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna",
                        iconColor: "",
                        link: "",
                        linkOpenNewTab: "false",
                        iconBackgroundColor: "",
                    },
                ],
                titleTag: "h3",
                iconShape: "circle",
                shapeView: "stacked",
                iconPosition: "left",
                titleTextColor: "var(--eb-global-heading-color)",
                descTextColor: "var(--eb-global-text-color)",
                showContentVertical: false,
                showConnector: false,
                connectorStyle: "style-1",
                connectorType: "solid",
                connectorColor: "var(--eb-global-primary-color)",
                useInlineDesign: false,
                [`${wrapperMargin}Unit`]: "px",
                [`${wrapperMargin}isLinked`]: true,
                [`${wrapperPadding}Unit`]: "px",
                [`${wrapperPadding}isLinked`]: true,
                [`${wrapperBorder}Bdr_Unit`]: "px",
                [`${wrapperBorder}Bdr_isLinked`]: true,
                [`${wrapperBorder}Rds_Unit`]: "px",
                [`${wrapperBorder}Rds_isLinked`]: true,
                [`${wrapperBorder}BorderType`]: "normal",
                [`${wrapperBorder}shadowType`]: "normal",
                [`${iconPadding}Unit`]: "px",
                [`${iconPadding}isLinked`]: true,
                [`${boxPadding}Unit`]: "px",
                [`${boxPadding}isLinked`]: true,
                [`${boxBorder}Bdr_Unit`]: "px",
                [`${boxBorder}Bdr_isLinked`]: true,
                [`${boxBorder}Rds_Unit`]: "px",
                [`${boxBorder}Rds_isLinked`]: true,
                [`${boxBorder}BorderType`]: "normal",
                [`${boxBorder}shadowType`]: "normal",
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
                    <PanelBody title={__("Content Settings", "essential-blocks")} initialOpen={true}>
                        <SelectControl
                            label={__("Title HTML Tag", "essential-blocks")}
                            value={titleTag}
                            options={TITLE_TAG}
                            onChange={(newTitleTag) => handleBlockDefault({ titleTag: newTitleTag })}
                        />
                        <SelectControl
                            label={__("Icon Shape", "essential-blocks")}
                            value={iconShape}
                            options={ICON_SHAPE}
                            onChange={(newIconShape) => handleBlockDefault({ iconShape: newIconShape })}
                        />
                        {iconShape !== "none" && (
                            <SelectControl
                                label={__("Shape View", "essential-blocks")}
                                value={shapeView}
                                options={SHAPE_VIEW}
                                onChange={(newShapeView) =>
                                    handleBlockDefault({
                                        shapeView: newShapeView,
                                    })
                                }
                            />
                        )}
                        <BaseControl label={__("Feature Item Position", "essential-blocks")}>
                            <ButtonGroup className="eb-featurelist-item-align">
                                {FEATURE_ITEM_POSITION.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={featureListAlign === item.value}
                                        isSecondary={featureListAlign !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                featureListAlign: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <BaseControl label={__("Icon Position", "essential-blocks")}>
                            <ButtonGroup className="eb-featurelist-icon-align">
                                {ICON_POSITION.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={iconPosition === item.value}
                                        isSecondary={iconPosition !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                iconPosition: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <ToggleControl
                            label={__("Content Vertically Center", "essentail-blocks")}
                            checked={showContentVertical}
                            onChange={() => {
                                handleBlockDefault({
                                    showContentVertical: !showContentVertical,
                                });
                            }}
                        />
                        {!useInlineDesign && iconPosition != "top" && (
                            <ToggleControl
                                label={__("Show Connector", "essentail-blocks")}
                                checked={showConnector}
                                onChange={() => {
                                    handleBlockDefault({
                                        showConnector: !showConnector,
                                    });
                                }}
                            />
                        )}
                        <ToggleControl
                            label={__("Use Inline Feature Lists", "essentail-blocks")}
                            checked={useInlineDesign}
                            onChange={() => {
                                handleBlockDefault({
                                    useInlineDesign: !useInlineDesign,
                                });
                            }}
                        />
                    </PanelBody>
                    <PanelBody title={__("List", "essential-blocks")} initialOpen={false}>
                        <ResponsiveRangeController
                            baseLabel={__("Space Between (PX)", "essential-blocks")}
                            controlName={listSpace}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={300}
                            step={1}
                            noUnits
                        />
                        {useInlineDesign && (
                            <ResponsiveRangeController
                                baseLabel={__("Row Space(PX)", "essential-blocks")}
                                controlName={rowSpace}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={300}
                                step={1}
                                noUnits
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__("Icon", "essential-blocks")} initialOpen={false}>
                        {iconShape !== "none" && (
                            <>
                                <BaseControl>
                                    <h3 className="eb-control-title">{__("Background", "essential-blocks")}</h3>
                                </BaseControl>
                                <BackgroundControl
                                    controlName={iconBackgroundType}
                                    resRequiredProps={resRequiredProps}
                                    noOverlay={true}
                                    noMainBgi={true}
                                />
                                <Divider />
                            </>
                        )}
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={iconGlobalColor}
                            onChange={(iconGlobalColor) => handleBlockDefault({ iconGlobalColor })}
                        />
                        {iconShape !== "none" && (
                            <ResponsiveRangeController
                                baseLabel={__("Size", "essential-blocks")}
                                controlName={iconBackgroundSize}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={300}
                                step={1}
                                noUnits
                            />
                        )}
                        <ResponsiveRangeController
                            baseLabel={__("Icon Size", "essential-blocks")}
                            controlName={iconSize}
                            resRequiredProps={resRequiredProps}
                            min={6}
                            max={150}
                            step={1}
                            noUnits
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={iconPadding}
                            baseLabel={__("Padding", "essential-blocks")}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Spacing", "essential-blocks")}
                            controlName={iconSpace}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={100}
                            step={1}
                            noUnits
                        />
                        {iconShape !== "none" && shapeView === "framed" && (
                            <BorderShadowControl
                                controlName={iconBorder}
                                resRequiredProps={resRequiredProps}
                                noShadow={true}
                            />
                        )}
                    </PanelBody>

                    <PanelBody title={__("Content", "essential-blocks")} initialOpen={false}>
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Title", "essential-blocks")}</h3>
                        </BaseControl>
                        <ResponsiveRangeController
                            baseLabel={__("Title Bottom Space", "essential-blocks")}
                            controlName={titleSpace}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={100}
                            step={1}
                            noUnits
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleTextColor}
                            onChange={(titleTextColor) => handleBlockDefault({ titleTextColor })}
                        />
                        <ColorControl
                            label={__("Hover Color", "essential-blocks")}
                            color={titleTextHoverColor}
                            onChange={(titleTextHoverColor) => handleBlockDefault({ titleTextHoverColor })}
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                            defaultFontSize={32}
                        />

                        {!useInlineDesign && (
                            <>
                                <Divider />
                                <BaseControl>
                                    <h3 className="eb-control-title">{__("Description", "essential-blocks")}</h3>
                                </BaseControl>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={descTextColor}
                                    onChange={(descTextColor) => handleBlockDefault({ descTextColor })}
                                />
                                <TypographyDropdown
                                    baseLabel={__("Typography", "essential-blocks")}
                                    typographyPrefixConstant={typoPrefix_content}
                                    resRequiredProps={resRequiredProps}
                                />
                                <Divider />
                                <BaseControl>
                                    <h3 className="eb-control-title">{__("Content Box", "essential-blocks")}</h3>
                                </BaseControl>
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={boxPadding}
                                    baseLabel={__("Box Padding", "essential-blocks")}
                                />
                                <PanelBody title="Background">
                                    <BackgroundControl
                                        controlName={boxBackgroundType}
                                        resRequiredProps={resRequiredProps}
                                        noOverlay={true}
                                        noMainBgi={true}
                                    />
                                </PanelBody>
                                <PanelBody title="Border">
                                    <BorderShadowControl controlName={boxBorder} resRequiredProps={resRequiredProps} />
                                </PanelBody>
                            </>
                        )}
                    </PanelBody>
                    {!useInlineDesign && showConnector && iconPosition != "top" && (
                        <>
                            <PanelBody title={__("Connector Style", "essential-blocks")} initialOpen={false}>
                                <SelectControl
                                    label={__("Connector Style", "essential-blocks")}
                                    value={connectorStyle}
                                    options={CONNECTOR_STYLE}
                                    onChange={(val) =>
                                        handleBlockDefault({
                                            connectorStyle: val,
                                        })
                                    }
                                />
                                <SelectControl
                                    label={__("Connector Type", "essential-blocks")}
                                    value={connectorType}
                                    options={CONNECTOR_TYPE}
                                    onChange={(val) =>
                                        handleBlockDefault({
                                            connectorType: val,
                                        })
                                    }
                                />
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={connectorColor}
                                    onChange={(connectorColor) =>
                                        handleBlockDefault({
                                            connectorColor,
                                        })
                                    }
                                />
                                <ResponsiveRangeController
                                    baseLabel={__("Connector Width (PX)", "essential-blocks")}
                                    controlName={connectorWidth}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={20}
                                    step={1}
                                    noUnits
                                />
                            </PanelBody>
                        </>
                    )}
                    <PanelBody title={__("Margin & Padding", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapperMargin}
                            baseLabel={__("Margin", "essential-blocks")}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapperPadding}
                            baseLabel={__("Padding", "essential-blocks")}
                        />
                    </PanelBody>
                    <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={wrapperBackgroundType} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                    <PanelBody title={__("Border", "essential-blocks")} initialOpen={false}>
                        <BorderShadowControl controlName={wrapperBorder} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default FeatureList;
