import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';
import {getLocator, getLocatorByRole} from '../../../core/utils/locator-utils';
import {step} from '../../../core/utils/decorators/step-decorator';
import {ComponentsPage} from '../../pages/components-page';

export class SideBarElement extends BaseElement {

    private inboxSection = () => new SideBarElement(getLocatorByRole('treeitem').filter({hasText: 'Inbox'}));
    private trashSection = () => new SideBarElement(getLocatorByRole('treeitem').filter({hasText: 'Trash'}));
    private myDocumentsSection = () => new SideBarElement(getLocatorByRole('treeitem').filter({hasText: 'My documents'}));

    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step('Click on \'Inbox\' section')
    async navigateToInboxSection() {
        await ComponentsPage.header.navigateToMessagesSection();
        await this.inboxSection().click();
    }

    @step('Click on \'Trash\' section')
    async clickTrashSection() {
        await this.trashSection().click();
    }

    @step('Navigate to My Documents section')
    async navigateToMyDocumentsSection() {
        await ComponentsPage.header.navigateToDocumentsSection();
        await this.myDocumentsSection().click();
    }

    @step('Get Trash Section element')
    async getTrashSection() {
        return this.trashSection();
    }

    static getSideBar(): SideBarElement {
        return new SideBarElement(getLocator('.appLeftPanel'));
    }
}