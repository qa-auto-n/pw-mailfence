import {Locator, Page} from '@playwright/test';

export type TimeoutOption = { timeout?: number };
export type SoftOption = { soft?: boolean };
export type MessageAsOptions = { message?: string };
export type ExpectOptions = TimeoutOption & SoftOption & MessageAsOptions;

export type LocatorOptions = Parameters<Page['locator']>[1];
export type GetByTextOptions = Parameters<Locator['getByText']>[1];
export type GetByRoleTypes = Parameters<Locator['getByRole']>[0];
export type GetByRoleOptions = Parameters<Locator['getByRole']>[1];
export type GetByPlaceholderOptions = Parameters<Locator['getByPlaceholder']>[1];
