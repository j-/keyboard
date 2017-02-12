import React from 'react';
import ModifierList from '../ModifierList';

const App = () => (
	<div>
		<h1>Keyboard</h1>

		<h2>Active Modifiers</h2>
		<p>Determined using <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState" title="'KeyboardEvent.getModifierState()' on MDN"><code>KeyboardEvent.getModifierState()</code></a>. Press any key to determine the state of all modifiers. When the page loses focus the state of each modifier key is invalidated.</p>
		<ModifierList />
	</div>
);

export default App;
