import {
	// RichText,
	//  useBlockProps,
	InnerBlocks,
} from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const { tabId, tabParentId } = attributes;

	return (
		<>
			<div
				className={`eb-tab-wrapper`}
				data-tab-id={tabId}
				data-tab-parent-id={tabParentId}
			>
				<div className="eb-tab-inner">
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
};

export default save;
