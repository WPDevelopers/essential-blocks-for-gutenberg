import { 
	rMinHConst, 
	rMaxWConst, 
	rColsGapConst,
	rColsNumber
} from "./constants/rangeNames";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers"; 

const {
	generateDimensionsAttributes,
	// generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes,

	//
	generateResponsiveSelectControlAttributes,
} = window.EBControls;

import {
	rWrapMarginConst,
	rWrapPaddingConst,
} from "./constants/dimensionsNames";
import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";
import { rowOverflowPrefix, columnsOrderPrefix } from "./constants/selectControlPrefixs";

const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "Desktop",
	},

	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
	},

	align: {
		type: "string",
		default: "full",
	},

	//
	isLayoutSelected: {
		type: "boolean",
		default: false,
	},

	//
	rowWidthName: {
		type: "string",
		default: "boxed",
	},

	//
	rowHeightName: {
		type: "string",
		default: "default",
	},

	//
	rowOverFlow: {
		type: "string",
	},

	//
	rowAli: {
		type: "string",
	},

	//
	...generateResponsiveRangeAttributes(rMinHConst, {
		// defaultRange: 18,
		// defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
	}),

	//
	...generateResponsiveRangeAttributes(rColsGapConst, {
		// defaultRange: 18,
		// defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
	}),

	//
	...generateResponsiveRangeAttributes(rMaxWConst, {
		defaultRange: 1170,
		// defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
		noUnits: true,
	}),

	//Column Number
	...generateResponsiveRangeAttributes(rColsNumber, {
		// defaultRange: 2,
		// defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
		noUnits: true,
	}),

	//  BorderShadow attributes  ⬇
	...generateBorderShadowAttributes(WrpBdShadowConst, {
		// noShadow: true,
		// noBorder: true,
	}),

	//  background attributes ⬇
	...generateBackgroundAttributes(WrpBgConst, {
		defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	}),

	// dimensions Control related Attributes ⬇
	...generateDimensionsAttributes(rWrapMarginConst, {
		disableLeftRight: true,
	}),
	...generateDimensionsAttributes(rWrapPaddingConst),

	//
	...generateResponsiveSelectControlAttributes(rowOverflowPrefix),
	...generateResponsiveSelectControlAttributes(columnsOrderPrefix),
};

export default attributes;
