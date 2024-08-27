import { eventManager } from "./core/Event/EventManager";
import { playerManager } from "./core/Player/PlayerManager";

eventManager.register();
playerManager.register();

/**
 * Plugins DEMO
 */
import { registerCustomPlayerPlugin } from "./plugins/custom-mod/main";
import { registerDemoPlugin } from "./plugins/demo/main";
registerCustomPlayerPlugin();
registerDemoPlugin();
