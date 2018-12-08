import { Component, OnInit } from "@angular/core";
import { OrdermgmtService } from "../../ordermgmt.service";

@Component({
  selector: "app-orderitems",
  templateUrl: "./orderitems.component.html",
  styleUrls: ["./orderitems.component.css"],
  providers: [OrdermgmtService]
})
export class OrderitemsComponent implements OnInit {
  constructor(private orderService: OrdermgmtService) {
    orderService.display("OrderitemsComponent ");
  }

  ngOnInit() {}
}
