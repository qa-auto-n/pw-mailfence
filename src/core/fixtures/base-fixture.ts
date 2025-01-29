import * as fs from 'fs';
import * as path from 'path';
import { BrowserContext, TestInfo, test as baseTest} from '@playwright/test';
import {setPage} from '../utils/page-utils';
import {HomePage} from "../../app/pages/home-page";
import {LoginPage} from "../../app/pages/login-page";

const authFolder = path.resolve(process.env.AUTH_STATE_PATH || '.auth');

if (!fs.existsSync(authFolder)) {
    fs.mkdirSync(authFolder, { recursive: true });
    console.log(`Created .auth folder at ${authFolder}`);
}

export class BaseFixture {
    constructor() {
    }

    async setupAuthenticatedContext(context: BrowserContext, testInfo: TestInfo) {
        const authFile = path.join(authFolder, `auth-state-${testInfo.workerIndex}.json`);

        if (fs.existsSync(authFile)) {
            fs.rmSync(authFile, { force: true });
        }

        const newContext = await context.browser().newContext();
        const page = await newContext.newPage();
        setPage(page);

        await HomePage.openPage();
        await HomePage.clickLogInButton();
        await LoginPage.fillInLogInFormAndSubmit(process.env.USERNAME, process.env.PASSWORD);

        await newContext.storageState({ path: authFile });
    }
}

type BaseFixtureExtend = { base: BaseFixture };

export const test = baseTest.extend<BaseFixtureExtend>({
    base: [
        async ({ context }, use, testInfo) => {
            const base = new BaseFixture();
            await base.setupAuthenticatedContext(context, testInfo);
            await use(base);
        },
        { auto: true },
    ],
});

export function step(stepName?: string) {
    return function decorator( target: Function, context: ClassMethodDecoratorContext) {
        return function replaceMethod(...args: any){
            const name = stepName || `${this.constructor.name}.${context.name as string}`
            return test.step(name, async ()=>  {
                return await target.call(this, ...args);
            })
        }
    }
}

export { expect } from '@playwright/test';