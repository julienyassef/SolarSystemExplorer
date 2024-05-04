import { Component, OnInit, OnChanges, SimpleChanges, Input, ElementRef, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map3d-planets',
  standalone: true,
  imports: [],
  templateUrl: './map3d-planets.component.html',
  styleUrl: './map3d-planets.component.scss'
})

export class Map3dPlanetsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() textureUrl!: string;
  private renderer: THREE.WebGLRenderer | undefined;
  private scene: THREE.Scene | undefined;
  private camera: THREE.PerspectiveCamera | undefined;
  private planetMesh: THREE.Mesh | undefined;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeRenderer();
      this.initScene();
      this.animate();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textureUrl'] && this.planetMesh) {
      if (changes['textureUrl'].currentValue) {
        this.updateTexture(changes['textureUrl'].currentValue);
      }
    }
    
  }

  initializeRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.el.nativeElement.appendChild(this.renderer.domElement);
  
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 2;
  }

  initScene(): void {
    if (this.renderer && this.scene && this.camera) {
      const textureLoader = new THREE.TextureLoader();
      const planetTexture = textureLoader.load(this.textureUrl);
  
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ map: planetTexture });
      this.planetMesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.planetMesh);
    }
  }

  updateTexture(url: string): void {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(url, texture => {
      if (this.planetMesh) {
        (this.planetMesh.material as THREE.MeshBasicMaterial).map = texture;
        (this.planetMesh.material as THREE.MeshBasicMaterial).needsUpdate = true;
      }
    });
  }

  
animate = (): void => {
  if (isPlatformBrowser(this.platformId)) {
    requestAnimationFrame(this.animate);
    if (this.scene && this.planetMesh && this.renderer && this.camera) {
      this.planetMesh.rotation.y += 0.002;
      this.renderer.render(this.scene, this.camera);
    }
  }
}

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.renderer) {
      this.renderer.dispose();
      this.el.nativeElement.removeChild(this.renderer.domElement);
    }
  }
}