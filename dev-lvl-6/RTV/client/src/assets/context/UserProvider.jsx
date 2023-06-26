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
        issues: [],
        comments: []
    }

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
    function getAllComments( issueId ) {
        console.log( issueId )
        userAxios.get(`/api/comment/${issueId}`)
            .then(res => setUserState(prevState => ({
                ...prevState,
                comments: res.data
                /*prevState.comments.map(comment => 
                    issueId === comment.issueId ? 
                    {...comment, comments: [...res.data]} : 
                    comment*/
                // 
            })))
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
        userAxios.post(`/api/comment/new`, newComment)
            .then(res => setUserState(prevState => ({
                ...prevState,
                comments: prevState.comments.map(comment => 
                    issueId === comment._id ? 
                    { comments: [...comment.comments, newComment ] } : 
                    comment
                )
            })))
            .catch(err => console.log(err.response.data.errMsg))
            return getAllComments( issueId )
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
            return getUserIssues()
    }
    // can save to state
    //UPVOTE ISSUE
    function upvoteIssue(issueId) {
        userAxios.put(`/api/issue/upvote/${issueId}`)
            .then(res => setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => 
                    issueId = issue._id ?
                    {
                        ...issue, 
                        upvotes: [...issue.upvotes, res.data]
                    } : 
                    issue
                )
                // upvotes: []
                    // make a vote model
                    // make a vote router
            })))
            .catch(err => console.log(err))
            return getAllIssues()
        }

    //DOWNVOTE ISSUE
    function downvoteIssue(issueId) {
        userAxios.put(`/api/issue/downvote/${issueId}`)
            .then(res => setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => 
                    issueId = issue._id ?
                    {
                        ...issue, 
                        downvotes: [...issue.downvotes, res.data]
                    } : 
                    issue
                )
            })))
            .catch(err => console.log(err))
            return getAllIssues()
    }

    //DELETE ISSUE
    function deleteIssue( issueId ) {
        userAxios.delete( `/api/issue/${issueId}` )
            .then(res => setUserState( prevState => ({
                ...prevState,
                issues: prevState.issues.filter( issue => issue._id !== issueId )
            } ) ) )
            .catch( err => console.log( err ) )
            return getUserIssues()
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
                upvoteIssue,
                downvoteIssue,
                resetAuthErr
            } }>
            { props.children }
        </UserContext.Provider>
    )
}

