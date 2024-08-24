/** @noSelfInFile **/

import { eventManager } from "./core/Event/EventManager";
import { AttackEvent, BaseEvent, ConnectEvent, JoinEvent } from "./core/Event/IEventManager";
import { playerManager } from "./core/Player/PlayerManager";

// eventManager.register();
// playerManager.register();

eventManager.on('attack', (playerId: PlayerID): any => {
	msg2(playerId, 'lol');
})