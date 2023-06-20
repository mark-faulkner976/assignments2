import { useState } from 'react'
import './App.css'
import Badge from "./assets/Badge"

function App() {
  const [badge, setBadge] = useState([])
  const [info, setInfo] = useState(
      {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthPlace: "",
        favFood: "",
        personal: ""
      }
  )

  function handleChange(event) {
    const {name, value} = event.target
    setInfo(prevName => {
        return {
            ...prevName,
            [name]: value
          }
    })
  }

  console.log(info)

  function handleClick(firstName, lastName, phone, email, birthPlace, favFood, personal) {
    console.log("i work")
    setBadge(prevBadge => {
      return [
        ...prevBadge,
        {
          firstName,
          lastName,
          phone, 
          email,
          favFood,
          birthPlace,
          personal
        }
      ]
    })

    info.firstName = ""
    info.lastName = ""
    info.phone = ""
    info.email = ""
    info.favFood = ""
    info.birthPlace = ""
    info.personal = ""
  }

  console.log(badge)

  const badges = badge.map((person, index)=> {
    return (
      <Badge 
        key= {index}
        firstName= {person.firstName}
        lastName= {person.lastName}
        phone= {person.phone}
        email= {person.email}
        birth= {person.birthPlace}
        food= {person.favFood}
        info= {person.personal}
      />
    )
  })
  function offButton() {
    if((info.firstName.length && info.lastName.length && info.phone.length && info.email.length && info.favFood.length && info.birthPlace.length && info.personal.length) < 3 ){
      return false
    } else if(info.phone.valueOf > 0) {
      return false
    } else {
      return true
    }
  }
  return (
    <div className="App">
      <div className='outline'>
        <form>
          <input type="text" id='first' required className='first' name='firstName' placeholder='First Name' value={info.firstName} onChange={handleChange} />
          <input type="text" required className='last' name='lastName' placeholder='Last Name' value={info.lastName} onChange={handleChange} />
          <input type="text" className='email' name='email' placeholder='Email' value={info.email} onChange={handleChange} />
          <input type="text" className='birth' name='birthPlace' placeholder='Place of Birth' value={info.birthPlace} onChange={handleChange} />
          <input type="text" className='phone' name='phone' placeholder='Phone' value={info.phone} onChange={handleChange} />
          <input type="text" className='food' name='favFood' placeholder='Favorite Food' value={info.favFood} onChange={handleChange} />
          <textarea placeholder='Tell us about yourself' className='box' name='personal' value={info.personal} onChange={handleChange} />
          <button className='button' type='button' onClick={() => handleClick(
            info.firstName, 
            info.lastName, 
            info.phone, 
            info.email, 
            info.birthPlace, 
            info.favFood, 
            info.personal)} 
            disabled={(info.firstName.length && info.lastName.length && /^\d+$/.test(info.phone) && info.email.length && info.favFood.length && info.birthPlace.length && info.personal.length) < 3 ? true : false}
            >Submit</button>
        </form>
      </div>
      <div>
        {badges}
      </div>
    </div>
  )
  
}

export default App
