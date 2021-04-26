import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRequestComponent } from './dashboard-request.component';
import { DashboardRequestRoutingModule } from './routers/dashboard-request-routing.module';
import { RetailFormComponent } from './components/retail-form/retail-form.component';
import { CorporateFormComponent } from './components/corporate-form/corporate-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [DashboardRequestComponent, CorporateFormComponent, RetailFormComponent],
  imports: [DashboardRequestRoutingModule, NgSelectModule, CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [DashboardRequestComponent],
})
export class DashboardRequestModule {}
