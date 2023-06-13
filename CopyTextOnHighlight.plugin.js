/**
 * @name CopyTextOnHighlight
 * @author Eyevou
 * @description Copies any highlighted text to the user's clipboard.
 * @version 1.0.2
 */

module.exports = class CopyTextOnHighlight {
	start() { window.addEventListener('mouseup', CopyEventHandler)} 
	stop()  { window.removeEventListener('mouseup', CopyEventHandler)}
}

var CopyEventHandler = function() {
	if ( document.getSelection().toString() != '') {document.execCommand('copy');}
}
