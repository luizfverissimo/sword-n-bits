import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ItemGenerator } from './utils/itensGenerator'
import { CreatureGenerator } from './utils/creatureGenerator'

function App() {
  const [item, setItem] = useState('')
  const [creature, setCreature] = useState('')

  function handleNewItem() {
    const itemCreated = new ItemGenerator(1)
    setItem(`${JSON.stringify(itemCreated)}`)
  }

  function handleNewCreature() {
    const creatureCreated = new CreatureGenerator(1)
    setCreature(`${JSON.stringify(creatureCreated)}`)
  }

  return (
    <div className="App">
      <h1>Olá Mundão</h1>
          {item}
          
          {creature}
      <div className="card">
        <button onClick={handleNewItem}>
          click to generate item
        </button>
        <button onClick={handleNewCreature}>
          click to generate creature
        </button>
      </div>
    </div>
  )
}

export default App
