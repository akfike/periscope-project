import { Component } from '@angular/core';
import { Build } from '../build';
import { BUILDS } from '../mock-builds';
import { BuildService } from '../build.service';
import { from, Observable } from 'rxjs';
import { build_status } from '../test';
import { Response } from '../response';
@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent {
  builds = BUILDS;
  buildURL = "";
  build: Build = { name: "Success", status: "SUCCESS"};
  buildRequest = {};

  constructor(private buildService: BuildService) {}

  onSubmit(): void {
    if (this.buildURL !== "") {
      this.buildRequest = {"url": this.buildURL};
      this.getBuildStatus();
      this.builds.push(this.build);
      this.build = { name: 'Empty', status: "ABORTED"};
    } 
  }

  delete(build: Build): void {
    const index = this.builds.indexOf(build);
    if (index >= 0) {
      this.builds.splice(index, 1);
    }
  }

  deleteAll(): void {
    this.builds = [];
  }

  getBuildStatus(): Build {
    // ubscribe(res => this.companyCount = res.count
    var res = from(this.buildService.getBuildStatus(this.buildRequest));
   return this.build;
  }
}
