import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingReturnInfoComponent } from './shipping-return-info.component';

describe('ShippingReturnInfoComponent', () => {
  let component: ShippingReturnInfoComponent;
  let fixture: ComponentFixture<ShippingReturnInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingReturnInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingReturnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
