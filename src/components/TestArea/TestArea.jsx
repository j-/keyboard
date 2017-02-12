import React, { Component } from 'react';

import {
	testArea,
} from './styles';

export default class TestArea extends Component {
	constructor (props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	handleKeyboardEvent (e) {
		e.preventDefault();
	}

	handleKeyDown (e) {
		if (e.key === 'Tab') {
			this.refs.element.blur();
		} else {
			this.handleKeyboardEvent(e);
		}
	}

	handleKeyPress (e) {
		this.handleKeyboardEvent(e);
	}

	handleKeyUp (e) {
		this.handleKeyboardEvent(e);
	}

	render () {
		const { props } = this;
		return (
			<textarea
				ref="element"
				className={ testArea }
				onKeyDown={ this.handleKeyDown }
				onKeyPress={ this.handleKeyPress }
				onKeyUp={ this.handleKeyUp }
				{ ...props }
			/>
		);
	}
}
