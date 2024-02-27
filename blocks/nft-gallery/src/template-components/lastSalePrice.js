import { useEffect, useState } from "@wordpress/element";

import {ETHIcon} from "./eth-icon";

export default function LastSalePrice(props) {
    const {
        item,
    } = props;

    const {
        name,
        num_sales,
        last_sale
    } = item;

    const convertUnit = 1000000000000000000;

    const [price, setPrice] = useState(0);
    const [showPrice, setShowPrice] = useState(false);

    useEffect(() => {
        if (typeof last_sale === "object" && last_sale !== null) {
            setPrice(parseFloat(last_sale.total_price / convertUnit).toFixed(2).replace(/(\.0+|0+)$/, ''));
            setShowPrice(true);
        }
    }, [])

    return (
        <>
            {showPrice && (
                <div className="eb_nft_price">
                    <span className="ebnft_label">Last Sale:</span>
                    <span className="ebnft_currency"><ETHIcon/></span>
                    <span className="ebnft_price">{price}</span>
                </div>
            )}
        </>
    )
}
