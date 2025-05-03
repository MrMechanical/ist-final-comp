import { LitElement, html, css } from 'lit';
import { DDDSuper } from 'd-d-d';

export class PortfolioNavItem extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-nav-item'; }
  static get properties() {
    return {
      id:      { type: String },
      title:   { type: String },
      active:  { type: Boolean, reflect: true }
    };
  }
  static get styles() {
    return css`
      a {
        margin: 0 var(--ddd-spacing-2);
        color: var(--nav-item-color, black);
        text-decoration: none;
        padding: var(--ddd-spacing-2);
        display: inline-block;
      }
      :host([active]) a {
        font-weight: bold;
        border-bottom: 2px solid var(--ddd-theme-primary);
      }
    `;
  }
  render() {
    return html`<a href="#${this.id}" @click=${this._onClick}>${this.title}</a>`;
  }
  _onClick(e) {
    e.preventDefault();
    const id = this.id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
    this.dispatchEvent(new CustomEvent('nav-selected', {
      bubbles: true,
      composed: true,
      detail: { id }
    }));
  }
}

customElements.define(PortfolioNavItem.tag, PortfolioNavItem);
