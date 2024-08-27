import { eventManager } from "./core/Event/EventManager";
import { timeManager } from "./core/Time/TimeManager";
import { playerManager } from "./core/Player/PlayerManager";

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
