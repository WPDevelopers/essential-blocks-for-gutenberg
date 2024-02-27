import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
    const {
        blockId,
        tabTitles,
        layout,
        isMediaOn,
        classHook,
        tagName,
        closeAllTabs,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`${blockId} eb-advanced-tabs-wrapper ${layout}`}
                    {...(closeAllTabs
                        ? { 'data-close-all-tabs': closeAllTabs }
                        : {})}
                >
                    <div className="eb-tabs-nav">
                        <ul
                            className="tabTitles"
                            data-tabs-ul-id={`${blockId}`}
                        >
                            {tabTitles.map((item, index) => (
                                <li
                                    key={index}
                                    data-title-tab-id={item.id}
                                    data-title-custom-id={item.customId}
                                    {...(item.customId
                                        ? { id: item.customId }
                                        : {})}
                                    className={
                                        closeAllTabs !== true && item.isDefault ? "active" : "inactive"
                                    }
                                >
                                    {isMediaOn && (
                                        <>
                                            {item.media === "icon" &&
                                                item.icon && (
                                                    <span
                                                        className={`tabIcon ${item.icon}`}
                                                    />
                                                )}
                                            {item.media === "image" &&
                                                item.imgUrl && (
                                                    <img src={item.imgUrl} />
                                                )}
                                        </>
                                    )}
                                    <RichText.Content
                                        tagName={tagName}
                                        className="tab-title-text"
                                        value={item.text}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="eb-tabs-contents">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div >
    );
}
