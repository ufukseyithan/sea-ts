/** @noSelfInFile */

import { AbstractEvent, EventCallback } from "./AbstractEvent";
import { AbstractHook } from "./Hook/AbstractHook";

export class EventManager {
    private events: Map<string, EventCallback> = new Map();
    private hooks: Map<string, EventCallback> = new Map();

    public on<E extends AbstractEvent<T>, T extends any[]>(
        EventClass: new () => E,
        callback: EventCallback<T>,
    ) {
        if (EventClass instanceof AbstractHook) {
        }

        const event = new EventClass();
        this.events.set(event.name, callback);
    }
}

export const eventManager = new EventManager();
