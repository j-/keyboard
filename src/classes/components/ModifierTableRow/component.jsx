import React from 'react';
import ModifierState from '../ModifierState/component';

export default class ModifierTableRow extends React.Component {
	render () {
		return (
			<div>
				<strong>{ this.props.name }</strong>:
				<ModifierState state={ this.props.state } />
			</div>
		);
	}
}
