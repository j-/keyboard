import React, { PropTypes } from 'react';
import Modifier from '../Modifier';

const ModifierList = ({ modifiers }) => {
	const children = modifiers.map((name) => (
		<li key={ name }>
			<Modifier name={ name } />
		</li>
	));
	return (
		<ul>
			{ children }
		</ul>
	);
};

ModifierList.propTypes = {
	modifiers: PropTypes.arrayOf(PropTypes.string),
};

ModifierList.defaultProps = {
	modifiers: [
		'Accel',
		'Alt',
		'AltGraph',
		'CapsLock',
		'Control',
		'Fn',
		'FnLock',
		'Hyper',
		'Meta',
		'NumLock',
		'OS',
		'Scroll',
		'ScrollLock',
		'Shift',
		'Super',
		'Symbol',
		'SymbolLock',
		'Win',
	],
};

export default ModifierList;
