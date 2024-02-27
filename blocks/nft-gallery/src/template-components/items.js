import Creator from "./creator";
import Image from "./image";
import LastSalePrice from "./lastSalePrice";
import CurrentPrice from "./currentPrice";

export default function Items(props) {
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
        <div className={`eb_nft_content_wrap eb_nft_${layout} nft_items ${layout === "grid" ? gridPreset : listPreset}`}>
            {(typeof data === "object" && data.length > 0) && (
                <>
                    {data.map((item, index) => (
                        <div className="eb_nft_item">
                            {displayImage && (
                                <div className="eb_nft_thumbnail">
                                    <Image item={item} />
                                </div>
                            )}

                            <div className="eb_nft_content">
                                {displayTitle && (
                                    <h3 className="eb_nft_title">{item.name || "#" + item.token_id}</h3>
                                )}

                                <div className="eb_nft_content_body">
                                    {(displayCreator || displayOwner) && (
                                        <div className="eb_nft_owner_wrapper">
                                            {displayCreator && (
                                                <Creator attributes={attributes} creator={item.creator} label={creatorLabel} />
                                            )}
                                            {displayOwner && (
                                                <Creator attributes={attributes} creator={item.owner} label={ownerLabel} />
                                            )}
                                        </div>
                                    )}

                                    <div className="eb_nft_price_wrapper">
                                        {displayPrice && (
                                            <CurrentPrice item={item} />
                                        )}
                                        {displayLastSale && (
                                            <LastSalePrice item={item} />
                                        )}
                                    </div>

                                </div>

                                {displayButton && (
                                    <div className="eb_nft_button"><button><a target="_blank" href={item.permalink}>{buttonText}</a></button></div>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            )}
            {(typeof data === "object" && data.length === 0) && (
                <p>No Items Found!</p>
            )}

        </div>
    )
}
