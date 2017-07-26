import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';

// Import Routes
import { AppRoutingModule }     from './_route/app-routing/app-routing.module';

// Import Services
import { AppService } from './_service/app.service';

// Import Components
import { AppComponent } from './app.component';
import { DatasourceBoardComponent } from './component/datasource-board/datasource-board.component';
import { DashboardSandboxComponent } from './component/dashboard-sandbox/dashboard-sandbox.component';
import { DashboardMarketplaceComponent } from './component/dashboard-marketplace/dashboard-marketplace.component';
import { VisualizeBoardComponent } from './component/visualize-board/visualize-board.component';
import { DashboardsComponent } from './component/dashboards/dashboards.component';
import { RadialProgressComponent } from './widget/radial-progress/radial-progress.component';
import { DashboardCapacityComponent } from './component/dashboard-capacity/dashboard-capacity.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasourceBoardComponent,
    DashboardSandboxComponent,
    DashboardMarketplaceComponent,
    VisualizeBoardComponent,
    DashboardsComponent,
    RadialProgressComponent,
    DashboardCapacityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
