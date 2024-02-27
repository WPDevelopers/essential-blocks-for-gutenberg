import { useEffect, useState } from "@wordpress/element";

import {ETHIcon} from "./eth-icon";

export default function CurrentPrice(props) {
    const {
        item,
    } = props;

    const {
        seaport_sell_orders
    } = item;

    const convertUnit = 1000000000000000000;

    const [price, setPrice] = useState(0);
    const [showPrice, setShowPrice] = useState(false);

    useEffect(() => {
        if (typeof seaport_sell_orders === "object" && seaport_sell_orders !== null) {
            if (seaport_sell_orders[0].current_price) {
                const value = parseFloat(seaport_sell_orders[0].current_price / convertUnit).toFixed(2).replace(/(\.0+|0+)$/, '');
                setPrice(value);
                setShowPrice(true);
            }
        }
    }, [])


    return (
        <>
            {showPrice && (
                <div className="eb_nft_price">
                    <span className="ebnft_label">Price:</span>
                    <span className="ebnft_currency"><ETHIcon/></span>
                    <span className="ebnft_price">{price}</span>
                </div>
            )}
        </>
    )
}
