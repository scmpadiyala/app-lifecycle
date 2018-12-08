import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit
} from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-b2lfhome",
  templateUrl: "./b2lfhome.component.html",
  styleUrls: ["./b2lfhome.component.css"]
})
export class B2lfhomeComponent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit {
  totalAmount = 4500;

  studentList = [];

  @Input() parentTitle: any;

  constructor(private fb: FormBuilder) {
    console.log("0. B2lfhomeComponent ==> Constructor");

    // console.log(
    //   "0. B2lfhomeComponent ==> Constructor : Input value - parnetTitle : " +
    //     this.parentTitle
    // );
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    console.log(
      "1. B2lfhomeComponent ==> OnChanges : Simple Changes : " +
        JSON.stringify(simpleChange)
    );

    // console.log(
    //   "1. B2lfhomeComponent ==> OnChanges : Input value - parnetTitle : " +
    //     this.parentTitle
    // );
  }

  ngOnInit() {
    console.log("2. B2lfhomeComponent ==> onInit ");
  }

  ngDoCheck() {
    console.log("3. B2lfhomeComponent ==> doCheck : Change is detected");
  }

  ngAfterContentInit() {
    console.log("4. B2lfhomeComponent ==> AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("5. B2lfhomeComponent ==> AfterContentChecked ");
  }

  ngAfterViewInit() {
    console.log("6. B2lfhomeComponent ==> AfterViewInit ");
  }

  ngAfterViewChecked() {
    console.log("7. B2lfhomeComponent ==> AfterViewChecked ");
  }
}
