import { useState } from 'react'
import './App.css'
import OffscreenKeepAlive from './components/KeepLive/KeepAlive'
import { Counter } from './components/Counter/Counter'

function App() {
  const [activeCounter, setActiveCounter] = useState<'A' | 'B'>('A')

  return (
    <div>
      <button onClick={() => setActiveCounter(prev => prev === 'A' ? 'B' : 'A')}>
        Toggle Component ({activeCounter})
      </button>
      <OffscreenKeepAlive active={activeCounter === 'A'}>
        <Counter name="A" />
      </OffscreenKeepAlive>
      <OffscreenKeepAlive active={activeCounter === 'B'}>
        <Counter name="B" />
      </OffscreenKeepAlive>
    </div>
  )
}

export default App