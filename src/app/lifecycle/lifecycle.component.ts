import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ContentChild
} from "@angular/core";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: "app-lifecycle",
  templateUrl: "./lifecycle.component.html",
  styleUrls: ["./lifecycle.component.css"]
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() parentValue: any;

  testValue = 100;

  // childValue = "test";

  @ContentChild(ChildComponent) childContent: ChildComponent;

  constructor() {
    console.log("0. Constructor : ");
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(
      "1. ngOnChanges : " + JSON.stringify(simpleChanges.parentValue)
    );
  }

  ngOnInit() {
    console.log("2. ngOnInit : ");
  }

  ngDoCheck() {
    console.log("3. ngDoCheck ");
  }

  ngAfterContentInit() {
    console.log("4. ngAfterContentInit " + this.childContent.testValue);
  }

  ngAfterContentChecked() {
    console.log("5. ngAfterContentChecked : " + this.childContent.testValue);
  }

  ngAfterViewInit() {
    console.log("6. ngAfterViewInit : ");
  }

  ngAfterViewChecked() {
    console.log("7. ngAfterViewChecked : ");
  }

  ngOnDestroy() {
    console.log("8. ngOnDestroy : ");
  }
}
