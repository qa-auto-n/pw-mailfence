import {BaseElement} from '../base-element';
import {Locator} from '@playwright/test';

export class SideBarElement extends BaseElement {

    constructor(locator: Locator, name?: string) {
        super(locator, name);
    }
}