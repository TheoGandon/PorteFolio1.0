import * as THREE from 'three';
import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei';
import Scene3dHtml from './Scene3dHtml.js';
import '../css/Scene3d.css';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


function Model(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF('/mac-draco.glb');
  const [isAnimating, setIsAnimating] = useState(false);
  const groupRef = useRef();
  const navigate = useNavigate();

  const handleNavigation = () => {
    setTimeout(() => {
      setIsAnimating(true);
    }, 1000);
    setTimeout(() => {
      navigate('/presentation');
      console.log('navigating');
    }, 6000);
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.02);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.02);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.02);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.02);

    if (isAnimating) {
      if (groupRef.current) {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, Math.PI / -0.6, 0.02);
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x,0, 0.02);
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y,2.6, 0.02);
        groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z,-1.6, 0.02);
    }
    }
  });

  return (
    <group ref={group} {...props} dispose={null} onClick={handleNavigation}>
      <Html className='title'><h1>Cliquer sur l'ordinateur pour l'ouvrir</h1></Html>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group ref={groupRef} position={[0, -1.1, 2.75]} rotation={[Math.PI / -1.15, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                  <Scene3dHtml />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}

function Scene3d() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const cameraPosition = isMobile ? [0, 15, -25] : [-5, 0, -15];
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0 }} camera={{ position: cameraPosition, fov: 55 }} gl={{ logarithmicDepthBuffer: true }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  );
}

export default Scene3d;