import { useRef, useEffect } from 'react'

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();
    }, [])

    useFrame(({ clock, camera }) => {
      // Update the Y position simulate the flight moving in a sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2
    })

  return (
    <mesh 
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
      ref={birdRef}
      >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird