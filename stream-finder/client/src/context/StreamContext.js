import React, { createContext, useState } from 'react'
import axios from 'axios'

const StreamingContext = ({ children }) => {

    const [ searchParams, setSearchParams ] = useState( {
        title: '',
        genre: '',
        type: '',
        output_language: '' 
    } )
    const [ searchResults, setSearchResults ] = useState([])

    const searchStreaming = async () => {
        try {
            const response = await axios.get( 'https://streaming-availability.p.rapidapi.com/v2/search/basic', {
                params: searchParams,
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
                  },
            } )
            setSearchResults( response.data ) 
        } catch ( error ) {
            console.error( 'Error occurred while searching: ', error )
        }
    }

    const streamingContextValue = {
        searchParams,
        setSearchParams,
        searchStreaming,
        searchResults,
    }

    return (
        <StreamingContext.Provider value={ streamingContextValue }>
            { children }
        </StreamingContext.Provider>
    )
}

export { StreamingContext, StreamingProvider }