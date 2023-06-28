import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

const genres = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/genres',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  }

const imdbId = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/v2/get/basic',
  params: {
    country: 'us',
    imdb_id: 'tt1877830',
    output_language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
}

const titleSearch = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
    params: {
      title: 'justice league',
      country: 'us',
      // show_type: 'movie',
      output_language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  }

try {
	const response = await axios.request( titleSearch )
	console.log(response.data)
} catch (error) {
	console.error(error)
}

export default function UserProvider({ children }) {
  const initUserState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    favorites: [],
    errMsg: ""
  }
  // sets user state to blank unless they are logged in
  const [userState, setUserState] = useState(initUserState)


  // signup
  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthError(err.response.data.errMsg))
  }

  // login
  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        // getUserTodos() change to get userShows or something
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthError(err.response.data.errMsg))
  }

  // logout
  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      todos: []
    })
  }

  // handle error
  function handleAuthError( errMsg ) {
    setUserState( prevState => ( {
      ...prevState,
      errMsg
    } ) )
  }

  function resetAuthErr() {
    setUserState( prevState => ( {
      ...prevState,
      errMsg: ""
    } ) )
  }

  // change to a get user favorites
//   function getUserTodos(){
//     userAxios.get("/api/todo/user")
//       .then(res => {
//         setUserState(prevState => ({
//           ...prevState,
//           todos: res.data
//         }))
//       })
//       .catch(err => console.log(err.response.data.errMsg))
//   }


  // change to an add user favorites
//   function addTodo(newTodo){
//     userAxios.post("/api/todo", newTodo)
//       .then(res => {
//         setUserState(prevState => ({
//           ...prevState,
//           todos: [...prevState.todos, res.data]
//         }))
//       })
//       .catch(err => console.log(err.response.data.errMsg))
//   }

  

// setting up the search functionality

  //makes a new state for the search params
  const [ searchParams, setSearchParams ] = useState( {
    title: '',
    show_type: '',
    output_language: '',
    country: 'us'
  } )
  //sets a state for the search parameters
  const [ searchResults, setSearchResults ] = useState([])

  // api call with protected variable
  const searchStreaming = async () => {
      try {
          const response = await axios.get( 'https://streaming-availability.p.rapidapi.com/v2/search/title', {
              params: searchParams,
              headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                  'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
                },
          } )
          setSearchResults( response.data ) 
      } catch ( err ) {
        console.log( err.response.data.errMsg )
      }
  }

  console.log( "SearchParams: ", searchParams )
  console.log( "Search Results:", searchResults )

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        resetAuthErr,
        searchParams,
        setSearchParams,
        searchStreaming,
        searchResults
      }}>
      { children }
    </UserContext.Provider>
  )
}