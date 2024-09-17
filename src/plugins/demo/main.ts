import { eventManager } from "../../core/Event/EventManager";
import { ConnectEvent, SayEvent } from "../../core/Event/events/player";
import { Player } from "../../core/Player/Player";
import { debug } from "../../utils";
import { Ms100Event } from "../../core/Event/events/time";
import { playerManager } from "../../core/Player/PlayerManager";

export const registerDemoPlugin = (): void => {
    eventManager.on(ConnectEvent, (player: Player): any => {
        debug(`Player ${player.name} #${player.usgn} has connected`, true);
        player.customMod.hello();
    });

    eventManager.on(SayEvent, (player: Player, message: string): any => {
        debug(`____ ${player.name} #${player.usgn} says: ${message}`, true);
    });

    eventManager.on(Ms100Event, (): any => {
        for (const playerId of player(0, "table")) {
            const player = playerManager.getById(playerId)!;
            debug(`${player.name} rot: ${player.rot}`, true);
        }
    });
};
