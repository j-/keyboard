import ModifierState from './ModifierState';

const KEY_NUMLOCK = 0x90;
const LOC_STANDARD = 0;
const LOC_NUMPAD = 3;
const STATE = Symbol('state');

const NUMPAD_KEYS = {
	// Numlock is off
	0x0c: false, // clear
	0x21: false, // page up
	0x22: false, // page down
	0x23: false, // end
	0x24: false, // home
	0x25: false, // left arrow
	0x26: false, // up arrow
	0x27: false, // right arrow
	0x28: false, // down arrow
	0x2d: false, // insert
	0x2e: false, // delete
	// Numlock is on
	0x60: true, // numpad 0
	0x61: true, // numpad 1
	0x62: true, // numpad 2
	0x63: true, // numpad 3
	0x64: true, // numpad 4
	0x65: true, // numpad 5
	0x66: true, // numpad 6
	0x67: true, // numpad 7
	0x68: true, // numpad 8
	0x69: true, // numpad 9
	0x6e: true, // decimal point
};

export default class NumlockModifierState extends ModifierState {
	/**
	 * Takes an event object and determines if the pressed key was numlock.
	 * @param {Event} e Event object
	 * @return {Boolean} True if numlock, false otherwise
	 */
	static isNumlockKey (e) {
		return e.which === KEY_NUMLOCK;
	}

	/**
	 * Determine if numlock was on when this key was pressed.
	 * @param {Event} e Event object
	 * @return {?Boolean} Null if numlock was not detected, true if it is on,
	 *   and false if it is off
	 */
	static isNumlockOn (e) {
		if (e.location !== LOC_NUMPAD) {
			return null;
		}
		const which = e.which;
		const result = NUMPAD_KEYS[which];
		if (result === undefined) {
			return null;
		}
		return result;
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
		const isNumlock = NumlockModifierState.isNumlockKey(e);
		if (isNumlock) {
			this.toggleState();
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
