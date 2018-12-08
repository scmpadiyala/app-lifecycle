import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBgc]"
})
export class BgcDirective {
  constructor(private elementRef: ElementRef) {
    console.log("BgcDirective Constructor");

    //this.elementRef.nativeElement.styles.backgroundcolor = "yellow";
  }
}
