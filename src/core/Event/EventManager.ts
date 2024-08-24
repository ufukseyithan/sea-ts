/** @noSelfInFile **/
import { BaseEvent, ConnectEvent, HookEvent, IEventManager } from "./IEventManager";

// import {
//   EventArg,
//   EventCallback,
//   EventValue,
//   IEventManager,
// } from "./IEventManager";
//
// type Events = Map<string, EventCallback[]>;
//

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

// eslint-disable-next-line
declare var __HOOK__: Record<string, any>;
__HOOK__ = {};

class EventManager implements IEventManager {
	private handlers: Map<string, any[]> = new Map();
	private hooks: Map<HookValue, boolean> = new Map();

	on<E extends BaseEvent<any[]>>(name: E["name"], callback: E['callback']): void {
		let callbacks = this.handlers.get(name);

		if (!callbacks) {
			callbacks = [];
			this.handlers.set(name, callbacks);
			
			if (!this.hooks.get(name as HookValue)) {
	        	this.registerGlobalHook(name as HookValue);
	        	this.hooks.set(name as HookValue, true);
	       	}
		}

		callbacks.push(callback);
	}

	trigger<E extends BaseEvent<any[]>>(name: E["name"], ...args: Parameters<E['callback']>): void {
		this.handlers.get(name)?.forEach((handler) => handler(...args));
	}

	private registerGlobalHook<E extends HookEvent<any[]>>(name: E['name']): void {
		__HOOK__[name] = (...args: Parameters<E['callback']>) => {
			this.trigger<E>(name, ...args);
		};

		addhook(name, `__HOOK__.${name}`);
	}
}

export const eventManager = new EventManager();


