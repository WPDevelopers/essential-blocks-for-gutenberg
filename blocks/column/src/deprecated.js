/**
 * WordPress dependencies
 */
import { InnerBlocks } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			inserter: false,
			reusable: false,
			html: false,
		},
		save: ({ attributes }) => {
			const {
				blockId,
				classHook
			} = attributes;

			return (
				<>
					<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
						<div className={`eb-column-wrapper ${blockId}`}>
							<div className="eb-column-inner">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</>
			);
		},
	},
	{
		attributes: { ...attributes },
		supports: {
			inserter: false,
			reusable: false,
			html: false,
		},
		save: ({ attributes }) => {
			const { blockId } = attributes;

			return (
				<>
					<div className={`eb-column-wrapper ${blockId}`}>
						<div className="eb-column-inner">
							<InnerBlocks.Content />
						</div>
					</div>
				</>
			);
		},
	},
];

export default deprecated;
