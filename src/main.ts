import modules from "./modules";
import { info } from "./utils";
import { eventManager } from "./core/Event";
import { timeManager } from "./core/Time";
import { playerManager } from "./core/Player";
import { gameManager } from "./core/Game";
import { cacheManager } from "./core/Cache";

for (const module of modules) {
    module.module.register();
    info(`Registered LUA module: ${module.name}`);
}

eventManager.register();
cacheManager.register();
gameManager.register();
timeManager.register();
playerManager.register();

/**
 * Plugins DEMO
 */
import { registerCustomPlayerPlugin } from "./plugins/custom-mod/main";
import { registerDemoPlugin } from "./plugins/demo/main";
registerCustomPlayerPlugin();
registerDemoPlugin();
