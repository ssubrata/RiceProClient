import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSaleComponent } from './indexsale.component';

describe('SaleComponent', () => {
  let component: IndexSaleComponent;
  let fixture: ComponentFixture<IndexSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
