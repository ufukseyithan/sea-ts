import { AbstractHook } from "../AbstractHook";
import { AbstractEvent } from "../AbstractEvent";
import { Player } from "../../Player/Player";

export const CS2D = {
    BreakHook: class extends AbstractHook<[number, number, PlayerID]> {
        public name = "break";
    },
};

export class BreakEvent extends AbstractEvent<[number, number, Player | null]> {
    public name = "app:break";
}

export class CallEndEvent extends AbstractEvent<[void]> {
    public name = "app:call-end";
}
