import React, { Component, PropTypes } from 'react';
import ModifierStateActive from './ModifierStateActive';
import ModifierStateInactive from './ModifierStateInactive';
import ModifierStateUnknown from './ModifierStateUnknown';

export default class Modifier extends Component {
	constructor (props) {
		super(props);
		this.state = {
			known: false,
			active: false,
		};
		this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleKeyboardEvent (e) {
		this.setState({
			known: true,
			active: e.getModifierState(this.props.name),
		});
	}

	handleBlur () {
		this.setState({
			known: false,
			active: false,
		});
	}

	componentDidMount () {
		window.addEventListener('keydown', this.handleKeyboardEvent);
		window.addEventListener('keyup', this.handleKeyboardEvent);
		window.addEventListener('blur', this.handleBlur);
	}

	componentWillUnmount () {
		window.removeEventListener('keydown', this.handleKeyboardEvent);
		window.removeEventListener('keyup', this.handleKeyboardEvent);
		window.removeEventListener('blur', this.handleBlur);
	}

	render () {
		const { name } = this.props;
		const { known, active } = this.state;
		if (!known) {
			return <ModifierStateUnknown>{ name }</ModifierStateUnknown>;
		} else if (active) {
			return <ModifierStateActive>{ name }</ModifierStateActive>;
		} else {
			return <ModifierStateInactive>{ name }</ModifierStateInactive>;
		}
	}
}

Modifier.propTypes = {
	name: PropTypes.string.isRequired,
};
