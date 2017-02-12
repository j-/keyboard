import React, { PropTypes } from 'react';

import {
	eventDetails,
	eventDetailsKey,
	eventDetailsValue,
} from './styles';

const EventDetails = ({
	eventType,
	eventKey,
	eventLocation,
}) => (
	<dl className={ eventDetails }>
		<dt className={ eventDetailsKey }>type</dt>
		<dd className={ eventDetailsValue }>{ eventType }</dd>

		<dt className={ eventDetailsKey }>key</dt>
		<dd className={ eventDetailsValue }>{ eventKey }</dd>

		<dt className={ eventDetailsKey }>location</dt>
		<dd className={ eventDetailsValue }>{ eventLocation }</dd>
	</dl>
);

EventDetails.propTypes = {
	eventType: PropTypes.string.isRequired,
	eventKey: PropTypes.string.isRequired,
	eventLocation: PropTypes.number.isRequired,
};

export default EventDetails;
