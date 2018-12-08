import { Component, OnInit } from "@angular/core";
import { TranslateService } from "ng2-translate";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-i18nhome",
  templateUrl: "./i18nhome.component.html",
  styleUrls: ["./i18nhome.component.css"]
})
export class I18nhomeComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {}

  activatedRouteSubscription;

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(
      params => {
        console.log("parmas : " + params);
        let currentLocale = params["locale"];
        console.log("Current Locale : " + currentLocale);
        if (currentLocale != undefined) {
          this.translateService.use(currentLocale);
        }
      }
    );
  }

  handleChangeLanguage(e) {
    console.log("Selected language : " + e.target.value);
    this.translateService.use(e.target.value);
  }
}
