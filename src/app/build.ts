export interface Build {
    name: string,
    status: "PASSED" | "FAILED" | "PAUSE"
}