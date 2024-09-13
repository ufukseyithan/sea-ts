import { Module } from "./types";
import * as utf8_Module from "./utf8/utf8";
import * as timerEx_Module from "./timerEx/timerEx";

const modules: Module[] = [
    {
        name: "UTF-8 wrapper",
        module: utf8_Module,
    },
    {
        name: "TimerEx",
        module: timerEx_Module,
    },
];

export default modules;
