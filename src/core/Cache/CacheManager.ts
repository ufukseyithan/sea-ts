import { IManager } from "../Manager";

class CacheManager implements IManager {
    public register(): void {}
}

export const cacheManager = new CacheManager();
