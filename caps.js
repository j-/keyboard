(function () {

var CAPSLOCK = 20;

var isCapslockKey = function (e) {
	return e.which === CAPSLOCK;
};

var isCapslockOn = function (e) {
	var character = String.fromCharCode(e.which);
	var upper = character.toUpperCase();
	var lower = character.toLowerCase();
	// key does not have case
	if (upper === lower) {
		return null;
	}
	// character is upper case and shift key is not held
	// or character is lower case and shift key is held
	return character === upper !== e.shiftKey;
};

var state = null;

var lastState = state;
var showState = function () {
	if (state !== lastState) {
		lastState = state;
		if (state === null) {
			console.info('Caps lock state is unknown');
		}
		else if (state) {
			console.info('Caps lock is on');
		}
		else {
			console.info('Caps lock is off');
		}
	}
};

window.addEventListener('keypress', function (e) {
	var caps = isCapslockOn(e);
	if (caps !== null) {
		state = caps;
	}
	showState();
});

window.addEventListener('keydown', function (e) {
	var isCaps = isCapslockKey(e);
	if (isCaps && state !== null) {
		state = !state;
	}
	showState();
});

window.addEventListener('blur', function (e) {
	state = null;
	showState();
});

})();