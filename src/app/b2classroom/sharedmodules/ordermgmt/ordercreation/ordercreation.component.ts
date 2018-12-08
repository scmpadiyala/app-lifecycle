import { Component, OnInit } from "@angular/core";
import { OrdermgmtService } from "../../ordermgmt.service";

@Component({
  selector: "app-ordercreation",
  templateUrl: "./ordercreation.component.html",
  styles: [],
  providers: [OrdermgmtService]
})
export class OrdercreationComponent implements OnInit {
  constructor(private orderService: OrdermgmtService) {
    orderService.display("OrdercreationComponent ");
  }

  ngOnInit() {}
}
