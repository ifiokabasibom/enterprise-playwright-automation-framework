//Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test("test", async({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("ttbywizzz@gmail.com");
    await loginPage.fillPassword("Remita1@");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})