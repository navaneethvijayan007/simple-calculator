import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalcBody from './CalcBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalcBody/>
    </>
  )
}

export default App