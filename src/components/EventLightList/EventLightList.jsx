import React, { PropTypes } from 'react';
import EventLight from '../EventLight';

const EventLightList = ({ events }) => {
	const children = events.map((type) => (
		<li key={ type }>
			<EventLight type={ type } />
		</li>
	));
	return (
		<ul>
			{ children }
		</ul>
	);
};

EventLightList.propTypes = {
	events: PropTypes.arrayOf(PropTypes.string),
};

EventLightList.defaultProps = {
	events: [
		'keydown',
		'keypress',
		'keyup',
	],
};

export default EventLightList;
