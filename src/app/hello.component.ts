import { Component, Input } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `<h1>Hello {{ name }}!</h1>`,
  styles: [],
})
export class HelloComponent {
  @Input({ required: true }) name!: string;
}
