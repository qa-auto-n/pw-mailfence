import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';
import {step} from "../../../core/fixtures/base-fixture";

export class InputElement extends BaseElement {
    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step("Fill input with text")
    async fill(value: string, force: boolean = false) {
        await this.locator.fill(value, {force});
    }
}