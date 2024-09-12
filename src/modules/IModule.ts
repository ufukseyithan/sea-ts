export type Module = {
    name: string;
    module: ModuleInterface;
};

export interface ModuleInterface {
    register: () => void;
}
