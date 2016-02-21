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
		this.handleKeydown = this.handleKeydown.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	componentWillMount () {
		window.addEventListener('keydown', this.handleKeydown);
		window.addEventListener('blur', this.handleBlur);
	}

	componentWillUnmount () {
		window.removeEventListener('keydown', this.handleKeydown);
		window.removeEventListener('blur', this.handleBlur);
	}

	handleKeydown (e) {
		this.setState({
			modifiers: [
				{ name: 'CapsLock', state: e.getModifierState('CapsLock') },
				{ name: 'NumLock', state: e.getModifierState('NumLock') },
				{ name: 'ScrollLock', state: e.getModifierState('ScrollLock') },
			],
		});
	}

	handleBlur () {
		this.setState({
			modifiers: [
				{ name: 'CapsLock', state: null },
				{ name: 'NumLock', state: null },
				{ name: 'ScrollLock', state: null },
			],
		});
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
