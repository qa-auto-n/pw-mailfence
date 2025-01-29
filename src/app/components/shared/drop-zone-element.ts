import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';
import {getPage} from "../../../core/utils/page-utils";
import {step} from "../../../core/fixtures/base-fixture";

export class DropZoneElement extends BaseElement {
    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step("Upload file to the drop zone")
    async uploadFile(dataTransfer: any) {
        await getPage().dispatchEvent('body', 'dragenter', { dataTransfer });
        await getPage().dispatchEvent('body', 'dragover', { dataTransfer });
        await getPage().dispatchEvent('body', 'drop', { dataTransfer });

        await this.locator.dispatchEvent('dragenter', { dataTransfer });
        await this.locator.dispatchEvent('dragover', { dataTransfer });
        await this.locator.dispatchEvent('drop', { dataTransfer });
    }
}