const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "Desktop",
	},
	// blockId attribute for making unique className and other uniqueness ⬇
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	// blockMeta is for keeping all the styles ⬇
	blockMeta: {
		type: "object",
	},

	itemId: {
		type: "string",
	},
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
	},
	clickable: {
		type: "boolean",
		default: false,
	},
	accordionColor: {
		type: "string",
	},
	iconColor: {
		type: "string",
	},
	inheritedAccordionType: {
		type: "string",
		default: "accordion",
	},
	inheritedTagName: {
		type: "string",
		default: "h3",
	},
	inheritedDisplayIcon: {
		type: "boolean",
		default: true,
	},
	inheritedTabIcon: {
		type: "string",
	},
	inheritedExpandedIcon: {
		type: "string",
	},
	faqSchema: {
		type: "boolean",
		default: false,
	},
	parentBlockId: {
		type: "string",
	},
};

export default attributes;
