import { eventManager } from "../../core/Event/EventManager";
import { ConnectEvent, SayEvent } from "../../core/Event/events/player";
import { Player } from "../../core/Player/Player";
import { debug } from "../../utils";

export const registerDemoPlugin = (): void => {
    eventManager.on(ConnectEvent, (player: Player): any => {
        debug(`Player ${player.name} #${player.usgn} has connected`, true);
        player.customMod.hello();
    });

    eventManager.on(SayEvent, (player: Player, message: string): any => {
        debug(`____ ${player.name} #${player.usgn} says: ${message}`, true);
    });
};
