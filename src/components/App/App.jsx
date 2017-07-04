import React from 'react';
import ModifierList from '../ModifierList';
import EventLightList from '../EventLightList';
import EventDetailsList from '../EventDetailsList';
import TestArea from '../TestArea';

import {
	MemoryRouter as Router,
	Route,
	Link,
} from 'react-router-dom'

const PageActiveModifiers = () => (
	<div>
		<h2>Active Modifiers</h2>
		<TestArea />
		<p>Determined using <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState" title="'KeyboardEvent.getModifierState()' on MDN"><code>KeyboardEvent.getModifierState()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/getModifierState" title="'MouseEvent.getModifierState()' on MDN"><code>MouseEvent.getModifierState()</code></a>.</p>
		<p>Click on the page or press any key to determine the state of all modifier keys. When the page loses focus the state of each modifier key is invalidated.</p>
		<p>See <a href="https://www.w3.org/TR/uievents-key/#keys-modifier" title="'UI Events KeyboardEvent key Values' on W3C">Modifier Keys on W3C</a> for a description of each modifier key.</p>
		<ModifierList />
	</div>
);

const PageTriggeredEvents = () => (
	<div>
		<h2>Triggered Events</h2>
		<TestArea />
		<p>Event listeners on the window object show when these events are fired. Each light will flash green for 100ms after it has been pressed. It will then turn grey and fade out. You may notice that not all keys trigger a keypress event.</p>
		<EventLightList />
	</div>
);

const PageLatestEvents = () => (
	<div>
		<h2>Latest Events</h2>
		<TestArea />
		<p>Observe the order and details of each keyboard event captured by the window. Shows the nine latest keyboard events with the most recent at the top.</p>
		<EventDetailsList />
	</div>
);

const App = () => (
	<Router
		initialEntries={ ['/active-modifiers'] }
		initialIndex={ 1 }
	>
		<div>
			<h1>Keyboard</h1>
			<ul>
				<li><Link to="/active-modifiers">Active Modifiers</Link></li>
				<li><Link to="/trigered-events">Triggered Events</Link></li>
				<li><Link to="/latest-events">Latest Events</Link></li>
			</ul>
			<Route path="/active-modifiers" component={ PageActiveModifiers } />
			<Route path="/trigered-events" component={ PageTriggeredEvents } />
			<Route path="/latest-events" component={ PageLatestEvents } />
		</div>
	</Router>
);

export default App;
