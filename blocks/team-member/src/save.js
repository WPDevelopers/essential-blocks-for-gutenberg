import { useBlockProps, RichText } from "@wordpress/block-editor";
import SocialLinks from "./components/social-links";

export default function Save({ attributes }) {
    const {
        blockId,
        name,
        jobTitle,
        description,
        showDescs,
        showSocials,
        showCSeparator,
        showSSeparator,
        imageUrl,
        profilesOnly,
        socialInImage,
        icnEffect,
        classHook,
        avatarURL,
        newWindow,
        showLinkNewTab,
        imageAlt,
        preset,
        showDesignation,
        hoverPreset,
        isContentOverlay,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div className={`${blockId} eb-team-wrapper ${preset} ${preset === 'new-preset3' ? hoverPreset : ''} ${preset === 'preset3' && isContentOverlay ? 'content-overlay' : ''}`}>
                    <div className="eb-team-inner">
                        <div className="eb-team-member-image">
                            {avatarURL && (
                                <a
                                    // className={`eb-button-anchor`}
                                    href={avatarURL ? avatarURL : ""}
                                    {...(newWindow && { target: "_blank" })}
                                    rel="noopener"
                                >
                                    <img
                                        className="eb-team-member-avatar"
                                        src={imageUrl}
                                        alt={imageAlt ? imageAlt : name}
                                    />
                                </a>
                            )}

                            {!avatarURL && (
                                <img
                                    className="eb-team-member-avatar"
                                    src={imageUrl}
                                    alt={imageAlt ? imageAlt : name}
                                />
                            )}

                            {socialInImage && showSocials && (
                                <SocialLinks
                                    socialDetails={profilesOnly}
                                    icnEffect={icnEffect}
                                    linkNewTab={showLinkNewTab}
                                    preset={preset}
                                />
                            )}

                            {preset === 'new-preset1' && showDesignation && (
                                <RichText.Content
                                    tagName="h4"
                                    className="eb-team-member-job-title"
                                    value={jobTitle}
                                />
                            )}
                        </div>
                        <div className="eb-team-member-contents">
                            {(preset === 'new-preset1' || preset === 'new-preset2' || preset === 'new-preset3') && (
                                <div className="eb-team-member-contents-inner">
                                    <div className="eb-team-member-texts">
                                        {name && (
                                            <RichText.Content
                                                tagName="h3"
                                                className="eb-team-member-name"
                                                value={name}
                                            />
                                        )}

                                        {preset != 'new-preset1' && showDesignation && jobTitle && (
                                            <RichText.Content
                                                tagName="h4"
                                                className="eb-team-member-job-title"
                                                value={jobTitle}
                                            />
                                        )}

                                        {showCSeparator && (
                                            <hr className="eb-team-member-content-separator" />
                                        )}

                                        {showDescs && description && (
                                            <RichText.Content
                                                tagName="p"
                                                className="eb-team-member-description"
                                                value={description}
                                            />
                                        )}
                                    </div>
                                    {!socialInImage && showSocials && (
                                        <>
                                            {showSSeparator && (
                                                <hr className="eb-team-member-social-separator" />
                                            )}
                                            <SocialLinks
                                                socialDetails={profilesOnly}
                                                icnEffect={icnEffect}
                                                linkNewTab={showLinkNewTab}
                                                preset={preset}
                                            />
                                        </>
                                    )}
                                </div>
                            )}

                            {(preset != 'new-preset1' && preset != 'new-preset2' && preset != 'new-preset3') && (
                                <>
                                    <div className="eb-team-member-texts">
                                        {name && (
                                            <RichText.Content
                                                tagName="h3"
                                                className="eb-team-member-name"
                                                value={name}
                                            />
                                        )}
                                        {showDesignation && jobTitle && (
                                            <RichText.Content
                                                tagName="h4"
                                                className="eb-team-member-job-title"
                                                value={jobTitle}
                                            />
                                        )}

                                        {showCSeparator && (
                                            <hr className="eb-team-member-content-separator" />
                                        )}

                                        {showDescs && description && (
                                            <RichText.Content
                                                tagName="p"
                                                className="eb-team-member-description"
                                                value={description}
                                            />
                                        )}
                                    </div>
                                    {!socialInImage && showSocials && (
                                        <>
                                            {showSSeparator && (
                                                <hr className="eb-team-member-social-separator" />
                                            )}
                                            <SocialLinks
                                                socialDetails={profilesOnly}
                                                icnEffect={icnEffect}
                                                linkNewTab={showLinkNewTab}
                                                preset={preset}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
