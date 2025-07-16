import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import SplashCursor from './components/SplashCursor'
import Lanyard from './components/Lanyard'
import HomePage from './pages/HomePage'
import Squares from './components/Squares'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
    {/* <Footer/> */}
      {/* <SplashCursor /> */}
    {/* </HomePage> */}
      
      {/* <div class="position-relative">
        <div style={{position: 'absolute', left: '55%', top: '-120px', width: '40%'}}>
        <Lanyard position={[0, 0, 20]} gravity={[0, -50, 0]} scale={[10, 2, 2]} />
        </div>
      </div> */}


    </>
  )
}

export default App
