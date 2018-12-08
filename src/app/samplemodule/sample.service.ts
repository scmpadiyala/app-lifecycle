import { Injectable } from "@angular/core";
import { SamplemoduleModule } from "./samplemodule.module";
import { SamplerComponent } from "./sampler/sampler.component";

@Injectable({
  providedIn: "root"
})
export class SampleService {
  constructor() {}

  i = 0;

  displayLog(title?: any) {
    this.i++;
    console.log(title + " : display called : " + this.i);
  }
}
