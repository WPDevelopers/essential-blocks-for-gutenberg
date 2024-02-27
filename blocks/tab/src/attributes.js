const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// blockId attribute for making unique className and other uniqueness
	// blockId: {
	// 	type: "string",
	// },
	// [blockId attribute is not needed for this block]

	//
	tabId: {
		type: "string",
	},

	//
	tabParentId: {
		type: "string",
	},

	//
	align: {
		type: "string",
		default: "full",
	},
};

export default attributes;
