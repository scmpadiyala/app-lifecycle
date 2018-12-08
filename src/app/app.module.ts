import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { NgModule } from "@angular/core";
import {Http} from "@angular/http"
import {TranslateStaticLoader, TranslateModule, TranslateLoader} from "ng2-translate";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { BgcDirective } from "./lifecycle/bgc.directive";
import { TestPipe } from "./lifecycle/test.pipe";
import { HomeComponent } from "./lifecycle/home/home.component";
import { ChildComponent } from "./lifecycle/child/child.component";
import { LifecyclehomeComponent } from "./classroom/lifecyclehome/lifecyclehome.component";
import { LcHomeComponent } from "./classroom/lc-home/lc-home.component";
import { LcContactComponent } from "./classroom/lc-contact/lc-contact.component";
import { LcBodyComponent } from "./classroom/lc-body/lc-body.component";
import { SamplemoduleModule } from "./samplemodule/samplemodule.module";
import { SampleService } from "./samplemodule/sample.service";
import { Sample1Component } from "./samplemodule/sample1/sample1.component";
import { HomestyleComponent } from "./b2classroom/homestyle/homestyle.component";
import { AboutstyleComponent } from "./b2classroom/aboutstyle/aboutstyle.component";
import { B2lfhomeComponent } from "./b2classroom/lifecycle/b2lfhome/b2lfhome.component";
import { B2lfaboutComponent } from "./b2classroom/lifecycle/b2lfabout/b2lfabout.component";
import { B2lfcontactComponent } from "./b2classroom/lifecycle/b2lfcontact/b2lfcontact.component";
import { OrdermgmtModule } from "./b2classroom/sharedmodules/ordermgmt/ordermgmt.module";
import { MyrootComponent } from "./myroot/myroot.component";
import { OrdermgmtService } from "./b2classroom/sharedmodules/ordermgmt.service";
import { SimpleanimationComponent } from './b2classroom/animations/simpleanimation/simpleanimation.component';
import { I18nhomeComponent } from './b2classroom/i18n/i18nhome/i18nhome.component';
import { I18naboutComponent } from './b2classroom/i18n/i18nabout/i18nabout.component';
import { I18ncontactComponent } from './b2classroom/i18n/i18ncontact/i18ncontact.component';
import { Http2SecureServer } from "http2";
import { FooterComponent } from './classroom/footer/footer.component';
// import { SampleComponent } from "./samplemodule/sample/sample.component";
// import { SamplerComponent } from "./samplemodule/sampler/sampler.component";


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, "./assets/i18n", ".json");
 }

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    BgcDirective,
    TestPipe,
    HomeComponent,
    ChildComponent,
    LifecyclehomeComponent,
    LcHomeComponent,
    LcContactComponent,
    LcBodyComponent,
    HomestyleComponent,
    AboutstyleComponent,
    B2lfhomeComponent,
    B2lfaboutComponent,
    B2lfcontactComponent,
    MyrootComponent,
    SimpleanimationComponent,
    I18nhomeComponent,
    I18naboutComponent,
    I18ncontactComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
    SamplemoduleModule,
    OrdermgmtModule,

    TranslateModule.forRoot({provide: TranslateLoader,
      useFactory: createTranslateLoader, deps: [Http]}),
    RouterModule.forRoot([
      { path: "child", component: ChildComponent },
      { path: "home", component: HomeComponent },
      { path: "lccontact", component: LcContactComponent },
      { path: "lchome", component: LcHomeComponent },
      { path: "sss", component: Sample1Component },
      { path: "b2lfabout", component: B2lfaboutComponent },
      { path: "b2lfcontact", component: B2lfcontactComponent },
      {path : "i18nabout", component : I18naboutComponent},
      {path : "i18ncontact", component : I18ncontactComponent},
    ])
  ],

  providers: [SampleService],

  bootstrap: [AppComponent]
  // bootstrap: [MyrootComponent]
})
export class AppModule {}
