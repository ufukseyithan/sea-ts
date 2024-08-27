import { eventManager } from "../../core/Event/EventManager";
import { ConnectEvent, SayEvent } from "../../core/Event/events/player";
import { Player } from "../../core/Player/Player";

export const registerDemoPlugin = (): void => {
    eventManager.on(ConnectEvent, (player: Player): any => {
        msg(`Player ${player.name} #${player.usgn} has connected`);
        player.customMod.hello();
    });

    eventManager.on(SayEvent, (player: Player, message: string): any => {
        msg(`____ ${player.name} #${player.usgn} says: ${message}`);
    });
};
