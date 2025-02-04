import {test} from '../../core/fixtures/base-fixture';
import {faker} from '@faker-js/faker';
import {DocumentsPage} from '../../app/pages/documents-page';
import {MessagesPage} from '../../app/pages/messages-page';
import {LocatorAssertions} from '../../core/utils/assert-utils';
import {EnvironmentHelper} from '../../core/utils/environment-helper';
import {ComponentsPage} from '../../app/pages/components-page';

test.beforeEach(async () => {
    await test.step('Clear the environment', async () => {
        await EnvironmentHelper.clearMessages();
        await EnvironmentHelper.clearDocuments();
    });
});

test('Email attachment workflow with drag-and-drop to trash', async ({}) => {
    const domain = new URL(process.env.BASE_URL).hostname;
    const recipient = `${process.env.USERNAME}@${domain}`;
    const fileName = faker.lorem.word() + '.txt';
    const mailSubject = faker.lorem.words(3);
    const fileContent = faker.lorem.sentence();

    await ComponentsPage.sideBar.navigateToInboxSection();
    await MessagesPage.sendEmail(recipient, mailSubject, fileName, fileContent);
    await MessagesPage.saveAttachmentToDocuments(mailSubject, fileName);

    await ComponentsPage.sideBar.navigateToMyDocumentsSection();
    await DocumentsPage.dragDocumentToTrash(fileName);
    await ComponentsPage.sideBar.clickTrashSection();
    await LocatorAssertions.expectElementToBeVisible(await DocumentsPage.getDocumentByTitle(fileName));
});