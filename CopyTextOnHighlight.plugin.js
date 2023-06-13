/**
 * @name CopyTextOnHighlight
 * @author Eyevou
 * @description Copies any highlighted text to the user's clipboard.
 * @version 1.0.1
 */

module.exports = class CopyTextOnHighlight {
	start() {
		window.addEventListener('mouseup', function() {if ( document.getSelection().toString() != '') {document.execCommand('copy');}},false);
	} 

	stop() {
		// Nothing to clean.
	}
}