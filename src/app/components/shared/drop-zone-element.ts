import {BaseElement} from '../base-element';
import {JSHandle, Locator} from '@playwright/test';
import {getPage} from '../../../core/utils/page-utils';
import {step} from '../../../core/utils/decorators/step-decorator';

export class DropZoneElement extends BaseElement {
    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }

    @step('Upload file to the drop zone')
    async uploadFile(dataTransfer: JSHandle<DataTransfer>) {
        await getPage().dispatchEvent('body', 'dragenter', {dataTransfer});
        await getPage().dispatchEvent('body', 'dragover', {dataTransfer});
        await getPage().dispatchEvent('body', 'drop', {dataTransfer});

        await this.locator.dispatchEvent('dragenter', {dataTransfer});
        await this.locator.dispatchEvent('dragover', {dataTransfer});
        await this.locator.dispatchEvent('drop', {dataTransfer});
    }
}