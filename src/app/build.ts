export interface Build {
    name: string,
    status: "SUCCESS" | "ABORTED" | "PAUSE"
}