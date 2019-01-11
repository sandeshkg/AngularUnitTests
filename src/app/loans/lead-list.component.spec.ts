import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadListComponent } from './lead-list.component';

describe('LeadListComponent', () => {
  let component: LeadListComponent;
  let fixture: ComponentFixture<LeadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as Lead List', () =>{
    expect(component.title).toBe('Prospective Leads for Today');
  })
});
