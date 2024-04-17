import './App.css'
import * as THREE from 'three'
import { StyledPageContentContainer } from './components/styledComponents/Containers'
import Experience from './components/Experience'
import { Canvas } from '@react-three/fiber'


const created = ({scene}) => {
    scene.background = new THREE.Color('red')
}

function App (){
  return(
    <StyledPageContentContainer>
      <Canvas
          camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 0, 0, 6 ]
          } }    
      >
      </Canvas>
    </StyledPageContentContainer>
)
}

export default App