import { LitElement, html, css } from 'lit';
import { DDDSuper } from 'd-d-d';

export class PortfolioScreen extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-screen'; }
  static get properties() {
    return {
      title: { type: String },
      accent: { type: String }
    };
  }
  static get styles() { return [ super.styles, css`
    /* center slide content */
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100vh;
      padding: var(--ddd-spacing-4);
      box-sizing: border-box;
    }
    :host([accent="1"]) { background-color:var(--ddd-accent-1); }
    :host([accent="2"]) { background-color:var(--ddd-accent-2); }
    :host([accent="3"]) { background-color:var(--ddd-accent-3); }
    :host([accent="4"]) { background-color:var(--ddd-accent-4); }
    :host([accent="5"]) { background-color:var(--ddd-accent-5); }
    :host(#screen-1) { 
      background-color: black;
    }
    .wrapper {
      margin-top: var(--ddd-spacing-20);
      padding: var(--ddd-spacing-20);
  `]; }

  // add HAX metadata reference
  static get haxProperties() {
    return new URL('../lib/portfolio-screen.haxProperties.json', import.meta.url).href;
  }

  render() {
    return html`<div class="wrapper"><slot></slot></div>`;
  }
}

customElements.define(PortfolioScreen.tag, PortfolioScreen);
