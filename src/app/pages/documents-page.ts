import {BaseElement} from '../components/base-element';
import {getLocator, getLocatorByRole, getLocatorByTitle} from '../../core/utils/locator-utils';
import {ButtonElement} from '../components/ui-elements/button-element';
import {SpinnerElement} from '../components/shared/spinner-element';
import {CheckboxElement} from '../components/ui-elements/checkbox-element';
import {TabActionBarElement} from '../components/layout-elements/tab-action-bar-element';
import {SideBarElement} from '../components/layout-elements/side-bar-element';
import {TableElement} from '../components/shared/table-element';
import {step} from '../../core/utils/decorators/step-decorator';

export class DocumentsPage {
    static selectAllButton = () => new TabActionBarElement(getLocatorByTitle('Select all').locator('div'));
    static toTrashOption = () => new TabActionBarElement(getLocatorByTitle('To Trash'));
    static checkIcon = () => new CheckboxElement(getLocator('.checkIcon'));
    static spinnerElement = () => new SpinnerElement(getLocator('.loadingIcon'));
    static deleteButton = () => new ButtonElement(getLocatorByTitle('Delete', {exact: true}));
    static okButton = () => new ButtonElement(getLocator('#dialBtn_YES > .btnCtn > div'));
    static emptyTrashFolderText = () => new TableElement(getLocatorByRole('table').filter({hasText: 'no documents'}).first());

    @step('Drag document to Trash')
    static async dragDocumentToTrash(fileName: string) {
        const sourceElement = await this.getDocumentByTitle(fileName);
        const trashElement = SideBarElement.trashSection();
        await sourceElement.dragAndDrop(trashElement);
    }

    @step('Get document')
    static async getDocumentByTitle(fileName: string): Promise<BaseElement> {
        return new BaseElement(getLocatorByTitle(fileName), fileName);
    }

    @step('Move all documents to trash section')
    static async moveAllDocumentsToTrash() {
        await this.selectAllButton().click();
        await this.toTrashOption().click();
    }

    @step('Delete all messages in Trash section')
    static async deleteAllDocumentsFromTrashSection() {
        if (await this.emptyTrashFolderText().isVisible()) return;
        await this.spinnerElement().waitForSpinnerToBeHidden();

        const checkboxCount = await this.checkIcon().locator.count();
        if (checkboxCount === 0) return;

        await this.selectAllButton().click();
        await this.deleteButton().click();
        await this.okButton().click();
    }
}