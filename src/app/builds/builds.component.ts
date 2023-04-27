import { Component } from '@angular/core';
import { Build } from '../build';
import { BUILDS } from '../mock-builds';
import { BuildService } from '../build.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent {
  builds = BUILDS;
  buildURL = "";
  build: Build = { name: 'Empty', status: 'Empty'};

  constructor(private buildService: BuildService) {}

  onSubmit(): void {
    if (this.buildURL !== "") {
      this.getBuildStatus()
      this.builds.push(this.build);
      this.build = { name: 'Empty', status: 'Empty' };
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

  getBuildStatus() {
    this.buildService.getBuildStatus(this.buildURL).subscribe(build => this.build = build);
  }
}
