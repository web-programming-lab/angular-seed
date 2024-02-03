import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  completed: boolean = true;

  items = [
    {'name': 'One', 'color': 'red'},
    {'name': 'Two', 'color': 'yellow'},
    {'name': 'Three', 'color': 'blue'}
  ];


}
