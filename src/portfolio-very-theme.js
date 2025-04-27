import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';
// import 'scroll-button';

export class PortfolioVeryTheme extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-very-theme'; }
  static get styles() { return [
    super.styles,
    css`
      :host {
        display: block;
      }
      ::slotted(portfolio-screen) {
        display: block;
      }
    `
  ]; }

  // add HAX metadata reference
  static get haxProperties() {
    return new URL('../lib/portfolio-very-theme.haxProperties.json', import.meta.url).href;
  }

  render() {
    return html`
      <slot></slot>
      <scroll-button></scroll-button>
    `;
  }
}

customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
