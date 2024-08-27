export class Player {
    private _x: number;
    private _y: number;

    constructor(public id: PlayerID) {
        this._x = player(id, "x");
        this._y = player(id, "y");
    }

    public get name(): string {
        return player(this.id, "name");
    }

    public get usgn(): number {
        return player(this.id, "usgn");
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
}
