import { Player } from "./Player";
import { IManager } from "../Manager";
import { eventManager } from "../Event/EventManager";
import {
    CS2D,
    ConnectHook,
    DisconnectHook,
    MoveHook,
    SayHook,
} from "../Event/events/player";

export class PlayerManager implements IManager {
    private players: Player[] = [];
    private playersById: Map<PlayerID, Player> = new Map();

    public create(id: PlayerID): Player {
        const player = new Player(id);

        this.players.push(player);
        this.playersById.set(id, player);
        print(`Player ${player.id} has connected`);

        return player;
    }

    public remove(id: PlayerID): void {
        const player = this.playersById.get(id);

        if (player) {
            this.playersById.delete(id);
            table.remove(this.players, this.players.indexOf(player));
        }
    }

    public get(id: PlayerID): Player | null {
        return this.playersById.get(id) || null;
    }

    public register(): void {
        eventManager.on(CS2D.ConnectHook, (playerId: PlayerID): any => {
            eventManager.trigger(ConnectHook, this.create(playerId));
        });

        eventManager.on(CS2D.DisconnectHook, (playerId: PlayerID): any => {
            const player = this.get(playerId);
            if (player) {
                eventManager.trigger(DisconnectHook, player);
                this.remove(playerId);
            }
        });

        eventManager.on(
            CS2D.SayHook,
            (playerId: PlayerID, message: string): any => {
                const player = this.get(playerId);
                if (player) {
                    eventManager.trigger(SayHook, player, message);
                }
            },
        );

        eventManager.on(
            CS2D.MoveHook,
            (playerId: PlayerID, x: number, y: number): any => {
                const player = this.get(playerId);
                if (player) {
                    player["_x"] = x;
                    player["_y"] = y;
                    eventManager.trigger(MoveHook, player, x, y);
                }
            },
        );

        /**
         * TEST
         */
        eventManager.on(ConnectHook, (player: Player): any => {
            msg(`Player ${player.name} #${player.usgn} has connected`);
        });

        eventManager.on(SayHook, (player: Player, message: string): any => {
            msg(`____ ${player.name} #${player.usgn} says: ${message}`);
        });
    }
}

export const playerManager = new PlayerManager();
