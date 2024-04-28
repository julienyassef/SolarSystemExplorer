import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsCardsComponent } from './planets-cards.component';

describe('PlanetsCardsComponent', () => {
  let component: PlanetsCardsComponent;
  let fixture: ComponentFixture<PlanetsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
