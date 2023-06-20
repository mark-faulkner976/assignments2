import { useState } from 'react'
import data from './data'
import './App.css'
import Spot from './components/Spot'
import Header from './components/Header'

export default function App() {
  const spots = data.map(spot => {
    return ( 
      <Spot
      key = {spot.place}
      place = {spot.place}
      price = {spot.price}
      time = {spot.timeToGo}
      img = {spot.img}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {spots}
    </div>
  )
}

