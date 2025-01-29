import {getLocator} from "../../../core/utils/locator-utils";
import {step} from "../../../core/fixtures/base-fixture";
import {Locator} from "@playwright/test";
import {BaseElement} from "../base-element";

export class HeaderElement extends BaseElement {
    static messagesIcon = () => new HeaderElement(getLocator('.icon24-Message'));
    static documentsIcon = () => new HeaderElement(getLocator('.icon24-Documents'));

    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step("Navigate to Messages page")
    static async navigateToMessagesSection() {
        await this.messagesIcon().click();
    }

    @step("Navigate to Documents page")
    static async navigateToDocumentsSection() {
        await this.documentsIcon().click();
    }
}