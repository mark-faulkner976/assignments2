import React from "react";
import { useState } from "react";

export default function AddBountyForm( props ) {
    const initInputs = { 
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        living: props.living || "", 
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }

    const [ inputs, setInputs ] = useState( initInputs )

    function handleChange( e ) {
        const { name, value } = e.target
        setInputs( prevInputs => ( { ...prevInputs, [name]: value } ) )
    }

    function handleSubmit( e ) {
        e.preventDefault()
        if ( props.editToggle ) {
            props.editBounty( inputs, props._id )
            setInputs( initInputs )
            props.setEditToggle( prevState => !prevState )
        } else {
            props.submit( inputs )
            setInputs( initInputs )
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                name="firstName"
                value={ inputs.firstName }
                onChange={ handleChange }
                placeholder="First Name"
            />
            <input 
                type="text"
                name="lastName"
                value={ inputs.lastName }
                onChange={ handleChange }
                placeholder="Last Name"
            />
            <input 
                type="boolean"
                name="living"
                value={ inputs.living }
                onChange={ handleChange }
                placeholder="Alive? True or False"
            />
            <input 
                type="text"
                name="bountyAmount"
                value={ inputs.bountyAmount }
                onChange={ handleChange }
                placeholder="Bounty Amount"
            />
            <input 
                type="text"
                name="type"
                value={ inputs.type }
                onChange={ handleChange }
                placeholder="Affiliation"
            />
            <button>{ props.btnText }</button>
        </form>
    )
}