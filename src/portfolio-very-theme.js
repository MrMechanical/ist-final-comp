import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';


import '@haxtheweb/scroll-button/scroll-button.js';
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
      .scroll-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
    `
  ]; }

  // add HAX metadata reference
  static get haxProperties() {
    return new URL('../lib/portfolio-very-theme.haxProperties.json', import.meta.url).href;
  }

  render() {
    return html`
    <div>
      <slot>

        </slot>
        <div class="scroll-button">

          <scroll-button></scroll-button>
        </div>
    </div>
    `;
  }
}

customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
