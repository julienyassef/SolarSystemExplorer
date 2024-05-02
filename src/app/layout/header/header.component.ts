import { Component,  HostListener  } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NightStarAnimationComponent } from '../../components/night-star-animation/night-star-animation.component';
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
  headerClass: string = '';
  hasScrolled = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && 'url' in event) {  
        this.showNightAnimation = !event.url.includes('/planets') ;
        this.headerClass = event.url.includes('/planets') ? 'page-planets-background' : ''
      }
    });
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    this.hasScrolled = yOffset > 10;
  }
}
