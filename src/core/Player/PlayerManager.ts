import { Player } from "./Player";
import { eventManager } from "../Event/EventManager";
import { IManager } from "../Manager";

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
      print(`Player ${player.id} has disconnected`);
    }
  }

  public get(id: PlayerID): Player | null {
    return this.playersById.get(id) || null;
  }

  public register(): void {
    eventManager.on("connect", (player) => {
      // playerManager.create(playerId);
    });

    eventManager.on("disconnect", (playerId: PlayerID) => {
      playerManager.remove(playerId);
    });
  }
}

export const playerManager = new PlayerManager();
