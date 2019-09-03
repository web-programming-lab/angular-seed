import { Component } from '@angular/core';

@Component({ selector: 'app', 
templateUrl: 'app.component.html', 
styleUrls: ['./app.component.css'] })
export class AppComponent {
  model: any = {};

  onSubmit(data: any) {
    console.log('Submit! ', data);
  }
}
