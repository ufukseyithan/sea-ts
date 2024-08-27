import { Player } from "../../../core/Player/Player";
import { eventManager } from "../../../core/Event/EventManager";
import { InitPlayerEvent } from "../../../core/Event/events/player";

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
    eventManager.on(InitPlayerEvent, (player: Player) => {
        player.customMod = new CustomPlayer(player);
    });
};
