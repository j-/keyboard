import ModifierState from './ModifierState';

const KEY_CAPSLOCK = 0x14;
const STATE = Symbol('state');

export default class CapslockModifierState extends ModifierState {
	/**
	 * Takes an event object and determines if the pressed key was capslock.
	 * @param {Event} e Event object
	 * @return {Boolean} True if capslock, false otherwise
	 */
	static isCapslockKey (e) {
		return e.which === KEY_CAPSLOCK;
	}

	/**
	 * Determine if capslock was on when this key was pressed.
	 * @param {Event} e Event object
	 * @return {?Boolean} Null if capslock was not detected, true if it is on,
	 *   and false if it is off
	 */
	static isCapslockOn (e) {
		const character = String.fromCharCode(e.which);
		const upper = character.toUpperCase();
		const lower = character.toLowerCase();
		// Key does not have case
		if (upper === lower) {
			return null;
		}
		// Character is upper case and shift key is not held
		// or character is lower case and shift key is held
		return (character === upper) !== e.shiftKey;
	}

	/**
	 * Create a new instance of the CapslockModifierState class.
	 */
	constructor () {
		super();
		this[STATE] = null;
		this.handleKeyPress = this.handleKeyPress.bind(this);
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
		const isCaps = CapslockModifierState.isCapslockKey(e);
		if (isCaps) {
			this.toggleCapslockState();
		}
	}

	/**
	 * Handle element keypress events.
	 * @param {Event} e Event object
	 */
	handleKeyPress (e) {
		const state = CapslockModifierState.isCapslockOn(e);
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
	 *   capslock state.
	 * @param {EventTarget} [element=window] Optional element to listen to
	 */
	start (element = window) {
		this.setState(null);
		element.addEventListener('keypress', this.handleKeyPress);
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
		element.removeEventListener('keypress', this.handleKeyPress);
		element.removeEventListener('keydown', this.handleKeyDown);
		element.removeEventListener('blur', this.handleBlur);
	}

	/**
	 * Switches on to off and off to on. If the state is unknown, does nothing.
	 * @return {?Boolean} New state
	 */
	toggleCapslockState () {
		const previous = this[STATE];
		if (previous !== null) {
			this.setState(!previous);
		}
		return this.getState();
	}
}
