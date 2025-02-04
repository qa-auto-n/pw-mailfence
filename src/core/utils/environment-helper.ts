import {step} from './decorators/step-decorator';
import {ComponentsPage} from '../../app/pages/components-page';

export class EnvironmentHelper {
    @step('Clear messages page')
    public static async clearMessages() {
        await ComponentsPage.sideBar.navigateToInboxSection();
        await ComponentsPage.tabActionBar.moveAllItemsToTrash();
        await ComponentsPage.sideBar.clickTrashSection();
        await ComponentsPage.tabActionBar.deleteAllItemsFromTrashSection();
    }

    @step('Clear documents page')
    public static async clearDocuments(){
        await ComponentsPage.sideBar.navigateToMyDocumentsSection();
        await ComponentsPage.tabActionBar.moveAllItemsToTrash();
        await ComponentsPage.sideBar.clickTrashSection();
        await ComponentsPage.tabActionBar.deleteAllItemsFromTrashSection();
    }
}