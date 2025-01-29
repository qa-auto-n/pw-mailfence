import {Locator} from '@playwright/test';
import {getPage} from "../../core/utils/page-utils";
import {step} from "../../core/fixtures/base-fixture";

export class BaseElement {
    locator: Locator;
    name: string;

    constructor(locator: Locator, name?: string) {
        this.locator = locator;
        if (name) {
            this.name = name;
        } else {
            this.name = `${this.constructor.name} with locator ${locator}`;
        }
    }

    @step("Click on the element")
    async click(options?: {
        button?: "left"|"right"|"middle";
        clickCount?: number;
        delay?: number;
        force?: boolean;
        modifiers?: Array<"Alt"|"Control"|"ControlOrMeta"|"Meta"|"Shift">;
        noWaitAfter?: boolean;
        position?: {
            x: number;
            y: number;
        };
        timeout?: number;
        trial?: boolean }) {
        await this.locator.click(options);
    }

    @step("Check if element is visible")
    async isVisible() {
        return this.locator.isVisible();
    }

    @step("Wait till element will be hidden")
    async waitForElementToBeHidden(timeout?: number) {
        if (timeout) { await this.locator.waitFor({state: 'hidden', timeout}); }
        if (!timeout) { await this.locator.waitFor({state: 'hidden'}); }
    }

    @step("Drag the element to the target element")
    async dragAndDrop(targetElement: BaseElement) {
        const page = getPage();

        await this.locator.waitFor({ state: 'visible' });
        await targetElement.locator.waitFor({ state: 'visible' });

        const sourceBox = await this.locator.boundingBox();
        const targetBox = await targetElement.locator.boundingBox();

        const sourceX = sourceBox.x + sourceBox.width / 2;
        const sourceY = sourceBox.y + sourceBox.height / 2;
        const targetX = targetBox.x + targetBox.width / 2;
        const targetY = targetBox.y + targetBox.height / 2;

        await page.mouse.move(sourceX, sourceY);
        await page.waitForTimeout(500);
        await page.mouse.down({ button: 'left' });
        await page.mouse.move(targetX, targetY, { steps: 10 });
        await page.mouse.up({ button: 'left' });
        await targetElement.locator.waitFor({ state: 'attached' });
    }
}
