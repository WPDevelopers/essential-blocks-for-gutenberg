import { useBlockProps } from "@wordpress/block-editor";

import InfoboxContainer from "./components/infobox-save";

export default function save({ attributes }) {
    const {
        blockId,
        selectedIcon,
        infoboxIcon,
        number = 0,
        media,
        imageUrl,
        imageAlt,
        enableSubTitle,
        enableDescription,
        infoboxLink,
        linkNewTab,
        enableButton,
        isInfoClick,
        buttonText,
        title,
        subTitle,
        description,
        titleTag,
        subTitleTag,
        btnEffect,
        classHook,
    } = attributes;

    const requiredProps = {
        selectedIcon,
        infoboxIcon,
        blockId,
        number,
        media,
        imageUrl,
        imageAlt,
        enableSubTitle,
        enableDescription,
        infoboxLink,
        linkNewTab,
        enableButton,
        isInfoClick,
        buttonText,
        title,
        subTitle,
        description,
        titleTag,
        subTitleTag,
        btnEffect,
        classHook,
    };

    return (
        <div {...useBlockProps.save()}>
            {isInfoClick ? (
                <a
                    href={infoboxLink}
                    target={linkNewTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="info-click-link info-wrap-link"
                >
                    <InfoboxContainer requiredProps={requiredProps} />
                </a>
            ) : (
                <InfoboxContainer requiredProps={requiredProps} />
            )}
        </div>
    );
}
