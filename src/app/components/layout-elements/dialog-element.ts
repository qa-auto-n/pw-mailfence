import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';
import {getLocator, getLocatorByText} from '../../../core/utils/locator-utils';
import {OptionItem} from '../ui-elements/option-item';
import {ButtonElement} from '../ui-elements/button-element';
import {step} from '../../../core/utils/decorators/step-decorator';

export class DialogElement extends BaseElement {

    private static saveDialog = () => new DialogElement(getLocator('.GCSDBRWBKY.GCSDBRWBLY'));
    private static myDocumentsOption = () => new OptionItem(getLocatorByText('My documents'));
    private static saveButton = () => new ButtonElement(getLocator('#dialBtn_OK'));

    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step('Click \'Save\' button')
    async saveChoice() {
        await DialogElement.saveButton().click();
        await DialogElement.saveDialog().waitForElementToBeHidden();
    }

    @step('Choose \'My documents\' option')
    async chooseToSaveInMyDocuments() {
        await DialogElement.myDocumentsOption().click();
    }

    static getSaveDialog(): DialogElement {
        return DialogElement.saveDialog();
    }
}