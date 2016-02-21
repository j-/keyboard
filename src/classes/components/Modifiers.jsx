import React from 'react';

export default class Modifiers extends React.Component {
	getModifiers () {
		return [
			{ name: 'CapsLock', state: null },
			{ name: 'NumLock', state: null },
			{ name: 'ScrollLock', state: null },
		];
	}

	getRows () {
		return this.getModifiers().map((modifier) => {
			return <div key={modifier.name}>
				<strong>{modifier.name}</strong>:
				<em>{String(modifier.state)}</em>
			</div>;
		});
	}

	render () {
		return <div>{ this.getRows() }</div>;
	}
}
