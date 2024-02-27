/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { omit } from "lodash";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			html: false,
			anchor: true,
			align: ["wide", "full"],
		},
		save: ({ attributes }) => {
			const { blockId } = attributes;

			return (
				<div {...useBlockProps.save()}>
					<div className={`eb-row-root-container ${blockId}`} data-id={blockId}>
						<div className={`eb-row-wrapper`}>
							<div className="eb-row-inner">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		supports: {
			// inserter: false,
			// reusable: false,
			html: false,
			anchor: true,
			// Declare support for specific alignment options.
			align: ["wide", "full"],
		},
		attributes: omit(
			{
				...attributes,
				wrpMrg_Right: {
					type: "string",
				},
				wrpMrg_Left: {
					type: "string",
				},
				TABwrpMrg_Right: {
					type: "string",
				},
				TABwrpMrg_Left: {
					type: "string",
				},
				MOBwrpMrg_Right: {
					type: "string",
				},
				MOBwrpMrg_Left: {
					type: "string",
				},
			},
			[]
		),
		save: ({ attributes }) => {
			const { blockId } = attributes;

			return (
				<div {...useBlockProps.save()}>
					<div className={`eb-row-wrapper ${blockId}`} data-id={blockId}>
						<div className="eb-row-inner">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
