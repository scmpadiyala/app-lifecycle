import { Component, OnInit, OnDestroy, Input, DoCheck, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-lc-home",
  templateUrl: "./lc-home.component.html",
  styleUrls: ["./lc-home.component.css"]
})
export class LcHomeComponent implements OnInit, OnDestroy, DoCheck {
  i;

  stdid = 115;

  constructor() {
    console.log("0. LcHomeComponent ==> constructor");
  }

  ngOnChanges(sampleChanges: SimpleChanges) {
    console.log("1. LcHomeComponent ==> ngOnChanges");
    console.log("Simple Change : " + JSON.stringify(sampleChanges));
  }

  ngOnInit() {
    console.log("2. LcHomeComponent ==> ngOnInit");
  }

  ngDoCheck() {
    console.log("3. LcHomeComponent ==> ngDoCheck");
  }

  ngOnDestroy() {
    console.log(this.i++ + " LcHomeComponent ==> ngOnDestroy");
  }
}
