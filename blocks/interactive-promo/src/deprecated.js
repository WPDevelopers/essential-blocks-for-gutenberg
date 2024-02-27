/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			align: ["wide", "full"],
		},
		save: ({ attributes }) => {
			const {
				blockId,
				header,
				content,
				effectName,
				imageURL,
				imageAltTag,
				newWindow,
				link,
			} = attributes;

			return (
				<div {...useBlockProps.save()}>
					<div className={`eb-interactive-promo-wrapper ${blockId}`}>
						<div
							className="eb-interactive-promo-container"
							data-effect={effectName}
						>
							<div className="eb-interactive-promo hover-effect">
								<figure className={`effect-${effectName}`}>
									<img src={imageURL} alt={imageAltTag} />
									<figcaption>
										<h2 className="eb-interactive-promo-header">{header}</h2>
										<p className="eb-interactive-promo-content">{content}</p>
										{link && (
											<a
												href={link}
												target={newWindow ? "_blank" : "_self"}
												rel="noopener noreferrer"
											/>
										)}
									</figcaption>
								</figure>
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
