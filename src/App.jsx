import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [color, setColor] = useState('#ffffff');

  const generateColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor(`#${randomColor}`);
  };

  return (
    <div>
      <button onClick={generateColor}>Generate a Color</button>
      <h1 style={{color: color}}>Color Hex: {color}</h1>
    </div>
  )
}

export default App
