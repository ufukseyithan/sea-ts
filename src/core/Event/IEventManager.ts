export interface BaseEvent<TName extends string, TArgs extends any[]> {
  eventName: TName;
  eventArgs: TArgs;
}

export interface ConnectEvent extends BaseEvent<"connect", [string, number]> {}
export interface DisconnectEvent extends BaseEvent<"disconnect", [string]> {}

export type EventArgs<
  T extends BaseEvent<string, any[]>,
  E extends T["eventName"],
> = T extends { eventName: E } ? T["eventArgs"] : never;

export interface IEventManager {
  on<E extends BaseEvent<string, any[]>>(
    eventName: E["eventName"],
    callback: (...args: EventArgs<E, E["eventName"]>) => void,
  ): void;
  trigger<E extends BaseEvent<string, any[]>>(
    eventName: E["eventName"],
    ...args: EventArgs<E, E["eventName"]>
  ): void;
}
