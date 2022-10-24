import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export interface Project {
    projects: string,
    start: number,
    stop:  number,
    duration: number
}