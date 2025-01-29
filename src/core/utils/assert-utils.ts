import {Expect, expect, Locator} from '@playwright/test';
import {ExpectOptions, MessageAsOptions, SoftOption, TimeoutOption} from './optional-parameter-types';
import {getLocator} from './locator-utils';
import {BaseElement} from "../../app/components/base-element";

/**
 * Returns an Expect object configured with the given soft option.
 * @param {SoftOption} options - The soft option to configure the Expect object with.
 * @returns {Expect} - The configured Expect object.
 */
function getExpectWithSoftOption(options?: SoftOption): Expect {
    return expect.configure({soft: options?.soft});
}

/**
 * Returns a Locator object and an Expect object configured with the given soft option.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {SoftOption} options - The soft option to configure the Expect object with.
 * @returns {Object} - An object containing the Locator and Expect objects.
 */
function getLocatorAndAssert(input: string | Locator | BaseElement, options?: SoftOption): {
    locator: Locator; assert: Expect;
} {
    const locator = input instanceof BaseElement ? input.locator : getLocator(input);
    const assert = getExpectWithSoftOption(options);
    return {locator, assert};
}

export class LocatorAssertions {
    /**
     * Asserts that the given element is present in the DOM and visible.
     * @param {string | Locator} input - Either a string (selector) or a Locator object.
     * @param {ExpectOptions} options - The options to pass to the expect function.
     */
    public static async expectElementToBeVisible(input: string | Locator | BaseElement, options?: ExpectOptions): Promise<void> {
        const {locator, assert} = getLocatorAndAssert(input, options);
        if (input instanceof BaseElement) {
            options = prepareOptionsErrorMessage(options, `Element ${input.name ? 'name=\'' + input.name : 'lctr=\'' + input.locator}' is not visible`);
        }
        await assert(locator, options).toBeVisible(options);
    }
}

function prepareOptionsErrorMessage(options: (TimeoutOption & SoftOption & MessageAsOptions) | undefined, errorMessage: string) {
    if (options == undefined) {
        options = {};
    }
    if (options.message === undefined) {
        options.message = errorMessage;
    } else {
        options.message = `${options.message} \n ${errorMessage} `;
    }
    return options;
}