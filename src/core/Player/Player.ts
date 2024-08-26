export class Player {
    constructor(public id: PlayerID) {}

    public get name(): string {
        return player(this.id, "name");
    }

    public get usgn(): number {
        return player(this.id, "usgn");
    }
}
