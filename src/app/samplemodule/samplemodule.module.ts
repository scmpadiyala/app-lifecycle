import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SamplemoduleRoutingModule } from "./samplemodule-routing.module";
import { SampleComponent } from "./sample/sample.component";
import { SamplerComponent } from "./sampler/sampler.component";
// import { SampleService } from "./sample.service";
import { Sample1Component } from "./sample1/sample1.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SamplemoduleRoutingModule,
    RouterModule.forRoot({ path: "sss", component: Sample1Component })
  ],
  declarations: [SampleComponent, SamplerComponent, Sample1Component],
  exports: [SampleComponent, SamplerComponent],
  providers: []
})
export class SamplemoduleModule {}
