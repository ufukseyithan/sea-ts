import { AbstractHook } from "../AbstractHook";
import { Player } from "../../Player/Player";
import { AbstractEvent } from "../AbstractEvent";

export class CS2D_ConnectHook extends AbstractHook<[PlayerID]> {
    public name = "connect";
}
export class ConnectHook extends AbstractEvent<[Player]> {
    public name = "app:connect";
}

export class CS2D_DisconnectHook extends AbstractHook<[PlayerID]> {
    public name = "disconnect";
}
export class DisconnectHook extends AbstractEvent<[Player]> {
    public name = "app:disconnect";
}

export class CS2D_SayHook extends AbstractHook<[PlayerID, string]> {
    public name = "say";
}
export class SayHook extends AbstractEvent<[Player, string]> {
    public name = "app:say";
}
