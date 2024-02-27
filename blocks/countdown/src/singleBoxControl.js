import { __ } from "@wordpress/i18n";
import {
    PanelBody,
    __experimentalDivider as Divider,
} from "@wordpress/components";

const { BackgroundControl, ColorControl } = window.EBControls;

export default function singleBoxControl({
    heading,
    resRequiredProps,
    bgControlName,
    dgColorAttrString,
    lbColorAttrString,
    bdColorAttrString,
}) {
    const { setAttributes, attributes } = resRequiredProps;
    return (
        <>
            <h3
                style={{
                    fontSize: "15px",
                    color: "#444",
                    margin: "0 0 10px 0",
                }}
            >
                {heading}
            </h3>
            <PanelBody
                title={__("Background", "essential-blocks")}
                // initialOpen={false}
            >
                <BackgroundControl
                    noTransition
                    controlName={bgControlName}
                    resRequiredProps={resRequiredProps}
                    noOverlay
                    noMainBgi
                    // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                />
            </PanelBody>

            <ColorControl
                label={__("Digit Color", "essential-blocks")}
                color={attributes[`${dgColorAttrString}`]}
                onChange={(dgColor) =>
                    setAttributes({ [`${dgColorAttrString}`]: dgColor })
                }
            />

            <ColorControl
                label={__("Label Color", "essential-blocks")}
                color={attributes[`${lbColorAttrString}`]}
                onChange={(lbColor) =>
                    setAttributes({ [`${lbColorAttrString}`]: lbColor })
                }
            />

            {attributes.boxsBds_borderStyle !== "none" && (
                <ColorControl
                    label={__("Border Color", "essential-blocks")}
                    color={attributes[`${bdColorAttrString}`]}
                    onChange={(bdColor) =>
                        setAttributes({ [`${bdColorAttrString}`]: bdColor })
                    }
                />
            )}

            <Divider />
        </>
    );
}
