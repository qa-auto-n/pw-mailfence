import {getLocator} from '../../../core/utils/locator-utils';
import {Locator} from '@playwright/test';
import {BaseElement} from '../base-element';
import {step} from '../../../core/utils/decorators/step-decorator';

export class HeaderElement extends BaseElement {

    private static messagesIcon = () => new HeaderElement(getLocator('.icon24-Message'));
    private static documentsIcon = () => new HeaderElement(getLocator('.icon24-Documents'));

    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step('Navigate to Messages page')
    async navigateToMessagesSection() {
        await HeaderElement.messagesIcon().click();
    }

    @step('Navigate to Documents page')
    async navigateToDocumentsSection() {
        await HeaderElement.documentsIcon().click();
    }

    static getHeader(): HeaderElement {
        return new HeaderElement(getLocator('#co-header'));
    }
}