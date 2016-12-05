/**
 * Resolve relative to absolute path
 */
const rootFolder = __dirname.replace(/lib$/, '');
let getPath = function(folderName){
	folderName = folderName || '';
	if(folderName == '' || folderName == 'root'){
		return rootFolder;
	}
	
	return `${rootFolder}${folderName}`;
};

/**
 * Firbase branch for this projct
 */
const saleBranch = 'update-sale-quanity-demo';


/**
 * Export util
 */
let util = {
	getPath,
	saleBranch,
};

module.exports = util;