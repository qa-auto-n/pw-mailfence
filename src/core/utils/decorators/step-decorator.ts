import {test} from '../../fixtures/base-fixture';

/**
 * A custom decorator to wrap methods with Playwright's `test.step` functionality.
 * This allows for better test reporting by grouping actions into logical steps.
 *
 * @param stepName - Optional. A custom name for the step. If not provided, the step name
 *                   will be generated as `ClassName.methodName`.
 * @returns A decorator function that wraps the target method with `test.step`.
 */
export function step(stepName?: string) {
    return function decorator(target: Function, context: ClassMethodDecoratorContext) {
        return function replaceMethod(...args: any) {
            const name = stepName || `${this.constructor.name}.${context.name as string}`;
            return test.step(name, async () => {
                return await target.call(this, ...args);
            });
        };
    };
}