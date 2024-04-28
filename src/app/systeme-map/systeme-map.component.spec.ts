import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemeMapComponent } from './systeme-map.component';

describe('SystemeMapComponent', () => {
  let component: SystemeMapComponent;
  let fixture: ComponentFixture<SystemeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemeMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
