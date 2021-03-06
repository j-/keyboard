import React, { Component, PropTypes } from 'react';
import EventDetails from '../EventDetails';

import {
	container,
	eventDetailsListItem,
} from './styles';

export default class EventDetailsList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			events: [],
		};
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	componentDidMount () {
		document.addEventListener('keydown', this.handleKeyDown);
		document.addEventListener('keypress', this.handleKeyPress);
		document.addEventListener('keyup', this.handleKeyUp);
	}

	componentWillUnmount () {
		document.removeEventListener('keydown', this.handleKeyDown);
		document.removeEventListener('keypress', this.handleKeyPress);
		document.removeEventListener('keyup', this.handleKeyUp);
	}

	handleKeyboardEvent (e) {
		const { eventCount } = this.props;
		// Make a copy of the synthetic event
		const clone = {
			type: e.type,
			key: e.key,
			location: e.location,
			code: e.code,
			keyCode: e.keyCode,
			repeat: e.repeat,
		};
		// Get the previous state so we can modify it
		this.setState((state) => {
			return {
				// Unshift the new event and
				// pop the oldest event.
				events: [clone, ...state.events].slice(0, eventCount),
			};
		});
	}

	handleKeyDown (e) {
		this.handleKeyboardEvent(e);
	}

	handleKeyPress (e) {
		this.handleKeyboardEvent(e);
	}

	handleKeyUp (e) {
		this.handleKeyboardEvent(e);
	}

	render () {
		const { events } = this.state;
		const children = events.map((event, i) => (
			<li key={ i } className={ eventDetailsListItem }>
				<EventDetails
					eventCode={ event.code }
					eventKey={ event.key }
					eventKeyCode={ event.keyCode }
					eventLocation={ event.location }
					eventRepeat={ event.repeat }
					eventType={ event.type }
				/>
			</li>
		));
		return (
			<div className={ container }>
				<ul>
					{ children }
				</ul>
			</div>
		);
	}
}

EventDetailsList.propTypes = {
	eventCount: PropTypes.number,
};

EventDetailsList.defaultProps = {
	// Three sets of keydown/press/up events
	eventCount: 9,
};
