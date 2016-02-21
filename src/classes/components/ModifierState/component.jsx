import React from 'react';
import styles from './styles.css';

const DESCRIPTIONS = {
	true: 'enabled',
	false: 'disabled',
};

const DEFAULT_DESCRIPTION = 'unknown';

const CLASSNAMES = {
	true: styles.enabled,
	false: styles.disabled,
};

const DEFAULT_CLASSNAME = styles.unknown;

export default class ModifierState extends React.Component {
	render () {
		const { state } = this.props;
		const text = DESCRIPTIONS[state] || DEFAULT_DESCRIPTION;
		const className = CLASSNAMES[state] || DEFAULT_CLASSNAME;
		return <span className={ className }>{ text }</span>;
	}
}
