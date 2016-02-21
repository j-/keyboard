import React from 'react';
import styles from './styles.less';
import ModifierState from '../ModifierState/component';

export default class ModifierTableRow extends React.Component {
	render () {
		const { name, state, description } = this.props;
		const rowStyle = (state === true) ? styles.active : styles.inactive;
		return (
			<tr className={ rowStyle }>
				<th className={ styles.label }>{ name }</th>
				<td><ModifierState state={ state } /></td>
				<td>{ description }</td>
			</tr>
		);
	}
}
