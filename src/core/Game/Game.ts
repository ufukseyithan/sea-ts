export class Game {
    private static _tick = 0;

    public static get tick(): number {
        return this._tick;
    }

    public static restart(): void {
        parse("restart");
    }

    private static connector = {
        increaseTick: () => {
            Game._tick++;
        },
    };
}
