export default function SocialLinks({
    socialDetails = [],
    icnEffect,
    linkNewTab,
    preset
}) {
    return (
        <ul className={`socials ${preset === 'new-preset3' ? 'socials-title' : ""}`}>
            {socialDetails.map(({ title, link, icon }, index) => (
                <li key={index}>
                    <a
                        className={icnEffect || " "}
                        href={link ? link : "#"}
                        {...(link && {
                            target: linkNewTab ? "_blank" : "_self",
                        })}
                        // target={linkNewTab ? "_blank" : "_self"}
                        rel="noopener"
                        title={title ? title : ""}
                    >
                        <i className={`hvr-icon social-icon ${icon}`}></i>
                        {preset === 'new-preset3' && title ? title : ""}
                    </a>
                </li>
            ))}
        </ul>
    );
}
