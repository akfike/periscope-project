import { Component } from '@angular/core';
import { Build } from '../build';
import { BUILDS } from '../mock-builds';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent {
  builds = BUILDS;
  newBuild: Build = { name: '', status: 'IN-PROGRESS' };

  onSubmit(): void {
    if (this.newBuild.name !== "") {
      this.builds.push(this.newBuild);
      this.newBuild = { name: '', status: 'IN-PROGRESS' };
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
}
