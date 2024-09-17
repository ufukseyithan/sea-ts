import { IManager } from "../Manager";
import { eventManager } from "../Event/EventManager";
import { AlwaysEvent } from "../Event/events/time";
import { Game } from "./Game";

const game = new Game();
const gameConnector = game["connector"];

class GameManager implements IManager {
    public register(): void {
        eventManager.on(AlwaysEvent, () => {
            gameConnector.increaseTick();
        });
    }
}

export const gameManager = new GameManager();
export { game };
