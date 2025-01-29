import {getLocator} from '../../../core/utils/locator-utils';
import {Locator} from '@playwright/test';
import {BaseElement} from '../base-element';
import {step} from '../../../core/utils/decorators/step-decorator';

export class HeaderElement extends BaseElement {
    static messagesIcon = () => new HeaderElement(getLocator('.icon24-Message'));
    static documentsIcon = () => new HeaderElement(getLocator('.icon24-Documents'));

    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step('Navigate to Messages page')
    static async navigateToMessagesSection() {
        await this.messagesIcon().click();
    }

    @step('Navigate to Documents page')
    static async navigateToDocumentsSection() {
        await this.documentsIcon().click();
    }
}