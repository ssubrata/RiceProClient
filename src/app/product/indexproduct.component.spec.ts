import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductComponent } from './indexproduct.component';

describe('ProductComponent', () => {
  let component: IndexProductComponent;
  let fixture: ComponentFixture<IndexProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
