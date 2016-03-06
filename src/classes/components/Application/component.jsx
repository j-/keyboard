import React from 'react';
import ModifierTable from '../ModifierTable/component';
import FocusLockButton from '../FocusLockButton/component';

export default class Application extends React.Component {
	render () {
		return (
			<div className="container">
				<FocusLockButton />
				<ModifierTable />
			</div>
		);
	}
}
