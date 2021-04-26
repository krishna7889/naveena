import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpoDataComponent } from './lpo-data.component';
import { LPORoutingModule } from './lpo-data.routing';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [LpoDataComponent],
  imports: [
    CommonModule,
    LPORoutingModule,
    DataTablesModule
  ]
})
export class LpoDataModule { }
