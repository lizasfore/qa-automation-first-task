const { expect } = require("@playwright/test");

exports.AuthorizationPage = class AuthorizationPage {
  constructor(page) {
    this.page = page;
    this.fNameInput = page.locator("#first-name");
    this.lNameInput = page.locator("#last-name");
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.signUpBtn = page.locator("#signup-submit-button");
    this.invalidMsg = page.locator("invalid-feedback");

    this.loginBtn = page.locator("#login-submit-button");
    this.alertMsg = page.locator("//h5[@class='alert-heading']");
  }

  async signUpFill() {
    await this.fNameInput.click();
    await this.fNameInput.fill("Elizabeth");

    await this.lNameInput.click();
    await this.lNameInput.fill(" ");

    await this.emailInput.click();
    await this.emailInput.fill("fgsdfgsdgsdfg.com");

    await this.passwordInput.click();
    await this.passwordInput.fill("ssbfbsiis");

    await this.signUpBtn.click();
  }

  async signUpFailCheck() {
    await this.invalidMsg.isVisible();
  }

  async loginFill() {
    await this.emailInput.click();
    await this.emailInput.fill("qwerty@gmail.com");
    await this.passwordInput.click();
    await this.passwordInput.fill("jhdfsdifhsidfh");
    await this.loginBtn.click();
  }

  async loginFailCheck() {
    await this.alertMsg.isVisible();
  }
};
