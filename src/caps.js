const CAPSLOCK = 20;

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
var stateView = document.getElementById('capslock-state');

var stateMap = {
	null: 'Caps lock state is unknown',
	true: 'Caps lock is on',
	false: 'Caps lock is off'
};

var stateClasses = {
	null: 'text-muted',
	true: 'text-danger',
	false: 'text-success'
};

var lastState;
var showState = function () {
	if (state !== lastState) {
		lastState = state;
		var stateText = stateMap[state];
		var stateClass = stateClasses[state];
		stateView.textContent = stateText;
		stateView.className = stateClass;
		console.log(stateText);
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

showState();

export default null;
