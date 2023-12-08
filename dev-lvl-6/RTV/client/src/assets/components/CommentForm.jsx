import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function CommentForm( props ) {
    const { issueId } = props
    const initInputs = { comment: "", issueId }
    const [ inputs, setInputs ] = useState( initInputs )
    const { addComment } = useContext( UserContext )

    function handleChange( e ) {
        const { name, value } = e.target
        setInputs( prevInputs => ( { 
            ...prevInputs,
            [ name ]: value
        } ) )
        console.log( inputs )
    }

    function handleSubmit( e ) {
        e.preventDefault()
        addComment( inputs, issueId )
        setInputs( initInputs )
    }

    const { comment } = inputs

    return (
        <form onSubmit={ handleSubmit }>
            <input
            placeholder="Comment"
            type="text"
            name="comment"
            value={ comment }
            onChange={ handleChange }
            />
            <button>Add Comment</button>
        </form>
    )
}