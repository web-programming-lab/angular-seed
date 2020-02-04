import { Component } from '@angular/core';

@Component({ selector: 'app', 
templateUrl: 'app.component.html', 
styleUrls: ['./app.component.css'] })
export class AppComponent {
  model = {};
  submitted = false;

  constructor() { }

  onSubmit(data: any) {
      this.submitted = true;
      console.log('Submit: ', data);
  }
}
