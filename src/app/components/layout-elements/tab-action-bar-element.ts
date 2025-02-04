import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';
import {step} from '../../../core/utils/decorators/step-decorator';
import {CheckboxElement} from '../ui-elements/checkbox-element';
import {getLocator, getLocatorByRole, getLocatorByTitle} from '../../../core/utils/locator-utils';
import {SpinnerElement} from '../shared/spinner-element';
import {ButtonElement} from '../ui-elements/button-element';
import {TableElement} from '../shared/table-element';

export class TabActionBarElement extends BaseElement {

    private checkIcon = () => new CheckboxElement(getLocator('.checkIcon'));
    private spinnerElement = () => new SpinnerElement(getLocator('.loadingIcon'));
    private deleteButton = () => new ButtonElement(getLocatorByTitle('Delete', {exact: true}));
    private okButton = () => new ButtonElement(getLocator('#dialBtn_YES'));
    private emptyMessagesTrashFolderText = () => new TableElement(getLocatorByRole('table').filter({hasText: 'No messages'}).first());
    private emptyDocumentsTrashFolderText = () => new TableElement(getLocatorByRole('table').filter({hasText: 'no documents'}).first());
    private selectAllButton = () => new TabActionBarElement(getLocatorByTitle('Select all').locator('div'));
    private toTrashOption = () => new TabActionBarElement(getLocator('.icon.icon16-Trash'));

    private constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step('Delete all items in Trash section')
    async deleteAllItemsFromTrashSection() {
        await this.spinnerElement().waitForSpinnerToBeHidden();

        if (await this.emptyDocumentsTrashFolderText().isVisible()) return;
        if (await this.emptyMessagesTrashFolderText().isVisible()) return;

        const checkboxCount = await this.checkIcon().locator.count();
        if (checkboxCount === 0) return;

        await this.selectAllButton().click();
        await this.deleteButton().click();

        await this.okButton().click();
    }

    @step('Move all items to trash section')
    async moveAllItemsToTrash() {
        await this.spinnerElement().waitForSpinnerToBeHidden();
        await this.selectAllButton().click();
        await this.toTrashOption().click();
    }

    static getTabActionBar() {
        return new TabActionBarElement(getLocator('.GCSDBRWBLV.toolbar'));
    }
}