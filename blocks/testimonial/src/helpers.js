// function to generate New Dimensions-Control's attributes for multiple Dimensions control based on the array of values(prefixs)
export const generateDimensionsAttributes = (controlName, defaults = {}) => {
	const { top, right, bottom, left } = defaults;

	const desktopTop = top
		? {
				[`${controlName}Top`]: {
					type: "string",
					default: `${top}`,
				},
		  }
		: {
				[`${controlName}Top`]: {
					type: "string",
				},
		  };

	const desktopRight = right
		? {
				[`${controlName}Right`]: {
					type: "string",
					default: `${right}`,
				},
		  }
		: {
				[`${controlName}Right`]: {
					type: "string",
				},
		  };

	const desktopBottom = bottom
		? {
				[`${controlName}Bottom`]: {
					type: "string",
					default: `${bottom}`,
				},
		  }
		: {
				[`${controlName}Bottom`]: {
					type: "string",
				},
		  };

	const desktopLeft = left
		? {
				[`${controlName}Left`]: {
					type: "string",
					default: `${left}`,
				},
		  }
		: {
				[`${controlName}Left`]: {
					type: "string",
				},
		  };

	return {
		[`${controlName}Unit`]: {
			type: "string",
			default: "px",
		},
		...desktopTop,
		...desktopRight,
		...desktopBottom,
		...desktopLeft,

		[`TAB${controlName}Unit`]: {
			type: "string",
			default: "px",
		},
		[`TAB${controlName}Top`]: {
			type: "string",
		},
		[`TAB${controlName}Right`]: {
			type: "string",
		},
		[`TAB${controlName}Bottom`]: {
			type: "string",
		},
		[`TAB${controlName}Left`]: {
			type: "string",
		},

		[`MOB${controlName}Unit`]: {
			type: "string",
			default: "px",
		},
		[`MOB${controlName}Top`]: {
			type: "string",
		},
		[`MOB${controlName}Right`]: {
			type: "string",
		},
		[`MOB${controlName}Bottom`]: {
			type: "string",
		},
		[`MOB${controlName}Left`]: {
			type: "string",
		},
	};
};

// function to generate typography attributes for multiple typography control based on the array of prefix
export const generateTypographyAttributes = (prefixArray) => {
	const typoAttrs = prefixArray.reduce((total, current) => {
		const result = {
			[`${current}FontFamily`]: {
				type: "string",
			},
			[`${current}SizeUnit`]: {
				type: "string",
				default: "px",
			},
			[`${current}FontSize`]: {
				type: "number",
			},
			[`${current}FontWeight`]: {
				type: "string",
			},
			[`${current}TextTransform`]: {
				type: "string",
			},
			[`${current}TextDecoration`]: {
				type: "string",
			},
			[`${current}LetterSpacingUnit`]: {
				type: "string",
				default: "px",
			},
			[`${current}LetterSpacing`]: {
				type: "number",
			},
			[`${current}LineHeightUnit`]: {
				type: "string",
				default: "em",
			},
			[`${current}LineHeight`]: {
				type: "number",
			},

			[`TAB${current}SizeUnit`]: {
				type: "string",
				default: "px",
			},
			[`TAB${current}FontSize`]: {
				type: "number",
			},
			[`TAB${current}LetterSpacingUnit`]: {
				type: "string",
				default: "px",
			},
			[`TAB${current}LetterSpacing`]: {
				type: "number",
			},
			[`TAB${current}LineHeightUnit`]: {
				type: "string",
				default: "em",
			},
			[`TAB${current}LineHeight`]: {
				type: "number",
			},

			[`MOB${current}SizeUnit`]: {
				type: "string",
				default: "px",
			},
			[`MOB${current}FontSize`]: {
				type: "number",
			},
			[`MOB${current}LetterSpacingUnit`]: {
				type: "string",
				default: "px",
			},
			[`MOB${current}LetterSpacing`]: {
				type: "number",
			},
			[`MOB${current}LineHeightUnit`]: {
				type: "string",
				default: "em",
			},
			[`MOB${current}LineHeight`]: {
				type: "number",
			},
		};
		return {
			...total,
			...result,
		};
	}, {});

	return typoAttrs;
};

// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown
export const textInsideForEdit = (value, isShowSeparator, separator) =>
	isShowSeparator
		? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
		: value.toString();

// generateRandomNumber function is for generating a random number
export const generateRandomNumber = () =>
	Math.floor(Math.random() * 1000000000);

// hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const hardMinifyCssStrings = (cssString) => {
	return (
		cssString
			.replace(/\s+/g, " ")
			.replace(/(?<=\:).+(?=\;)/g, function (match) {
				return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
			})
			// .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
			.replace(/\s+(?![\w\d\.\-\#]+\{)/g, "")
			.replace(/\s+/g, " ")
			.replace(/__s_p_a_c_e__/g, " ")
	);
};

// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const softMinifyCssStrings = (cssString) =>
	cssString.replace(/\s+/g, " ");

// check if css string is empty or not.
export const isCssExists = (cssString) =>
	/.+(?=\:(?!hover)(?!focus))/.test(cssString);

// check if range controller input numbers  has value
export const hasVal = (val) => val || val === 0;

//
// function to generate typography styles for an element based on it's prefix
export const generateTypographyStyles = ({
	prefixConstant,
	defaultFontSize,
	attributes,
}) => {
	const {
		[`${prefixConstant}FontFamily`]: fontFamily,
		[`${prefixConstant}FontWeight`]: fontWeight,
		[`${prefixConstant}TextTransform`]: textTransform,
		[`${prefixConstant}TextDecoration`]: textDecoration,
		[`${prefixConstant}FontSize`]: fontSize = defaultFontSize,
		[`${prefixConstant}SizeUnit`]: sizeUnit,
		[`${prefixConstant}LetterSpacing`]: letterSpacing,
		[`${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
		[`${prefixConstant}LineHeight`]: lineHeight,
		[`${prefixConstant}LineHeightUnit`]: lineHeightUnit,

		[`TAB${prefixConstant}SizeUnit`]: TABsizeUnit,
		[`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
		[`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit,
		[`TAB${prefixConstant}FontSize`]: TABfontSize,
		[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
		[`TAB${prefixConstant}LineHeight`]: TABlineHeight,

		[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit,
		[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
		[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
		[`MOB${prefixConstant}FontSize`]: MOBfontSize,
		[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
		[`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
	} = attributes;

	const typoStylesDesktop = `
			${fontFamily ? `font-family: ${fontFamily};` : " "}
			${hasVal(fontSize) ? `font-size: ${fontSize}${sizeUnit};` : " "}
			${hasVal(lineHeight) ? `line-height: ${lineHeight}${lineHeightUnit};` : " "}
			${fontWeight ? `font-weight: ${fontWeight};` : " "}
			${textDecoration ? `text-decoration: ${textDecoration};` : " "}
			${textTransform ? `text-transform: ${textTransform};` : " "}
			${
				hasVal(letterSpacing)
					? `letter-spacing: ${letterSpacing}${letterSpacingUnit};`
					: " "
			}
		`;

	const typoStylesTab = `
			${hasVal(TABfontSize) ? `font-size: ${TABfontSize}${TABsizeUnit};` : " "}
			${
				hasVal(TABlineHeight)
					? `line-height: ${TABlineHeight}${TABlineHeightUnit};`
					: " "
			}
			${
				hasVal(TABletterSpacing)
					? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};`
					: " "
			}
		`;

	const typoStylesMobile = `
			${hasVal(MOBfontSize) ? `font-size: ${MOBfontSize}${MOBsizeUnit};` : " "}
			${
				hasVal(MOBlineHeight)
					? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};`
					: " "
			}
			${
				hasVal(MOBletterSpacing)
					? `letter-spacing: ${MOBletterSpacing}${MOBletterSpacingUnit};`
					: " "
			}
		`;

	return {
		typoStylesDesktop,
		typoStylesTab,
		typoStylesMobile,
	};
};

//
// function to generate dimensions-controls styles for an element based on it's controlName(prefix)
export const generateDimensionsControlStyles = ({
	controlName,
	styleFor,
	attributes,
}) => {
	const {
		[`${controlName}Unit`]: dimensionUnit,
		[`${controlName}Top`]: dimensionTop,
		[`${controlName}Right`]: dimensionRight,
		[`${controlName}Bottom`]: dimensionBottom,
		[`${controlName}Left`]: dimensionLeft,

		[`TAB${controlName}Unit`]: TABdimensionUnit,
		[`TAB${controlName}Top`]: TABdimensionTop,
		[`TAB${controlName}Right`]: TABdimensionRight,
		[`TAB${controlName}Bottom`]: TABdimensionBottom,
		[`TAB${controlName}Left`]: TABdimensionLeft,

		[`MOB${controlName}Unit`]: MOBdimensionUnit,
		[`MOB${controlName}Top`]: MOBdimensionTop,
		[`MOB${controlName}Right`]: MOBdimensionRight,
		[`MOB${controlName}Bottom`]: MOBdimensionBottom,
		[`MOB${controlName}Left`]: MOBdimensionLeft,
	} = attributes;

	let dimensionStylesDesktop = " ";
	let dimensionStylesTab = " ";
	let dimensionStylesMobile = " ";

	if (styleFor !== "border-radius") {
		dimensionStylesDesktop = `
		${
			dimensionTop
				? `${styleFor}-top: ${parseFloat(dimensionTop)}${dimensionUnit};`
				: " "
		}
		${
			dimensionRight
				? `${styleFor}-right: ${parseFloat(dimensionRight)}${dimensionUnit};`
				: " "
		}
		${
			dimensionLeft
				? `${styleFor}-left: ${parseFloat(dimensionLeft)}${dimensionUnit};`
				: " "
		}
		${
			dimensionBottom
				? `${styleFor}-bottom: ${parseFloat(dimensionBottom)}${dimensionUnit};`
				: " "
		}
	
		`;

		dimensionStylesTab = `
			${
				TABdimensionTop
					? `${styleFor}-top: ${parseFloat(
							TABdimensionTop
					  )}${TABdimensionUnit};`
					: " "
			}
			${
				TABdimensionRight
					? `${styleFor}-right: ${parseFloat(
							TABdimensionRight
					  )}${TABdimensionUnit};`
					: " "
			}
			${
				TABdimensionLeft
					? `${styleFor}-left: ${parseFloat(
							TABdimensionLeft
					  )}${TABdimensionUnit};`
					: " "
			}
			${
				TABdimensionBottom
					? `${styleFor}-bottom: ${parseFloat(
							TABdimensionBottom
					  )}${TABdimensionUnit};`
					: " "
			}

		`;

		dimensionStylesMobile = `
			${
				MOBdimensionTop
					? `${styleFor}-top: ${parseFloat(
							MOBdimensionTop
					  )}${MOBdimensionUnit};`
					: " "
			}
			${
				MOBdimensionRight
					? `${styleFor}-right: ${parseFloat(
							MOBdimensionRight
					  )}${MOBdimensionUnit};`
					: " "
			}
			${
				MOBdimensionLeft
					? `${styleFor}-left: ${parseFloat(
							MOBdimensionLeft
					  )}${MOBdimensionUnit};`
					: " "
			}
			${
				MOBdimensionBottom
					? `${styleFor}-bottom: ${parseFloat(
							MOBdimensionBottom
					  )}${MOBdimensionUnit};`
					: " "
			}

		`;
	} else {
		dimensionStylesDesktop = `
			${
				dimensionTop
					? `border-top-left-radius: ${parseFloat(
							dimensionTop
					  )}${dimensionUnit};`
					: " "
			}
			${
				dimensionRight
					? `border-top-right-radius: ${parseFloat(
							dimensionRight
					  )}${dimensionUnit};`
					: " "
			}
			${
				dimensionLeft
					? `border-bottom-right-radius: ${parseFloat(
							dimensionLeft
					  )}${dimensionUnit};`
					: " "
			}
			${
				dimensionBottom
					? `border-bottom-left-radius: ${parseFloat(
							dimensionBottom
					  )}${dimensionUnit};`
					: " "
			}
	
		`;

		dimensionStylesTab = `
			${
				TABdimensionTop
					? `border-top-left-radius: ${parseFloat(
							TABdimensionTop
					  )}${TABdimensionUnit};`
					: " "
			}
			${
				TABdimensionRight
					? `border-top-right-radius: ${parseFloat(
							TABdimensionRight
					  )}${TABdimensionUnit};`
					: " "
			}
			${
				TABdimensionLeft
					? `border-bottom-right-radius: ${parseFloat(
							TABdimensionLeft
					  )}${TABdimensionUnit};`
					: " "
			}
			${
				TABdimensionBottom
					? `border-bottom-left-radius: ${parseFloat(
							TABdimensionBottom
					  )}${TABdimensionUnit};`
					: " "
			}

		`;

		dimensionStylesMobile = `
			${
				MOBdimensionTop
					? `border-top-left-radius: ${parseFloat(
							MOBdimensionTop
					  )}${MOBdimensionUnit};`
					: " "
			}
			${
				MOBdimensionRight
					? `border-top-right-radius: ${parseFloat(
							MOBdimensionRight
					  )}${MOBdimensionUnit};`
					: " "
			}
			${
				MOBdimensionLeft
					? `border-bottom-right-radius: ${parseFloat(
							MOBdimensionLeft
					  )}${MOBdimensionUnit};`
					: " "
			}
			${
				MOBdimensionBottom
					? `border-bottom-left-radius: ${parseFloat(
							MOBdimensionBottom
					  )}${MOBdimensionUnit};`
					: " "
			}

		`;
	}

	return {
		dimensionStylesDesktop,
		dimensionStylesTab,
		dimensionStylesMobile,
	};
};
