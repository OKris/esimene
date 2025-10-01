import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Luuletus from './Luuletus'
import Pilt from './assets/pilt1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Poeem</h1>
    <Luuletus />
    <img className='esipilt' src={Pilt} />
    </>
  )
}

export default App
