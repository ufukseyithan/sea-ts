import { game } from "../Game";

export class Cache {
    private cache: Map<string, unknown> = new Map();
    private lastTick = -1;

    public rememberForTick<T>(key: string, callback: () => T): T {
        if (this.lastTick !== game.tick) {
            this.cache.set(key, callback());
        }
        this.lastTick = game.tick;

        return this.cache.get(key) as T;
    }
}
