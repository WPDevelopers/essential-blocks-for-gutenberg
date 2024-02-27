/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			align: ["wide", "full"],
		},
		save: ({ attributes }) => {
			const { blockId, showAfterDismiss, title, text } = attributes;

			return (
				<div {...useBlockProps.save()}>
					<div
						className={`eb-notice-wrapper ${blockId}`}
						data-id={blockId}
						data-show-again={showAfterDismiss}
					>
						<div className="eb-notice-title-wrapper">
							<RichText.Content
								tagName="div"
								className="eb-notice-title"
								value={title}
							/>
						</div>
						<span className="eb-notice-dismiss" style={{ cursor: "pointer" }} />
						<div>
							<RichText.Content
								tagName="div"
								className="eb-notice-text"
								value={text}
							/>
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
