import { Component } from "@angular/core";

interface FormModel {
  name: string;
  email: string;
}

interface FormModel {
  name: string;
  email: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  model: FormModel = { name: "", email: "" };
  submitted = false;

  constructor() {}

  onSubmit(data: FormModel) {
    this.submitted = true;
    console.log("Submit: ", data);
  }
}
