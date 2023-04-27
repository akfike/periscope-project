import { Build } from "./build";
import { Status } from "./status-options";

export const mockGetStatusResponse: Build = {
    name: "Mock Jenkins Build",
    status: Status.Passed
}