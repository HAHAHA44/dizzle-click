import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {greet, dazzle} from '../../dist/index'
import '../../dist/index.css'

function App() {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null);

  useEffect(() => {
    console.log(greet(count+""))
    
  }, [count])

  const handleClick = () => {
    if (elementRef.current) {
      dazzle(elementRef.current)
    }
    setCount((count) => count + 1)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={elementRef} onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
