import { useState } from 'react'
import './App.css'

function App() {


  const sortedList = [...count].map( item => <List  />)

  return (
    <>
      <div>
        {sortedList}
        <button>ascend</button>
        <button>descend</button>
      </div>
    </>
  )
}

export default App