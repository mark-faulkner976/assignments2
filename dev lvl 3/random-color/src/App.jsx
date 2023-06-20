import React from 'react'
import './App.css'

function App() {
  const [random, setRandom] = React.useState({colors: [{tags:[{name: "red"}]}]})
  const [count, setCount] = React.useState(1)

  React.useEffect(function() {
    console.log("Effect ran")
    // console.log(random.colors[0].tags.name)
    async function getColors() {
      const res = await fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      const data = await res.json()
      setRandom(data)
    }
    getColors()
  }, [count])

function handleClick() {
  setCount(prevCount => prevCount + 1)
}

console.log(JSON.stringify(random, null, 2))

  return (
    <div className="App">
      <pre>{random.colors[0].tags[0].name}</pre>
      <button style={{backgroundColor: `#${random.colors[0].hex}`}} onClick={handleClick}>Randomize</button>
    </div>
  )
}

export default App
