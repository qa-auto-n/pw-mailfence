import {Page} from '@playwright/test';

let page: Page;

/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 * @throws {Error} If the page instance is not set.
 */
export function getPage(): Page {
    if (!page) {
        throw new Error('Error: Page instance is not set');
    }
    return page;
}

/**
 * Sets the current Page.
 * @param {Page} pageInstance - The Page instance to set as the current Page.
 */
export function setPage(pageInstance: Page): void {
    page = pageInstance;
}