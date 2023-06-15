/**
 * @name CopyTextOnHighlight
 * @author Eyevou
 * @description Copies any highlighted text to the user's clipboard.
 * @version 1.0.3
 */

module.exports = class CopyTextOnHighlight {
	start() { window.addEventListener('mouseup', CopyEventHandler)} 
	stop()  { window.removeEventListener('mouseup', CopyEventHandler)}
}

const CopyEventHandler = () => {
	if (document.getSelection().toString().length > 0) {
        document.execCommand('copy');
    }
}
