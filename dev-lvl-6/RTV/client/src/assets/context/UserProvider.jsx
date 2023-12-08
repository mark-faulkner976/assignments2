import React, { useState } from "react";
import axios from 'axios'
export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = { 
        user: JSON.parse( localStorage.getItem( "user" ) ) || {}, 
        token: localStorage.getItem( "token" ) || "", 
        issues: []
    }

    const [ comments, setComments ] = useState( [] )

    const [ userState, setUserState ] = useState( initState )

    function signup( credentials ) {
        axios.post( "/auth/signup", credentials) 
            .then( res => {
                const { user, token } = res.data
                localStorage.setItem( "token" , token )
                localStorage.setItem( "user", JSON.stringify( user ) )
                setUserState( prevUserState => ( { 
                    ...prevUserState,
                    user,
                    token
                } ) ) } )
            .catch( err => console.log( err.response.data.errMsg ) )
    }

    function login( credentials ) {
        axios.post( "/auth/login", credentials) 
            .then( res => {
                const { user, token } = res.data
                localStorage.setItem( "token" , token )
                localStorage.setItem( "user", JSON.stringify( user ) )
                getUserIssues()
                setUserState( prevUserState => ( { 
                    ...prevUserState,
                    user,
                    token
                }))
            } )
            .catch( err => console.log( err.response.data ) )
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState( {
            user: {},
            token: "",
            issues: []
        } )
      }

   
    // add an issue
    function addIssue( newIssue ) {
        userAxios.post( "/api/issue", newIssue ) 
            .then( res => {
                setUserState( prevState => ( {
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                } ) )
            } )
            .catch( err => console.log( err.response.data.errMsg ) )
      }

    // get all issues
    function getAllIssues() {
        userAxios.get("/api/issue")
            .then(res => setUserState( prevState => ( {
                ...prevState,
                issues: res.data
            } ) ) )
            .catch(err => console.log(err.res.data.errMsg))
    }


    // GET USER ISSUES
    function getUserIssues() {
        userAxios.get('/api/issue/user')
            .then(res => setUserState(prevState => ({
                ...prevState,
                issues: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // GET ALL COMMENTS
    function getAllComments() {
        userAxios.get(`/api/comment`)
        .then(res => setComments(
            res.data
        ))
            .catch(err => console.log(err.response.data.errMsg))
        }
        
    //GET ISSUE BY ID
    function getIssueById(issueId) {
        userAxios.get(`/api/issue/${issueId}`)
            .then(res => setUserState(prevState => ({
                ...prevState,
                currentIssue: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // ADD A COMMENT
    function addComment( newComment, issueId ) {
        // userAxios.post(`/api/issue/${issueId}/comments`, newComment)
        userAxios.post(`/api/comment/new/${issueId}`, newComment)
            .then(res => setComments(prevState => ([
                ...prevState,
                res.data
            ])))
            .catch(err => console.log( err.response.data.errMsg ) )
            return getAllComments()
    }

    

    // EDIT ISSUE
    function editIssue(updates, issueId) {
        userAxios.put(`/api/issue/${issueId}`, updates)
            .then(res => 
                setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => 
                    issue._id !== issueId ? issue : res.data)}))
                )
            .catch(err => console.log(err))
            // return getUserIssues()
    }
    

    // DELETE ISSUE
    function deleteIssue( issueId ) {
        userAxios.delete( `/api/issue/${issueId}` )
            .then(res => setUserState( prevState => ({
                ...prevState,
                issues: prevState.issues.filter( issue => issue._id !== issueId )
            } ) ) )
            .catch( err => console.log( err ) )
            // return getUserIssues()
    }

    // DELETE comment
    function deleteComment( commentId ) {
        userAxios.delete( `/api/comment/${commentId}` )
            .then(res => setComments( prevState => (
                [ ...prevState,
                prevState.filter( comment => comment._id !== commentId ) ]
             ) ) )
            .catch( err => console.log( err ) )
    }

    function resetAuthErr() {
        setUserState( prevState => ( {
          ...prevState,
          errMsg: ""
        } ) )
    }


    return (
        <UserContext.Provider
            value={ { 
                ...userState,
                getAllIssues,
                getUserIssues,
                getIssueById,
                getAllComments,
                editIssue,
                deleteIssue,
                signup,
                login,
                logout,
                addIssue,
                addComment,
                resetAuthErr,
                comments,
                deleteComment
            } }>
            { props.children }
        </UserContext.Provider>
    )
}

