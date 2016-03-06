import React from 'react';
import styles from './styles.less';

export default class FocusLockButton extends React.Component {
	cancelEvent (e) {
		e.preventDefault();
	}

	render () {
		return (
			<button className={ styles.lock } onKeyDown={ this.cancelEvent } onKeyUp={ this.cancelEvent }>
				Focus Lock
			</button>
		);
	}
}
