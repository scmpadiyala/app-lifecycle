import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";

@Component({
  selector: "app-lifecyclehome",
  templateUrl: "./lifecyclehome.component.html",
  styleUrls: ["./lifecyclehome.component.css"]
})
export class LifecyclehomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  // @Input() parentTitle: any;
  totalAmount = 4500;

  constructor() {
    console.log("0. LifecyclehomeComponent ==> Constructor");
  }

  ngOnChanges() {
    console.log("1. LifecyclehomeComponent ==> OnChanges");
  }

  ngOnInit() {
    console.log("2. LifecyclehomeComponent ==> OnInit");
  }

  ngDoCheck() {
    console.log("3. LifecyclehomeComponent ==> DoCheck");
  }

  ngAfterContentInit() {
    console.log("4. LifecyclehomeComponent ==> AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("5. LifecyclehomeComponent ==> AfterContenChecked");
  }

  ngAfterViewInit() {
    console.log("6. LifecyclehomeComponent ==> AfterView Init");
  }

  ngAfterViewChecked() {
    console.log("7. LifecyclehomeComponent ==> AfterViewChecked");
  }
}
