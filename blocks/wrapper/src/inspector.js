/**
 * WordPress dependencies
 *
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    TabPanel,
    ToggleControl,
    BaseControl,
    ButtonGroup,
    Button,
    SelectControl,
} from "@wordpress/components";
/**
 * Internal dependencies
 *
 */
import {
    WRAPPER_WIDTH,
    WRAPPER_HEIGHT,
    WRAPPER_BACKGROUND,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    SHAPE_DIVIDER_POSITIONS,
    SHAPE_DIVIDER_BOTTOM,
    SHAPE_DIVIDER_TOP,
    WRAPPER_ALIGN,
    HEIGHT_UNIT_TYPES,
    CONTENT_ALIGNMENT,
} from "./constants";
import objAttributes from "./attributes";

const {
    ResponsiveRangeController,
    BackgroundControl,
    BorderShadowControl,
    ResponsiveDimensionsControl,
    AdvancedControls,
    ShapeDividerControl,
} = window.EBControls;

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        isWrapperWidth,
        shapeDividerPosition,
        useCustomHeight,
        contentAlign,
        align
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
                        <div className={`eb-tab-controls ${tab.name}`}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "General",
                                            "essential-blocks"
                                        )}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Wrapper Width",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {WRAPPER_ALIGN.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                align ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                align !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    align:
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

                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Content Width",
                                                "essential-blocks"
                                            )}
                                            controlName={WRAPPER_WIDTH}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={2560}
                                            step={1}
                                            noUnits
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Use Width In Wrapper",
                                                "essential-blocks"
                                            )}
                                            checked={isWrapperWidth}
                                            onChange={() => {
                                                setAttributes({
                                                    isWrapperWidth: !isWrapperWidth,
                                                });
                                            }}
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Use Custom Height",
                                                "essential-blocks"
                                            )}
                                            checked={useCustomHeight}
                                            onChange={() => {
                                                setAttributes({
                                                    useCustomHeight: !useCustomHeight,
                                                });
                                            }}
                                        />
                                        {useCustomHeight && (
                                            <>
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Height",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={WRAPPER_HEIGHT}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={0}
                                                    max={2560}
                                                    step={1}
                                                    units={HEIGHT_UNIT_TYPES}
                                                />
                                                <SelectControl
                                                    label={__(
                                                        "Content Alignment",
                                                        "essential-blocks"
                                                    )}
                                                    value={contentAlign}
                                                    options={CONTENT_ALIGNMENT}
                                                    onChange={(selected) =>
                                                        setAttributes({
                                                            contentAlign: selected,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Shape Divider",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <BaseControl>
                                            <ButtonGroup>
                                                {SHAPE_DIVIDER_POSITIONS.map(
                                                    (item, key) => (
                                                        <Button
                                                            key={key}
                                                            // isLarge
                                                            isPrimary={
                                                                shapeDividerPosition ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                shapeDividerPosition !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    shapeDividerPosition:
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
                                        {shapeDividerPosition == "top" && (
                                            <ShapeDividerControl
                                                position="top"
                                                controlName={SHAPE_DIVIDER_TOP}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        )}
                                        {shapeDividerPosition == "bottom" && (
                                            <ShapeDividerControl
                                                position="bottom"
                                                controlName={
                                                    SHAPE_DIVIDER_BOTTOM
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
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
                                            controlName={WRAPPER_BACKGROUND}
                                            resRequiredProps={resRequiredProps}
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
                                            controlName={WRAPPER_BORDER}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
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
