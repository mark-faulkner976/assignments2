import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function CommentForm( props ) {
    const initInputs = { comment: props.title || "" }
    const [ inputs, setInputs ] = useState( initInputs )
    const { addComment } = useContext( UserContext )

    function handleChange( e ) {
        const { name, value } = e.target
        setInputs( prevInputs => ( { 
            ...prevInputs,
            [ name ]: value
        } ) )
    }

    function handleSubmit( e ) {
        e.preventDefault()
        addComment( inputs )
        setInputs( initInputs )
    }

    const { commentDescription } = inputs



    return (
        <form onSubmit={ handleSubmit }>
            <input
            placeholder="Comment"
            type="text"
            name="commentDescription"
            value={ commentDescription }
            onChange={ handleChange }
            />
            <button>Add Comment</button>
        </form>
    )
}