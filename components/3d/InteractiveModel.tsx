'use client';

Here's a sample implementation of an `InteractiveModel.tsx` component for a luxury FashionTV cosmetics website. This component uses React and TypeScript, and it assumes you have a 3D model viewer library like `react-three-fiber` or similar to render 3D models interactively.

// components/3d/InteractiveModel.tsx

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

interface InteractiveModelProps {
  modelPath: string;
}

const InteractiveModel: React.FC<InteractiveModelProps> = ({ modelPath }) => {
  const modelRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0, 0);
      modelRef.current.rotation.set(0, Math.PI, 0); // Adjust rotation if needed
    }
  }, [gltf]);

  return (
    <Canvas style={{ height: '500px', width: '100%', background: 'white' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive object={gltf.scene} ref={modelRef} />
      <OrbitControls />
    </Canvas>
  );
};

export default InteractiveModel;

### Explanation:
- **Imports**: The component imports necessary modules from React, `@react-three/fiber`, and `three` for 3D rendering.
- **Props**: The `InteractiveModel` component takes a `modelPath` prop, which is the path to the 3D model file (in GLTF format).
- **Canvas**: The `Canvas` component from `@react-three/fiber` is used to create a 3D scene.
- **Lighting**: Ambient and directional lights are added to illuminate the model.
- **Model Loading**: The model is loaded using the `GLTFLoader`, and the model's position and rotation can be adjusted as needed.
- **OrbitControls**: This allows users to interact with the model by rotating, zooming, and panning.

### Usage:
To use this component, you would import it and provide the path to your 3D model:

import InteractiveModel from './components/3d/InteractiveModel';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f8d3e0', padding: '20px' }}>
      <h1 style={{ color: '#fff' }}>Luxury FashionTV Cosmetics</h1>
      <InteractiveModel modelPath="/path/to/your/model.glb" />
    </div>
  );
};

export default App;

Make sure to replace `"/path/to/your/model.glb"` with the actual path to your 3D model file. Adjust the styles as necessary to fit your elegant and high-end design vision.