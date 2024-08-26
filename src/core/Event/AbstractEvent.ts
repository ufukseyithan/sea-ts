export type EventCallback<T extends any[] = any[]> = (
    ...args: T
) => number | void;

export abstract class AbstractEvent<T extends any[] = any[]> {
    private readonly callback!: EventCallback<T>;

    protected constructor(public readonly name: string) {}
}
