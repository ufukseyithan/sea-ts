import Foo from "./foo";

const foo = new Foo();

msg("Hello from main.ts");

declare enum DropHookReturn { 
    DropHookDoNotDrop = 1
}

declare var __HOOKS__: Record<string, Function>

__HOOKS__ = {}

__HOOKS__.drop = (playerId: PlayerID): DropHookReturn | void => {
    msg2(playerId, 'dropped by ' + player(playerId, 'name'))

    return DropHookReturn.DropHookDoNotDrop
}

addhook('drop', '__HOOKS__.drop')

