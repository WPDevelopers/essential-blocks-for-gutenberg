/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

import attributes from "./attributes";
import SocialLinksDeprecated1 from "./components/deprecated-social-links-1";
import SocialLinksDeprecated2 from "./components/deprecated-social-links-2";
import SocialLinksDeprecated3 from "./components/deprecated-social-links-3";
import SocialLinks from "./components/social-links";
const { omit } = lodash;

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: (props) => {
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
            } = props.attributes;
            console.log('deprecated', imageUrl)

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-team-wrapper ${preset} ${preset === 'new-preset3' ? hoverPreset : ''} ${preset === 'preset3' && isContentOverlay ? 'content-overlay' : ''}`}>
                            <div className="eb-team-inner">
                                <div className="image">
                                    {avatarURL && (
                                        <a
                                            // className={`eb-button-anchor`}
                                            href={avatarURL ? avatarURL : ""}
                                            {...(newWindow && { target: "_blank" })}
                                            rel="noopener"
                                        >
                                            <img
                                                className="avatar"
                                                src={imageUrl}
                                                alt={imageAlt ? imageAlt : name}
                                            />
                                        </a>
                                    )}

                                    {!avatarURL && (
                                        <img
                                            className="avatar"
                                            src={imageUrl}
                                            alt={imageAlt ? imageAlt : name}
                                        />
                                    )}

                                    {socialInImage && showSocials && (
                                        <SocialLinksDeprecated3
                                            socialDetails={profilesOnly}
                                            icnEffect={icnEffect}
                                            linkNewTab={showLinkNewTab}
                                            preset={preset}
                                        />
                                    )}

                                    {preset === 'new-preset1' && showDesignation && (
                                        <RichText.Content
                                            tagName="h4"
                                            className="job_title"
                                            value={jobTitle}
                                        />
                                    )}
                                </div>
                                <div className="contents">
                                    {(preset === 'new-preset1' || preset === 'new-preset2' || preset === 'new-preset3') && (
                                        <div className="contents-inner">
                                            <div className="texts">
                                                {name && (
                                                    <RichText.Content
                                                        tagName="h3"
                                                        className="name"
                                                        value={name}
                                                    />
                                                )}

                                                {preset != 'new-preset1' && showDesignation && jobTitle && (
                                                    <RichText.Content
                                                        tagName="h4"
                                                        className="job_title"
                                                        value={jobTitle}
                                                    />
                                                )}

                                                {showCSeparator && (
                                                    <hr className="content_separator" />
                                                )}

                                                {showDescs && description && (
                                                    <RichText.Content
                                                        tagName="p"
                                                        className="description"
                                                        value={description}
                                                    />
                                                )}
                                            </div>
                                            {!socialInImage && showSocials && (
                                                <>
                                                    {showSSeparator && (
                                                        <hr className="social_separator" />
                                                    )}
                                                    <SocialLinksDeprecated3
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
                                            <div className="texts">
                                                {name && (
                                                    <RichText.Content
                                                        tagName="h3"
                                                        className="name"
                                                        value={name}
                                                    />
                                                )}
                                                {showDesignation && jobTitle && (
                                                    <RichText.Content
                                                        tagName="h4"
                                                        className="job_title"
                                                        value={jobTitle}
                                                    />
                                                )}

                                                {showCSeparator && (
                                                    <hr className="content_separator" />
                                                )}

                                                {showDescs && description && (
                                                    <RichText.Content
                                                        tagName="p"
                                                        className="description"
                                                        value={description}
                                                    />
                                                )}
                                            </div>
                                            {!socialInImage && showSocials && (
                                                <>
                                                    {showSSeparator && (
                                                        <hr className="social_separator" />
                                                    )}
                                                    <SocialLinksDeprecated3
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
        },
    },
    {
        attributes: {
            ...omit({ ...attributes }, ["showDesignation", "showSocialTitle", "hoverPreset", "isContentOverlay"]),
        },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
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
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-team-wrapper`}>
                            <div className="eb-team-inner">
                                <div className="image">
                                    {avatarURL && (
                                        <a
                                            // className={`eb-button-anchor`}
                                            href={avatarURL ? avatarURL : ""}
                                            {...(newWindow && { target: "_blank" })}
                                            rel="noopener"
                                        >
                                            <img
                                                className="avatar"
                                                src={imageUrl}
                                                alt={imageAlt ? imageAlt : name}
                                            />
                                        </a>
                                    )}

                                    {!avatarURL && (
                                        <img
                                            className="avatar"
                                            src={imageUrl}
                                            alt={imageAlt ? imageAlt : name}
                                        />
                                    )}

                                    {socialInImage && showSocials && (
                                        <SocialLinks
                                            socialDetails={profilesOnly}
                                            icnEffect={icnEffect}
                                            linkNewTab={showLinkNewTab}
                                        />
                                    )}
                                </div>
                                <div className="contents">
                                    <div className="texts">
                                        {name && (
                                            <RichText.Content
                                                tagName="h3"
                                                className="name"
                                                value={name}
                                            />
                                        )}
                                        {jobTitle && (
                                            <RichText.Content
                                                tagName="h4"
                                                className="job_title"
                                                value={jobTitle}
                                            />
                                        )}

                                        {showCSeparator && (
                                            <hr className="content_separator" />
                                        )}

                                        {showDescs && description && (
                                            <RichText.Content
                                                tagName="p"
                                                className="description"
                                                value={description}
                                            />
                                        )}
                                    </div>
                                    {!socialInImage && showSocials && (
                                        <>
                                            {showSSeparator && (
                                                <hr className="social_separator" />
                                            )}
                                            <SocialLinks
                                                socialDetails={profilesOnly}
                                                icnEffect={icnEffect}
                                                linkNewTab={showLinkNewTab}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            );
        },
    },
    {
        attributes: {
            ...omit({ ...attributes }, ["imageAlt", "showLinkNewTab"]),
        },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
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
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-team-wrapper`}>
                            <div className="eb-team-inner">
                                <div className="image">
                                    {avatarURL && (
                                        <a
                                            // className={`eb-button-anchor`}
                                            href={avatarURL ? avatarURL : ""}
                                            {...(newWindow && {
                                                target: "_blank",
                                            })}
                                            rel="noopener"
                                        >
                                            <img
                                                className="avatar"
                                                src={imageUrl}
                                                alt="member"
                                            />
                                        </a>
                                    )}

                                    {!avatarURL && (
                                        <img
                                            className="avatar"
                                            src={imageUrl}
                                            alt="member"
                                        />
                                    )}

                                    {socialInImage && showSocials && (
                                        <SocialLinksDeprecated2
                                            socialDetails={profilesOnly}
                                            icnEffect={icnEffect}
                                        />
                                    )}
                                </div>
                                <div className="contents">
                                    <div className="texts">
                                        {name && (
                                            <RichText.Content
                                                tagName="h3"
                                                className="name"
                                                value={name}
                                            />
                                        )}
                                        {jobTitle && (
                                            <RichText.Content
                                                tagName="h4"
                                                className="job_title"
                                                value={jobTitle}
                                            />
                                        )}

                                        {showCSeparator && (
                                            <hr className="content_separator" />
                                        )}

                                        {showDescs && description && (
                                            <RichText.Content
                                                tagName="p"
                                                className="description"
                                                value={description}
                                            />
                                        )}
                                    </div>
                                    {!socialInImage && showSocials && (
                                        <>
                                            {showSSeparator && (
                                                <hr className="social_separator" />
                                            )}
                                            <SocialLinksDeprecated2
                                                socialDetails={profilesOnly}
                                                icnEffect={icnEffect}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
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
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-team-wrapper`}>
                            <div className="eb-team-inner">
                                <div className="image">
                                    <img
                                        className="avatar"
                                        src={imageUrl}
                                        alt="member"
                                    />
                                    {socialInImage && showSocials && (
                                        <SocialLinks
                                            socialDetails={profilesOnly}
                                            icnEffect={icnEffect}
                                        />
                                    )}
                                </div>
                                <div className="contents">
                                    <div className="texts">
                                        <RichText.Content
                                            tagName="h3"
                                            className="name"
                                            value={name}
                                        />
                                        <RichText.Content
                                            tagName="h4"
                                            className="job_title"
                                            value={jobTitle}
                                        />

                                        {showCSeparator && (
                                            <hr className="content_separator" />
                                        )}

                                        {showDescs && (
                                            <RichText.Content
                                                tagName="p"
                                                className="description"
                                                value={description}
                                            />
                                        )}
                                    </div>
                                    {!socialInImage && showSocials && (
                                        <>
                                            {showSSeparator && (
                                                <hr className="social_separator" />
                                            )}
                                            <SocialLinksDeprecated1
                                                socialDetails={profilesOnly}
                                                icnEffect={icnEffect}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
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
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`${blockId} eb-team-wrapper`}>
                        <div className="eb-team-inner">
                            <div className="image">
                                <img
                                    className="avatar"
                                    src={imageUrl}
                                    alt="member"
                                />
                                {socialInImage && showSocials && (
                                    <SocialLinks
                                        socialDetails={profilesOnly}
                                        icnEffect={icnEffect}
                                    />
                                )}
                            </div>
                            <div className="contents">
                                <div className="texts">
                                    <RichText.Content
                                        tagName="h3"
                                        className="name"
                                        value={name}
                                    />
                                    <RichText.Content
                                        tagName="h4"
                                        className="job_title"
                                        value={jobTitle}
                                    />

                                    {showCSeparator && (
                                        <hr className="content_separator" />
                                    )}

                                    {showDescs && (
                                        <RichText.Content
                                            tagName="p"
                                            className="description"
                                            value={description}
                                        />
                                    )}
                                </div>
                                {!socialInImage && showSocials && (
                                    <>
                                        {showSSeparator && (
                                            <hr className="social_separator" />
                                        )}
                                        <SocialLinks
                                            socialDetails={profilesOnly}
                                            icnEffect={icnEffect}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
];

export default deprecated;
