const { expect } = require("@playwright/test");

exports.PreviewPage = class PreviewPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator("#product-cta-box-download-button");
    this.signUpPopUp = page.locator("#signup-submit-btn");
  }

  async addToCart() {
    await this.addToCartBtn.click();
    await this.signUpPopUp.click();
  }
};
