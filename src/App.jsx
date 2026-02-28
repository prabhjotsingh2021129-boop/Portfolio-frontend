import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactFormComponent from './components/ContactFormComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>My Portfolio</h1>
     <ContactFormComponent />
    </>
  )
}

export default App
