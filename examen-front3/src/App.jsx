import { useState } from 'react'
import './App.css'
import Card from './componentes/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <h2>Front end 3</h2>
      <form></form>
      <Card/>
    </div>
  )
}

export default App
