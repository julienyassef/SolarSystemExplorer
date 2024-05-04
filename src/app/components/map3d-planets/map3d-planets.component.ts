import { Component, OnInit, Input, ElementRef, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map3d-planets',
  standalone: true,
  imports: [],
  templateUrl: './map3d-planets.component.html',
  styleUrl: './map3d-planets.component.scss'
})

export class Map3dPlanetsComponent implements OnInit, OnDestroy {
  
  @Input() textureUrl!: string;
  private renderer: THREE.WebGLRenderer | undefined;
  private scene: THREE.Scene | undefined;
  private camera: THREE.PerspectiveCamera | undefined;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true, // Active l'anti-aliasing, bien pour la qualité visuelle
        alpha: true,     // Permet la transparence du fond
        powerPreference: "high-performance" // Indique une préférence pour les performances élevées
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.el.nativeElement.appendChild(this.renderer.domElement);

      this.initScene();
      this.animate();
    }
  }

  initScene(): void {
    if (this.renderer && this.scene && this.camera) {
      const textureLoader = new THREE.TextureLoader();
      const planetTexture = textureLoader.load(this.textureUrl);
    


      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ map: planetTexture });
      const planet = new THREE.Mesh(geometry, material);
      this.scene.add(planet);
      this.camera.position.z = 2;
    }
  }

  animate = () => {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(this.animate);
      if (this.scene && this.scene.children.length > 0) {
        this.scene.children[0].rotation.y += 0.002;
        if (this.renderer && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.renderer) {
      this.el.nativeElement.removeChild(this.renderer.domElement);
    }
  }
}