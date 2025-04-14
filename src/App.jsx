import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo.gif'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://emdsys.com/" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1> EMD Systems Software  </h1>
      <div className="card">
     
        <p>
          Sample React App in a CI/CD Deployment 
        </p>
      </div>
      <p className="read-the-docs">
        By Lourdez Parker
      </p>
    </>
  )
}

export default App
