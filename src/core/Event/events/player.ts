import { AbstractHook } from "../AbstractHook";
import { Player } from "../../Player/Player";
import { AbstractEvent } from "../AbstractEvent";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CS2D {
    export class ConnectHook extends AbstractHook<[PlayerID]> {
        public name = "connect";
    }

    export class DisconnectHook extends AbstractHook<[PlayerID]> {
        public name = "disconnect";
    }

    export class SayHook extends AbstractHook<[PlayerID, string]> {
        public name = "say";
    }
}

export class ConnectHook extends AbstractEvent<[Player]> {
    public name = "app:connect";
}

export class DisconnectHook extends AbstractEvent<[Player]> {
    public name = "app:disconnect";
}

export class SayHook extends AbstractEvent<[Player, string]> {
    public name = "app:say";
}
