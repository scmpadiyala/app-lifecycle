import { Component, OnInit } from "@angular/core";
import { SampleService } from "../sample.service";

@Component({
  selector: "app-sampler",
  templateUrl: "./sampler.component.html",
  styleUrls: ["./sampler.component.css"]
  // providers: [SampleService]
})
export class SamplerComponent implements OnInit {
  constructor(private serviceSample: SampleService) {
    this.serviceSample.displayLog("SamplerComponent");
  }
  ngOnInit() {
    this.serviceSample.displayLog("SamplerComponent");
  }
}
