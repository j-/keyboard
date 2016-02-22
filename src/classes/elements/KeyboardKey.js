export default class KeyboardKey extends HTMLDivElement {
	get location () {
		return this.dataset.location ? Number(this.dataset.location) : null;
	}

	get which () {
		return this.dataset.which ? Number(this.dataset.which) : null;
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
		// Apply custom width to element
		this.style.flexGrow = this.dataset.width ? this.dataset.width : 1;
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
		const same = (
			// Keys match
			e.which === this.which &&
			(
				// No location is specified
				this.location === null ||
				// A location is specified and it matches
				e.location === this.location
			)
		);
		if (same) {
			this.classList.add('keydown');
		}
	}

	handleKeyUp (e) {
		const same = (
			// Keys match
			e.which === this.which &&
			(
				// No location is specified
				this.location === null ||
				// A location is specified and it matches
				e.location === this.location
			)
		);
		if (same) {
			this.classList.remove('keydown');
		}
	}
}
