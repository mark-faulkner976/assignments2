import { useState } from 'react'
import './App.css'
import Square from  './components/Square.jsx'

export default function App() {
  const [colors, setColors] = useState(["white", "red", "black", "green"])

  const color = colors.map(mapColor => {
    return (
      <Square
        color = {mapColor} 
      />
    )
  })

  function blackAndWhite() {
    setColors(prevColor => prevColor[0] === "white" ? ["black", 'black', 'black', 'black'] : ["white", 'white', 'white', 'white']) // adds a bunch of new divs, not sure why
    console.log(colors)
  }

  function purple() {
    setColors( ["purple", "purple", colors[2], colors[3]] )
    console.log(colors)
  }

  function leftBlue() {
    setColors([colors[0], colors[1], "blue", colors[3]])
  }

  function rightBlue() {
    setColors([colors[0], colors[1], colors[2], "blue"])
  }

  function djOne() {
    setColors(["brown", colors[1], colors[2], colors[3]])
  }

  function djTwo() {
    setColors([colors[1], "yellow", colors[2], colors[3]])
  }

  function djThree() {
    setColors( [colors[0], colors[1], "fuchsia", colors[3]])
  }

  function djFour() {
    setColors( [colors[0], colors[1], colors[2], "peru"])
  }

  function makeNoise() {
    const myAudio = document.getElementById("scream")
    if(document.getElementById('scream').play == true) {
      myAudio.pause();
  } else {
      myAudio.play();
  }
  }
  
  return (
    <div className="App">
      {color}
      <button onClick={blackAndWhite}>black and white</button>
      <button onClick={purple}>top purple</button>
      <button onClick={leftBlue}>left blue</button>
      <button onClick={rightBlue}>right blue</button>
      <button onClick={djOne}>Big DJ one</button>
      <button onClick={djTwo}>Big DJ two</button>
      <button onClick={djThree}>Big DJ three</button>
      <button onClick={djFour}>Big DJ four</button>
      <audio id='scream'>
        <source src='https://www.soundjay.com/human/sounds/man-scream-01.mp3' />
      </audio>
      <button id='audio' onClick={makeNoise}>Make Noise!</button> 
    </div>
  )
}