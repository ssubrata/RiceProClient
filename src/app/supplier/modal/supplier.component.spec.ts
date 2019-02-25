import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexSupplierComponent } from '../indexsupplier.component';


describe('IndexSupplierComponent', () => {
  let component: IndexSupplierComponent;
  let fixture: ComponentFixture<IndexSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
