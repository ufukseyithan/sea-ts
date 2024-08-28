import { AbstractHook } from "../AbstractHook";
import { Player } from "../../Player/Player";
import { AbstractEvent } from "../AbstractEvent";

export const CS2D = {
    ConnectHook: class extends AbstractHook<[PlayerID]> {
        public name = "connect";
    },

    DisconnectHook: class extends AbstractHook<[PlayerID]> {
        public name = "disconnect";
    },

    NameHook: class extends AbstractHook<[PlayerID, string, string, number]> {
        public name = "name";

        public static readonly Forced = {
            ByPlayer: 0,
            ByServer: 1,
            Delayed: 2,
        };
    },

    SayHook: class extends AbstractHook<[PlayerID, string]> {
        public name = "say";
    },

    MoveHook: class extends AbstractHook<[PlayerID, number, number]> {
        public name = "move";
    },
};

export class InitPlayerEvent extends AbstractEvent<[Player]> {
    public name = "app:init-player";
}

export class ConnectEvent extends AbstractEvent<[Player]> {
    public name = "app:connect";
}

export class DisconnectEvent extends AbstractEvent<[Player]> {
    public name = "app:disconnect";
}

export class NameEvent extends AbstractEvent<[Player, string, string]> {
    public name = "app:name";
}

export class SayEvent extends AbstractEvent<[Player, string]> {
    public name = "app:say";
}

export class MoveEvent extends AbstractEvent<[Player, number, number]> {
    public name = "app:move";
}
