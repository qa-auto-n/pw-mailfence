import { Locator } from '@playwright/test';
import {BaseElement} from '../base-element';

export class OptionItem extends BaseElement {
    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    async select() {
        await this.locator.click();
    }
}
