import { useEffect, useState } from "@wordpress/element";

export default function Creator(props) {
    const {
        attributes,
        creator,
        label,
    } = props;

    const {
        showOwnerText,
        showOwnerImage,
    } = attributes;

    const [creatorName, setCreatorName] = useState("Unknown");
    const [creatorImage, setCreatorImage] = useState();
    const [creatorAddress, setCreatorAddress] = useState();

    useEffect(() => {
        if (creator || creator !== null) {
            const {
                user,
                address,
                config,
                profile_img_url
            } = creator;

            //Set Username
            if (user && user.username) {
                setCreatorName(user.username);
            }
            else if (address) {
                setCreatorName("#" + address.slice(-4))
            }

            //Set Creator Image
            setCreatorImage(profile_img_url);
            setCreatorAddress(address);
        }
    }, []);

    return (
        <div className="eb_nft_creator">
            {showOwnerImage && creatorImage && (
                <img src={creatorImage} alt={creatorName} />
            )}
            <span>
                {showOwnerText && (
                    <>
                        {label} <a target="_blank" href={`https://opensea.io/${creatorAddress}`}>{creatorName}</a>
                    </>
                )}
            </span>
        </div>
    )
}
