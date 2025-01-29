import {BaseElement} from "../base-element";
import {Locator} from "@playwright/test";
import {getLocator} from "../../../core/utils/locator-utils";
import {step} from "../../../core/fixtures/base-fixture";

export class SpinnerElement extends BaseElement {
    constructor(selector?: string | Locator, name?: string) {
        super(selector ? getLocator(selector) : getLocator('#spinner'), name);
    }

    @step("Wait till spinner be visible and than disappears")
    async waitForSpinner() {
        await this.locator.first().waitFor({state: 'visible'});
        await this.locator.first().waitFor({state: 'hidden'});
    }
}