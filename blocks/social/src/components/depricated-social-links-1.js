export default function SocialLinksDeprecated1({ profilesOnly, icnEffect }) {
	return (
		<ul className="socials">
			{profilesOnly.map(({ link, icon }, index) => (
				<li key={index}>
					<a
						className={`${
							((icon || " ").match(/fa-([\w\-]+)/i) || [" ", " "])[1]
						}-original ${icnEffect || " "}`}
						href={link}
					>
						<i className={`hvr-icon social-icon ${icon}`}></i>
					</a>
				</li>
			))}
		</ul>
	);
}
