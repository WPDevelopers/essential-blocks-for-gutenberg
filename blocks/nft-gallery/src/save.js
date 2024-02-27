import { RichText, useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const {
		blockId,
		settings,
		source,
		layout,
		displayImage,
		displayTitle,
		displayCreator,
		displayOwner,
		displayPrice,
		displayLastSale,
		displayButton,
		creatorLabel,
		ownerLabel,
		buttonText,
        showOwnerText,
        showOwnerImage,
        gridPreset,
        listPreset,
		classHook,
	} = attributes;

	const dataAttributes = {
		settings,
		layout,
		displayImage,
		displayTitle,
		displayCreator,
		displayOwner,
		displayPrice,
		displayLastSale,
		displayButton,
		creatorLabel,
		ownerLabel,
		buttonText,
        showOwnerText,
        showOwnerImage,
        gridPreset,
        listPreset,
	};

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
				<div
					className={`eb-nft-gallery-wrapper ${blockId}`}
					data-id={blockId}
					data-source={source}
					data-attributes={JSON.stringify(dataAttributes)}
				></div>
			</div>
		</div>
	);
};

export default save;
