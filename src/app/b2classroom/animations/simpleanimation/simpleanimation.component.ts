import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-simpleanimation",
  templateUrl: "./simpleanimation.component.html",
  styleUrls: ["./simpleanimation.component.css"],
  animations: [
    trigger("myfirstani", [
      transition("void => *", [
        style({ backgroundColor: "yellow", opacity: 0 }),
        animate(10000)
      ])
    ])
  ]
})
export class SimpleanimationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
