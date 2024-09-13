import modules from "./modules";
import { info } from "./utils";
import { eventManager } from "./core/Event/EventManager";
import { timeManager } from "./core/Time/TimeManager";
import { playerManager } from "./core/Player/PlayerManager";

for (const module of modules) {
    module.module.register();
    info(`Registered LUA module: ${module.name}`);
}

eventManager.register();
timeManager.register();
playerManager.register();

/**
 * Plugins DEMO
 */
import { registerCustomPlayerPlugin } from "./plugins/custom-mod/main";
import { registerDemoPlugin } from "./plugins/demo/main";
registerCustomPlayerPlugin();
registerDemoPlugin();
