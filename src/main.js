// Styles
import 'normalize.css';
import './styles/main.less';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Helpers
import keynames from './keynames';

// React Components
import Application from './classes/components/Application/component';

// Web Components
import KeyboardKey from './classes/elements/KeyboardKey';
const KeyboardKeyElement = document.registerElement('keyboard-key', KeyboardKey);

window.addEventListener('keydown', (e) => {
	const { which, location, repeat } = e;
	if (repeat) {
		return;
	}
	const name = keynames[which];
	const hex = (which < 0x10 ? '0' : '') + which.toString(16);
	const modifiers = [
		['Accel', e.getModifierState('Accel')], // Deprecated
		['Alt', e.getModifierState('Alt')],
		['AltGraph', e.getModifierState('AltGraph')], // Not supported on Android
		['CapsLock', e.getModifierState('CapsLock')],
		['Control', e.getModifierState('Control')],
		['Fn', e.getModifierState('Fn')], // Only supported on Android 3.0+
		['FnLock', e.getModifierState('FnLock')], // Not supported
		['Hyper', e.getModifierState('Hyper')], // Not supported
		['Meta', e.getModifierState('Meta')], // Not supported on Windows
		['NumLock', e.getModifierState('NumLock')],
		['OS', e.getModifierState('OS')], // Not supported on Android
		['ScrollLock', e.getModifierState('ScrollLock')],
		['Shift', e.getModifierState('Shift')],
		['Super', e.getModifierState('Super')], // Not supported
		['Symbol', e.getModifierState('Symbol')], // Not supported
		['SymbolLock', e.getModifierState('SymbolLock')], // Not supported
		['Win', e.getModifierState('Win')], // IE only
	];
	const enabled = modifiers.filter(([name, state]) => state);
	const names = enabled.map(([name]) => name);
	console.log('Keydown', e, { hex, which, location, name }, ...names);
});

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		React.createElement(Application),
		document.getElementById('app')
	);
});
