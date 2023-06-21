import React, { useState, useContext } from 'react'
import LoginForm from "./LoginForm"
// import context later

const initInputs = { username: "", password: "" }

export default function Login() {
    const [ inputs, setInputs ] = useState( initInputs )
    const [ toggle, setToggle ] = useState( false )

    // const for useContext

    function handleChange( e ) {
        const { name, value } = e.target
        setInputs( prevInputs => ( {
            ...prevInputs,
            [ name ]: value
        } ) )
    }

    function handleSignup( e ) {
        e.preventDefault()
        // can pass signup from context

    }

    function handleLogin( e ) {
        e.preventDefault()
        // pass login from context

    }

    return (
        <div className='login-container'>
            <h1>Political Issues App</h1>
            <h4>Vote where it matters! In a web app lol</h4>
            { !toggle ?
                <>
                    <LoginForm 
                        handleChange={ handleChange }
                        handleSignup={ handleSignup }
                        inputs={ inputs }
                        btnText="Sign up"
                    />
                    <p onClick={() => setToggle( prev => !prev ) }>Already a member?</p>
                </>
                :
                <>
                    <LoginForm 
                        handleChange={ handleChange }
                        handleSignup={ handleLogin }
                        inputs={ inputs }
                        btnText="Login"
                    />
                    <p onClick={() => setToggle( prev => !prev ) }>Not a member?</p>
                </>
            }
        </div>
    )
}