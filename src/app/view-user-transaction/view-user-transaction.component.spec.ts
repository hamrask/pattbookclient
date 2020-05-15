import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserTransactionComponent } from './view-user-transaction.component';

describe('ViewUserTransactionComponent', () => {
  let component: ViewUserTransactionComponent;
  let fixture: ComponentFixture<ViewUserTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
