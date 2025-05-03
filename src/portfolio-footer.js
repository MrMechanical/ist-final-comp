import { LitElement, html, css } from 'lit';
import { DDDSuper } from 'd-d-d';

export class PortfolioFooter extends DDDSuper(LitElement) {
  static get tag() { return 'portfolio-footer'; }
  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--ddd-spacing-4);
        text-align: center;
        background: var(--ddd-accent-5);
        color: var(--ddd-theme-primary);
      }
      a { color: inherit; text-decoration: underline; }
    `;
  }
  render() {
    return html`
      <footer>
        <p>© ${new Date().getFullYear()} Your Name | 
           <a href="mailto:you@example.com">you@example.com</a>
        </p>
      </footer>
    `;
  }
}

customElements.define(PortfolioFooter.tag, PortfolioFooter);
