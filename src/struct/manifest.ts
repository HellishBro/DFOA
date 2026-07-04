export interface Config {
    returns: {
        slot: "first" | "last",
        name: string,
    }
}

export interface Manifest {
    name: string,
    description: string,
    version: string,
    authors: string[],
    src_dir: string,
    dist_dir: string,
    cfg: Config
}