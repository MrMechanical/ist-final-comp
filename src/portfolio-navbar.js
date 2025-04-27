import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js'; // added missing import

export class PortfolioNavbar extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-navbar'; }
  static get styles() {
    return css`
      :host { display:block; }
      nav {
        position: fixed;
        top: 20vh;                            /* 1/5 down the page */
        left: var(--ddd-spacing-2);
        right: var(--ddd-spacing-2);
        display: flex;
        justify-content: center;
        padding: var(--ddd-spacing-2);
        background-color: rgba(255,255,255,0.5);
        border: none;
        border-radius: 0;
        z-index: 100;
      }
      nav a {
        margin: 0 var(--ddd-spacing-2);
        color: white;
        text-decoration: none;
        padding: var(--ddd-spacing-2);
      }
      nav a.active {
        font-weight: bold;
        border-bottom: 2px solid var(--ddd-theme-primary);
      }
    `;
  }
  static get haxProperties() {
    return new URL('../lib/portfolio-navbar.haxProperties.json', import.meta.url).href;
  }
  render() {
    const screens = Array.from(document.querySelectorAll('portfolio-screen'));
    return html`
      <nav>
        ${screens.map(s => html`
          <a href="#${s.id}" @click=${e => this._onClick(e)} data-id="${s.id}">
            ${s.title}
          </a>`)}
      </nav>
    `;
  }
  _onClick(e) {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
    history.replaceState(null, '', `#${id}`);
  }
}

customElements.define(PortfolioNavbar.tag, PortfolioNavbar);
