import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightStarAnimationComponent } from './night-star-animation.component';

describe('NightStarAnimationComponent', () => {
  let component: NightStarAnimationComponent;
  let fixture: ComponentFixture<NightStarAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightStarAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NightStarAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
