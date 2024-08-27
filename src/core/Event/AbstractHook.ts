import { AbstractEvent } from "./AbstractEvent";

export abstract class AbstractHook<T extends any[] = any[]> extends AbstractEvent<T> {}
