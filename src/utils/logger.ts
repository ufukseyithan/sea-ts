import { color } from "./color";

export function info(message: string, chat: boolean = false) {
    log(color(116, 110, 255), message, chat);
}

export function debug(message: string, chat: boolean = false) {
    log(color(180, 180, 100), message, chat);
}

function log(color: string, message: string, chat: boolean = false) {
    const func = chat ? msg : print;
    func(`${color}[Sea]: ${message}`);
}
