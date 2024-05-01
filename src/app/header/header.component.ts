import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NightStarAnimationComponent } from '../night-star-animation/night-star-animation.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NightStarAnimationComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showNightAnimation: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && 'url' in event) {  
        this.showNightAnimation = !event.url.includes('/planets');
      }
    });
  }

  ngOnInit(): void {
  }
}
