import { Event } from "../../core/Event";
import { ConnectEvent, SayEvent } from "../../core/Event/events/player";
import { Player } from "../../core/Player";
import { debug } from "../../utils";
import { Ms100Event } from "../../core/Event/events/time";

export const registerDemoPlugin = (): void => {
    Event.on(ConnectEvent, (player: Player): any => {
        debug(`Player ${player.name} #${player.usgn} has connected`, true);
        player.customMod.hello();
    });

    Event.on(SayEvent, (player: Player, message: string): any => {
        debug(`____ ${player.name} #${player.usgn} says: ${message}`, true);
    });

    Event.on(Ms100Event, (): any => {
        for (const playerId of player(0, "table")) {
            const player = Player.getById(playerId)!;
            debug(`${player.name} rot: ${player.rot}`, true);
        }
    });
};
