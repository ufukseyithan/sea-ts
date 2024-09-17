import { cache } from "../Cache";

export class Player {
    private _name: string;
    private _x: number;
    private _y: number;

    constructor(public id: PlayerID) {
        this._name = player(id, "name");
        this._x = player(id, "x");
        this._y = player(id, "y");
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
        parse(`setname ${this.id} "${name}"`);
    }

    public get usgn(): number {
        return player(this.id, "usgn");
    }

    public get speed(): number {
        return player(this.id, "speedmod");
    }

    public set speed(speed: number) {
        parse(`speedmod ${this.id} ${speed}`);
    }

    public get rot(): number {
        return cache.rememberForTick(this.getCacheKey("rot"), () => {
            return (player(this.id, "rot") - 90 + 360) % 360;
        });
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public set x(x: number) {
        this.setPosition(x, this._y);
    }

    public set y(y: number) {
        this.setPosition(this._x, y);
    }

    public get tileX(): number {
        return Math.floor(this._x / 32);
    }

    public get tileY(): number {
        return Math.floor(this._y / 32);
    }

    public set tileX(tileX: number) {
        this.setTilePosition(tileX, this._y);
    }

    public set tileY(tileY: number) {
        this.setTilePosition(this._x, tileY);
    }

    public setPosition(x: number, y: number): void {
        this._x = x;
        this._y = y;
        parse(`setpos ${this.id} ${x} ${y}`);
    }

    public setTilePosition(tileX: number, tileY: number): void {
        this.setPosition(tileX * 32 + 16, tileY * 32 + 16);
    }

    public message(message: string): void {
        msg2(this.id, message);
    }

    private getCacheKey(key: string): string {
        return `core:player_${this.id}_${key}`;
    }
}
