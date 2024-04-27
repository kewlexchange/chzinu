import Navbar from './components/Navbar.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import FooterSection from './components/sections/FooterSection.jsx';
import HomeSection from './components/sections/HomeSection.jsx';
import TeamSection from './components/sections/TeamSection.jsx';
import TokenomicsSection from './components/sections/TokenomicsSection.jsx';
import { StyledAppContainer } from './components/styledComponents/Containers.jsx'


export default function App() {
    // const matcapTexture = useMatcapTexture("3E2335_D36A1B_8E4A2E_2842A5");
    // const textRef = useRef();


    return (
        <StyledAppContainer>
            <Navbar/>
            <HomeSection/>
            <TeamSection/>
            <TokenomicsSection/>
            <AboutSection/>
            <FooterSection/>
        </StyledAppContainer>
    );
}




// <Canvas
// camera={ {
//     fov: 45,
//     near: 0.1,
//     far: 200,
//     position: [ 0, 0, 6 ]
// } }
// // onCreated={created}

// >
// <Experience />
// </Canvas>
// <Center>
// <Text3D
//     ref={textRef}
//     position={[0, 0, 1]}
//     size={0.75}
//     height={0.2}
//     curveSegments={12}
//     bevelEnabled
//     bevelThickness={0.02}
//     bevelOffset={0}
//     bevelSize={0.02}
//     bevelSegments={5}
//     font="./fonts/helvetiker_regular.typeface.json"
    
// >
//     CHZ INU
//     <meshMatcapMaterial matcap={matcapTexture[0]} />
// </Text3D>
// </Center>
// <CoinRain/>