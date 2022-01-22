import * as THREE from 'three'
import React, {useRef, useState} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import ResizeObserver from 'resize-observer-polyfill';


function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1.5}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshStandardMaterial color={clicked ? 'red' : hovered ? 'hotpink' : 'orange'}/>
    </mesh>
  )
}

const ThreeBox = () => {
  return (
    <Canvas
      resize={{polyfill: ResizeObserver}}
      style={{height: 300, width: 300}}
      className={'m-auto bg-white mt-9 transition-transform cursor-pointer hover:shadow-xl hover:scale-110'}
    >
      <ambientLight/>
      <pointLight position={[10, 10, 10]}/>
      <Box position={[0, 0, 0]}/>
    </Canvas>
  )
}


const ThreeCompare = () => {
  return (
    <div className={'flex'}>
      <div className={'flex-auto'}>
        <ThreeBox/>
      </div>
      <div className={'flex-auto'}>
        <ThreeBox/>
      </div>
    </div>
  )
}

export default ThreeCompare