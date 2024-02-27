import { render, useEffect, useState } from "@wordpress/element";

import Loading from "./template-components/loading";
import Items from "./template-components/items";
import Collections from "./template-components/collections";

const Content = (props) => {
    const {
        blockId,
        attributes,
        source
    } = props;

    const { settings } = attributes;

    const [nftData, setNftData] = useState({});
    const [nftError, setNftError] = useState({ status: false });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let data = new FormData();
        data.append("action", 'opensea_nft_collections');
        data.append("nft_nonce", EssentialBlocksLocalize.nft_nonce);
        data.append("nft_source", source);
        if (source === "opensea" && settings) {
            data.append("openseaType", settings.opensea.type);
            data.append("openseaItemFilterBy", settings.opensea.filterBy);
            data.append("openseaCollectionSlug", settings.opensea.collectionSlug);
            data.append("openseaItemWalletId", settings.opensea.itemWalletId);
            data.append("openseaCollectionmWalletId", settings.opensea.collectionWalletId);
            data.append("openseaItemLimit", settings.opensea.itemLimit);
            data.append("openseaItemOrderBy", settings.opensea.orderBy);
            data.append("openseaCollectionLimit", settings.opensea.collectionLimit);

            fetch(EssentialBlocksLocalize.ajax_url, {
                method: 'POST',
                body: data,
            }) // wrapped
                .then(res => res.text())
                .then(data => {
                    const response = JSON.parse(data);

                    if (response.success) {
                        setNftData(JSON.parse(response.data));
                        setLoading(false);
                        setNftError({
                            status: false,
                        });
                    }
                    else {
                        setLoading(false);
                        // removed error settings as we do not want to show anything in frontend if there is any API key error
                    }
                })
                .catch(err => console.log(err));
        }

    }, []);


    return (
        <>
            {loading && (
                <Loading attributes={attributes} />
            )}
            {!loading && (
                <>
                    {nftError.status && (
                        <span className="nft-error">{nftError.message}</span>
                    )}

                    {!nftError.status && (
                        <>
                            {settings.opensea.type === "items" && (
                                <Items
                                    data={nftData.assets}
                                    attributes={attributes}
                                />
                            )}

                            {settings.opensea.type === "collections" && (
                                <Collections
                                    data={settings.opensea.collectionWalletId ? nftData : nftData?.collections}
                                    attributes={attributes}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
}

document.addEventListener("DOMContentLoaded", function (event) {
    let nftGallery = document.querySelectorAll(".eb-nft-gallery-wrapper");

    for (let i = 0;i < nftGallery.length;i++) {

        //Retrieve Data
        let blockId = nftGallery[i].getAttribute("data-id");
        let source = nftGallery[i].getAttribute("data-source");
        let attributes = nftGallery[i].getAttribute("data-attributes");

        const wrapper = document.querySelector(`.${blockId}`);

        render(
            <Content
                blockId={blockId}
                source={source}
                attributes={JSON.parse(attributes)}
            />,
            wrapper
        );
    }
});
