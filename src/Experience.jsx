import { useState, useRef, useEffect } from 'react';
import { Center, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Coin from './components/Coin';

export default function Experience() {
    const matcapTexture = useMatcapTexture("3E2335_D36A1B_8E4A2E_2842A5");
    const textRef = useRef();
    const [coins, setCoins] = useState([]);
    const calcRandom = () => (Math.random(0.5) - 0.5) * 12

    // Genera las monedas si aún no están definidas
    useEffect(() => {
        if (coins.length === 0) {
            const newCoins = [...Array(200)].map((_, index) => ({
                key: index,
                position: [
                    calcRandom(),
                    calcRandom(),
                    -1
                ],
                scale: [0.5, 0.2, 0.5],
                rotation: [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ],
            }));
            setCoins(newCoins);
        }
    }, [coins.length]);

    return (
        <>
            {/* <Perf position="top-left" /> */}

            {/* <OrbitControls makeDefault /> */}

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
            {coins.map(coin => (
                <Coin
                    key={coin.key}
                    position={coin.position}
                    scale={coin.scale}
                    rotation={coin.rotation}
                />
            ))}
        </>
    );
}