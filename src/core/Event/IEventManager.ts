/** @noSelfInFile **/

export interface BaseEvent<Arg extends any[]> {
	name: string;
	callback: (...args: Arg) => {}
}

export interface HookEvent<Arg extends any[]> extends BaseEvent<Arg> {
	name: HookValue;
	callback: (...args: Arg) => {}
}

export interface ConnectEvent extends HookEvent<[PlayerID]> {
	name: 'connect';
	callback: (playerId: PlayerID) => {}
}

export interface JoinEvent extends HookEvent<[PlayerID]> {
	name: 'join';
	callback: (playerId: PlayerID) => {}
}

export interface AttackEvent extends HookEvent<[PlayerID]> {
	name: 'attack';
	callback: (playerId: PlayerID) => {}
}

export interface IEventManager {
	on<E extends BaseEvent<any[]>>(name: E["name"], callback: E['callback']): void;

	trigger<E extends BaseEvent<any[]>>(name: E["name"], ...args: Parameters<E['callback']>): void;
}