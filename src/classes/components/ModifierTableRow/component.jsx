import React from 'react';
import styles from './styles.css';
import ModifierState from '../ModifierState/component';

export default class ModifierTableRow extends React.Component {
	render () {
		return (
			<tr className={ styles.row }>
				<th className={ styles.label }>{ this.props.name }</th>
				<td><ModifierState state={ this.props.state } /></td>
			</tr>
		);
	}
}
