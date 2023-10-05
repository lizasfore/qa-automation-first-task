const { expect } = require("@playwright/test");

exports.ScriptWPage = class ScriptWPage {
  constructor(page) {
    this.page = page;
    this.input = page.locator(
      "//input[@type='text' and @class='form-control']"
    );
    this.generateBtn = page.locator("//button[@type='submit']");
    this.regenerateBtn = page.locator(
      "(//button[contains(@class, 'btn-simple-secondary')])[2]"
    );
  }

  async generateScript() {
    await this.input.click();
    await this.input.fill("man smiling");

    await this.generateBtn.click();
    await this.regenerateBtn.isEnabled();
  }
};
