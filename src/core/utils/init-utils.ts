/**
 * A utility function to initialize or return an existing instance.
 * If the instance is null, it will create and return a new instance using the provided `create` function.
 *
 * @param instance The instance to check.
 * @param create A function to create a new instance if `instance` is null.
 * @returns The existing instance or a newly created instance.
 */
export function getOrCreate<T>(instance: T | null, create: () => T): T {
    if (instance === null) {
        instance = create();
    }
    return instance;
}
