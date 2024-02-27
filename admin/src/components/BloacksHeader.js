import React from "react";

import { __ } from "@wordpress/i18n";

const Header = () => (
	<header className="eb-admin-header">
		<h4>{__("Blocks Controller", "essential-blocks")}</h4>
		<p>
			{__(
				"Disable the blocks you are not using to minimize resource loading",
				"essential-blocks"
			)}
		</p>
	</header>
);

export default Header;
