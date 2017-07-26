import { Component, OnInit } from '@angular/core';

import { Service } from '../../_mock/capacity.metrics';
import { AppService } from '../../_service/app.service';
import { RadialProgressComponent } from '../../widget/radial-progress/radial-progress.component';

@Component({
    selector: 'app-dashboard-capacity',
    templateUrl: './dashboard-capacity.component.html',
    styleUrls: ['./dashboard-capacity.component.css']
})

export class DashboardCapacityComponent implements OnInit {
    title = 'Сервисы';

    services: Service[] = [];

    constructor( private _service: AppService ){}

    ngOnInit(): void {
        this._service.getServices().then(
            services => this.services = services
        );
    }

}