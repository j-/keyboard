import React from 'react';

export default class ModifierTableRow extends React.Component {
	render () {
		return (
			<div>
				<strong>{ this.props.name }</strong>:
				<em>{ String(this.props.state) }</em>
			</div>
		);
	}
}
