import 'normalize.css';
import './styles/main.less';

import keynames from './keynames';

import CapsLockModifierState from './classes/modifier-states/CapsLockModifierState';
import NumLockModifierState from './classes/modifier-states/NumLockModifierState';

import KeyboardKey from './classes/components/KeyboardKey';
const KeyboardKeyElement = document.registerElement('keyboard-key', KeyboardKey);

const caps = new CapsLockModifierState();
caps.start();
caps.on('change', (state) => console.info('Capslock', state));

const num = new NumLockModifierState();
num.start();
num.on('change', (state) => console.info('Numlock', state));

window.addEventListener('keydown', (e) => {
	const { which, location, repeat } = e;
	if (repeat) {
		return;
	}
	const name = keynames[which];
	const hex = (which < 0x10 ? '0' : '') + which.toString(16);
	console.log('Keydown', { hex, which, location, name }, e);
});
