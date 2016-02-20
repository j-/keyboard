import 'normalize.css';
import './styles/main.less';

import keynames from './keynames';

import CapslockModifierState from './classes/modifier-states/CapslockModifierState';
import NumlockModifierState from './classes/modifier-states/NumlockModifierState';

import KeyboardKey from './classes/components/KeyboardKey';
const KeyboardKeyElement = document.registerElement('keyboard-key', KeyboardKey);

const caps = new CapslockModifierState();
caps.start();
caps.on('change', (state) => console.log('caps', state));

const num = new NumlockModifierState();
num.start();
num.on('change', (state) => console.log('num', state));

window.addEventListener('keydown', (e) => {
	const { which, location } = e;
	const name = keynames[which];
	const hex = (which < 0x10 ? '0' : '') + which.toString(16);
	console.log('keydown', { hex, which, location, name });
});
