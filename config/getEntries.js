const fs = require("fs");
const path = require("path");

const isDir = (fileName) => fs.lstatSync(fileName).isDirectory();
const isFile = (fileName) => fs.lstatSync(fileName).isFile();

module.exports = (blocksFolder) => {
	const isDirExists = fs.existsSync(blocksFolder) && isDir(blocksFolder);

	if (isDirExists) {
		let entries = {};
		let frontendJS = "/src/frontend.js";

		fs.readdirSync(blocksFolder).map((fileName) => {
			if (isDir(path.join(blocksFolder, fileName))) {
				const validFrontEnd =
					fs.existsSync(path.join(blocksFolder, fileName + frontendJS)) &&
					isFile(path.join(blocksFolder, fileName + frontendJS));

				let folderKey = `blocks/${fileName}`;

				if (validFrontEnd) {
					let frontendKey = `${folderKey}/frontend`;
					entries[frontendKey] = `./${folderKey}${frontendJS}`;
				}
			}
		});
		return entries;
	}
};