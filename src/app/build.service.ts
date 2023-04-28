import { Injectable } from '@angular/core';
import { Build } from './build';
import { Observable, of } from 'rxjs';
import { mockGetStatusResponse } from './mock-get-status-response';
import { sendData, getStatus, build_status } from './test';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor() { }

  getBuildStatus(linkToJenkinsBuild: any): Observable<Build> {
    console.log("link to jenkins build: ", linkToJenkinsBuild);
    sendData(linkToJenkinsBuild);
    
    const build = of(mockGetStatusResponse);
    const res = getStatus();
    console.log("Response: ", res);
    return build;
  }

}
