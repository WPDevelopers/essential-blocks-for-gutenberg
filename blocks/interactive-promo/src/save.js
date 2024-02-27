/**
 * Internal dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		blockId,
		header,
		content,
		effectName,
		imageURL,
		imageAltTag,
		newWindow,
		link,
		classHook,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
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
		</div>
	);
};

export default Save;
