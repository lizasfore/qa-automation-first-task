// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/pages/main.page.js");
const { PreviewPage } = require("../tests/pages/template.page.js");
const { AuthorizationPage } = require("./pages/authorization.page.js");
const { SearchRes } = require("../tests/pages/searchResult.page.js");
const { LearnMorePage } = require("../tests/pages/learnMore.page.js");
const { ScriptWPage } = require("../tests/pages/scriptWriter.page.js");

test.describe("internship task", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://www.motionelements.com/");
  });

  test("should not sign up with wrong inputs", async ({ page }) => {
    const mainPage = new MainPage(page);
    const previewPage = new PreviewPage(page);
    const authPage = new AuthorizationPage(page);

    await mainPage.tileClick();
    await previewPage.addToCart();
    await authPage.signUpFill();
    await authPage.signUpFailCheck();
  });

  test("should show correct search results", async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchRes = new SearchRes(page);

    await mainPage.search3D();
    await searchRes.choosePriceRange();
  });

  test("should check header visibility", async ({ page }) => {
    const mainPage = new MainPage(page);
    const learnPage = new LearnMorePage(page);

    await mainPage.learnMoreClick();
    await learnPage.checkHeader();
  });

  test("should generate script", async ({ page }) => {
    const mainPage = new MainPage(page);
    const scriptWPage = new ScriptWPage(page);

    await mainPage.gotoScriptWriter();
    await scriptWPage.generateScript();
  });

  test("should not log in", async ({ page }) => {
    const mainPage = new MainPage(page);
    const authPage = new AuthorizationPage(page);

    await mainPage.loginBtnClick();
    await authPage.loginFill();
    await authPage.loginFailCheck();
  });

  // test("should check one of the documentation issues", async ({ page }) => {
  //   await page.locator("strong>a[href='/projects/redmine/wiki/Guide']").click();

  //   const contributeLink = await page.$(
  //     "a[href='/projects/redmine/wiki/Contribute']"
  //   );

  //   await contributeLink?.scrollIntoViewIfNeeded();
  //   await contributeLink?.click();

  //   const issuesLink = await page.$("a[href*='/redmine/issues?query_id=84']");
  //   await issuesLink?.scrollIntoViewIfNeeded();
  //   await issuesLink?.click();

  //   await page.locator('input[value = "33918"]').check();
  // });

  // //dorabotat'
  // test("release note should contain a comment from Alessandro Zucchi", async ({
  //   page,
  // }) => {
  //   await page.locator(".news").click();

  //   await page.locator("a[href='/news/138']").click();

  //   const commentAuthor = page.getByRole("link", {
  //     name: "Alessandro Zucchi",
  //   });
  //   await expect(commentAuthor).toContainText("Alessandro Zucchi");
  // });
});
