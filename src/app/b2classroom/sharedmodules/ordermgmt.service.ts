import { Injectable } from "@angular/core";

@Injectable({
  // providedIn: "root"
})
export class OrdermgmtService {
  constructor() {}

  i = 0;

  display(comp?: string) {
    console.log(comp + " : OrdermgmtService ==> Display called : " + this.i++);
  }
}
