import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class HomePage{
    private readonly serviceTitleLocator = "Service";

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