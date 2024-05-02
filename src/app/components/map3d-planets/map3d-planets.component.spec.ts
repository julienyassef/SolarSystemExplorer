import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map3dPlanetsComponent } from './map3d-planets.component';

describe('Map3dPlanetsComponent', () => {
  let component: Map3dPlanetsComponent;
  let fixture: ComponentFixture<Map3dPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Map3dPlanetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Map3dPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
