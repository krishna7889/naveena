import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../page/page.module').then((m) => m.PageModule),
  },
  {
    path: 'request',
    loadChildren: () => import('./dashboard-request/dashboard-request.module').then((m) => m.DashboardRequestModule),
  },
  
  {
    path: 'lpodata',
    loadChildren: () => import('../../lpo-data/lpo-data.module').then((m) => m.LpoDataModule),
  },
];
