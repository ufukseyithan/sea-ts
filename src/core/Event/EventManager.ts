/** @noSelfInFile **/
import { BaseEvent, EventArgs, IEventManager } from "./IEventManager";

// import {
//   EventArg,
//   EventCallback,
//   EventValue,
//   IEventManager,
// } from "./IEventManager";
//
// type Events = Map<string, EventCallback[]>;
//
// // eslint-disable-next-line
// declare var __HOOK__: Record<string, (callback: EventCallback) => void>;
// __HOOK__ = {};
//
// class EventManager implements IEventManager {
//   private events: Events = new Map();
//   private hooks: Map<string, boolean> = new Map();
//
//   public on(eventName: EventValue, callback: EventCallback): void {
//     let callbacks = this.events.get(eventName);
//
//     if (!callbacks) {
//       callbacks = [];
//       this.events.set(eventName, callbacks);
//
//       if (!this.hooks.get(eventName)) {
//         this.registerGlobalHook(eventName);
//         this.hooks.set(eventName, true);
//       }
//     }
//
//     callbacks.push(callback);
//   }
//
//   public trigger(eventName: EventValue, ...args: EventArg): void {
//     this.events.get(eventName)?.forEach((callback) => callback(...args));
//   }
//
//   private registerGlobalHook(eventName: HookValue): void {
//     __HOOK__[eventName] = (callback: EventCallback) => {
//       this.trigger(eventName, callback);
//     };
//
//     addhook(eventName, `__HOOK__.${eventName}`);
//   }
//
//   public register(): void {}
// }

type Handlers = Map<string, any[]>;

class EventManager implements IEventManager {
  private handlers: Handlers = new Map();

  on<E extends BaseEvent<string, any[]>>(
    eventName: E["eventName"],
    callback: (...args: EventArgs<E, E["eventName"]>) => void,
  ): void {
    let callbacks = this.handlers.get(eventName);

    if (!callbacks) {
      callbacks = [];
      this.handlers.set(eventName, callbacks);
    }

    callbacks.push(callback);
  }

  trigger<E extends BaseEvent<string, any[]>>(
    eventName: E["eventName"],
    ...args: EventArgs<E, E["eventName"]>
  ): void {
    this.handlers.get(eventName)?.forEach((handler) => handler(...args));
  }
}

export const eventManager = new EventManager();
