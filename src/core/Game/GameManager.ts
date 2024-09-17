import { IManager } from "../Manager";
import { Event } from "../Event";
import { Game } from "./Game";
import { AlwaysEvent } from "../Event/events/time";

const gameConnector = Game["connector"];

class GameManager implements IManager {
    public register(): void {
        Event.on(AlwaysEvent, () => {
            gameConnector.increaseTick();
        });
    }
}

export const gameManager = new GameManager();
