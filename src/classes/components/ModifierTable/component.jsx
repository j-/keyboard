import React from 'react';
import styles from './styles.css';
import ModifierTableRow from '../ModifierTableRow/component';

const ALL_MODIFIERS = [
	{ name: 'Accel',        description: 'Deprecated' },
	{ name: 'Alt',          description: null },
	{ name: 'AltGraph',     description: 'Not supported on Android' },
	{ name: 'CapsLock',     description: null },
	{ name: 'Control',      description: null },
	{ name: 'Fn',           description: 'Only supported on Android 3.0+' },
	{ name: 'FnLock',       description: 'Not supported' },
	{ name: 'Hyper',        description: 'Not supported' },
	{ name: 'Meta',         description: 'Not supported on Windows' },
	{ name: 'NumLock',      description: null },
	{ name: 'OS',           description: 'Not supported on Android' },
	{ name: 'Scroll',       description: 'IE only' },
	{ name: 'ScrollLock',   description: null },
	{ name: 'Shift',        description: null },
	{ name: 'Super',        description: 'Not supported' },
	{ name: 'Symbol',       description: 'Not supported' },
	{ name: 'SymbolLock',   description: 'Not supported' },
	{ name: 'Win',          description: 'IE only' },
];

function getModifiersStateFromEvent (e) {
	return ALL_MODIFIERS.map(({ name, description }) => {
		const state = e ? e.getModifierState(name) : null;
		return { name, description, state };
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
			return <ModifierTableRow
				key={ modifier.name }
				name={ modifier.name }
				description={ modifier.description }
				state={ modifier.state }
			/>
		});
	}

	render () {
		return (
			<table className={ styles.table }>
				<thead>
					<tr>
						<th>Modifier name</th>
						<th>State</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>{ this.getRows() }</tbody>
			</table>
		);
	}
}
