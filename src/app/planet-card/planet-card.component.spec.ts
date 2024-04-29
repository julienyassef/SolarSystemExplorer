import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetCardComponent } from './planet-card.component';

describe('PlanetCardComponent', () => {
  let component: PlanetCardComponent;
  let fixture: ComponentFixture<PlanetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
