import { utf8 } from "../../modules/utf8";
import { Player } from "./Player";
import { IManager } from "../Manager";
import { eventManager } from "../Event/EventManager";
import {
    CS2D,
    ConnectEvent,
    DisconnectEvent,
    MoveEvent,
    SayEvent,
    InitPlayerEvent,
    NameEvent,
} from "../Event/events/player";

export class PlayerManager implements IManager {
    private players: Player[] = [];
    private playersById: Map<PlayerID, Player> = new Map();

    public create(id: PlayerID): Player {
        const player = new Player(id);

        this.players.push(player);
        this.playersById.set(id, player);

        return player;
    }

    public remove(id: PlayerID): void {
        const player = this.playersById.get(id);

        if (player) {
            this.playersById.delete(id);
            table.remove(this.players, this.players.indexOf(player));
        }
    }

    public getById(id: PlayerID): Player | null {
        return this.playersById.get(id) || null;
    }

    public register(): void {
        eventManager.on(CS2D.ConnectHook, (playerId: PlayerID): any => {
            const player = this.create(playerId);
            eventManager.trigger(InitPlayerEvent, player);
            eventManager.trigger(ConnectEvent, player);
        });

        eventManager.on(CS2D.DisconnectHook, (playerId: PlayerID): any => {
            const player = this.getById(playerId);
            if (player) {
                eventManager.trigger(DisconnectEvent, player);
                this.remove(playerId);
            }
        });

        eventManager.on(
            CS2D.NameHook,
            (playerId: PlayerID, oldName: string, newName: string, forced: number): any => {
                if (forced == CS2D.NameHook.Forced.Delayed) {
                    return;
                }

                const player = this.getById(playerId);
                if (player) {
                    player["_name"] = newName;
                    eventManager.trigger(NameEvent, player, oldName, newName);
                }
            },
        );

        eventManager.on(CS2D.SayUtf8Hook, (playerId: PlayerID, message: string): any => {
            const player = this.getById(playerId);
            if (player) {
                eventManager.trigger(SayEvent, player, utf8.decode(message));
            }
        });

        eventManager.on(CS2D.MoveHook, (playerId: PlayerID, x: number, y: number): any => {
            const player = this.getById(playerId);
            if (player) {
                player["_x"] = x;
                player["_y"] = y;
                eventManager.trigger(MoveEvent, player, x, y);
            }
        });
    }
}

export const playerManager = new PlayerManager();
