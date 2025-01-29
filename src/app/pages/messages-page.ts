import {step} from '../../core/fixtures/base-fixture';
import {
    getLocator,
    getLocatorByRole,
    getLocatorByTitle
} from "../../core/utils/locator-utils";
import { InputElement } from "../components/ui-elements/input-element";
import { getPage } from "../../core/utils/page-utils";
import { ButtonElement } from "../components/ui-elements/button-element";
import { DropZoneElement } from "../components/shared/drop-zone-element";
import { LocatorAssertions } from "../../core/utils/assert-utils";
import { BaseElement } from "../components/base-element";
import {CheckboxElement} from "../components/ui-elements/checkbox-element";
import {SpinnerElement} from "../components/shared/spinner-element";
import {TabActionBarElement} from "../components/layout-elements/tab-action-bar-element";
import {SideBarElement} from "../components/layout-elements/side-bar-element";
import {SaveDialog} from "./save-dialog";
import {OptionItem} from "../components/ui-elements/option-item";
import {HeaderElement} from "../components/layout-elements/header-bar-element";
import {TableElement} from "../components/shared/table-element";

export class MessagesPage {
    static recipientField = () => new InputElement(getLocatorByRole('row', { name: 'To', exact: true }).getByRole('textbox'));
    static mailSubjectField = () => new InputElement(getLocator('#mailSubject'));
    static newMailButton = () => new ButtonElement(getLocatorByTitle('New'));
    static refreshButton = () => new ButtonElement(getLocatorByTitle('Refresh'));
    static sendEmailButton = () => new ButtonElement(getLocator('div#mailSend'));
    static dropZone = () => new DropZoneElement(getLocator('div').filter({ hasText: 'Drop file(s) from your' }).first());
    static attachmentElement = () => new BaseElement(getLocator("[_type='att']"));
    static saveInDocumentsOption = () => new OptionItem(getLocatorByRole('link', { name: 'Save in Documents' }));
    static inboxSection = () => new SideBarElement(getLocatorByRole('treeitem').filter({ hasText: 'Inbox' }));
    static trashSection = () => new SideBarElement(getLocatorByRole('treeitem').filter({ hasText: 'Trash' }));
    static toTrashOption = () => new TabActionBarElement(getLocatorByTitle('To Trash'));
    static selectAllButton = () => new TabActionBarElement(getLocatorByTitle('Select all').locator('div'));
    static checkIcon = () => new CheckboxElement(getLocator('.checkIcon'));
    static spinnerElement = () => new SpinnerElement(getLocator('.loadingIcon'));
    static deleteButton = () => new ButtonElement(getLocatorByTitle('Delete', { exact: true }));
    static okButton = () => new ButtonElement(getLocator('#dialBtn_YES > .btnCtn > div'));
    static emptyTrashFolderText = () => new TableElement(getLocatorByRole('table').filter({ hasText: 'No messages'}).first())

    @step("Create and send email")
    static async sendEmail(recipient: string, mailSubject: string, fileName?: string, fileContent?: string) {
            await this.newMailButton().click();
            await this.fillEmailDetails(recipient, mailSubject);

            if (fileContent != null) {
                const dataTransfer = await this.createFileDataTransfer(fileName, fileContent);
                await this.uploadFileToDropZone(dataTransfer);
            }

            await this.sendMail();
    }

    @step("Save attachment to documents")
    static async saveAttachmentToDocuments(mailSubject: string, fileName: string) {
            await this.refreshMailList(mailSubject);
            await this.openMail(mailSubject);
            await this.saveAttachment(fileName);
            await this.confirmSave();
    }

    @step("Click on 'Inbox' section")
    static async navigateToInboxSection() {
            await HeaderElement.navigateToMessagesSection();
            await this.inboxSection().click();
    }

    @step("Click on 'Trash' section")
    static async clickTrashSection() {
            await this.trashSection().click();
    }

    @step("Move all messages to trash section")
    static async moveAllMessagesToTrash() {
            await this.selectAllButton().click();
            await this.toTrashOption().click();
    }

    @step("Delete all messages in Trash section")
    static async deleteAllMessagesFromTrashSection() {
            if (await this.emptyTrashFolderText().isVisible()) return;

            await this.spinnerElement().waitForSpinner();

            const checkboxCount = await this.checkIcon().locator.count();
            if (checkboxCount === 0) return;

            await this.selectAllButton().click();
            await this.deleteButton().click();
            await this.okButton().click();
    }

    @step("Fill email details")
    private static async fillEmailDetails(recipient: string, mailSubject: string) {
            await MessagesPage.recipientField().fill(recipient);
            await MessagesPage.mailSubjectField().fill(mailSubject);
    }

    @step("Create file data transfer")
    private static async createFileDataTransfer(fileName: string, fileContent: string) {
            return await getPage().evaluateHandle(
                ({ content, name }) => {
                    const dt = new DataTransfer();
                    const file = new File([content], name, { type: 'text/plain' });
                    dt.items.add(file);
                    return dt;
                },
                { content: fileContent, name: fileName }
            );
    }

    @step("Upload file to drop zone")
    private static async uploadFileToDropZone(dataTransfer: any) {
            await MessagesPage.dropZone().uploadFile(dataTransfer);
            await LocatorAssertions.expectElementToBeVisible(MessagesPage.attachmentElement());
    }

    @step("Send email")
    private static async sendMail() {
            await MessagesPage.sendEmailButton().click();
    }

    @step("Refresh mail list and check visibility")
    private static async refreshMailList(mailSubject: string) {
            const maxAttempts = 5;
            const delayBetweenAttempts = 5000;

            for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                const mailElement = getPage().getByText(mailSubject);
                const isVisible = await mailElement.isVisible();

                if (isVisible) return;

                await MessagesPage.refreshButton().click();
                await getPage().waitForTimeout(delayBetweenAttempts);
            }

            throw new Error(`Mail with subject "${mailSubject}" was not found after ${maxAttempts} attempts.`);
    }

    @step("Open mail by clicking subject")
    private static async openMail(mailSubject: string) {
            await getPage().getByText(mailSubject).click();
    }

    @step("Save attachment in documents")
    private static async saveAttachment(fileName: string) {
            const fileElement = getPage().getByText(fileName);
            await fileElement.hover();

            const arrowElement = fileElement.locator('.icon-Arrow-down');
            await arrowElement.click();

            await this.saveInDocumentsOption().click();
            await SaveDialog.chooseToSaveInMyDocuments();
    }

    @step("Confirm save action")
    private static async confirmSave() {
            await getPage().waitForFunction(() => {
                const button = document.querySelector('#dialBtn_OK');
                return button && getComputedStyle(button).cursor === 'pointer';
            });
            await SaveDialog.saveChoice();
    }
}