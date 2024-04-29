import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-map3d-planets',
  standalone: true,
  imports: [],
  templateUrl: './map3d-planets.component.html',
  styleUrl: './map3d-planets.component.scss'
})

export class Map3dPlanetsComponent implements OnInit, OnDestroy {
  
  @Input() textureUrl!: string;
  private renderer = new THREE.WebGLRenderer({ antialias: true });
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.el.nativeElement.appendChild(this.renderer.domElement);
    this.initScene();
    this.animate();
  }

  initScene(): void {
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load(this.textureUrl);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: planetTexture });
    const planet = new THREE.Mesh(geometry, material);
    this.scene.add(planet);
    this.camera.position.z = 2;
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.scene.children[0].rotation.y += 0.002;
    this.renderer.render(this.scene, this.camera);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.removeChild(this.renderer.domElement);
  }
}