import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlanetsPictureComponent } from './display-planets-picture.component';

describe('DisplayPlanetsPictureComponent', () => {
  let component: DisplayPlanetsPictureComponent;
  let fixture: ComponentFixture<DisplayPlanetsPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPlanetsPictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPlanetsPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
