function ENCRYPT(str) {
	return btoa(str);


}

function sendMessage(el, message) {
		el.value = message;
		var eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events');
		if(eventObj.initEvent){
			eventObj.initEvent('keydown', true, true);
		}
		eventObj.keyCode = 13;
		eventObj.which = 13;    
		el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent('onkeydown', eventObj); 

}

function handlerKeyDown(e) {
		if ((!e.shiftKey) && (e.keyCode == 13)) {
			var t = '_ENC_'+ENCRYPT(this.value.trim());
			this.value = '';
			sendMessage(this.hookEdit, t);
		}
