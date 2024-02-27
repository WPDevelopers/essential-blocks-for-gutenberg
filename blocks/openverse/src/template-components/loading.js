import { times } from "lodash";

import { LoadingItem } from "./icons/loading-item";

export default function Loading(props) {
	const { limit } = props;

	return (
		<div className="eb-openverse-grid openverse_loading">
			{times(limit, (i) => {
				return (
					<div className="eb-openverse-grid-item">
						<LoadingItem />
					</div>
				);
			})}
		</div>
	);
}
