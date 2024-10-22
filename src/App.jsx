import React, { useState } from 'react'

const App = () => {


  const [a, setA] = useState(10)
  const change = () => {
    setA (20);
  }

  return (
    <div>
      <h1>a = {a}</h1>
      <button onClick={change}>change</button>
    </div>
  )
}

export default App