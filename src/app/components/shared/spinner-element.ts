import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';
import {getLocator} from '../../../core/utils/locator-utils';
import {step} from '../../../core/utils/decorators/step-decorator';

export class SpinnerElement extends BaseElement {
    constructor(selector?: string | Locator, name?: string) {
        super(selector ? getLocator(selector) : getLocator('#spinner'), name);
    }

    @step('Wait till spinner is hidden')
    async waitForSpinnerToBeHidden() {
        if (await this.locator.first().isVisible()) {
            await this.locator.first().waitFor({state: 'hidden'});
        }
    }
}