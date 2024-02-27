/**
 * Internal dependencies
 */

const { softMinifyCssStrings, StyleComponent } = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        title,
        titleColor,
        clickable,
        iconColor,
        accordionColor,
        parentBlockId,
    } = attributes;

    // CSS/styling Codes Starts from Here

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
	${accordionColor
            ? `.${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title-wrapper {
		background-image: unset;
		background-color: ${accordionColor};
	}`
            : ""
        }
	${titleColor
            ? `.${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title {
		color: ${titleColor};
	}`
            : ""
        }
	${iconColor
            ? `.${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-icon {
		color: ${iconColor};
	}`
            : ""
        }
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(``);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(``);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}
