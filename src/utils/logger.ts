import { color } from "./color";

type MessageType = string | number;

export function info(message: MessageType, chat: boolean = false) {
    log(color(116, 110, 255), message, chat);
}

export function debug(message: MessageType, chat: boolean = false) {
    log(color(180, 180, 100), message, chat);
}

function log(color: string, message: MessageType, chat: boolean = false) {
    const func = chat ? msg : print;
    func(`${color}[Sea]: ${message}`);
}
