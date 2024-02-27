/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";
import SocialLinks from "./components/social-links";
import SocialLinksDeprecated1 from "./components/depricated-social-links-1";
import SocialLinksDeprecated2 from "./components/depricated-social-links-2";

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                profilesOnly = [],
                icnEffect,
                classHook,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-social-links-wrapper`}>
                            <SocialLinksDeprecated2
                                profilesOnly={profilesOnly}
                                icnEffect={icnEffect}
                            />
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
                profilesOnly = [],
                icnEffect,
                classHook,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-social-links-wrapper`}>
                            <SocialLinksDeprecated1
                                profilesOnly={profilesOnly}
                                icnEffect={icnEffect}
                            />
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
            const { blockId, profilesOnly = [], icnEffect } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`${blockId} eb-social-links-wrapper`}>
                        <SocialLinks
                            profilesOnly={profilesOnly}
                            icnEffect={icnEffect}
                        />
                    </div>
                </div>
            );
        },
    },
];

export default deprecated;
