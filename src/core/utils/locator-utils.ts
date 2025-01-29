import {Locator} from '@playwright/test';
import {getPage} from './page-utils';
import {
    GetByPlaceholderOptions,
    GetByRoleOptions,
    GetByRoleTypes,
    GetByTextOptions,
    LocatorOptions
} from './optional-parameter-types';

/**
 * Returns a Locator object based on the input provided.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {LocatorOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
export function getLocator(input: string | Locator, options?: LocatorOptions): Locator {
    return typeof input === 'string' ? getPage().locator(input, options) : input;
}

/**
 * Returns a Locator object with a specific text.
 * @param {string | RegExp} text - The text to create the Locator from.
 * @param {GetByTextOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
export function getLocatorByText(text: string | RegExp, options?: GetByTextOptions): Locator {
    return getPage().getByText(text, options);
}

/**
 * Returns a Locator object with a specific title.
 * @param {string | RegExp} title - The title to create the Locator from.
 * @param {GetByTextOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
export function getLocatorByTitle(title: string | RegExp, options?: GetByTextOptions): Locator {
    return getPage().getByTitle(title, options);
}

/**
 * Returns a Locator object with a specific role.
 * @param {GetByRoleTypes} role - The role to create the Locator from.
 * @param {GetByRoleOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
export function getLocatorByRole(role: GetByRoleTypes, options?: GetByRoleOptions): Locator {
    return getPage().getByRole(role, options);
}

/**
 * Returns a Locator object with a specific placeholder.
 * @param {string | RegExp} text - The placeholder text to create the Locator from.
 * @param {GetByPlaceholderOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
export function getLocatorByPlaceholder(text: string | RegExp, options?: GetByPlaceholderOptions): Locator {
    return getPage().getByPlaceholder(text, options);
}