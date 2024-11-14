import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingServiceComponent } from './painting-service.component';

describe('PaintingServiceComponent', () => {
  let component: PaintingServiceComponent;
  let fixture: ComponentFixture<PaintingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintingServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaintingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
