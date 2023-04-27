import { Build } from "./build";
import { Status } from "./status-options";

export const BUILDS: Build[] = [
    { name: "Jenkins Build 1", status: Status.Passed},
    { name: "Jenkins Build 2", status: Status.Failed},
    { name: "Jenkins Build 3", status: Status.InProgress},
    { name: "Jenkins Build 4", status: Status.InProgress},
    { name: "Jenkins Build 5", status: Status.Failed},
    { name: "Jenkins Build 6", status: Status.Passed},
    { name: "Jenkins Build 7", status: Status.Failed},
    { name: "Jenkins Build 8", status: Status.InProgress},
    { name: "Jenkins Build 9", status: Status.Failed},
    { name: "Jenkins Build 10", status: Status.Passed}
];