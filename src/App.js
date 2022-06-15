import { Suspense } from 'react'
import './App.css';
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Shoes from './components/models/Shoes';

function App() {
  
  return (
    <>
    <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
      <ambientLight intensity={0.3} />
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
      <Suspense fallback={null}>
        <Shoes />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
    </Canvas>
  </>
  )

}

export default App;
