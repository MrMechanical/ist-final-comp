import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';
// import 'scroll-button';

export class PortfolioVeryTheme extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-very-theme'; }
  static get styles() { return [ super.styles, css`
    :host { display:block; }
    nav { position:fixed; top:0; left:0; width:100%; display:flex; justify-content:center; background:var(--ddd-theme-accent); z-index:10; }
    nav a { margin:0 var(--ddd-spacing-2); color:var(--ddd-theme-primary); text-decoration:none; padding:var(--ddd-spacing-2); }
    nav a.active { font-weight:bold; border-bottom:2px solid var(--ddd-theme-primary); }
    ::slotted(portfolio-screen) { display:block; }
  `]; }

  render() {
    const screens = Array.from(this.querySelectorAll('portfolio-screen'));
    return html`
      <nav>
        ${screens.map(s => html`<a href="#${s.id}" data-id="${s.id}">${s.title}</a>`)}
      </nav>
      <slot></slot>
      <scroll-button></scroll-button>
    `;
  }

  firstUpdated() {
    this._links = this.shadowRoot.querySelectorAll('nav a');
    this._screens = Array.from(this.querySelectorAll('portfolio-screen'));
    this._links.forEach(l => l.addEventListener('click', this._onNavClick.bind(this)));
    const obs = new IntersectionObserver(this._onIntersect.bind(this), { threshold: 0.6 });
    this._screens.forEach(s => obs.observe(s));
    // on load, jump to hash
    if (window.location.hash) {
      setTimeout(()=>{
        document.querySelector(window.location.hash)?.scrollIntoView({behavior:'smooth'});
      },50);
    }
  }

  _onNavClick(e) {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    history.pushState(null,'', `#${id}`);
  }

  _onIntersect(entries) {
    entries.forEach(({target,isIntersecting})=>{
      this._links.forEach(l => {
        l.classList.toggle('active', l.dataset.id===target.id && isIntersecting);
      });
    });
  }
}

customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
