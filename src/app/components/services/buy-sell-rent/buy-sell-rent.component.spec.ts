import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellRentComponent } from './buy-sell-rent.component';

describe('BuySellRentComponent', () => {
  let component: BuySellRentComponent;
  let fixture: ComponentFixture<BuySellRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuySellRentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuySellRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
