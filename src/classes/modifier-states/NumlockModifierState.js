import ModifierState from './ModifierState';

export default class NumlockModifierState extends ModifierState {
	/**
	 * Determine if numlock was on when this key was pressed.
	 * @param {Event} e Event object
	 * @return {?Boolean} Null if numlock was not detected, true if it is on,
	 *   and false if it is off
	 */
	static isNumlockOn (e) {
		return e.getModifierState('NumLock');
	}

	/**
	 * Create a new instance of the NumlockModifierState class.
	 */
	constructor () {
		super();
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
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
		const state = NumlockModifierState.isNumlockOn(e);
		if (state !== null) {
			this.setState(state);
		}
	}

	/**
	 * Start listening to an element for events that will help determine
	 *   numlock state.
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
}
