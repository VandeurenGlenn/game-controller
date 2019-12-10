export default customElements.define('game-controls', class GameControls extends HTMLElement {
  set actions(value) {
    this._actions = value;
  }

  get actions() {
    return this._actions || this.getAttribute('actions') || { a: 'a', b: 'e', jump: ' '}
  }

  set config(value) {
    this._config = value
  }

  get config() {
    return this._config || this.getAttribute('config') || {
      up: ['ArrowUp', 'z'],
      down: ['ArrowDown', 's'],
      left: ['ArrowLeft', 'q'],
      right: ['ArrowRight', 'd'],
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
      	if (entry[1].indexOf(event.key) !== -1) document.dispatchEvent(new CustomEvent(entry[0]))
      }
    })
  }
})
