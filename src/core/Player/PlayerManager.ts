import { Player } from "./Player";
import { eventManager } from "../Event/EventManager";
import { IManager } from "../Manager";
import { AttackEvent, ConnectEvent } from "../Event/IEventManager";

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
    eventManager.on<AttackEvent>('attack', (playerId: PlayerID): any => {
      msg2(playerId, 'lol')
    })
  }
}

export const playerManager = new PlayerManager();
