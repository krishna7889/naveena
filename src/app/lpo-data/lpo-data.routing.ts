import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LpoDataComponent } from './lpo-data.component';


const routes: Routes = [
  {
    path: '',
    component:LpoDataComponent ,
    data: {
      title: 'Page',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LPORoutingModule {}