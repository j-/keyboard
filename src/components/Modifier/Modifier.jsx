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
		this.handleModifierEvent = this.handleModifierEvent.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleModifierEvent (e) {
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
		window.addEventListener('mousedown', this.handleModifierEvent);
		window.addEventListener('keydown', this.handleModifierEvent);
		window.addEventListener('keyup', this.handleModifierEvent);
		window.addEventListener('blur', this.handleBlur);
	}

	componentWillUnmount () {
		window.removeEventListener('mousedown', this.handleModifierEvent);
		window.removeEventListener('keydown', this.handleModifierEvent);
		window.removeEventListener('keyup', this.handleModifierEvent);
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
