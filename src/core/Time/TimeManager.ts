import { IManager } from "../Manager";
import { eventManager } from "../Event/EventManager";
import { CS2D, AlwaysEvent, MinuteEvent, Ms100Event, SecondEvent } from "../Event/events/time";

export class TimeManager implements IManager {
    public register(): void {
        eventManager.on(CS2D.AlwaysHook, (): any => {
            eventManager.trigger(AlwaysEvent);
        });

        eventManager.on(CS2D.MinuteHook, (): any => {
            eventManager.trigger(MinuteEvent);
        });

        eventManager.on(CS2D.SecondHook, (): any => {
            eventManager.trigger(SecondEvent);
        });

        eventManager.on(CS2D.Ms100Hook, (): any => {
            eventManager.trigger(Ms100Event);
        });
    }
}

export const timeManager = new TimeManager();
