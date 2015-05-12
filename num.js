(function () {

var NUMLOCK = 144;

var LOC_STANDARD = 0;
var LOC_NUMPAD = 3;

var numpadKeys = {
	// capslock is off
	36: false,
	38: false,
	33: false,
	37: false,
	12: false,
	39: false,
	35: false,
	40: false,
	34: false,
	45: false,
	46: false,
	// capslock is on
	103: true,
	104: true,
	105: true,
	100: true,
	101: true,
	102: true,
	97: true,
	98: true,
	99: true,
	96: true,
	110: true
};

var isNumlockKey = function (e) {
	return e.which === NUMLOCK;
};

var isNumlockOn = function (e) {
	if (e.location !== LOC_NUMPAD) {
		return null;
	}
	var which = e.which;
	var result = numpadKeys[e.which];
	if (result === undefined) {
		return null;
	}
	return result;
};

var state = null;
var stateView;

var stateMap = {
	null: 'Num lock state is unknown',
	true: 'Num lock is on',
	false: 'Num lock is off'
};

var stateClasses = {
	null: 'text-muted',
	true: 'text-info',
	false: 'text-info'
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

window.addEventListener('keydown', function (e) {
	var num = isNumlockOn(e);
	if (num !== null) {
		state = num;
	}
	showState();
});

window.addEventListener('keydown', function (e) {
	var isCaps = isNumlockKey(e);
	if (isCaps && state !== null) {
		state = !state;
	}
	showState();
});

window.addEventListener('blur', function (e) {
	state = null;
	showState();
});

document.addEventListener('DOMContentLoaded', function () {
	stateView = document.getElementById('numlock-state');
	showState();
});

})();