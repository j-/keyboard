import React from 'react';
import ModifierList from '../ModifierList';
import EventLightList from '../EventLightList';

const App = () => (
	<div>
		<h1>Keyboard</h1>

		<h2>Active Modifiers</h2>
		<p>Determined using <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState" title="'KeyboardEvent.getModifierState()' on MDN"><code>KeyboardEvent.getModifierState()</code></a>. Press any key to determine the state of all modifiers. When the page loses focus the state of each modifier key is invalidated.</p>
		<ModifierList />

		<h2>Triggered Events</h2>
		<p>Event listeners on the window object show when these events are fired. Each light will flash green for 100ms after it has been pressed. It will then turn grey and fade out. You may notice that not all keys trigger a keypress event.</p>
		<EventLightList />
	</div>
);

export default App;
