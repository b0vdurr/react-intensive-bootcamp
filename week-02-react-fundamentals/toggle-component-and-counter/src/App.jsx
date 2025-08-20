import { useState } from 'react'
import Counter from './components/Counter.jsx'

function App() {
  const [visible, setVisibility] = useState(true)
  function toggle() {
    setVisibility(!visible)
  }
  return (
      <div>
        <button onClick={toggle}>{visible ? ('Hide counter') : ('Show counter')}</button>
        <div style={{display: visible ? 'block' : 'none'}}>
          <Counter />
        </div>
      </div>
  )
}

export default App
