import { useState, useRef, useEffect } from 'react';
import { Center, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Coin from './components/Coin';
import CoinRain from './components/CoinRain';

export default function Experience() {
    const matcapTexture = useMatcapTexture("3E2335_D36A1B_8E4A2E_2842A5");
    const textRef = useRef();


    return (
        <>
            <Center>
                <Text3D
                    ref={textRef}
                    position={[0, 0, 1]}
                    size={0.75}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelOffset={0}
                    bevelSize={0.02}
                    bevelSegments={5}
                    font="./fonts/helvetiker_regular.typeface.json"
                >
                    CHZ INU
                    <meshMatcapMaterial matcap={matcapTexture[0]} />
                </Text3D>
            </Center>
            <CoinRain/>
        </>
    );
}