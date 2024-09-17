/** @noSelfInFile */

import { eventManager } from "./EventManager";
import { AbstractEvent, EventCallback } from "./AbstractEvent";

export class Event {
    public static on<E extends AbstractEvent<T>, T extends any[]>(
        EventType: new () => E,
        callback: EventCallback<T>,
    ) {
        eventManager.on(EventType, callback);
    }

    public static trigger<E extends AbstractEvent<T>, T extends any[]>(
        EventType: new () => E,
        ...args: T
    ) {
        eventManager.trigger(EventType, ...args);
    }
}
