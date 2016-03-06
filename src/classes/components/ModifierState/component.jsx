import React from 'react';
import styles from './styles.less';

const DESCRIPTIONS = {
	true: 'active',
	false: 'inactive',
};

const DEFAULT_DESCRIPTION = 'unknown';

const CLASSNAMES = {
	true: styles.active,
	false: styles.inactive,
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
