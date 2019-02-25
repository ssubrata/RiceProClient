import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcategoryComponent } from './indexcategory.component';

describe('IndexcategoryComponent', () => {
  let component: IndexcategoryComponent;
  let fixture: ComponentFixture<IndexcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
