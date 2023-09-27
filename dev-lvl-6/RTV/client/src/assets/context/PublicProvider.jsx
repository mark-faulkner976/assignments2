import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
export const PublicContext = React.createContext()
const userAxios = axios.create()


    userAxios.interceptors.request.use( config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    } )

    export default function PublicProvider( props ) {
        const [ publicIssues, setPublicIssues ] = useState( [] )

        function getPublicIssues() {
            userAxios.get(`/api/issue`)
            .then(res => setPublicIssues(res.data))
                .catch(err => console.log(err.response.data.errMsg))
            }
            console.log( publicIssues )

        useEffect( () => {
            getPublicIssues()
        }, [] )

    
    // UPVOTE ISSUE
    function upVoteIssue( issueId ) {
        userAxios.put(`/api/issue/upvote/${ issueId }`)
        .then( res => setPublicIssues( prevState => prevState.map( issue => issueId !== issue._id ? issue : res.data ) ) )
        .catch( err => console.log( err.response.data.errMsg) )
    }
    
    // downvote issue
    function downVoteIssue( issueId ) {
        userAxios.put(`/api/issue/downvote/${ issueId }`)
        .then( res => setPublicIssues( prevState => prevState.map( issue => issueId !== issue._id ? issue : res.data ) ) )
        .catch( err => console.log( err.response.data.errMsg ) )
    }


            return (
                <PublicContext.Provider
                value={ 
                    { publicIssues,
                    getPublicIssues,
                    upVoteIssue,
                    downVoteIssue } } >
                    {props.children}
                </PublicContext.Provider>
            )
}

