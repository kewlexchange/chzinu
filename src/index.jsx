import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const created = ({scene}) => {
    scene.background = new THREE.Color('red')
}

root.render(
    <div style={{ width: '100%', height: '100vh', overflowY: 'scroll',
    background: 'linear-gradient(to bottom, #8B0000, #000000)'
}}>

    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 0, 6 ]
        } }
        // onCreated={created}
        
        >
        <Experience />
    </Canvas>
    <div>
            <h1>asd</h1>
            </div>
    </div>
)