import {getLocator, getLocatorByText} from '../../core/utils/locator-utils';
import {ButtonElement} from '../components/ui-elements/button-element';
import {OptionItem} from '../components/ui-elements/option-item';
import {DialogElement} from '../components/layout-elements/dialog-element';
import {step} from '../../core/utils/decorators/step-decorator';

export class SaveDialog {

    static saveDialog = () => new DialogElement(getLocator('.GCSDBRWBKY.GCSDBRWBLY'));
    static myDocumentsOption = () => new OptionItem(getLocatorByText('My documents'));
    static saveButton = () => new ButtonElement(getLocator('#dialBtn_OK'));

    @step('Click \'Save\' button')
    static async saveChoice() {
        await this.saveButton().click();
        await this.saveDialog().waitForElementToBeHidden();
    }

    @step('Choose \'My documents\' option')
    static async chooseToSaveInMyDocuments() {
        await this.myDocumentsOption().click();
    }
}
