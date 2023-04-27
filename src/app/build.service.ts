import { Injectable } from '@angular/core';
import { Build } from './build';
import { Observable, of } from 'rxjs';
import { mockGetStatusResponse } from './mock-get-status-response';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor() { }

  getBuildStatus(linkToJenkinsBuild: string): Observable<Build> {
    console.log("link to jenkins build: ", linkToJenkinsBuild);
    const build = of(mockGetStatusResponse);
    return build;
  }
}
