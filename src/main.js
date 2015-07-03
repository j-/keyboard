import 'lib/less';

import 'src/cache';
import 'src/caps';
import 'src/num';

const ACTIVE_CLASS = 'active';
const KEY_SEPARATOR = ',';

var keys = {
	  8: 'backspace',
	  9: 'tab',
	 12: 'clear',
	 13: 'enter',
	 16: 'shift',
	 17: 'ctrl',
	 18: 'alt',
	 19: 'pause/break',
	 20: 'caps lock',
	 27: 'escape',
	 32: 'space',
	 33: 'page up',
	 34: 'page down',
	 35: 'end',
	 36: 'home',
	 37: 'left arrow',
	 38: 'up arrow',
	 39: 'right arrow',
	 40: 'down arrow',
	 44: 'print screen',
	 45: 'insert',
	 46: 'delete',
	 48: '0',
	 49: '1',
	 50: '2',
	 51: '3',
	 52: '4',
	 53: '5',
	 54: '6',
	 55: '7',
	 56: '8',
	 57: '9',
	 65: 'a',
	 66: 'b',
	 67: 'c',
	 68: 'd',
	 69: 'e',
	 70: 'f',
	 71: 'g',
	 72: 'h',
	 73: 'i',
	 74: 'j',
	 75: 'k',
	 76: 'l',
	 77: 'm',
	 78: 'n',
	 79: 'o',
	 80: 'p',
	 81: 'q',
	 82: 'r',
	 83: 's',
	 84: 't',
	 85: 'u',
	 86: 'v',
	 87: 'w',
	 88: 'x',
	 89: 'y',
	 90: 'z',
	 91: 'left window key',
	 92: 'right window key',
	 93: 'menu',
	 96: 'numpad 0',
	 97: 'numpad 1',
	 98: 'numpad 2',
	 99: 'numpad 3',
	100: 'numpad 4',
	101: 'numpad 5',
	102: 'numpad 6',
	103: 'numpad 7',
	104: 'numpad 8',
	105: 'numpad 9',
	106: 'multiply',
	107: 'add',
	109: 'subtract',
	110: 'decimal point',
	111: 'divide',
	112: 'f1',
	113: 'f2',
	114: 'f3',
	115: 'f4',
	116: 'f5',
	117: 'f6',
	118: 'f7',
	119: 'f8',
	120: 'f9',
	121: 'f10',
	122: 'f11',
	123: 'f12',
	144: 'num lock',
	145: 'scroll lock',
	172: 'browser home',
	173: 'mute',
	174: 'volume down',
	175: 'volume up',
	180: 'mail',
	182: 'my computer',
	183: 'calculator',
	186: 'semi-colon',
	187: 'equal sign',
	188: 'comma',
	189: 'dash',
	190: 'period',
	191: 'forward slash',
	192: 'grave accent',
	219: 'open bracket',
	220: 'back slash',
	221: 'close braket',
	222: 'single quote'
};

var keyCodeView = document.getElementById('keycode-view');
var keyNameView = document.getElementById('keyname-view');

var getKeyNameByCode = function (code) {
	return keys[code] || null;
};

var logKeypress = function (which, e) {
	var name = getKeyNameByCode(which);
	console.log(which, name, e);
	keyCodeView.textContent = which;
	keyNameView.textContent = name;
};

var handleKeypress = function (e) {
	logKeypress(e.which, e);
};

window.addEventListener('keydown', handleKeypress);

var showKeyPress = function (key) {
	key.classList.add(ACTIVE_CLASS);
};

var showKeyRelease = function (key) {
	key.classList.remove(ACTIVE_CLASS);
};

var registerKey = function (key) {
	var codes = key.dataset.key;
	var location = Number(key.dataset.location) || 0;
	codes.split(KEY_SEPARATOR).map(Number).forEach(function (code) {
		window.addEventListener('keydown', function (e) {
			if (e.which === code && e.location === location) {
				showKeyPress(key);
			}
		});
		window.addEventListener('keyup', function (e) {
			if (e.which === code) {
				showKeyRelease(key);
			}
		});
		window.addEventListener('blur', function (e) {
			showKeyRelease(key);
		});
	});
};

var registerAllKeys = function () {
	var keys = document.querySelectorAll('.key');
	for (var i = 0; i < keys.length; i++) {
		registerKey(keys[i]);
	}
};

var bindLockButton = function () {
	var lock = document.getElementById('keylock');
	lock.addEventListener('keydown', function (e) {
		e.preventDefault();
	});
};

var handleClick = function (e) {
	e.preventDefault();
	var key = this.dataset.key;
	var first = key.split(KEY_SEPARATOR, 1)[0];
	var which = Number(first);
	logKeypress(which, e);
};

var handleClicks = function () {
	var keys = document.querySelectorAll('.key');
	for (var i = 0; i < keys.length; i++) {
		keys[i].addEventListener('click', handleClick);
	}
};

registerAllKeys();
bindLockButton();
handleClicks();
