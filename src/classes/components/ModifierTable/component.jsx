import React from 'react';
import styles from './styles.css';
import ModifierTableRow from '../ModifierTableRow/component';

const ALL_MODIFIERS = [
	'Accel', // Deprecated
	'Alt',
	'AltGraph', // Not supported on Android
	'CapsLock',
	'Control',
	'Fn', // Only supported on Android 3.0+
	'FnLock', // Not supported
	'Hyper', // Not supported
	'Meta', // Not supported on Windows
	'NumLock',
	'OS', // Not supported on Android
	'Scroll', // IE only
	'ScrollLock',
	'Shift',
	'Super', // Not supported
	'Symbol', // Not supported
	'SymbolLock', // Not supported
	'Win', // IE only
];

function getModifiersStateFromEvent (e) {
	return ALL_MODIFIERS.map((name) => {
		const state = e ? e.getModifierState(name) : null;
		return { name, state };
	});
}

export default class ModifierTable extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			modifiers: getModifiersStateFromEvent(null),
		};
		this.handleKeydown = this.handleKeydown.bind(this);
		this.handleKeyup = this.handleKeyup.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	componentWillMount () {
		window.addEventListener('keydown', this.handleKeydown);
		window.addEventListener('keyup', this.handleKeyup);
		window.addEventListener('blur', this.handleBlur);
	}

	componentWillUnmount () {
		window.removeEventListener('keydown', this.handleKeydown);
		window.removeEventListener('keyup', this.handleKeyup);
		window.removeEventListener('blur', this.handleBlur);
	}

	handleKeydown (e) {
		this.setState({
			modifiers: getModifiersStateFromEvent(e),
		});
	}

	handleKeyup (e) {
		this.setState({
			modifiers: getModifiersStateFromEvent(e),
		});
	}

	handleBlur () {
		this.setState({
			modifiers: getModifiersStateFromEvent(null),
		});
	}

	getRows () {
		return this.state.modifiers.map((modifier) => {
			return <ModifierTableRow key={ modifier.name } name={ modifier.name } state={ modifier.state } />
		});
	}

	render () {
		return (
			<table className={ styles.table }>
				<thead>
					<tr>
						<th>Modifier name</th>
						<th>State</th>
					</tr>
				</thead>
				<tbody>{ this.getRows() }</tbody>
			</table>
		);
	}
}
