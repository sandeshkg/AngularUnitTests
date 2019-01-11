import { Injectable } from '@angular/core';
import { ILead } from 'src/app/loans/ilead';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class LeadService{

    constructor(private http : HttpClient) {}

    private leadsUrl = 'api/leads/leads.json';

    getLeads() : Observable<ILead[]>{
        return this.http.get<ILead[]>(this.leadsUrl).pipe(
            tap(data => console.log('Data :' + JSON.stringify(data))//,
            //catchError(this.handleError))
        ));
        
    }

    
}