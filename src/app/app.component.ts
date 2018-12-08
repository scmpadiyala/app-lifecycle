import {
  Component,
  ContentChild,
  AfterContentChecked,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { SampleService } from "./samplemodule/sample.service";
import { OrdermgmtService } from "./b2classroom/sharedmodules/ordermgmt.service";
import { TranslateService } from "ng2-translate";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // providers: [SampleService]
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "app-lifecycle";

  // constructor(private orderService: OrdermgmtService) {
  //   orderService.display("AppComponent ");
  // }

  constructor(private translateService: TranslateService) {
    translateService.addLangs(["en", "ja", "cn", "fr"]);
    translateService.use("en");
  }

  
  // constructor(private serviceSample: SampleService) {
  //   serviceSample.displayLog();
  // }

  // childValue = "test";

  // @ViewChild(LifecycleComponent) childView: LifecycleComponent;

  // ngAfterContentInit() {
  //   console.log("App : After Content init" + this.childView.parentValue);
  // }

  // ngAfterContentChecked() {
  //   console.log("App : After Content init" + this.childView.parentValue);
  //   // console.log(
  //   //   "App Content child content change : " + this.childContent.testValue
  //   // );
  // }
}
