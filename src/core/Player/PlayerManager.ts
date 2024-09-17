import { utf8 } from "../../modules/utf8";
import { Player } from "./Player";
import { IManager } from "../Manager";
import { Event } from "../Event";
import {
    CS2D,
    ConnectEvent,
    DisconnectEvent,
    MoveEvent,
    SayEvent,
    InitPlayerEvent,
    NameEvent,
} from "../Event/events/player";

class PlayerManager implements IManager {
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
        Event.on(CS2D.ConnectHook, (playerId: PlayerID): any => {
            const player = this.create(playerId);
            Event.trigger(InitPlayerEvent, player);
            Event.trigger(ConnectEvent, player);
        });

        Event.on(CS2D.DisconnectHook, (playerId: PlayerID): any => {
            const player = this.getById(playerId);
            if (player) {
                Event.trigger(DisconnectEvent, player);
                this.remove(playerId);
            }
        });

        Event.on(
            CS2D.NameHook,
            (playerId: PlayerID, oldName: string, newName: string, forced: number): any => {
                if (forced == CS2D.NameHook.Forced.Delayed) {
                    return;
                }

                const player = this.getById(playerId);
                if (player) {
                    player["_name"] = newName;
                    Event.trigger(NameEvent, player, oldName, newName);
                }
            },
        );

        Event.on(CS2D.SayUtf8Hook, (playerId: PlayerID, message: string): any => {
            const player = this.getById(playerId);
            if (player) {
                Event.trigger(SayEvent, player, utf8.decode(message));
            }
        });

        Event.on(CS2D.MoveHook, (playerId: PlayerID, x: number, y: number): any => {
            const player = this.getById(playerId);
            if (player) {
                player["_x"] = x;
                player["_y"] = y;
                Event.trigger(MoveEvent, player, x, y);
            }
        });
    }
}

export const playerManager = new PlayerManager();
