/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    TabPanel,
    TextControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button,
} from "@wordpress/components";

/**
 * Internal dependencies
 */

import objAttributes from "../../../../blocks/nft-gallery/src/attributes";
import {
    dimensionsMargin,
    dimensionsPadding,
    wrapBg,
    wrpBdShadow,
    rowNumber,
    columnGap,
    rowGap,
    imageMargin,
    imageRadius,
    imageHeight,
    imageWidth,
    titleMargin,
    creatorMargin,
    creatorImageHeight,
    creatorImageWidth,
    creatorImageBorder,
    priceMargin,
    buttonMargin,
    buttonPadding,
    buttonBdrSdw,
    itemBg,
    itemBdrSdw,
    itemPadding,
    LAYOUT_TYPE,
    GAP_UNIT,
    GRID_PRESET,
    LIST_PRESET,
    HORIZONTAL_ALIGNMENT,
    VERTICAL_ALIGNMENT,
} from "../../../../blocks/nft-gallery/src/constants/constants";

import {
    typoPrefix_title,
    typoPrefix_owner,
    typoPrefix_price,
    typoPrefix_button,
} from "../../../../blocks/nft-gallery/src/constants/typographyPrefixConstants";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ColorControl,
    BackgroundControl,
    AdvancedControls,
    ResponsiveRangeController,
} = window.EBControls;

function NftGallery(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        source,
        settings,
        layout,
        displayImage,
        displayTitle,
        displayCreator,
        displayOwner,
        displayPrice,
        displayLastSale,
        displayButton,
        titleColor,
        ownerTextColor,
        ownerLinkColor,
        showOwnerImage,
        showOwnerText,
        creatorLabel,
        ownerLabel,
        priceColor,
        buttonTextColor,
        buttonBgColor,
        buttonHoverTextColor,
        buttonHoverBgColor,
        buttonText,
        gridPreset,
        listPreset,
        gridOverlayBg,
        listHorizontalAlignment,
        listVerticalAlignment,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                source: "opensea",
                layout: "grid",
                displayImage: true,
                displayTitle: true,
                displayCreator: true,
                displayOwner: false,
                displayPrice: true,
                displayLastSale: false,
                displayButton: true,
                titleColor: "#333333",
                ownerTextColor: "#333333",
                ownerLinkColor: "#7967ff",
                showOwnerImage: true,
                showOwnerText: true,
                creatorLabel: "Created by",
                ownerLabel: "Owned by",
                priceColor: "#333333",
                buttonTextColor: "#ffffff",
                buttonBgColor: "#7967ff",
                buttonHoverTextColor: "#ffffff",
                buttonHoverBgColor: "#5c4bd9",
                buttonText: "See Details",
                gridPreset: "preset-1",
                listPreset: "preset-1",
                gridOverlayBg: "#edecf6e6",
                listHorizontalAlignment: "flex-start",
                listVerticalAlignment: "flex-start",
                [`${columnGap}Unit`]: "px",
                [`${columnGap}Range`]: 15,
                [`${rowGap}Unit`]: "px",
                [`${rowGap}Range`]: 15,
                [`${itemBdrSdw}Bdr_Unit`]: "px",
                [`${itemBdrSdw}Bdr_isLinked`]: true,
                [`${itemBdrSdw}Rds_Unit`]: "px",
                [`${itemBdrSdw}Rds_isLinked`]: true,
                [`${itemBdrSdw}BorderType`]: "normal",
                [`${itemBdrSdw}shadowType`]: "normal",
                [`${itemPadding}Unit`]: "px",
                [`${itemPadding}isLinked`]: true,
                [`${imageHeight}Unit`]: "px",
                [`${imageHeight}Range`]: 300,
                [`${imageWidth}Unit`]: "px",
                [`${imageMargin}Unit`]: "px",
                [`${imageMargin}isLinked`]: false,
                [`${imageMargin}Top`]: 0,
                [`${imageMargin}Right`]: 0,
                [`${imageMargin}Bottom`]: 15,
                [`${imageMargin}Left`]: 0,
                [`${imageRadius}Unit`]: "px",
                [`${imageRadius}isLinked`]: true,
                [`${imageRadius}Top`]: 5,
                [`${imageRadius}Right`]: 5,
                [`${imageRadius}Bottom`]: 5,
                [`${imageRadius}Left`]: 5,
                [`${titleMargin}Unit`]: "px",
                [`${titleMargin}isLinked`]: false,
                [`${titleMargin}Top`]: 0,
                [`${titleMargin}Right`]: 0,
                [`${titleMargin}Bottom`]: 15,
                [`${titleMargin}Left`]: 0,
                [`${creatorImageHeight}Unit`]: "px",
                [`${creatorImageHeight}Range`]: 30,
                [`${creatorImageWidth}Unit`]: "px",
                [`${creatorImageWidth}Range`]: 30,
                [`${creatorImageBorder}Bdr_Unit`]: "%",
                [`${creatorImageBorder}Bdr_isLinked`]: true,
                [`${creatorImageBorder}Rds_Unit`]: "px",
                [`${creatorImageBorder}Rds_isLinked`]: true,
                [`${creatorImageBorder}BorderType`]: "normal",
                [`${creatorImageBorder}shadowType`]: "normal",
                [`${creatorImageBorder}Top`]: 50,
                [`${creatorImageBorder}Right`]: 50,
                [`${creatorImageBorder}Bottom`]: 50,
                [`${creatorImageBorder}Left`]: 50,
                [`${creatorMargin}Unit`]: "px",
                [`${creatorMargin}isLinked`]: false,
                [`${creatorMargin}Top`]: 0,
                [`${creatorMargin}Right`]: 0,
                [`${creatorMargin}Bottom`]: 20,
                [`${creatorMargin}Left`]: 0,
                [`${priceMargin}Unit`]: "px",
                [`${priceMargin}isLinked`]: true,
                [`${buttonMargin}Unit`]: "px",
                [`${buttonMargin}isLinked`]: true,
                [`${buttonPadding}Unit`]: "px",
                [`${buttonPadding}isLinked`]: false,
                [`${buttonPadding}Top`]: 0,
                [`${buttonPadding}Right`]: 0,
                [`${buttonPadding}Bottom`]: 20,
                [`${buttonPadding}Left`]: 0,
                [`${buttonBdrSdw}Bdr_Unit`]: "%",
                [`${buttonBdrSdw}Bdr_isLinked`]: true,
                [`${buttonBdrSdw}Rds_Unit`]: "px",
                [`${buttonBdrSdw}Rds_isLinked`]: true,
                [`${buttonBdrSdw}BorderType`]: "normal",
                [`${buttonBdrSdw}shadowType`]: "normal",
                [`${dimensionsMargin}Unit`]: "px",
                [`${dimensionsMargin}isLinked`]: false,
                [`${dimensionsPadding}Unit`]: "px",
                [`${dimensionsPadding}isLinked`]: false,
                [`${dimensionsPadding}Top`]: 15,
                [`${dimensionsPadding}Right`]: 15,
                [`${dimensionsPadding}Bottom`]: 15,
                [`${dimensionsPadding}Left`]: 15,
                [`${wrpBdShadow}Bdr_Unit`]: "%",
                [`${wrpBdShadow}Bdr_isLinked`]: true,
                [`${wrpBdShadow}Rds_Unit`]: "px",
                [`${wrpBdShadow}Rds_isLinked`]: true,
                [`${wrpBdShadow}BorderType`]: "normal",
                [`${wrpBdShadow}shadowType`]: "normal",
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
                        title={__("Layout", "essential-blocks")}
                        initialOpen={true}
                    >
                        <ResponsiveRangeController
                            baseLabel={__("Items per row", "essential-blocks")}
                            controlName={rowNumber}
                            resRequiredProps={resRequiredProps}
                            min={1}
                            max={10}
                            step={1}
                            noUnits
                        />
                        <ToggleControl
                            label={__("Show NFT Image?", "essential-blocks")}
                            checked={displayImage}
                            onChange={() =>
                                handleBlockDefault({
                                    displayImage: !displayImage,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Show Title?", "essential-blocks")}
                            checked={displayTitle}
                            onChange={() =>
                                handleBlockDefault({
                                    displayTitle: !displayTitle,
                                })
                            }
                        />
                        <ToggleControl
                            label={__(
                                "Show Current Owner?",
                                "essential-blocks"
                            )}
                            checked={displayOwner}
                            onChange={() =>
                                handleBlockDefault({
                                    displayOwner: !displayOwner,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Show Creator?", "essential-blocks")}
                            checked={displayCreator}
                            onChange={() =>
                                handleBlockDefault({
                                    displayCreator: !displayCreator,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Show Price?", "essential-blocks")}
                            checked={displayPrice}
                            onChange={() =>
                                handleBlockDefault({
                                    displayPrice: !displayPrice,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Show Last Sale?", "essential-blocks")}
                            checked={displayLastSale}
                            onChange={() =>
                                handleBlockDefault({
                                    displayLastSale: !displayLastSale,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Show Button?", "essential-blocks")}
                            checked={displayButton}
                            onChange={() =>
                                handleBlockDefault({
                                    displayButton: !displayButton,
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Layout Styles", "essential-blocks")}
                        initialOpen={true}
                    >
                        <ResponsiveRangeController
                            baseLabel={__("Columns Gap", "essential-blocks")}
                            controlName={columnGap}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={100}
                            step={1}
                            units={GAP_UNIT}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Row Gap", "essential-blocks")}
                            controlName={rowGap}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={100}
                            step={1}
                            units={GAP_UNIT}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Item Box Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        {layout === "list" && (
                            <>
                                <BaseControl
                                    label={__(
                                        "Vertical Alignment",
                                        "essential-blocks"
                                    )}
                                    id="eb-button-group-alignment"
                                >
                                    <ButtonGroup id="eb-button-group-alignment">
                                        {VERTICAL_ALIGNMENT.map(
                                            (item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={
                                                        listVerticalAlignment ===
                                                        item.value
                                                    }
                                                    isSecondary={
                                                        listVerticalAlignment !==
                                                        item.value
                                                    }
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            listVerticalAlignment:
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
                            </>
                        )}
                        <PanelBody title={__("Background")} initialOpen={true}>
                            <BackgroundControl
                                controlName={itemBg}
                                resRequiredProps={resRequiredProps}
                                noOverlay
                                noOverlayBgi
                            />
                        </PanelBody>
                        {layout === "grid" && gridPreset === "preset-3" && (
                            <>
                                <ColorControl
                                    label={__(
                                        "Overlay Color",
                                        "essential-blocks"
                                    )}
                                    color={gridOverlayBg}
                                    onChange={(color) =>
                                        handleBlockDefault({
                                            gridOverlayBg: color,
                                        })
                                    }
                                />
                            </>
                        )}
                        <PanelBody
                            title={__("Border & Shadow")}
                            initialOpen={true}
                        >
                            <BorderShadowControl
                                controlName={itemBdrSdw}
                                resRequiredProps={resRequiredProps}
                            />
                        </PanelBody>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={itemPadding}
                            baseLabel="Padding"
                        />
                    </PanelBody>

                    {displayImage && (
                        <PanelBody
                            title={__("Image Style", "essential-blocks")}
                            initialOpen={false}
                        >
                            <ResponsiveRangeController
                                baseLabel={__("Height", "essential-blocks")}
                                controlName={imageHeight}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={500}
                                step={1}
                                units={GAP_UNIT}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={imageWidth}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={500}
                                step={1}
                                units={GAP_UNIT}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={imageMargin}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={imageRadius}
                                baseLabel="Border Radius"
                            />
                        </PanelBody>
                    )}

                    <PanelBody
                        title={__("Title Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleColor}
                            onChange={(titleColor) =>
                                handleBlockDefault({ titleColor })
                            }
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={titleMargin}
                            baseLabel="Margin"
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Creator/Owner Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Show Name?", "essential-blocks")}
                            checked={showOwnerText}
                            onChange={() =>
                                handleBlockDefault({
                                    showOwnerText: !showOwnerText,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Show Image?", "essential-blocks")}
                            checked={showOwnerImage}
                            onChange={() =>
                                handleBlockDefault({
                                    showOwnerImage: !showOwnerImage,
                                })
                            }
                        />
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_owner}
                            resRequiredProps={resRequiredProps}
                        />
                        {displayCreator && (
                            <TextControl
                                label={__("Creator Label", "essential-blocks")}
                                value={creatorLabel}
                                onChange={(text) =>
                                    handleBlockDefault({ creatorLabel: text })
                                }
                            />
                        )}
                        {displayOwner && (
                            <TextControl
                                label={__("Owner Label", "essential-blocks")}
                                value={ownerLabel}
                                onChange={(text) =>
                                    handleBlockDefault({ ownerLabel: text })
                                }
                            />
                        )}
                        <ColorControl
                            label={__("Label Color", "essential-blocks")}
                            color={ownerTextColor}
                            onChange={(color) =>
                                handleBlockDefault({ ownerTextColor: color })
                            }
                        />
                        <ColorControl
                            label={__("Link Color", "essential-blocks")}
                            color={ownerLinkColor}
                            onChange={(color) =>
                                handleBlockDefault({ ownerLinkColor: color })
                            }
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Image Height", "essential-blocks")}
                            controlName={creatorImageHeight}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={500}
                            step={1}
                            units={GAP_UNIT}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Image Width", "essential-blocks")}
                            controlName={creatorImageWidth}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={500}
                            step={1}
                            units={GAP_UNIT}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={creatorImageBorder}
                            baseLabel="Image Border Radius"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={creatorMargin}
                            baseLabel="Margin"
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Price Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_price}
                            resRequiredProps={resRequiredProps}
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={priceColor}
                            onChange={(color) =>
                                handleBlockDefault({ priceColor: color })
                            }
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={priceMargin}
                            baseLabel="Margin"
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Button Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Button Text", "essential-blocks")}
                            value={buttonText}
                            onChange={(text) =>
                                handleBlockDefault({ buttonText: text })
                            }
                        />
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_button}
                            resRequiredProps={resRequiredProps}
                        />
                        <ColorControl
                            label={__("Text Color", "essential-blocks")}
                            color={buttonTextColor}
                            onChange={(color) =>
                                handleBlockDefault({ buttonTextColor: color })
                            }
                        />
                        <ColorControl
                            label={__("Background Color", "essential-blocks")}
                            color={buttonBgColor}
                            onChange={(color) =>
                                handleBlockDefault({ buttonBgColor: color })
                            }
                        />
                        <ColorControl
                            label={__("Hover Text Color", "essential-blocks")}
                            color={buttonHoverTextColor}
                            onChange={(color) =>
                                handleBlockDefault({
                                    buttonHoverTextColor: color,
                                })
                            }
                        />
                        <ColorControl
                            label={__(
                                "Hover Background Color",
                                "essential-blocks"
                            )}
                            color={buttonHoverBgColor}
                            onChange={(color) =>
                                handleBlockDefault({
                                    buttonHoverBgColor: color,
                                })
                            }
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={buttonMargin}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={buttonPadding}
                            baseLabel="Padding"
                        />
                        <PanelBody
                            title={__("Border & Shadow")}
                            initialOpen={true}
                        >
                            <BorderShadowControl
                                controlName={buttonBdrSdw}
                                resRequiredProps={resRequiredProps}
                            />
                        </PanelBody>
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Margin & Padding")}
                        initialOpen={false}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={dimensionsMargin}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={dimensionsPadding}
                            baseLabel="Padding"
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Wrapper Background", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BackgroundControl
                            controlName={wrapBg}
                            resRequiredProps={resRequiredProps}
                            noOverlay
                            noOverlayBgi
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Wrapper Border & Shadow")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={wrpBdShadow}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default NftGallery;
