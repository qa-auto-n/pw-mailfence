import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';
import {getLocatorByRole, getLocatorByText} from '../../../core/utils/locator-utils';
import {step} from '../../../core/utils/decorators/step-decorator';
import {HeaderElement} from './header-bar-element';

export class SideBarElement extends BaseElement {

    static inboxSection = () => new SideBarElement(getLocatorByRole('treeitem').filter({hasText: 'Inbox'}));
    static trashSection = () => new SideBarElement(getLocatorByRole('treeitem').filter({hasText: 'Trash'}));
    static myDocumentsSection = () => new SideBarElement(getLocatorByText('My documents'), 'My Documents Section');

    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step('Click on \'Inbox\' section')
    static async navigateToInboxSection() {
        await HeaderElement.navigateToMessagesSection();
        await this.inboxSection().click();
    }

    @step('Click on \'Trash\' section')
    static async clickTrashSection() {
        await this.trashSection().click();
    }

    @step('Navigate to My Documents section')
    static async navigateToMyDocumentsSection() {
        await HeaderElement.navigateToDocumentsSection();
        await this.myDocumentsSection().click();
    }
}