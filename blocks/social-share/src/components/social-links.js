const { EBDisplayIcon } = window.EBControls;
export default function socialLinks({ profilesOnly, icnEffect, showTitle }) {
    return (
        <ul className="eb-social-shares">
            {profilesOnly.map(({ link, icon, iconText, linkOpenNewTab }, index) => (
                <li key={index}>
                    <a
                        className={`${((icon || " ").match(/fa-([\w\-]+)/i) || [" ", " "])[1]
                            }-original ${icnEffect || " "}`}
                        href={link}
                        target={linkOpenNewTab ? "_blank" : "_self"}
                        rel="noopener"
                    >
                        <EBDisplayIcon className={`hvr-icon eb-social-share-icon`} icon={icon} />
                        {showTitle && iconText && (
                            <>
                                <span className="eb-social-share-text">{iconText}</span>
                            </>
                        )}
                    </a>
                </li>
            ))}
        </ul>
    );
}
