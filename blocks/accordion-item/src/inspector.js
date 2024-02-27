/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, TabPanel } from "@wordpress/components";
const { ColorControl } = window.EBControls;

const Inspector = ({ attributes, setAttributes }) => {
	const { clickable, accordionColor, titleColor, iconColor } = attributes;

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
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls " + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody>
										<ToggleControl
											label={__("Default Open?", "essential-blocks")}
											checked={clickable}
											onChange={() => setAttributes({ clickable: !clickable })}
										/>
										<ColorControl
											label={__(
												"Accordion Background Color",
												"essential-blocks"
											)}
											color={accordionColor}
											onChange={(accordionColor) =>
												setAttributes({ accordionColor })
											}
										/>
										<ColorControl
											label={__("Accordion Title Color", "essential-blocks")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>
										<ColorControl
											label={__("Accordion Icon Color", "essential-blocks")}
											color={iconColor}
											onChange={(iconColor) => setAttributes({ iconColor })}
										/>
									</PanelBody>
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
