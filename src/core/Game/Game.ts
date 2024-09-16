export class Game {
    private _tick = 0;

    public get tick(): number {
        return this._tick;
    }

    public restart(): void {
        parse("restart");
    }

    private connector = {
        increaseTick: () => {
            this._tick++;
        },
    };
}
