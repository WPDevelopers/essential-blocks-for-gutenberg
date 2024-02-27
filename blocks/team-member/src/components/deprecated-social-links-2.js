export default function SocialLinks({ socialDetails = [], icnEffect }) {
    return (
        <ul className="socials">
            {socialDetails.map(({ link, icon, linkOpenNewTab }, index) => (
                <li key={index}>
                    <a
                        className={icnEffect || " "}
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
