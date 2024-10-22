import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  return (
    <div>
      <h3>Number is {num} </h3>
      <button onClick={function () {
        setNum(num + 1);
      }} >Increase</button>
      <button onClick={function () {
        setNum(num - 1);
      }} >Decrease</button>
    </div>
  )
}

export default App