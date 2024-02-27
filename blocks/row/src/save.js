import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const { 
		blockId,
		classHook,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
				<div className={`eb-row-root-container ${blockId}`} data-id={blockId}>
					<div className={`eb-row-wrapper`}>
						<div className="eb-row-inner">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default save;
