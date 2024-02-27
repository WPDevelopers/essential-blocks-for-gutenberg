/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

import SocialLinks from "./components/social-links";

const {
    duplicateBlockIdFix,
} = window.EBControls;

import classnames from "classnames";
import Inspector from "./inspector";
import Style from "./style";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
        name
    } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        socialDetails,
        profilesOnly = [],
        icnEffect,
        classHook,
        showTitle,
        iconShape,
        isFloating,
        cover
    } = attributes;

    //
    useEffect(() => {
        const newProfiles = socialDetails.map((profile) => ({
            ...profile,
            isExpanded: false,
        }));

        setAttributes({ socialDetails: newProfiles });

        if (socialDetails.length > 0) return;

        const newSclDtails = [
            {
                icon: "fab fa-facebook-f",
                iconText: __("Facebook", "essential-blocks"),
                isExpanded: false,
            },
            {
                icon: "fab fa-x-twitter",
                iconText: __("Twitter", "essential-blocks"),
                isExpanded: false,
            },
            {
                icon: "fab fa-linkedin-in",
                iconText: __("Linkedin", "essential-blocks"),
                isExpanded: false,
            },
            {
                icon: "fab fa-whatsapp",
                iconText: __("WhatsApp", "essential-blocks"),
                isExpanded: false,
            },
        ];

        setAttributes({ socialDetails: newSclDtails });
    }, []);

    //
    useEffect(() => {
        const profilesOnly = socialDetails.map(({ icon, link, iconText }) => ({
            icon,
            link,
            iconText,
        }));

        setAttributes({ profilesOnly });
    }, [socialDetails]);

    // this useEffect is for creating a unique blockId for each block's unique className
    useEffect(() => {
        const BLOCK_PREFIX = "eb-social-share";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    return cover.length ? (
        <div>
            <img src={cover} alt="table of content" style={{ maxWidth: "100%" }} />
        </div>
    ) : (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`${blockId} eb-social-share-wrapper${isFloating ? " eb-social-share-floating" : ""
                            }${isFloating && "circular" == iconShape
                                ? " eb-social-share-circular"
                                : ""
                            }`}
                    >
                        <SocialLinks
                            profilesOnly={profilesOnly}
                            icnEffect={icnEffect}
                            showTitle={showTitle}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
