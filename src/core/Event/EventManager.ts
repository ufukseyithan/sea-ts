/** @noSelfInFile */

import { AbstractEvent, EventCallback } from "./AbstractEvent";
import { AbstractHook } from "./AbstractHook";
import { IManager } from "../Manager";

// eslint-disable-next-line
declare var __HOOK__: Record<string, (callback: EventCallback) => void>;
__HOOK__ = {};

export class EventManager implements IManager {
    private events: Map<string, EventCallback[]> = new Map();
    private hooks: Map<string, boolean> = new Map();

    public on<E extends AbstractEvent<T>, T extends any[]>(
        Event: new () => E,
        callback: EventCallback<T>,
    ) {
        const event = new Event();
        let callbacks = this.events.get(event.name);

        if (!callbacks) {
            callbacks = [];
            this.events.set(event.name, callbacks);
        }

        callbacks.push(callback);

        if (
            Event.prototype instanceof AbstractHook &&
            !this.hooks.get(event.name)
        ) {
            this.registerGlobalHook(Event);
            this.hooks.set(event.name, true);
        } else {
            const color = String.fromCharCode(169) + "116110255";
            print(
                `${color}Event listener registered for handling: ${event.name}`,
            );
        }
    }

    public trigger<E extends AbstractEvent<T>, T extends any[]>(
        Event: new () => E,
        ...args: T
    ): void {
        this.events
            .get(new Event().name)
            ?.forEach((callback) => callback(...args));
    }

    public register(): void {}

    private registerGlobalHook(Event: new () => AbstractHook): void {
        const event = new Event();

        __HOOK__[event.name] = (...args: any[]) => {
            this.trigger(Event, ...args);
        };

        parse("debuglua 0");
        addhook(event.name as HookValue, `__HOOK__.${event.name}`);
        parse("debuglua 1");
    }
}

export const eventManager = new EventManager();
