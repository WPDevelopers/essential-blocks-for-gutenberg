import {
	wrapperWidth,
	columnOrderPrefix,
} from "./constants/rangeNames";

const {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes,

	generateResponsiveSelectControlAttributes,
} = window.EBControls;

import {
	cWrapMarginConst,
	cWrapPaddingConst,
} from "./constants/dimensionsNames";
import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";
import { rowOverflowPrefix } from "./constants/selectControlPrefixs";

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

	//
	...generateResponsiveRangeAttributes(wrapperWidth, {
		noUnits: true,
	}),

	...generateResponsiveRangeAttributes(columnOrderPrefix, {
		noUnits: true,
	}),

	//
	colAli: {
		type: "string",
	},

	//
	rowOverFlow: {
		type: "string",
	},

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
	...generateDimensionsAttributes(cWrapMarginConst),
	...generateDimensionsAttributes(cWrapPaddingConst),

	//
	...generateResponsiveSelectControlAttributes(rowOverflowPrefix),
};

export default attributes;
