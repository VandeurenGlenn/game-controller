export default customElements.define('game-controls', class GameControls extends HTMLElement {
  set actions(value) {
    this._actions = value;
  }

  get actions() {
    return this._actions || this.getAttribute('actions') || { a: '', b: ''}
  }

  set config(value) {
    this._config = value
  }

  get config() {
    return this._config || this.getAttribute('config') || {
      up: '',
      down: '',
      left: '',
      right: '',
      actions: this.actions
    }
  }

  constructor() {
    super()
  }

  connectedCallback() {
    document.addEventListener('keypress', event => {
      console.log(event)
      for (const entry of Object.entries(this.config.entries())) {
	if (entry[1] === event.code) document.dispatchEvent(new CustomEvent(entry[0]))

      }
    })
  }
})
