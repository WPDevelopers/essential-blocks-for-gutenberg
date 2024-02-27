/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { omit } from "lodash";

import attributes from "./attributes";
// import InfoboxContainer from "./components/infobox-save";

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                // blockId attribute for making unique className and other uniqueness ⬇
                blockId,

                // counter settings attributes ⬇
                target,
                duration,
                counterTitle,
                counterSuffix,
                counterPrefix,
                startValue,
                isShowSeparator,
                separator,

                //
                media,
                selectedIcon,
                imageUrl,
                titleLevel,
                classHook,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`${blockId} eb-counter-wrapper`}>
                            {media === "icon" ? (
                                <div className="icon-img-wrapper">
                                    <div className="eb-icon ">
                                        <span
                                            data-icon={selectedIcon}
                                            className={`eb-counter-icon-data-selector  ${selectedIcon}`}
                                        ></span>
                                    </div>
                                </div>
                            ) : null}

                            {media === "image" ? (
                                <div className="icon-img-wrapper">
                                    <div className="eb-counter-image-wrapper">
                                        <img className="eb-counter-image" src={imageUrl} />
                                    </div>
                                </div>
                            ) : null}

                            <div className="counter-contents-wrapper">
                                <attributes.counterTitleLevel className="eb-counter-number">
                                    <span className="eb-counter-prefix">{counterPrefix}</span>
                                    <span
                                        className="eb-counter eb-counter-number"
                                        data-duration={duration ? Math.floor(Math.abs(duration)) : 0}
                                        data-startValue={startValue ? Math.floor(Math.abs(startValue)) : 0}
                                        data-target={target ? Math.floor(Math.abs(target)) : 0}
                                        data-separator={separator}
                                        data-isShowSeparator={isShowSeparator}
                                    >
                                        0
                                    </span>
                                    <span className="eb-counter-suffix">{counterSuffix}</span>
                                </attributes.counterTitleLevel>

                                <RichText.Content
                                    tagName={titleLevel}
                                    className="eb-counter-title"
                                    value={counterTitle}
                                />
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
                // blockId attribute for making unique className and other uniqueness ⬇
                blockId,

                // counter settings attributes ⬇
                target,
                duration,
                counterTitle,
                counterSuffix,
                counterPrefix,
                startValue,
                isShowSeparator,
                separator,

                //
                media,
                selectedIcon,
                imageUrl,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`${blockId} eb-counter-wrapper`}>
                        {media === "icon" ? (
                            <div className="icon-img-wrapper">
                                <div className="eb-icon ">
                                    <span
                                        data-icon={selectedIcon}
                                        className={`eb-counter-icon-data-selector  ${selectedIcon}`}
                                    ></span>
                                </div>
                            </div>
                        ) : null}

                        {media === "image" ? (
                            <div className="icon-img-wrapper">
                                <div className="eb-counter-image-wrapper">
                                    <img className="eb-counter-image" src={imageUrl} />
                                </div>
                            </div>
                        ) : null}

                        <div className="counter-contents-wrapper">
                            <h4 className="eb-counter-number">
                                <span className="eb-counter-prefix">{counterPrefix}</span>
                                <span
                                    className="eb-counter eb-counter-number"
                                    data-duration={duration ? Math.floor(Math.abs(duration)) : 0}
                                    data-startValue={
                                        startValue ? Math.floor(Math.abs(startValue)) : 0
                                    }
                                    data-target={target ? Math.floor(Math.abs(target)) : 0}
                                    data-separator={separator}
                                    data-isShowSeparator={isShowSeparator}
                                >
                                    0
                                </span>
                                <span className="eb-counter-suffix">{counterSuffix}</span>
                            </h4>

                            <RichText.Content
                                tagName="h3"
                                className="eb-counter-title"
                                value={counterTitle}
                            />
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: omit(
            {
                ...attributes,
            },
            [
                "MOBimgHRange",
                "MOBimgHUnit",
                "MOBimgWRange",
                "MOBimgWUnit",
                "MOBmIconZRange",
                "MOBmIconZUnit",
                "MOBmcGapRange",
                "MOBmdBgMgBottom",
                "MOBmdBgMgLeft",
                "MOBmdBgMgRight",
                "MOBmdBgMgTop",
                "MOBmdBgMgUnit",
                "MOBmdBgPdBottom",
                "MOBmdBgPdLeft",
                "MOBmdBgPdRight",
                "MOBmdBgPdTop",
                "MOBmdBgPdUnit",
                "MOBmdBgRsBottom",
                "MOBmdBgRsLeft",
                "MOBmdBgRsRight",
                "MOBmdBgRsTop",
                "MOBmdBgRsUnit",
                "TABimgHRange",
                "TABimgHUnit",
                "TABimgWRange",
                "TABimgWUnit",
                "TABmIconZRange",
                "TABmIconZUnit",
                "TABmcGapRange",
                "TABmdBgMgBottom",
                "TABmdBgMgLeft",
                "TABmdBgMgRight",
                "TABmdBgMgTop",
                "TABmdBgMgUnit",
                "TABmdBgPdBottom",
                "TABmdBgPdLeft",
                "TABmdBgPdRight",
                "TABmdBgPdTop",
                "TABmdBgPdUnit",
                "TABmdBgRsBottom",
                "TABmdBgRsLeft",
                "TABmdBgRsRight",
                "TABmdBgRsTop",
                "TABmdBgRsUnit",
                "contentAlignment",
                "contentsAlignSelf",
                "iconBgColor",
                "iconBgGradient",
                "iconBgType",
                "iconColor",
                "imageId",
                "imageUrl",
                "imgHRange",
                "imgHUnit",
                "imgWRange",
                "imgWUnit",
                "isMediaImgHeightAuto",
                "layoutPreset",
                "mIconZRange",
                "mIconZUnit",
                "mcGapRange",
                "mdBgMgBottom",
                "mdBgMgLeft",
                "mdBgMgRight",
                "mdBgMgTop",
                "mdBgMgUnit",
                "mdBgMgisLinked",
                "mdBgPdBottom",
                "mdBgPdLeft",
                "mdBgPdRight",
                "mdBgPdTop",
                "mdBgPdUnit",
                "mdBgPdisLinked",
                "mdBgRsBottom",
                "mdBgRsLeft",
                "mdBgRsRight",
                "mdBgRsTop",
                "mdBgRsUnit",
                "mdBgRsisLinked",
                "media",
                "mediaAlignSelf",
                "rootFlexDirection",
                "selectedIcon",
                "useIconBg",
            ]
        ),

        save: ({ attributes }) => {
            const {
                // blockId attribute for making unique className and other uniqueness ⬇
                blockId,
                // counter settings attributes ⬇
                target,
                duration,
                counterTitle,
                counterSuffix,
                counterPrefix,
                startValue,
                isShowSeparator,
                separator,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`${blockId} eb-counter-wrapper`}>
                        <h4 className="eb-counter-number">
                            <span className="eb-counter-prefix">{counterPrefix}</span>
                            <span
                                className="eb-counter eb-counter-number"
                                data-duration={duration ? Math.floor(Math.abs(duration)) : 0}
                                data-startValue={
                                    startValue ? Math.floor(Math.abs(startValue)) : 0
                                }
                                data-target={target ? Math.floor(Math.abs(target)) : 0}
                                data-separator={separator}
                                data-isShowSeparator={isShowSeparator}
                            >
                                0
                            </span>
                            <span className="eb-counter-suffix">{counterSuffix}</span>
                        </h4>

                        <RichText.Content
                            tagName="h3"
                            className="eb-counter-title"
                            value={counterTitle}
                        />
                    </div>
                </div>
            );
        },
    },
];

export default deprecated;
