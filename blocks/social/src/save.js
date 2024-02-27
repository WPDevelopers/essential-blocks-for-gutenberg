import { useBlockProps } from "@wordpress/block-editor";

import SocialLinks from "./components/social-links";

export default function Save({ attributes }) {
	const {
		blockId,
		profilesOnly = [],
		icnEffect,
		classHook,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
				<div className={`${blockId} eb-social-links-wrapper`}>
					<SocialLinks profilesOnly={profilesOnly} icnEffect={icnEffect} />
				</div>
			</div>
		</div>
	);
}
