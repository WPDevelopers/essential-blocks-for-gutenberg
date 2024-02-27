import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const {
		blockId,
		classHook,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook} ${blockProps.className}`}>
				<div className={`eb-column-wrapper ${blockId}`}>
					<div className="eb-column-inner">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</>
	);
};

export default save;
