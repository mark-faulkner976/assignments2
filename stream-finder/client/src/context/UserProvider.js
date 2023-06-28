import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

const services = {
    method: "GET",
    url: 'https://streaming-availability.p.rapidapi.com/v2/services',
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
}

const genres = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/genres',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
// useEffect( () => {

// })

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    favorites: [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)


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
        // getUserTodos()
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

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        resetAuthErr
      }}>
      { props.children }
    </UserContext.Provider>
  )
}