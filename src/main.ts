import * as utf8 from "./modules/utf8/utf8";
import { eventManager } from "./core/Event/EventManager";
import { timeManager } from "./core/Time/TimeManager";
import { playerManager } from "./core/Player/PlayerManager";

utf8.register();

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
