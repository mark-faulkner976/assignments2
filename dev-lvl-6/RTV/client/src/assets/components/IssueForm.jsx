import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'



export default function IssueForm( props ) {
    const initInputs = {
        title: props.title || "",
        description: props.description || "",
        imgUrl: props.imgUrl || ""
    }

    const [ inputs, setInputs ] = useState( initInputs )
    const { addIssue } = props
    
    function handleChange( e ) {
        const { name, value } = e.target
        setInputs( prevInputs => ( { 
            ...prevInputs,
            [ name ]: value
        } ) )
    }

    function handleSubmit( e ) {
        e.preventDefault()
        addIssue( inputs )
        setInputs( initInputs )
    }

    const { title, description, imgUrl } = inputs
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                name="title"
                value={ title }
                onChange={handleChange}
                placeholder="Title"/>
            <input 
                type="text"
                name="description"
                value={ description }
                onChange={handleChange}
                placeholder="Describe your issue!"/>
            <input 
                type="text"
                name="imgUrl"
                value={ imgUrl }
                onChange={handleChange}
                placeholder="Image Url"/>
            <button>Add Issue</button>
        </form>
    )
}