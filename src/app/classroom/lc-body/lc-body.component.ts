import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from "@angular/core";

@Component({
  selector: "app-lc-body",
  templateUrl: "./lc-body.component.html",
  styleUrls: ["./lc-body.component.css"]
})
export class LcBodyComponent implements OnInit, OnChanges {
  @Input() parentParam: any;

  constructor() {
    console.log("constructor " + this.parentParam);
  }

  ngOnChanges(sampleChanges: SimpleChanges) {
    console.log("1. LcBodyComponent ==> ngOnChanges");
    // console.log("Simple Change : " + JSON.stringify(sampleChanges));
  }

  ngOnInit() {
    console.log("2. LcBodyComponent ==> OnInit");
    // console.log(this.parentParam);
  }

  ngDoCheck() {
    console.log("3. LcBodyComponent ==> DoCheck");
  }

  ngAfterContentInit() {
    console.log("4. LcBodyComponent ==> AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("5. LcBodyComponent ==> AfterContenChecked");
  }

  ngAfterViewInit() {
    console.log("6. LcBodyComponent ==> AfterView Init");
  }

  ngAfterViewChecked() {
    console.log("7. LcBodyComponent ==> AfterViewChecked");
  }
}
