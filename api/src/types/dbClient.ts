export interface DbClient {
    connect: () => void | Promise<void>;
    disconnect?: () => Promise<void>;
    clearDatabase?: () => void
}