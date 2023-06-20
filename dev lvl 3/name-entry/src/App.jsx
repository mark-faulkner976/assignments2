import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [name, setName] = useState({username: ""})

  function handleSubmit(username) {
    setList(prevList => {
      return [
        ...prevList,
        username
      ]
    })
    name.username = ""
  }

  function handleChange(event) {
    const {name, value} = event.target
    setName(prevName => {
        return {
            ...prevName,
            [name]: value
          }
    })
}

  return (
    <div className="App">
        <input onChange={handleChange} type="text" placeholder='Name' name='username' value={name.username}/>
        <h1>{name.username}</h1>
        <button onClick={() => handleSubmit(name.username)}>Submit</button>
        <ol>
          {list.map((name, index) => {
            return (
              <li key={index}>
                {name}
              </li>
            )
          })}

        </ol>
    </div>
  )
}

export default App