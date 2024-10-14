import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricServiceComponent } from './electric-service.component';

describe('ElectricServiceComponent', () => {
  let component: ElectricServiceComponent;
  let fixture: ComponentFixture<ElectricServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
