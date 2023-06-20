import React, { useContext, useState } from 'react'
import './App.css'
import Header from './assets/Header'
import {UglyContext, UglyContextProvider} from './assets/UglyContext'
import Body from './assets/Body'

function App() {

  const {
    uglyThing,
    uglyArray,
    handleChange
  } = useContext(UglyContext)

  const uglyList = uglyArray.map((item, i) => {
    return <Body 
            key={i}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            id={item._id}
          />
  })

  return (
    <div className="App">
      <Header />
      {uglyList}
    </div>
  )
}

export default App