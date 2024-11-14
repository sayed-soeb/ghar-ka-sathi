import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingServiceComponent } from './plumbing-service.component';

describe('PlumbingServiceComponent', () => {
  let component: PlumbingServiceComponent;
  let fixture: ComponentFixture<PlumbingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlumbingServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlumbingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
