import React, { Component, PropTypes } from 'react';

import {
	light,
	active,
} from './styles';

export default class EventLight extends Component {
	constructor (props) {
		super(props);
		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent () {
		const { light } = this.refs;
		// Stop animation
		light.classList.remove(active);
		// Trigger reflow (from https://css-tricks.com/restart-css-animation/)
		void light.offsetWidth;
		// Restart animation
		light.classList.add(active);
	}

	componentDidMount () {
		window.addEventListener(this.props.type, this.handleEvent);
	}

	componentWillUnmount () {
		window.removeEventListener(this.props.type, this.handleEvent);
	}

	render () {
		const { type } = this.props;
		return (
			<div className={ light } ref="light">{ type }</div>
		);
	}
}

EventLight.propTypes = {
	type: PropTypes.string.isRequired,
};
