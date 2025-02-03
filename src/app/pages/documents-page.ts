import {BaseElement} from '../components/base-element';
import {getLocatorByTitle} from '../../core/utils/locator-utils';
import {SideBarElement} from '../components/layout-elements/side-bar-element';
import {step} from '../../core/utils/decorators/step-decorator';

export class DocumentsPage {

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
}