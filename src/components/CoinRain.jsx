import { useEffect, useRef, useState } from "react";
import Coin from "./Coin";

const CoinRain = () => {
    const [coins, setCoins] = useState([]);
    const calcRandom = () => (Math.random(0.5) - 0.5) * 12

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
            {coins.map((coin) => (
                <Coin
                    key={coin.key}
                    position={coin.position}
                    scale={coin.scale}
                    rotation={coin.rotation}
                />
            ))}
        </>
    );
};

export default CoinRain;