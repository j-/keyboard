import React from 'react';
import ModifierTableRow from '../ModifierTableRow/component';

export default class ModifierTable extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			modifiers: [
				{ name: 'CapsLock', state: null },
				{ name: 'NumLock', state: null },
				{ name: 'ScrollLock', state: null },
			],
		};
	}

	getRows () {
		return this.state.modifiers.map((modifier) => {
			return <ModifierTableRow key={ modifier.name } name={ modifier.name } state={ modifier.state } />
		});
	}

	render () {
		return <div>{ this.getRows() }</div>;
	}
}
