import {MessagesPage} from "../../app/pages/messages-page";
import {DocumentsPage} from "../../app/pages/documents-page";
import {step} from "../fixtures/base-fixture";

export class EnvironmentHelper {
    @step('Clear messages page')
    public static async clearMessages() {
        await MessagesPage.navigateToInboxSection();
        await MessagesPage.moveAllMessagesToTrash();
        await MessagesPage.clickTrashSection();
        await MessagesPage.deleteAllMessagesFromTrashSection();
    }

    @step("Clear documents page")
    public static async clearDocuments(){
        await DocumentsPage.navigateToMyDocumentsSection();
        await DocumentsPage.moveAllDocumentsToTrash();
        await DocumentsPage.clickTrashSection();
        await DocumentsPage.deleteAllDocumentsFromTrashSection();
    }
}