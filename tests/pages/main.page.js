const { expect } = require("@playwright/test");

exports.MainPage = class MainPage {
  constructor(page) {
    this.page = page;
    this.previewTile = page.locator("//a[@class = 'product-click']");
    this.searchDropDown = page.locator(
      "//button[contains(@class, 'btn-secondary')]"
    );
    this.searchOption3D = page.locator(
      "(//span[@class = 'cjk-word-break']//parent::button)[5]"
    );
    this.searchInput = page.locator(
      "//input[contains(@class, 'form-control')]"
    );
    this.learnMoreBtn = page.locator("//a[@rel='license' and @class]");
    this.videoScriptWriter = page.locator(
      "li > a[href='https://www.motionelements.com/ai-scriptwriter']"
    );
    this.loginBtn = page.locator("//button[contains(text(), 'Login')]");
  }

  async tileClick() {
    await this.previewTile.first().click();
  }

  async search3D() {
    await this.searchDropDown.click();
    await this.searchOption3D.click();
    await this.searchInput.fill("game");
    await this.searchInput.press("Enter");
  }

  async learnMoreClick() {
    await this.learnMoreBtn.click();
  }

  async gotoScriptWriter() {
    await this.videoScriptWriter.click();
  }

  async loginBtnClick() {
    await this.loginBtn.click();
  }
};
