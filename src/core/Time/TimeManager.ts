import { IManager } from "../Manager";
import { Event } from "../Event";
import { CS2D, AlwaysEvent, MinuteEvent, Ms100Event, SecondEvent } from "../Event/events/time";

class TimeManager implements IManager {
    public register(): void {
        Event.on(CS2D.AlwaysHook, (): any => {
            Event.trigger(AlwaysEvent);
        });

        Event.on(CS2D.MinuteHook, (): any => {
            Event.trigger(MinuteEvent);
        });

        Event.on(CS2D.SecondHook, (): any => {
            Event.trigger(SecondEvent);
        });

        Event.on(CS2D.Ms100Hook, (): any => {
            Event.trigger(Ms100Event);
        });
    }
}

export const timeManager = new TimeManager();
