import {Locator, Page} from '@playwright/test';

/**
 * Expect Options: These types are used for assertions, Timeouts, etc in tests.
 * They are based on the parameters of Playwright's built-in expect methods.
 */
export type TimeoutOption = { timeout?: number };
export type SoftOption = { soft?: boolean };
export type MessageAsOptions = { message?: string };
export type ExpectOptions = TimeoutOption & SoftOption & MessageAsOptions;

/**
 * Locator Options: These types are used for locating elements on a page.
 * They are based on the parameters of Playwright's built-in locator methods.
 */
export type LocatorOptions = Parameters<Page['locator']>[1];
export type GetByTextOptions = Parameters<Locator['getByText']>[1];
export type GetByRoleTypes = Parameters<Locator['getByRole']>[0];
export type GetByRoleOptions = Parameters<Locator['getByRole']>[1];
export type GetByPlaceholderOptions = Parameters<Locator['getByPlaceholder']>[1];
