export interface Build {
    name: string,
    status: "PASSED" | "FAILED" | "IN PROGRESS"
}