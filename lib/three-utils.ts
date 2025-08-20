Certainly! Below is a sample `lib/three-utils.ts` file for a React/TypeScript project that could be used in a luxury FashionTV cosmetics website. This file includes utility functions that might be useful for handling 3D models or animations using the `three.js` library.

```typescript
// lib/three-utils.ts

import * as THREE from 'three';

/**
 * Creates a basic scene with a camera and renderer.
 * @param container - The HTML element to attach the renderer to.
 * @returns An object containing the scene, camera, and renderer.
 */
export function createScene(container: HTMLElement): {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
} {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    return { scene, camera, renderer };
}

/**
 * Adds a 3D object to the scene.
 * @param scene - The THREE.Scene to add the object to.
 * @param geometry - The geometry of the object.
 * @param material - The material of the object.
 * @param position - The position of the object in the scene.
 */
export function addObjectToScene(
    scene: THREE.Scene,
    geometry: THREE.Geometry | THREE.BufferGeometry,
    material: THREE.Material,
    position: THREE.Vector3
): void {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    scene.add(mesh);
}

/**
 * Creates a simple material with a color.
 * @param color - The color of the material.
 * @returns A THREE.MeshBasicMaterial with the specified color.
 */
export function createMaterial(color: string): THREE.MeshBasicMaterial {
    return new THREE.MeshBasicMaterial({ color });
}

/**
 * Handles window resize events to adjust the camera and renderer.
 * @param camera - The THREE.PerspectiveCamera to adjust.
 * @param renderer - The THREE.WebGLRenderer to adjust.
 */
export function handleWindowResize(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer): void {
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

/**
 * Animates the scene.
 * @param renderer - The THREE.WebGLRenderer to use for rendering.
 * @param scene - The THREE.Scene to render.
 * @param camera - The THREE.PerspectiveCamera to use for the view.
 */
export function animate(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
    requestAnimationFrame(() => animate(renderer, scene, camera));
    renderer.render(scene, camera);
}
```

### Explanation:
- **createScene**: Initializes a basic 3D scene with a camera and a renderer.
- **addObjectToScene**: Adds a 3D object to the scene using specified geometry and material.
- **createMaterial**: Creates a basic material with a specified color.
- **handleWindowResize**: Adjusts the camera and renderer when the window is resized.
- **animate**: A recursive function that continuously renders the scene.

This utility file can be imported and used in your React components to manage 3D elements effectively.