/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			anchor: true,
			color: {
				__experimentalDuotone: "img",
				text: false,
				background: false,
			},
		},
		save: ({ attributes }) => {
			const {
				blockId,
				image,
				imageCaption,
				horizontalAlign,
				verticalAlign,
				verticalAlignCap2,
				stylePreset,
				captionStyle,
				hoverEffect,
				openInNewTab,
				imageLink,
				enableLink,
			} = attributes;

			let imageURL = image.url;

			const linkTarget = openInNewTab ? "_blank" : undefined;

			if (imageURL === "") return null;

			return (
				<div {...useBlockProps.save()}>
					<figure
						className={`eb-advanced-image-wrapper ${blockId} img-style-${stylePreset} ${captionStyle} caption-horizontal-${horizontalAlign} caption-vertical-${verticalAlign} ${verticalAlignCap2} ${hoverEffect}`}
						data-id={blockId}
					>
						<div className="image-wrapper">
							{enableLink && (
								<a
									className={"eb-advimg-link"}
									href={imageLink}
									target={linkTarget}
									rel={linkTarget === "_blank" ? "noopener" : undefined}
								></a>
							)}
							<img src={imageURL} alt={image.alt} />
							{!RichText.isEmpty(imageCaption) &&
								captionStyle != "caption-style-2" && (
									<RichText.Content tagName="figcaption" value={imageCaption} />
								)}
						</div>

						{!RichText.isEmpty(imageCaption) &&
							captionStyle == "caption-style-2" && (
								<RichText.Content tagName="figcaption" value={imageCaption} />
							)}
					</figure>
				</div>
			);
		},
	},
];

export default deprecated;
