import { Player } from "../../../core/Player";
import { InitPlayerEvent } from "../../../core/Event/events/player";
import { Event } from "../../../core/Event";

class CustomPlayer {
    constructor(public readonly player: Player) {}

    public hello() {
        msg(`Hello ${this.player.name} from custom mod`);
    }
}

declare module "../../../core/Player/Player" {
    interface Player {
        customMod: CustomPlayer;
    }
}

export const registerPlayer = (): void => {
    Event.on(InitPlayerEvent, (player: Player) => {
        player.customMod = new CustomPlayer(player);
    });
};
