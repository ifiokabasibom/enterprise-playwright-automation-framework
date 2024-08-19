import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import ContactPage from "./ContactPage";

export default class HomePage{
    private readonly serviceTitleLocator = "Service";
    contactsLinkLocator: string | RegExp | undefined;

    constructor(private page: Page){

    }

    async expectServiceTitleToBeVisible(){
        await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({ 
            timeout: 15000,
         }).catch((error) => {
            logger.error(`Error clciking login button: ${error}`);
            throw error; //rethrow the error if needed
         }).then(()=> logger.info("Service title is visible"));
    }

    async navigateToContactTab(){
        await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
        logger.info("Contacts tab is visible")
        await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
        logger.info("Contacts Tab is clicked")
        return new ContactPage(this.page);
    }
}

//Test CICD work