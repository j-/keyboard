import React from 'react';

export default class KeyboardKey extends React.Component {
	render () {
		const { which, width, location, children } = this.props;
		return (
			<keyboard-key
				data-which={ which }
				data-width={ width }
				data-location={ location }>
				{ children }
			</keyboard-key>
		);
	}
}
