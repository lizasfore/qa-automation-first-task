const { expect } = require("@playwright/test");

exports.SearchRes = class SearchRes {
  constructor(page) {
    this.page = page;
    this.priceFilter = page.locator(
      "//h6[@aria-controls = 'facet-priceRange']"
    );
    this.freePrice = page.locator(
      "//input[@id = 'facet-priceRange-1']//parent::div"
    );
    this.productPrice = page.locator(
      "(//div[contains(@class, 'product-price')])[3]"
    );
  }

  async choosePriceRange() {
    await this.priceFilter.click();
    await this.freePrice.click();
    await expect(this.productPrice).toHaveText("Free");
  }
};
