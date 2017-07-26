import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';

import { DashboardMarketplaceComponent }   from '../../component/dashboard-marketplace/dashboard-marketplace.component';
import { DashboardSandboxComponent }   from '../../component/dashboard-sandbox/dashboard-sandbox.component';
import { DatasourceBoardComponent }   from '../../component/datasource-board/datasource-board.component';
import { VisualizeBoardComponent } from '../../component/visualize-board/visualize-board.component';
import { DashboardsComponent } from '../../component/dashboards/dashboards.component';
import { DashboardCapacityComponent } from '../../component/dashboard-capacity/dashboard-capacity.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboards', pathMatch: 'full' },
  { path: 'dashboards',  component: DashboardsComponent },
  { path: 'dashboard-marketplace',  component: DashboardMarketplaceComponent },
  { path: 'dashboard-sandbox',  component: DashboardSandboxComponent },
  { path: 'datasource-board',  component: DatasourceBoardComponent },
  { path: 'visualize-board',  component: VisualizeBoardComponent },
  { path: 'capacity',  component: DashboardCapacityComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
