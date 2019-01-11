import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  //selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.title += ` : ${id}`;
  }

  title : string = 'Lead Details';
}
