import { AbstractEvent } from "../AbstractEvent";

export class ConnectHook extends AbstractEvent<[PlayerID]> {
    constructor() {
        super("connect");
    }
}
