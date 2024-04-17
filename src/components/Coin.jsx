import React, { useEffect, useRef, useState } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Coin = ({position, scale, rotation}) => {
    const meshRef = useRef();
    const coinTexture = useTexture('./coin.jpg');
    const coinRef = useRef()
    const calcRandom = () => Math.random() * 10;


    useFrame((state, delta) =>{
        for(const coin of coinRef.current.children)
        {
            coin.rotation.z += delta * 0.5
            coin.rotation.y += delta * 0.5
        }
        updateCoinsPosition();

    })

    // Función para actualizar la posición de las monedas
    const updateCoinsPosition = () => {
        for(const coin of coinRef.current.children)
        {
            coin.position.y -= 0.005
        }           
    };


    return (
        <group 
            ref={(ref) => (coinRef.current = ref)}
        >
            <mesh ref={meshRef}  position={position} scale={scale}  
            rotation={ rotation}>
                
                <meshMatcapMaterial map={coinTexture} />
            </mesh>

            <mesh  position={position} rotation={rotation} scale={[scale[0], 0.2, scale[2]]}>
                <cylinderGeometry args={[0.51, 0.51, 0.1, 32]} />
                <meshBasicMaterial color="black" />
            </mesh>

        
            <mesh ref={meshRef}  position={position} scale={scale} rotation={rotation} >
                <cylinderGeometry args={[0.5, 0.5, 0.105, 32]} />
                <meshMatcapMaterial map={coinTexture}  />
            </mesh>
        </group>

    );
}

export default Coin