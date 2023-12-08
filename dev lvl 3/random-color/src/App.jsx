import React from 'react'
import './App.css'
import axios from'axios'

function App() {
  const [random, setRandom] = React.useState({colors: [{tags:[{name: "red"}]}]})
  const [count, setCount] = React.useState(1)
async function getColors() {
      const res = await fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      const data = await res.json()
      console.log(data)
      setRandom(data)
    }
    const getData = async () => {
      try { 
      const response = await axios.get(`https://www.colr.org/json/color/random`)
      // const data = await response.json()
      console.log(response)
      setRandom(response)
    }
    catch( error ) {
      console.log(error)
    }
    }
  // React.useEffect(function() {
  //   console.log("Effect ran")
  //   // console.log(random.colors[0].tags.name)
    
  //   getColors()
  // }, [count])

function handleClick() {
  getColors()
}

console.log(JSON.stringify(random, null, 2))

  return (
    <div className="App">
      <pre>{random.colors[0].tags[0].name}</pre>
      <button style={{backgroundColor: `#${random.colors[0].hex}`}} onClick={getData}>Randomize</button>
    </div>
  )
}

export default App
