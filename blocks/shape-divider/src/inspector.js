/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TabPanel, SelectControl } from "@wordpress/components";

/**
 * Internal depencencies
 */
import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    SHAPE_DIVIDER,
    POSITION,
} from "./constants";

import objAttributes from "./attributes";

const {
    ResponsiveDimensionsControl,
    BorderShadowControl,
    BackgroundControl,
    AdvancedControls,
    ShapeDividerControl,
} = window.EBControls;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resOption, shapeDividerPosition } = attributes;

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
                        // {
                        //     name: "styles",
                        //     title: "Styles",
                        //     className: "eb-tab styles",
                        // },
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
                                    <PanelBody
                                        title={__(
                                            "Options",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Position",
                                                "essential-blocks"
                                            )}
                                            value={shapeDividerPosition}
                                            options={POSITION}
                                            onChange={(selected) =>
                                                setAttributes({
                                                    shapeDividerPosition: selected,
                                                })
                                            }
                                        />
                                        <ShapeDividerControl
                                            controlName={SHAPE_DIVIDER}
                                            position={shapeDividerPosition}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
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
                                    <PanelBody
                                        title={__(
                                            "Background",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={WRAPPER_BG}
                                            resRequiredProps={resRequiredProps}
                                            noOverlay
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={WRAPPER_BORDER_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            // noShadow
                                            // noBorder
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
}
export default Inspector;
