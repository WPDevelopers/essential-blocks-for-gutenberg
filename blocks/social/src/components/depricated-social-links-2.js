export default function SocialLinksDeprecated2({ profilesOnly, icnEffect }) {
    return (
        <ul className="socials">
            {profilesOnly.map(({ link, icon, linkOpenNewTab }, index) => (
                <li key={index}>
                    <a
                        className={`${
                            ((icon || " ").match(/fa-([\w\-]+)/i) || [
                                " ",
                                " ",
                            ])[1]
                        }-original ${icnEffect || " "}`}
                        href={link}
                        target={linkOpenNewTab ? "_blank" : "_self"}
                        rel="noopener"
                    >
                        <i className={`hvr-icon social-icon ${icon}`}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
}
