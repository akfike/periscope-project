// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'periscope-project';
// }
import { Component } from '@angular/core';

interface Entry {
  name: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entries: Entry[] = [];
  newEntry: Entry = { name: '', status: '' };

  onSubmit(): void {
    this.entries.push(this.newEntry);
    this.newEntry = { name: '', status: '' };
  }

  delete(entry: Entry): void {
    const index = this.entries.indexOf(entry);
    if (index >= 0) {
      this.entries.splice(index, 1);
    }
  }

  deleteAll(): void {
    this.entries = [];
  }
}