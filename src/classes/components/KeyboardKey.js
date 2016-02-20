export default class KeyboardKey extends HTMLButtonElement {
	static get extends () {
		return 'button';
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
		if (e.which === Number(this.dataset.which)) {
			this.classList.add('keydown');
		}
	}

	handleKeyUp (e) {
		if (e.which === Number(this.dataset.which)) {
			this.classList.remove('keydown');
		}
	}
}
