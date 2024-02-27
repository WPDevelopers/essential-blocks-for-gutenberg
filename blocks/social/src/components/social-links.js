export default function socialLinks({ profilesOnly, icnEffect }) {
    return (
        <ul className="eb-socials">
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
                        <i className={`hvr-icon eb-social-icon ${icon}`}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
}
