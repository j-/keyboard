import './styles/main.less';

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
