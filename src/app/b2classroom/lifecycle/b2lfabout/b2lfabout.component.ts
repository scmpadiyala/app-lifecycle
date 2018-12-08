import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-b2lfabout",
  templateUrl: "./b2lfabout.component.html",
  styleUrls: ["./b2lfabout.component.css"]
})
export class B2lfaboutComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    console.log("8. B2lfaboutComponent ==> onDestroy ");
  }
}
