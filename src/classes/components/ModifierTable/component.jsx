import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './styles.less';
import ModifierTableRow from '../ModifierTableRow/component';

const ALL_MODIFIERS = [
	{ name: 'Accel',        state: null, description: 'Deprecated' },
	{ name: 'Alt',          state: null, description: null },
	{ name: 'AltGraph',     state: null, description: 'Not supported on Android' },
	{ name: 'CapsLock',     state: null, description: null },
	{ name: 'Control',      state: null, description: null },
	{ name: 'Fn',           state: null, description: 'Only supported on Android 3.0+' },
	{ name: 'FnLock',       state: null, description: 'Not supported' },
	{ name: 'Hyper',        state: null, description: 'Not supported' },
	{ name: 'Meta',         state: null, description: 'Not supported on Windows' },
	{ name: 'NumLock',      state: null, description: null },
	{ name: 'OS',           state: null, description: 'Not supported on Android' },
	{ name: 'Scroll',       state: null, description: 'IE only' },
	{ name: 'ScrollLock',   state: null, description: null },
	{ name: 'Shift',        state: null, description: null },
	{ name: 'Super',        state: null, description: 'Not supported' },
	{ name: 'Symbol',       state: null, description: 'Not supported' },
	{ name: 'SymbolLock',   state: null, description: 'Not supported' },
	{ name: 'Win',          state: null, description: 'IE only' },
];

function updateModifiersStateFromEvent (modifiers, e) {
	modifiers.forEach((modifier) => {
		modifier.state = e ? e.getModifierState(modifier.name) : null;
	});
}

export default class ModifierTable extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			modifiers: [...ALL_MODIFIERS],
		};
		this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	componentWillMount () {
		window.addEventListener('keydown', this.handleKeyboardEvent);
		window.addEventListener('keyup', this.handleKeyboardEvent);
		window.addEventListener('blur', this.handleBlur);
	}

	componentWillUnmount () {
		window.removeEventListener('keydown', this.handleKeyboardEvent);
		window.removeEventListener('keyup', this.handleKeyboardEvent);
		window.removeEventListener('blur', this.handleBlur);
	}

	handleKeyboardEvent (e) {
		updateModifiersStateFromEvent(this.state.modifiers, e);
		this.setState(this.state);
	}

	handleBlur () {
		updateModifiersStateFromEvent(this.state.modifiers, null);
		this.setState(this.state);
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
			<Table striped bordered condensed hover className={ styles.table }>
				<thead>
					<tr>
						<th>Modifier name</th>
						<th>State</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>{ this.getRows() }</tbody>
			</Table>
		);
	}
}
