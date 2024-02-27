import Image from "./image";

export default function Collections(props) {
    const {
        data,
        attributes,
    } = props;

    const {
        layout,
        displayImage,
        displayTitle,
        displayCreator,
        displayOwner,
        displayPrice,
        displayLastSale,
        displayButton,
        creatorLabel,
        ownerLabel,
        buttonText,
        gridPreset,
        listPreset,
    } = attributes;

    return (
        <div className={`eb_nft_content_wrap eb_nft_${layout} nft_collections ${layout === "grid" ? gridPreset : listPreset}`}>
            {typeof data === "object" && data.map((item, index) => (
                <div className="eb_nft_item">
                    {displayImage && (
                        <div className="eb_nft_thumbnail">
                            <Image item={item} />
                        </div>
                    )}

                    <div className="eb_nft_content">
                        {displayTitle && (
                            <h3 className="eb_nft_title">{item.name}</h3>
                        )}

                        {displayButton && (
                            <div className="eb_nft_button"><button><a target="_blank" href={`https://opensea.io/collection/${item.slug}`}>{buttonText}</a></button></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )

}
