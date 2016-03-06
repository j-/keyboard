import React from 'react';
import { PageHeader } from 'react-bootstrap';
import ModifierTable from '../ModifierTable/component';
import FocusLockButton from '../FocusLockButton/component';

export default class Application extends React.Component {
	render () {
		return (
			<div className="container">
				<PageHeader>Keyboard</PageHeader>
				<FocusLockButton />
				<ModifierTable />
			</div>
		);
	}
}
