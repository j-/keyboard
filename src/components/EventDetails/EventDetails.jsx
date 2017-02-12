import React, { PropTypes } from 'react';

import {
	eventDetails,
	eventDetailsKey,
	eventDetailsValue,
} from './styles';

const EventDetails = ({
	eventCode,
	eventKey,
	eventKeyCode,
	eventLocation,
	eventRepeat,
	eventType,
}) => (
	<dl className={ eventDetails }>
		<dt className={ eventDetailsKey }>type</dt>
		<dd className={ eventDetailsValue }>{ eventType }</dd><br />

		<dt className={ eventDetailsKey }>key</dt>
		<dd className={ eventDetailsValue }>{ eventKey }</dd><br />

		<dt className={ eventDetailsKey }>code</dt>
		<dd className={ eventDetailsValue }>{ eventCode }</dd><br />

		<dt className={ eventDetailsKey }>keyCode</dt>
		<dd className={ eventDetailsValue }>{ eventKeyCode }</dd><br />

		<dt className={ eventDetailsKey }>location</dt>
		<dd className={ eventDetailsValue }>{ eventLocation }</dd><br />

		<dt className={ eventDetailsKey }>repeat</dt>
		<dd className={ eventDetailsValue }>{ String(eventRepeat) }</dd><br />
	</dl>
);

EventDetails.propTypes = {
	eventCode: PropTypes.string.isRequired,
	eventKey: PropTypes.string.isRequired,
	eventKeyCode: PropTypes.number.isRequired,
	eventLocation: PropTypes.number.isRequired,
	eventRepeat: PropTypes.bool.isRequired,
	eventType: PropTypes.string.isRequired,
};

export default EventDetails;
