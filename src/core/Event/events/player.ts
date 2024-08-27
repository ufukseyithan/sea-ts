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

    SayHook: class extends AbstractHook<[PlayerID, string]> {
        public name = "say";
    },

    MoveHook: class extends AbstractHook<[PlayerID, number, number]> {
        public name = "move";
    },
};

export class ConnectHook extends AbstractEvent<[Player]> {
    public name = "app:connect";
}

export class DisconnectHook extends AbstractEvent<[Player]> {
    public name = "app:disconnect";
}

export class SayHook extends AbstractEvent<[Player, string]> {
    public name = "app:say";
}

export class MoveHook extends AbstractEvent<[Player, number, number]> {
    public name = "app:move";
}
