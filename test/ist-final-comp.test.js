import { html, fixture, expect } from '@open-wc/testing';
import "../ist-final-comp.js";

describe("IstFinalComp test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <ist-final-comp
        title="title"
      ></ist-final-comp>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
