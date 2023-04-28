import { Injectable } from '@angular/core';
import { Build } from './build';
import { Observable, of } from 'rxjs';
import { mockGetStatusResponse } from './mock-get-status-response';
import { sendData, getStatus, returnStatus } from './test';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  buildResponse?: Observable<Response>;

  constructor(private http: HttpClient) { }

  // getBuildStatus(linkToJenkinsBuild: any): Observable<Build> {
  //   console.log("link to jenkins build: ", linkToJenkinsBuild);
  //   sendData(linkToJenkinsBuild);
    
  //   const build = of(mockGetStatusResponse);
  //   const res = getStatus();
  //   console.log("Response: ", res);
  //   var statusRes = returnStatus();
  //   console.log("STATUS: ", statusRes);
  //   return build;
  // }

  getBuildStatus(linkToJenkinsBuild: any) {
    console.log("link to jenkins build: ", linkToJenkinsBuild);
    
    const build = of(mockGetStatusResponse);

    var response = this.sendJenkinsBuild(linkToJenkinsBuild);
    return response;
  }

  sendJenkinsBuild(linkToJenkinsBuild: any) {
    var response = this.perform('post', '/add', {"data": linkToJenkinsBuild["url"]});
    response = this.perform('get', '/get_status');
    console.log("RESPONSE: ", response);
    return response;
  }

  async perform(method: string, resource: string, data={}) {
    const url = `http://localhost:5000${resource}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    switch (method) {
      case 'get':
        // return this.http.get<Response>(url, httpOptions).subscribe({
        //   next(data) { 
        //     console.log("Data: ", data); 
        //     console.log("status: ", data.status);
        //     console.log("message: ", data.message);
        //   },
        //   complete() { 
        //     console.log('Finished sequence'); 
        //   }
        // });
        return this.http.get<Build[]>(url, httpOptions).subscribe(data => {return data});
      default:
        // return this.http.post<Response>(url, data, httpOptions).subscribe({
        //   next(data) { 
        //     console.log(data); 
        //     console.log("status: ", data.status);
        //     console.log("message: ", data.message);
        //   },
        //   complete() { console.log('Finished sequence'); }
        // });
        return this.http.post<Build[]>(url, data, httpOptions).subscribe(data => {return data});
    }
  }
 
}
