export type EventCallback<T extends any[] = any[]> = (
    ...args: T
) => number | void;

export abstract class AbstractEvent<T extends any[] = any[]> {
    public abstract readonly name: string;
    private readonly callback!: EventCallback<T>;
}
