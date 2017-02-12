import React from 'react';
import ModifierList from '../ModifierList';
import EventLightList from '../EventLightList';
import EventDetailsList from '../EventDetailsList';
import TestArea from '../TestArea';

const App = () => (
	<div>
		<h1>Keyboard</h1>

		<h2>Active Modifiers</h2>
		<p>Determined using <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState" title="'KeyboardEvent.getModifierState()' on MDN"><code>KeyboardEvent.getModifierState()</code></a>. Press any key to determine the state of all modifiers. When the page loses focus the state of each modifier key is invalidated.</p>
		<ModifierList />

		<h2>Triggered Events</h2>
		<TestArea />
		<p>Event listeners on the window object show when these events are fired. Each light will flash green for 100ms after it has been pressed. It will then turn grey and fade out. You may notice that not all keys trigger a keypress event.</p>
		<EventLightList />

		<h2>Latest Events</h2>
		<TestArea />
		<p>Observe the order and details of each keyboard event captured by the window. Shows the nine latest keyboard events with the most recent at the top.</p>
		<EventDetailsList />
	</div>
);

export default App;
