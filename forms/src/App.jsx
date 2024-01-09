import { useState } from 'react'
import Forms from './Components/Forms'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Forms/>
    </>
  )
}

export default App
