import React from 'react';
import styles from './styles.css';
import ModifierState from '../ModifierState/component';

export default class ModifierTableRow extends React.Component {
	render () {
		return (
			<div>
				<strong className={ styles.label }>{ this.props.name }</strong>
				<ModifierState state={ this.props.state } />
			</div>
		);
	}
}
