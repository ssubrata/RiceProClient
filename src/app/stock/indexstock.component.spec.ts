import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexstockComponent } from './indexstock.component';

describe('IndexstockComponent', () => {
  let component: IndexstockComponent;
  let fixture: ComponentFixture<IndexstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
