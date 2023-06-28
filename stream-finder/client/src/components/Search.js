import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Search( props ) {
  const {
    errMsg 
  } = props

  const { searchParams, setSearchParams, searchStreaming } = useContext( UserContext )


  const handleInputChange = ( e ) => {
    const { name, value, type } = e.target

    if( type === "radio" && name === 'show_type' ) {
      setSearchParams( {
        ...searchParams,
        show_type: value === searchParams[name] ? '' : value
      } )
    } else {
      setSearchParams( {
        ...searchParams,
        [ name ]: value
      } )
    }
  }

  const handleSearch = ( e ) => {
    e.preventDefault()
    searchStreaming()
  }
  
  return (
    <form onSubmit={ handleSearch }>

      <h1>Search for a show and see where it's streaming!</h1>

      <input 
        type="text" 
        value={ searchParams.title } 
        name="title" 
        onChange={ handleInputChange } 
        placeholder="Title of Movie or Show"/>

      <select name='output_language' value={ searchParams.output_language } id='language' onChange={ handleInputChange }>
        <option value="en">Select Language</option>
        <option value='en' >English</option>
        <option value='es' >Spanish</option>
        <option value='zh' >Chinese</option>
      </select>

      <input 
      type="radio" 
      id='movie' 
      name='show_type' 
      value="movie" 
      checked={ searchParams.show_type === 'movie' } 
      onChange={ handleInputChange } /> Movie

      <input 
      type="radio" 
      id='series' 
      name='show_type' 
      value='series' 
      checked={ searchParams.show_type === 'series' } 
      onChange={ handleInputChange } /> TV Series
      <button>Search</button>
      <p style={ { color: "red" } }>{ errMsg }</p>
    </form>
  )
}