import { Game } from "../Game";

export class Cache {
    private static cache: Map<string, unknown> = new Map();
    private static lastTick = -1;

    public static rememberForTick<T>(key: string, callback: () => T): T {
        if (this.lastTick !== Game.tick) {
            this.cache.set(key, callback());
        }
        this.lastTick = Game.tick;

        return this.cache.get(key) as T;
    }
}
