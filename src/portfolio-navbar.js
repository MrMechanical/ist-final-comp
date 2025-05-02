import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';
import './portfolio-nav-item.js'; // ← new

export class PortfolioNavbar extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-navbar'; }
  static get styles() {
    return css`
      :host { display:block; }
      nav {
        position: fixed;
        top: 1vh;                            /* lowered to avoid covering content */
        left: var(--ddd-spacing-2);
        right: var(--ddd-spacing-2);
        display: flex;
        justify-content: center;
        padding: var(--ddd-spacing-2);
        background-color: rgba(255,255,255,0.9);  /* much less transparent */
        border: none;
        border-radius: 0;
        z-index: 100;
      }
      nav a {
        margin: 0 var(--ddd-spacing-2);
        color: black;            /* changed from white to black */
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
    const current = window.location.hash.slice(1);
    return html`
      <nav>
        ${screens.map(s => html`
          <portfolio-nav-item
            id="${s.id}"
            title="${s.title}"
            ?active="${s.id === current}"
          ></portfolio-nav-item>
        `)}
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
