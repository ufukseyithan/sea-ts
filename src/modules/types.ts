export type Module = {
    name: string;
    module: IModule;
};

export interface IModule {
    register: () => void;
}
