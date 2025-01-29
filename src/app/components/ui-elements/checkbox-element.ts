import { BaseElement } from '../base-element';
import { Locator } from '@playwright/test';
import {step} from "../../../core/fixtures/base-fixture";

export class CheckboxElement extends BaseElement {
    private readonly locators: Locator[];

    constructor(locatorOrLocators: Locator | Locator[], name?: string) {
        const locators = Array.isArray(locatorOrLocators) ? locatorOrLocators : [locatorOrLocators];
        super(locators[0], name);
        this.locators = locators;
    }

    @step("Get count of the checkboxes")
    async count(): Promise<number> {
        return this.locators.length;
    }
}