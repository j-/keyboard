import Emitter from './Emitter';

const STATE = Symbol('state');

export default class ModifierState extends Emitter {
	/**
	 * Create a new instance of the ModifierState class.
	 * @param {String} modifier Name of modifier to observe
	 */
	constructor (modifier) {
		super();
		this[STATE] = null;
		this.modifier = modifier;
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	/**
	 * Returns the current state of this instance.
	 * @return {?Boolean} Null if state is unknown, true or false otherwise
	 */
	getState () {
		return this[STATE];
	}

	/**
	 * Handle element blur events.
	 * @param {Event} e Event object
	 */
	handleBlur (e) {
		this.setState(null);
	}

	/**
	 * Handle element keydown events.
	 * @param {Event} e Event object
	 */
	handleKeyDown (e) {
		const state = e.getModifierState(this.modifier);
		if (state !== null) {
			this.setState(state);
		}
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
	 * Start listening to an element for events that will help determine
	 *   modifier state.
	 * @param {EventTarget} [element=window] Optional element to listen to
	 */
	start (element = window) {
		this.setState(null);
		element.addEventListener('keydown', this.handleKeyDown);
		element.addEventListener('blur', this.handleBlur);
	}

	/**
	 * Stop listening to an element for events.
	 * @param {EventTarget} [element=window] Optional element to stop listening
	 *   to
	 */
	stop (element = window) {
		this.setState(null);
		element.removeEventListener('keydown', this.handleKeyDown);
		element.removeEventListener('blur', this.handleBlur);
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
