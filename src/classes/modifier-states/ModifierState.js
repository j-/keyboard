import Emitter from '../Emitter';

const STATE = Symbol('state');

export default class ModifierState extends Emitter {
	constructor () {
		super();
		this[STATE] = null;
	}

	/**
	 * Returns the current state of this instance.
	 * @return {?Boolean} Null if state is unknown, true or false otherwise
	 */
	getState () {
		return this[STATE];
	}

	/**
	 * Set the new state of this instance. Emits a 'change' event if the new
	 *   state is different to the previous state.
	 * @param {*} state New state
	 * @return {?Boolean} New state
	 */
	setState (state) {
		const previous = this[STATE];
		this[STATE] = state;
		if (state !== previous) {
			this.emit('change', state);
		}
		return state;
	}

	/**
	 * Start listening to an element for events that will help determine state.
	 */
	start () {
		// No-op
	}

	/**
	 * Stop listening to an element for events.
	 */
	stop (element = window) {
		// No-op
	}

	/**
	 * Switches on to off and off to on. If the state is unknown, does nothing.
	 * @return {?Boolean} New state
	 */
	toggleState () {
		const previous = this[STATE];
		if (previous !== null) {
			this.setState(!previous);
		}
		return this.getState();
	}
}
