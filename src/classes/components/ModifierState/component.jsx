import React from 'react';

const STATES = {
	true: 'enabled',
	false: 'disabled',
};

const DEFAULT_STATE = 'unknown';

export default class ModifierState extends React.Component {
	render () {
		const text = STATES[this.props.state] || DEFAULT_STATE;
		return <span>{ text }</span>;
	}
}
