import React, { useContext, useState } from 'react'
import LoginForm from "./LoginForm"
import { UserContext } from '../context/UserProvider'

const initInputs = { username: "", password: "" }

export default function Login() {
    const [ inputs, setInputs ] = useState( initInputs )
    const [ toggle, setToggle ] = useState( false )

    const { signup, login } = useContext( UserContext )

    function handleChange(e){
        const { name, value } = e.target
        setInputs( prevInputs => ( {
            ...prevInputs,
            [ name ]: value
        } ) )
    }
    
    function handleSignup(e){
        e.preventDefault()
        // can pass signup from context
        signup( inputs )
    }

    function handleLogin(e){
        e.preventDefault()
        // pass login from context
        login( inputs )
    }

    return (
        <div className='login-container'>
            <h1>Political Issues App</h1>
            <h4>Vote where it matters! In a web app lol</h4>
            { !toggle ?
                <>
                    <LoginForm 
                        handleChange={ handleChange }
                        handleSubmit={ handleSignup }
                        inputs={inputs}
                        btnText="Sign up"
                    />
                    <p onClick={() => setToggle( prev => !prev ) }>Already a member?</p>
                </>
                :
                <>
                    <LoginForm 
                        handleChange={ handleChange }
                        handleSubmit={ handleLogin }
                        inputs={ inputs }
                        btnText="Login"
                    />
                    <p onClick={() => setToggle( prev => !prev ) }>Not a member?</p>
                </>
            }
        </div>
    )
}