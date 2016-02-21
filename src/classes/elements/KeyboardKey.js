export default class KeyboardKey extends HTMLButtonElement {
	static get extends () {
		return 'button';
	}

	get location () {
		return Number(this.dataset.location);
	}

	get which () {
		return Number(this.dataset.which);
	}

	attachedCallback () {
		window.addEventListener('keydown', this.handleKeyDown);
		window.addEventListener('keyup', this.handleKeyUp);
		window.addEventListener('blur', this.handleBlur);
	}

	createdCallback () {
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	detachedCallback () {
		window.removeEventListener('keydown', this.handleKeyDown);
		window.removeEventListener('keyup', this.handleKeyUp);
		window.removeEventListener('blur', this.handleBlur);
	}

	handleBlur () {
		this.classList.remove('keydown');
	}

	handleKeyDown (e) {
		if (e.which === this.which && e.location === this.location) {
			this.classList.add('keydown');
		}
	}

	handleKeyUp (e) {
		if (e.which === this.which && e.location === this.location) {
			this.classList.remove('keydown');
		}
	}
}
