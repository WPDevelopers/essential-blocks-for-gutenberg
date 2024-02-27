import { times } from "lodash";

import { LoadingListIcon } from "./icons/loading-list-icon";
import { LoadingGridIcon } from "./icons/loading-grid-icon";

export default function Loading(props) {

    const { attributes } = props;

    const {
        layout,
        settings,
    } = attributes

    const limit = settings?.opensea?.itemLimit;

    return (
        <div className={`eb_nft_content_wrap eb_nft_${layout} nft_items nft_loading`}>
            {times(limit, (i) => {
                if (layout === 'grid') {
                    return (
                        <div className="eb_nft_item">
                            <LoadingGridIcon/>
                        </div>
                    )
                }
                if (layout === 'list') {
                    return (
                        <div className="eb_nft_item">
                            <LoadingListIcon />
                        </div>
                    )
                }
            })}
        </div>
    )
}
