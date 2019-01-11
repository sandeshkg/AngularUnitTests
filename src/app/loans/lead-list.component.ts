import { Component, OnInit } from '@angular/core';
import { ILead } from './ilead';
import { LeadService } from './leads.service';

@Component({
    //selector : 'ut-loanleads',
    templateUrl : './lead-list.component.html'
})
export class LeadListComponent implements OnInit {
    
    title : string = "Prospective Leads for Today";
    _filter: string;
    _filteredLeads : ILead[];
    errorMessage : string;

    constructor(private leadService : LeadService){
        
    }

    get filter():string{
        return this._filter;
    }

    set filter(value : string){
        this._filter = value;
        this._filteredLeads = this.filter ? this.performFilter(this._filter) : this.prospects;
    }

    performFilter(filter: string): ILead[] {
        filter = filter.toLocaleLowerCase();
        return this.prospects.filter((lead: ILead) =>
            lead.Name.toLocaleLowerCase().indexOf(filter) !== -1);
    }

    ngOnInit(): void {
        this.leadService.getLeads().subscribe(
                prospects => {
                    this.prospects = prospects;
                    this._filteredLeads = this.prospects;
                },
            error => this.errorMessage = <any>error

        );
        
        //this.filter = 'A';
    }

    prospects : ILead[] = [];

}