import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Forest from '../public/forest/Forest.jsx'
import Bee from '../public/bee/Bee.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='background'>
      <Canvas className='forest' camera={ {position: [0, 3, 6], fov:50 }}>
        <ambientLight />
        <OrbitControls enableDamping={true} />
        <Suspense fallback={null}>
          <Bee />
          <Forest />
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
    </div>
    
    </>
    
    
  )
}

export default App
