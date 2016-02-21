import 'normalize.css';
import './styles/main.less';

import keynames from './keynames';

import ModifierState from './classes/ModifierState';

import KeyboardKey from './classes/components/KeyboardKey';
const KeyboardKeyElement = document.registerElement('keyboard-key', KeyboardKey);

const caps = new ModifierState('CapsLock');
caps.start();
caps.on('change', (state) => console.info('CapsLock', state));

const num = new ModifierState('NumLock');
num.start();
num.on('change', (state) => console.info('NumLock', state));

const scroll = new ModifierState('ScrollLock');
scroll.start();
scroll.on('change', (state) => console.info('ScrollLock', state));

window.addEventListener('keydown', (e) => {
	const { which, location, repeat } = e;
	if (repeat) {
		return;
	}
	const name = keynames[which];
	const hex = (which < 0x10 ? '0' : '') + which.toString(16);
	console.log('Keydown', { hex, which, location, name }, e);
});
