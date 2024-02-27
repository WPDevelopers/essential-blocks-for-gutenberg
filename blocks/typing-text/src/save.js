import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		blockId,
		prefix,
		typedText,
		suffix,
		typeSpeed,
		startDelay,
		smartBackspace,
		backSpeed,
		backDelay,
		fadeOut,
		fadeOutDelay,
		loop,
		showCursor,
		classHook,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
				<div className={`eb-typed-wrapper ${blockId}`} data-id={blockId}>
					<div
						className="eb-typed-content"
						data-type-speed={typeSpeed}
						data-start-delay={startDelay}
						data-smart-backspace={smartBackspace}
						data-back-speed={backSpeed}
						data-back-delay={backDelay}
						data-fade={fadeOut}
						data-fade-delay={fadeOutDelay}
						data-loop={loop}
						data-cursor={showCursor}
					>
						<span className="eb-typed-prefix">{prefix}</span>
						<span className="eb-typed-text-wrapper is-hidden">
							{typedText.map((item, index) => (
								<span key={index} className="eb-typed-text">{item.text}</span>
							))}
						</span>
						<span className="eb-typed-view" />
						<span className="eb-typed-suffix">{suffix}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
