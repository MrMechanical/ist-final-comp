import { LitElement, html, css } from 'lit';

export class PortfolioNavbar extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-navbar'; }
  static get styles() {
    return css`
      :host { display:block; }
      nav {
        position: fixed;
        top: var(--ddd-spacing-2);
        left: var(--ddd-spacing-2);
        right: var(--ddd-spacing-2);
        display: flex;
        justify-content: center;
        padding: var(--ddd-spacing-2);
        background-color: rgba(255,255,255,0.5);
        border: 2px solid rgba(255,255,255,0.5);
        border-radius: var(--ddd-radius-lg);
        z-index: 100;
      }
      nav.black {
        background: black;
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
  firstUpdated() {
    const navEl = this.shadowRoot.querySelector('nav');
    const slide1 = document.getElementById('screen-1');
    if (slide1) {
      new IntersectionObserver(
        entries => {
          entries.forEach(({ isIntersecting }) => {
            navEl.classList.toggle('black', isIntersecting);
          });
        },
        { threshold: 0.6 }
      ).observe(slide1);
    }
  }
  _onClick(e) {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
    history.replaceState(null, '', `#${id}`);
  }
}

customElements.define(PortfolioNavbar.tag, PortfolioNavbar);
