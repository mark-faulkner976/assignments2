import React, { useState } from 'react'
import axios from 'axios'
export const PublicContext = React.createContext()
const userAxios = axios.create()

    userAxios.interceptors.request.use( config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    } )

    export default function PublicContext( props ) {
        const [ publicIssues, setPublicIssues ] = useState( [] )

        function getPublicIssues() {
            userAxios.get("/api/issue")
                .then( res => {
                    
                })
        }
    }