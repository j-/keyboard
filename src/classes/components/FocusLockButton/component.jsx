import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.less';

export default class FocusLockButton extends React.Component {
	cancelEvent (e) {
		e.preventDefault();
	}

	render () {
		return (
			<Button className={ styles.lock } onKeyDown={ this.cancelEvent } onKeyUp={ this.cancelEvent }>
				Focus Lock
			</Button>
		);
	}
}
