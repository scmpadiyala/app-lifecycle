import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrdercreationComponent } from "./ordercreation/ordercreation.component";
import { OrderitemsComponent } from "./orderitems/orderitems.component";
import { OrdermgmtService } from "../ordermgmt.service";

@NgModule({
  imports: [CommonModule],
  declarations: [OrdercreationComponent, OrderitemsComponent],
  exports: [OrdercreationComponent],
  // providers: [OrdermgmtService]
})
export class OrdermgmtModule {}
