import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporateFormComponent } from '../components/corporate-form/corporate-form.component';
import { RetailFormComponent } from '../components/retail-form/retail-form.component';
import { DashboardRequestComponent } from '../dashboard-request.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardRequestComponent,
    children: [
      {
        path: 'retail',
        component: RetailFormComponent,
      },
      {
        path: 'corporate',
        component: CorporateFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRequestRoutingModule {}
