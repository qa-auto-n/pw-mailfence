import {BaseElement} from '../components/base-element';
import {getLocatorByTitle} from '../../core/utils/locator-utils';
import {step} from '../../core/utils/decorators/step-decorator';
import {ComponentsPage} from './components-page';

export class DocumentsPage {

    @step('Drag document to Trash')
    static async dragDocumentToTrash(fileName: string) {
        const sourceElement = await this.getDocumentByTitle(fileName);
        const trashElement = ComponentsPage.sideBar.getTrashSection();
        await sourceElement.dragAndDrop(await trashElement);
    }

    @step('Get document')
    static async getDocumentByTitle(fileName: string): Promise<BaseElement> {
        return new BaseElement(getLocatorByTitle(fileName), fileName);
    }
}