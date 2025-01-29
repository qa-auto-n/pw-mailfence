import {step} from './decorators/step-decorator';
import {TabActionBarElement} from '../../app/components/layout-elements/tab-action-bar-element';
import {SideBarElement} from '../../app/components/layout-elements/side-bar-element';

export class EnvironmentHelper {
    @step('Clear messages page')
    public static async clearMessages() {
        await SideBarElement.navigateToInboxSection();
        await TabActionBarElement.moveAllItemsToTrash();
        await SideBarElement.clickTrashSection();
        await TabActionBarElement.deleteAllItemsFromTrashSection();
    }

    @step('Clear documents page')
    public static async clearDocuments(){
        await SideBarElement.navigateToMyDocumentsSection();
        await TabActionBarElement.moveAllItemsToTrash();
        await SideBarElement.clickTrashSection();
        await TabActionBarElement.deleteAllItemsFromTrashSection();
    }
}