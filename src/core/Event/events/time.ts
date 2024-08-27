import { AbstractHook } from "../AbstractHook";
import { AbstractEvent } from "../AbstractEvent";

export const CS2D = {
    AlwaysHook: class extends AbstractHook<[void]> {
        public name = "always";
    },

    MinuteHook: class extends AbstractHook<[void]> {
        public name = "minute";
    },

    SecondHook: class extends AbstractHook<[void]> {
        public name = "second";
    },

    Ms100Hook: class extends AbstractHook<[void]> {
        public name = "ms100";
    },
};

export class AlwaysEvent extends AbstractEvent<[void]> {
    public name = "app:always";
}

export class MinuteEvent extends AbstractEvent<[void]> {
    public name = "app:minute";
}

export class SecondEvent extends AbstractEvent<[void]> {
    public name = "app:second";
}

export class Ms100Event extends AbstractEvent<[void]> {
    public name = "app:ms100";
}
