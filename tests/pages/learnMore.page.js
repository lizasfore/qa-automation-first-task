const { expect } = require("@playwright/test");

exports.LearnMorePage = class LearnMorePage {
  constructor(page) {
    this.page = page;
    this.header = page.locator(
      '//h1[contains(text(), "Royalty-Free End User")]'
    );
  }

  async checkHeader() {
    await this.header.isVisible();
  }
};
