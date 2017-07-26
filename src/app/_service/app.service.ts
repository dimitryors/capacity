import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SERVICES } from '../_mock/mock-metrics';
import { Service } from '../_mock/capacity.metrics';


@Injectable()
export class AppService {

    private esUrl = 'localhost:9200/dashboard/service/1';

    constructor( private http: Http ){} 

    getServices(){
        return Promise.resolve(SERVICES);

    }

    getOneService(){
        return this.http.get( this.esUrl )
                    .toPromise()
                    .then(response => response.json().data._source as Service )
                    .catch( this.handleError );
    }

    private handleError( error: any ): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}