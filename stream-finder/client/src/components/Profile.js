import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import Search from './Search.js'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    favorites 
  } = useContext( UserContext )

  // const [inputs, setInputs] = useState(initInputs)
  // const [toggle, setToggle] = useState(false)

  // const { signup, login, errMsg, resetAuthErr } = useContext( UserContext )
  // function handleChange(e){
  //   const { name, value } = e.target
  //   setInputs(prevInputs => ({
  //     ...prevInputs,
  //     [name]: value
  //   }))
  // }

  return (
    <div className="profile">
      <h1>Welcome Magnanimous {username}!</h1>
      <h2>Search for a show!</h2>
      {/* <Search /> */}
      <h3>Your favorited shows</h3>
    </div>
  )
}