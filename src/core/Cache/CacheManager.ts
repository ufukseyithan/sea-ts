import { IManager } from "../Manager";
import { Cache } from "./Cache";

export class CacheManager implements IManager {
    public register(): void {}
}

export const cacheManager = new CacheManager();
export const cache = new Cache();
