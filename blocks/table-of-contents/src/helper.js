export function parseTocSlug(slug) {
	if (!slug) {
		return slug;
	}

	var parsedSlug = slug
		.toString()
		.toLowerCase()
		.replace(/&(amp;)/g, "") // Remove &
		.replace(/&(mdash;)/g, "") // Remove long dash
		.replace(/\u2013|\u2014/g, "") // Remove long dash
		.replace(/[&]nbsp[;]/gi, "-") // Replace inseccable spaces
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g, "") // Remove special chars
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text

	return decodeURI(encodeURIComponent(parsedSlug));
}
