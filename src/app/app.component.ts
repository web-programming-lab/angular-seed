import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model: any = {};
  submitted = false;

  constructor() { }

  onSubmit(data: any) {
    this.submitted = true;
    console.log('Submit: ', data);
  }
}
